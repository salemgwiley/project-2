import React from "react";
import { Shield, UserCheck, Truck, Clock } from "lucide-react";
import audiCar from "../assets/Audi1.png";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Best price guaranteed",
      description:
        "Find a lower price? We'll refund you 105% of the difference.",
    },
    {
      icon: <UserCheck className="h-6 w-6 text-blue-500" />,
      title: "Experience driver",
      description:
        "Don't have driver? Don't worry, we have many experienced drivers for you.",
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      title: "24 hour car delivery",
      description:
        "Book your car anytime and we will deliver it directly to you.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "24/7 technical support",
      description:
        "Have a question? Contact technical support any time when you have problems.",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden sm:mx-8 my-12 rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-[#EEF4FF] rounded-lg transform -skew-y-6 z-0 origin-top-left"></div>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left side - Car image */}
        <div className=" items-center justify-center hidden lg:flex">
          <img
            src={audiCar}
            alt="Sports Audi Car"
            className="absolute  -left-0 w-[40%] md:w-[40%] h-auto z-20 bottom-0 md:bottom-auto"
          />
        </div>

        {/* Right side - Text and benefits */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We offer the best experience with our rental deals
            </h2>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 p-2 bg-blue-100 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-gray-600 mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
