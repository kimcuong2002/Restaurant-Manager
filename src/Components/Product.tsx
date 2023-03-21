import React, { ReactNode } from "react";

interface iProduct {
  image: string;
  name: string;
  price: number;
  className?: string;
}

const Product: React.FC<iProduct> = ({ image, name, price, className }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center border-2 h-[180px] w-[300px] cursor-pointer ${className}`}
    >
      <img src={image} alt="" className="w-[100px]" />
      <div>
        <p>{name}</p>
        <p>{price} $</p>
      </div>
    </div>
  );
};

export default Product;
