import { highlightData1, highlightData2, highlightData3 } from "../libs/HighlightData.js";

const HighlightSection = (data, highlightIndex) => {
  return (
    <section className="grid grid-cols-4 grid-rows-2 max-h-[250px] gap-5">
      {data.map((item, index) => (
        <div className="flex flex-col" key={index}>
          <div className="relative rounded-lg">
            {index === highlightIndex && (
              <div className="absolute right-0 bg-[#FF498B] rounded-tr-lg rounded-bl-lg py-1 px-5">
                <p className="text-white">
                  <span className="font-semibold">Popular</span> Choice
                </p>
              </div>
            )}
            <img
              src={item.imgSrc}
              alt={item.imgName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-2 pl-2">
            <p className="text-primary font-medium">{item.title}</p>
            <p className="text-[#B0B0B0] text-sm">{item.location}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const Highlight = () => {
  return (
    <div className="max-w-[1640px] mx-auto pt-10 md:pt-16 px-6 md:px-16 lg:px-20">
      <h1 className="text-primary font-semibold text-2xl mb-6">
        House with beauty backyard
      </h1>
      {HighlightSection(highlightData1, 0)}

      <h1 className="text-primary font-semibold text-2xl mb-6 mt-10">
        Hotels with large living room
      </h1>
      {HighlightSection(highlightData2, 3)}

      <h1 className="text-primary font-semibold text-2xl mb-6 mt-10">
        Apartments with kitchen set
      </h1>
      {HighlightSection(highlightData3, 2)}
    </div>
  );
};

export default Highlight;
