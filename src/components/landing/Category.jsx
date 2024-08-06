import categorys from "../../routes/category.routes";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="mt-36 md:grid grid-flow-row justify-items-center items-center">
      {/* <div className="bg-harvestaLightGreen mb-6  rounded-bl-full rounded-tr-full px-3 w-full md:w-[400px]">
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
      </div> */}

<div className="p-2 md:flex flex-row justify-center items-center lg:w-[90%] space-x-4 md:space-x-2">
  <div className="md:flex flex-col justify-center items-center">
    <img
      src="/icons/arrow.svg"
      alt="harvesta"
      className="hidden md:block w-[200px]"
    />

    <h1 className="font-bold text-center text-4xl mb-3">
      Download Our App
    </h1>
    <p className="text-center text-sm md:w-[50%]">
      Get fresh farm produce delivered in minutes from a variety of
      trusted vendors offering fruits, veggies, tubers , grains, and nuts.
    </p>
    <div className="grid grid-flow-col justify-items-center items-center my-6 space-x-2">
      {" "}
      {/* 2 bottom images */}
      <div className="w-[150px]">
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

  <div className="">
    {" "}
    {/* Flex partner */}
    <img
      src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823608/Group_1000001793_qvhqd7.png"
      className="w-[900px] md:m-0 md:p-0"
    />
  </div>
</div>

    </section>
  );
};

export default Category;
