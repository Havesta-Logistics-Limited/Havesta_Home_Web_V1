import { Link } from "react-router-dom";
import navRoutes from "../routes/navRoutes.jsx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import { useSelector } from "react-redux";
import Logo from "./Logo";
import MenuIcon from '@mui/icons-material/Menu';
import {openModal} from "../redux/features/modalSlice"
import {useDispatch} from 'react-redux'
import SideModal from "./SideModal.jsx";
const Navbar = () => {
/*   const { icon } = useSelector((state) => state.iconReducer);
 */  const dispatch = useDispatch()
  const {modalOpen} = useSelector((state)=>state.modalReducer)

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
    <div className=" p-6 mt-5 absolute z-10 w-full font-primary lg:px">

      <div className="grid grid-flow-col items-center justify-items-start lg:mx-52 relative ">
      <Link to={"/"} className="">  {/* Logo */}
        <Logo />
      </Link>

      <div className="hidden lg:flex flex-row gap-5 relative">  {/* Routes */}
        {navRoutes.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center  p-2 rounded-md hover:bg-harvestaLightGreen hover:p-2 transition-all"
          >
            <Link
              to={item.path}
              className="text-sm text-white"
              onMouseEnter={() => setDropdownOpen(false)}
              onClick={item.openNav ? toggleDropdown : null}
            >
              {item.name}
            </Link>
            {item.submenu && (
              <button
                onClick={toggleDropdown}
                className="ml-1 focus:outline-none text-white"
              >
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

      <div className="absolute right-0 text-xl lg:hidden">
        <MenuIcon 
        onClick={()=>dispatch(openModal())}
        className=" text-harvestaYellow" 
        sx={{
          fontSize: '40px'
        }} />
      </div>

      {/* <div className="relative">
          <Link to={"/marketplace"} className="relative">
            <span className="bg-harvestaYellow p-2 w-12 h-12 rounded-full text-white flex items-center justify-center transition-all">
              <AddShoppingCartIcon />
            </span>
            <span
              onMouseEnter={showAnimation}
              onMouseLeave={stopAnimation}
              className={`${
                icon == "rider" ? "bg-harvestaDarkGreen" : "bg-harvestaYellow"
              } p-2 w-12 h-12 rounded-full text-white flex items-center justify-center hover:w-20 absolute top-0 left-0 transition-all`}
            >
              <AddShoppingCartIcon
                className={`${showMovingCart ? "animate-iconBounce" : ""}`}
              />
            </span>
          </Link>
        </div> */}
      </div>
     
    </div>
  );
};

export default Navbar;
