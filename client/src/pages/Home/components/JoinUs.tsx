

const Joinus = () => {


  const phoneNumber = "+918512881278"; // Phone number


  return (
    <div className='flex h-[100vh] w-full bg-[#0f0f0f] overflow-hidden items-center justify-center'>
        

        <div className='relative z-10 text-white flex flex-col justify-center items-center gap-8 mt-16 w-[80vw]'> 
            <h1 className='text-6xl text-[#FC7901] font-extrabold text-center '>JOIN US</h1>

            <p className='text-xl text-center font-poppins'>We craft tailored digital marketing strategies to elevate your brand, engage audiences, and drive measurable results.</p>

            <div className='flex gap-4 '>
            <div className=' text-white flex h-40 '>
                <a
                 href="mailto:info@marketingexl.com"
                 className="flex flex-col gap-4 items-center justify-center aspect-square  bg-[#FC7901] rounded-3xl shadow-lg hover:bg-[#FC7901] transition-transform transform hover:scale-110"
                 >
                 <img
                 src= "/images/ic_round-message.svg"
                 alt="Mail"
        
                    className="h-8 w-8 text-white"
                  />
                <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='font-semibold font-poppins'>Urgent Message</p>
                <p className='font-poppins text-sm'>info@marketingexl.com </p>
                </div>
        
          
        
      </a> </div>
                <div className=' text-black flex'>
                <a
                 href={`tel:${phoneNumber}`}
                  className="flex flex-col gap-4 items-center justify-center aspect-square w-45 h-45 bg-white rounded-3xl shadow-lg hover:bg-secondary transition-transform transform hover:scale-110"
                 >
                 <img
                 src= "/images/ic_round-call.svg"
                 alt="Phone"
        
                    className="h-8 w-8 text-black"
                  />
                <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='font-semibold font-poppins'>Instant Call</p>
                <p className='font-semibold font-poppins'>+91-73297862768</p>
                </div>
        
          
        
      </a> </div>
                  
            </div>

        </div>

    </div>
  )
}

export default Joinus
