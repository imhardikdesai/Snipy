import * as yup from "yup";

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .max(250, "Title is too long"),
});
