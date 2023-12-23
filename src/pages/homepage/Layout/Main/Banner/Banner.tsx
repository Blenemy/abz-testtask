import { Button } from "../../../../../components/Button/Button";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="main__banner banner">
      <div className="banner__content">
        <h1 className="banner__title">
          Test assignment for front-end developer
        </h1>
        <p className="banner__headlineContent">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button text="Sign up" type="button" classname="banner__button" />
      </div>
    </div>
  );
};
