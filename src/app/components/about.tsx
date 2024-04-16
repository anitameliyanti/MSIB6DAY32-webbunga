import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
            Tentang FlowersFly
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Toko Bunga Cantik kami menyediakan berbagai macam bunga segar dan indah untuk setiap kesempatan. Kami memiliki komitmen untuk memberikan produk berkualitas tinggi dengan layanan terbaik kepada pelanggan kami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
