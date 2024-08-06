import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const WebReview = () => {
  return (
    <>
      <div className="hidden p-4 w-full lg:grid grid-flow-row justify-items-center font-primary mb-16">

        
        <div className="bg-harvestaYellow grid grid-flow-col place-content-center items-center w-[55%] rounded-lg">

          <div>
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822421/Image_ctwkrn.png"
              className="w-[60%]  ml-3 my-3"
              alt=""
            />
          </div>

          <div className="  mr-10 grid grid-flow-row justify-items-center items-center space-y-8">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719784065/Shape_f1kllb.svg"
              alt=""
            />{" "}
            {/* Quote icon */}
            <p className="text-center text-[16px] font-semibold ">
              Shopping for groceries has never been easier! Hervesta offers an
              incredible selection of fresh produce delivered right to my
              doorstep.
            </p>
            <div>
              <h6 className="text-[14px] font-semibold">Noel Amobeda</h6>
              <h6 className="text-[12px] text-primary font-bold">CEO at Harvesta</h6>
            </div>
          </div>

        </div>
        <div className="grid grid-flow-col gap-5 mt-1 ">
            <ArrowCircleLeftIcon
            fontSize='large'
            sx={{
                color: "#005231",
                cursor: "pointer"
            }}
            />
            <ArrowCircleRightIcon
            fontSize='large'
            sx={{
                color: "#005231",
                cursor: "pointer"
            }}
            />
           </div>
      </div>
    </>
  );
};

export default WebReview;
