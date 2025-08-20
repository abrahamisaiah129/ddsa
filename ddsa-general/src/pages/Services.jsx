// Services.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code2, Palette, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Code2 size={40} />, title: "Web Development", desc: "Modern, scalable, and secure web applications tailored to your business." },
    { icon: <Palette size={40} />, title: "UI/UX Design", desc: "Elegant and intuitive designs that enhance user experience and engagement." },
    { icon: <Smartphone size={40} />, title: "Mobile Apps", desc: "High-performance mobile applications for iOS and Android platforms." },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12"
      >
        Our Services
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 shadow-lg rounded-2xl"
          >
            <div className="mb-4 text-primary">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
