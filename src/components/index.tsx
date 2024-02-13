import React, { useEffect, useState } from 'react';
import { Button, Card, List, ListItem, TextInput, Title } from '@tremor/react';
import {
    addItem,
    deleteItem,
    getAllItems,
    getItem,
    updateItem,
} from '@/server/controllers/shop/itemController';
import { Item } from '@/server/models/item';

type ButtonProps = {
    handleItem: (id: string, name?: string) => void;
    id: string;
    name?: string;
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

export const Dashboard: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const items: Item[] = await getAllItems();
                setItems(items);
            } catch (error) {
                throw error;
            }
        };
        fetchItems();
    }, []);
    const handleAddItem = async (item: Item) => {
        try {
            const newItem = await addItem(item);
        } catch (error) {
            throw error;
        }
    };

    const handleUpdateItem = async (id: string, name?: string) => {
        try {
            const itemToUpdate = await getItem(id);
            const updatedItem = await updateItem(id, {
                name: name || itemToUpdate.name,
            });
        } catch (error) {
            throw error;
        }
    };
    const handleDeleteItem = async (id: string) => {
        try {
            const deletedItem = await deleteItem(id);
        } catch (error) {
            throw error;
        }
    };

    return (
        <>
            <Card className="mx-auto max-w-md">
                <Title className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                    Store Admin Dashboard
                </Title>
                {items ? (
                    items.map((item: Item, id) => (
                        <ListItem key={id}>
                            {item.name} - {item.price}{' '}
                            <ButtonUpdate
                                handleItem={handleUpdateItem}
                                id={id} // needs to be a string
                                name={item.name}
                            />
                            <ButtonDelete
                                handleItem={handleDeleteItem}
                                id={id} // needs to be a string
                            />
                        </ListItem>
                    ))
                ) : (
                    <div>No items to display.</div>
                )}
                <ButtonAddItem handleItem={handleAddItem} />
            </Card>
        </>
    );
};
