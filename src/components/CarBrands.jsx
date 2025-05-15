import React from "react";
import Marquee from "react-fast-marquee";

const CarBrands = () => {
  // Brand logos with reliable URLs
  const brands = [
    {
      name: "Audi",
      image:
        "https://brandlogos.net/wp-content/uploads/2013/07/audi-eps-vector-logo-400x400.png",
    },
    {
      name: "BMW",
      image: "https://cdn.worldvectorlogo.com/logos/bmw-2.svg",
    },
    {
      name: "Honda",
      image:
        "https://fellowstudio.com/wp-content/uploads/2024/02/honda-logo-1.png",
    },
    {
      name: "Jaguar",
      image:
        "https://www.pngplay.com/wp-content/uploads/13/Jaguar-Logo-PNG-Photos.png",
    },
    {
      name: "Mazda",
      image: "https://download.logo.wine/logo/Mazda/Mazda-Logo.wine.png",
    },
    {
      name: "Mercedes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1024px-Mercedes-Logo.svg.png",
    },
    {
      name: "Nissan",
      image:
        "https://1000logos.net/wp-content/uploads/2020/03/Nissan-Logo-2012.png",
    },
    {
      name: "Toyota",
      image:
        "https://images.seeklogo.com/logo-png/17/2/toyota-logo-png_seeklogo-171947.png",
    },
    {
      name: "Volvo",
      image:
        "https://car-brand-names.com/wp-content/uploads/2015/12/Volvo-Logo-2014.png",
    },
  ];

  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Gradient edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* First marquee */}
          <div className="mb-8">
            <Marquee speed={50} gradient={20} pauseOnHover={true}>
              {brands.map((brand) => (
                <div key={brand.name} className="mx-10">
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    className="h-16 w-auto mx-4 grayscale transition-all duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/200x80?text=${brand.name}`;
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarBrands;
