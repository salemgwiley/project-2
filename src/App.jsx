import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PopularDeals from "./components/PopularDeals";
import CarsPage from "./pages/CarsPage";
import CarDetailPage from "./pages/CarDetailPage";
import SearchBar from "./components/SearchBar";
import HowItWorks from "./components/HowItWorks";
import CarBrands from "./components/CarBrands";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SearchBar />
                <PopularDeals />
                <HowItWorks />
                <CarBrands />
                <WhyChooseUs />
                <Testimonials />
                <AppDownload />
              </>
            }
          />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:id" element={<CarDetailPage />} />
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                <p className="mb-6">
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  className="bg-primary text-white px-4 py-2 rounded-md"
                >
                  Go Home
                </a>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
