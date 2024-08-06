import joinUs from "../../config/joinUs.config";

const JoinUs = () => {
  return (
    <>
      <div 
      className="
      mt-12 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1719273258/Group_1000001819_1_elh4s0.png')] p-10">

        <div className="lg:grid grid-flow-col justify-items-center items-center space-y-4 p-10">
          {joinUs.map((item, index) => (
            <>
             <div className="bg-white relative h-auto grid grid-flow-row justify-items-center items-center rounded-xl" key={index}>
              <div className="z-10">
                <img
                 src={item.image}
                  className="lg:w-[328px] object-contain"
                   />
              </div>

              <div className="grid grid-flow-row">
                <h5 className="font-secondary text-harvestaLightGreen text-2xl mt-3">{item.count}</h5>
                <p className="lg:w-72 font-primary text-[13px] text-justify p-2">{item.text}</p>
                <button
                className="bg-primary rounded-3xl p-2 hover:bg-primaryHover cursor-pointer text-white text-xs  w-40 m-4"
                >{item.button}</button>
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
