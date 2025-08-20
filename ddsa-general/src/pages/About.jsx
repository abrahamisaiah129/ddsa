// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="lead text-muted mx-auto"
          style={{ maxWidth: "700px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We are a forward-thinking company delivering innovative digital
          solutions. Our mission is to combine creativity, technology, and
          strategy to help businesses thrive in the digital era.
        </motion.p>
        <motion.img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Team working"
          className="img-fluid rounded shadow mt-4"
          style={{ maxHeight: "400px", objectFit: "cover" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        />
      </div>
    </section>
  );
}
