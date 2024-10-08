import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const param = searchParams.get('param');
    const apiKey = process.env.CUPONSTAR_API_KEY;
    const prefix = process.env.CUPONSTAR_URL;
    const microsite_id = process.env.CUPONSTAR_MICROSITE_ID;
    const affiliate = process.env.CUPONSTAR_AFFILIATE;
    const url = `${prefix}api/cupones?key=${apiKey}&micrositio_id=${microsite_id}&codigo_afiliado=${affiliate}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
    
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
}
