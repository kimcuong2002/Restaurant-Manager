import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export enum EnumTypeBtn {
  TEXT = "text",
  PASSWORD = "password",
}

interface Iinput {
  label?: string;
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | string;
  register?: any;
  onChange?: any;
}

const InputField: React.FC<Iinput> = ({
  label,
  placeholder,
  className,
  id,
  name,
  error,
  register,
  onChange,
}) => {
  return (
    <div className="input-feild-custom">
      <label htmlFor="">{label}</label>
      <input
        {...register}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        id={id}
        name={name}
        className={`border-solid border-2 outline-0 px-[12px] py-[16px] w-[364px] rounded-[10px] ${className}`}
      />
      {error && <p className="text-[17px] text-rose-600 text-left"></p>}
    </div>
  );
};

export default InputField;
