import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';

const donations = [
  { id: 1, campaign: 'Global Water Project', amount: 500, date: '2026-04-20', status: 'completed' },
  { id: 2, campaign: 'Child Education Fund', amount: 250, date: '2026-04-15', status: 'completed' },
  { id: 3, campaign: 'Wildlife Preservation', amount: 1000, date: '2026-04-01', status: 'completed' },
  { id: 4, campaign: 'Emergency Relief', amount: 50, date: '2026-03-25', status: 'pending' },
];

const History = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Donation History</h2>
      
      <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1.25rem' }}>Campaign</th>
              <th style={{ padding: '1.25rem' }}>Amount</th>
              <th style={{ padding: '1.25rem' }}>Date</th>
              <th style={{ padding: '1.25rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, i) => (
              <motion.tr 
                key={donation.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{ borderBottom: '1px solid var(--border-color)' }}
              >
                <td style={{ padding: '1.25rem', fontWeight: '500' }}>{donation.campaign}</td>
                <td style={{ padding: '1.25rem' }}>${donation.amount.toLocaleString()}</td>
                <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{donation.date}</td>
                <td style={{ padding: '1.25rem' }}>
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '2rem', 
                    fontSize: '0.8rem',
                    background: donation.status === 'completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    color: donation.status === 'completed' ? '#10b981' : '#f59e0b'
                  }}>
                    {donation.status === 'completed' ? <CheckCircle size={14} /> : <Clock size={14} />}
                    {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
