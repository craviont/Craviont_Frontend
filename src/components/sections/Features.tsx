import { CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling millions of requests without compromise.",
    icon: Zap
  },
  {
    title: "Clean UI & UX",
    description: "Pixel-perfect implementation of designs ensuring delightful user experiences.",
    icon: CheckCircle2
  },
  {
    title: "Fast Delivery + Support",
    description: "Agile methodology ensuring rapid shipping and dedicated post-launch care.",
    icon: ShieldCheck
  }
];

export default function Features() {
  return (
    // Wrapper div to provide the background color for the rounded corners to "reveal"
    // Since the next section is #F5F5F5 (Testimonials), we want the corners of this section to sit on top of #F5F5F5
    <div className="bg-transparent pt-0 relative z-20"> 
      <section id="about" className="py-24 bg-[#143109] text-white relative overflow-hidden selection:bg-white selection:text-[#143109] z-10 shadow-2xl">
        {/* Background patterns - Same as services for consistency */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ 
            backgroundImage: `linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)`,
            backgroundSize: '100px 100px' 
          }} 
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, 
            backgroundSize: '20px 20px' 
          }} 
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase mb-6"
            >
              Why Choose Us
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight max-w-3xl text-white">
              Excellence is not an act, it's a <span className="text-white/60 italic">habit.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white/[0.03] backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-[#143109] transition-all duration-500">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white tracking-tight">{feature.title}</h3>
                <p className="text-[#E0E0E0]/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
