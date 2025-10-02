import { NextRequest, NextResponse } from "next/server";

function extractExternalError(raw: string): string | null {
  if (!raw) return null;
  try {
    const lastJsonStart = raw.lastIndexOf("{");
    const lastJsonEnd = raw.lastIndexOf("}");
    if (lastJsonStart !== -1 && lastJsonEnd !== -1 && lastJsonEnd > lastJsonStart) {
      const jsonSlice = raw.slice(lastJsonStart, lastJsonEnd + 1);
      const parsed = JSON.parse(jsonSlice);
      const fromJson = parsed?.ResponseException?.ExceptionMessage || parsed?.Message;
      if (fromJson) return String(fromJson);
    }
  } catch (_) {
    // ignore
  }
  const lineMatch = raw.split(/\r?\n/).find((l) => l.toLowerCase().includes("exception"))
    || raw.split(/\r?\n/)[0];
  if (lineMatch) {
    const afterColon = lineMatch.split(":").slice(1).join(":").trim();
    return afterColon || lineMatch.trim();
  }
  return null;
}

function normalizeMessage(message: string): string {
  const str = String(message || "").trim();
  const lower = str.toLowerCase();
  if (lower.includes("no se encontr")) {
    const dot = str.indexOf(".");
    return dot > 0 ? str.slice(0, dot).trim() : str;
  }
  return str;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Aseguramos la estructura correcta del JSON
    const payload = {
      Parametros: { 
        Nombre: body.nombre || "",
        Apellido: body.apellido || "",
        Documento: body.DNI || "",
        Celular: body.celular || "",
        Email: body.mail || "",
        ResponsableAlta: body.ResponsableAlta ?? "",
        Ticket: body.Ticket ?? "1DF3343F-B1A4-46DE-B831-D39A30C742AC",
      }
    };

    console.log("Payload final enviado a la API externa:\n", JSON.stringify(payload, null, 2));
    const baseUrl = process.env.NEXT_PUBLIC_SMARTER_BASE_URL
    const response = await fetch(
      `${baseUrl}external/BotonArrepentimiento`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    let data: any = null;
    try {
      const raw = await response.clone().text();
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = { raw };
      }
    } catch (e) {
      console.warn("No se pudo leer el cuerpo de la respuesta externa", e);
      data = {};
    }
    console.log("Respuesta de la API:", data);

    if (!response.ok) {
      const extracted = typeof data?.raw === 'string' ? extractExternalError(data.raw) : null;
      const preferred = extracted || data.ResponseException?.ExceptionMessage || data.message || data.raw || "Error en la solicitud";
      const errorMessage = normalizeMessage(preferred);
      return NextResponse.json(
        { error: errorMessage, externalStatus: response.status },
        { status: response.status }
      );
    }
    

    return NextResponse.json({
      status: "success",
      message: "Solicitud enviada correctamente",
      numero: data.result?.entity?.numero || "Número no disponible",
    });

  } catch (error) {
    console.error("Error en el endpoint:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
