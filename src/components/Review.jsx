const Review = () => {
  return (
    <div className="max-w-[1640px] mx-auto mt-10 pt-10 md:pt-16 px-6 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20">
        <section className="">
          <img
            src="../../public/foto_keluarga.png"
            alt="Foto Keluarga"
            className="w-full h-full object-cover"
          />
        </section>
        <section className="col-span-2 flex flex-col justify-center font-poppins">
          <h1 className="text-lg md:text-xl text-primary font-semibold">Happy Family</h1>
          <div className="mt-10 mb-10">
            <img src="../../public/star.png" alt="Star" className="w-40" />
            <h1 className="text-xl sm:text-2xl md:text-3xl text-primary mt-4 mb-4">
              What a great trip with my family and I should try again next time
              soon ...
            </h1>
            <p className="text-[#B0B0B0]">Bayu, Fullstack Developer</p>
          </div>
          <div>
            <button className="bg-secondary text-white py-2 px-5 md:px-10 rounded-sm font-poppins shadow-blue hover:bg-tertiary duration-300">
              Read Their Story
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
