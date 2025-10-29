import coal from '../assets/coal.png'; // Make sure extension matches the actual file

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${coal})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          Powering the Future with <span className="text-yellow-400">Coal</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-200">
          Supplying high-quality coal across industries — reliable, efficient, and sustainable.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 cursor-pointer transition-all">
            Explore More
          </button>
          <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white cursor-pointer hover:text-black transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
