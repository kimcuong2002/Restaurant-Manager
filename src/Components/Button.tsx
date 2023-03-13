import React, { ButtonHTMLAttributes, ReactNode } from "react";

export enum EnumTypeBtn {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

interface IButton {
  icon?: ReactNode;
  name?: string;
  className?: string;
  typeBtn: EnumTypeBtn;
}

const Button: React.FC<IButton> = ({ icon, name, className, typeBtn }) => {
  return (
    <button className={`button ${className}`} type={typeBtn}>
      {icon}
      {name}
    </button>
  );
};

export default Button;
