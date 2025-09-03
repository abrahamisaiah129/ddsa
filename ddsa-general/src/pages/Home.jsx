import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Cpu, Users, Award, Quote , Building } from "lucide-react";
import CountUp from "react-countup";

import heroImg from "../assets/Office work-amico.svg";
import aboutImg from "../assets/Group-pana.svg";
import benefitsImg from "../assets/Team work-amico.svg";
import contactImg from "../assets/Contact us-amico.svg";
import sectorsImg from "../assets/Project-Stages-01.svg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
// Add these variants at the top, below fadeInRight
const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [hoveredFooter, setHoveredFooter] = useState(null);

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
  const testimonials = [
    {
      name: "Chinedu Okafor",
      role: "Software Engineer",
      text: "This platform transformed how I collaborate with my team. The intuitive design and performance are unmatched.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Amaka Johnson",
      role: "Project Manager",
      text: "Managing projects has become so seamless! I love the clean UI and the efficiency it brings.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Ibrahim Musa",
      role: "Business Analyst",
      text: "Finally a tool that actually adapts to the way we work. Simple, powerful, and very effective.",
      img: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  const illustrationStyle = "img-fluid mx-auto d-block";
  const illustrationSize = { maxWidth: "280px", height: "auto" };

  return (
    <div className="w-100 overflow-hidden">
      {/* HERO */}
      <section id="home" className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* TEXT */}
            <div className="col-lg-6 text-center text-lg-start">
              <motion.h1
                className="display-5 fw-bold text-danger"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Direct Digital Sales Agent
              </motion.h1>

              <motion.h2
                className="h4 fw-bold border-start border-4 border-danger ps-3 mt-3 text-dark"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                All-Sector Agent Network System
              </motion.h2>

              <motion.p
                className="mt-3 text-muted"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Empowering People. Driving Growth. Creating Jobs. <br />
              </motion.p>

              <motion.div
                className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start"
                variants={fadeInUp}
              >
                <motion.a
                  href="#contact"
                  onHoverStart={() => setHovered("demo")}
                  onHoverEnd={() => setHovered(null)}
                  className={`btn ${
                    hovered === "partner" ? "btn-outline-danger" : "btn-danger"
                  } ${
                    hovered === "partner" ? "text-danger" : "text-white"
                  } fw-semibold`}
                  whileHover={{ scale: 1.05 }}
                >
                  Book a Demo
                </motion.a>
                <motion.a
                  href="#contact"
                  onHoverStart={() => setHovered("partner")}
                  onHoverEnd={() => setHovered(null)}
                  className={`btn ${
                    hovered === "demo" ? "btn-outline-danger" : "btn-danger"
                  } ${
                    hovered === "demo" ? "text-danger" : "text-white"
                  } fw-semibold`}
                  whileHover={{ scale: 1.05 }}
                >
                  Onboard as a Partner
                </motion.a>
              </motion.div>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6 text-center">
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded-4 overflow-hidden shadow-lg mx-auto"
                style={{ maxWidth: "500px" }}
              >
                <img
                  src={heroImg}
                  alt="DDSA Agents"
                  className="w-100 h-auto img-fluid"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="py-5">
        <div className="container">
          <div
            className="bg-danger rounded-pill my-5 mx-auto"
            style={{ height: "4px", maxWidth: "100px" }}
          ></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-5 bg-white b">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* IMAGE */}
            <motion.div
              className="col-md-6 text-center"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.img
                src={aboutImg}
                alt="About DDSA"
                className={illustrationStyle}
                style={illustrationSize}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              className="col-md-6 text-center text-md-start"
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-3">About Us</h2>
              <p>
                DDSA (Direct Digital Sales Agent), developed by D-Degree Digital
                Hub, is Africa’s first multi-sector digital agent system.
              </p>

              <div className="row mt-4 g-3">
                {[
                  {
                    icon: <Cpu size={36} className="text-danger mb-2" />,
                    title: "Technology",
                    desc: "Omni URL, dashboards, WhatsApp integration",
                  },
                  {
                    icon: <Users size={36} className="text-danger mb-2" />,
                    title: "Nationwide Agent Network",
                    desc: "Trained & incentivized agents across the country",
                  },
                  {
                    icon: <Award size={36} className="text-danger mb-2" />,
                    title: "Gamification & Rewards",
                    desc: "Accountability & productivity through rewards",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className="col-12 col-md-4"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="card h-100 shadow-sm border-0 text-center p-3">
                      {card.icon}
                      <h5 className="fw-bold">{card.title}</h5>
                      <p className="text-muted small">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section className="py-5 bg-white b" id="achievements">
        <div className="container text-center">
          <h2 className="fw-bold text-danger mb-5">Our Achievements</h2>
          <div className="row g-4">
            <div className="col-md-3 col-6">
              <Award size={40} className="text-danger mb-2" />
              <p className="fw-semibold">
                {" "}
                <div className="d-flex justify-content-center align-items-center fs-5">
                  <div className="text-pulse">
                    {" "}
                    <CountUp end={20} duration={5} separator="," />
                  </div>
                  + Awards
                </div>
              </p>
            </div>
            <div className="col-md-3 col-6">
              <Building size={40} className="text-danger mb-2" />
              <p className="fw-semibold">
                <div className="d-flex justify-content-center align-items-center fs-5">
                  {" "}
                  <div className="text-pulse">
                    <CountUp end={50} duration={5} separator="," />
                  </div>
                  + Clients
                </div>
              </p>
            </div>
            <div className="col-md-3 col-6">
              <Users size={40} className="text-danger mb-2" />
              <p className="fw-semibold">
                <div className="d-flex justify-content-center align-items-center fs-5">
                  {" "}
                  <div className="text-pulse">
                    <CountUp end={100} duration={5} separator="," />
                  </div>
                  + Projects
                </div>
              </p>
            </div>
            <div className="col-md-3 col-6">
              <Cpu size={40} className="text-danger mb-2" />
              <p className="fw-semibold fs-5">Innovative Solutions</p>
            </div>
          </div>
        </div>
      </section>
      {/* VISUAL BREAK */}
      <section className="py-5">
        <div className="container">
          <div
            className="bg-danger rounded-pill my-5 mx-auto"
            style={{ height: "4px", maxWidth: "100px" }}
          ></div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="py-5 bg-white b">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse g-5">
            {/* IMAGE */}
            <motion.div
              className="col-md-6 text-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.img
                src={sectorsImg}
                alt="Sectors"
                className={illustrationStyle}
                style={illustrationSize}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              className="col-md-6 text-center text-md-start"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="fw-bold  mb-4">Sectors We Support</h2>
              <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                {(expanded
                  ? sectorsList
                  : sectorsList.slice(0, visibleCount)
                ).map((sector, i) => (
                  <motion.li
                    key={i}
                    className="badge rounded-pill p-2 px-3 fw-bolder fs-6 bg-danger text-white"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {sector}
                  </motion.li>
                ))}
              </ul>
              {sectorsList.length > visibleCount && (
                <motion.button
                  className="btn btn-outline-danger btn-sm mt-3"
                  onClick={() => setExpanded(!expanded)}
                  whileHover={{ scale: 1.05 }}
                >
                  {expanded ? "Show less" : "Show more"}
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="py-5 bg-white b">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* IMAGE */}
            <motion.div
              className="col-md-6 text-center"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.img
                src={benefitsImg}
                alt="DDSA Benefits"
                className={illustrationStyle}
                style={illustrationSize}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              className="col-md-6 text-center text-md-start"
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="fw-bold text-danger mb-3">Why DDSA?</h2>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                {[
                  "Omni URL & CICO enablement",
                  "Geo-tagged verifications",
                  "Real-time analytics",
                  "Gamified dashboards",
                  "Govt-backed trust",
                  "Secure, scalable model",
                ].map((tech, i) => (
                  <motion.span
                    key={i}
                    className="card border-danger border-1 shadow-sm fw-semibold rounded-4 p-3 px-4 bg-white b text-danger"
                    whileHover={{ scale: 1.05 }}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* VISUAL BREAK */}
      <section className="py-5">
        <div className="container">
          <div
            className="bg-danger rounded-pill my-5 mx-auto"
            style={{ height: "4px", maxWidth: "100px" }}
          ></div>
        </div>
      </section>

      {/* our partners */}

      {/* PARTNERSHIPS & SERVICES */}
      <section className="bg-white py-5" id="services">
        <div className="container">
          <motion.h2
            className="text-center fw-bold text-danger mb-5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Partnerships & Services
          </motion.h2>
          <div className="row g-4">
            {/* Client Partners */}
            <div className="col-md-6 col-lg-3">
              <motion.div
                className="card  rounded-3 border-top border-1 border-danger h-100"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="card-body">
                  <h5 className="card-title text-danger">
                    <i className="fas fa-handshake me-2"></i> Client Partners
                  </h5>
                  <motion.ul
                    className="list-unstyled mt-3"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Expand financial inclusion with agent-driven account opening, loan acquisition, registration (BVN, CAC, etc.), and CICO.",
                      "Reach millions through policy sales and claims support powered by DDSA Insuretech.",
                      "Drive contributions and new member enrollments at grassroots level.",
                      "National identity schemes, subsidy delivery, and social impact projects.",
                      "Nationwide verifications, onboarding, and customer acquisitions.",
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        className="mb-2 small"
                        variants={itemVariants}
                      >
                        {text}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <p className="mt-3 small text-danger">
                    ✅ API integration & onboarding support.
                    <br />✅ A dedicated Partner Dashboard to monitor
                    performance.
                    <br />✅ Transparent revenue sharing.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Governments */}
            <div className="col-md-6 col-lg-3">
              <motion.div
                className="card  rounded-3 border-top border-1 border-danger h-100"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="card-body">
                  <h5 className="card-title text-danger">
                    <i className="fas fa-landmark me-2"></i> Governments
                  </h5>
                  <motion.ul
                    className="list-unstyled mt-3"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Mass job creation programs through our agent network.",
                      "Direct citizen engagement in rural & urban communities.",
                      "National scale distribution of financial inclusion, social benefits, and insurance.",
                      "Data analytics & reporting to track impact in real-time.",
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        className="mb-2 small"
                        variants={itemVariants}
                      >
                        {text}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </div>

            {/* Citizens */}
            <div className="col-md-6 col-lg-3">
              <motion.div
                className="card  rounded-3 border-top border-1 border-danger h-100"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="card-body">
                  <h5 className="card-title text-danger">
                    <i className="fas fa-users me-2"></i> Citizens
                  </h5>
                  <motion.ul
                    className="list-unstyled mt-3"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Open a bank account.",
                      "Get insured.",
                      "Access loans.",
                      "Register for pensions.",
                      "Verify property.",
                      "Link to markets.",
                      "Enjoy reliable local services, etc.",
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        className="mb-2 small"
                        variants={itemVariants}
                      >
                        {text}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <p className="mt-3 small text-danger">
                    All from your neighborhood agent, via mobile, Omni URL, or
                    WhatsApp.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Our Partnerships */}
            <div className="col-md-6 col-lg-3">
              <motion.div
                className="card  rounded-3 border-top border-1 border-danger h-100"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="card-body">
                  <h5 className="card-title text-danger">
                    <i className="fas fa-building me-2"></i> Our Partnerships
                  </h5>
                  <motion.ul
                    className="list-unstyled mt-3"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Federal Government of Nigeria – through NDE (National Directorate of Employment).",
                      "Banks: Ecobank, Wema, Optimus, SunTrust, Premium Trust, FCMB, etc.",
                      "Insurance: Consolidated Hallmark Insurance (CHI), etc.",
                      "Other strategic partners across agriculture, pensions, e-commerce, hospitals, social development, etc.",
                    ].map((text, i) => (
                      <motion.li
                        key={i}
                        className="mb-2 small"
                        variants={itemVariants}
                      >
                        {text}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5 bg-white text-danger">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* TEXT */}
            <motion.div
              className="col-md-6 text-center text-md-start"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-3">Ready to Make an Impact?</h2>
              <p>
                Join DDSA as an Agent today and start transforming lives while
                building your future.
              </p>
              <motion.a
                href="mailto:info@ddsa-live.com"
                className={`btn ${
                  hoveredFooter === "partnerFooter"
                    ? "btn-danger"
                    : "btn-outline-danger"
                } fw-semibold`}
                onHoverStart={() => setHoveredFooter("partnerFooter")}
                onHoverEnd={() => setHoveredFooter(null)}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px rgba(220, 53, 69, 0.6)",
                }}
              >
                Contact Us
              </motion.a>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="col-md-6 text-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.img
                src={contactImg}
                alt="Contact"
                className={illustrationStyle}
                style={illustrationSize}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT PEOPLE SAY */}
      <section className="py-5 bg-white " id="testimonials">
        <div className="container text-center">
          <h2 className="fw-bold  mb-4">What People Say</h2>
          <div className="row g-4">
            {testimonials.map((t, index) => (
              <div className="col-md-4" key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="card border-2 border-danger-subtle shadow-sm h-100 p-3"
                >
                  <Quote size={32} className="text-danger mb-3" />
                  <p className="text-muted">"{t.text}"</p>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="text-start">
                      <h6 className="mb-0 fw-bold">{t.name}</h6>
                      <small className="text-secondary">{t.role}</small>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
