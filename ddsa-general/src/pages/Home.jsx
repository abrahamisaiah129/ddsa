// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";
import imgHero from '../assets/Team work-pana.svg'
import imgSection from '../assets/About us page-pana.svg'
import techImg from "../assets/Digital transformation-pana.svg"
import why from "../assets/Shrug-pana.svg"
import img1 from  "../assets/Team work-pana.svg";
import img2 from  "../assets/Creative team-pana.svg";
import img3 from  "../assets/Partnership-pana.svg";

// hero images
const heroImg = imgHero;
const sectionImg = imgSection;

/** ======= SECTORS (FULL LIST WITH SUB-CATEGORIES) ======= */
const sectors = [
  {
    id: 1,
    name: "Agriculture & Livestock",
    icon: "fas fa-tractor",
    items: ["Crop farming", "Animal husbandry", "Fisheries & aquaculture", "Agro-processing"]
  },
  {
    id: 2,
    name: "Banking & Financial Services",
    icon: "fas fa-university",
    items: ["Commercial banks", "Microfinance banks", "Fintech & mobile money", "Capital markets"]
  },
  {
    id: 3,
    name: "Insurance (Insurtech)",
    icon: "fas fa-shield-alt",
    items: ["Life insurance", "General insurance", "Health insurance", "Micro-insurance"]
  },
  {
    id: 4,
    name: "Pension Industry",
    icon: "fas fa-piggy-bank",
    items: ["Pension Fund Administrators (PFAs)", "Pension Fund Custodians (PFCs)", "Retirement Savings Accounts (RSA)"]
  },
  {
    id: 5,
    name: "Oil & Gas / Energy",
    icon: "fas fa-oil-can",
    items: ["Upstream (exploration & production)", "Midstream (processing, transport)", "Downstream (distribution & marketing)", "Renewable energy & power generation"]
  },
  {
    id: 6,
    name: "Mining & Solid Minerals",
    icon: "fas fa-gem",
    items: ["Gold, coal, limestone, bitumen, iron ore, etc."]
  },
  {
    id: 7,
    name: "Real Estate & Construction",
    icon: "fas fa-building",
    items: ["Property development", "Housing", "Infrastructure construction", "Facility management"]
  },
  {
    id: 8,
    name: "Manufacturing & Industry",
    icon: "fas fa-industry",
    items: ["Cement, steel, and building materials", "Food & beverages", "Textiles, leather, and apparel", "Consumer goods"]
  },
  {
    id: 9,
    name: "Information & Communication Technology (ICT)",
    icon: "fas fa-laptop-code",
    items: ["Telecoms", "Software & app development", "Data services", "Digital platforms"]
  },
  {
    id: 10,
    name: "E-commerce & Retail Trade",
    icon: "fas fa-shopping-cart",
    items: ["Online marketplaces", "Wholesale & retail distribution"]
  },
  {
    id: 11,
    name: "Arts, Culture & Entertainment",
    icon: "fas fa-film",
    items: ["Nollywood (film)", "Music", "Theatre, fashion, cultural tourism"]
  },
  {
    id: 12,
    name: "Hospitality & Tourism",
    icon: "fas fa-hotel",
    items: ["Hotels, restaurants, resorts", "Domestic & international tourism"]
  },
  {
    id: 13,
    name: "Education",
    icon: "fas fa-graduation-cap",
    items: ["Basic, secondary, tertiary", "EdTech (digital learning platforms)", "Vocational & skills training"]
  },
  {
    id: 14,
    name: "Health & Wellness",
    icon: "fas fa-heartbeat",
    items: ["Hospitals, clinics", "Pharmaceuticals & biotech", "Telemedicine", "Health insurance"]
  },
  {
    id: 15,
    name: "Transportation & Logistics",
    icon: "fas fa-truck",
    items: ["Road, rail, air, maritime", "Delivery services", "Supply chain & warehousing"]
  },
  {
    id: 16,
    name: "Public Sector & Government Services",
    icon: "fas fa-landmark",
    items: ["Civil service", "Security & defense", "Public administration"]
  },
  {
    id: 17,
    name: "Non-Governmental Organizations (NGOs) & Social Impact",
    icon: "fas fa-handshake-angle",
    items: ["Humanitarian services", "Development projects", "Non-profits & donor agencies"]
  },
  {
    id: 18,
    name: "Verification & Compliance Services",
    icon: "fas fa-id-card",
    items: ["KYC (BVN/NIN)", "Utility/address verification", "Employment/asset verification", "Corporate records (CAC)"]
  },
  {
    id: 19,
    name: "Sports & Youth Development",
    icon: "fas fa-futbol",
    items: ["Football, athletics", "Sports academies & events"]
  },
  {
    id: 20,
    name: "Environmental & Waste Management",
    icon: "fas fa-recycle",
    items: ["Recycling", "Sanitation services", "Renewable energy"]
  },
];

