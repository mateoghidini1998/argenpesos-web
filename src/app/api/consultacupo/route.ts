import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const baseUrl = process.env.NEXT_PUBLIC_SMARTER_BASE_URL;
    const endpoint = process.env.NEXT_PUBLIC_SMARTER_ENDPOINT;

    // Construir la URL
    const url = `${baseUrl}${endpoint}`;
    
    // Mostrar la URL en consola para depuración
    console.log("URL generada:", url);

    // Hacer la llamada a la API externa
    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    
    // Mostrar la respuesta en consola (opcional)
    console.log("Respuesta de la API:", response);

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al consultar cupo:", error);

    return NextResponse.json(
      { error: "Error al consultar cupo" },
      { status: 500 }
    );
  }
}

