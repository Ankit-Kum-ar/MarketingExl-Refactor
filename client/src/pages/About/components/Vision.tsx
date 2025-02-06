
const Vision = () => {
  return (
    <section className=" flex flex-col md:flex-row gap-8 justify-center items-center my-12 ">
        <div className="mission flex flex-col gap-2 items-center justify-center p-8  bg-[url(/images/test-bg.png)] object-cover text-white rounded-xl shadow-lg hover:scale-105 transition-transform w-[80vw] md:w-[35vw]">
            <h3 className="text-[#FC7901] font-poppins font-bold text-xl md-text-2xl ">OUR MISSION</h3>
            <p className="text-white text-center font-poppins text-sm ">MarketingEXL empowers buisness with cutting-edge digital strategies, delivering  exceptional growth, engagement, and long-term sucess.</p>

        </div>
        <div className="vision flex flex-col gap-3 items-center justify-center p-6  bg-[url(/images/test-bg.png)] object-cover text-white rounded-xl shadow-lg hover:scale-105 transition-transform w-[80vw] md:w-[35vw]">
            <h3 className="text-[#FC7901] font-poppins font-bold text-xl md-text-2xl ">OUR VISION</h3>
            <p className="text-white text-center font-poppins text-sm ">MarketingEXL aims to be the leading digtal marketing firm, driving buisness growth innovative campaigns and industry-leading strategies.</p>

        </div>

    </section>
  )
}

export default Vision
