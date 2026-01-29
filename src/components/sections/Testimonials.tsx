import { motion } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

const testimonials = [
  {
    quote:"They delivered our frontend, backend, UI/UX, and security with outstanding quality, finishing early, under budget, and perfectly aligned with our brand.\n\n Highly recommended as a reliable web development partner.",
    // quote:
    //   "The entire experience, from planning to launch, was professional and seamless.\n\nThe team delivered our complete website frontend, backend, UI/UX, and security with exceptional attention to detail. They finished the project two weeks ahead of schedule and 15% under budget, while still delivering a fast, secure, and beautifully designed website that aligns perfectly with our brand.\n\nWe’ve received great feedback from our clients since launch and would confidently recommend them as a reliable, results driven web development partner.",
    author: "Founder",
    role: "MM Contractor",
    avatar: "MM",
    rating: 5,
  },
];

export default function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-32 bg-[#F5F5F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#143109] font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#121212] tracking-tighter max-w-2xl mx-auto">
            Trusted by <span className="text-[#143109] italic">innovative</span> teams worldwide.
          </h2>
        </div>

        <div className="w-full px-4 md:px-12">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-none shadow-sm hover:shadow-[#143109]/20 hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden group">
                      <CardContent className="flex flex-col p-8 h-full bg-[#143109] relative text-white">
                         <Quote className="text-white/10 absolute top-8 right-8 w-12 h-12" />
                         
                         <div className="flex gap-1 mb-6">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                            ))}
                         </div>
                         
                         <p className="text-white/90 text-lg font-medium leading-relaxed mb-8 flex-grow">
                           "{t.quote}"
                         </p>
                         
                         <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                           <div className="w-12 h-12 rounded-full bg-white text-[#143109] flex items-center justify-center font-bold text-sm shadow-md">
                              {t.avatar}
                           </div>
                           <div>
                              <h4 className="font-bold text-white text-base">{t.author}</h4>
                              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">{t.role}</p>
                           </div>
                         </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex -left-4 md:-left-16 w-10 h-10 md:w-12 md:h-12 border-[#143109]/20 text-[#143109] hover:bg-[#143109] hover:text-white bg-white shadow-lg transition-all duration-300">
               <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </CarouselPrevious>
            <CarouselNext className="flex -right-4 md:-right-16 w-10 h-10 md:w-12 md:h-12 border-[#143109]/20 text-[#143109] hover:bg-[#143109] hover:text-white bg-white shadow-lg transition-all duration-300">
               <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
