import { useParams} from "react-router-dom"
import { useEffect, useState} from 'react'


const CongratulationsVendor = () => {
    //In the future, the uuid will be queried against the database to confirm its validity

   const params = useParams()
   const stringValue = params.id
   const actualValue = stringValue === "null" | 'undefined' ? null : stringValue
   console.log(params)
   console.log(params.id)
    if(!actualValue){
        return <div className="text-[200px]">403 forbidden </div>
    }
  return (
    <>
     <section className="p-5 h-screen bg-harvestaBlack grid grid-flow-row items-center">
        <div className="grid grid-flow-col items-center justify-items-center">
         <div className="leading-20">
            <h1 className="text-[55px] text-white items-center font-primary font-semibold">Congratulations! <br /> Application Received</h1>
            <p className="p-2 font-primary text-sm font-semibold">Complete your registration process</p>
            <button className="p-3 bg-harvestaBlack text-white rounded-full text-sm font-primary w-1/4 mt-4 font-semibold hover:bg-black">Continue</button>
         </div>

         <div>
            <img src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1720271457/ride2_xrpjgv.svg" alt="hero-image" className="w-[700px]"/>
         </div>
        </div>
     </section>
    </>
  )
}

export default CongratulationsVendor