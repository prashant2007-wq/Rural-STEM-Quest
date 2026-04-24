import React from "react";
import { Rocket, BrainCircuit, Code, ArrowRight, Play } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">🚀 Welcome to Rural STEM Quest</div>
          <h1 className="hero-title">
            Level Up Your <br />
            <span className="heading-gradient">STEM Knowledge</span>
          </h1>
          <p className="hero-subtitle">
            Play games, solve quests, and earn badges while mastering Maths, Science, and Computer Science. Available in English & Hindi.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Start Your Journey <ArrowRight size={18} /></button>
            <button className="btn-secondary"><Play size={18} /> Watch Demo</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card math-card glass-panel">
            <div className="card-icon math-bg"><Rocket size={28} /></div>
            <div className="card-info">
              <h3>Maths Quest</h3>
              <p>Level 5 • 1200 XP</p>
            </div>
          </div>
          <div className="floating-card science-card glass-panel">
            <div className="card-icon science-bg"><BrainCircuit size={28} /></div>
            <div className="card-info">
              <h3>Science Lab</h3>
              <p>Level 3 • 850 XP</p>
            </div>
          </div>
          <div className="floating-card cs-card glass-panel">
            <div className="card-icon cs-bg"><Code size={28} /></div>
            <div className="card-info">
              <h3>Code Arena</h3>
              <p>Level 1 • 100 XP</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Your Learning Adventure</h2>
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon">🎮</div>
            <h3>Gamified Quizzes</h3>
            <p>Learn through interactive mini-games and earn rewards for correct answers.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon">🏆</div>
            <h3>Earn Badges</h3>
            <p>Collect rare badges and climb the leaderboard as you master new topics.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon">📶</div>
            <h3>Offline Access</h3>
            <p>Download lessons and keep learning even without an internet connection.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
