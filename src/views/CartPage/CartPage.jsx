import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartPage.css"

const CartPage = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="CartContainer">
                <h2 className="Tittle">There are no items in your cart</h2>
                <Link to="/"><Button variant="contained" sx={{ color: "black", backgroundColor: "white" }}>Return to Home</Button></Link>
            </div>
        )
    }

    return (
        <div className="CartContainer">
            <h2>Products in your cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="Tittle">
                    <img className="ImgContainer" src={item.img} alt={item.description} />
                    <h4 className="Subtittle">{item.tittle}</h4>
                    <p>Category: {item.category}</p>
                    <small>Quantity: {item.cantidad} | Unit price: ${item.price}</small>
                    <p>Total price: ${item.price * item.cantidad}</p>
                    <Button onClick={() => removerItem(item.id)} color='error'><DeleteIcon /></Button>
                </div>
            ))
            }
            <h3 className="Subtittle">Total value of your purchase: ${totalCarrito()}</h3>
            <Button onClick={vaciarCarrito} variant="contained" color="error" sx={{ color: "black" }}>EMPTY CART</Button>
            <Link to="/checkout" className="LinkShop"> <Button variant="contained" color="success" sx={{ color: "black" }}>COMPLETE MY PURCHASE</Button></Link>
        </div>
    )
}

export default CartPage;