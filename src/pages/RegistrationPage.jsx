import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../utils/formvalidarot";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import UserContext from "../Context/UserContext";

function RegistrationPage() {
  const session = useContext(UserContext);
  const navigate = useNavigate();

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (session.status) {
      toast.error("already logged in");
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  }, []);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4500/signup", { email, otp, name, password, phone });
      if (res.data.success) {
        toast.success("Registration successful");
        navigate("/login");
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      toast.error("Error verifying OTP");
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      setEmail(values.email);
      setName(values.name);
      setPassword(values.password);
      setPhone(values.phone);
      try {
        const res = await axios.post("http://localhost:4500/sendotp", { email: values.email,name:values.name });
        if (res.data.success) {
          setOtpSent(true);
          toast.success("OTP sent to email");
        } else {
          toast.error("Error sending OTP");
        }
      } catch (error) {
        toast.error("Error sending OTP");
      }
    },
  });

  return (
    <div>
      <Toaster />
      <div className="lg:min-h-screen my-20 lg:my-0 rounded-lg border-2 lg:border-0 border-black mx-4 flex items-center justify-center bg-gray-100 p-2">
        <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Register to Skill Earner
          </h2>
          {!otpSent ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                  required
                />
                {errors.name && touched.name ? (
                  <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                    {errors.name}
                  </p>
                ) : null}
              </div>
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
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone No
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your phone no"
                  required
                />
                {errors.phone && touched.phone ? (
                  <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                    {errors.phone}
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
                  value={values.password}
                  onChange={handleChange}
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
                  Send OTP
                </button>
              </div>
              <span className="text-sm font-bold text-blue-500">
                Already Have an Account?{" "}
              </span>
              <Link
                to={"/login"}
                className="text-sm hover:underline font-bold text-green-500"
              >
                Login
              </Link>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter the OTP"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Verify OTP
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
