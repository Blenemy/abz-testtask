import { useFormik } from "formik";
import { createUser } from "../api/createUser";
import { fetchUsers, resetCurrentPage } from "../app/features/usersSlice";
import { useAppDispatch } from "../app/hooks";
import { useState } from "react";
import { jobValidationSchema } from "../utils/jobValidationSchema";

export type DataToSend = {
  email: string;
  name: string;
  phone: string;
  photo: File;
  position: number;
};

export const useJobApplicationForm = () => {
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  const dispatch = useAppDispatch();

  // close additional users and refetch new set of users after successfull authorization
  const handleButtonClick = () => {
    dispatch(resetCurrentPage());
    dispatch(fetchUsers(1));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position: 1,
      photo: null,
    },
    validationSchema: jobValidationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("position_id", String(values.position));
        if (values.photo) formData.append("photo", values.photo);

        const response = await createUser(formData);
        handleButtonClick();
        setSuccessfulRegistration(true);
        console.log("Success:", response);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return { formik, successfulRegistration };
};
