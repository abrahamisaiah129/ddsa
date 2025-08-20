// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "The Future of Web Development",
      excerpt: "Explore the latest trends shaping the digital landscape in 2025.",
      img: "https://source.unsplash.com/600x400/?technology,web",
      link: "#",
    },
    {
      title: "Design Thinking for Businesses",
      excerpt:
        "How innovative design processes can revolutionize your business strategy.",
      img: "https://source.unsplash.com/600x400/?business,design",
      link: "#",
    },
    {
      title: "AI in Everyday Business",
      excerpt: "Harness the power of AI to scale operations and increase efficiency.",
      img: "https://source.unsplash.com/600x400/?artificial,intelligence",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container">
        <motion.h2
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Latest Insights
        </motion.h2>
        <div className="row g-4">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="card shadow-sm border-0 h-100">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{p.title}</h5>
                  <p className="card-text">{p.excerpt}</p>
                  <a href={p.link} className="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
