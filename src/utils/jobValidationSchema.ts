import * as Yup from "yup";

export const jobValidationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must contain at least 2 characters")
    .max(60, "Name must be no more than 60 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // RFC2822 standart
      "Invalid email format"
    ),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+380\d{9}$/, "Must be in the format: +380XXXXXXXXX"),
  position: Yup.string().required("Position is required"),
  photo: Yup.mixed()
    .required("Photo is required")
    .test("fileSize", "File's too large, max 5 mb", (value) => {
      const file = value as File;
      return file.size <= 5242880; // 5MB
    }),
});
