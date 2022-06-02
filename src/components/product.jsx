import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const {id}= useParams();
    const [product, setProduct] = useState({})

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/Products/${id}`)
            .then((res)=> res.json())
            .then((data)=> setProduct(data))
        }
    },[id])
  return (
    <div>
        Product No:{Number(id)+1} 
        <h3>{product.name}</h3>
        <h4>{`Price:Rs.${product.price}`}</h4>
        </div>
  )
}
