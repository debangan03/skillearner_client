import React, { useEffect, useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import emailjs from "emailjs-com";

const CheckoutPage = () => {
  const [courseDetails, setcourseDetails] = useState();
  const { id } = useParams();
  let session = useContext(UserContext);
  const navigate = useNavigate();
  const fetchcoursebyid = async () => {
    const res = await axios.post(`https://skillearner-server-1.onrender.com/getcoursebyid`, {
      id: id,
    });
    //console.log(res.data);
    if (res?.data?.status) setcourseDetails(res?.data?.data);
  };
  useEffect(() => {
    if (id) {
      fetchcoursebyid(id);
    }
  }, []);

  useEffect(() => {
    if (!session.status) {
      toast.error("please login before continue");
      setTimeout(() => {
        navigate(`/courses/${id}`);
      }, 200);
    } else {
      setFormData(session.data.data);
    }
  }, [session]);
  const chkcoursepurchasebyuser = async (cid) => {
    let data = await axios.post(`https://skillearner-server-1.onrender.com/veryfypurchasebyuser`, {
      id: session?.data?.id,
      cid: cid,
    });
    if (data?.data?.status) {
      toast.error("you have already puchased this course");
      setTimeout(() => {
        navigate(`/myaccount`);
      }, 1000);
    }
  };
  useEffect(() => {
     chkcoursepurchasebyuser(id);
  }, [session]);

  const [formData, setFormData] = useState({
    name: session?.data?.name,
    email: session?.data?.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const initiatePayment = async () => {
    console.log();
    const { data } = await axios.post("https://skillearner-server-1.onrender.com/prepayment", {
      amount: courseDetails?.price,
      email: session?.data?.email,
      name: session?.data?.name,
      cid: courseDetails._id,
    });
    if (!data) {
      toast.error("unexpected error occurred");
    }
    var options = {
      key: data.key,
      amount: data.data.amount,
      currency: "INR",
      name: "Skillearner Academy", //your business name
      description: "Test Transaction",
      image: "https://i.ibb.co/D5wmvLc/logo11.png",
      order_id: data.data.id,
      handler: async function (response) {
        // Verify the payment on the server
        const {
          data: { success },
        } = await axios.post("https://skillearner-server-1.onrender.com/postpayment", {
          order_id: data.data.id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        });
        if (success) {
          const now = Date.now();

          // Create a new Date object using the current timestamp
          const currentDate = new Date(now);

          // Extract the date components
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth() + 1; // Months are zero-indexed
          const day = currentDate.getDate();

          // Format the date as needed (e.g., YYYY-MM-DD)
          const formattedDate = `${year}-${month
            .toString()
            .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
          const templateParams = {
            user_email: session?.data?.email,
            user_name: session?.data?.name,
            course_name: data.course.title,
            purchase_date: formattedDate,
            order_id: data.data.id,
            price: `₹ ${data.course.price}`,
          };

          emailjs
            .send(
              "service_tbqcu3d",
              "template_jkscp0q",
              templateParams,
              "AoNl8EoapXcIi2QKu"
            )
            .then((response) => {
              //console.log("SUCCESS!", response.status, response.text);
              toast.success("mail sent successfully");
              setMessage("Password reset email sent successfully");
            })
            .catch((err) => {
              //toast.error('error sending email', err);
              console.log("FAILED...", err);
            });
          toast.success("payment successfull");
          setTimeout(() => {
            navigate("/myaccount");
          }, 1000);
        } else {
          toast.error("payment error");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Skill earner account", //your customer's name
        email: "suport@skillearner.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#172554",
      },
    };
    var rzp1 = window.Razorpay(options);
    rzp1.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    //console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Checkout</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Course Details</h3>
            <img
              src={courseDetails?.image}
              alt={courseDetails?.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold">{courseDetails?.title}</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              {courseDetails?.description}
            </p>
            <p className="text-xl font-bold">₹{courseDetails?.price}</p>
          </div>

          {/* Checkout Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Payment Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="button"
                onClick={initiatePayment}
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700"
              >
                Proceed for Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
