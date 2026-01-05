import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const TELEPROM_USERNAME = process.env.TELEPROM_USERNAME;
    const TELEPROM_PASSWORD = process.env.TELEPROM_PASSWORD;
    const TELEPROM_API_BASE_URL = process.env.TELEPROM_API_BASE_URL;

    if (!TELEPROM_USERNAME || !TELEPROM_PASSWORD || !TELEPROM_API_BASE_URL) {
        return NextResponse.json(
            { error: "Missing TELEPROM environment variables" },
            { status: 500 }
        );
    }

    const baseUrl = TELEPROM_API_BASE_URL.replace(/\/$/, "");

    try {
        const authResponse = await fetch(`${baseUrl}/Auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: TELEPROM_USERNAME,
                password: TELEPROM_PASSWORD,
            }),
            cache: "no-store",
        });

        const payload = await authResponse.json().catch(() => ({} as any));

        if (!authResponse.ok) {
            return NextResponse.json(
                {
                    error: "Auth request failed",
                    status: authResponse.status,
                    details: payload,
                },
                { status: authResponse.status }
            );
        }

        const { token, expires } = payload ?? {};
        return NextResponse.json({ token, expires });
    } catch (error: unknown) {
        return NextResponse.json(
            { error: "Unexpected error during Auth request" },
            { status: 500 }
        );
    }
}