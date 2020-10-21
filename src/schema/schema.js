import * as yup from "yup";

export default yup.object().shape({

  first_name: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  last_name: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),

  username: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  password: yup
    .string()
    .required("password is required")
    .min(4, "password must be at least 4 characters"),
});
