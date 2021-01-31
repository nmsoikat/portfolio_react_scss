import { NavLink } from "react-router-dom";

function PortfolioMenu() {
  return (
    <ul className="project-menu">
      <li className="project-menu__item">
        <NavLink
          exact
          activeClassName="activeLink"
          to="/portfolio/all"
          className="project-menu__link"
        >
          All
        </NavLink>
      </li>
      <li className="project-menu__item">
        <NavLink
          activeClassName="activeLink"
          to="/portfolio/react"
          className="project-menu__link"
        >
          React
        </NavLink>
      </li>
      <li className="project-menu__item">
        <NavLink
          activeClassName="activeLink"
          to="/portfolio/webDesign"
          className="project-menu__link"
        >
          Web Design
        </NavLink>
      </li>
    </ul>
  );
}

export default PortfolioMenu;
