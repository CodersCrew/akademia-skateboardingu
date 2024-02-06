import { sendEmail } from '@/server/controllers/emailController';
import { stat } from 'fs';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    const data2 = { ...data, from: 'abc' };
    let res;
    try {
        const response = await sendEmail(data2);
        res = response[0];
    } catch (error) {
        res = { error: 'Internal Server Error', status: 500 };
    }

    return NextResponse.json(res);
}
