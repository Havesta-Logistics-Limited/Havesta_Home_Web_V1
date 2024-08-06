
import Stats from "./Stats"
import MobileReview from "./Reviews-Fragment/MobileReview"
import WebReview from "./Reviews-Fragment/WebReview";
const Reviews = () => {



  return (
    <div className="justify-center font-primary mt-20 ">
      <h1 className="hidden lg:block text-center font-bold text-3xl items-center">
        Customer Reviews
      </h1>
      <p className="hidden lg:block text-center font-primary items-center p-2 mt-4 text-gray-700 text-sm">
        We are proud of our accomplishments. We will keep <br /> delivering
        excellence and satisfaction.
      </p>
      <br />
      
      <MobileReview 
      type={"customer"}
      />
      <WebReview
      type={"rider"}
      image={"https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822421/Image_ctwkrn.png"}
      />
      <Stats/>
      
    </div>
  );
};

export default Reviews;
