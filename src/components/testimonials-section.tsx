import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Un véritable havre de paix ! L'équipe de Belanis est exceptionnelle et les soins sont d'une qualité remarquable.",
    rating: 5,
    service: "Soin Facial"
  },
  {
    name: "Amina K.",
    text: "Je recommande vivement Belanis. L'ambiance est relaxante et les résultats sont visibles dès la première séance.",
    rating: 5,
    service: "Pack Corporel"
  },
  {
    name: "Fatima L.",
    text: "Une expérience inoubliable ! Le professionnalisme et l'attention aux détails font toute la différence.",
    rating: 5,
    service: "Bien-être"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <span className="text-sage text-sm font-medium tracking-wider uppercase">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-sage-dark mt-4 mb-6">
            Ce que disent nos clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les expériences de nos clientes satisfaites qui ont fait confiance à Belanis.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="slide-in-left"
              delay={index * 0.2}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-soft hover:shadow-hover transition-all duration-300 group">
                  <CardContent className="p-8 relative">
                    <motion.div
                      className="absolute top-4 left-4 text-6xl text-gold/20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      "
                    </motion.div>
                    <div className="relative z-10">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            className="text-gold text-xl"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                          >
                            ⭐
                          </motion.span>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed italic">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-sage-dark">
                            {testimonial.name}
                          </h4>
                          <p className="text-sage text-sm">
                            {testimonial.service}
                          </p>
                        </div>
                        <motion.div
                          className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-charcoal font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </motion.div>
                      </div>
                    </div>
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