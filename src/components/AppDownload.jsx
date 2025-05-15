import React, { useState } from "react";
import iPhone from "../assets/iPhone.png";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";

const AppDownload = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you! Download link has been sent.");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section className="pt-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content - Form and Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Download Rentcars <br />
            App for <span className="text-primary">FREE</span>
          </h2>
          <p className="text-gray-600 mb-6">
            For faster, easier booking and exclusive deals.
          </p>

          {/* App Store Buttons */}
          <div className="flex space-x-4 mb-8">
            <a
              href="#"
              className="inline-block"
              aria-label="Get it on Google Play"
            >
              <img src={googlePlay} alt="Google Play" className="h-10 w-auto" />
            </a>
            <a
              href="#"
              className="inline-block"
              aria-label="Download on the App Store"
            >
              <img src={appStore} alt="App Store" className="h-10 w-auto" />
            </a>
          </div>

          {/* Download Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-full bg-blue-100/80 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-full bg-blue-100/80 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-full bg-blue-100/80 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right Content - Phone Image */}
        <div className="relative hidden md:block">
          <img
            src={iPhone}
            alt="Rentcars App on iPhone"
            className="max-w-full object-contain mx-auto"
          />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20"></div>
    </section>
  );
};

export default AppDownload;
