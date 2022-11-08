import Logo from "../icons/logo.svg";
import CartIcon from "../icons/icon-cart.svg";
import { Link } from "react-router-dom";
import {openCloseCart} from '../features/cartSlice'
import { useDispatch } from "react-redux";


const Header = () => {
  const dispatch = useDispatch()
  return (
    <header className="header">
      <div className="header-container">
        <img src={Logo} alt="Logo" className="header-logo" />
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li className="header-nav-li">
              <Link to="/">HOME</Link>
            </li>
            <li className="header-nav-li">
              <Link to="/headphones">HEADPHONES</Link>
            </li>
            <li className="header-nav-li">
              <Link to="/speakers">SPEAKERS</Link>
            </li>
            <li className="header-nav-li">
              <Link to="/earphones">EARPHONES</Link>
            </li>
          </ul>
        </nav>
        <img src={CartIcon} alt="carticon" className="header-cart-icon" onClick={() => dispatch(openCloseCart())}/>
      </div>
    </header>
  );
};

export default Header;
