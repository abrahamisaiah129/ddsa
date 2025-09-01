import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { Menu } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Sectors", id: "sectors" },
  { name: "Stakeholders", id: "stakeholders" },
  { name: "Partnerships", id: "partnerships" },
  { name: "Technology", id: "technology" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [isHome, setIsHome] = useState(location.pathname === "/");

  useEffect(() => setIsHome(location.pathname === "/"), [location.pathname]);

  const getOffset = useCallback(
    () => -((document.querySelector(".navbar")?.offsetHeight || 72) + 8),
    []
  );

  const smoothScrollTo = useCallback(
    (id) => {
      scroller.scrollTo(id, {
        duration: 650,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: getOffset(),
      });
    },
    [getOffset]
  );

  const handleNavClick = (id) => {
    const collapseEl = document.getElementById("navbarNav");
    if (collapseEl?.classList.contains("show") && window.bootstrap) {
      new window.bootstrap.Collapse(collapseEl).hide();
    }

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      requestAnimationFrame(() => {
        setTimeout(() => smoothScrollTo(id), 260);
      });
    } else {
      smoothScrollTo(id);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") return;
    const ids = NAV_ITEMS.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${Math.abs(getOffset())}px 0px -55% 0px`,
        threshold: [0.2, 0.4, 0.6],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [location.pathname, getOffset]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white bg-opacity-85 shadow-sm py-3 fixed-top">
      <div className="container">
        <Link
          className="navbar-brand d-flex align-stems-center fw-bold text-danger"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 230 170"
            fill="none"
          >
            <path
              d="M193.605 0.514648L200.536 0.972656C218.635 2.17088 231.089 19.6648 226.297 37.1592L206.396 128.676C201.482 151.271 181.491 167.39 158.368 167.404L0.670929 167.5L37.1123 0.5L193.605 0.514648ZM27.3887 45.6748L65.8282 45.6484L45.9492 135.463L60.1358 135.226L79.8594 45.6377L118.174 45.6152L98.5567 134.398L102.912 134.612C108.736 134.899 113.928 130.966 115.226 125.281L133.266 46.2031C134.789 39.5226 129.679 33.4417 123.221 33.332V33.3203L29.9893 33.2617L27.3887 45.6748ZM185.995 46.3955C187.588 39.2578 181.731 32.6524 174.454 33.3799L151.992 134.989L154.914 135.138C161.352 135.462 167.087 131.098 168.491 124.808L185.995 46.3955Z"
              fill="#E70A02"
              fillOpacity="0.8"
            ></path>
          </svg>
          <span className="ms-2 fs-5">DDSA</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <Menu size={22} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link custom-nav-link btn btn-link p-0 ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
