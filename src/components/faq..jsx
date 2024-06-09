import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

const Faqs = [
  {
    title: "What does Harvesta do?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Officiis
                    distinctio quo.`,
  },
  {
    title: "Can i get free deliveries?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
  {
    title: "Why the service charge?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
  {
    title: "Do you provide online support?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
  {
    title: "Do you accept POD?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
  {
    title: "How can i be a partner?",
    text: `This is the paragraph with some ipsum text. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis
                        distinctio quo.`,
  },
];

const FAQ = () => {
  return (
    <div className="full mt-20">
      <div className="full bg-emerald-950 flex justify-center py-10 mt-7">
        <div className="bg-white w-1/2 mt-[-150px] shadow-3xl">
          <h1 className="uppercase text-center text-4xl font-black mt-10">
            FAQs
          </h1>
          <div className="flex flex-wrap p-4 my-10">
            {Faqs.map((faq, index) => (
              <div
                key={index}
                className="flex flex-row w-[100%] md:w-[50%] p-4"
              >
                <div className="mr-4 mt-1">
                  <IoArrowForwardCircle size={"25px"} color="green" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">{faq.title}</h3>
                  <p className="mt-2">{faq.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
