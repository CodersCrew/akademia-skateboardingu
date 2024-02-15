import React, { useEffect, useState } from 'react';
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
    RiDeleteBin6Fill,
    RiDeleteBin7Fill,
    RiDeleteBin7Line,
    RiEditBoxLine,
    RiPulseFill,
    RiSearch2Line,
} from '@remixicon/react';

type ButtonProps = {
    handleItem: (id: string, name?: string) => void;
    id: string;
    name?: string;
};

type ItemProps = {
    items: Item[];
};

// type ButtonAddProps = {
//     handleItem: (item: { name: string; price: number }) => void;
// };

// const ButtonUpdate = ({ handleItem, id, name }: ButtonProps) => {
//     return (
//         <div className="flex justify-center">
//             <Button onClick={() => handleItem(id, name)} variant="secondary">
//                 Update
//             </Button>
//         </div>
//     );
// };

// const ButtonDelete= ({ handleItem, id }: ButtonProps) => {
//     return (
//         <div className="flex justify-center">
//             <Button onClick={() => handleItem(id)} variant="secondary">
//                 Delete
//             </Button>
//         </div>
//     );
// };

// const ButtonAddItem= ({ handleItem }: ButtonProps) => {
//     const handleChange = {};
//     return (
//         <div className="flex justify-center mt-2">
//             <TextInput className="mx-auto max-w-xs" onChange={handleChange} />
//             <Button onClick={() => handleItem} variant="primary">
//                 Add Item
//             </Button>
//         </div>
//     );
// };

const ButtonProduct = () => {
    return (
        <Button
            variant="primary"
            className="flex justify-left mb-7"
            icon={RiAddCircleFill}
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
                        <TableCell>{item.added.toLocaleDateString()}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.isAvailable}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        {item.priceHistory.map((entry, id) => (
                            <TableCell key={id}>
                                {entry.date.toLocaleDateString()}: {entry.price}
                            </TableCell>
                        ))}
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
    // const [items, setItems] = useState<Item[]>([]);

    const items: Item[] = [
        {
            name: 'board',
            description: 'board',
            added: new Date(),
            price: 250,
            quantity: 20,
            isAvailable: 'available',
            category: 'boards',
            priceHistory: [
                {
                    date: new Date(),
                    price: 300,
                },
            ],
            photos: ['-'],
        },
        {
            name: 'wheels',
            description: 'skate',
            added: new Date(),
            price: 50,
            quantity: 100,
            isAvailable: 'available',
            category: 'boards',
            priceHistory: [
                {
                    date: new Date(),
                    price: 50,
                },
            ],
            photos: ['-'],
        },
    ];

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
            <ButtonProduct />
            {/* <Table className="mx-auto w-full max-w-md"> */}
            <Table>
                <TableHeadComponent />
                <TableBodyComponent items={items} />
            </Table>
        </div>
    );
};
