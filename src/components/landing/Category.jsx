import React from "react";
import categorys from "../../routes/category.routes";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary mt-20">
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
      <div className="flex flex-row items-center justify-center min-h-screen ml-44 gap-10 ">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-80 grid grid-cols-1 justify-center items-center">
            <img src="/icons/arrow.svg" alt="harvesta" width={"500px"} />
            <h1 className="text-4xl font-bold mb-4">Download Our App</h1>
            <p className="mb-6  w-[350px] text-start">
              Get fresh farm produce delivered in minutes from a variety of
              trusted vendors offering fruits, veggies, tubers, grains, and nuts.
            </p>
          </div>
          <div className="flex flex-row justify-center  gap-5 mb-6">
            <img src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1717957986/Buttons_ivroew.png" alt="harvesta" width="350px" />
           
          </div>
        </div>
        <div className="place-item-center mx-auto">
          <img src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1717957974/Group_1000001777_vroxqi.svg" alt="mobile app" width={"600px"} />
        </div>
      </div>
    </div>
  );
};

export default Category;
