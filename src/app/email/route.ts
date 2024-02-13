import { sendEmail } from '@/server/controllers/emailController';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    try {
        const response = await sendEmail(data);
        return NextResponse.json(response[0]);
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 },
        );
    }
}
