TypeScript
import React from 'react';

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif',
      backgroundColor: '#f3f4f6',
      color: '#1f2937'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem', borderRadius: '0.5rem', backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e3a8a' }}>
          Vantage Clinical Strategy
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4b5563' }}>
          Your Next.js environment is successfully configured and running live!
        </p>
      </div>
    </main>
  );
}
