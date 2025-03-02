import React from 'react'
import ProductChild from './ProductChild';

export default function Product() {
    const product = {id: 1, name: 'Laptop', price: 50000};
  return (
    <div>
      <ProductChild product={product}/>
    </div>
  )
}
