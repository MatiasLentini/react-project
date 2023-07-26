import { Button } from "@mui/material"

export const ItemCount = ({ cantidad, setCantidad, agregar }) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

    return (
        <div>
            <Button color="primary" sx={{ color: "black" }} onClick={handleRestar}>-</Button>
            <span className="mx-3">{cantidad}</span>
            <Button color="primary" sx={{ color: "black" }} onClick={handleSumar}>+</Button>
            <br />
            <Button size="large" color="primary" sx={{ color: "black" }} onClick={agregar} className="btn btn-primary">Add to cart</Button>
        </div>
    )
}