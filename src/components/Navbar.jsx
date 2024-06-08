import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='tw-absolute tw-w-full tw-z-10'>
            <div  className="tw-flex flex-row tw-items-center tw-justify-evenly tw-font-bold tw-text-white">
                <div className='tw-flex flex-row tw-items-center'>
                <img src="/icons/harv.png" alt="harvesta" />
                <p>Harvesta</p>
                </div>
                    <div className='tw-flex flex-row tw-gap-8'>
                            <Link to={'/home'}>Home</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/news'}>News</Link>
                            <Link to={'/contact'}>Contact</Link>
                            <Link to={'/patner'}>Patner</Link>
                    </div>
                    <Link>
                    <button className='tw-bg-harvestaYellow tw-px-4 tw-py-1 tw-rounded-full tw-text-white'>Get Stated</button>
                    </Link>
            </div>
    </div>
  )
}

export default Navbar
