import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const {id}= useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        if(id){
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res)=> res.json())
            .then((data)=> setProduct(data))
        }
    },[id])
  return (
    <div style={{display:"flex"}}>
      <div style={{border:"1px solid red"}}>
        <img src={product.image} alt={product.id} style={{width:"100px"}} />
        </div>
        <div>
        <h3>{product.title}</h3>
        <h4 style={{marginTop:"-10px"}}>{`Price:Rs.${product.price}`}</h4>
        <p style={{marginTop:"-10px"}}>{product.description}</p>
        <button>Add to Cart</button>
        </div>
        </div>
  )
}
