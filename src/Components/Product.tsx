import React, { ReactNode } from "react";

export type iProduct = {
  quantity?: number;
  totalPrice?: number;
  id: string | number;
  image: string;
  name: string;
  price: number;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Product: React.FC<iProduct> = ({
  id,
  image,
  name,
  price,
  className,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center border-2 h-[180px] w-[300px] cursor-pointer ${className} `}
      onClick={() => onClick}
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
