import React from "react";
import Button from "./Button";
import { GiNoodles, GiBowlOfRice } from "react-icons/gi";
import { TbMilkshake } from "react-icons/tb";
import { IoMdCafe } from "react-icons/io";

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
              className="flex flex-col justify-center items-center px-[25px] py-[15px] border-2 "
            />
          );
        })}
    </div>
  );
};

export default MenuProduct;
