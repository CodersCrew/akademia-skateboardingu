'use client';
import { Table } from '@tremor/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ButtonProduct, TableBody, TableHead } from '@/components/admin';

export default function Admin() {
  const { push } = useRouter();

  const handleButtonClick = () => {
    push('admin/products/new');
  };

  const items = [
    {
      _id: '1',
      name: 'deska',
      description: 'deski',
      price: 399,
      quantity: 150,
      visible: true,
      category: 'deski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '2',
      name: 'kółka',
      description: 'kółka',
      price: 299,
      quantity: 250,
      visible: true,
      category: 'kółka',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '3',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 70,
      visible: true,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '4',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 30,
      visible: true,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '5',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 25,
      visible: true,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '6',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 35,
      visible: true,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '7',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 0,
      visible: false,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '8',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 35,
      visible: true,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '9',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 50,
      visible: true,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '10',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 15,
      visible: false,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '11',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 20,
      visible: false,
      category: 'kaski',
      priceHistory: [
        { price: 200, date: new Date() },
        { price: 250, date: new Date() }
      ],
      photos: ['']
    },
    {
      _id: '12',
      name: 'kask',
      description: 'kaski',
      price: 250,
      quantity: 80,
      visible: true,
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
}
