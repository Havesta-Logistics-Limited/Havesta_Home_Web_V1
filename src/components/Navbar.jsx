import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
            <div  className="flex flex-row items-center justify-evenly  font-bold ">
                <div className='flex flex-row items-center'>
                <img src="/icons/harv.png" alt="harvesta" />
                <p>Harvesta</p>
                </div>
                    <div className='flex flex-row gap-8'>
                            <Link to={'/home'}>Home</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/news'}>News</Link>
                            <Link to={'/contact'}>Contact</Link>
                            <Link to={'/patner'}>Patner</Link>
                    </div>
                    <Link>
                    <button className='bg-harvestaYellow px-4 py-1 rounded-full text-white'>Get Stated</button>
                    </Link>
            </div>
    </div>
  )
}

export default Navbar
