import React from 'react'
import styles from '../App.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly", gap:"30px"}}>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/products">Products</Link>

    </div>
  )
}
