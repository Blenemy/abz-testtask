import { Button } from "../../../../components/Button/Button";
import Logo from "../../../../assets/images/Logo.svg";

import "./Header.scss";
import { Container } from "../../../../components/Container/Container";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <nav className="header__navbar navbar">
            <div className="navbar__logo-container">
              <img src={Logo} alt="Logo" className="navbar__logo" />
            </div>
            <div className="navbar__authentification">
              <Button text="Users" type="button" />
              <Button text="Sign up" type="button" />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};
