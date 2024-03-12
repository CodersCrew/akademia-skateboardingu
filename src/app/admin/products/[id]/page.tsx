import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { FormValues } from '@/components/products/Form';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<FormValues>();

  useEffect(() => {
    const fetchData = async (id: string) => {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    if (id) {
      const isString = Array.isArray(id) ? id[0] : id;
      fetchData(isString);
    }
  }, [id]);

  if (!product) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      {product ? (
        <div>
          <p>Name: {product.product}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Visible: {product.visible.toString()}</p>
          <p>Category: {product.category}</p>
          {product.photos.map((photo, photoIndex) => (
            <Image
              key={photoIndex}
              src={photo}
              alt={`Photo ${photoIndex + 1}`}
            />
          ))}
        </div>
      ) : (
        <p>Ładowanie...</p>
      )}
    </div>
  );
};

export default ProductDetails;
