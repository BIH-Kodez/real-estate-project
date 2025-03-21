import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Card, CardContent } from "./ui/Card"; 



const testimonials = [
  {
    name: "David Harrison",
    title: "Founder of Swifthub",
    text: "As someone new to real estate investing, I was initially hesitant. However, the expert guidance and user-friendly platform made it incredibly easy. The team provided me with market insights and helped me choose the right properties. Within months, I started seeing great returns. This has been one of the smartest financial decisions I’ve ever made!",
    image: "/images/testimonial-bg1.jpg"
  },
  {
    name: "Samantha Lee",
    title: "CEO of PropTech",
    text: "Investing in properties has never been easier. The platform's intuitive design and data-driven insights gave me the confidence to expand my portfolio. Highly recommend!",
    image: "/images/testimonial-bg2.jpg"
  },
  {
    name: "James Carter",
    title: "Real Estate Investor",
    text: "Thanks to this platform, I was able to diversify my investments and maximize returns. The transparency and support are unmatched!",
    image: "/images/testimonial-bg3.jpg"
  }
];

export default function TestimonialCarousel() {
  return (
    <div className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Trusted by investors, proven by results</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination
        loop
        modules={[Navigation, Pagination]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative flex items-center justify-center h-[400px] bg-cover bg-center"
              style={{ backgroundImage: `url(${testimonial.image})` }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/20 backdrop-blur-lg p-6 max-w-2xl rounded-2xl shadow-lg">
                <CardContent>
                  <motion.p 
                    className="text-white text-lg italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    {testimonial.text}
                  </motion.p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <motion.img
                      src="/images/profile-placeholder.png"
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                    <motion.div 
                      className="text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm opacity-80">{testimonial.title}</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
