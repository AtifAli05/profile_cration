import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { onLoginSystem } from "../utils/ApiManager";
import { toast } from "react-toastify";
import {onLoginnSystem} from "../redux/Actions"
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleUserName = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "username") {
      setUserNameError(false);
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const onClear = () => {
    setUsername("");
    setPassword("");
  };

  const loginUserr = async () => {
    setLoading(true);

    if (username === "") {
      setUserNameError(true);
      setLoading(false);
      return;
    } else {
      setUserNameError(false);
    }

    if (password === "") {
      setPasswordError(true);
      setLoading(false);
      return;
    } else {
      setPasswordError(false);
    }
    let payload={
      "email": username,
      "password": password,
    }
    onLoginSystem(payload).then((el) => {
      console.log(el.data.accessToken,"[[[[[");
        dispatch(onLoginnSystem(el.data))

        
      console.log("fsdfsdfsdfsdfsdfsd");
          navigate("/prodcutCatalogue");
    
      }).catch((response) => {
        if (response?.message === "Network Error") {
          setLoading(false)
          toast.info(response?.message)
        }
  
        if (response?.response?.status === 422) {
          setLoading(false)
          toast.info(response.data.message)
        }
        if (response?.response?.status == 404) {
          setLoading(false)
          toast.info(response.response.data.message)
        }
      else{
      setLoading(false)
          toast.info("Internal Servel Error")
      }
  
      })
    // Add your login logic here, and call the navigate function upon successful login
    // Example:
    // if (username === "exampleUser" && password === "examplePassword") {
    //   navigate("/prodcutCatalogue");
    // } else {
    //   setLoading(false);
    //   // Handle login failure
    // }

    // Replace the example logic above with your actual login logic.
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="bg-blue-50 max-h-full max-w-full border rounded-lg shadow-lg p-5">
          <div className="flex flex-row">
            <i className="text-4xl text-secondary-orange">
              {" "}
              <AiOutlineLogin />
            </i>
            <span className="text-2xl font-bold font-serif pl-2 text-secondary-orange">
              Login
            </span>
          </div>
          <p className="text-lg py-1">
            This is the login page. Please add your email and password.
          </p>
          <div className="flex flex-col justify-start text-left pb-3 pt-2">
            <label className="text-lg">Email</label>
            <input
              className="px-0.5 py-0.5 bg-gray-200 border focus:bg-gray-100 border-b-orange-500 rounded-lg outline-none"
              type="text"
              name="username"
              value={username}
              onChange={handleUserName}
            />
            <span className="fielderror">
              {userNameError ? <span>UserName is Empty</span> : ""}
            </span>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="flex flex-col justify-start text-left pb-3">
            <label className="text-lg">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleUserName}
              className="py-0.5 bg-gray-200 border border-b-orange-500 rounded-lg outline-none"
            />
            <span className="fielderror">
              {passwordError ? <span>Password is Empty</span> : ""}
            </span>
            <div className="mt-3">
              <a href="#/">Forgot Password?</a>
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <button
              onClick={onClear}
              className="px-9 py-1 text-lg shadow-md rounded-full mt-2 font-bold hover:bg-orange-200 bg-orange-300"
            >
              Clear
            </button>
            <button
              onClick={()=>loginUserr()}
              className="px-9 py-1 text-lg shadow-md rounded-full mt-2 font-bold hover:bg-orange-200 bg-orange-300"
            >
              Login
              {isLoading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
