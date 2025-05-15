import React from "react";
import { MapPin, Calendar, Car } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Rent with following 3 working steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Choose location</h3>
            <p className="text-gray-600">
              Choose your pickup location and find available cars near you
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-primary h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Pick-up date</h3>
            <p className="text-gray-600">
              Select your pick-up and return date and time for your rental
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Car className="text-primary h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Book your car</h3>
            <p className="text-gray-600">
              Book your car and we'll have it ready for you at your selected
              time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
