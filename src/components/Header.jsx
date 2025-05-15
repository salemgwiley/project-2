import { Link } from "react-router-dom";
import heroImg from "../assets/hero_car.png";
import heroBg from "../assets/hero-bg.png";
import googlePlayImg from "../assets/google-play.png";
import AppStoreImg from "../assets/app-store.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative pb-32 md:pb-0 md:h-screen flex flex-col overflow-hidden">
      {/* Background image positioned absolutely */}
      <Navbar />
      <img
        src={heroBg}
        alt="Background"
        className="absolute top-0 right-0 h-full md:max-w-4/5 object-cover z-0  md:block"
      />

      <div className="flex-1 flex">
        <div className="container mt-10 sm:mt-20 md:mt-40 mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 pt-10 md:pt-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Find, book and <br />
              rent a car{" "}
              <span className="relative inline-block text-[#1572D3]">
                Easily
                <svg
                  className="absolute -bottom-2 left-0 w-full max-w-[135px] h-auto"
                  viewBox="0 0 135 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M134.398 2.4454C57.1256 -2.591 23.8505 5.91265 1.51269 9.43271C1.16554 12.3701 1.29738 14.786 0.927661 19.4527C60.8229 -0.00292444 100.753 3.19434 134.353 4.43374C134.367 4.06427 134.357 3.55381 134.398 2.4454Z"
                    fill="#1572D3"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 my-6 leading-relaxed">
              Get a car wherever and whenever you{" "}
              <br className="hidden sm:inline" />
              need it with your iOS and Android device.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <Link to="#download">
                <img
                  src={googlePlayImg}
                  alt="Google Play"
                  className="h-10 lg:h-12 w-auto"
                />
              </Link>

              <Link to="#download">
                <img
                  src={AppStoreImg}
                  alt="App Store"
                  className="h-10 lg:h-12 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Car image positioned absolutely */}
      <img
        src={heroImg}
        alt="Blue sports car"
        className="absolute hidden md:block md:top-1/2 md:-translate-y-1/3 right-0 w-[80%] md:w-[50%] h-auto z-20 bottom-0 md:bottom-auto"
      />
    </div>
  );
};

export default Header;
