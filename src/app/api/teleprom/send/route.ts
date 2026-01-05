import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const TELEPROM_API_BASE_URL = process.env.TELEPROM_API_BASE_URL;
    const TELEPROM_SOURCE_ID = process.env.TELEPROM_SOURCE_ID;
    const TELEPROM_HSM_ID = process.env.TELEPROM_HSM_ID;

    if (!TELEPROM_API_BASE_URL) {
        return NextResponse.json(
            { error: "Missing TELEPROM environment variables" },
            { status: 500 }
        );
    }

    const baseUrl = TELEPROM_API_BASE_URL.replace(/\/$/, "");
    const url = `${baseUrl}/api/Integration/MessageWpp`;

    // Get Bearer token from our internal auth route
    const origin = req.nextUrl.origin;
    const authUrl = `${origin}/api/teleprom/auth`;

    try {
        const authResponse = await fetch(authUrl, { cache: "no-store" });
        if (!authResponse.ok) {
            const details = await authResponse.json().catch(() => ({} as any));
            return NextResponse.json(
                { error: "Failed to obtain auth token", details },
                { status: 500 }
            );
        }
        const { token } = await authResponse.json();
        if (!token) {
            return NextResponse.json(
                { error: "Auth token missing in response" },
                { status: 500 }
            );
        }

        const body = await req.json().catch(() => null as any);

        // Allow two input shapes:
        // 1) Full pass-through: { messages: [...] }
        // 2) Minimal: { nombre, monto, areaCode, telefono } -> build messages using server env
        let finalBody = body;
        if (!body || !Array.isArray(body.messages)) {
            if (!TELEPROM_SOURCE_ID || !TELEPROM_HSM_ID) {
                return NextResponse.json(
                    { error: "Missing TELEPROM_SOURCE_ID or TELEPROM_HSM_ID" },
                    { status: 500 }
                );
            }
            const { nombre, monto, areaCode, telefono } = body || {};
            const dstNumber = Number(`549${areaCode ?? ""}${telefono ?? ""}`);
            if (!nombre || !dstNumber || Number.isNaN(dstNumber)) {
                return NextResponse.json(
                    { error: "Invalid body. Expected { nombre, monto, areaCode, telefono }" },
                    { status: 400 }
                );
            }
            finalBody = {
                messages: [
                    {
                        sourceId: Number(TELEPROM_SOURCE_ID),
                        hsmId: Number(TELEPROM_HSM_ID),
                        destinations: [
                            {
                                trackingNumber: Date.now(),
                                dstNumber,
                                hsmParams: [String(nombre), String(monto ?? "")],
                            },
                        ],
                    },
                ],
            };
        }

        const sendResponse = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(finalBody),
            cache: "no-store",
        });

        const payload = await sendResponse.json().catch(() => ({} as any));

        if (!sendResponse.ok) {
            return NextResponse.json(
                { error: "MessageWpp request failed", status: sendResponse.status, details: payload },
                { status: sendResponse.status }
            );
        }

        return NextResponse.json(payload);
    } catch (error: unknown) {
        return NextResponse.json(
            { error: "Unexpected error during MessageWpp request" },
            { status: 500 }
        );
    }
}

