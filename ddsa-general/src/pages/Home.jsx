import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, Users, Building } from "lucide-react";

import heroImg from "../assets/Office work-amico.svg";
import aboutImg from "../assets/Business deal-amico.svg";
import benefitsImg from "../assets/Team work-amico.svg";
import contactImg from "../assets/Contact us-amico.svg";
import sectorsImg from "../assets/Project-Stages-01.svg";
import PartnerImg from "../assets/Partnership-pana.svg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 6;

  const sectorsList = [
    "Banking & Microfinance",
    "Insurance (InsureTech)",
    "Pensions",
    "Agriculture & Livestock",
    "Arts & Culture",
    "E-commerce",
    "Hospitality & Tourism",
    "Education",
    "Health & Wellness",
    "NGOs & Social Impact",
    "Logistics",
    "Real Estate",
    "Verifications",
  ];

  return (
    <div className="w-100 overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="bg-danger text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              className="col-md-6 mb-4"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <h1 className="display-3 fw-bold">DDSA</h1>
              <h1 className="display-5 fw-bold">
                Direct Digital Sales Agent 🌍
              </h1>
              <p className="lead">
                Empowering People. Driving Growth. Creating Jobs.
                <br />
                Africa’s First All-Sector Agent Network System:
                <br />
                <strong>All Sectors. Many Agents. One Dashboard.</strong>
              </p>
              <button className="btn btn-light text-danger fw-semibold shadow rounded-pill mx-3 hover-red">
                Become an Agent
              </button>
              <button className="btn btn-danger text-light fw-semibold shadow rounded-pill mx-3 hover-white">
                Partner with Us
              </button>
            </motion.div>

            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={heroImg} alt="Agents Hero" className="img-fluid" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <img src={aboutImg} alt="About DDSA" className="img-fluid" />
            </motion.div>
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <h2 className="fw-bold mb-3">About Us</h2>
              <p>
                DDSA (Direct Digital Sales Agent), developed by D-Degree Digital
                Hub, is Africa’s first multi-sector digital agent system.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <span className="badge rounded-pill bg-danger-subtle text-danger fw-semibold">
                  Technology – Omni URL, dashboards, WhatsApp integration
                </span>
                <span className="badge rounded-pill bg-danger-subtle text-danger fw-semibold">
                  Nationwide Agent Network – trained & incentivized
                </span>
                <span className="badge rounded-pill bg-danger-subtle text-danger fw-semibold">
                  Gamification & Rewards – accountability & productivity
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <motion.h2
                className="fw-bold text-danger mb-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
              >
                Sectors We Support
              </motion.h2>

              <ul className="list-unstyled">
                {(expanded
                  ? sectorsList
                  : sectorsList.slice(0, visibleCount)
                ).map((sector, i) => (
                  <motion.li
                    key={i}
                    className="mb-2 badge rounded-pill p-2 px-3 fw-bolder fs-6 bg-danger text-white mx-2"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    transition={{ delay: i * 0.05 }}
                  >
                    {sector}
                  </motion.li>
                ))}
              </ul>

              {sectorsList.length > visibleCount && (
                <button
                  className="btn btn-outline-danger btn-sm mt-2"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Show less" : "Show more"}
                </button>
              )}
            </div>

            <div className="col-md-6 text-center mb-4 mb-md-0">
              <motion.img
                src={sectorsImg}
                alt="Sectors"
                className="img-fluid"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section id="stakeholders" className="py-5 bg-light">
        <div className="container">
          <div className="row text-center g-4">
            {[
              {
                icon: <Briefcase size={36} className="text-danger mb-3" />,
                title: "For Client Partners",
                desc: "Expand inclusion, onboard millions, API integration & dashboards.",
              },
              {
                icon: <Building size={36} className="text-danger mb-3" />,
                title: "For Governments",
                desc: "Mass jobs, citizen engagement, social benefits & inclusion.",
              },
              {
                icon: <Users size={36} className="text-danger mb-3" />,
                title: "For Citizens",
                desc: "Banking, insurance, loans, pensions, verifications at your doorstep.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-md-4"
                initial="hidden"
                whileInView="show"
                variants={fadeInUp}
              >
                <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                  <div>{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted small mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Illustration (left side) */}
            <motion.div
              className="col-md-6 text-center"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <img
                src={PartnerImg}
                alt="Partnership Illustration"
                className="img-fluid"
              />
            </motion.div>

            {/* Partner badges (right side) */}
            <motion.div
              className="col-md-6 text-center text-md-start"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <h2 className="fw-bold mb-4 text-danger">Our Partnerships</h2>
              <p className="mb-4 text-muted">
                We collaborate with trusted partners across sectors to drive
                innovation, create jobs, and expand financial inclusion in
                Africa.
              </p>
              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                {[
                  "Federal Government (NDE)",
                  "Ecobank",
                  "Wema",
                  "SunTrust",
                  "Premium Trust",
                  "FCMB",
                  "CHI Insurance",
                  "More…",
                ].map((partner, i) => (
                  <span
                    key={i}
                    className="badge rounded-pill bg-danger-subtle text-danger fw-semibold px-3 py-2"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <img
                src={benefitsImg}
                alt="DDSA Benefits"
                className="img-fluid"
              />
            </motion.div>
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <h2 className="fw-bold mb-3">
                Technology & Innovation – Why DDSA?
              </h2>
              <div className="d-flex flex-wrap gap-2">
                {[
                  "Omni URL & CICO enablement",
                  "Geo-tagged verifications",
                  "Real-time analytics",
                  "Gamified dashboards",
                  "Govt-backed trust",
                  "Secure, scalable model",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="badge rounded-pill bg-danger-subtle text-danger fw-semibold px-3 py-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-danger text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <h2 className="fw-bold mb-3">Ready to Make an Impact?</h2>
              <p>
                Join DDSA as an Agent today and start transforming lives while
                building your future.
              </p>
              <a
                href="mailto:info@ddsa-live.com"
                className="btn btn-light text-danger fw-semibold rounded-pill"
              >
                Contact Us
              </a>
            </motion.div>
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="show"
              variants={fadeInUp}
            >
              <img src={contactImg} alt="Contact" className="img-fluid" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
