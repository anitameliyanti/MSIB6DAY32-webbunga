import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 mb-5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Selamat Datang di Toko Bunga Cantik Kami
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Temukan berbagai macam bunga cantik untuk segala kesempatan.
            </p>
            <div className="flex space-x-4">
              <a
                href="#product"
                className="btn-primary inline-block px-6 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
              >
                Lihat Produk
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-block px-6 py-3 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-900 transition duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:ml-20">
            <img
              src="/img/hero.jpg"
              alt="Bunga Cantik"
              className="rounded-lg h-45 w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
