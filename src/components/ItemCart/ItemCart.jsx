import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material/';

export const ItemCart = ({ product }) => {

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia component="img" image={product.img} alt={product.description} />
            <CardContent>
                <Typography sx={{ fontSize: 20 }} gutterBottom variant="h5" component="div" textAlign="center">
                    {product.tittle}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                    Price: ${product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};