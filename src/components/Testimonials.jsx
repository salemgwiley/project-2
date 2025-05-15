import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Charlie Johnson",
      location: "from New York, US",
      rating: 5.0,
      comment:
        "I feel very secure when using CarRental's services. Your customer care team is very enthusiastic and the driver is always on time.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Emma Wilson",
      location: "from London, UK",
      rating: 4.8,
      comment:
        "Been using your services for business trips. Your service is great, I will continue to use your service.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "David Miller",
      location: "from Toronto, Canada",
      rating: 5.0,
      comment:
        "The car was in perfect condition and the booking process was incredibly smooth. Highly recommend!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Sophia Rodriguez",
      location: "from Madrid, Spain",
      rating: 5.0,
      comment:
        "Excellent service from start to finish! The car was spotless and the rental process was quick and efficient.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "James Thompson",
      location: "from Sydney, Australia",
      rating: 4.9,
      comment:
        "Fantastic experience! The vehicle was exactly what we needed for our family trip. Will definitely be using this service again.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const renderStars = () => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            What people say about us?
          </h2>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[400px] mx-auto">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left side - Image */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent"></div>
                  </div>

                  {/* Right side - Content */}
                  <div className="w-full md:w-1/2 p-6 flex flex-col justify-between h-1/2 md:h-full">
                    <div>
                      <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold mr-2">
                          {testimonial.rating.toFixed(1)}
                        </span>
                        <span className="text-sm text-gray-600">stars</span>
                      </div>
                      <div className="mb-3">{renderStars()}</div>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        "{testimonial.comment}"
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .testimonial-swiper {
          padding-bottom: 50px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #1572d3 !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #1572d3 !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
