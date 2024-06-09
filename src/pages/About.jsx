import { aboutItems, aboutListItems, aboutStats } from "../config/about.config";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import image1 from "../assets/images/CEO-pic.png";

const About = () => {
  return (
    <section className="p-8 lg:p-28">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-4 flex flex-col items-center text-center">
          <img src={image1} alt="ceo-image" className="w-full lg:w-2/3" />
          <p className="pt-2 font-bold font-primary">Noel Amobeda</p>
          <p className="text-xs text-primary font-bold tracking-wide">
            CEO / Founder at Harvesta
          </p>
          <div className="w-full mt-8 lg:w-2/3">
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

        <div>
          {aboutItems.map((items, index) => (
            <div key={index} className="mt-6">
              <h5
                className={`grid text-harvestaDarkGreen p-4 font-bold text-sm uppercase border-harvestaYellow 
                  lg:text-lg
                  ${
                    items.position === "left"
                      ? "justify-items-start border-l-4"
                      : "justify-items-end border-r-4"
                  }`}
              >
                {items.title}
              </h5>
              <p className="p-2 text-left font-primary font-light lg:text-base md:leading-loose">
                {items.content}
              </p>
            </div>
          ))}
          <div className="font-bold font-primary mt-4 px-4">
            <p>
              Thank you for choosing Harvesta. Together, we can make fresh,
              local produce a part of everyone’s daily life. Join us in our
              mission to create healthier, happier communities, one delivery at
              a time.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 justify-items-center md:grid-cols-4 border-t-2">
        {aboutStats.map((item, index) => {
          return (
            <div className="grid justify-items-center p-8  m-8  border-harvestaLightGreen" key={index}>
              <span className="grid justify-items-center">{item.icon}</span>
              <p className="text-lg font-bold  text-harvestaLightGreen font-primary lg:text-4xl my-2 ">{item.amount}</p>
              <p className="font-primary text-lg font-lighter mt-[-8px]">{item.content}</p>
            </div>
          );
        })}
      </div>

      <div>
        <h3>Our Core Values</h3>
      </div>
    </section>
  );
};

export default About;
