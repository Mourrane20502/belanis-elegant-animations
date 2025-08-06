import { motion } from "framer-motion";
import { Button } from "./ui/button";
import logo from "@/assets/belanis-logo.png";

export const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-sage-light/20"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-3 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <img 
              src={logo} 
              alt="Belanis" 
              className="h-12 w-12 object-contain"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sage-dark">BELANIS</h1>
            <p className="text-xs text-sage">Centre d'esthétique avancée</p>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {["ACCUEIL", "NOS PACKS", "ESTHÉTIQUE", "NOS OFFRES", "CONTACT"].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-sage-dark hover:text-sage transition-colors font-medium relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button 
            variant="default"
            className="bg-gradient-accent text-charcoal font-semibold hover:shadow-glow transition-all duration-300 animate-pulse-soft"
          >
            RÉSERVATION
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};