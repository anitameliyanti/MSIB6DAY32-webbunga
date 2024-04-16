import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-center">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <div className="flex items-center space-x-2 text-indigo-500 dark:text-gray-500">
          <Image src="/img/logo.jpg" alt="Logo" width="40" height="40" />
          <span>FlowersFly</span>
        </div>
        <div className="text-left">
          <p className="text-gray-600">
            For inquiries, please contact us at: <br />
            Email: info@flowersfly.com <br />
            Phone: +1234567890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
