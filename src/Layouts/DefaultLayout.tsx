import React, { ReactNode } from "react";
import Header from "../Components/Header";
import MenuProduct from "../Components/MenuProduct";
import Cart from "../Components/Cart";

type Iprops = {
  children: ReactNode;
};

const DefaultLayout: React.FC<Iprops> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex justify-between w-full mt-[15px] px-[15px]">
        <MenuProduct />
        {children}
        <Cart />
      </div>
    </div>
  );
};

export default DefaultLayout;
