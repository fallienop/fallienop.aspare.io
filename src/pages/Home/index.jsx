import React from "react";
import Car from "../Car";
import Store from "./Store";
import BestSelling from "./BestSelling";
import Choose from "./Choose";
import RegistrationMark from "../RegistrationMark";
import OrderGoods from "./OrderGoods";
import Navbar from "../../components/Navbar";
import Category from "../Category";

const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Car />
      <OrderGoods />
      <BestSelling />
      <Choose />
      <Store />
      <RegistrationMark />
    </>
  );
};

export default Home;
