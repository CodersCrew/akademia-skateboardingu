import { useRouter } from 'next/router';
import React from 'react';

import { ProductComponents } from '@/components/itemList/itemE4/ProductComponents';

export default function ItemPage() {
  const router = useRouter();
  const { item } = router.query;

  return (
    <>
      <ProductComponents />
    </>
  );
}
