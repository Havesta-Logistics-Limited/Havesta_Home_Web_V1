
const Stats = () => {
  return (
   <>
   <div className="flex flex-col lg:flex-row justify-evenly gap-[40px] mb-16">
        <div className="items-center flex flex-col">
          <h1 className="text-4xl lg:text-6xl text-harvestaDarkGreen font-bold">1M+</h1>
          <h3 className="">Monthly Customer Visit</h3>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl lg:text-6xl text-harvestaDarkGreen font-bold">92%</h1>
          <h3 className="">Customer Satisfaction Rate</h3>
        </div>
        <div className="items-center flex flex-col">
          <h1 className=" text-4xl lg:text-6xl text-harvestaDarkGreen font-bold">4.9</h1>
          <h3 className="">Average Customer Ratings</h3>
        </div>
      </div>
   </>
  )
}

export default Stats