import LogoNav from "../../common/LogoNav";
import { termsVendorConfig } from "./TermsVendor.config";
import { useNavigate } from "react-router-dom"

const TermsVendor = () => {
    const navigate = useNavigate()

    const nextPage = ()=>{
        navigate('/vendor/upload')
      }
  return (
    <>
      <LogoNav />
      <section className="p-4 bg-harvestaBlack grid grid-flow-row justify-items-center items-center h-screen font-primary">
        <div className="p-4 bg-white w-auto h-auto grid grid-flow-row justify-items-center rounded-[27px] shadow-md">
          <div className="p-5">
            <div className="grid grid-flow-row justify-items-start">
              <img src="" alt="image" />
              <h2 className="font-semibold p-2 text-start mt-5">
                Iya Tunde Fruits
              </h2>
            </div>

            <ul>
              {termsVendorConfig.map((item, index) => (
                <li key={index} className=" flex items-center gap-2">
                  <span className="text-harvestaLightGreen">{item.icon}</span>
                  <span className="text-sm font-semibold ">{item.title}</span>
                </li>
              ))}
            </ul>
          
          </div>
          <button 
          className=" text-[13px] p-2 bg-harvestaBlack rounded-full text-white font-primary w-[150px]  hover:bg-black mb-4"
          onClick={()=>nextPage()}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default TermsVendor;
