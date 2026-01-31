import { Helmet } from "react-helmet-async";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {

  return (
     <>
      {/* SEO META */}
      <Helmet>
        <title>
          Craviont | Secure & Scalable Web Application Development Company
        </title>

        <meta
          name="description"
          content="Craviont is a software development company building secure, scalable web applications for startups and growing businesses."
        />

        <link rel="canonical" href="https://craviont.com/" />
      </Helmet>

      {/* SEO H1 (important, can be hidden) */}
      <h1 className="sr-only">
        Secure & Scalable Web Application Development Company
      </h1>
      <main className="min-h-screen w-full bg-[#E0E0E0] text-[#212121] font-sans selection:bg-[#143109]/20 selection:text-[#143109] overflow-x-hidden">
        <Navbar />
        <Hero />
        
        <Process />
  
        <Features />
        
        <Testimonials />
  
        <Footer />
  
      </main>
     </>
  );
}
