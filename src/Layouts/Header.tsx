import React from "react";
import InputField from "../Components/InputField";
import Button, { EnumTypeBtn } from "../Components/Button";
import { BiSearchAlt, BiBellMinus } from "react-icons/bi";
import { CgProfile, CgMenuRound } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[100px] bg-sky-400 px-[30px] ">
      <div>LOGO</div>
      <div className="flex bg-white rounded-[35px] px-[10px]">
        <InputField
          placeholder={"Search for food ..."}
          className="py-[10px] rounded-[35px] border-0  border-white"
        />
        <Button
          icon={<BiSearchAlt />}
          typeBtn={EnumTypeBtn.BUTTON}
          className=" text-[30px]"
        />
      </div>
      <div className="text-[40px] w-[150px] flex justify-between">
        <Button icon={<BiBellMinus />} typeBtn={EnumTypeBtn.BUTTON} />
        <Button icon={<CgProfile />} typeBtn={EnumTypeBtn.BUTTON} />
        <Button icon={<CgMenuRound />} typeBtn={EnumTypeBtn.BUTTON} />
      </div>
    </div>
  );
};

export default Header;
