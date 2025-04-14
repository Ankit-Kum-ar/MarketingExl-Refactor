
const Hero = () => {
  return (
    <section className="text-white py-16 px-6 md:px-20 rounded-lg">
      <div className="container  flex flex-col md:flex-row items-center gap-10  md:justify-between">
        {/* Left Content */}
        <div className="md:w-2/3">
            
            <h2 className="text-6xl font-bold  leading-12">
            Power Up Your <br />
Brand with <br />
Marketing Services
            </h2>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 hidden md:block">
          <img
            src="/gifs/Lead.png" // Replace with the actual image path
            alt="Making a Difference"
            className="rounded-lg  shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;