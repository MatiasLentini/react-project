import * as React from 'react';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import "../ItemDetail/ItemDetail.css"

const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext)

  return (
    <Link className="Link" to="/cart">
      <ShoppingCartSharpIcon sx={{ color: grey[50] }} />
      <span style={{ color: "white" }}>{totalCantidad()}</span>
    </Link>
  )
}
export default CartWidget;