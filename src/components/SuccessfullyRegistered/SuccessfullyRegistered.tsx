import successImage from "../../assets/images/success-image.svg";

import "./SuccessfullyRegistered.scss";

const SuccessfullyRegistered = () => {
  return (
    <section className="success-component">
      <h2 className="success-component__title">User successfully registered</h2>
      <img
        src={successImage}
        alt="success"
        className="success-component__img"
      />
    </section>
  );
};

export default SuccessfullyRegistered;
