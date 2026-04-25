import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target } from 'lucide-react';

const campaigns = [
  { id: 1, title: 'Global Water Project', goal: 50000, raised: 32400, description: 'Providing clean water access to rural communities in Africa.', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Child Education Fund', goal: 25000, raised: 18000, description: 'Sponsoring school supplies and tuition for underprivileged children.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Wildlife Preservation', goal: 100000, raised: 45000, description: 'Protecting endangered species and their natural habitats.', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Ocean Cleanup', goal: 75000, raised: 25000, description: 'Removing plastic waste from our oceans and beaches globally.', image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Tree Planting Drive', goal: 15000, raised: 9200, description: 'Aiming to plant 1 million trees to combat deforestation.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Mental Health Support', goal: 40000, raised: 31000, description: 'Providing free counseling and resources for those in need.', image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Hunger Relief Program', goal: 60000, raised: 52000, description: 'Distributing nutritious meals to families facing food insecurity.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Animal Shelter Fund', goal: 20000, raised: 14500, description: 'Supporting local shelters with medical supplies and food.', image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Disaster Relief Unit', goal: 200000, raised: 110000, description: 'Rapid response team for natural disasters and emergencies.', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800' },
  { id: 10, title: 'Renewable Energy Project', goal: 150000, raised: 88000, description: 'Implementing solar panels in rural off-grid villages.', image: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800' },
];

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800', background: 'linear-gradient(to right, #4f46e5, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Make an Impact Today
        </motion.h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Connect with meaningful causes and track your contributions in real-time.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {campaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card"
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <img src={campaign.image} alt={campaign.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{campaign.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{campaign.description}</p>
              
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span>Raised: <strong>${campaign.raised.toLocaleString()}</strong></span>
                  <span style={{ color: 'var(--text-secondary)' }}>Goal: ${campaign.goal.toLocaleString()}</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ height: '100%', background: 'var(--primary-color)' }}
                  />
                </div>
                <button className="btn-primary" style={{ width: '100%' }}>Donate Now</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
