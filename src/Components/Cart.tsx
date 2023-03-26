import React from "react";
import Button from "./Button";
import ProductCart, { IProductCart } from "./ProductCart";
import { EnumSizeProduct, EnumCreaseUpDown } from "../../src/Type";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight, MdOutlineDiscount } from "react-icons/md";
import {
  AiOutlinePayCircle,
  AiOutlinePrinter,
  AiOutlineTags,
} from "react-icons/ai";

const dataprooduct: IProductCart[] = [
  {
    name: "Caffe",
    note: "hello cc",
    size: EnumSizeProduct.M,
    price: 4,
    total: 10,
  },
  {
    name: "Caffe",
    note: "hello",
    size: EnumSizeProduct.M,
    price: 4,
    total: 10,
  },
  {
    name: "Caffe",
    note: "hello",
    size: EnumSizeProduct.M,
    price: 4,
    total: 10,
  },
  {
    name: "Caffe",
    note: "hello",
    size: EnumSizeProduct.M,
    price: 4,
    total: 10,
  },
  {
    name: "Caffe",
    note: "hello",
    size: EnumSizeProduct.M,
    price: 4,
    total: 10,
  },
  {
    name: "Caffe",
    note: "hello",
    size: EnumSizeProduct.M,
    price: 4,
    total: 10,
  },
];

const purchaseButton = [
  {
    icon: <AiOutlinePayCircle />,
    title: "Total Price",
    total: 1,
    totalCost: 450,
    stateUpDown: EnumCreaseUpDown.UP,
  },
  {
    icon: <MdOutlineDiscount />,
    title: "sale",
    total: 1,
    totalCost: 450,
    stateUpDown: EnumCreaseUpDown.UP,
  },
  {
    icon: <AiOutlineTags />,
    title: "Fee tax",
    total: 1,
    totalCost: 450,
    stateUpDown: EnumCreaseUpDown.DOWN,
  },
  {
    icon: <CiDiscount1 />,
    title: "Discount",
    totalCost: 450,
    stateUpDown: EnumCreaseUpDown.DOWN,
  },
];

const Cart = () => {
  return (
    <div className="border-2 rounded-[10px] shadow-md w-[450px] p-[10px] relative h-[78vh]">
      <Button
        name="Choose bill"
        icon={<MdOutlineKeyboardArrowRight />}
        className="flex items-center text-[25px] text-blue-700"
      />
      <hr className="border-2 mb-[20px]" />
      <div className="overflow-y-auto h-[350px] shadow-md">
        {dataprooduct &&
          dataprooduct.map((item, i) => (
            <ProductCart
              key={i}
              name={item.name}
              size={item.size}
              price={item.price}
              total={item.total}
              note={item.note}
              className="border-2 mb-[5px] p-[6px] box-border crusor-pointer"
            />
          ))}
      </div>
      <div className="absolute w-[95%] bottom-0">
        <div className="grid grid-cols-2 w-[100%] ">
          {purchaseButton &&
            purchaseButton.map((item, i) => {
              return (
                <div className="p-[10px] box-border shadow-md m-[5px]" key={i}>
                  <div className="flex items-center text-left gap-[5px]">
                    {item.icon}
                    {item.title}
                    {item.total}
                  </div>
                  <p className="text-right">
                    {item.stateUpDown}
                    {item.totalCost} $
                  </p>
                </div>
              );
            })}
        </div>
        <div className="flex justify-between mt-[10px] mb-[20px] text-[20px]">
          <p>Total Cost</p>
          <p>400 $</p>
        </div>
        <hr className="border-2 mb-[20px]" />
        <div className="flex justify-between mb-[10px]">
          <Button
            icon={<AiOutlinePrinter />}
            className="w-[33%] flex justify-center items-center border-[2px] p-[10px] box-border"
          />
          <Button
            name="Save"
            className="w-[33%] border-[2px] p-[10px] box-border"
          />
          <Button
            name="Purchase"
            className="w-[33%] border-[2px] p-[10px] box-border"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
