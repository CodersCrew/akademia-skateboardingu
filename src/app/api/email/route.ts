import { NextRequest, NextResponse } from 'next/server';

import { postEmail } from '@/controllers/emailController';

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const response = await postEmail(data);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};
