import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='absolute top-40 text-white ml-48 '>
            <h2 className='text-5xl font-bold'>Find Your Healthy</h2>
            <h2 className='text-5xl text-harvestaYellow font-bold'>Groceries</h2>
            <br />
            <p className='text-xm'>Fresh fruits & veggies, grains, Tubers and More!</p>
            <br />
            <div className='flex flex-row items-center'>
                <img src="/icons/Vector.svg" alt=""  className='bg-harvestaLightGreen py-2 px-1.5 rounded-s' width={'28px'}/>
                <input type="text" placeholder='search for your groceries...'  className='py-2 outline-0 w-80 px-2.5 rounded-e text-gray-500 text-xs'/>
            </div>
        </div>
    </div>
  )
}
export default Hero
