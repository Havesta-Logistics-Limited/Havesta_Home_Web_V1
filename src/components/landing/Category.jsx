import React from "react";
import categorys from "../../routes/category.routes";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary mt-20 mr-50">
      <div className="bg-harvestaLightGreen w-66   mb-6  rounded-bl-full rounded-tr-full">
        <div className="flex flex-row gap-1 justify-center text-black">
          {categorys.map((list, index) => (
            <Link
              key={index}
              to={list.path}
              className="hover:bg-harvestaDarkGreen active:bg-harvestaDarkGreen text-white px-4 p-3 w-40 text-center rounded-tr-full rounded-bl-full"
            >
              {list.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-transparent mt-[10rem]">
          <div className="flex flex-col text-white text-center w-[500px] justify-center px-10 sm:mb-[10rem] mb-[3rem] mr-[-140px]">
          <img src="/icons/arrow.svg" alt="harvesta" width={"150px"} className="ml-[120px] mb-[-39px]"/>

            <h1 className="text-4xl font-bold mt-10 capitalize text-black">
              Download Our App
            </h1>
            <p className="my-5 px-12 text-sm text-black  text-center">
            Get fresh farm produce delivered in minutes from a variety of
            trusted vendors offering fruits, veggies, tubers, grains, and nuts.
            </p>
            <div className="flex gap-2 justify-center">
              <div className="w-[150px]">
                {" "}
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/App_Store_brjnhq.svg"
                  className="w-full object-fit  h-auto"
                />
              </div>
              <div className="w-[150px]">
                {" "}
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/Play_Store_wq2cvo.svg"
                  className="w-full object-fit  h-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719269738/Group_1000001792_puvkro.png"
              className=" w-[800px] object-cover rounded-lg "
            />
          </div>
        </div>
    </div>
  );
};

export default Category;
