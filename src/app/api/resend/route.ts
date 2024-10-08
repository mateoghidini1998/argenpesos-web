import { NextResponse } from 'next/server';
import sendEmail from '@/utils/Resend';

export async function POST(request: Request) {
  try {
    const { formData, formType } = await request.json();

    const result = await sendEmail(formData, formType);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error en la API de envío de correo:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
