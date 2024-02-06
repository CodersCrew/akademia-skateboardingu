import { NextApiResponse } from 'next';

export type ControllerError = { status: number; message?: string | undefined };

export function handleControllerError(error: unknown, res: NextApiResponse) {
    if (error && typeof error === 'object' && 'status' in error) {
        const controllerError = error as ControllerError;
        const message =
            controllerError.status === 500
                ? 'Internal Server Error'
                : controllerError.message || 'Unknown Error';
        res.status(controllerError.status).json({ message });
    }
}
