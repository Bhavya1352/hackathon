import React from 'react';
import { Shield, Clock, ShieldCheck, FileText, UserPlus, Fingerprint, Lock, Globe, HeartPulse, Activity } from 'lucide-react';

const App: React.FC = () => {
  return (
    <>
      <div className="nav-wrapper">
        <nav className="navbar">
          <div className="logo">
            <Activity color="#CCEC92" />
            MediChain
          </div>
          <div className="nav-links">
            <select>
              <option>For Patients</option>
              <option>For Doctors</option>
            </select>
            <select>
              <option>Our Tech</option>
              <option>Blockchain</option>
            </select>
            <a href="#">Security</a>
          </div>
          <div className="nav-actions">
            <button className="btn-secondary btn" style={{ padding: '0.5rem 1rem' }}>Log in</button>
            <button className="nav-btn-light">Sign up</button>
          </div>
        </nav>
      </div>

      <div className="hero-wrapper">
        <header className="hero-box">
          <div className="hero-content">
            <h1>
              Store Your Medical Reports in One Secure Vault
            </h1>
            <p>
              A robust, high-security Blockchain-based platform built for the future of modern healthcare. Get your unique Health ID today.
            </p>

            <div className="hero-input-group">
              <input type="email" placeholder="Enter your email" />
              <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Get Health ID</button>
            </div>

            <div className="stats-row">
              <div className="stat">
                <h4><ShieldCheck color="#CCEC92" size={28} /> 100%</h4>
                <p>Data Integrity</p>
              </div>
              <div className="stat">
                <h4><Clock color="#CCEC92" size={28} /> 24/7</h4>
                <p>Instant Access</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src="/doctor_hero.png" alt="Doctor and Patient" />
            </div>

            <div className="floating-card-1">
              <h5>Doctors accessing records</h5>
              <div className="mock-avatars">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="floating-card-2">
              <div className="patient-id-mock">
                <Fingerprint color="#1A5443" size={24} />
              </div>
              <div>
                <h5 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>Unique Health ID</h5>
                <p style={{ fontSize: '0.75rem', color: '#888', margin: 0 }}>Verified on Blockchain</p>
              </div>
            </div>
          </div>
        </header>

        <section className="logos-section">
          <span>ETHGlobal</span>
          <span>Polygon</span>
          <span>IPFS Vault</span>
          <span>MediTech</span>
          <span>HealthNet</span>
        </section>
      </div>

      <section className="features-section">
        <div className="feature-split">
          <div className="feature-left">
            <span className="badge-label">Data Security</span>
            <h2>Healthcare Data Without Limits</h2>
            <p style={{ color: '#86868B', maxWidth: '400px', fontSize: '1.1rem' }}>
              Built on decentralized ledger technology. Records are immutable, verifiable, and protected from tampering or breaches.
            </p>
          </div>
          <div className="feature-right">
            <div className="grid-item">
              <div className="grid-icon"><FileText size={20} /></div>
              <p>Store all your MRI scans, lab reports, and prescriptions in one unified vault.</p>
            </div>
            <div className="grid-item">
              <div className="grid-icon"><UserPlus size={20} /></div>
              <p>Every patient receives a unique, cryptographic Health ID for their entire history.</p>
            </div>
            <div className="grid-item">
              <div className="grid-icon"><Lock size={20} /></div>
              <p>You own your data. Temporarily grant access to any doctor instantly.</p>
            </div>
            <div className="grid-item">
              <div className="grid-icon"><Shield size={20} /></div>
              <p>Built on Blockchain. Your medical records are protected by advanced decentralization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="visual-features">
        <div className="visual-head">
          <span className="badge-label">Features</span>
          <h2>Built for the Future of Medical Records</h2>
          <p>Discover a platform that empowers patients and professionals to deliver secure, accessible, and high-quality healthcare.</p>
          <button className="btn btn-primary">Create Profile</button>
        </div>

        <div className="visual-grid">
          <div className="visual-card">
            <img src="/feature_id.png" alt="Health ID" />
            <div className="visual-label">UNIQUE HEALTH ID</div>
          </div>
          <div className="visual-card">
            <img src="/feature_security.png" alt="Blockchain Security" />
            <div className="visual-label">BLOCKCHAIN SECURITY</div>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="badge-label" style={{ color: 'rgba(255,255,255,0.5)' }}>TRUSTED AROUND THE WORLD</span>
          <h2>Access Your Records Every Language, From Anywhere</h2>
          <p>
            Our platform supports healthcare professionals and patients across 100+ countries — bridging the distance with secure, accessible clinical data via the blockchain.
          </p>
        </div>

        <div className="floating-icons">
          {/* Mocking the flag circles with generic colored circles representing the image visually */}
          {[...Array(24)].map((_, i) => (
            <div key={i} className="flag-circle" style={{ 
              background: `hsl(${Math.random() * 360}, 70%, 50%)`,
              opacity: Math.random() > 0.5 ? 1 : 0.8
            }}>
              <Globe size={20} color="#fff" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
