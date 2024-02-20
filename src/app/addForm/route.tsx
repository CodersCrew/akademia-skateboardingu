import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerError } from '@/types/ControllerError';
import { NextResponse } from 'next/server';
import {
    addItem,
    updateItem,
    getItem,
    deleteItem,
} from '../../server/controllers/shop/itemController';
import * as constants from '../../utils/constants';
import { AddForm } from '@/components/addForm/addForm';

export default async function handler(req: NextApiRequest, res: NextResponse) {
    const itemId = req.query.itemId as string;

    switch (req.method) {
        case constants.METHOD_POST:
            try {
                const data = addItem(req.body);

                NextResponse.json({ data: data }, { status: 201 });
            } catch (error) {
                const { message, status } = error as ControllerError;
                NextResponse.json(
                    { message: message || 'Internal Server Error' },
                    { status: status || 500 },
                );
            }
            break;

        case constants.METHOD_GET:
            try {
                const data = getItem(itemId);

                NextResponse.json({ data: data }, { status: 200 });
            } catch (error) {
                const { message, status } = error as ControllerError;
                NextResponse.json(
                    { message: message || 'Internal Server Error' },
                    { status: status || 500 },
                );
            }
            break;

        case constants.METHOD_PUT:
            try {
                const newData = req.body;
                const data = updateItem(itemId, newData);

                NextResponse.json({ data: data }, { status: 200 });
            } catch (error) {
                const { message, status } = error as ControllerError;
                NextResponse.json(
                    { message: message || 'Internal Server Error' },
                    { status: status || 500 },
                );
            }
            break;

        case constants.METHOD_DELETE:
            try {
                const data = deleteItem(itemId);

                NextResponse.json({ data: data }, { status: 200 });
            } catch (error) {
                const { message, status } = error as ControllerError;
                NextResponse.json(
                    { message: message || 'Internal Server Error' },
                    { status: status || 500 },
                );
            }
            break;

        default:
            NextResponse.json({
                message: 'Method Not Allowed',
                status: 405,
            });
    }
}
