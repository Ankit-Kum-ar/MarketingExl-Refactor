import Spline from '@splinetool/react-spline'
import SplineBall from './SplineBall'

const Hero = () => {
  return (
    <>
    
    <div className='HeroContent  bg-black flex flex-col justify-between  relative h-screen items-center bg-gradient-to-t from-black via-transparent to-transparent'>
        <div className='flex flex-col items-start w-8/12 z-10 mt-20'>
            <h2 className='greeting text-white text-9xl font-extrabold text-left uppercase z-10 '>Hello</h2>
            <h2 className='greeting text-white text-4xl font-extrabold text-left uppercase z-10 '>Welcome To</h2>
        </div>
      <h1 className='greeting text-[#FC7901] text-[106px] font-extrabold text-center mb-10 z-10'>MARKETING EXL</h1>
      <div className='bg-black absolute bottom-0 right-0 z-10 w-60 h-16'></div>
    </div>
    <div className=' h-full w-full absolute top-0 left-0   '>
      <SplineBall />
    </div>
    
    
    </>
  )
}

export default Hero