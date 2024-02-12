import React, { useState } from 'react';
import { Button, Card, List, ListItem, Title } from '@tremor/react';

type ButtonProps = {
    handleItem: (id: string, name?: string) => void;
    id: string;
    name?: string;
};

type ButtonAddProps = {
    handleItem: (item: { name: string; price: number }) => void;
};

const ButtonUpdate: React.FC<ButtonProps> = ({ handleItem, id, name }) => {
    return (
        <div className="flex justify-center">
            <Button onClick={() => handleItem(id, name)} variant="secondary">
                Update
            </Button>
        </div>
    );
};

const ButtonDelete: React.FC<ButtonProps> = ({ handleItem, id }) => {
    return (
        <div className="flex justify-center">
            <Button onClick={() => handleItem(id)} variant="secondary">
                Delete
            </Button>
        </div>
    );
};

const ButtonAddItem: React.FC<ButtonAddProps> = ({ handleItem }) => {
    const handleClick = () => {
        const itemName = prompt('Enter item name:');
        const itemPrice = prompt('Enter item price:');

        if (itemName && itemPrice) {
            const newItem = { name: itemName, price: parseFloat(itemPrice) };
            handleItem(newItem);
        }
    };

    return (
        <div className="flex justify-center mt-2">
            <Button onClick={handleClick} variant="primary">
                Add Item
            </Button>
        </div>
    );
};

const Dashboard: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);

    const handleAddItem = (item: { name: string; price?: number }) => {
        const newItem = { id: Date.now().toString(), ...item };
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleUpdateItem = (id: string, name?: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, name } : item,
            ),
        );
    };
    const handleDeleteItem = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <>
            <Card className="mx-auto max-w-md">
                <Title className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                    Store Admin Dashboard
                </Title>
                <List className="mt-2">
                    {items.map((item) => (
                        <ListItem key={item.id}>
                            {item.name} - {item.price}{' '}
                            <ButtonUpdate
                                handleItem={handleUpdateItem}
                                id={item.id}
                                name={item.name}
                            />
                            <ButtonDelete
                                handleItem={handleDeleteItem}
                                id={item.id}
                            />
                        </ListItem>
                    ))}
                </List>
                <ButtonAddItem handleItem={handleAddItem} />
            </Card>
        </>
    );
};

export default Dashboard;
