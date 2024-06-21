import VideoPlayer from './Video'
import JoinUs from './JoinUs'
import Reviews from './Reviews'

const Explore = () => {
  return (
    <div className=' mt-20'>
    <div className='flex flex-row justify-center gap-12 font-primary'>
        <div className='flex flex-row mb-20'>
            <div className='flex flex-col p-2'>
                <img src="/icons/explore1.svg" alt="harvesta" />
                <img src="/icons/ex.svg" alt="harvesta" className='mt-4'/>
            </div>
            <div className='flex flex-col mt-16 p-2'>
                <img src="/icons/expl.svg" alt="harvesta"/>
                <img src="/icons/explore2.svg" alt="harvesta" className='mt-4'/>
            </div>
        </div>
        <div className='w-80  mt-44'>
            <h1 className='text-4xl font-extrabold w-[350px]'>See the world & spend less always.</h1>
            <p className='text-xs p-2 leading-5 mt-2'>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
        </div>
    </div>
       <div className='flex justify-center mt-8 p-6'>
            <VideoPlayer />
        </div>
        <JoinUs />
        <br />
        <br />
        <div className='flex justify-center mt-8 p-6 items-center' >
          <Reviews />
        </div>
        <br />
    </div>
  )
}

export default Explore
