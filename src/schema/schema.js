import * as yup from "yup";

export default yup.object().shape({
  fName: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  lName: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  userName: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "password must be at least 8 characters"),
});
