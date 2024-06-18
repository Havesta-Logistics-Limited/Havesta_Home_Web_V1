import FAQ from "../components/faq.";

const Contact = ({ hero }) => {
  return (
    <div >
      <img src={hero} alt="Hero Image" className="w-full relative" />
      <div className="p-3 font-primary py-8 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold flex flex-col items-center">
      <h2 className="text-5xl ">
        Get In Touch Today
      </h2>
      <br />
      <p className="text-sm ">We are always available to support you</p>
      </div>
      <div>
        {/* for form */}
      
      </div>
      <br/><br/><br/><br/>
      <FAQ/>
    </div>
  );
}

export default Contact;
