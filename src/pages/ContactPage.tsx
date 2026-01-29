import Navbar from "@/components/sections/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-[#E0E0E0] text-[#212121] font-sans selection:bg-[#143109]/20 selection:text-[#143109] overflow-x-hidden">
      <Navbar />
      <div className="pt-12 bg-white">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
