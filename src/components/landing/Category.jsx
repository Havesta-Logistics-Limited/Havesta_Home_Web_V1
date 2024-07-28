import categorys from "../../routes/category.routes";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="mt-44 p-2 lg:grid grid-flow-row justify-items-center items-center border-2 border-red-800">

      <div className="bg-harvestaLightGreen mb-6  rounded-bl-full rounded-tr-full px-3 w-full lg:w-[400px]">
        <div className="grid grid-flow-col gap-1 justify-items-center text-black">
          {categorys.map((list, index) => (
            <Link
              key={index}
              to={list.path}
              className="text-sm hover:bg-harvestaDarkGreen active:bg-harvestaDarkGreen text-white px-4 p-3 w-auto text-center rounded-tr-full rounded-bl-full"
            >
              {list.name}
            </Link>
          ))}
        </div>
      </div>




      <div className="grid grid-flow-row lg:grid-flow-col justify-items-center items-center md:flex-row bg-transparent mt-14 lg:ml-[100px]">


          <div className="  grid grid-flow-row justify-items-center items-center space-y-7">
          <img src="/icons/arrow.svg" alt="harvesta"  className="hidden lg:block lg:ml-[120px] w-[90px] mb-[-39px] lg:w-[150px]"/>

            <h1 className="text-4xl font-bold mt-10 capitalize text-black">
              Download Our App
            </h1>
            <p className="my-5 px-12 text-sm text-black  text-center">
            Get fresh farm produce delivered in minutes from a <br /> variety of
            trusted vendors offering fruits, veggies, tubers <br />, grains, and nuts.
            </p>
            <div className="flex gap-2 justify-center">  {/* 2 bottom images */}
              <div className="w-[150px] ">
                {" "}
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/App_Store_brjnhq.svg"
                  className="w-full  h-auto"
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

          <div className="flex justify-center border-2- border-yellow-900">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719269738/Group_1000001792_puvkro.png"
              className=" w-[800px] object-cover rounded-lg "
            />
          </div>

        </div>
    </section>
  );
};

export default Category;
