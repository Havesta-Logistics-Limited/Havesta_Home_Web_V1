import image1 from "../assets/images/Group-4.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import twitterPng from '../assets/icons/twitter (2).png';
import linkedinPng from '../assets/icons/linkedin (1).png';
import facebookPng from '../assets/icons/facebook.png'
import instagramPng from '../assets/icons/instagram.png'
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-black p-16  md:p-16 lg:p-24 text-gray-400 font-body relative">
      <div className=" p-4">
        <div className="flex items-center gap-2 mb-4">
          <img src={image1} alt="Logo" className="w-6 h-6" />
          <h3 className="text-xl font-bold text-white">Harvesta</h3>
        </div>
        <p className="text-sm leading-6">
          HARVESTA prioritizes convenience and transparency, enhancing the
          overall shopping experience. Our product also offers real-time order
          tracking, secure payment options, and eco-friendly delivery choices,
          aligning with the values of today's environmentally conscious
          consumers.
        </p>
      </div>

      <div className=" p-4">
        <h3 className="text-xl font-semibold text-white mb-4">
          Featured Links
        </h3>
        <ul className="text-sm leading-6 space-y-2">
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">Home</span>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">About</span>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">News</span>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">Partner</span>
          </li>
          <li className="flex items-center">
            <ChevronRightIcon color="success" />
            <span className="ml-2">Contact</span>
          </li>
        </ul>
      </div>

      <div className=" p-4">
        <h3 className="text-xl font-semibold text-white mb-4">
          Information HQ
        </h3>
        <div className="text-sm space-y-4">
          <div className="flex items-start gap-2">
            <TelegramIcon fontSize="small" color="success" />
            <p>17 Kaffi Street, Behind ICM, Alausa, Ikeja, Lagos State.</p>
          </div>
          <div className="flex items-center gap-2">
            <LocalPhoneIcon fontSize="small" color="success" />
            <span>080HARVESTA</span>
          </div>
          <div className="flex items-center gap-2">
            <MailOutlineIcon fontSize="small" color="success" />
            <span>hello@harvesta.com</span>
          </div>
        </div>
      </div>

      <div className=" p-4">
        <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
        <span className="flex pt-8">
          <input
            type="text"
            placeholder="Enter email address"
            className="text-xs p-2 font-light w-48 rounded-l focus:outline-none"
          />
          <TelegramIcon
            className="bg-harvestaLightGreen p-2 text-white rounded-r"
            fontSize="large"
          />
        </span>
        <div className="flex space-x-4 my-10  h-7">
          <span className="w-5 h-4 flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all">
          <img src={facebookPng} alt ='facebook-icon' className='text-white'/>
          </span>
          <span className=" w-5 h-4 flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all">
            <img src={instagramPng} alt="gmail-icon" />
          </span>
          <span className=" w-5 h-4 flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all">
            <img src={linkedinPng} alt="linkedin-icon" />
          </span>
          <span className=" w-5 h-4 flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all bg-white">
          <img src={twitterPng} alt ='twitter-icon'/>
          </span>
         
          
        </div>
      </div>
      <div className="w-full h-auto bg-harvestaDarkGreen absolute bottom-0 left-0 text-xs text-center align-middle p-2">
        © Copyright 2024 Dregon J&Z Techbase Limited
      </div>
    </footer>
  );
};

export default Footer;
