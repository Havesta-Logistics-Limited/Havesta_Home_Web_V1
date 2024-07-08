import LogoNav from "../../common/LogoNav";

const FinalMessageRider = () => {
  return (
    <>
      <LogoNav />
      <section className="p-4 bg-harvestaYellow grid grid-flow-row justify-items-center items-center h-screen">
        <div className="p-3 bg-white w-[450px] h-[450px] grid grid-flow-row justify-items-center rounded-lg shadow-md">
          <img src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1720271607/Successfully_Done_3_pg7jni.gif " 
          className="w-[200px]"
          alt="" />
          <h1 className="p-2 font-primary font-semibold text-[30px]">Congratulations</h1>
          <p className="text-[12px] font-primary mt-[-10px] text-center text-harvestaSecondBlack p-1">
            You have successfully uploaded all the required documents. <br /> Our
            dedicated team will now review your submissions for approval. You <br />
            will receive a notification via email once the review process is
            complete.
          </p>
          <button className=" text-[11px] bg-harvestaBlack rounded-full text-white font-primary w-[100px] mt-4 hover:bg-black mb-2">Back Home</button>
        </div>
      </section>
    </>
  );
};

export default FinalMessageRider;
