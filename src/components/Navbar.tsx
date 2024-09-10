import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navbar = (
    <>
      <li>
        <NavLink to="/" className="mx-2">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products" className="mx-2">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="mx-2">About us</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start px-20">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbar}
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            Campers
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end pe-20">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
