import Logo from "../icons/logo.svg";
import CartIcon from "../icons/icon-cart.svg";
import { Link } from "react-router-dom";
import { openCloseCart, closeCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { onOffMobile } from "../features/cartSlice";
import { closerMenu } from "../features/cartSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { buyItem } = useSelector((store) => store.cart);
  return (
    <header className="header">
      <div className="header-container">
        <div className="mb-mn">
          <div
            className="mobile-menu"
            onClick={() => {
              dispatch(onOffMobile());
              dispatch(closeCart());
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link
            to="/"
            onClick={() => {
              dispatch(closerMenu());
              dispatch(closeCart());
            }}
          >
            <img src={Logo} alt="Logo" className="header-logo" />
          </Link>
        </div>
        <Link
          className="for-mobile-only"
          to="/"
          onClick={() => {
            dispatch(closerMenu());
            dispatch(closeCart());
          }}
        >
          <img src={Logo} alt="Logo" className="header-logo" />
        </Link>
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li className="header-nav-li" onClick={() => dispatch(closeCart())}>
              <Link to="/">HOME</Link>
            </li>
            <li className="header-nav-li" onClick={() => dispatch(closeCart())}>
              <Link to="/headphones">HEADPHONES</Link>
            </li>
            <li className="header-nav-li" onClick={() => dispatch(closeCart())}>
              <Link to="/speakers">SPEAKERS</Link>
            </li>
            <li className="header-nav-li" onClick={() => dispatch(closeCart())}>
              <Link to="/earphones">EARPHONES</Link>
            </li>
          </ul>
        </nav>
        <img
          src={CartIcon}
          alt="carticon"
          className={
            buyItem.length > 0
              ? "header-cart-icon bg-color"
              : "header-cart-icon"
          }
          onClick={() => {
            dispatch(openCloseCart());
            dispatch(closerMenu());
          }}
        />
      </div>
    </header>
  );
};

export default Header;
