import * as React from 'react';
import { Item, PriceHistory } from '@/server/models/item';
import { TableBody, TableCell, TableRow } from '@tremor/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export interface ItemProps {
    items: Item[];
}
export interface Mapping {
    item: string;
    entry: string;
    id: number;
}

const ActionIcons = () => {
    return (
        <div className="flex items-center">
            <FaEdit className="mr-3 cursor-pointer " title="Edytuj" />
            <FaTrash className="mr-3 cursor-pointer" title="Usuń" />
        </div>
    );
};

export const renderPriceHistory = (priceHistory: PriceHistory[]) => {
    return priceHistory.map((entry, id) => (
        <div key={id}>
            {' '}
            {entry.date.toLocaleDateString()}: {entry.price}
        </div>
    ));
};

export const TableBodyComponent = ({ items }: ItemProps) => {
    const renderTableCells = (item: Item) => {
        return Object.values(item).map((value, index) => (
            <TableCell key={index}>
                {value === 'priceHistory' ? renderPriceHistory(value) : value}
            </TableCell>
        ));
    };
    return (
        <TableBody className="border">
            {items ? (
                items.map((item: Item, id) => (
                    <TableRow key={id}>
                        {renderTableCells(item)}
                        <TableCell>
                            <ActionIcons />
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <div>Brak produktów do wyświetlenia.</div>
            )}
        </TableBody>
    );
};
