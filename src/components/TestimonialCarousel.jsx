// src/components/TestimonialCarousel.jsx
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "As someone new to real estate investing, I was initially hesitant. However, the expert guidance and user-friendly platform made it incredibly easy. The team provided me with market insights and helped me choose the right properties. Within months, I started seeing great returns. This has been one of the smartest financial decisions I’ve ever made!",
    author: "David Harrison",
    role: "Founder of SwiftHub",
    image: "/testimonials/juricakoletic.jpg",
  },
  {
    quote:
      "The expert guidance and user-friendly platform made it incredibly easy. The team's insights helped me build a diversified portfolio faster than I expected.",
    author: "Gabriel Silverio",
    role: "Portfolio Investor",
    image: "/testimonials/gabrielsilverio.jpg",
  },
  // Add more testimonials
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12"
        >
          Trusted by investors, proven by results
        </motion.h2>

        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 sm:px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative min-h-[480px] sm:h-[560px] flex flex-col items-center pt-8 sm:pt-12 px-4 sm:px-8 pb-8"
              >
                {/* Glass Card Wrapper */}
                <div className="w-full h-full bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl flex flex-col items-center p-6">

                  {/* Circular Profile Image */}
                  <div className="flex-shrink-0 aspect-square w-24 sm:w-32 rounded-full overflow-hidden border-4 border-green-100 mb-4 sm:mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="text-center mb-4 sm:mb-8">
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
