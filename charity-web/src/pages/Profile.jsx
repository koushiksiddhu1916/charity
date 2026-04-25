import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Bell } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <div>Please login to view profile.</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card" 
        style={{ padding: '3rem', textAlign: 'center', marginBottom: '2rem' }}
      >
        <img src={user.avatar} alt="Avatar" style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '1.5rem', border: '4px solid var(--primary-color)' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{user.name}</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Member since April 2026</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ padding: '1.5rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Total Donated</h4>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>$1,250.00</span>
          </div>
          <div style={{ padding: '1.5rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Campaigns Supported</h4>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>12</span>
          </div>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {[
          { icon: <User size={20} />, label: 'Account Information', desc: 'Update your name and profile details' },
          { icon: <Mail size={20} />, label: 'Email Preferences', desc: 'Manage your notification settings' },
          { icon: <Shield size={20} />, label: 'Security', desc: 'Change your password and 2FA' },
          { icon: <Bell size={20} />, label: 'Notifications', desc: 'Stay updated on your supported causes' },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card" 
            style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
          >
            <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '0.5rem', color: 'var(--primary-color)' }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{item.label}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
            </div>
            <span style={{ color: 'var(--text-secondary)' }}>→</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
