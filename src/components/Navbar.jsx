import Logo from "./Logo";
import NavLink from "./NavLink"
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink href="/" text="home"></NavLink>
            </li>
            <li>
              <NavLink href="/animals" text="All Animals"></NavLink>
            </li>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink href="/" text="Home"></NavLink>
          </li>
          <li>
            <NavLink href="/animals" text="All Animals"></NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn btn-soft mr-2">
          Login
        </Link>
        <Link
          href="/register"
          className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
