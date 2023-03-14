import React from "react";
import InputField from "../Components/InputField";
import Button, { EnumTypeBtn } from "../Components/Button";
import { BiSearchAlt, BiBellMinus } from "react-icons/bi";
import { CgProfile, CgMenuRound } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex justify-between items-center ">
      <div>LOGO</div>
      <div className="flex justify-between">
        <InputField placeholder={"Search for food ..."} />
        <Button icon={<BiSearchAlt />} typeBtn={EnumTypeBtn.BUTTON} />
      </div>
      <div>
        <Button icon={<BiBellMinus />} typeBtn={EnumTypeBtn.BUTTON} />
        <Button icon={<CgProfile />} typeBtn={EnumTypeBtn.BUTTON} />
        <Button icon={<CgMenuRound />} typeBtn={EnumTypeBtn.BUTTON} />
      </div>
    </div>
  );
};

export default Header;
