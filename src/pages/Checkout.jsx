import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import cashIcon from "../icons/icon-cash-on-delivery.svg";
import Payment from "../components/Payment";
import { paymentToggle } from "../features/cartSlice";
const Checkout = () => {
  const dispatch = useDispatch();
  const [pay, setPay] = useState("e-Money");
  const navigate = useNavigate();
  const { buyItem, total, paymentOnOff } = useSelector((store) => store.cart);

  console.log(buyItem);
  return (
    <section className="section-checkout">
      {paymentOnOff && <Payment />}
      <div className="checkout-container">
        <button className="go-back" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className="checkout-bg">
          <div className="checkout-padding">
            <h1 className="checkout-title">Checkout</h1>
            <form>
              <div className="checkout-billing-container">
                <h2 className="form-title">Billing Details</h2>
                <div className="checkout-billing">
                  <div className="form-billing">
                    <div className="form-name">
                      <label className="form-label">name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Alexei Ward"
                        className="form-input"
                      />
                    </div>
                    <div className="from-email">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="alexei@mail.com"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="+1 202-555-0136"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-info-container">
                <h2 className="form-title">shipping info</h2>
                <div>
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="1137 Williams Avenue"
                    className="from-input-full"
                  />
                </div>
                <div>
                  <div className="form-billing">
                    <div className="form-name">
                      <label className="form-label">ZIP Code</label>
                      <input
                        type="number"
                        name="ZIPCode"
                        id="ZIPCode"
                        placeholder="10001"
                        className="form-input"
                      />
                    </div>
                    <div className="from-email">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        name="City"
                        id="City"
                        placeholder="New York"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-number">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      name="Country"
                      id="Country"
                      placeholder="United States"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-pay-container">
                <h2 className="form-title">payment details</h2>
                <div>
                  <div className="checkout-pay">
                    <span>Payment Method</span>
                    <div className="payment-details">
                      <div
                        className="payment-detail"
                        style={{
                          border:
                            pay === "e-Money"
                              ? "1px solid #D87D4A"
                              : "1px solid #cfcfcf",
                        }}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value="e-Money"
                          checked={pay === "e-Money"}
                          onChange={(e) => setPay(e.target.value)}
                        />
                        <label>e-Money</label>
                      </div>
                      <div
                        className="payment-detail"
                        style={{
                          border:
                            pay !== "e-Money"
                              ? "1px solid #D87D4A"
                              : "1px solid #cfcfcf",
                        }}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value="CashonDelivery"
                          onChange={(e) => setPay(e.target.value)}
                        />
                        <label>Cash on Delivery</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    {pay === "e-Money" ? (
                      <>
                        <div className="form-billing">
                          <div className="form-name">
                            <label className="form-label">e-Money Number</label>
                            <input
                              type="number"
                              name="name"
                              id="name"
                              placeholder="238521993"
                              className="form-input"
                            />
                          </div>
                          <div className="from-email">
                            <label htmlFor="email" className="form-label">
                              e-Money PIN
                            </label>
                            <input
                              type="number"
                              name="pin"
                              id="pin"
                              placeholder="6891"
                              className="form-input"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="paymeny-cash">
                        <img src={cashIcon} alt="cash" />
                        <p>
                          The ‘Cash on Delivery’ option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="checkout-item-pay">
            <h3 className="checkout-item-pay-title">summary</h3>
            <div className="checkout-items">
              {buyItem.map((item, index) => (
                <div key={index} className="checkout-item">
                  <img
                    src={process.env.PUBLIC_URL + item.image.desktop}
                    alt={item.name}
                  />
                  <div className="checkout-item-info">
                    <span className="checkout-item-info-name">
                      {item.name.substring(0, 4)}
                    </span>
                    <span className="checkout-item-info-price">
                      $ {item.price.toLocaleString()}
                    </span>
                  </div>
                  <span className="checkout-item-quan">x{item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="counter-total">
              <div className="totla-info">
                <span>total</span>
                <span>$ {total.toLocaleString()}</span>
              </div>
              <div className="totla-info">
                <span>SHIPPING</span>
                <span>$ 50</span>
              </div>
              <div className="totla-info">
                <span>VAT (INCLUDED)</span>
                <span>
                  $ {Number(((total * 20) / 100).toFixed()).toLocaleString()}
                </span>
              </div>
              <div className="totla-info">
                <span>GRAND TOTAL</span>
                <span style={{ color: "#D87D4A" }}>
                  ${" "}
                  {Number(
                    (total + 50 + (total * 20) / 100).toFixed()
                  ).toLocaleString()}
                </span>
              </div>
            </div>
            <button
              className="checkout-btn"
              onClick={() => {
                dispatch(paymentToggle());
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
