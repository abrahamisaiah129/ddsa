import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  const ScrollMaybe = ({ to, children }) => (
    <ScrollLink to={to} smooth duration={600} offset={-80} className="link-light text-decoration-none">
      {children}
    </ScrollLink>
  );

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li><ScrollMaybe to="home">Home</ScrollMaybe></li>
              <li><ScrollMaybe to="benefits">Benefits</ScrollMaybe></li>
              <li><Link to="/services" className="link-light text-decoration-none">Services</Link></li>
              <li><Link to="/portfolio" className="link-light text-decoration-none">Portfolio</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Policies</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li><Link to="/terms" className="link-light text-decoration-none">Terms of Use</Link></li>
              <li><Link to="/privacy" className="link-light text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p className="small mb-1">info@ddsa-live.com</p>
            <p className="small">+234 703 5874 823</p>
          </div>

          <div className="col-md-3 text-md-end">
            <h6 className="text-uppercase fw-bold mb-2">Become an Agent Today</h6>
            {/* <a className="btn btn-danger btn-sm mt-2" href="/signup">Onboard Now</a> */}
            <a className="btn btn-danger btn-sm mt-2" href="*">Onboard Now</a>
            <div className="d-flex justify-content-end gap-2 mt-3">
              <a href="#" className="text-light"><Twitter size={18} /></a>
              <a href="#" className="text-light"><Facebook size={18} /></a>
              <a href="#" className="text-light"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="small text-center mb-0">© 2025 D-Degree Digital Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
