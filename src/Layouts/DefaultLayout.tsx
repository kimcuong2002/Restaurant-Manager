import React from "react";
import Header from "../Components/Header";
import MenuProduct from "../Components/MenuProduct";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <MenuProduct />
      </div>
    </div>
  );
};

export default DefaultLayout;
