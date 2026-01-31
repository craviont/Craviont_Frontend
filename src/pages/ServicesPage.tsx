import { Helmet } from "react-helmet-async"
import Navbar from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Web Application Development Services | Craviont</title>

        <meta
          name="description"
          content="Craviont provides secure, scalable web application development services including frontend, backend, full-stack development, UI/UX, and security testing."
        />

        <link rel="canonical" href="https://craviont.com/services" />
      </Helmet>

      <h1 className="sr-only">Web Application Development Services</h1>
      <main className="min-h-screen w-full bg-[#E0E0E0] text-[#212121] font-sans selection:bg-[#143109]/20 selection:text-[#143109] overflow-x-hidden">
        <Navbar />
        <div className="pt-12 bg-white">
          <Services />
        </div>
        <Footer />
      </main>
    </>
  );
}
