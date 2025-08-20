// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Rocket, Cpu, Globe, Banknote } from "lucide-react";
import imgHero from '../assets/Team work-pana.svg'
import imgSection from '../assets/About us page-pana.svg'
import techImg from "../assets/Digital transformation-pana.svg"
 import why from "../assets/Shrug-pana.svg"
 import img1 from  "../assets/Team work-pana.svg";
 import img2 from "../assets/Creative team-pana.svg";
import img3 from "../assets/Partnership-pana.svg";

// https://storyset.com/illustration/team-work/pana
const heroImg = imgHero;
const sectionImg = imgSection;
// the new linkhttps://storyset.com/illustration/team-work/pana

export default function Home() {
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
                className="h3 fw-bold border-start border-danger mt-2 lead  text-dark mt-2 border-start border-4  ps-3"
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                All-Sector Agent Network System
              </motion.h2>
              {/* <motion.p 
                className="lead fw-bold text-dark mt-2 border-start border-4  ps-3"
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                All Sectors. Many Agents. One Dashboard.
              </motion.p> */}

              {/* <motion.p 
                className="mt-3 text-muted"
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.3 }}
              >
                Empowering People. Driving Growth. Creating Jobs.<br/>
                Vision: <strong>50M jobs in Nigeria</strong> & <strong>350M in Africa</strong> in 5 years.
              </motion.p> */}

              <motion.div 
                className="d-flex gap-2 mt-3"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
              >
                {/* <a href="/signup" className="btn btn-danger btn-lg"> */}
                <a href="*" className="btn btn-danger btn-lg">
                  Become an Agent <ArrowRight size={18} className="ms-1" />
                              </a>
                              
                {/* <a href="/partners" className="btn btn-outline-danger btn-lg"></a> */}
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

      {/* ADDITIONAL VISUAL BREAK */}
      <section className="py-5">
        {/* ADD THIS STYLISH LINE HERE */}
        <div className="container">
          <div className="bg-danger rounded-pill my-5 mx-auto" style={{ height: "4px", maxWidth: "100px" }}></div>
        </div>

          {/* <div className="container text-center">
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="DDSA Professional Network"
            className="rounded-4 shadow-lg w-75"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div> */}
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
                  className="card h-100 border-0 shadow-sm hover-lift rounded-4"
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

      {/* SECTORS */}
      <section id="sectors" className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Sectors We Serve</h2>
          <p className="text-center text-muted mb-4">
            Banking & Microfinance, Insurance, Pensions, Agriculture & Livestock, Arts & Culture, E-commerce,
            Hospitality & Tourism, Education, Health & Wellness, NGOs & Social Impact, Logistics, Real Estate,
            Verifications… and more.
          </p>
          <div className="row g-3 text-center">
            {[
              { label: "Banking & Microfinance", icon: <Banknote /> },
              { label: "Insurance (InsureTech)", icon: <ShieldCheck /> },
              { label: "Pensions", icon: <Users /> },
              { label: "Agriculture & Livestock", icon: <Globe /> },
              { label: "E-commerce", icon: <Rocket /> },
              { label: "Health & Wellness", icon: <ShieldCheck /> },
              { label: "Verifications", icon: <Cpu /> },
            ].map((s, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <motion.div
                  className="p-3 border rounded-4 bg-white shadow-sm h-100"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-danger mb-2 d-flex justify-content-center">{s.icon}</div>
                  <div className="small fw-semibold">{s.label}</div>
                </motion.div>
              </div>
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
              {/* <a href="/technology" className="btn btn-outline-danger">
                See the Tech
              </a> */}
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
              {/* <a href="/why" className="btn btn-danger">Learn More</a> */}
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
            {/* <a href="/partners" className="btn btn-outline-danger">Partner with DDSA</a> */}
            <a href="*" className="btn btn-outline-danger">Partner with DDSA</a>
            {/* <a href="/signup" className="btn btn-danger">Become an Agent</a> */}
            <a href="*" className="btn btn-danger">Become an Agent</a>
          </div>
        </div>
      </section>
    </>
  );
}
