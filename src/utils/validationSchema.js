import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .required("Required")
    .matches(/^\+380\d{9}$/, "Invalid phone number"),
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  shipping: Yup.string().required("Select shipping method"),
  payment: Yup.string().required("Select payment method"),
});
