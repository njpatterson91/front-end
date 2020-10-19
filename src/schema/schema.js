import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(3, "name must be 3 character"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(3, "password must be at least 3 characters"),
}) 