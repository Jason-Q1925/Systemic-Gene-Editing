.applications {
  padding: 2rem 0;
}

.applications-header {
  text-align: center;
  margin-bottom: 3rem;
}

.applications-header h1 {
  margin-bottom: 0.5rem;
}

.applications-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.application-category {
  margin-bottom: 4rem;
}

.application-category h2 {
  color: var(--accent-cyan);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--accent-purple);
}

.category-intro {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 800px;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.app-item {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  transition: var(--transition);
}

.app-item:hover {
  border-color: var(--accent-cyan);
  box-shadow: var(--glow-cyan);
  transform: translateY(-4px);
}

.app-item h3 {
  color: var(--accent-purple);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.app-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.app-details p {
  font-size: 0.95rem;
  line-height: 1.6;
}

.app-details strong {
  color: var(--accent-cyan);
  font-weight: 600;
}

/* Impact Section */
.impact-section {
  margin: 4rem 0;
}

.impact-section h2 {
  color: var(--accent-cyan);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--accent-green);
}

.impact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.impact-card {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  transition: var(--transition);
}

.impact-card:hover {
  border-color: var(--accent-green);
  box-shadow: var(--glow-purple);
  transform: translateY(-4px);
}

.impact-card h3 {
  color: var(--accent-green);
  margin-bottom: 1rem;
}

.impact-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

/* Timeline */
.timeline-section {
  margin: 4rem 0;
}

.timeline-section h2 {
  color: var(--accent-cyan);
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--accent-pink);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding-left: 4rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, 
    var(--accent-cyan) 0%,
    var(--accent-purple) 50%,
    var(--accent-green) 100%);
}

.timeline-item {
  position: relative;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: var(--transition);
}

.timeline-item:hover {
  border-color: var(--accent-cyan);
  box-shadow: var(--glow-cyan);
  transform: translateX(10px);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -4.25rem;
  top: 1.75rem;
  width: 16px;
  height: 16px;
  background: var(--accent-cyan);
  border: 3px solid var(--bg-primary);
  border-radius: 50%;
  transition: var(--transition);
}

.timeline-item:hover::before {
  background: var(--accent-purple);
  box-shadow: 0 0 15px var(--accent-purple);
  transform: scale(1.3);
}

.timeline-marker {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-purple);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.timeline-item h4 {
  color: var(--accent-cyan);
  margin-bottom: 0.75rem;
}

.timeline-item p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .apps-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .impact-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .applications {
    padding: 1rem 0;
  }

  .apps-grid,
  .impact-cards {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 2rem;
  }

  .timeline-item::before {
    left: -2.25rem;
  }

  .application-category h2 {
    font-size: 1.5rem;
  }

  .impact-section h2 {
    font-size: 1.5rem;
  }

  .timeline-section h2 {
    font-size: 1.5rem;
  }
}
