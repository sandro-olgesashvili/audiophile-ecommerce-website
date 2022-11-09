import { Link } from "react-router-dom";

const CategoryItem = ({ item, index }) => {
  return (
    <div className="category-item" style={{ order: `-${index}` }}>
      <div
        className="category-item-image-container"
        style={{ order: index === 1 ? "2" : "0" }}
      >
        {window.innerWidth <= 415 ? (
          <img
            src={process.env.PUBLIC_URL + item.categoryImage.mobile}
            alt={item.name}
          />
        ) : window.innerWidth <= 800 ? (
          <img
            src={process.env.PUBLIC_URL + item.categoryImage.tablet}
            alt={item.name}
          />
        ) : (
          <img
            src={process.env.PUBLIC_URL + item.categoryImage.desktop}
            alt={item.name}
          />
        )}
      </div>
      <div
        className="category-item-info"
        style={{
          order:
            item.new && item.category === "speakers"
              ? "3"
              : item.id === 5
              ? "-1"
              : "0",
        }}
      >
        {item.new && <h3 className="category-item-info-new">NEW PRODUCT</h3>}
        <h2 className="category-item-info-name">{item.name}</h2>
        <p className="category-item-info-text">{item.description}</p>
        <Link to={`/${item.slug}`}>
          <button className="category-item-info-btn">See Product</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
