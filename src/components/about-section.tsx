import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10 bg-card p-8 rounded-2xl shadow-soft">
                <span className="text-sage text-sm font-medium tracking-wider uppercase">
                  À Propos
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-sage-dark mt-4 mb-6">
                  BELANIS Votre Centre d'esthétique avancée
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Bienvenue chez Belanis, votre destination ultime pour la beauté et le bien-être. 
                  Nous sommes fiers de vous offrir des soins d'esthétique avancée de la plus haute qualité, 
                  conçus pour vous faire sentir et paraître votre meilleur.
                </p>
                <motion.div
                  className="bg-gradient-accent p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-bold text-charcoal text-lg mb-2">Offre Spéciale</h3>
                  <p className="text-charcoal/80 mb-4">Offre de bienvenue</p>
                  <motion.button
                    className="bg-sage text-background px-6 py-2 rounded-lg font-medium hover:bg-sage-dark transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contactez Nous
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" delay={0.2}>
            <div className="relative">
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div
                  className="bg-gradient-primary h-48 rounded-2xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="bg-gradient-accent h-32 rounded-2xl mt-8"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="bg-sage/20 h-32 rounded-2xl -mt-4"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="bg-gold/20 h-48 rounded-2xl"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};