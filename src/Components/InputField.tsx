import React from "react";

export enum EnumTypeBtn {
  TEXT = "text",
  PASSWORD = "password",
}

interface Iinput {
  label?: string;
  plaholder?: string;
  className?: string;
  id?: string;
  name?: string;
  error: string;
  register?: string;
}

const InputField: React.FC<Iinput> = ({
  label,
  plaholder,
  className,
  id,
  name,
  error,
  register,
}) => {
  return (
    <div className="input-feild-custom h-[100px]">
      <label htmlFor="">{label}</label>
      <input
        {...register}
        type="text"
        placeholder={plaholder}
        id={id}
        name={name}
        className={`border-solid border-2 outline-0 px-[12px] py-[16px] w-[364px] rounded-[10px] my-[10px] ${className}`}
      />
      {error && <p className="text-[17px] text-rose-600 text-left">{error}</p>}
    </div>
  );
};

export default InputField;
