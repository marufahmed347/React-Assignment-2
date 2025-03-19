import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavbarArea() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className=" bg-zinc-100 border-b-1 border-b-[#E4E4E7] mx-auto">
        <div className="px-4 lg:px-10">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div>
              <NavLink to='/'><img src="/logo.png" alt=""/></NavLink>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-6 text-[#71717A] ">
              <li>
                <NavLink to="/" className="hover:text-blue-500 "
                    style={({ isActive }) => ({
                    color: isActive ? "black" : "#71717A",
                    textDecoration: isActive ? "underline black 3px" : "none",
                    fontWeight: isActive ? "bold" : "normal",
                    textUnderlineOffset: isActive ? "34px" : "none"
                    })}
                >
                Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/Incidents" className="hover:text-blue-500"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#71717A",
                  textDecoration: isActive ? "underline black 3px" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                  textUnderlineOffset: isActive ? "34px" : "none"
                  })}
                >
                Incidents
                </NavLink>
              </li>
              <li>
                <NavLink to="/Locations" className="hover:text-blue-500"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#71717A",
                  textDecoration: isActive ? "underline black 3px" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                  textUnderlineOffset: isActive ? "34px" : "none"
                  })}
                >
                Locations
                </NavLink>
              </li>
              <li>
                <NavLink to="/Activities" className="hover:text-blue-500"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#71717A",
                  textDecoration: isActive ? "underline black 3px" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                  textUnderlineOffset: isActive ? "34px" : "none"
                  })}
                >
                Activities
                </NavLink>
              </li>
              <li>
                <NavLink to="/Documents" className="hover:text-blue-500"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#71717A",
                  textDecoration: isActive ? "underline black 3px" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                  textUnderlineOffset: isActive ? "34px" : "none"
                  })}
                >
                Documents
                </NavLink>
              </li>
              <li>
                <NavLink to="/Cypher AI" className="hover:text-blue-500"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#71717A",
                  textDecoration: isActive ? "underline black 3px" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                  textUnderlineOffset: isActive ? "34px" : "none"
                  })}
                >
                Cypher AI
                </NavLink>
              </li>
            </ul>

            <div className="hidden lg:flex space-x-2">
              
              <div className="flex justify-center items-center">
                <img src="/noti.png" alt="" />
              </div>

              <div className="flex space-x-2">
                <div className="flex justify-center items-center">
                <img src="/man.png" alt="" />
                </div>
                <div className="flex-col mx-auto text-[#71717A]">
                  <p className="font-semibold">Usman Zafar</p>
                  <p>usmanzafar@gmail.com</p>
                </div>

              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden shadow-md h-screen">
            <div className="lg:hidden text-center text-[#71717A]">
              <NavLink
                to="/"
                className="block px-4 py-2 ext-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/Incidents"
                className="block px-4 py-2  hover:bg-gray-100"
              >
                Incidents
              </NavLink>
              <NavLink
                to="/Locations"
                className="block px-4 py-2  hover:bg-gray-100"
              >
                Locations
              </NavLink>
              <NavLink
                to="/Activities"
                className="block px-4 py-2  hover:bg-gray-100"
              >
                Activities
              </NavLink>
              <NavLink
                to="/Documents"
                className="block px-4 py-2  hover:bg-gray-100"
              >
                Documents
              </NavLink>
              <NavLink
                to="/Cypher AI"
                className="block px-4 py-2  hover:bg-gray-100"
              >
                Cypher AI
              </NavLink>
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default NavbarArea;