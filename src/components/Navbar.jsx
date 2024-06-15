import { Link } from 'react-router-dom'
import navRoutes from '../routes/nav.routes'

const Navbar = () => {


  return (
    <div className='absolute  z-10 w-full'>
            <div  className="flex flex-row items-center justify-evenly text-white  mt-8 font-bold ">
                <Link to={'/'} className='flex flex-row  items-center'>
                <img src="/icons/harv.png" alt="harvesta" width={'25px'} height={'11,13'} className='' />
                <p className='ml-1'>Harvesta</p>
                </Link>
                    <div className='flex flex-row gap-2'>
                            {navRoutes.map((item, index)=>(
                                <Link to={item.path}  key={index} className='hover:bg-harvestaLightGreen px-2 rounded-md'>{item.name}</Link>
                                 
                            ))}
                    </div>
                    <Link to={'/marketplace'}>
                    <button className='bg-harvestaYellow px-4 py-1 w-28 rounded-full text-white'>Market</button>
                    </Link>
            </div>
    </div>
  )
}

export default Navbar
