import Button from "../Components/Button";
import InputField from "../Components/InputField";
import { EnumTypeBtn } from "../../src/Type";
import { CgMenuRound } from "react-icons/cg";
import { RiBillLine } from "react-icons/ri";
import { BiMapPin, BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center h-[70px] px-[20px] text-[25px] shadow-md text-slate-500">
      <div className="flex w-[130px] items-center w-[22%]">
        <Button icon={<CgMenuRound />} typeBtn={EnumTypeBtn.BUTTON} />
        <Button
          icon={<RiBillLine />}
          name="Bill"
          typeBtn={EnumTypeBtn.BUTTON}
          className="flex items-center justify-around ml-[20px]"
        />
        <Button
          icon={<BiMapPin />}
          name="Map"
          typeBtn={EnumTypeBtn.BUTTON}
          className="flex items-center justify-around ml-[20px]"
        />
      </div>
      <div className="flex">
        <div className="flex border-2 rounded-[10px] items-center pr-[10px]">
          <InputField
            placeholder="Search for food"
            className="h-[45px] border-0"
          />
          <Button
            icon={<AiOutlineSearch />}
            typeBtn={EnumTypeBtn.BUTTON}
            className="flex items-center justify-around "
          />
        </div>
        <Button
          icon={<TbSettings />}
          name="Settings"
          typeBtn={EnumTypeBtn.BUTTON}
          className="flex items-center justify-around ml-[20px]"
        />
      </div>
      <Button icon={<BiDotsHorizontalRounded />} typeBtn={EnumTypeBtn.BUTTON} />
    </div>
  );
};

export default Header;
