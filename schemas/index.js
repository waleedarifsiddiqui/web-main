import * as Yup from "yup";

export const signUpSchema = Yup.object({
  user_name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  budget: Yup.string().required("This field must not be empty"),
  time: Yup.string().required("This field must not be empty"),
  message: Yup.string().required("This field must not be empty"),
});
