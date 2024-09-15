'use client';
import { useRouter } from 'next/navigation';

import { Form, FormTitle } from '@/admin';

export default function ProductsNew() {
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
}
