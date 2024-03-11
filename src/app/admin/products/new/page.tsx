'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import Form from '@/components/products/Form';
import FormTitle from '@/components/products/FormTitle';

const ProductForm = () => {
  const { push } = useRouter();

  const handleButtonClick = () => {
    push('/admin');
  };

  return (
    <div className="border bg-tremor-background-muted pb-10 pl-20">
      <FormTitle type="add" />
      <Form handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default ProductForm;
