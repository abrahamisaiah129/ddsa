import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Sectors from "./pages/Sectors.jsx";
import ClientPartners from "./pages/ClientPartners.jsx";
import Governments from "./pages/Governments.jsx";
import Citizens from "./pages/Citizens.jsx";
import Partnerships from "./pages/Partnerships.jsx";
import Technology from "./pages/Technology.jsx";
import WhyDDSA from "./pages/WhyDDSA.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "84px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/partners" element={<ClientPartners />} />
          <Route path="/governments" element={<Governments />} />
          <Route path="/citizens" element={<Citizens />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/why" element={<WhyDDSA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
