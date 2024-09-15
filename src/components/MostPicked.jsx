import { mostPickedData } from "../libs/MostPickedData.js";
  
  const MostPicked = () => {
    return (
      <div className="max-w-[1640px] mx-auto h-full pt-10 md:pt-20 px-6 md:px-16 lg:px-20">
        <h1 className="text-primary font-semibold text-2xl mb-6">Most Picked</h1>
        <section className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4">
          {mostPickedData.map((item, index) => (
            <div key={index} className={`relative ${index === 0 ? "row-span-2" : ""} rounded-lg duration-300 cursor-pointer transition ease-in-out delay-150`}>
              <div className="absolute w-full h-full bg-black/10 rounded-lg hover:bg-black/40 hover:font-semibold duration-500">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-xl font-poppins">{item.name}</p>
                  <p className="text-white text-xs font-poppins">{item.location}</p>
                </div>
                <div className="absolute right-0 py-1 px-5 rounded-tr-lg rounded-bl-lg bg-[#FF498B]">
                  <p className="text-white text-regular font-poppins">{item.price}</p>
                </div>
              </div>
              <img
                src={item.imgSrc}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </section>
      </div>
    );
  };
  
  export default MostPicked;
  