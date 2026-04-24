import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Trophy, User } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">
        <div className="logo-icon">
          <BookOpen size={24} color="white" />
        </div>
        <Link to="/" className="brand-name">STEM Quest</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/courses" className="nav-link">Subjects</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
      </div>

      <div className="nav-actions">
        <div className="xp-badge">
          <Trophy size={18} color="#f59e0b" />
          <span>0 XP</span>
        </div>
        <button className="profile-btn">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
