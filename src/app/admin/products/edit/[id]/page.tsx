'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Form, { FormValues } from '@/components/products/Form';
import FormTitle from '@/components/products/FormTitle';
import { getItem } from '@/server/controllers/itemController';

export default function NewProductForm({ params }: { params: { id: string } }) {
  const { push } = useRouter();
  const [product, setProduct] = useState<FormValues>();

  const data = {
    name: 'deska',
    description: 'deska',
    price: 230,
    quantity: 20,
    visible: true,
    category: 'deski',
    priceHistory: { cena: 20, data: new Date() },
    photos: []
  };
  useEffect(() => {
    //for when database connection works
    // const fetchData = async (id: string) => {
    //   const response = await getItem(id);
    //   if (response?.data?.item) {
    //     const data = response.data.item;
    //     setProduct(data);
    //   }
    // };
    setProduct(data);
  }, []);

  const handleButtonClick = () => {
    push('/admin');
  };

  return (
    <div className="border bg-tremor-background-muted pb-10 pl-20">
      <FormTitle type="edit" />
      <Form handleButtonClick={handleButtonClick} data={data} />
    </div>
  );
}
