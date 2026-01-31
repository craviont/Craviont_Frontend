import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-12 bg-white selection:bg-[#143109] selection:text-white">
      {/* Premium Tech Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Light shadow from top right to mid */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(20,49,9,0.03)_0%,_rgba(255,255,255,0)_60%)]" />
        
        {/* Subtle accent blobs for depth */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#143109]/2 rounded-full blur-[120px]" />
      </div>


      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-[#143109]/5 border border-[#143109]/10 text-[#143109] text-[12px] font-bold tracking-widest uppercase mb-10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#143109] animate-pulse" />
            Leading Digital Agency
          </div> */}
          
          <h1 className="text-4xl md:text-[92px] font-bold tracking-tight leading-[0.95] mb-10 text-[#121212] max-w-4xl mx-auto font-display">
            Precision code.<br />
            <span className="text-[#143109] italic">Exceptional</span> design.
          </h1>

          <p className="text-lg md:text-xl text-[#212121]/60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            We design and build secure, scalable web and mobile applications for startups and growing businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/services">
              <Button
                size="lg"
                className="h-15 px-10 text-base bg-[#143109] hover:bg-[#143109]/90 text-white rounded-full shadow-2xl shadow-[#143109]/20 transition-all duration-500 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                View Services <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="h-15 px-10 text-base border-[#143109]/20 text-[#143109] hover:bg-[#143109]/5 rounded-full transition-all duration-500 cursor-pointer"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
