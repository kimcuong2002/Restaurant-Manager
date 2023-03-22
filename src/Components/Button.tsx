import React, { ReactNode } from "react";
import { EnumTypeBtn } from "../../src/Type";

interface IButton {
  icon?: ReactNode;
  name?: string;
  className?: string;
  typeBtn?: EnumTypeBtn;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
