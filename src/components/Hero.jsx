const heroData = [
  {
    imgSrc: "/travel_icon.png",
    alt: "Travel",
    count: "80,409",
    label: "travelers",
  },
  {
    imgSrc: "/camera_icon.png",
    alt: "Camera",
    count: "862",
    label: "treasure",
  },
  {
    imgSrc: "/location_icon.png",
    alt: "Location",
    count: "1,492",
    label: "cities",
  },
];

const Hero = () => {
  return (
    <div className="max-w-[1640px] h-full mx-auto pt-10 md:pt-20 px-6 md:px-16 lg:px-20">
      <div className="flex justify-between">
        <div className="">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold font-poppins">
              Forget Busy Work,
            </h1>
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold font-poppins">
              Start Next Vacation
            </h1>
          </div>
          <p className="text-[#B0B0B0] font-poppins pt-5 md:pt-10 pb-5 w-full md:w-1/2 text-xs sm:text-sm md:text-md">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <button className="bg-secondary text-white py-2 px-5 md:px-10 rounded-sm font-poppins shadow-blue hover:bg-tertiary duration-300">
            Show Me How
          </button>
          <div className="flex gap-10 md:gap-20 pt-10 lg:pt-14">
          {heroData.map((item, index) => (
            <div key={index}>
              <img src={item.imgSrc} alt={item.alt} />
              <p className="text-[#B0B0B0] pt-2 font-poppins">
                <span className="text-primary font-semibold">{item.count}</span>{" "}
                {item.label}
              </p>
            </div>
          ))}
          </div>
        </div>
        <div className="w-full h-full md:w-4/5 md:h-4/5 lg:w-3/5 lg:h-3/5 hidden sm:flex">
          <img src="../../public/banner.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
