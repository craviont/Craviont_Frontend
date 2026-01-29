import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen w-full bg-white text-[#212121] font-sans selection:bg-[#143109]/20 selection:text-[#143109]">
      <Navbar />
      <section className="pt-40 pb-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 text-[#121212] tracking-tighter">Terms & Conditions</h1>
            <p className="text-gray-500 mb-12 italic">Last Updated: January 2026</p>
            
            <div className="prose prose-slate max-w-none space-y-8 text-lg text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-[#121212] mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#121212] mb-4">2. Intellectual Property</h2>
                <p>The Site and its original content, features, and functionality are owned by Craviont and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#121212] mb-4">3. User Conduct</h2>
                <p>You agree to use the Site only for lawful purposes. You are prohibited from posting on or transmitting through the Site any material that is harmful, threatening, abusive, harassing, defamatory, vulgar, or otherwise objectionable.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#121212] mb-4">4. Limitation of Liability</h2>
                <p>Craviont shall not be liable for any damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Craviont has been advised of the possibility of such damages.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
