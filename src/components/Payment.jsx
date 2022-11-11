import checked from "../icons/icon-order-confirmation.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paymentOff } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Payment = () => {
  const dispatch = useDispatch();
  const { buyItem, total } = useSelector((store) => store.cart);
  const [lessOn, setLessOn] = useState(false);
  return (
    <div
      className="checkout-payment-page"
      style={{ height: document.body.scrollHeight }}
    >
      <div className="checkout-payment-container">
        <img src={checked} alt="check" className="checkout-payment-chekced" />
        <h2 className="checkout-payment-title">
          THANK YOU <br /> FOR YOUR ORDER
        </h2>
        <p className="checkout-payment-p">
          You will receive an email confirmation shortly
        </p>
        <div className="checkout-payment-info">
          <div className="checkout-payment-items">
            {lessOn ? (
              buyItem.map((item, index) => (
                <div key={index} className="checkout-payment-item">
                  <img
                    src={process.env.PUBLIC_URL + item.categoryImage.desktop}
                    alt={item.name}
                    className="checkout-payment-item-img"
                  />
                  <div className="checkout-payment-item-info">
                    <div className="checkout-payment-item-info-semi">
                      <span>{item.name.substring(0, 4)}</span>
                      <span>$ {item.price.toLocaleString()}</span>
                    </div>
                    <span className="checkout-payment-item-info-quant">
                      x{item.quantity}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="checkout-payment-item">
                <img
                  src={
                    process.env.PUBLIC_URL + buyItem[0].categoryImage.desktop
                  }
                  alt={buyItem[0].name}
                  className="checkout-payment-item-img"
                />
                <div className="checkout-payment-item-info">
                  <div className="checkout-payment-item-info-semi">
                    <span>{buyItem[0].name.substring(0, 4)}</span>
                    <span>$ {buyItem[0].price.toLocaleString()}</span>
                  </div>
                  <span className="checkout-payment-item-info-quant">
                    x{buyItem[0].quantity}
                  </span>
                </div>
              </div>
            )}
            <button
              className="checkout-payment-view"
              onClick={() => setLessOn(!lessOn)}
            >
              {lessOn ? "View less" : `and ${buyItem.length - 1} other item(s)`}
            </button>
          </div>
          <div className="checkout-payment-grand-totla">
            <h4>GRAND TOTAL</h4>
            <span>
              ${" "}
              {Number(
                (total + 50 + (total * 20) / 100).toFixed()
              ).toLocaleString()}
            </span>
          </div>
        </div>
        <Link to="/" onClick={() => dispatch(paymentOff())}>
          <button className="back-to-home">BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
