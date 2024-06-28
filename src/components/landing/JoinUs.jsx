import joinUs from "../../config/joinUs.config";

const JoinUs = () => {
  return (
    <>
      <div className="mt-12 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1719273258/Group_1000001819_1_elh4s0.png')] bg-cover h-screen w-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[69px]">
          {joinUs.map((item, index) => (
            <>
              <div className="flex flex-col items-center relative" key={index}>
                <img
                  src={item.image}
                  alt="harvesta"
                  className="relative z-10"
                  width={"328px"}
                />
                <div className="bg-white p-4 border-4 border-harvestaDarkGreen relative mt-[-40px] rounded-lg h-60 ">
                  <h1 className="p-2 font-secondary text-harvestaLightGreen text-2xl mt-3">
                    {item.count}
                  </h1>
                  <p className="w-72 font-primary text-[13px] text-justify p-2 mb-4 ">
                    {item.text}
                  </p>
                  <div className=" w-full  grid justify-items-center  text-center    ">
                    <p className="bg-primary rounded-3xl p-2 hover:bg-primaryHover cursor-pointer text-white text-xs absolute bottom-2 w-40">
                   
                      {item.button}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinUs;
