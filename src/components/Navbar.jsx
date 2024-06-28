import { Link } from "react-router-dom";
import navRoutes from "../routes/nav.routes";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons

const Navbar = () => {
  const [showMovingCart, setShowMovingCart] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function showAnimation() {
    setShowMovingCart(true);
  }

  function stopAnimation() {
    setShowMovingCart(false);
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  

  return (
    <div className="absolute z-10 w-full">
      <div className="flex flex-row items-center justify-evenly text-white mt-8 font-primary">
        <Link to={"/"} className="flex flex-row items-center">
          <img
            src="/icons/harv.png"
            alt="harvesta"
            width={"25px"}
            height={"11.13px"}
            className=""
          />
          <p className="ml-1">Harvesta</p>
        </Link>
        <div className="flex flex-row gap-5 relative">
          {navRoutes.map((item, index) => (
            <div key={index} className="relative flex items-center">
              
              <Link
                to={item.path}
                className="text-sm px-2 rounded-md hover:bg-harvestaLightGreen hover:p-2 transition-all"
                onMouseEnter={()=>setDropdownOpen(false)}
                onClick={(item.openNav ? toggleDropdown : null)}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <button onClick={toggleDropdown} className="ml-1 focus:outline-none">
                  {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
              {item.submenu && dropdownOpen && (
                <div className="absolute top-0 mt-10 w-40 bg-white shadow-lg transition-all grid grid-cols-1 justify-items-center">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className=" w-full p-2 mx-auto flex justify-center text-sm text-gray-700 hover:bg-harvestaLightGreen hover:text-white transition-all "
                      onClick={() => setDropdownOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="relative">
          <Link to={"/marketplace"} className="relative">
            <span className="bg-harvestaYellow p-2 w-12 h-12 rounded-full text-white flex items-center justify-center transition-all">
              <AddShoppingCartIcon />
            </span>
            <span
              onMouseEnter={showAnimation}
              onMouseLeave={stopAnimation}
              className="bg-harvestaYellow p-2 w-12 h-12 rounded-full text-white flex items-center justify-center hover:w-20 absolute top-0 left-0 transition-all "
            >
              <AddShoppingCartIcon
                className={`${showMovingCart ? "animate-iconBounce" : ""}`}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
