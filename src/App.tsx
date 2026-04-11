import React, { useState, useEffect } from 'react';
import { Shield, Clock, ShieldCheck, FileText, UserPlus, Fingerprint, Lock, Globe, HeartPulse, Activity, X, ChevronDown, ChevronRight, Layers, CreditCard, Cpu, Database, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [healthIdSuccess, setHealthIdSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (type: 'login' | 'signup') => {
    setModalType(type);
    setShowModal(true);
  };

  const handleGetHealthId = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setHealthIdSuccess(true);
      setTimeout(() => setHealthIdSuccess(false), 3000);
      setEmail('');
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { q: "How is my data secured on the blockchain?", a: "Your medical records are encrypted and distributed across a decentralized node network. Blockchain ensures data integrity and decentralization." },
    { q: "Can doctors access my history without permission?", a: "No. Doctors can only view your records if you grant them access using your unique health ID and cryptographic permissions." },
    { q: "Where are my prescriptions stored?", a: "All prescriptions, lab results, and reports are stored in one single, unalterable place under your unique health ID." },
    { q: "Is the system decentralized?", a: "Yes. By utilizing blockchain technology, your data is never held hostage by a single centralized healthcare provider." }
  ];

  return (
    <div className="layout-wrapper">
      {/* -------------------- HERO SECTION (Dark Green) -------------------- */}
      <section className="hero-section">
        <header className="navbar">
          <div className="brand">
            <Activity size={24} color="#FFF" />
            <span className="brand-name">MediChain</span>
          </div>
          <div className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#security">Security</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-buttons">
            <button className="btn-accent" onClick={() => handleOpenModal('signup')}>Get Health ID</button>
          </div>
        </header>

        <div className="hero-content-wrapper">
          <div className="hero-text">
            <span className="hero-subtitle">_Secure Your Health Data</span>
            <h1 className="hero-title">
              Store Your Medical Reports & Prescriptions in One Place
            </h1>
            <p className="hero-desc">
              Your complete medical history, unified. Each patient receives a Unique Health ID, giving you pure control over who accesses your records, backed by the unbreakable security of the blockchain.
            </p>

            <form className="hero-form" onSubmit={handleGetHealthId}>
              <input 
                type="email" 
                placeholder="Enter email to begin" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-accent">
                {healthIdSuccess ? 'Generated!' : 'Claim ID'} <ArrowUpRight size={18} />
              </button>
            </form>

            <div className="expert-care-box">
              <div className="box-header">
                <h4>Doctor Access</h4>
                <ArrowUpRight size={16} />
              </div>
              <p>Doctors can securely access records with your strict permission.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="pill-image-container frame-1">
              <div className="abstract-cover" style={{background: 'linear-gradient(45deg, #1A4D3B, #2C7A5C)'}}>
                <ShieldCheck color="#F1D662" size={64} opacity={0.8} />
              </div>
            </div>
            <div className="pill-image-container frame-2">
               <div className="abstract-cover" style={{background: 'linear-gradient(45deg, #F1D662, #D4B945)'}}>
                 <Fingerprint color="#073B25" size={64} opacity={0.8} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- STATS SECTION -------------------- */}
      <section className="stats-section">
        <div className="stat-item">
          <h2>100%</h2>
          <p>Data Integrity</p>
        </div>
        <div className="stat-item">
          <h2>1 ID</h2>
          <p>Unique Health Profile</p>
        </div>
        <div className="stat-item">
          <h2>24/7</h2>
          <p>Secure Access</p>
        </div>
        <div className="stat-item">
          <h2>Zero</h2>
          <p>Centralized Failure</p>
        </div>
      </section>

      {/* -------------------- DISCOVER SECTION (About) -------------------- */}
      <section id="about" className="discover-section">
        <div className="discover-visual">
          <div className="rounded-box-visual">
            <div className="mock-chart">
               <div className="bar" style={{height: '60%'}}></div>
               <div className="bar" style={{height: '80%'}}></div>
               <div className="bar" style={{height: '40%'}}></div>
               <div className="bar" style={{height: '100%'}}></div>
            </div>
            <div className="float-badge">
              <Lock size={16} color="#073B25" /> Decentralized
            </div>
          </div>
        </div>
        <div className="discover-text">
          <span className="section-label">About the Protocol</span>
          <h2>Discover a Holistic Approach to Data Privacy</h2>
          <p>
            We believe that healthcare begins with trust. Our decentralized platform is built to support your right to privacy. By leveraging blockchain technology, MediChain ensures true decentralization, giving you a safe and supportive space where your medical history is exclusively your property.
          </p>
          <button className="btn-dark" onClick={() => handleOpenModal('login')}>
            Learn More About Tech <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

      {/* -------------------- GRID SECTION (Transforming...) -------------------- */}
      <section id="features" className="transform-section">
        <div className="text-center">
          <span className="section-label">Core Features</span>
          <h2>Transforming Healthcare into<br/>Real-Life Results</h2>
          <p className="subtitle">Explore how our patients achieve complete control over their medical history.</p>
        </div>

        <div className="bento-grid">
          <div className="bento-item wide">
            <div className="bento-content">
              <h3>All Reports in One Place</h3>
              <p>Upload MRIs, lab results, and prescriptions.</p>
            </div>
            <div className="bento-bg" style={{background: '#EAEAE6'}}>
              <FileText size={48} color="#073B25" opacity={0.2} style={{margin: '2rem'}} />
            </div>
          </div>
          <div className="bento-item tall">
            <div className="bento-content" style={{color: '#fff'}}>
              <h3>Unique Health ID</h3>
              <p>Your permanent digital passport.</p>
            </div>
            <div className="bento-bg" style={{background: '#073B25'}}>
              <Fingerprint size={48} color="#F1D662" opacity={0.2} style={{margin: '2rem'}} />
            </div>
          </div>
          <div className="bento-item regular">
             <div className="bento-content">
              <h3>Doctor Permission</h3>
              <p>Grant targeted access safely.</p>
            </div>
            <div className="bento-bg" style={{background: '#F1D662'}}>
               <UserPlus size={48} color="#073B25" opacity={0.2} style={{margin: '2rem'}} />
            </div>
          </div>
          <div className="bento-item regular">
             <div className="bento-content" style={{color: '#fff'}}>
              <h3>Blockchain Integrity</h3>
              <p>Unalterable, resilient data.</p>
            </div>
            <div className="bento-bg" style={{background: '#111'}}>
              <Database size={48} color="#fff" opacity={0.2} style={{margin: '2rem'}} />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- FAQ SECTION (Dark) -------------------- */}
      <section className="faq-section-dark">
        <div className="faq-left">
          <span className="section-label-light">FAQ</span>
          <h2>Frequently asked<br/>questions</h2>
          
          <div className="contact-box">
             <p>Still have any questions?</p>
             <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
               <button className="btn-accent" style={{padding: '0.6rem 1.2rem', fontSize: '0.9rem'}}>Contact Us</button>
               <span style={{color: '#aaa', alignSelf: 'center'}}>support@medichain.org</span>
             </div>
          </div>
        </div>
        
        <div className="faq-right">
          {faqs.map((faq, idx) => (
             <div key={idx} className={`faq-row ${activeFaq === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
               <div className="faq-q-dark">
                 {faq.q}
                 <ChevronDown className="faq-icon" size={20} />
               </div>
               <div className="faq-a-dark">
                 <p>{faq.a}</p>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* -------------------- MODAL -------------------- */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}><X size={20}/></button>
            <h3 style={{fontSize: '1.8rem', color: '#073B25', marginBottom: '0.5rem'}}>
               {modalType === 'login' ? 'Access Vault' : 'Create Unique ID'}
            </h3>
            <p className="modal-desc" style={{marginBottom: '2rem', color: '#666'}}>
              {modalType === 'login' ? 'Enter credentials to access your centralized medical hub securely.' : 'Register to mint your own cryptographic Universal Health ID.'}
            </p>
            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <div className="input-group">
                <input type="text" placeholder="Your Health ID or Email" required/>
              </div>
              <div className="input-group" style={{marginTop: '1rem'}}>
                <input type="password" placeholder="Passphrase" required/>
              </div>
              <button type="submit" className="btn-dark w-full" style={{marginTop: '1.5rem', width: '100%', padding: '1rem'}}>
                {modalType === 'login' ? 'Proceed Safely' : 'Mint My Identity'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
