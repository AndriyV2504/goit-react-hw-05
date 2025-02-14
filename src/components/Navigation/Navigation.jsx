import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <div>Navigation</div>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink className={buildLinkClass} to="/">
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/movies">
              MoviesPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
