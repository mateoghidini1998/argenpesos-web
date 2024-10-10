import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const dni = searchParams.get('documento');
  const sexo = searchParams.get('sexo');
  const ticket = searchParams.get('ticket');

  try {
    const response = await fetch(
      `http://smarter.argenpesos.com.ar:30002/External/validacionidentidad?ticket=${ticket}&documento=${dni}&sexo=${sexo}`
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al validar identidad:', error);
    return NextResponse.json({ error: 'Error al validar identidad' }, { status: 500 });
  }
}
