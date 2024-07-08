import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-harvestaBlack w-full h-1/2 flex justify-center items-center">
      <div className="text-center ">
        <div className="relative  grid grid-flow-row justify-items-center">
          <h1 className="text-gray-500 opacity-15 text-[350px] font-bold p-10 mb-38 tracking-wide font-rider ">
            404
          </h1>
          <div className="absolute z-50 top-[40%]">
            <p className="text-[48px] font-primary text-white font-semibold">
              Page not found
            </p>
            <p className="text-white font-primary text-[12px] mt-2">
              Sorry the page you are looking for might have been <br /> removed,
              renamed, or temporarily <br /> unavailable
            </p>
            <button
              className="mt-4 text-xs font-primary rounded-full bg-harvestaYellow p-2.5 font-bold text-white hover:bg-harvestaLightGreen transition-all w-2/5"
              onClick={() => navigate("/")}
            >
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
