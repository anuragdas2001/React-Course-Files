import { Link, Outlet, NavLink, isActive } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="/items"
        >
          Items
        </NavLink>
      </div>
      {/*displays the children routes*/}
      <Outlet />
    </>
  );
}
