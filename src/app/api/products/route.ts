import { NextResponse } from 'next/server';

import { getAllItems } from '@/controllers/itemController';

export const GET = async () => {
  try {
    const response = await getAllItems();

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};
