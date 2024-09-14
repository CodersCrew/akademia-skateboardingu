'use client';
import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';

import { ProductCard, ProductCardProps } from './ProductCard';

type ProductCarouselProps = {
  productsList: ProductCardProps[];
};

// TODO subject to change according to design
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 50
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export function ProductCarousel({ productsList }: ProductCarouselProps) {
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      swipeable
      draggable
      infinite
      partialVisible
      autoPlay
      autoPlaySpeed={3000}
      containerClass="carousel-container"
      shouldResetAutoplay
    >
      {productsList.map(product => (
        <ProductCard
          src={product.src}
          alt={product.alt}
          name={product.name}
          description={product.description}
          price={product.price}
          lowestPrice={product.lowestPrice}
          badgeText={product.badgeText}
          badgeVariant={product.badgeVariant}
          key={product.name}
        />
      ))}
    </Carousel>
  );
}
