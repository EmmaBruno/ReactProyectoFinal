import React from 'react'
import './NavBar.css';
import logo from '../../assets/cart.jpg'

const CartWidget = () => {
  return(
    <div><img className="cart" src={logo} alt="cart"/>MI CARRITO</div>
  )
}

export default CartWidget