import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { GallerySection } from "@/components/gallery-section";
import { TeamSection } from "@/components/team-section";
import { OffersSection } from "@/components/offers-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ProcessSection } from "@/components/process";
import { FaqSection } from "@/components/faqsection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <ProcessSection />
      <OffersSection />
      <FaqSection />
      <TestimonialsSection />
      <ContactSection />
       <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-sage-dark text-white pt-12 pb-6 border-t border-gold/20"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-gold">BELANIS</h2>
          <p className="mt-2 text-sm text-sage-light">
            Centre d’esthétique avancée à la pointe de l’innovation et du bien-être.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" target="_blank" className="hover:text-gold transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" target="_blank" className="hover:text-gold transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" target="_blank" className="hover:text-gold transition-colors">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gold">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gold transition-colors">Accueil</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Nos Packs</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Services Esthétiques</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Offres Spéciales</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gold">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt size={14} />
              <span>+212 6 00 00 00 00</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope size={14} />
              <span>contact@belanis.ma</span>
            </li>
            <li>
              123 Avenue Beauté, Casablanca, Maroc
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gold/10 pt-4 text-center text-xs text-sage-light">
        &copy; {new Date().getFullYear()} BELANIS. Tous droits réservés.
      </div>
    </motion.footer>
    </div>
  );
};

export default Index;
