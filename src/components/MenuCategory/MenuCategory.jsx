import * as React from 'react';
import {Button, Menu, MenuItem} from '@mui/material';

import { Link } from "react-router-dom";

const MenuCategory = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const styles = {
        popUpBtn: {
            textDecoration: "none",
            color: "white",
            fontSize: 18,
            textTransform: "lowercase",
        },
        upperText: {
            textTransform: "uppercase",
        },
        link: {
            color: "black",
            fontSize: 18,
            textDecoration: "none",
        },
    };

    return (
        <div>
            <Button
                style={styles.popUpBtn}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <span style={styles.upperText}>Products</span>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>
                    <Link style={styles.link} to="/product-category/remeras">
                        Remeras
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link style={styles.link} to="/product-category/pantalones">
                        Pantalones
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link style={styles.link} to="/product-category/zapatillas">
                        Zapatillas
                    </Link>
                </MenuItem>

            </Menu>
        </div >
    );
}

export default MenuCategory;