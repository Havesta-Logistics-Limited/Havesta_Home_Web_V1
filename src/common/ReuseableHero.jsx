import PropTypes from "prop-types";

const ReuseableHero = ({text, image}) => {
  return (
   <>
   <div className="w-full h-full bg-primary grid grid-flow-row justify-items-center items-center p-4 font-primary relative">
        <h2 className="font-bold text-white text-4xl text-center my-40 text-wrap w-[65%]">
         {text}
        </h2>
        <img
          src={image}
          className="hidden lg:block absolute right-0 w-[400px] top-[17%]"
          alt="header-img"
        />
     </div>
   </>
  )
}

ReuseableHero.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
 }


export default ReuseableHero