
import Navbar from "../components/Navbar";
import FAQ from "../components/faq.";
import Category from "../components/landing/Category";
import ChooseUs from "../components/landing/ChooseUs";
import Explore from "../components/landing/Explore";

const Home = ( {hero} ) => {
  return (
    <div>
      <img src={hero} alt="harvesta" className="w-full"/>
      <div className='absolute top-44 text-white ml-60 '>
            <h2 className='text-6xl font-bold'>Find Your Healthy</h2>
            <h2 className='text-6xl text-harvestaYellow font-bold'>Groceries</h2>
            <br />
            <p className='text-xm'>Fresh fruits & veggies, grains, Tubers and More!</p>
            <br />
            <div className='flex flex-row items-center'>
                <img src="/icons/Vector.svg" alt=""  className='bg-harvestaLightGreen py-2 px-1.5 rounded-s' width={'28px'}/>
                <input type="text" placeholder='search for your groceries...'  className='py-2 outline-0 w-80 px-2.5 rounded-e text-gray-500 italic text-xs'/>
            </div>
        </div>
      <div className="mt-10">
      <Category />
      </div>
      <div className="py-3">
      <ChooseUs />
      </div>
      <Explore />
      <FAQ />
    </div>
  );
};

export default Home;
