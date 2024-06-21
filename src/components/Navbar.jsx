import { Link } from "react-router-dom";
import navRoutes from "../routes/nav.routes";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState } from "react";

const Navbar = () => {
  const [showMovingCart, setShowMovingCart] = useState(false);

  function showAnimation() {
    setShowMovingCart(true);
  }

  function stopAnimation() {
    setShowMovingCart(false);
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
            <div key={index} className="relative">
              <Link
                to={item.path}
                className="text-sm px-2 rounded-md hover:bg-harvestaLightGreen hover:p-2 transition-all"
              >
                {item.name}
              </Link>
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
