import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Box, Button, Typography, Modal } from '@mui/material';
import { ItemCart } from '../ItemCart/ItemCart';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { grey } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartWidget = ({product}) => {
  const [cart, setCart] = useContext(CartContext)
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="text" sx={{ color: grey[50] }}>
        <ShoppingCartSharpIcon />
        <p style={{ color: "white" }}>{quantity}</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
            Shopping Cart
          </Typography>
          <Typography id="modal-modal-description">
            {cart.map((data) => {
              return (
                <ItemCart product={data} key={data.id}/>
              )
            })}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CartWidget;