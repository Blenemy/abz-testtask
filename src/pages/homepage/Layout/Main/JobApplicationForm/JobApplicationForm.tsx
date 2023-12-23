import { Button } from "../../../../../components/Button/Button";
import { CustomInput } from "../../../../../components/CustomInput/CustomInput";
import { CustomRadio } from "../../../../../components/CustomRadio/CustomRadio";
import { SuccessfullyRegistered } from "../../../../../components/SuccessfullyRegistered/SuccessfullyRegistered";
import { UploadButton } from "../../../../../components/UploadButton/UploadButton";
import { useGetPositions } from "../../../../../hooks/useGetPositions";
import { useJobApplicationForm } from "../../../../../hooks/useJobApplicationForm";

import "./JobApplicationForm.scss";

export const JobApplicationForm = () => {
  const { formik, successfulRegistration } = useJobApplicationForm();
  const { positions } = useGetPositions();

  if (successfulRegistration) {
    return <SuccessfullyRegistered />;
  }

  return (
    <section className="application">
      <div className="application__content">
        <h2 className="application__title">Working with POST request</h2>
        <form className="application__form form" onSubmit={formik.handleSubmit}>
          <div className="form__content">
            <section className="form__text-inputs">
              <CustomInput
                type="text"
                name="name"
                required
                id="name"
                placeholder="Your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && formik.errors.name}
              />
              <CustomInput
                type="email"
                placeholder="Email"
                name="email"
                required
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && formik.errors.email}
              />
              <CustomInput
                type="tel"
                name="phone"
                required
                id="phone"
                label="+380XXXXXXXXX"
                placeholder="Phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                error={formik.touched.phone && formik.errors.phone}
              />
            </section>

            <CustomRadio
              positions={positions}
              name="position"
              required
              value={formik.values.position}
              onChangeFunc={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <UploadButton
              setFieldValue={formik.setFieldValue}
              imageName={formik.values.photo}
              error={formik.touched.photo && formik.errors.photo}
            />
          </div>
          <Button text="Sign up" type="submit" classname="form__button" />
        </form>
      </div>
    </section>
  );
};
