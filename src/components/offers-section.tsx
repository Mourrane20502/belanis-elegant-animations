import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

const offers = [
  {
    id: 1,
    title: "Pack Découverte",
    originalPrice: "450 DH",
    discountPrice: "299 DH",
    discount: "34%",
    duration: "2h30",
    services: [
      "Soin du visage complet",
      "Massage relaxant 30min",
      "Gommage corps",
      "Thé de bienvenue"
    ],
    popular: true,
    validUntil: "Jusqu'au 31 Mars"
  },
  {
    id: 2,
    title: "Forfait Bien-être",
    originalPrice: "800 DH",
    discountPrice: "599 DH",
    discount: "25%",
    duration: "4h",
    services: [
      "Soin visage anti-âge",
      "Massage corps complet",
      "Épilation jambes",
      "Manucure classic",
      "Espace détente"
    ],
    popular: false,
    validUntil: "Offre limitée"
  },
  {
    id: 3,
    title: "Package VIP",
    originalPrice: "1200 DH",
    discountPrice: "899 DH",
    discount: "25%",
    duration: "Journée",
    services: [
      "Soin visage premium",
      "Massage pierres chaudes",
      "Épilation complète",
      "Beauté des mains & pieds",
      "Déjeuner inclus"
    ],
    popular: false,
    validUntil: "Nouvelle cliente"
  }
];

export const OffersSection = () => {
  const [hoveredOffer, setHoveredOffer] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-sage-light/20 to-gold-light/20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="mr-2">⚡</span>
            Offres Spéciales - Temps Limité
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-sage-dark mt-4 mb-6">
            Nos offres exceptionnelles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profitez de nos packages exclusifs conçus pour vous offrir 
            une expérience complète à prix réduit.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <AnimatedSection
              key={offer.id}
              animation="scale-in"
              delay={index * 0.1}
            >
              <motion.div
                className="relative h-full"
                onHoverStart={() => setHoveredOffer(offer.id)}
                onHoverEnd={() => setHoveredOffer(null)}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`h-full border-0 shadow-soft hover:shadow-hover transition-all duration-500 relative overflow-hidden ${
                  offer.popular ? 'ring-2 ring-gold' : ''
                }`}>
                  
                  {/* Popular badge */}
                  {offer.popular && (
                    <motion.div
                      className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-bold z-10"
                      initial={{ rotate: -15, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      ⭐ Populaire
                    </motion.div>
                  )}

                  {/* Discount badge */}
                  <motion.div
                    className="absolute top-4 left-4 bg-sage text-background px-3 py-1 rounded-full text-sm font-bold z-10"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    -{offer.discount}
                  </motion.div>

                  {/* Background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300"
                    animate={{ opacity: hoveredOffer === offer.id ? 0.05 : 0 }}
                  />

                  <CardContent className="p-8 relative z-10">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-sage-dark mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-sage text-sm mb-4">{offer.validUntil}</p>
                      
                      {/* Pricing */}
                      <div className="mb-4">
                        <motion.span
                          className="text-3xl font-bold text-sage-dark"
                          animate={{ scale: hoveredOffer === offer.id ? 1.1 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {offer.discountPrice}
                        </motion.span>
                        <span className="text-lg text-muted-foreground line-through ml-2">
                          {offer.originalPrice}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm">
                        Durée : {offer.duration}
                      </p>
                    </div>

                    {/* Services list */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-sage-dark mb-4">Inclus :</h4>
                      <ul className="space-y-3">
                        {offer.services.map((service, i) => (
                          <motion.li
                            key={service}
                            className="flex items-center text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            <motion.span
                              className="text-sage mr-3 text-lg"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              ✓
                            </motion.span>
                            {service}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
                        offer.popular 
                          ? 'bg-gradient-accent text-charcoal' 
                          : 'bg-gradient-primary text-background'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">
                        Réserver maintenant
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        initial={false}
                      />
                      
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-transparent -translate-x-full"
                        animate={{ x: hoveredOffer === offer.id ? '200%' : '-100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>

                    {/* Urgency indicator */}
                    <motion.p
                      className="text-center text-xs text-muted-foreground mt-3"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Places limitées - Réservez vite !
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-in" delay={0.5} className="text-center mt-16">
          <motion.div
            className="bg-card p-8 rounded-2xl shadow-soft max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-sage-dark mb-4">
              Besoin d'un conseil personnalisé ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactez-nous pour créer un package sur mesure adapté à vos besoins
            </p>
            <motion.button
              className="bg-sage text-background px-8 py-3 rounded-lg font-medium hover:bg-sage-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consultation gratuite
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};