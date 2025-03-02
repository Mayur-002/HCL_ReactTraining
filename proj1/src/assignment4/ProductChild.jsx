import React from 'react'

export default function ProductChild(props) {
    
  return (
   <>
    <h1>Product Parent To Child Assign4</h1>
   <p>
         {props.product.id} - {props.product.name} - {props.product.price}
   </p>
   </>
  )
}
