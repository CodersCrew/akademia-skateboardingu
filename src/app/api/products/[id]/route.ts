import { type NextRequest, NextResponse } from 'next/server';

import {
  addItem,
  deleteItem,
  getItem,
  updateItem
} from '@/controllers/itemController';

export const GET = async (
  _req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await getItem(params.id);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const response = await addItem(data);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const data = await req.json();
    const response = await updateItem(params.id, data);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const DELETE = async (
  _req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await deleteItem(params.id);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};
