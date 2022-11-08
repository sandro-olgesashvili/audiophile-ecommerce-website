import persomImage from "../icons/home/image-best-gear.jpg";

const BestGear = () => {
  return (
    <div className="home-best-gear">
      <div className="home-best-gear-info">
        <h2 className="home-best-gear-info-title">
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className="home-best-gear-info-text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={persomImage} alt="avatar" className="home-best-gear-image" />
    </div>
  );
};

export default BestGear;
