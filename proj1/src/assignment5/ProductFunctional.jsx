import React,{useState} from 'react'

export default function ProductFunctional() {
    const [product, setProduct] = useState({id:1, name:"laptop", price:1000});
    const updateProduct = () => {
    setProduct({...product, price:product.price+100});
    };

  return (
    <div>
      <h1>Product Functional Assign6</h1>
        <h2>Product Id: {product.id}</h2>
        <h2>Product Name: {product.name}</h2>
        <h2>Product Price: {product.price}</h2>
        <button onClick={updateProduct}>Update Product</button>
    </div>
  )
}
