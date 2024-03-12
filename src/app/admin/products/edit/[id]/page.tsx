'use client';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import React, { useEffect, useState } from 'react';

import Form, { FormValues } from '@/components/products/Form';
import FormTitle from '@/components/products/FormTitle';

const NewProductForm = () => {
  const { push } = useRouter();
  // const { id } = router.query;
  const [product, setProduct] = useState<FormValues>();

  // useEffect(() => {
  //   const fetchData = async (id: string) => {
  //     const response = await fetch(`/api/products/${id}`);
  //     const data = await response.json();
  //     setProduct(data);
  //   };

  //   if (id) {
  //     const isString = Array.isArray(id) ? id[0] : id;
  //     fetchData(isString);
  //   }
  // }, [id]);

  const handleButtonClick = () => {
    push('/admin');
  };

  return (
    <div className="border bg-tremor-background-muted pb-10 pl-20">
      <FormTitle type="edit" />
      <Form handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default NewProductForm;
