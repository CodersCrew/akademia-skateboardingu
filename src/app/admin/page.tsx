'use client';
import { Table } from '@tremor/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ButtonProduct, TableBody, TableHead } from '@/components/admin';

const Admin = () => {
  const { push } = useRouter();

  const handleButtonClick = () => {
    push('/addForm');
  };
  const items = [
    {
      name: 'deska',
      description: 'deski',
      price: 399,
      quantity: 150,
      visible: 'Tak',
      category: 'deski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kółka',
      description: 'kółka',
      price: 299,
      quantity: 250,
      visible: 'Tak',
      category: 'kółka',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 70,
      visible: 'Nie',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 30,
      visible: 'Nie',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 25,
      visible: 'Tak',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 35,
      visible: 'Tak',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 0,
      visible: 'Nie',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 35,
      visible: 'Tak',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 50,
      visible: 'Tak',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 15,
      visible: 'Nie',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 20,
      visible: 'Nie',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 80,
      visible: 'Tak',
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    }
  ];

  return (
    <div className="mx-auto mt-20 w-full pl-20 pr-20">
      <ButtonProduct handleButtonClick={handleButtonClick} />
      <Table>
        <TableHead />
        <TableBody items={items} />
      </Table>
    </div>
  );
};

export default Admin;
