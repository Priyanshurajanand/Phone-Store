import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav className="bg-body-white ">
        <div className="container mx-auto mt-3 border-b-2">
          <div className="flex justify-between mb-2">
          <button
            className="lg:hidden px-2 py-1 border rounded-md text-white focus:outline-none"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="block h-1 w-6 bg-black" />
            <span className="block h-1 w-6 bg-black mt-1" />
            <span className="block h-1 w-6 bg-black mt-1" />
          </button>
          <div className="lg:hidden ">
            <SearchInput />
          </div>
          </div>

          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } lg:hidden absolute top-12 right-0 bg-white rounded-md shadow-md w-full z-50`}
          >
            <ul className="py-2 text-center gap-5">
              <li>
                <Link to="/" className="block px-4 py-2 text-black">
                  Home
                </Link>
              </li>
              <hr />
              <li className="group relative">
                <Link
                  to={"/categories"}
                  className="block px-4 py-2 text-black cursor-pointer group-hover:text-gray-300 z-99"
                >
                  Categories
                </Link>
              </li>
              <hr/>
              {!auth?.user ? (
                <>
                  <li >
                    <NavLink
                      to="/register"
                      className="block px-4 py-2 text-black"
                    >
                      Register
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink to="/login" className="block px-4 py-2 text-black">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="group relative py-2">
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="text-black cursor-pointer group-hover:text-gray-300  px-4 py-4"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="absolute hidden mt-2 space-y-2 px-4 py-2 bg-white  left-1/2 text-black border rounded-md group-hover:block">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="block px-4 py-2"
                        >
                          Dashboard
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="block px-4 py-2"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <hr />
              <li className="py-2">
                <Badge count={cart?.length} showZero className="">
                  <NavLink to="/cart" className="text-black  px-4 py-2">
                    Cart
                  </NavLink>
                </Badge>
              </li>

              {/* Add more menu items as needed */}
            </ul>
          </div>
          <div className="hidden lg:flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">
              Phone Store
            </Link>
            <SearchInput />
            <ul className="flex items-center space-x-6">
              <li>
                <NavLink to="/" className="text-black">
                  Home
                </NavLink>
              </li>
              <li className="group relative">
                <Link
                  to={"/categories"}
                  className="text-black cursor-pointer group-hover:text-gray-300"
                >
                  Categories 
                </Link>
                <ul className="absolute hidden mt-2 space-y-2 bg-white text-black border rounded-md group-hover:block ">
                  {categories?.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/category/${c.slug}`}
                        className="block px-4 py-2"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth?.user ? (
                <>
                  <li>
                    <NavLink to="/register" className="text-black">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="text-black">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="group relative">
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="text-black cursor-pointer group-hover:text-gray-300"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="absolute hidden mt-2 space-y-2 bg-white text-black border rounded-md group-hover:block">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="block px-4 py-2"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="block px-4 py-2"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li>
                <Badge count={cart?.length} showZero className="mr-5">
                  <NavLink to="/cart" className="text-white text-xl">
                    🛒
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
