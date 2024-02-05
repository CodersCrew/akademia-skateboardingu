import { NextApiRequest, NextApiResponse } from 'next';
const {
    addItem,
    updateItem,
    getAllItems,
    getItem,
    deleteItem,
} = require('../../../server/controllers/itemControllers');
const { itemModel } = require('../../../server/models/item');

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
            } catch (error: any) {
                if (error.status === 500) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(error.status).json({
                        message: error.message,
                    });
                }
            }
            break;

        case METHOD_GET:
            try {
                const data = getItem(itemId);
                res.status(200).json(data);
            } catch (error: any) {
                if (error.status === 500) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(error.status).json({
                        message: error.message,
                    });
                }
            }
            break;

        case METHOD_PUT:
            try {
                const newData = req.body;
                const data = updateItem(itemId, newData);
                res.status(200).json(data);
            } catch (error: any) {
                if (error.status === 500) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(error.status).json({
                        message: error.message,
                    });
                }
            }
            break;

        case METHOD_DELETE:
            try {
                const data = deleteItem(itemId);
                res.status(200).json(data);
            } catch (error: any) {
                if (error.status === 500) {
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(error.status).json({
                        message: error.message,
                    });
                }
            }
            break;

        default:
            res.status(405).json({ error: 'Method Not Allowed' });
    }
}
