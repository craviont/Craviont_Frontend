import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Cpu, Ship, ChevronRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Deep dive into your business ecosystem and requirements.",
  },
  {
    icon: Compass,
    title: "Strategy",
    description: "Architecting the perfect solution and user journey map.",
  },
  {
    icon: Cpu,
    title: "Execution",
    description: "Engineering excellence with clean, scalable code architecture.",
  },
  {
    icon: Ship,
    title: "Launch",
    description: "Seamless deployment with continuous optimization and support.",
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#143109] font-bold tracking-[0.2em] text-xs uppercase mb-6 block"
            >
              The Blueprint
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-display leading-[1.1] text-[#121212]"
            >
              From concept to <br /> digital reality.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#212121]/60 text-lg max-w-xs leading-relaxed"
          >
            A high-precision engineering flow designed for modern digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Animated Wavy Connection Line with blinking effect - Mobile & Desktop */}
          <div className="absolute top-[3rem] left-[12.5%] right-[12.5%] h-[40px] -z-0 hidden md:block">
            <svg width="100%" height="40" viewBox="0 0 1000 40" fill="none" preserveAspectRatio="none">
              <motion.path 
                d="M0 20 Q 125 0 250 20 T 500 20 T 750 20 T 1000 20" 
                stroke="#143109" 
                strokeWidth="1.5" 
                strokeDasharray="6 6" 
                animate={{ 
                  opacity: [0.05, 0.2, 0.05],
                  strokeDashoffset: [0, -12]
                }}
                transition={{ 
                  opacity: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  strokeDashoffset: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
            </svg>
          </div>
          
          {/* Mobile Vertical Line */}
          <div className="absolute top-[3rem] bottom-[10rem] left-[50%] w-[1px] -translate-x-1/2 -z-0 sm:hidden border-l border-dashed border-[#143109]/20" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group z-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border border-[#143109]/20 shadow-xl shadow-[#143109]/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#143109] group-hover:border-[#143109] transition-all duration-500 relative">
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#143109]/20 group-hover:border-white/40 group-hover:rotate-180 transition-all duration-1000" />
                  <step.icon size={28} className="text-[#143109] group-hover:text-white transition-all duration-500 relative z-10" strokeWidth={1.5} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#121212] text-white flex items-center justify-center text-[10px] font-bold shadow-lg z-20">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#121212] tracking-tight">{step.title}</h3>
                <p className="text-[#212121]/60 text-sm leading-relaxed max-w-[22rem]">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="md:hidden my-6 text-gray-200">
                    <ChevronRight size={24} className="rotate-90 opacity-20" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
