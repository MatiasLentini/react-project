import * as React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    isInCart(product.id)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newProduct = {
            ...product,
            cantidad
        }
        agregarAlCarrito(newProduct)
    }

    return (
        <Card sx={{ maxWidth: 400 }} >
            <CardActionArea>
                <CardMedia component="img" image={product.img} alt={product.description} />
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} gutterBottom variant="h5" component="div" textAlign="center">
                        {product.tittle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                        Price: ${product.price} | {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                {isInCart(product.id)
                    ? <Link to="/cart" className="LinkShop">COMPLETE MY PURCHASE</Link> :
                    <ItemCount cantidad={cantidad} setCantidad={setCantidad} agregar={handleAgregar} />}
            </CardActions>
        </Card >
    );
};

export default ItemDetail;