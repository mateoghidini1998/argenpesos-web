import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const apiKey = process.env.TIENDANUBE_TOKEN;
    const prefix = process.env.TIENDANUBE_PREFIX;
    const user_id = process.env.TIENDANUBE_USER_ID;
    const pageName = process.env.TIENDANUBE_PAGE_NAME;
    const agent = process.env.TIENDANUBE_AGENT;
    const url = `${prefix}/${user_id}/products`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authentication': `bearer ${apiKey}`,
                'User-Agent': `${pageName} ${agent}`
            }
        });
        
        const data = await response.json();
        const publishedProducts = data.filter((product: any) => product.published === true);
    
        return NextResponse.json(publishedProducts);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
}
