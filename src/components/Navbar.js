import { Outlet, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-style">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
