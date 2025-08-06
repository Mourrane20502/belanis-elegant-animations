import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { Card, CardContent } from "./ui/card";
import team1 from "@/assets/team-member-1.jpg";
import team2 from "@/assets/team-member-2.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Samira Bennani",
    role: "Directrice & Esthéticienne Senior",
    image: team2,
    experience: "10+ ans d'expérience",
    specialties: ["Soins anti-âge", "Dermaplaning", "Microneedling"],
    description: "Passionnée par la beauté naturelle, Samira dirige notre équipe avec expertise et bienveillance."
  },
  {
    id: 2,
    name: "Aicha El Mansouri",
    role: "Esthéticienne Experte",
    image: team1,
    experience: "7+ ans d'expérience",
    specialties: ["Massages thérapeutiques", "Soins corporels", "Aromathérapie"],
    description: "Spécialiste en soins holistiques, Aicha vous accompagne vers un bien-être total."
  }
];

export const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <span className="text-sage text-sm font-medium tracking-wider uppercase">
            Notre Équipe
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-sage-dark mt-4 mb-6">
            Des expertes à votre service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rencontrez notre équipe de professionnelles passionnées, 
            formées aux dernières techniques d'esthétique avancée.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={member.id}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={index * 0.2}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-500 group">
                  <div className="relative">
                    <motion.div
                      className="overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social icons */}
                    <motion.div
                      className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      {["📧", "📱", "💬"].map((icon, i) => (
                        <motion.div
                          key={i}
                          className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-gold hover:scale-110 transition-all duration-200 cursor-pointer"
                          whileHover={{ rotate: 360 }}
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <span className="text-sm">{icon}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Experience badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 bg-gold px-3 py-1 rounded-full text-charcoal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {member.experience}
                    </motion.div>
                  </div>

                  <CardContent className="p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-sage-dark mb-2 group-hover:text-sage transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sage font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {member.description}
                      </p>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-sage-dark mb-3">Spécialités :</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, i) => (
                            <motion.span
                              key={specialty}
                              className="px-3 py-1 bg-sage-light/30 text-sage text-sm rounded-full hover:bg-sage-light/50 transition-colors cursor-default"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {specialty}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Contact button */}
                      <motion.button
                        className="w-full bg-gradient-primary text-background py-3 rounded-lg font-medium hover:shadow-soft transition-all duration-300 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">Prendre rendez-vous</span>
                        <motion.div
                          className="absolute inset-0 bg-sage-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          initial={false}
                        />
                      </motion.button>
                    </motion.div>
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