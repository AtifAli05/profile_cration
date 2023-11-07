import React from "react";
import {
  AiOutlineBell,
  AiOutlineLogin,
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// import './Index.css';
const ForgotPass = () => {
  const handleScroll = () => {
    console.log("cliclked");
  };
  const navigate = useNavigate();


  // You now have an array of five navigation items that you can use in your component.

  return (
    <>
      <div className="  min-h-screen flex items-center justify-center bg-green-100">
        <div className="bg-blue-50 max-h-full max-w-full border rounded-lg shadow-lg p-5">
          <div className="flex flex-row ">
            <i className="text-4xl text-secondary-orange">
              {" "}
              <AiOutlineLogin />
            </i>
            <span className="text-2xl font-bold font-serif pl-2 text-secondary-orange">
              ForgotPass
            </span>
          </div>
          <p className="text-lg py-1">
            This is login page please add passowrd and name{" "}
          </p>
          <div className="flex flex-col justify-start text-left pb-3 pt-2">
            <label className="text-lg ">Email</label>
            <input className="px-0.5 py-0.5 bg-gray-200 border focus:bg-gray-100 border-b-orange-500 rounded-lg outline-none" />
          </div>
          <div className="flex flex-col justify-start text-left pb-3">
            <label className="text-lg ">Email</label>
            <input className=" py-0.5 bg-gray-200 border border-b-orange-500 rounded-lg outline-none" />
          </div>
          <div className="flex justify-center">
            {" "}
            <button className="px-9 py-1 text-lg shadow-md rounded-full mt-2 font-bold hover:bg-orange-200 bg-orange-300">
              Reset{" "}
            </button>
          </div>
          <div className="flex justify-end py-2">
            <p className="" onClick={()=>navigate("/")} >Back to Login s?</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPass;
