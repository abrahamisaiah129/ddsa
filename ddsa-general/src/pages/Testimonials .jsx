import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Jane Doe", role: "CEO, TechCorp", img: "https://randomuser.me/api/portraits/women/44.jpg", quote: "They transformed our digital presence." },
  { id: 2, name: "Michael Smith", role: "Founder, StartupX", img: "https://randomuser.me/api/portraits/men/46.jpg", quote: "The best development team I’ve worked with." },
  { id: 3, name: "Sophia Lee", role: "Manager, FinGroup", img: "https://randomuser.me/api/portraits/women/65.jpg", quote: "Creative, efficient, and highly skilled." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">What Our Clients Say</h2>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={t.id} className="col-md-4">
              <motion.div className="card p-4 h-100 shadow-sm border-0 text-center" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.12 }}>
                <img src={t.img} alt={t.name} className="rounded-circle mx-auto mb-3" style={{ width: 80, height: 80, objectFit: "cover" }} />
                <h5 className="fw-bold">{t.name}</h5>
                <small className="text-muted">{t.role}</small>
                <p className="fst-italic mt-3">“{t.quote}”</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
