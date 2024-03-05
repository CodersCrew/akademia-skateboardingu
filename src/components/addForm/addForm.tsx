'use client';
import { Button, Card, TextInput } from '@tremor/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { addItem } from '@/server/controllers/itemController';
import { Item } from '@/server/models/item';

type ValueFormProps = {
  Product: string;
  Description: string;
  Price: string;
  Quantity: string;
  Visible: string;
  Category: string;
  Photos: string;
};

export const fields = [
  { label: 'Produkt', name: 'product', type: 'text' },
  { label: 'Opis', name: 'description', type: 'textarea' },
  { label: 'Kategoria', name: 'category', type: 'text' },
  { label: 'Cena', name: 'price', type: 'number' },
  { label: 'Ilość', name: 'quantity', type: 'number' },
  {
    label: 'Widoczny',
    name: 'visible',
    type: 'select',
    options: ['Yes', 'No']
  },
  { label: 'Zdjęcia', name: 'photos', type: 'file' }
];

const defaultValues: ValueFormProps = {
  Product: '',
  Description: '',
  Price: '',
  Quantity: '',
  Visible: '',
  Category: '',
  Photos: ''
};

const SaveButton = () => {
  return (
    <Button
      type="submit"
      className="mt-5 rounded-md bg-blue-500 p-2 text-white"
    >
      Zapisz
    </Button>
  );
};

export const AddForm = async () => {
  const [formData, setFormData] = useState(defaultValues);
  const { handleSubmit, control, register } = useForm();

  const onSubmit = async (data: Item) => {
    await addItem(data);
    console.log('Submitted');
  };

  return (
    <Card className="mt-10 max-w-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8 max-w-md">
        {fields.map(({ label, name, type, options }) => (
          <div key={name} className="mb-4 mt-5 ">
            <label className="block text-sm font-medium text-gray-600">
              {label}
            </label>
            {type === 'textarea' ? (
              <textarea
                {...register(name)}
                className="mt-1 w-full rounded-md border p-2"
              />
            ) : type === 'select' ? (
              <select
                {...register(name)}
                className="mt-1 w-full rounded-md border p-2"
              >
                {options.map(option => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            ) : type === 'file' ? (
              <input
                type="file"
                {...register(name)}
                className="mt-1 w-full rounded-md border p-2"
              />
            ) : (
              <input
                type={type}
                {...register(name)}
                className="mt-1 w-full rounded-md border p-2"
              />
            )}
          </div>
        ))}
        <SaveButton />
      </form>
    </Card>
  );
};
