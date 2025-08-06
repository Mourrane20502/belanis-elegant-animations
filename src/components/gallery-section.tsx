import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import facialImage from "@/assets/facial-service.jpg";
import bodyImage from "@/assets/body-service.jpg";

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: "Salle de traitement luxueuse",
    title: "Espace Détente"
  },
  {
    id: 2,
    src: gallery2,
    alt: "Réception moderne",
    title: "Accueil Chaleureux"
  },
  {
    id: 3,
    src: facialImage,
    alt: "Soin du visage",
    title: "Soins Visage"
  },
  {
    id: 4,
    src: bodyImage,
    alt: "Massage corporel",
    title: "Soins Corps"
  }
];

export const GallerySection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <span className="text-sage text-sm font-medium tracking-wider uppercase">
            Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-sage-dark mt-4 mb-6">
            Découvrez nos espaces
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plongez dans l'univers raffiné de Belanis à travers notre galerie photo. 
            Chaque espace a été pensé pour votre confort et votre bien-être.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={image.id}
              animation="scale-in"
              delay={index * 0.1}
            >
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  />
                  
                  {/* Overlay avec hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  {/* Content overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="text-center text-background">
                      <motion.h3
                        className="text-xl font-bold mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {image.title}
                      </motion.h3>
                      <motion.div
                        className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-charcoal text-xl">🔍</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-sage-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to action */}
        <AnimatedSection animation="fade-in" delay={0.5} className="text-center mt-12">
          <motion.button
            className="bg-gradient-accent text-charcoal px-8 py-4 rounded-full font-semibold hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Voir toute la galerie</span>
            <motion.div
              className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};