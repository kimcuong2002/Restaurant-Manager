import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../Components/InputField";
import Button, { EnumTypeBtn } from "../Components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-[70vh] text-center bg-gray-200 md: flex-row">
        <div className="">
          <p className="text-[50px] font-bold text-blue-600">
            Manager Restaurant
          </p>
          <p className="text-[20px] text-slate-600 mb-5w">
            Manage Restaurant food is the soul of all things
          </p>
        </div>
        <div className="login-actions px-[15px] mt-[30px] bg-white rounded-[6px] flex flex-col items-center justify-center ">
          <form action="" className="w-full px-[10px] rounded-[6px] mt-[15px]">
            <InputField
              plaholder="Name Login"
              id="namelogin"
              name="namelogin"
              register={register}
              error={errors.namelogin}
            />
            <InputField
              plaholder="Password"
              error="Password Invalid"
              className="mt-[15px]"
              id="password"
              name="password"
            />
            <Button
              name="Submit"
              typeBtn={EnumTypeBtn.SUBMIT}
              className="w-[364px] text-white bg-blue-600 rounded-[15px] px-[12px] py-[16px] mb-[10px] mt-[30px]"
            />
          </form>
          <Link
            to="/forgotpassword"
            className="forgot-password text-blue-800 mb-[10px]"
          >
            Forgot Password
          </Link>
          <hr className="border-solid border mb-[15px] w-full" />
          <Button
            name="Create Account"
            typeBtn={EnumTypeBtn.BUTTON}
            className="w-[50%] text-white bg-green-500 rounded-[15px] px-[12px] py-[16px] mb-[10%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
