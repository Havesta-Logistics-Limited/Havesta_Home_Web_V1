import { Link } from 'react-router-dom'
import navRoutes from '../routes/nav.routes'

const Navbar = () => {
  return (
    <div>
            <div  className="flex flex-row items-center justify-evenly  font-bold ">
                <div className='flex flex-row items-center'>
                <img src="/icons/harv.png" alt="harvesta" />
                <p>Harvesta</p>
                </div>
                    <div className='flex flex-row gap-8'>
                            {navRoutes.map((item, index)=>(
                                <Link to={item.path} key={index}>{item.name}</Link>
                            ))}
                    </div>
                    <Link>
                    <button className='bg-harvestaYellow px-4 py-1 rounded-full text-white'>Get Stated</button>
                    </Link>
            </div>
    </div>
  )
}

export default Navbar
