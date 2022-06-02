import React from 'react'
import styles from '../App.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className={styles.flex}>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/products">Products</Link>

    </div>
  )
}
