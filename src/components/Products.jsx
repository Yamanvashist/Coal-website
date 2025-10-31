import Coalbg from '../assets/Coalbg.jpg'
import coal1 from '../assets/coalPhoto.jpg'


const Products = () => {

   const products = [
    {
      id: 1,
      image : coal1,
      name: "Steam Coal",
      description: "High-quality steam coal for power generation and industrial use",
      specs: "GCV: 5500-6000 kcal/kg"
    },
    {
      id: 2,
      image : "",
      name: "Coking Coal",
      description: "Premium metallurgical coal for steel production",
      specs: "Low ash, high carbon content"
    },
    {
      id: 3,
      image : "",
      name: "Thermal Coal",
      description: "Efficient thermal coal for energy generation",
      specs: "GCV: 4500-5500 kcal/kg"
    },
    {
      id: 4,
      image : "",
      name: "Anthracite Coal",
      description: "Superior grade coal with highest carbon content",
      specs: "Carbon: 86-97%"
    }
  ];

return (
  <section className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative bg-black">
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 text-white px-4">
      <h1 className=" font-bold text-4xl text-gray-900 tracking-wide">
        <span className="text-white">Our Products</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-10 mt-10">

        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-black/30 border border-yellow-500 rounded-xl p-6 w-[350px] hover:scale-105 transition-all duration-300 shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-72 w-full object-cover rounded-md"
            />

            <h2 className="font-semibold text-lg mt-3 text-yellow-400">
              {product.name}
            </h2>

            <p className="text-sm text-gray-300 mt-1">
              {product.description}
            </p>

            <span className="text-lg font-bold text-white mt-2">
              ₹{product.price}
            </span>

            <button className="mt-3 bg-white text-black py-1 rounded-lg hover:bg-yellow-400 font-semibold">
              Buy Now
            </button>
          </div>
        ))}

      </div>

    </div>
  </section>
);

}

export default Products