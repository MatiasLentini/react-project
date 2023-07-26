import * as React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material/';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "../ItemDetail/ItemDetail.css"


export const ItemList = ({ product }) => {

    return (
        <Card sx={{ maxWidth: 300 }}>
            <Link className="Link"
                to={`/product-detail/${product.id}`} key={product.id}>
                <CardActionArea>
                    <CardMedia component="img" image={product.img} alt={product.description} />
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color={'black'} gutterBottom variant="h5" component="div" textAlign="center">
                            {product.tittle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="center">
                            Price: ${product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};