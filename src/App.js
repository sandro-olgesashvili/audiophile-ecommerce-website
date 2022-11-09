import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Category from "./pages/Category";
import GearItem from "./pages/GearItem";
import CartItems from "./components/CartItems";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { totalCounter } from "./features/cartSlice";
import Checkout from "./pages/Checkout";
import MobileNav from "./components/MobileNav";

function App() {
  const dispatch = useDispatch();
  const { cartItems, buyItem, openClose, openCloseCartMobile } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(totalCounter());
  }, [buyItem, cartItems, openClose]);

  console.log(buyItem);
  return (
    <div>
      <Header />
      {openClose && <CartItems />}
      {openCloseCartMobile && <MobileNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/headphones"
          element={<Category categoryName="headphones" />}
        />
        <Route
          path="/speakers"
          element={<Category categoryName="speakers" />}
        />
        <Route
          path="/earphones"
          element={<Category categoryName="earphones" />}
        />
        <Route path="/:gearId" element={<GearItem />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
