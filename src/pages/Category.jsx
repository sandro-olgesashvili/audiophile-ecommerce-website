import { useSelector } from "react-redux";
import BestGear from "../components/BestGear";
import CategoryItem from "../components/CategoryItem";
import HomeNav from "../components/HomeNav";

const Category = ({ categoryName }) => {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <section className="category">
      <h1 className="category-title">{categoryName}</h1>
      <div className="category-container">
        {cartItems
          .filter((item) => item.category === categoryName)
          .map((item, index) => (
            <CategoryItem item={item} index={index} key={index} />
          ))}
        <HomeNav />
        <BestGear />
      </div>
    </section>
  );
};

export default Category;
