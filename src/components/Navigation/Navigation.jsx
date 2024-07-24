import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <header>Navigation</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
