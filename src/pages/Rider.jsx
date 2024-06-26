/* import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input'; */


const Rider = ({ hero }) => {
  return (
    <>
      <section>
        <div className="relative pb-5">
          <img src={hero} className="w-full h-auto" alt="Rider Hero" />

          <div className="absolute top-[30%] left-[15%] w-full h-full lg:grid grid-cols-2">
            <div>
              <h2 className="text-2xl p-3 font-bold font-rider lg:leading-10 lg:text-[40px]  text-[#242424]">
                Become a Delivery <br />
                <span className="text-white font-[700]">MAESTRO </span>with
                Harvesta
              </h2>
              <p className="mt-4 text-sm text-[#242424]">
                Be your Boss. Build your income daily, weekly, or monthly.
              </p>
              <button className="mt-10 rounded-full bg-primary p-3 text-white text-xs font-bold shadow-md w-[100px]">
                Get Started
              </button>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1717957967/Ellipse_69_1_e42hqd.svg"
                alt=""
                className="w-[450px] lg:ml-[-100px]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center">
          <h2>Lets Get You Started</h2>
           <form>

           </form>
        </div>
      </section>
    </>
  );
};

export default Rider;
