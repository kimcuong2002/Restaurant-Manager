import React, { ReactNode } from "react";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { EnumSizeProduct } from "../../src/Type";

export interface IProductCart {
  name: string;
  size?: EnumSizeProduct;
  note?: string;
  price: number;
  total: number;
  className?: string;
}

const ProductCart: React.FC<IProductCart> = ({
  name,
  size,
  note,
  price,
  total,
  className,
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <div className="w-[50%]">
        <p className="flex gap-[10px]">
          {name} {size && <p>({size})</p>}
        </p>
        <p className="break-all">+ {note}</p>
      </div>
      <div className="w-[20%]">
        <p>{price} $</p>
        <div className="flex justify-between items-center">
          <IoMdRemoveCircleOutline className="cursor-pointer" />
          <p>{total}</p>
          <IoMdAddCircleOutline className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
