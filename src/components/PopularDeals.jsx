import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRight } from "lucide-react";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img
          src={`https://s7d1.scene7.com/is/image/scom/BRZ_default_pass_scaled_low-4?$900p$`}
          alt={car.car}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h3 className="font-bold text-lg">{car.car}</h3>
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 font-medium">
              {(Math.random() * (5 - 4) + 4).toFixed(1)}
            </span>
            <span className="text-gray-500 text-sm ml-1">
              ({Math.floor(Math.random() * 3000)} reviews)
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center text-sm text-gray-600">
            <svg
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{car.car_model_year > 2015 ? 4 : 2} Passengers</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Auto</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <span>Air Conditioning</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>{car.car_model_year > 2018 ? 4 : 2} Doors</span>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500">Price</div>
            <div className="text-lg font-bold">
              ${Math.floor(Math.random() * 1500) + 1000}{" "}
              <span className="text-sm text-gray-500">/day</span>
            </div>
          </div>
          <Link
            to={`/cars/${car.id}`}
            className="bg-primary text-white px-5 py-2 rounded-md flex items-center hover:bg-primary/90 transition"
          >
            Rent Now
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const PopularDeals = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://myfakeapi.com/api/cars");
        const luxuryCars = response.data.cars.slice(0, 4);
        setCars(luxuryCars);
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError("Failed to load car data");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            POPULAR RENTAL DEALS
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Most popular cars rental deals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/cars"
            className="inline-flex items-center text-gray-700 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition"
          >
            Show all vehicles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularDeals;
