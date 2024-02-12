import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerError } from '@/types/ControllerError';
import { NextResponse } from 'next/server';
import {
    addItem,
    updateItem,
    getItem,
    deleteItem,
} from '../../server/controllers/shop/itemController';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const itemId = req.query.itemId as string;

    switch (req.method) {
        case METHOD_POST:
            try {
                const data = addItem(req.body);

                res.status(201).json(data);
            } catch (error) {
                const { message, status } = error as ControllerError;
                NextResponse.json(
                    { message: message || 'Internal Server Error' },
                    { status: status || 500 },
                );
            }
            break;

        case METHOD_GET:
            try {
                const data = getItem(itemId);

                res.status(200).json(data);
            } catch (error) {
                const { message, status } = error as ControllerError;
                NextResponse.json(
                    { message: message || 'Internal Server Error' },
                    { status: status || 500 },
                );
            }
            break;

        case METHOD_PUT:
            try {
                const newData = req.body;
                const data = updateItem(itemId, newData);

                res.status(200).json(data);
            } catch (error) {
                const { message, status } = error as ControllerError;
                NextResponse.json(
                    { message: message || 'Internal Server Error' },
                    { status: status || 500 },
                );
            }
            break;

        case METHOD_DELETE:
            try {
                const data = deleteItem(itemId);

                res.status(200).json(data);
            } catch (error) {
                const { message, status } = error as ControllerError;
                NextResponse.json(
                    { message: message || 'Internal Server Error' },
                    { status: status || 500 },
                );
            }
            break;

        default:
            res.status(405).json({ error: 'Method Not Allowed' });
    }
}
