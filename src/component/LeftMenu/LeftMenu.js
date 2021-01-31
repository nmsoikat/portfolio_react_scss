import { NavLink } from "react-router-dom";

function LeftMenu() {
  return (
    <nav className="left-nav">
      <ul className="menu">
        <li className="menu__item">
          <NavLink
            exact
            activeClassName="activeLink"
            to="/"
            className="menu__link"
          >
            About
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            activeClassName="activeLink"
            to="/resume"
            className="menu__link"
          >
            Resume
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            activeClassName="activeLink"
            to="/portfolio/all"
            className="menu__link"
          >
            Portfolio
          </NavLink>
        </li>
        {/* <li className="menu__item"> <a href="#" className="menu__link">Contact</a></li> */}
      </ul>
    </nav>
  );
}

export default LeftMenu;
