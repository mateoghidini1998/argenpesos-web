import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Hacer la llamada a la API externa
    const response = await fetch('http://smarter.argenpesos.com.ar:30002/External/consultacupo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data); 
  } catch (error) {
    console.error('Error al consultar cupo:', error);
    return NextResponse.json({ error: 'Error al consultar cupo' }, { status: 500 });
  }
}
