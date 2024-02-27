import { postEmail } from '@/server/controllers/emailController';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    try {
        const { response } = await postEmail(data);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        );
    }
}
