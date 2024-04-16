import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Bunga Mawar Merah",
      description: "Cocok untuk perayaan ulang tahun atau hari pernikahan.",
      imageSrc: "/img/mawar.jpg",
    },
    {
      id: 2,
      name: "Bunga Lily Putih",
      description: "Menghadirkan kesan elegan pada momen-momen istimewa.",
      imageSrc: "/img/lily.jpg",
    },
    {
      id: 3,
      name: "Bunga Matahari",
      description: "Memberikan keceriaan pada ruangan dan suasana.",
      imageSrc: "/img/matahari.jpg",
    },
    {
      id: 4,
      name: "Bunga Tulip Merah",
      description: "Menambahkan nuansa romantis pada momen spesial.",
      imageSrc: "/img/tulip.jpg",
    },
    {
      id: 5,
      name: "Bunga Anggrek Ungu",
      description: "Menghadirkan keindahan alam yang eksotis.",
      imageSrc: "/img/anggrek.jpg",
    },
    {
      id: 6,
      name: "Bunga Sakura",
      description: "Membawa atmosfer keindahan musim semi di Jepang.",
      imageSrc: "/img/sakura.jpg",
    },
  ];

  return (
    <section id="product" className="container mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
        Product Kami
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <button className="bg-indigo-400 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">
              Pesan Sekarang
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
