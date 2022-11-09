import { useSelector } from "react-redux";
import {
  increase,
  decrease,
  removeItem,
  removeAll,
  openCloseCart,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const CartItems = () => {

  const dispatch = useDispatch();
  const { buyItem, total } = useSelector((store) => store.cart);
  return (
    <div className="cart-items-container" style={{height:document.body.scrollHeight}}>
      <div className="cart-items">
        <div className="cart-items-s">
          <div className="cart-items-header">
            <h2 className="cart-items-header-title">cart ({buyItem.length})</h2>
            <button
              className="cart-items-header-title-remove"
              onClick={() => dispatch(removeAll())}
            >
              Remove all
            </button>
          </div>
          <div className="cart-items-body">
            {buyItem.map((item, index) => (
              <div key={index} className="cart-item-body">
                <img
                  src={process.env.PUBLIC_URL + item.image.desktop}
                  alt={item.name}
                  className="cart-item-body-image"
                />
                <div className="cart-item-body-name-price">
                  <span className="cart-item-body-name">
                    {item.name.substring(0, 4)}
                  </span>
                  <span className="cart-item-body-price">
                    $ {item.price.toLocaleString()}
                  </span>
                </div>
                <div className="cart-item-body-buttons">
                  <button
                    onClick={() => {
                      if (item.quantity <= 1) {
                        dispatch(removeItem(item.id));
                      } else {
                        dispatch(decrease(item.id));
                      }
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increase(item.id))}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-item-total">
            <span className="cart-item-total-text">TOTAL</span>
            <span className="cart-item-total-price">
              $ {total.toLocaleString()}
            </span>
          </div>
          <Link to="/checkout">
            <button
              className="checkout-btn"
              onClick={() => dispatch(openCloseCart())}
            >
              checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
