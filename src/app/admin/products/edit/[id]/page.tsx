'use client';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import React, { useEffect, useState } from 'react';

import Form, { FormValues } from '@/components/products/Form';
import FormTitle from '@/components/products/FormTitle';
import { getItem } from '@/server/controllers/itemController';
import { Item } from '@/server/models/item';

const NewProductForm = () => {
  const { push } = useRouter();
  // const { id } = router.query;
  const [product, setProduct] = useState<FormValues>();

  useEffect(() => {
    const fetchData = async (id: string) => {
      const response = await getItem(id);
      if (response.data || response.data.item) {
        /// data structure?
        const data = response.data.item;
        setProduct(data);
      }
    };

    if (id) {
      const isString = Array.isArray(id) ? id[0] : id;
      fetchData(isString);
    }
  }, [id]);

  // const product2 = {
  //   product: 'koła',
  //   description: 'koła 4-pak',
  //   price: 119,
  //   quantity: 30,
  //   visible: 'tak',
  //   category: 'kółka',
  //   photos: ['']
  // };

  const handleButtonClick = () => {
    push('/admin');
  };

  return (
    <div className="border bg-tremor-background-muted pb-10 pl-20">
      <FormTitle type="edit" />
      <Form handleButtonClick={handleButtonClick} data={product} />
    </div>
  );
};

export default NewProductForm;
