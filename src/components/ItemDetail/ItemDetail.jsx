import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia component="img" image={product.img} alt={product.description} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.tittle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price} | {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to="/products">
                        Comprar
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default ItemDetail;