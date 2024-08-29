const ChooseUs = () => {
  const images = [
    "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721899374/mobile1_irzsdl.svg",
    "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721899361/mobile2_cacjrk.svg",
    "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721899574/image3_eg8uwf.png",
  ];
  return (
    <div className="flex flex-col items-center py-8 font-primary backgroundImage z-0">
      <h1 className="text-4xl font-bold mb-7">Why Choose Us</h1>
        <p className="text-primary font-primary text-wrap text-center mb-7 text-lg font-semibold" >We deliver produce at the peak of its freshness, straight from the farm to your door.</p>
       <div className="grid grid-flow-col justify-items-center gap-3">
       {images.map((item, index)=>(
        <img src={item}
        key={index}
        alt={`image-${index}`}
        className="w-[300px] mb-10"
        />
      ))}
       </div>
     
    </div>
  );
};

export default ChooseUs;
