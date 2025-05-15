import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={`https://s7d1.scene7.com/is/image/scom/BRZ_default_pass_scaled_low-4?$900p$`}
          alt={car.car}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
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
              ${car.price.replace("$", "").replace(",", "")}{" "}
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

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const carsPerPage = 8;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://myfakeapi.com/api/cars");
        setCars(response.data.cars);
        setFilteredCars(response.data.cars);
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError("Failed to load car data");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter(
        (car) =>
          car.car.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.car_model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.car_color.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCars(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, cars]);

  // Get current cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPagination = () => {
    const pages = [];

    // Previous page
    pages.push(
      <button
        key="prev"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
    );

    // First page
    pages.push(
      <button
        key={1}
        onClick={() => paginate(1)}
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? "bg-primary text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        1
      </button>
    );

    // Ellipsis if needed
    if (currentPage > 3) {
      pages.push(
        <span key="ellipsis1" className="px-3 py-1">
          ...
        </span>
      );
    }

    // Pages around current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 1 || i === totalPages) continue; // Skip first and last page as they're handled separately
      pages.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-3 py-1 rounded ${
            currentPage === i
              ? "bg-primary text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }

    // Ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="ellipsis2" className="px-3 py-1">
          ...
        </span>
      );
    }

    // Last page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-primary text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    // Next page
    pages.push(
      <button
        key="next"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    );

    return pages;
  };

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

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-32">
          <div className="text-red-600 mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Try Again
          </button>
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
          <span className="text-gray-900">Cars</span>
        </div>

        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-2">
          POPULAR RENTAL DEALS
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Most popular cars rental deals
        </h1>

        <div className="mb-8 max-w-xl">
          <SearchBar onSearch={handleSearch} />
        </div>

        {filteredCars.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-gray-500 mb-4">
              <svg
                className="h-16 w-16 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No cars found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search criteria
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-1">
              {renderPagination()}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarsPage;
