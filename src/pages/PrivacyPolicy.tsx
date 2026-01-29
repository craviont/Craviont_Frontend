import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen w-full bg-white text-[#212121] font-sans selection:bg-[#143109]/20 selection:text-[#143109]">
      <Navbar />
      <section className="pt-40 pb-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 text-[#121212] tracking-tighter">Privacy Policy</h1>
            <p className="text-gray-500 mb-12 italic">Last Updated: January 2026</p>
            
            <div className="prose prose-slate max-w-none space-y-8 text-lg text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-[#121212] mb-4">1. Introduction</h2>
                <p>At Craviont, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#121212] mb-4">2. Information We Collect</h2>
                <p>We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, or telephone number.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#121212] mb-4">3. How We Use Your Information</h2>
                <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To present our Website and its contents to you.</li>
                  <li>To provide you with information, products, or services that you request from us.</li>
                  <li>To fulfill any other purpose for which you provide it.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#121212] mb-4">4. Data Security</h2>
                <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
