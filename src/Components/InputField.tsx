import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { EnumTypeInput } from "../Type";
interface Iinput {
  label?: string;
  placeholderInput?: string;
  typeInput: EnumTypeInput;
  className?: string;
  name?: string;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | string;
  errorValid?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | string;
  register?: any;
}

const InputField: React.FC<Iinput> = ({
  label,
  placeholderInput,
  typeInput,
  className,
  name,
  errorValid,
  register,
  error,
}) => {
  return (
    <div className="input-feild-custom">
      <label htmlFor="">{label}</label>
      <input
        {...register}
        type="text"
        placeholder={placeholderInput}
        name={name}
        className={`border-solid border-2 outline-0 px-[12px] py-[16px] w-[364px] rounded-[10px] ${className}`}
      />
      {error && <span className="errors"></span>}
      {errorValid && <p className="text-[17px] text-rose-600 text-left"></p>}
    </div>
  );
};

export default InputField;
