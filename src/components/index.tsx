import React, { useState } from 'react';
import { Button, Card, List, ListItem, Title } from '@tremor/react';

const Dashboard: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);

    const handleItemSubmit = (item: any) => {
        const newItem = { id: Date.now().toString(), ...item };
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleDeleteItem = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleUpdateItem = (id: string, newName: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, name: newName } : item,
            ),
        );
    };

    return (
        <>
            <Card className="max-w-xs">
                <Title>Store Admin Dashboard</Title>
                <List>
                    {items.map((item) => (
                        <ListItem key={item.id}>
                            {item.name} - {item.price}{' '}
                            <Button
                                onClick={() =>
                                    handleUpdateItem(item.id, item.name)
                                }
                            >
                                Update
                            </Button>{' '}
                            <Button onClick={() => handleDeleteItem(item.id)}>
                                Delete
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </>
    );
};

export default Dashboard;
