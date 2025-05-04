import { NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import clsx from "clsx";
import css from "./Navigate.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigate = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" end className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" end className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigate;
