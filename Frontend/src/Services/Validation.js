import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(6).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

export const Order = Yup.object().shape({
  firstName: Yup.string().min(6).required("Required"),
  lastName: Yup.string().min(6).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.number().required("Required"),
  address: Yup.string().required("Required"),
});
