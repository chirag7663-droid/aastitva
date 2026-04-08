import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

      {/* HERO SECTION */}
      <section className="hero">
        <img src="/random.jpg" alt="Astitva" className="profile-img" />
        <h1>Astitva Anand</h1>
        <p>PGDM Student | Marketing & Research Enthusiast</p>

        <a 
          href="https://www.linkedin.com/in/astitvaanand" 
          target="_blank" 
          rel="noreferrer"
          className="btn"
        >
          LinkedIn
        </a>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About Me</h2>
        <p>
          I am a PGDM student passionate about marketing, analytics, and business strategy.
          I have hands-on experience in market research, brand promotion, and data-driven decision making.
        </p>
      </section>

      {/* EDUCATION */}
      <section>
        <h2>Education</h2>
        <ul>
          <li>PGDM - Sparsh Global Business School (2025-27)</li>
          <li>BBA - BIT Mesra (83.6%)</li>
          <li>Class XII - 90.04%</li>
          <li>Class X - 82.4%</li>
        </ul>
      </section>

      {/* INTERNSHIP */}
      <section>
        <h2>Internship</h2>
        <p>
          <strong>Mahindra & Mahindra Finance</strong> (Marketing & Research)
        </p>
        <p>
          Conducted market research, analyzed customer engagement decline, 
          visited partner companies, and presented reports to zonal heads.
        </p>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>NGO Marketing (Team Green)</h3>
          <p>Led campaign "7 GREEN" for awareness & plantation drives.</p>
        </div>

        <div className="card">
          <h3>Monte Carlo Marketing Research</h3>
          <p>Applied STP, SWOT & real-world marketing strategies.</p>
        </div>

        <div className="card">
          <h3>Healthcare Data Analysis</h3>
          <p>Used SPSS to analyze impact of information overload on decisions.</p>
        </div>

      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>
        <p>SPSS | Excel | Tally | Canva</p>
        <p>Leadership | Communication | Creativity</p>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Contact</h2>
        <p>Email: Pgdm25.astitva.a@sparshgbs.in</p>
        <p>Phone: 9508530953</p>
      </section>

    </div>
  );
}

export default App;