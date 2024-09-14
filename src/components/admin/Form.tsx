'use client';
import { Card } from '@tremor/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { addItem } from '@/server/controllers/itemController';
import { Item } from '@/server/models/item';

import { CancelButton } from './CancelButton';
import { SaveButton } from './SaveButton';

export const fields = [
  { label: 'Produkt', name: 'name', type: 'text' },
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
  data?: FormValues;
};

export function Form({ handleButtonClick, data }: FormProps) {
  const { handleSubmit, register, getValues, reset } = useForm<FormValues>({
    defaultValues: data
  });

  const onSubmit = async (formData: FormValues) => {
    await addItem(formData);
    handleButtonClick();
  };

  const handleCancel = () => {
    reset();
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
        <div className="flex justify-between">
          {data ? <CancelButton handleCancel={handleCancel} /> : null}
          <SaveButton />
        </div>
      </form>
    </Card>
  );
}
