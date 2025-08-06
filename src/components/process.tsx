import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarCheck, FaSpa, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaPhoneAlt size={28} />,
    title: "1. Choisissez un service",
    desc: "Explorez nos soins esthétiques et choisissez celui qui vous convient le mieux.",
  },
  {
    icon: <FaCalendarCheck size={28} />,
    title: "2. Réservez facilement",
    desc: "Réservez en ligne ou par téléphone à votre convenance.",
  },
  {
    icon: <FaSpa size={28} />,
    title: "3. Recevez votre soin",
    desc: "Détendez-vous dans notre centre avec des soins de qualité professionnelle.",
  },
  {
    icon: <FaSmile size={28} />,
    title: "4. Ressentez la différence",
    desc: "Repartez rafraîchi(e), confiant(e) et rayonnant(e).",
  },
];

export const ProcessSection = () => {
  return (
    <section className=" py-16 px-6" id="process">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-sage-dark mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Comment ça fonctionne ?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-gold">{step.icon}</div>
              <h3 className="font-semibold text-sage-dark">{step.title}</h3>
              <p className="text-sm text-sage">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
