import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroImage from "@/assets/spa-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            L'endroit idéal pour se détendre
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-background mb-6"
        >
          Institut de{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Beauté
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto"
        >
          Révélez votre beauté naturelle chez Belanis
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg"
            className="bg-gradient-accent text-charcoal font-semibold hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg"
          >
            Contactez Nous
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-background text-black hover:bg-background hover:text-sage-dark transition-all duration-300 px-8 py-4 text-lg"
          >
            Découvrir nos services
          </Button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-gold/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-sage/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};