import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { vendorForm, vendorStats } from "../config/vendors.config";
import Checkbox from "@mui/joy/Checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReviewsRoutes from "../routes/reviews.routes";
import FAQ from "../components/faq..jsx";
import MobileReview from "../components/landing/Reviews-Fragment/MobileReview.jsx";
import WebReview from "../components/landing/Reviews-Fragment/WebReview.jsx";
const Vendor = ({hero}) => {


  const formTitleStyle = {
    fontSize: "11px",
    fontWeight: "700",
    color: "#242424",
    lineHeight: "1.5",
    fontFamily: "Plus Jakarta Sans",
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    const prevSlide =
      currentSlide === 0 ? ReviewsRoutes.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const handleNextClick = () => {
    const nextSlide =
      currentSlide === ReviewsRoutes.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };
  return (
   <>
   <section>
        <div className="relative pb-5">
          <div className="w-full bg-cover h-[30%] py-20 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823045/Group_1000002049_bjs7ez.png')]">
            {/* HERO SECTION */}
            <div className="mt-32 md:grid grid-cols-2 justify-items-center lg:h-[40vh] relative lg:ml-44">
              <div className=" p-2">
                <h2 className="p-3 text-[45px] font-primary font-bold lg:leading-tight lg:text-[55px] text-white text-6xl ">
                 Make More Sales <br />
                  <span className="text-primary font-[700]">Online </span>with
                  Harvesta
                </h2>
                <p className=" p-3  text-md text-white">
                Let us help you take your business to the next level
                </p>
               {/*  <button className="mb-10 font-primary rounded-full bg-white p-3 text-black text-xs font-bold shadow-md w-[100px] ml-2 hover:bg-primary hover:text-white transition-all">
                  Get Started
                </button> */}
              </div>
              <div className="lg:absolute right-52">
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719527040/Ellipse_69_2_n4dk4u.svg"
                  alt=""
                  className="w-[400px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center mt-20 font-primary ">
          <h2 className="text-3xl font-bold font-primary mt-10">
            Complete The Form
          </h2>
          <form className="my-12 lg:w-1/2 w-full p-8">
            <div className="lg:grid grid-cols-2 gap-9">
              {vendorForm.map((item, index) =>
                item.option ? (
                  <FormControl key={index} className=" w-full">
                    <FormLabel style={formTitleStyle} className="font-primary">
                      {item.title}
                    </FormLabel>

                    <Select
                      placeholder={item.placeholder}
                      startDecorator={
                        item.phoneNumber ? <KeyboardArrowDown /> : false
                      }
                      endDecorator={
                        item.phoneNumber ? "" : <KeyboardArrowDown />
                      }
                      indicator
                      sx={{
                        padding: "8px",
                        backgroundColor: "#f3f4f6",
                        fontFamily: "Helvetica",
                        fontSize: "12px",
                      }}
                    >
                      {item.subItems &&
                        item.subItems.map((subItem, subIndex) => (
                          <>
                            <Option key={subIndex} value={subItem} sx={{
                              '&:hover': {
                                backgroundColor: '#80EEC6', // Customize the hover color
                              },
                              '&.Mui-selected': {
                                backgroundColor: "#01BE72", // Keeps the selected item's background unchanged
                                '&:hover': {
                                  backgroundColor: '', // Keeps the hover effect for the selected item
                                }
                              }
                            }}>
                              {subItem}
                            </Option>
                          </>
                        ))}
                    </Select>
                  </FormControl>
                ) : (
                  <FormControl key={index} className=" w-full">
                    <FormLabel style={formTitleStyle}>{item.title}</FormLabel>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      className="border-[0.5px] border-gray p-2 rounded-md bg-gray-100 rider-field focus:outline-none font-primary"
                    />
                  </FormControl>
                )
              )}
            </div>
          </form>
          <div className="grid grid-col-1 gap-5 p-3 justify-items-center">
            <Checkbox
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "12px",
                marginLeft: '-5px'

              }}
              color="success"
              size="sm"
              label="I agree to get regular updates from Harvesta "
            />
            <Checkbox
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "12px",
              }}
              color="success"
              size="sm"
              label="By clicking this, you accept the  privacy policy "
            />

            <button className="mt-10 font-primary rounded-full bg-primary p-3 text-white text-xs font-bold shadow-md w-[100px] hover:bg-primaryHover">
              Submit
            </button>
            <p className="text-xs">
              Want to become a Rider?{" "}
              <Link
                to="/rider"
                className="text-harvestaLightGreen font-bold hover:text-primaryHover"
              >
                Register Here
              </Link>{" "}
            </p>
          </div>
        </div>



        <div className="w-full h-auto bg-harvestaLightGreen px-3 flex justify-center mt-20">
          {" "}
          {/* container */}
          <div className="w-3/4 bg-white lg:grid grid-flow-col gap-3  rounded-[20px]">
            {vendorStats.map((item, index) => (
              <div
                key={index}
                className="grid grid-flow-col items-center font-primary text-[13px] gap-2 p-6 w-[300px] font-semibold "
              >
                <img src={item.image} alt="icon" className="w-10" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="font-primary p-0 grid grid-flow-row justify-items-center mt-28">
          <h2 className="text-3xl font-semibold">Vendor Reviews</h2>
          <p className="text-gray-600 text-sm mt-4 text-center">
            We are proud of our accomplishments. We will keep <br /> delivering
            excellence and satisfaction
          </p>
 
          <div className="mt-4">
          <MobileReview
           type={"vendor"}
         />
         <WebReview
         type={"vendor"}
         image={"https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823042/Imagev_zvxpgl.png"}
         />
          </div>
      
        </div>

        <div className="space-y-10 lg:grid grid-cols-3 justify-items-center p-14 lg:w-1/2 mx-auto lg:space-x-4 mb-40">
        <div className="items-center flex flex-col">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">1M+</h1>
          <h3 className="">Monthly Customer Visit</h3>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">92%</h1>
          <h3 className="">Customer Satisfaction Rate</h3>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">4.9</h1>
          <h3 className="">Average Customer Ratings</h3>
        </div>
      </div>
      
      <FAQ/>

      </section>
   </>
  )
}

export default Vendor