export default function Home() {
  const [openSector, setOpenSector] = useState(null);

  const toggleSector = (id) => {
    setOpenSector(openSector === id ? null : id);
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <motion.h1 
                className="display-5 fw-bold text-danger"
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.6 }}
              >
                Direct Digital Sales Agent
              </motion.h1>
              <motion.h2 
                className="h3 fw-bold border-start border-danger mt-2 lead text-dark mt-2 border-start border-4 ps-3"
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                All-Sector Agent Network System
              </motion.h2>

              <motion.div 
                className="d-flex gap-2 mt-3"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
              >
                <a href="*" className="btn btn-danger btn-lg">
                  Become an Agent <ArrowRight size={18} className="ms-1" />
                </a>
                <a href="*" className="btn btn-outline-danger btn-lg">
                  Partner with Us
                </a>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div 
                initial={{ x: 40, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.6 }}
                className="rounded-4 overflow-hidden shadow-lg"
              >
                <img 
                  src={heroImg} 
                  alt="Agents" 
                  className="w-100 h-100 object-fit-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="aboutus" className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img src={sectionImg} alt="About DDSA" className="rounded-4 w-100 shadow-sm" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">About DDSA</h2>
              <p className="text-muted">
                DDSA (Direct Digital Sales Agent), developed by <b>D-Degree Digital Hub</b>, is Africa’s first
                multi-sector digital agent system. We combine:
              </p>
              <ul className="list-unstyled lh-lg">
                <li>• Technology – Omni URL, dashboards, WhatsApp.</li>
                <li>• Nationwide Agent Network – verified, trained, incentivized.</li>
                <li>• Gamification & Rewards – productivity and accountability.</li>
              </ul>
              <p className="mb-0">Trusted by governments, banks, insurers, MFIs and enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Why Agents, Partners & Governments Love DDSA</h2>
          <div className="row g-4">
            {[
              { icon: <Users />, title: "Agents Earn Sustainably", text: "Multi-sector income streams with gamified rewards." ,image:img1},
              { icon: <Rocket />, title: "Partners Scale Faster", text: "Nationwide outreach, verified onboarding & acquisitions.",image:img2},
              { icon: <ShieldCheck />, title: "Governments Deepen Inclusion", text: "Citizen engagement & benefits distribution at scale." ,image:img3},
            ].map((c, i) => (
              <div key={i} className="col-md-4">
                <motion.div
                  className="card h-100 border-0 shadow-sm rounded-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.05 * i }}
                > 
                  <img src={c.image} className="card-img-top rounded-top-4" alt={c.title} />
                  <div className="card-body">
                    <div className="text-danger mb-2">{c.icon}</div>
                    <h5 className="card-title">{c.title}</h5>
                    <p className="card-text text-muted">{c.text}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS (COLLAPSIBLE) */}
      <section id="sectors" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold text-danger">Our Sectors</h2>

          <div className="row g-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div 
                  className="card h-100 shadow-sm border-0 rounded-3 p-4"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleSector(sector.id)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <i className={`${sector.icon} fa-2x text-danger`} />
                      <h5 className="fw-bold mb-0 text-danger">{sector.name}</h5>
                    </div>
                    <motion.div
                      animate={{ rotate: openSector === sector.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-danger" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openSector === sector.id && (
                      <motion.ul
                        className="list-unstyled small text-muted mt-3 mb-0"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {sector.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Technology & Innovation</h2>
              <ul className="text-muted lh-lg">
                <li>Omni URL for all sectors.</li>
                <li>CICO enablement for deposits/withdrawals.</li>
                <li>Geo-tagged verifications.</li>
                <li>Gamified agent dashboard.</li>
                <li>Omni-channel access (Web, Mobile, WhatsApp).</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                className="rounded-4 w-100 shadow-sm"
                src={techImg}
                alt="Technology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY DDSA */}
      <section id="whyddsa" className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img
                className="rounded-4 w-100 shadow-sm"
                src={why}
                alt="Why DDSA"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Why DDSA?</h2>
              <ul className="text-muted lh-lg">
                <li>Multi-sector revenue model.</li>
                <li>Nationwide footprint — urban + rural.</li>
                <li>Government-backed partnerships.</li>
                <li>Scalable, secure technology.</li>
                <li>Current valuation: <b>$2M</b> (high-growth trajectory).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-3">Contact Us</h2>
          <p className="text-center text-muted mb-4">
            🌐 www.ddsa-live.com &nbsp;•&nbsp; 📧 info@ddsa-live.com &nbsp;•&nbsp; 📍 Lagos, Nigeria
          </p>
          <div className="d-flex justify-content-center gap-2">
            <a href="*" className="btn btn-outline-danger">Partner with DDSA</a>
            <a href="*" className="btn btn-danger">Become an Agent</a>
          </div>
        </div>
      </section>
    </>
  );
}
