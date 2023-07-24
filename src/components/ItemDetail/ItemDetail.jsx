import * as React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, } from '@mui/material';
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
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
                <Button size="small" color="primary" sx={{ color: "black" }} >
                    add to cart
                </Button>
            </CardActions>
        </Card >
    );
};

export default ItemDetail;