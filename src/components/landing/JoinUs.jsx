import joinUs from "../../config/joinUs.config";

const JoinUs = () => {
  return (
    <>
      <div 
      className="
      mt-12 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1719273258/Group_1000001819_1_elh4s0.png')] p-10">

        <div className="lg:grid grid-flow-col justify-items-center items-center space-y-4 lg:p-10 ">
          {joinUs.map((item, index) => (
            <>
             <div className="bg-white border-primary border-4 relative grid grid-flow-col lg:grid-flow-row justify-items-center items-center rounded-xl w-[300px] mx-auto" key={index}>
              <div className="z-10 w-full">
                <img
                 src={item.image}
                  className="w-[200px] h-[180px] lg:w-[328px] m-2 lg:m-0 object-cover rounded-lg border-primary border-b-4"
                   />
              </div>

              <div className="grid grid-flow-row ml-2 lg:ml-0">
                <h5 className="font-secondary text-harvestaLightGreen lg:text-2xl mt-3 place-self-center lg:place-self-start">{item.count}</h5>
                <p className="lg:w-72 text-[10px] font-primary lg:text-[13px] text-justify p-2">{item.text}</p>
                <button
                className="text-[10px] bg-primary rounded-3xl p-2 hover:bg-primaryHover cursor-pointer text-white lg:text-xs  lg:w-40 m-4 place-self-center"
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
