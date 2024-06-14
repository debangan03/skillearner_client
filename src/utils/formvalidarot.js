import * as Yup from "yup";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  phone: Yup.string().min(10).max(10)
  .matches(phoneRegExp, 'Phone number is not valid')
  .required('Phone number is required'),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password")

});
export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),

});