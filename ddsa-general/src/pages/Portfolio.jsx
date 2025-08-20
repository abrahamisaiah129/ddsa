import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Corporate Website", img: "https://source.unsplash.com/random/900x600?corporate" },
  { id: 2, title: "E-Commerce Platform", img: "https://source.unsplash.com/random/900x600?ecommerce" },
  { id: 3, title: "Agent Dashboard", img: "https://source.unsplash.com/random/900x600?dashboard" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Portfolio</h2>
        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.id} className="col-md-4">
              <motion.div className="card shadow-sm border-0 overflow-hidden" whileHover={{ scale: 1.03 }}>
                <img src={p.img} alt={p.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="fw-bold">{p.title}</h5>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
