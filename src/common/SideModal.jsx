import navRoutes from "../routes/navRoutes";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { closeModal } from "../redux/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SideModal = () => {
  const { modalOpen } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  };

  useEffect(() => {
    handleModalOpen(); // Call on initial render and modal state changes
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [modalOpen]);
  console.log(modalOpen);
  return (
    <>
      <div
        className={`lg:hidden h-[100vh] bg-black/50 ${
          modalOpen ? "min-w-[100%] " : "min-w-[0%]"
        } z-50 absolute top-0 left-0 bottom-0 shadow-lg transition-all `}
      >
        {modalOpen && (
          <div
            className={` h-[100vh] bg-primary 
            block min-w-[70%]  
           absolute top-0 left-0 transition ease-in-out `}
          >
            <div className=" flex justify-between p-4 mt-[27px]">
              <Logo />
              <CloseIcon
                className="text-harvestaYellow"
                onClick={() => dispatch(closeModal())}
                sx={{
                  fontSize: "30px",
                }}
              />
            </div>

            <div className=" h-auto mt-10 grid justify-center items-center space-y-16 w-full">
              {navRoutes.map((item, index) => (
                <Link
                  key={index}
                  className="text-white text-center  w-[250px] mx-auto py-2 flex gap-4 justify-center items-center hover:bg-tertiaryGreenHover hover:rounded-lg"
                  to={item.path}
                  onClick={() => dispatch(closeModal())}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideModal;
