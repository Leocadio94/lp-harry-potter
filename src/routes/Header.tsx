import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="container">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `header__link${isActive ? " header__link--active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `header__link ${isActive ? "header__link--active" : ""}`
              }
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
