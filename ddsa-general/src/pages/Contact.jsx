import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <motion.h2 className="fw-bold text-center mb-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>Contact Us</motion.h2>
        <p className="text-center text-muted mb-4">info@ddsa-live.com • +234 703 5874 823 • Lagos, Nigeria</p>

        <div className="row g-4">
          <div className="col-md-4">
            <motion.div className="p-4 shadow-sm rounded bg-white text-center" whileHover={{ scale: 1.03 }}>
              <Mail size={36} className="mb-2 text-danger" />
              <h6>Email</h6>
              <p className="small mb-0">info@ddsa-live.com</p>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div className="p-4 shadow-sm rounded bg-white text-center" whileHover={{ scale: 1.03 }}>
              <Phone size={36} className="mb-2 text-danger" />
              <h6>Phone</h6>
              <p className="small mb-0">+234 703 5874 823</p>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div className="p-4 shadow-sm rounded bg-white text-center" whileHover={{ scale: 1.03 }}>
              <MapPin size={36} className="mb-2 text-danger" />
              <h6>Office</h6>
              <p className="small mb-0">Lagos, Nigeria</p>
            </motion.div>
          </div>
        </div>

        <motion.div className="mt-5 p-4 shadow-sm rounded bg-white" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}>
          <h5 className="mb-3">Send us a message</h5>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row g-3">
              <div className="col-md-6"><input className="form-control" placeholder="Your name" required /></div>
              <div className="col-md-6"><input className="form-control" type="email" placeholder="Your email" required /></div>
              <div className="col-12"><textarea className="form-control" rows="5" placeholder="Message" required /></div>
            </div>
            <div className="mt-3 text-end"><button className="btn btn-danger">Send Message</button></div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
