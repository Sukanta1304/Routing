import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [product, setproduct] = useState([]);
  useEffect(()=>{
    const fetchproduct=async()=>{
      let res= await fetch("http://localhost:8080/Products") ;
      let data= await res.json();
      setproduct(data)
    }
    fetchproduct()
  },[])
  return (
    <div>Products:
      <div>
        {product.map((p)=>(
          <div key ={p.id}>{`Product Name:${p.name} // Product Price ${p.price}//`}
          <Link to ={`/products/${p.id}`}>More Details...</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products