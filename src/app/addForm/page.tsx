'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import { AddForm } from '@/components/addForm/AddForm';
import { FormTitle } from '@/components/addForm/FormTitle';

const NewProductForm = () => {
  const { push } = useRouter();

  const handleButtonClick = () => {
    push('/dashboard');
  };
  return (
    <div className="border bg-tremor-background-muted pb-10 pl-20">
      <FormTitle />
      <AddForm handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default NewProductForm;
