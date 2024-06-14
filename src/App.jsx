import { useState, useEffect } from "react";
import { lazy } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import ForgotPage from "./pages/ForgotPage";
import UserContext from "./Context/UserContext";
import axios from "axios";
import MyAccountPage from "./pages/MyAccountPage";
import ResetPassword from "./pages/Resetpassword";
import ContinueCourse from "./pages/ContinueCourse";
import TermsAndConditions from "./pages/TermsAndCondition";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [loginobj, setloginobj] = useState({ status: false, data: null });

  const validatetoken = async (token) => {
    let data1 = await axios.post("https://skillearner-server-1.onrender.com/validatesession", {
      token: token,
    });
    if (data1.data.status) {
      setloginobj({ status: true, data: data1.data.data });
    }
  };
  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (token) {
      validatetoken(token);
      //console.log(data1);
    }
  }, []);

  // if (!token) {

  // } else {
  //   loginobj["status"] = true;
  //   loginobj["data"] = null;

  // }
  return (
    <BrowserRouter>
      <UserContext.Provider value={loginobj}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseid" element={<CourseDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout/:id" element={<CheckoutPage />} />
          <Route path="/forgotpassword" element={<ForgotPage />} />
          <Route path="/myaccount" element={<MyAccountPage />} />
          <Route path="/reserpassword/:token" element={<ResetPassword />} />
          <Route
            path="/continuecourse/:courseId"
            element={<ContinueCourse />}
          />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
