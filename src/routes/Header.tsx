import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <ul className="header__list">
        <li className="header__item">
          <Link to="/" className="header__link">
            Home
          </Link>
        </li>
        <li className="header__item">
          <Link to="/sobre" className="header__link">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
