import React from "react";
import Button from "./Button";
import { GiNoodles, GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { TbMilkshake } from "react-icons/tb";
import { IoMdCafe } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";

const MenuProductData = [
  {
    icon: <GiNoodles />,
    name: "Noodle",
  },
  {
    icon: <TbMilkshake />,
    name: "Milk Tea",
  },
  {
    icon: <GiBowlOfRice />,
    name: "Rice",
  },
  {
    icon: <IoMdCafe />,
    name: "Caffe",
  },
  {
    icon: <GiNoodles />,
    name: "Noodle",
  },
  {
    icon: <TbMilkshake />,
    name: "Milk Tea",
  },
  {
    icon: <GiCakeSlice />,
    name: "Rice",
  },
  {
    icon: <BiFoodMenu />,
    name: "All",
  },
];

const MenuProduct = () => {
  return (
    <div className="flex flex-col w-[250px] ">
      {MenuProductData &&
        MenuProductData.map((item, i) => {
          return (
            <Button
              key={i}
              icon={item.icon}
              name={item.name}
              className="flex flex-col justify-center text-black items-center px-[25px] py-[15px] border-2 mb-[10px] rounded-[8px] shadow-md text-xl hover:bg-blue-500 hover:text-white"
            />
          );
        })}
    </div>
  );
};

export default MenuProduct;
