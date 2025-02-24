import { NextRequest, NextResponse } from "next/server";

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

    const response = await fetch(
      "http://smarter.argenpesos.com.ar:30002/external/BotonArrepentimiento",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log("Respuesta de la API:", data);

    if (!response.ok) {
      const errorMessage =
        data.ResponseException?.ExceptionMessage || data.message || "Error en la solicitud";
      return NextResponse.json(
        { error: errorMessage },
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
