import React from "react";
import Button from "../Components/Button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { menuButton } from "../util";

interface iModal {
  className?: string;
  open: boolean;
}

const Modal: React.FC<iModal> = ({ className }, open) => {
  return (
    <div
      className={` w-[250px] rounded-r-[20px] shadow-md ${className}`}
      onClick={() => open(!true)}
    >
      <div className="flex w-[250px] justify-end items-center text-blue-700 text-[25px] border-2 py-[8px] rounded-r-[20px] pr-[20px]  mb-[15px]">
        Back
        <MdKeyboardArrowLeft />
      </div>
      <hr className="mb-[15px]" />
      <div className="flex flex-col">
        {menuButton &&
          menuButton.map((item, i) => {
            return (
              <Button
                key={i}
                name={item.name}
                className="border-2 m-[5px] py-[15px] rounded-r-[20px]"
              />
            );
          })}
      </div>
    </div>
  );
};

export default Modal;
