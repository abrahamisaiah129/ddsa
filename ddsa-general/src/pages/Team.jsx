import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const team = [
  { id: 1, name: "Aisha Bello", role: "Head of Ops", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Chinedu Okeke", role: "CTO", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { id: 3, name: "Fatima Yusuf", role: "Head of Partnerships", img: "https://randomuser.me/api/portraits/women/65.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Our Team</h2>
        <div className="row g-4">
          {/* eslint-disable-next-line no-unused-vars */}
          {team.map((m, i) => (
            <div key={m.id} className="col-md-4">
              <motion.div className="card p-4 text-center shadow-sm h-100" whileHover={{ y: -6 }}>
                <img src={m.img} alt={m.name} className="rounded-circle mx-auto mb-3" style={{ width: 100, height: 100, objectFit: "cover" }} />
                <h5 className="fw-bold">{m.name}</h5>
                <small className="text-muted">{m.role}</small>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
