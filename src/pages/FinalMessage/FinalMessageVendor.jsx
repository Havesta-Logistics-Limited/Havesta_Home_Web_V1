import LogoNav from "../../common/LogoNav";

const FinalMessageVendor = () => {
  return (
    <>
      <LogoNav />
      <section className="p-4 bg-harvestaBlack grid grid-flow-row justify-items-center items-center h-[100vh]">
        <div className="w-auto h-auto mt-10  p-4 bg-white lg:w-[550px] lg:h-[550px] grid grid-flow-row justify-items-center rounded-[27px] shadow-md border-2">
          <img
            src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1720271607/Successfully_Done_3_pg7jni.gif "
            className="w-[250px]"
            alt=""
          />
          <h1 className="text-[30px] p-2 font-primary font-semibold lg:text-[45px]">
            Congratulations
          </h1>
          <p className="text-[14px] font-primary mt-[-13px] text-center text-harvestaSecondBlack p-1">
            You have successfully uploaded all the required documents. Our
            dedicated team will now review your submissions for approval. You
            will receive a notification via email once the review process is
            complete.
          </p>
          <button className=" text-[13px] p-2 bg-harvestaBlack rounded-full text-white font-primary w-[150px] mt-6 hover:bg-black mb-4">
            Back Home
          </button>
        </div>
      </section>
    </>
  );
};

export default FinalMessageVendor;
