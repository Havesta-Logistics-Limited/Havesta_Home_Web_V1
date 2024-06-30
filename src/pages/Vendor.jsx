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
          <div className="w-full bg-cover h-[30%] p-4 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1719779125/Vendors_wsktmk.svg')]">
            {/* HERO SECTION */}
            <div className="mt-32 md:grid grid-cols-2 justify-items-center lg:h-[40vh] relative ml-44">
              <div className=" p-2">
                <h2 className="p-3 font-primary font-bold lg:leading-tight lg:text-[55px] text-white text-6xl ">
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

        <div className="grid grid-cols-1 justify-items-center mt-20 font-primary">
          <h2 className="text-3xl font-bold font-primary mt-10">
            Complete The Form
          </h2>
          <form className="my-12 w-1/2">
            <div className="lg:grid grid-cols-2 gap-9">
              {vendorForm.map((item, index) =>
                item.option ? (
                  <FormControl key={index} className="ml-16 w-full">
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
                  <FormControl key={index} className="ml-16 w-full">
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

        <div className="w-full h-auto bg-harvestaLightGreen px-1 flex justify-center mt-20">
          {" "}
          {/* container */}
          <div className="w-3/4 bg-white lg:grid grid-flow-col gap-3 border-2 border-white rounded-[20px]">
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

        <div className="font-primary p-3 grid grid-flow-row justify-items-center mt-28">
          <h2 className="text-3xl font-semibold">Vendor Reviews</h2>
          <p className="text-gray-600 text-sm mt-4 text-center">
            We are proud of our accomplishments. We will keep <br /> delivering
            excellence and satisfaction
          </p>

          <div className="relative w-auto h-auto flex justify-center items-center mt-10">
        <div className="w-[700px] overflow-hidden shadow-lg">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {ReviewsRoutes.map((review, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="flex flex-row items-center bg-primary p-2 rounded-md w-full mr-8">
                  <div className="">
                    <img
                      src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1717957968/Image_1_efqdrn.png"
                      alt="harvesta"
                      width={"590px"}
                    />
                  </div>
                  <div className="grid grid-col-1  justify-items-center py-4">
                    <img
                      src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719784049/Shape_lcuvsj.svg"
                      alt="harvesta"
                      className="p-2 mt-10 text-white"
                    />
                    <p
                      className="text-center text-sm text-white leading-5 p-5"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {review.text}
                    </p>
                    <br />
                    <h2 className="text-center font-extrabold text-white">{review.name}</h2>
                    <h3 className="text-center text-harvestaYellow text-xs font-bold">
                      {review.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-0 ml-[-30px] py-4 px-3 bg-harvestaLightGreen rounded-full hover:bg-harvestaDarkGreen"
        >
          <img src="/icons/tail-left.png" alt="harvesta" />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-0 mr-[-30px]  py-4 px-3 bg-harvestaLightGreen rounded-full hover:bg-harvestaDarkGreen"
        >
          <img src="/icons/tail-right.png" alt="harvesta" />
        </button>
      </div>
        </div>

        <div className="grid grid-cols-3 justify-items-center p-10 w-1/2 mx-auto space-x-4 mb-40">
        <div className="items-center flex flex-col">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">1M+</h1>
          <h3 className="">Monthly Customer Visit</h3>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">92%</h1>
          <h3 className="">Customer Satisfaction Rate</h3>
        </div>
        <div className="items-center flex flex-col">
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
