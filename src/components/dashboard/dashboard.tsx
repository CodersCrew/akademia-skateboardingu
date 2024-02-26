'use client';
import React from 'react';
import { Table } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { ItemProps, TableBodyComponent } from './TableBody';
import { TableHeadComponent } from './TableHead';
import { ButtonProduct } from './ButtonProduct';

export const Dashboard = ({ items }: ItemProps) => {
    const { push } = useRouter();

    const handleButtonClick = () => {
        push('/addForm');
    };

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
