import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {

  return (
    <main className="min-h-screen w-full bg-[#E0E0E0] text-[#212121] font-sans selection:bg-[#143109]/20 selection:text-[#143109] overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <Process />

      <Features />
      
      <Testimonials />

      <Footer />

    </main>
  );
}
