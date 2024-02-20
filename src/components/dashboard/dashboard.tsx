'use client';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
    Button,
    Icon,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';
import {
    addItem,
    deleteItem,
    getAllItems,
    getItem,
    updateItem,
} from '@/server/controllers/shop/itemController';
import { Item } from '@/server/models/item';
import { Title } from '../../components/utils/constants';
import {
    RiAddCircleFill,
    RiDeleteBin7Line,
    RiEditBoxLine,
} from '@remixicon/react';
import { usePathname, useRouter } from 'next/navigation';

interface ButtonProps {
    handleButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface ItemProps {
    items: Item[];
}

const ButtonProduct = ({ handleButtonClick }: ButtonProps) => {
    return (
        <Button
            variant="primary"
            className="flex justify-left mb-7"
            icon={RiAddCircleFill}
            onClick={handleButtonClick}
        >
            Dodaj produkt
        </Button>
    );
};

const TableHeadComponent = () => {
    return (
        <TableHead className="border bg-tremor-background-subtle">
            <TableRow>
                {Object.values(Title).map((item) => (
                    <TableHeaderCell key={item}>{item}</TableHeaderCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

const TableBodyComponent = ({ items }: ItemProps) => {
    return (
        <TableBody className="border">
            {items ? (
                items.map((item: Item, id) => (
                    <TableRow key={id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.visible}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>
                            {item.priceHistory.map((entry, id) => (
                                <div key={id}>
                                    {' '}
                                    {entry.date.toLocaleDateString()}:{' '}
                                    {entry.price}
                                </div>
                            ))}
                        </TableCell>
                        <TableCell>{item.photos}</TableCell>
                        <TableCell>
                            <Icon icon={RiEditBoxLine} tooltip="Edytuj" />
                            <Icon icon={RiDeleteBin7Line} tooltip="Usuń" />
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <div>Brak produktów do wyświetlenia.</div>
            )}
        </TableBody>
    );
};
{
}

export const Dashboard: React.FC = () => {
    const router = useRouter();

    const items: Item[] = [
        {
            name: 'deska',
            description: 'deska',
            price: 250,
            quantity: 20,
            visible: 'tak',
            category: 'deski',
            priceHistory: [
                {
                    date: new Date(),
                    price: 300,
                },
                {
                    date: new Date(),
                    price: 200,
                },
            ],
            photos: ['-'],
        },
        {
            name: 'kółka',
            description: 'kółka',
            price: 50,
            quantity: 100,
            visible: 'tak',
            category: 'deski',
            priceHistory: [
                {
                    date: new Date(),
                    price: 50,
                },
            ],
            photos: ['-'],
        },
    ];

    const handleButtonClick = () => {
        router.push('/addForm');
    };
    // const fetchItems = async () => {
    //     try {
    //         const items = await getAllItems();
    //         setItems(items);
    //     } catch (error) {
    //         throw error;
    //     }
    // };

    // useEffect(() => {
    //     fetchItems();
    // }, []);

    // const handleAddItem = async (item: Item) => {
    //     try {
    //         const newItem = await addItem(item);
    //     } catch (error) {
    //         throw error;
    //     }
    // };

    // const handleUpdateItem = async (id: string, name?: string) => {
    //     try {
    //         const itemToUpdate = await getItem(id);
    //         const updatedItem = await updateItem(id, {
    //             name: name || itemToUpdate.name,
    //         });
    //     } catch (error) {
    //         throw error;
    //     }
    // };
    // const handleDeleteItem = async (id: string) => {
    //     try {
    //         const deletedItem = await deleteItem(id);
    //     } catch (error) {
    //         throw error;
    //     }
    // };

    return (
        <div className="mx-auto w-full mt-20 pl-20 pr-20">
            <ButtonProduct handleButtonClick={handleButtonClick} />
            <Table>
                <TableHeadComponent />
                <TableBodyComponent items={items} />
            </Table>
        </div>
    );
};
