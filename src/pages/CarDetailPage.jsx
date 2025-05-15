import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";

const CarDetailPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://myfakeapi.com/api/cars");
        const foundCar = response.data.cars.find((c) => c.id === parseInt(id));

        if (foundCar) {
          setCar(foundCar);
        } else {
          setError("Car not found");
        }
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError("Failed to load car data");
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetail();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-red-600 text-lg mb-4">
              {error || "Car not found"}
            </div>
            <Link
              to="/cars"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to cars
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link to="/cars" className="hover:text-primary">
            Cars
          </Link>
          <span>/</span>
          <span className="text-gray-900">{car.car}</span>
        </div>

        <Link
          to="/cars"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to cars
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-3/4">
              <div className="h-40 md:h-96 overflow-hidden">
                <img
                  src={`https://s7d1.scene7.com/is/image/scom/BRZ_default_pass_scaled_low-4?$900p$`}
                  alt={car.car}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 p-6">
              <h1 className="text-2xl font-bold mb-2">{car.car}</h1>
              <div className="flex items-center mb-4">
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

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="font-semibold mb-3">Car Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Model</p>
                    <p className="font-medium">{car.car_model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium">{car.car_model_year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Color</p>
                    <p className="font-medium">{car.car_color}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">VIN</p>
                    <p className="font-medium">{car.car_vin}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-3xl font-bold text-primary">
                    {car.price}{" "}
                    <span className="text-sm text-gray-500">/day</span>
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                    Available for rent
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition">
                Book Now
              </button>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-4">About this car</h2>
            <p className="text-gray-700 mb-4">
              The {car.car} {car.car_model} is a {car.car_model_year} model that
              combines style, performance, and comfort. This {car.car_color}{" "}
              vehicle is perfect for both city driving and long road trips. With
              its impressive specifications and modern features, it offers an
              exceptional driving experience.
            </p>
            <p className="text-gray-700">
              Whether you're traveling for business or pleasure, this car
              provides reliability, efficiency, and comfort for all your
              journeys. Book now to experience the quality and performance of
              the {car.car} {car.car_model}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
