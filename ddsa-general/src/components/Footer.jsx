import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  const [hoveredFooter, setHoveredFooter] = useState(null);

  const ScrollMaybe = ({ to, children }) => (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      duration={600}
      offset={-80} // Adjusts for navbar height
      className="link-light text-decoration-none cursor-pointer"
    >
      {children}
    </ScrollLink>
  );

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Quick Links */}
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li>
                <ScrollMaybe to="home">Home</ScrollMaybe>
              </li>
              <li>
                <ScrollMaybe to="benefits">Benefits</ScrollMaybe>
              </li>
              <li>
                <ScrollMaybe to="about">About Us</ScrollMaybe>
              </li>
              <li>
                <ScrollMaybe to="contact">Contact</ScrollMaybe>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Policies</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li>
                <Link to="/terms" className="link-light text-decoration-none">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="link-light text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p className="small mb-1">📧 info@ddsa-live.com</p>
            <p className="small mb-3">📞 +234 9019855495</p>
            <div className="small mb-2">
              <span className="badge rounded-pill bg-danger me-1">LAGOS</span>
              16B Akintan Street, Dideolu Estate, Ogba, Ikeja, Lagos, Nigeria
            </div>
            <div className="small">
              <span className="badge rounded-pill bg-danger me-1">ABUJA</span>
              Room C14, 7th Floor, Block C, Federal Secretariat Complex, Phase
              II, Abuja, Nigeria
            </div>
          </div>

          {/* CTA + Socials */}
          <div className="col-md-3 text-md-end">
            <h6 className="text-uppercase fw-bold mb-2">Become a Partner</h6>
            <motion.a
              href="mailto:info@ddsa-live.com"
              className={`btn ${
                hoveredFooter === "partnerFooter"
                  ? "btn-danger text-light"
                  : "btn-outline-danger text-danger"
              } fw-semibold mt-2`}
              onHoverStart={() => setHoveredFooter("partnerFooter")}
              onHoverEnd={() => setHoveredFooter(null)}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(220, 53, 69, 0.6)",
              }}
            >
              Onboard Now
            </motion.a>
            <div className="d-flex justify-content-md-end justify-content-start gap-3 mt-3">
              <a href="#" className="text-light" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-light" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-light" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="small text-center mb-0">
          © {new Date().getFullYear()} D-Degree Digital Hub. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
