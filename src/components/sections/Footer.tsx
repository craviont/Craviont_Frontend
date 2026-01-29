import { Linkedin, Github, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Link } from "wouter";
import xLogo from "@/assets/x-logo-latest/logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-[#050B15] pt-20 pb-10 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/">
               <a className="block mb-6 cursor-pointer">
                 <Logo className="h-10 w-auto" theme="dark" />
               </a>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Empowering businesses with cutting-edge technology solutions. Design. Develop. Deliver.
            </p>
            <div className="flex gap-5">
              <a
                href="https://x.com/cravionttech"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                aria-label="CraviontTech on X"
                data-testid="link-social-x"
              >
                <img
                  src={xLogo}
                  alt="X"
                  className="w-[18px] h-[18px] object-contain"
                  data-testid="img-social-x"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/craviont/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Craviont on LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/craviont"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Craviont on GitHub"
                data-testid="link-social-github"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "UI / UX & Frontend Engineering",
                "Backend & API Development",
                "Full-Stack Development",
                "Security & Quality Assurance"
              ].map((item) => (
                <li key={item}>
                  <Link href="/services">
                    <a className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a href="mailto:cravionttech@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-3">
                <Mail size={16} className="shrink-0" />
                cravionttech@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CraviontTech. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy">
              <a className="text-xs text-gray-500 hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            </Link>
            <Link href="/terms-conditions">
              <a className="text-xs text-gray-500 hover:text-white transition-colors cursor-pointer">Terms of Service</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
