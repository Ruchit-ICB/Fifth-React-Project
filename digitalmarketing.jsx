// StockMarketAnalysis.jsx — Basic React Program for Stock Market Analysis
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBullhorn, FaChartLine } from "react-icons/fa";

const App = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      padding: "50px 20px",
      background: "linear-gradient(to right, #6a11cb, #2575fc)",
      color: "#fff",
      fontFamily: "Segoe UI, sans-serif",
      textAlign: "center",
    },
    header: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    subtext: {
      fontSize: "1.25rem",
      maxWidth: "700px",
      margin: "0 auto 40px",
    },
    button: {
      background: "#fff",
      color: "#2575fc",
      border: "none",
      borderRadius: "30px",
      padding: "12px 30px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
      marginTop: "20px",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "50px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "20px",
      padding: "30px",
      width: "280px",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s",
    },
    cardTitle: {
      fontSize: "1.2rem",
      margin: "10px 0",
      fontWeight: "bold",
    },
    icon: {
      fontSize: "2rem",
      marginBottom: "10px",
      color: "#fff",
    },
  };

  const services = [
    {
      icon: <FaRocket style={styles.icon} />,
      title: "Launch Campaigns",
      desc: "High-conversion ad campaigns across platforms.",
    },
    {
      icon: <FaBullhorn style={styles.icon} />,
      title: "Brand Strategy",
      desc: "Create a digital brand identity that resonates.",
    },
    {
      icon: <FaChartLine style={styles.icon} />,
      title: "Analytics & SEO",
      desc: "Data-driven insights & Google ranking growth.",
    },
  ];

  return (
    <div style={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        🚀 Digital Marketing Experts
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={styles.subtext}
      >
        We help startups and businesses boost their digital presence with modern
        tools and targeted strategies.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={styles.button}
      >
        Get Free Consultation
      </motion.button>

      <div style={styles.cardContainer}>
        {services.map((s, i) => (
          <motion.div
            key={i}
            style={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {s.icon}
            <div style={styles.cardTitle}>{s.title}</div>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;