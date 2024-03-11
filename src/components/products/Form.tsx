'use client';
import { Card } from '@tremor/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { addItem } from '@/server/controllers/itemController';
import { Item } from '@/server/models/item';

import SaveButton from './SaveButton';

export const fields = [
  { label: 'Produkt', name: 'product', type: 'text' },
  { label: 'Opis', name: 'description', type: 'textarea' },
  { label: 'Cena', name: 'price', type: 'number' },
  { label: 'Liczba', name: 'quantity', type: 'number' },
  {
    label: 'Widoczny',
    name: 'visible',
    type: 'select',
    options: ['Tak', 'Nie']
  },
  { label: 'Kategoria', name: 'category', type: 'text' },
  { label: 'Zdjęcia', name: 'photos', type: 'file' }
];

export type FormValues = Omit<Item, 'priceHistory'>;
type FormProps = {
  handleButtonClick: () => void;
};

const Form = ({ handleButtonClick }: FormProps) => {
  const { handleSubmit, register, setValue, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await addItem(data);
    handleButtonClick();
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
                {...register(name as keyof FormValues)}
                className="mt-1 w-full rounded-md border p-2"
              />
            ) : type === 'select' ? (
              <select
                {...register(name as keyof FormValues)}
                className="mt-1 w-full rounded-md border p-2"
              >
                {options?.map(option => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            ) : type === 'file' ? (
              <input
                type="file"
                {...register(name as keyof FormValues)}
                className="mt-1 w-full rounded-md border p-2"
              />
            ) : (
              <input
                type={type}
                {...register(name as keyof FormValues)}
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

export default Form;
