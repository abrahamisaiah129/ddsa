import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, Building2, Factory, GraduationCap, Stethoscope, Wrench } from "lucide-react";

const sectors = [
  {
    icon: <Building2 size={40} className="text-danger" />,
    title: "Construction",
    description: "Innovative building solutions shaping modern infrastructure.",
  },
  {
    icon: <Factory size={40} className="text-danger" />,
    title: "Manufacturing",
    description: "Driving growth with efficient and scalable production systems.",
  },
  {
    icon: <GraduationCap size={40} className="text-danger" />,
    title: "Education",
    description: "Empowering future leaders through accessible quality learning.",
  },
  {
    icon: <Stethoscope size={40} className="text-danger" />,
    title: "Healthcare",
    description: "Delivering improved care with innovative health services.",
  },
  {
    icon: <Wrench size={40} className="text-danger" />,
    title: "Engineering",
    description: "Providing technical expertise and solutions for industry challenges.",
  },
  {
    icon: <Briefcase size={40} className="text-danger" />,
    title: "Corporate",
    description: "Partnering with businesses to accelerate growth and sustainability.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SectorsOverview = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold text-danger mb-4">Our Sectors</h2>
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="col-md-4 col-lg-4"
              variants={cardVariants}
            >
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="mb-3">{sector.icon}</div>
                <h5 className="fw-bold">{sector.title}</h5>
                <p className="text-muted">{sector.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsOverview;
