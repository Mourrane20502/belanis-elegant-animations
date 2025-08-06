import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quels sont vos horaires d’ouverture ?",
    answer: "Nous sommes ouverts du lundi au samedi, de 9h00 à 19h00.",
  },
  {
    question: "Comment puis-je réserver un soin ?",
    answer: "Vous pouvez réserver en ligne via notre site ou nous appeler directement.",
  },
  {
    question: "Quels soins recommandez-vous pour les peaux sensibles ?",
    answer: "Nous proposons une gamme de soins adaptés aux peaux sensibles, avec des produits hypoallergéniques.",
  },
  {
    question: "Offrez-vous des réductions pour les nouveaux clients ?",
    answer: "Oui, une réduction de bienvenue est offerte lors de votre première réservation.",
  },
];

export const FaqSection = () => {
  return (
    <section className=" py-16 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-sage-dark mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Questions fréquentes
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-sage-light rounded-md p-4 shadow-sm bg-sage/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="font-semibold text-sage-dark">{faq.question}</h3>
              <p className="text-sm text-sage mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
