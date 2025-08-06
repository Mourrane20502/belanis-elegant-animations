import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="text-background">
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Réservez votre moment de détente
              </h2>
              <p className="text-background/90 mb-8 leading-relaxed">
                Contactez-nous dès aujourd'hui pour prendre rendez-vous et découvrir 
                l'expérience Belanis. Notre équipe d'experts vous attend pour vous offrir 
                des soins personnalisés dans un cadre exceptionnel.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-charcoal text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-background/80">belanibeauteesthetiqueavance@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-charcoal text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Téléphone</h4>
                    <p className="text-background/80">(+212) 649 961 000</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-charcoal text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Adresse</h4>
                    <p className="text-background/80">Casablanca, Maroc</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" delay={0.2}>
            <Card className="border-0 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-sage-dark mb-6">
                  Prenez rendez-vous
                </h3>
                <div className="space-y-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full p-4 border border-sage-light rounded-lg focus:border-sage focus:outline-none transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full p-4 border border-sage-light rounded-lg focus:border-sage focus:outline-none transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="tel"
                      placeholder="Votre téléphone"
                      className="w-full p-4 border border-sage-light rounded-lg focus:border-sage focus:outline-none transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <select className="w-full p-4 border border-sage-light rounded-lg focus:border-sage focus:outline-none transition-colors">
                      <option>Choisir un service</option>
                      <option>Pack Soin Facial</option>
                      <option>Pack Corporel</option>
                      <option>Pack Bien-être</option>
                      <option>Esthétique</option>
                    </select>
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      placeholder="Message (optionnel)"
                      rows={4}
                      className="w-full p-4 border border-sage-light rounded-lg focus:border-sage focus:outline-none transition-colors resize-none"
                    />
                  </motion.div>
                  <Button 
                    className="w-full bg-gradient-accent text-charcoal font-semibold hover:shadow-glow transition-all duration-300 p-4 text-lg animate-pulse-soft"
                  >
                    Envoyer la demande
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};