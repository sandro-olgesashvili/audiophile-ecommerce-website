import earphonesImage from "../icons/home/image-category-thumbnail-earphones.png";
import headphonesImage from "../icons/home/image-category-thumbnail-headphones.png";
import speakersImage from "../icons/home/image-category-thumbnail-speakers.png";
import arrow from "../icons/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="home-nav-items">
      <div className="home-nav-item">
        <div className="home-nav-item-info">
          <img src={headphonesImage} alt="head" />
          <h3>HEADPHONES</h3>
          <Link to="/headphones">
            <div className="home-nav-shop">
              <span>shop</span>
              <img src={arrow} alt="arrow" />
            </div>
          </Link>
        </div>
        <div className="home-nav-mask"></div>
      </div>
      <div className="home-nav-item">
        <div className="home-nav-item-info">
          <img src={speakersImage} alt="head" />
          <h3>SPEAKERS</h3>
          <Link to="/speakers">
            <div className="home-nav-shop">
              <span>shop</span>
              <img src={arrow} alt="arrow" />
            </div>
          </Link>
        </div>
        <div className="home-nav-mask"></div>
      </div>
      <div className="home-nav-item">
        <div className="home-nav-item-info">
          <img src={earphonesImage} alt="head" />
          <h3>EARPHONES</h3>
          <Link to="/earphones">
            <div className="home-nav-shop">
              <span>shop</span>
              <img src={arrow} alt="arrow" />
            </div>
          </Link>
        </div>
        <div className="home-nav-mask"></div>
      </div>
    </div>
  );
};

export default HomeNav;
