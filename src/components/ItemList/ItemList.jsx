import * as React from 'react';
import { useContext } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material/';
import { CartContext } from '../../context/CartContext';
import "../ItemDetail/ItemDetail.css"


export const ItemList = ({ product }) => {

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        setCart((currProducts) => {
            const isInCart = currProducts.find((product) => product.id === product.id);
            if (isInCart) {
                return currProducts.map((product) => {
                    if (product.id === product.id) {
                        return { ...product, quantity: product.quantity + 1 };
                    } else {
                        return product;
                    }
                });
            } else {
                return [...currProducts, { product, quantity: 1, }]
            }

        })
    }

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia component="img" image={product.img} alt={product.description} />
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} gutterBottom variant="h5" component="div" textAlign="center">
                        {product.tittle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                        Price: ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => addToCart(cart)} size="small" color="primary" sx={{ color: "black" }}>
                    add to cart
                </Button>
            </CardActions>
        </Card>
    );
};