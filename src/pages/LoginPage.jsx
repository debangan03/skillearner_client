import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../utils/formvalidarot";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
const LoginPage = () => {
  let sessiondata = useContext(UserContext);
  useEffect(() => {
    if (sessiondata?.status) {
      toast.success("Already Logged In");
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, []);

  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const handlesubmit_for_signin = async (values) => {
    let resdata = await axios.post("https://skillearner-server-1.onrender.com/login", values);
    let data = resdata.data;
    //console.log(data);
    if (data.success) {
      localStorage.setItem("accessToken", data.accessToken);
      toast.success("login successful");
      setTimeout(() => {
        window.location='/'
      }, 1000);
    } else {
      toast.error("something went wrong");
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        handlesubmit_for_signin(values);
        action.resetForm();
      },
    });

  return (
    <div className="lg:min-h-screen my-20 lg:my-0 border-2 lg:border-0 border-black mx-4 rounded-lg flex items-center justify-center bg-gray-100">
      <Toaster />
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Skill Earner
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
            {errors.email && touched.email ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
            {errors.password && touched.password ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {errors.password}
              </p>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <Link
              to="/forgotpassword"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <span className="text-sm font-bold text-blue-500">
          Don't Have an Account ?{" "}
        </span>
        <Link
          to={"/register"}
          className="text-sm hover:underline font-bold text-red-500"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
