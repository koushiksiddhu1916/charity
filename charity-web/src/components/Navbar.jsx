import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Heart, LogOut, User, History as HistoryIcon } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="glass-card" style={{ margin: '1rem', padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '1rem', zIndex: 100 }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
        <Heart fill="#6366f1" color="#6366f1" />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>UnityCharity</span>
      </Link>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {user ? (
          <>
            <Link to="/history" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <HistoryIcon size={18} /> History
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1rem', borderLeft: '1px solid var(--border-color)' }}>
              <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
                <img src={user.avatar} alt="Profile" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                <span style={{ fontWeight: '500' }}>{user.name}</span>
              </Link>
              <button onClick={() => { logout(); navigate('/login'); }} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <LogOut size={20} />
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>Login</Link>
            <Link to="/register" className="btn-primary" style={{ textDecoration: 'none' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
