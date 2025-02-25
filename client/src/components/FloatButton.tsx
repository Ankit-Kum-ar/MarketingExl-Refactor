
const FloatButton = () => {

    const whatsappNumber = "+918851469617"; //  WhatsApp number
    const phoneNumber = "+918851469617"; // Phone number
    const whatsappMessage = "Hello! I would like to inquire about your services."; // Default WhatsApp message
  
  return (
    <div className="fixed bottom-4 right-4  flex flex-col items-center gap-3 z-50">
    {/* WhatsApp Button */}
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#FD4C2A] to-[#F99115] rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
    >
      <img
        src="/images/1.png" // whatsapp icon
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>

    {/* Phone Call Button */}
    <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#FD4C2A] to-[#F99115] rounded-full shadow-lg hover:bg-secondary transition-transform transform hover:scale-110"
      >
        <img
        src= "/images/ic_round-call-1.svg" //call icon
        alt="Phone"
        
        className="h-8 w-8 "
      />
          
        
          
        
      </a>
    </div>
  )
}

export default FloatButton