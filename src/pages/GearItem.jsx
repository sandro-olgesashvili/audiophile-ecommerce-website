import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HomeNav from "../components/HomeNav";
import BestGear from "../components/BestGear";
import { addItem } from "../features/cartSlice";
import { useDispatch } from "react-redux";
const GearItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gearId } = useParams();
  const [counter, setCounter] = useState(1);

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const { cartItems, buyItem } = useSelector((store) => store.cart);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [gearId]);

  console.log(buyItem);
  return (
    <div className="gear-item">
      {cartItems
        .filter((item) => item.slug === gearId)
        .map((item, index) => (
          <div className="gear-item-container" key={index}>
            <button className="go-back" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <div className="item-gear-purchase">
              {innerWidth <= 415 ? (
                <img
                  src={process.env.PUBLIC_URL + item.image.mobile}
                  alt={item.name}
                />
              ) : innerWidth <= 800 ? (
                <img
                  src={process.env.PUBLIC_URL + item.image.tablet}
                  alt={item.name}
                />
              ) : (
                <img
                  src={process.env.PUBLIC_URL + item.image.desktop}
                  alt={item.name}
                />
              )}
              <div>
                {item.new && (
                  <h3 className="category-item-info-new tab">NEW PRODUCT</h3>
                )}
                <h2 className="category-item-info-name tab">{item.name}</h2>
                <p className="category-item-info-text tab">
                  {item.description}
                </p>
                <span className="gear-item-price">
                  $ {item.price.toLocaleString()}
                </span>
                <div className="gear-item-buttons">
                  <div className="gear-item-buttons-incr-decr">
                    <button
                      disabled={counter <= 1}
                      onClick={() => setCounter(counter - 1)}
                    >
                      -
                    </button>
                    <span>{counter}</span>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                  </div>
                  <button
                    disabled={buyItem.some((buy) => buy.id === item.id)}
                    className="category-item-info-btn"
                    onClick={() =>
                      dispatch(addItem({ ...item, quantity: counter }))
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div className="gear-item-features-box">
              <div className="gear-item-features">
                <h3 className="gear-item-features-title">FEATURES</h3>
                <p className="gear-item-features-text">{item.features}</p>
              </div>
              <div className="gear-item-box">
                <h3 className="gear-item-box-title">in the box</h3>
                <div className="for-tb">
                  {item.includes.map((item, index) => (
                    <div key={index} className="gear-item-box-info">
                      <span className="gear-item-box-info-quantity">
                        {item.quantity}x
                      </span>
                      <span>{item.item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gear-item-gallery">
              <div className="gear-item-gallery-two">
                <img
                  src={process.env.PUBLIC_URL + item.gallery.first.desktop}
                  alt="gallery"
                />
                <img
                  src={process.env.PUBLIC_URL + item.gallery.second.desktop}
                  alt="gallery"
                />
              </div>
              <img
                src={process.env.PUBLIC_URL + item.gallery.third.desktop}
                alt=""
                className="for-tb-image-size"
              />
            </div>
            <div className="gear-item-others">
              <h2 className="gear-item-others-title">you may also like</h2>
              <div className="gear-item-others-items">
                {item.others.map((item, index) => (
                  <div className="gear-item-others-item" key={index}>
                    {window.innerWidth <= 415 ? (
                      <img
                        src={process.env.PUBLIC_URL + item.image.mobile}
                        alt={item.name}
                      />
                    ) : window.innerWidth <= 800 ? (
                      <img
                        src={process.env.PUBLIC_URL + item.image.tablet}
                        alt={item.name}
                      />
                    ) : (
                      <img
                        src={process.env.PUBLIC_URL + item.image.desktop}
                        alt={item.slug}
                      />
                    )}
                    <span>{item.name}</span>
                    <Link to={`/${item.slug}`}>
                      <button className="category-item-info-btn">
                        See Product
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <HomeNav />
            <BestGear />
          </div>
        ))}
    </div>
  );
};

export default GearItem;
