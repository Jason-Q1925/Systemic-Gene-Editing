import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Quantum Entanglement Biology
            </h1>
            <p className="hero-subtitle">
              Breaking the delivery bottleneck in genetic medicine through quantum mechanics
            </p>
            <p className="hero-description">
              What if cells could be entangled at the quantum level? 
              A single genetic edit could instantly propagate throughout an entire organism.
            </p>
            <div className="hero-buttons">
              <Link to="/demo" className="btn btn-primary">
                Explore Interactive Demo
              </Link>
              <Link to="/theory" className="btn">
                Read Full Theory
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="quantum-orb">
              <div className="orb-core"></div>
              <div className="orb-ring orb-ring-1"></div>
              <div className="orb-ring orb-ring-2"></div>
              <div className="orb-ring orb-ring-3"></div>
              <div className="orb-particle orb-particle-1"></div>
              <div className="orb-particle orb-particle-2"></div>
              <div className="orb-particle orb-particle-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-center">The Delivery Problem</h2>
          <p className="section-intro text-center">
            Modern gene editing tools like CRISPR are extraordinarily precise, 
            but they have a critical weakness: delivery at scale.
          </p>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="card-icon">🚀</div>
              <h3>Too Slow</h3>
              <p>Viral vectors and lipid nanoparticles take weeks to reach target cells. 
              Late-stage cancers don't wait.</p>
            </div>

            <div className="problem-card">
              <div className="card-icon">📍</div>
              <h3>Too Localized</h3>
              <p>Traditional delivery reaches only 1% of cells in the body. 
              Systemic diseases need systemic solutions.</p>
            </div>

            <div className="problem-card">
              <div className="card-icon">🛡️</div>
              <h3>Immune Triggering</h3>
              <p>Foreign delivery vehicles trigger immune responses, 
              limiting efficacy and causing side effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">The Quantum Solution</h2>
          <p className="section-intro text-center">
            By harnessing quantum entanglement at the cellular level, 
            we can enable instant, organism-wide genetic correction.
          </p>

          <div className="solution-cards">
            <div className="card">
              <div className="card-content">
                <h3>🔗 Cellular Entanglement</h3>
                <p>
                  EYFP protein qubits are entangled using near-infrared pulses, 
                  creating a synchronized quantum network across all cells.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3>⚛️ Quantum Measurement</h3>
                <p>
                  A genetic edit in one cell acts as a quantum measurement, 
                  forcing all entangled cells to adopt the corrected state instantly.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3>🌊 Fröhlich Coherence</h3>
                <p>
                  The Fröhlich mechanism sustains quantum coherence through thermal energy, 
                  maintaining entanglement despite cellular noise.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3>🎯 Systemic Impact</h3>
                <p>
                  From a single edit to billions of cells: instant, organism-wide correction. 
                  No vectors. No immune triggers. Just quantum mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-center">Revolutionary Applications</h2>

          <div className="applications-grid">
            <div className="app-card">
              <h3>🏥 Medical Breakthrough</h3>
              <p>
                <strong>Late-Stage Cancer Cured in One Intervention</strong>
              </p>
              <p>
                Systemic metastatic cancers could be corrected organism-wide 
                through a single quantum entanglement edit, eliminating the 
                need for localized tumor targeting.
              </p>
            </div>

            <div className="app-card">
              <h3>🔬 Genetic Restoration</h3>
              <p>
                <strong>Diabetes Management Redefined</strong>
              </p>
              <p>
                A single edit targeting insulin-related genes could instantly 
                recalibrate glucose metabolism across trillions of cells throughout 
                the entire body.
              </p>
            </div>

            <div className="app-card">
              <h3>👁️ Sensory Enhancement</h3>
              <p>
                <strong>Vision Beyond Human Limits</strong>
              </p>
              <p>
                Transform humans into tetrachromats, seeing colors and wavelengths 
                currently invisible. Edit filtering mechanisms across the entire 
                nervous system simultaneously.
              </p>
            </div>

            <div className="app-card">
              <h3>🌱 Planimal Biology</h3>
              <p>
                <strong>Humans That Photosynthesize</strong>
              </p>
              <p>
                Integrate chloroplasts into mammalian cells, enabling oxygen 
                production independent of lungs. Survive on light and CO₂.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>See It In Action</h2>
          <p>Explore an interactive simulation of the cellular entanglement procedure, 
          medical experiment, and biohacking applications.</p>
          <Link to="/demo" className="btn btn-primary">
            Launch Interactive Demo
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
