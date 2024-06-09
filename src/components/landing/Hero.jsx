import React from 'react'

const Hero = () => {
  return (
    <div>
        <img src="/icons/Hero.svg" alt="harvesta" className='tw-relative tw-mb-11'/>
        <div className='tw-absolute tw-top-40 tw-text-white tw-ml-48'>
            <h2 className='tw-text-2xl tw-font-bold'>Find Your Healthy</h2>
            <h2 className='tw-text-2xl tw-text-harvestaYellow tw-font-bold'>Groceries</h2>
            <br />
            <p className='tw-text-xs'>Fresh fruits & veggies, grains, Tubers and More!</p>
            <br />
            <div className='tw-flex tw-flex-row tw-items-center'>
                <img src="/icons/Vector.svg" alt=""  className='tw-bg-harvestaGreen tw-py-1 tw-px-1.5 tw-rounded-s'/>
                <input type="text" placeholder='search for your groceries...'  className='tw-py-1.5 tw-outline-0 tw-w-80 tw-px-2.5 tw-rounded-e tw-text-gray-500 tw-text-xs'/>
            </div>
        </div>
    </div>
  )
}

export default Hero
