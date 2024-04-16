// src/components/Header.tsx

import Link from "next/link";
import Image from "next/image"

const Header = () => {
  const navigation = [
    { label: "Product", link: "#product" }, 
    { label: "Reviews", link: "#reviews" }, 
    { label: "Contact", link: "#contact" }, 
  ];

  return (
    <header className="bg-white text-gray-800 p-4">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
          <Link href="/">
            <span>
              <Image
                src="/img/logo.jpg"
                alt="N"
                width="50"
                height="50"
              />
            </span>
          </Link>
          <span>FlowersFly</span>
        </div>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menuItem, index) => (
              <li className={`mr-3 ${index !== navigation.length - 1 && 'pr-3'}`} key={index}>
                <a href={menuItem.link} className="text-lg font-normal text-gray-800 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Get Started */}
        <div className="hidden mr-3 space-x-4 lg:flex">
          <Link href="#product" className="px-6 py-2 text-white bg-indigo-600 rounded-md">
            Buy Now!
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
