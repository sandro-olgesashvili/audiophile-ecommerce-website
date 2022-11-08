import speakersImage from "../icons/home/desktop/image-speaker-zx9.png";
import circle from "../icons/pattern-circles.svg";
import HomeNav from "../components/HomeNav";
import earphonesImage from "../icons/home/desktop/image-earphones-yx1.jpg";
import BestGear from "../components/BestGear";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home-hero">
        <div className="home-hero-container">
          <div className="home-hero-info">
            <span>NEW PRODUCT</span>
            <h2>XX99 Mark II Headphones</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/xx99-mark-two-headphones">
              <button className="home-hero-btn">See Product</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-category-all">
        <div className="home-category-all-container">
          <HomeNav />
          <div className="home-speaker-container">
            <div className="home-speaker">
              <img
                src={speakersImage}
                alt="speaker"
                className="home-speaker-image"
              />
              <img
                src={circle}
                alt="curlce"
                className="home-speaker-image-circle"
              />

              <div className="home-speaker-info">
                <h2>
                  ZX9 <br />
                  SPEAKER
                </h2>
                <p>
                  Upgrade to premium speakers that are <br /> phenomenally built
                  to deliver truly remarkable <br /> sound.
                </p>
                <Link to="/zx9-speaker">
                  <button className="home-speaker-btn">See Product</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-speaker-second">
            <h3>ZX7 SPEAKER</h3>
            <Link to="/zx7-speaker">
              <button>See Product</button>
            </Link>
          </div>
          <div className="home-earphones">
            <img
              src={earphonesImage}
              alt="ear"
              className="home-earphones-image"
            />
            <div className="home-earphones-info">
              <h3>YX1 EARPHONES</h3>
              <Link to="/yx1-earphones">
                <button>See Product</button>
              </Link>
            </div>
          </div>
          <BestGear />
        </div>
      </div>
    </section>
  );
};

export default Home;
