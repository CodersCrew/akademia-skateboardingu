import { sendEmail } from '@/server/controllers/emailController';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    let res;
    try {
        const response = await sendEmail(data);
        res = response[0];
    } catch (error) {
        res = { error: 'Internal Server Error', status: 500 };
    }

    return NextResponse.json(res);
}
