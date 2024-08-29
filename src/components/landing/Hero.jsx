
const Hero = () => {
    const heroImage =
    "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721821248/Hreo-img_a7ntfz.svg";
  const heroImage2 =
    "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721833532/smiling-holding-bunch-fruits-against-white-copy-space-black-guy-is-yellow-background_1_kcarzh.svg";

  return (
   <>
    <div
        className={`relative w-full h-[593px] bg-cover p-4 bg-primary mb-20`}
      >
        <div className="">
          <div className=" text-white lg:ml-52 lg:mt-48 mt-32">
            <h2 className=" text-6xl lg:text-[70px] font-bold">
              Find Your Healthy
            </h2>
            <h2 className="text-6xl lg:text-[70px] text-harvestaYellow font-bold">
              Groceries
            </h2>
            <br />
            <p className="text-lg">
              Fresh fruits & veggies, grains, Tubers and More!
            </p>
            <br />
            {/*  <div className='flex flex-row items-center'>
                <img src="/icons/Vector.svg" alt=""  className='bg-harvestaLightGreen py-2 px-1.5 rounded-s' width={'40px'}/>
                <input type="text" placeholder='search for your groceries...'  className='input-field py-3 outline-0 w-80 px-2.5 rounded-e text-gray-500 text-sm font-semibold'/>
            </div> */}
          </div>
          <div className="absolute -bottom-[90px]  lg:hidden w-full grid justify-items-center left-0">
            <img src={heroImage2} alt="" className="w-64" />
          </div>
          <div className="absolute top-0 right-0">
            <img
              src={heroImage}
              alt=""
              className="hidden lg:block lg:w-[550px] w-[200px]"
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero