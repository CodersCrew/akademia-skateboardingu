import { NextResponse } from 'next/server';

import { getAllItems } from '@/controllers/itemController';

export const GET = async () => {
  try {
    const response = await getAllItems();

    NextResponse.json(response);
  } catch (error) {
    NextResponse.json(error);
  }
};
