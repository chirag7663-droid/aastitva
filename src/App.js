import React from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="container">

      {/* HERO */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img src="/random.jpg" alt="profile" className="profile-img" />
        <h1>Astitva Anand</h1>
        <p>Marketing & Research Enthusiast</p>

        <a href="https://www.linkedin.com/in/astitvaanand" target="_blank" rel="noreferrer" className="btn">
          LinkedIn
        </a>
      </motion.section>

      {/* ABOUT */}
      <motion.section className="glass" whileHover={{ scale: 1.02 }}>
        <h2>About Me</h2>
        <p>
          Passionate PGDM student skilled in marketing, analytics and business strategy.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section>
        <h2>Projects</h2>

        <div className="grid">
          <motion.div className="card glass" whileHover={{ scale: 1.05 }}>
            <h3>NGO Marketing</h3>
            <p>Campaign "7 GREEN" for awareness & plantation.</p>
          </motion.div>

          <motion.div className="card glass" whileHover={{ scale: 1.05 }}>
            <h3>Monte Carlo Research</h3>
            <p>Applied STP & SWOT in real market study.</p>
          </motion.div>

          <motion.div className="card glass" whileHover={{ scale: 1.05 }}>
            <h3>Healthcare Analysis</h3>
            <p>SPSS-based decision impact analysis.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section className="glass" whileHover={{ scale: 1.02 }}>
        <h2>Skills</h2>
        <p>SPSS • Excel • Tally • Canva</p>
        <p>Leadership • Communication • Creativity</p>
      </motion.section>

      {/* CONTACT */}
      <motion.section className="glass" whileHover={{ scale: 1.02 }}>
        <h2>Contact</h2>
        <p>Email: Pgdm25.astitva.a@sparshgbs.in</p>
        <p>Phone: 9508530953</p>
      </motion.section>

    </div>
  );
}

export default App;