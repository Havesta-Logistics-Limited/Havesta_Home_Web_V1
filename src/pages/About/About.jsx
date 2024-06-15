import {
  aboutItems,
  aboutListItems,
  aboutStats,
  coreValues,
  aboutTeam,
  aboutMainImage,
} from "../../config/about.config";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import image1 from "../../assets/images/CEO-pic.png";
const About = ({hero}) => {
  return (
    <>
    <img src={hero} alt="" />
    <section className="p-8 lg:p-28">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-4 flex flex-col items-center text-center">
          <img src={image1} alt="ceo-image" className="w-full lg:w-2/3" />
          <p className="pt-2 font-bold font-primary">Noel Amobeda</p>
          <p className="text-xs text-primary font-bold tracking-wide">
            CEO / Founder at Harvesta
          </p>
          <div className="w-full mt-12 lg:w-2/3">
            <h5 className="p-4 font-bold text-lg uppercase border-l-4 border-harvestaLightGreen text-left">
              Why choose Harvesta?
            </h5>
            <ul className="pl-8 text-left">
              {aboutListItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 font-primary flex items-start md:leading-relaxed"
                >
                  <ChevronRightIcon color="success" />
                  <div className="ml-2">
                    <span className="font-bold mr-2">{item.title}:</span>
                    <span>{item.content}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-left">
          {aboutItems.map((items, index) => (
            <div key={index} className="mt-6">
              <h5
                className={`grid text-harvestaDarkGreen p-4 font-bold text-sm uppercase border-harvestaLightGreen 
                  lg:text-lg
                  ${
                    items.position === "left"
                      ? "justify-items-start border-l-4"
                      : "justify-items-end border-r-4"
                  }`}
              >
                {items.title}
              </h5>
              <p className="p-2 text-left font-primary lg:text-base md:leading-loose">
                {items.content}
              </p>
            </div>
          ))}
          <div className="font-bold font-primary mt-4 px-4">
            <p className="ml-[-4px] italic">
              <FormatQuoteIcon /> Thank you for choosing Harvesta. Together, we
              can make fresh, local produce a part of everyone’s daily life.
              Join us in our mission to create healthier, happier communities,
              one delivery at a time
              <FormatQuoteIcon />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 justify-items-center md:grid-cols-4 border-t-2">
        {aboutStats.map((item, index) => {
          return (
            <div
              className="grid justify-items-center p-8  m-8  border-harvestaLightGreen"
              key={index}
            >
              <span className="grid justify-items-center">{item.icon}</span>{" "}
              {/* REFACTOR THIS SECTION */}
              <p className="text-lg font-bold  text-harvestaLightGreen font-primary lg:text-4xl my-2 ">
                {item.amount}
              </p>
              <p className="font-primary text-lg font-lighter mt-[-8px]">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>

      <div className="my-20">
        <h3 className="flex justify-center font-bold text-4xl mb-14">
          Our Core Values{" "}
        </h3>
        <div className="lg:grid grid-cols-3 gap-4">
          {coreValues.map((item, index) => (
            <div
              className="bg-harvestaLightGreen rounded border-5 border-primary overflow-hidden shadow-xl hover:shadow-2xl hover:bg-primary hover:border-primary text-white my-10 h-[480px] transition-all"
              key={index}
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="m-10">
                <span className="font-bold text-[18px] flex justify-center align-center p-3 font-primary">
                  {item.title}
                </span>
                <span className="block text-md font-primary ">
                  {item.paragraph}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 font-primary">
        <div className="grid grid-cols-1 justify-items-center">
          <h3 className=" uppercase text-black font-bold text-xs">
            Who are we?
          </h3>
          <h2 className="p-4 font-bold text-4xl text-black">
            Meet our team
          </h2>
          <p className="text-center text-black text-md text-wrap">
            Just take a look - each member of the team is watching your every
            gesture <br /> and will hear your every whisper.
          </p>
        </div>
        <div className="lg:grid grid-cols-4 mt-10">
          {aboutTeam.map((item, index) => (
            <div
              key={index}
              className="p-2 grid grid-cols-1 justify-items-center border-2 rounded-lg m-4 border-primary hover:shadow-lg"
            >
              <img src={item.img} alt="" className="w-40 h-40" />
              <h4 className="text-sm mt-4 font-semibold">{item.name}</h4>
              <h6 className="text-xs text-gray-500 uppercase my-2">
                {item.role}
              </h6>
              <p className="text-xs w-[220px] text-center text-gray-500 mb-1">
                {item.content}
              </p>
              <div className="flex justify-evenly gap-3 p-2">
                {item.socials.map((social) => (
                  <img src={social} alt="" key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-col-1 justify-items-center p-10 mt-40 font-primary relative">
        <img
          src={aboutMainImage}
          alt="image"
          className=" w-[80%]"
        />
        <div className="absolute lg:top-[20%] grid grid-cols-1 justify-items-center mx-auto">
          <h1 className='uppercase font-bold text-4xl p-2'>Join our team</h1>
          <p className="text-sm text-black text-center w-[370px] my-3">
            We love what we do and we do it with passion. We value the
            experimentation of the message and smart incentives.
          </p>
          <span className="py-3 px-5  mt-4 text-sm rounded-lg bg-primary text-white cursor-pointer hover:bg-primaryHover capitalize">See current openings</span>
        </div>
      </div>

    </section>
    </>
 
  );
};

export default About;
