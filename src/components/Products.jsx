import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [product, setproduct] = useState([]);
  useEffect(()=>{
    const fetchproduct=async()=>{
      let res= await fetch("https://fakestoreapi.com/products") ;
      let data= await res.json();
      setproduct(data)
    }
    fetchproduct()
  },[])
  return (
    <div>Products:
      <div>
        {product.map((p)=>(
          <div key ={p.id} style={{border:"1px solid red" , marginBottom:"15px"}}>
            <img src={p.image} alt={p.id} style={{width:"100px"}}/>
            <p>{p.title}</p>
          <Link to ={`/products/${p.id}`}>More Details...</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products