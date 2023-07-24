import CartWidget from "../CartWidget/CartWidget";
import "./NavBarStyle.css";
import { Link } from "react-router-dom";
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import MenuCategory from "../MenuCategory/MenuCategory";

const NavBar = () => {
    return (
        <nav className="Navigation">
            <ul className="List-ul">
                <Button variant="text" sx={{ color: grey[50] }}>
                    <Link to="/" className="Link">
                        Home
                    </Link>
                </Button>
                <Button variant="text" sx={{ color: grey[50] }}>
                    <MenuCategory />
                </Button>
                <Button variant="text" sx={{ color: grey[50] }}>
                    <Link to="/about" className="Link">
                        About
                    </Link>
                </Button>
                <Button variant="text" sx={{ color: grey[50] }}>
                    <Link to="/contact" className="Link">
                        Contact
                    </Link>
                </Button >
            </ul >
            <ul className="Cart">
                <li >
                  <CartWidget></CartWidget>
                </li>
            </ul>
        </nav >
    );
};

export default NavBar;