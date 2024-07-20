import LogoNav from "../common/LogoNav"
import { useNavigate } from "react-router-dom"
const CommissionPage = () => {

  const navigate = useNavigate()
  const nextPage = ()=>{
    navigate('/vendors/terms_and_conditions')
  }
  return (
   <>
    <LogoNav />
      <section className="p-4 bg-harvestaBlack grid grid-flow-row justify-items-center items-center h-screen font-primary">
        <div className="p-4 bg-white w-[500px] h-auto grid grid-flow-row justify-items-center rounded-[27px] shadow-md">
          <h2 className="text-3xl px-5 mt-10 font-semibold">We Deliver For You</h2>
          <p className="text-xs font-semibold mt-2">Our couriers are on standy to help deliver your orders</p>

          <div className="mt-5 p-5 bg-harvestaLightGreen w-[420px] grid grid-flow-row justify-items-center items-center rounded-lg">
            <h1 className="text-3xl text-white font-semibold">30% VAT Commission</h1>
            <p className="text-white text-sm mt-1"> + ₦15,000 Activation Fee</p>
          </div>
              
           <div className="grid grid-flow-row justify-items-center items-center w-full text-center p-2 text-sm leading-6 mt-5 font-semibold">
           <ol className="list-disc list-inside ">
            <li>Monitor your orders live.</li>
            <li>Leave the logistics to us.</li>
            <li>15% charge for pick-up orders.</li>
            <li>Introduce marketing campaigns when needed.</li>
            <li>Get Access to the Havesta App to list your store.</li>
          </ol>
            </div>   
         
          <button 
          className=" text-[13px] p-2 bg-harvestaBlack rounded-full text-white font-primary w-[150px] mt-6 hover:bg-black mb-4"
          onClick={()=>nextPage()}
          >
            Next
          </button>
        </div>
      </section>
   </>
  )
}

export default CommissionPage