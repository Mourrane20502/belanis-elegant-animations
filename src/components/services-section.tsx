import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Card, CardContent } from "./ui/card";
import facialImage from "@/assets/facial-service.jpg";
import bodyImage from "@/assets/body-service.jpg";
import wellnessImage from "@/assets/wellness-service.jpg";

const services = [
  {
    title: "Pack Soin Facial",
    image: facialImage,
    description: "Soins du visage personnalisés avec les dernières techniques d'esthétique",
    icon: "✨"
  },
  {
    title: "Pack Corporel",
    image: bodyImage,
    description: "Massages et soins corporels pour une détente complète",
    icon: "💆‍♀️"
  },
  {
    title: "Pack Bien-être",
    image: wellnessImage,
    description: "Thérapies de relaxation et de wellness dans un cadre zen",
    icon: "🧘‍♀️"
  },
  {
    title: "Esthétique",
    image: facialImage,
    description: "Traitements esthétiques avancés pour sublimer votre beauté",
    icon: "💎"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <span className="text-sage text-sm font-medium tracking-wider uppercase">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-sage-dark mt-4 mb-6">
            Ce que nous proposons
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services d'esthétique et de bien-être, 
            conçus pour répondre à tous vos besoins de beauté.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="scale-in"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-charcoal text-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-sage-dark mb-3 group-hover:text-sage transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.button
                      className="text-sage font-medium hover:text-sage-dark transition-colors relative group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Voir Plus
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage group-hover:w-full transition-all duration-300"></span>
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};