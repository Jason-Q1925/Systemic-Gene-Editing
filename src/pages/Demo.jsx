import React, { useState, useEffect, useRef } from 'react';
import './Demo.css';

function Demo() {
  const [activeExperiment, setActiveExperiment] = useState('entanglement');
  const [selectedGene, setSelectedGene] = useState('HBB');
  const [selectedBiohack, setSelectedBiohack] = useState('CHLOROPLAST');
  const [currentStage, setCurrentStage] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const stageRefs = useRef([]);

  // Gene data with timelines and adaptation details
  const geneDatabase = {
    HBB: {
      name: 'HBB (Sickle Cell)',
      mutation: 'CTG → GAG',
      protein: 'Hemoglobin β-chain',
      issue: 'Polymerization under low oxygen',
      expressionTime: '24-48 hours',
      adaptationTime: '7-14 days',
      phenotypeTime: '14-30 days',
      category: 'medical'
    },
    INS: {
      name: 'INS (Diabetes)',
      mutation: 'Insulin gene upregulation',
      protein: 'Insulin',
      issue: 'Insufficient insulin production',
      expressionTime: '12-24 hours',
      adaptationTime: '3-7 days',
      phenotypeTime: '7-14 days',
      category: 'medical'
    },
    CFTR: {
      name: 'CFTR (Cystic Fibrosis)',
      mutation: 'ΔF508 → corrected',
      protein: 'CFTR ion channel',
      issue: 'Protein misfolding and degradation',
      expressionTime: '48-72 hours',
      adaptationTime: '7-14 days',
      phenotypeTime: '21-30 days',
      category: 'medical'
    },
    TP53: {
      name: 'TP53 (Cancer Resistance)',
      mutation: 'Enhanced p53 expression',
      protein: 'Tumor suppressor p53',
      issue: 'Impaired apoptosis in cancerous cells',
      expressionTime: '24-48 hours',
      adaptationTime: '10-14 days',
      phenotypeTime: '30-60 days',
      category: 'medical'
    },
    APOB: {
      name: 'APOB (Heart Health)',
      mutation: 'Lipid metabolism optimization',
      protein: 'Apolipoprotein B',
      issue: 'Elevated cholesterol and triglycerides',
      expressionTime: '24-48 hours',
      adaptationTime: '7-14 days',
      phenotypeTime: '14-28 days',
      category: 'medical'
    },
    CHLOROPLAST: {
      name: 'Chloroplast Integration',
      mutation: 'Photosynthetic pathway insertion',
      protein: 'Photosystem complexes',
      issue: 'Oxygen production and glucose synthesis',
      expressionTime: '48-72 hours',
      adaptationTime: '14-21 days',
      phenotypeTime: '30-60 days',
      category: 'biohack'
    },
    SENSORY: {
      name: 'Sensory Enhancement',
      mutation: 'Filter gene suppression',
      protein: 'Sensory ion channels',
      issue: 'Limited perceptual bandwidth',
      expressionTime: '24-48 hours',
      adaptationTime: '21-30 days',
      phenotypeTime: '60-90 days',
      category: 'biohack'
    },
    METABOLISM: {
      name: 'Metabolic Redesign',
      mutation: 'Multi-pathway optimization',
      protein: 'Metabolic enzymes',
      issue: 'Inefficient energy utilization',
      expressionTime: '36-72 hours',
      adaptationTime: '14-30 days',
      phenotypeTime: '30-90 days',
      category: 'biohack'
    }
  };

  const experiments = {
    entanglement: {
      title: 'Cellular Entanglement Procedure',
      description: 'Establishing quantum entanglement across all cells',
      stages: [
        {
          name: 'Initial State: Independent Cells',
          duration: 'Baseline',
          details: 'Cells with EYFP-Prime Editor and EYFP-Cas13 fusion proteins. Each cell operates independently.',
          visualization: 'initial-cells',
          keyPoints: [
            'EYFP protein qubits in each cell',
            '~10 trillion copies per cell',
            'No quantum coherence yet'
          ]
        },
        {
          name: 'Fröhlich Coherence Activation',
          duration: '1-2 minutes',
          details: 'Thermal energy pumps microtubules into synchronized vibration, creating a Fröhlich Bose-Einstein condensate.',
          visualization: 'frohlich-coherence',
          keyPoints: [
            '37°C thermal energy pumping',
            'Microtubules vibrate at ~10¹⁴ Hz',
            'Ordered water lattice forms'
          ]
        },
        {
          name: 'Near-Infrared Pulse Application',
          duration: '100 femtoseconds',
          details: 'Calibrated near-infrared optical and microwave pulses excite EYFP qubits simultaneously across all cells.',
          visualization: 'nir-pulse-animation',
          keyPoints: [
            '780-1000 nm wavelength penetrates tissue',
            'EYFP triplet state activated',
            '10¹⁰ Hz microwave frequency'
          ]
        },
        {
          name: 'Quantum Entanglement Collapse',
          duration: 'Instantaneous',
          details: 'EYFP qubits collapse into synchronized entangled state. All cells surrender individual quantum identities.',
          visualization: 'quantum-collapse-animation',
          keyPoints: [
            'Wave function unified across organism',
            '~100 microseconds coherence time',
            'All 37 trillion cells entangled'
          ]
        },
        {
          name: 'Organism-Wide Quantum Network',
          duration: 'Sustained',
          details: 'Cellular entanglement established. Biophoton exchange sustains re-entanglement. Ready for systemic editing.',
          visualization: 'quantum-network-animation',
          keyPoints: [
            'Fröhlich mechanism sustains coherence',
            'Single edit propagates instantly',
            'Quantum measurement forces synchronization'
          ]
        }
      ]
    },
    medical: {
      title: 'Medical Experiment: Genetic Correction',
      description: 'Systemic genetic correction via quantum entanglement',
      stages: [
        {
          name: 'Disease State: Mutation Present',
          duration: 'Baseline',
          details: `Tissue culture with ${geneDatabase[selectedGene].mutation} mutation affecting ${geneDatabase[selectedGene].protein}.`,
          visualization: 'disease-visualization',
          keyPoints: [
            `Mutation: ${geneDatabase[selectedGene].mutation}`,
            `Protein: ${geneDatabase[selectedGene].protein}`,
            `Issue: ${geneDatabase[selectedGene].issue}`
          ]
        },
        {
          name: 'Establish Entanglement',
          duration: '1-2 minutes',
          details: 'Tissue culture pumped into Fröhlich coherent state using near-IR pulses. All cells synchronized.',
          visualization: 'entanglement-spread',
          keyPoints: [
            '100% of cells entangled',
            'Unified quantum wave function',
            'Ready for targeted edit'
          ]
        },
        {
          name: 'Prime Editor Injection',
          duration: 'Instant',
          details: 'Prime Editor targeting the mutation introduced via microinjection into single cell in culture.',
          visualization: 'prime-editor-injection',
          keyPoints: [
            'Microinjection into one cell',
            '~95% on-target efficiency',
            `Correction: ${geneDatabase[selectedGene].mutation}`
          ]
        },
        {
          name: 'Quantum Measurement & Collapse',
          duration: 'Instantaneous',
          details: 'Prime Editor reading coherent DNA qubits forces quantum collapse. All entangled cells adopt corrected state.',
          visualization: 'quantum-measurement-animation',
          keyPoints: [
            'Wave function collapse forces synchronization',
            'All cells receive genetic information',
            'Single edit → organism-wide correction'
          ]
        },
        {
          name: 'Post-Edit Adaptation',
          duration: `${geneDatabase[selectedGene].phenotypeTime}`,
          details: 'Unedited cells spontaneously exhibit corrected sequence. Protein expression increases gradually. Phenotype emerges.',
          visualization: 'adaptation-timeline',
          keyPoints: [
            `Expression: ${geneDatabase[selectedGene].expressionTime}`,
            `Adaptation: ${geneDatabase[selectedGene].adaptationTime}`,
            `Full phenotype: ${geneDatabase[selectedGene].phenotypeTime}`
          ]
        }
      ]
    },
    biohacking: {
      title: 'Biohacking Experiment: Organism Enhancement',
      description: 'Systemic biological enhancement via quantum entanglement',
      stages: [
        {
          name: 'Setup: Native Biology',
          duration: 'Baseline',
          details: 'Mammalian tissue without enhancement. Baseline phenotype established.',
          visualization: 'native-biology',
          keyPoints: [
            'Standard mammalian cell machinery',
            `Target: ${geneDatabase[selectedBiohack].name}`,
            'Enhancement pathway to be introduced'
          ]
        },
        {
          name: 'Establish Entanglement',
          duration: '1-2 minutes',
          details: 'Tissue pumped into entangled state via near-IR pulses. All cells synchronized.',
          visualization: 'biohack-entanglement-spread',
          keyPoints: [
            'Unified cellular DNA wave function',
            'All cells coherently connected',
            'Ready for systemic modification'
          ]
        },
        {
          name: 'Edit Immune Tolerance',
          duration: 'Instant',
          details: 'CRISPR-Cas13 base editor targets immune rejection genes in single cell. A→I and C→U conversions suppress immune response.',
          visualization: 'cas13-editing',
          keyPoints: [
            'RNA-level editing (temporary)',
            'MHC suppression via base editing',
            'Duration: 24-72 hours'
          ]
        },
        {
          name: 'Insert Enhancement Pathway',
          duration: 'Instant',
          details: 'Prime Editor introduces enhancement genes in single cell. Quantum collapse forces all cells to express new pathway.',
          visualization: 'enhancement-insertion',
          keyPoints: [
            `Enhancement: ${geneDatabase[selectedBiohack].name}`,
            'Quantum measurement propagates edit',
            'All cells receive new genetic instructions'
          ]
        },
        {
          name: 'Immune Tolerance + Enhancement Integration',
          duration: `${geneDatabase[selectedBiohack].phenotypeTime}`,
          details: 'Tissue integrates new organelles/proteins. Immune system accepts foreign machinery. Enhancement phenotype emerges.',
          visualization: 'integration-timeline',
          keyPoints: [
            `Tolerance: 24-72 hours (temporary)`,
            `Expression: ${geneDatabase[selectedBiohack].expressionTime}`,
            `Full integration: ${geneDatabase[selectedBiohack].phenotypeTime}`
          ]
        }
      ]
    }
  };

  const currentExperiment = experiments[activeExperiment];

  useEffect(() => {
    // Simulate animation progress
    const interval = setInterval(() => {
      setAnimationProgress(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleExperimentChange = (exp) => {
    setActiveExperiment(exp);
    setCurrentStage(0);
  };

  const handleNextStage = () => {
    if (currentStage < currentExperiment.stages.length - 1) {
      setCurrentStage(currentStage + 1);
      // Scroll to next stage
      setTimeout(() => {
        stageRefs.current[currentStage + 1]?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="demo-redesign">
      <div className="demo-header">
        <h1>Interactive Quantum Entanglement Simulation</h1>
        <p>Explore the three-phase cellular entanglement process</p>
      </div>

      {/* Experiment Selector */}
      <div className="experiment-selector">
        <button 
          className={`exp-btn ${activeExperiment === 'entanglement' ? 'active' : ''}`}
          onClick={() => handleExperimentChange('entanglement')}
        >
          <div className="btn-title">Cellular Entanglement</div>
          <div className="btn-subtitle">Foundational Procedure</div>
        </button>
        <button 
          className={`exp-btn ${activeExperiment === 'medical' ? 'active' : ''}`}
          onClick={() => handleExperimentChange('medical')}
        >
          <div className="btn-title">Medical Correction</div>
          <div className="btn-subtitle">Gene Editing Experiment</div>
        </button>
        <button 
          className={`exp-btn ${activeExperiment === 'biohacking' ? 'active' : ''}`}
          onClick={() => handleExperimentChange('biohacking')}
        >
          <div className="btn-title">Biohacking Enhancement</div>
          <div className="btn-subtitle">Organism Enhancement</div>
        </button>
      </div>

      {/* Gene/System Selectors */}
      <div className="parameter-selector">
        {activeExperiment === 'medical' && (
          <div className="param-group">
            <label>Select Target Gene:</label>
            <div className="gene-options">
              {['HBB', 'INS', 'CFTR', 'TP53', 'APOB'].map(gene => (
                <button
                  key={gene}
                  className={`gene-option ${selectedGene === gene ? 'selected' : ''}`}
                  onClick={() => setSelectedGene(gene)}
                >
                  {geneDatabase[gene].name}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeExperiment === 'biohacking' && (
          <div className="param-group">
            <label>Select Enhancement System:</label>
            <div className="gene-options">
              {['CHLOROPLAST', 'SENSORY', 'METABOLISM'].map(system => (
                <button
                  key={system}
                  className={`gene-option ${selectedBiohack === system ? 'selected' : ''}`}
                  onClick={() => setSelectedBiohack(system)}
                >
                  {geneDatabase[system].name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stage Display */}
      <div className="stages-container">
        {currentExperiment.stages.map((stage, index) => (
          <div 
            key={index}
            ref={el => stageRefs.current[index] = el}
            className="stage-display"
          >
            <div className="stage-header">
              <div className="stage-counter">
                <span className="stage-num">{index + 1}</span>
                <span className="stage-total">of {currentExperiment.stages.length}</span>
              </div>
              <h2>{stage.name}</h2>
              <p className="stage-duration">Duration: {stage.duration}</p>
            </div>

            <div className="stage-content">
              {/* Left: Details Sidebar */}
              <div className="stage-details-sidebar">
                <div className="details-header">
                  <h3>Technical Details</h3>
                </div>
                <div className="details-list">
                  <p className="stage-description">{stage.details}</p>
                  <ul>
                    {stage.keyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Visualization */}
              <div className="stage-visualization">
                <StageVisualization 
                  type={stage.visualization}
                  progress={animationProgress}
                  experiment={activeExperiment}
                  geneData={activeExperiment === 'medical' ? geneDatabase[selectedGene] : geneDatabase[selectedBiohack]}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="stage-navigation">
              <button 
                className="nav-btn prev"
                onClick={() => {
                  if (index > 0) {
                    setCurrentStage(index - 1);
                    stageRefs.current[index - 1]?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                disabled={index === 0}
              >
                ← Previous Stage
              </button>
              <button 
                className="nav-btn next"
                onClick={() => {
                  if (index < currentExperiment.stages.length - 1) {
                    setCurrentStage(index + 1);
                    stageRefs.current[index + 1]?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                disabled={index === currentExperiment.stages.length - 1}
              >
                Next Stage →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Information Section */}
      <div className="demo-info-section">
        <h2>How to Use This Simulation</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Select an Experiment</h3>
            <p>Choose between the three phases: foundational entanglement procedure, medical correction, or biohacking enhancement.</p>
          </div>
          <div className="info-card">
            <h3>Customize Parameters</h3>
            <p>Select specific genes or enhancement systems to see how the procedure adapts to different biological targets.</p>
          </div>
          <div className="info-card">
            <h3>Progress Through Stages</h3>
            <p>Each stage displays with its own visualization and timeline. Scroll through to see the complete procedure.</p>
          </div>
          <div className="info-card">
            <h3>Realistic Timelines</h3>
            <p>View how long each adaptation takes: from expression to full phenotypic change.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Visualization component for each stage
function StageVisualization({ type, progress, experiment, geneData }) {
  switch(type) {
    case 'initial-cells':
      return (
        <div className="visualization">
          <h4>Independent Cellular State</h4>
          <div className="cells-grid-vis">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="cell-vis independent"></div>
            ))}
          </div>
          <p className="vis-label">Each cell operates independently</p>
        </div>
      );

    case 'frohlich-coherence':
      return (
        <div className="visualization">
          <h4>Fröhlich Coherence Activation</h4>
          <div className="coherence-visualization">
            <div className="microtubule-representation">
              <div className="oscillation" style={{ opacity: Math.sin(progress * Math.PI / 50) + 0.5 }}></div>
            </div>
            <div className="thermal-energy-indicator">
              <div className="energy-level" style={{ height: `${Math.sin(progress * Math.PI / 50) * 50 + 50}%` }}></div>
            </div>
          </div>
          <p className="vis-label">Thermal energy pumping microtubules into synchronized vibration</p>
        </div>
      );

    case 'nir-pulse-animation':
      return (
        <div className="visualization">
          <h4>Near-Infrared Pulse Excitation</h4>
          <div className="nir-visualization">
            <div className="tissue-layer"></div>
            <div className="photon-pulse" style={{ opacity: Math.sin(progress * Math.PI / 50) }}></div>
            <div className="eyfp-response" style={{ transform: `scale(${0.8 + Math.sin(progress * Math.PI / 50) * 0.2})` }}></div>
          </div>
          <p className="vis-label">780-1000nm photons penetrate tissue, exciting EYFP qubits</p>
        </div>
      );

    case 'quantum-collapse-animation':
      return (
        <div className="visualization">
          <h4>Quantum Wave Function Collapse</h4>
          <div className="collapse-visualization">
            <div className="wave-function" style={{ opacity: 1 - progress / 100 }}></div>
            <div className="particles-entangled">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i} 
                  className="particle"
                  style={{ 
                    left: `${(Math.sin(progress * Math.PI / 50 + i) * 40 + 50)}%`,
                    opacity: Math.min(1, progress / 50)
                  }}
                ></div>
              ))}
            </div>
          </div>
          <p className="vis-label">All qubits synchronize to single quantum state</p>
        </div>
      );

    case 'quantum-network-animation':
      return (
        <div className="visualization">
          <h4>Organism-Wide Quantum Network</h4>
          <div className="network-visualization">
            <div className="network-nodes">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="node"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `pulse 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
            <svg className="network-connections" viewBox="0 0 400 300">
              {Array.from({ length: 15 }).map((_, i) => (
                <line
                  key={i}
                  x1={Math.random() * 400}
                  y1={Math.random() * 300}
                  x2={Math.random() * 400}
                  y2={Math.random() * 300}
                  stroke="var(--accent-orange)"
                  strokeWidth="1"
                  opacity={Math.sin(progress * Math.PI / 50) * 0.5 + 0.5}
                />
              ))}
            </svg>
          </div>
          <p className="vis-label">37 trillion cells connected via quantum coherence</p>
        </div>
      );

    case 'disease-visualization':
      return (
        <div className="visualization">
          <h4>Disease State Baseline</h4>
          <div className="gene-comparison">
            <div className="gene-panel">
              <h5>Mutant Gene</h5>
              <div className="dna-sequence">{geneData.mutation}</div>
              <p className="mutation-effect">{geneData.issue}</p>
            </div>
          </div>
        </div>
      );

    case 'entanglement-spread':
      return (
        <div className="visualization">
          <h4>Entanglement Spread</h4>
          <div className="cells-grid-vis">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className={`cell-vis ${i < progress / 8 ? 'entangled' : 'independent'}`}
              ></div>
            ))}
          </div>
          <p className="vis-label">{Math.round(progress / 8) * 8}% of cells entangled</p>
        </div>
      );

    case 'prime-editor-injection':
      return (
        <div className="visualization">
          <h4>Prime Editor Introduction</h4>
          <div className="injection-visualization">
            <div className="target-cell"></div>
            <div className="editor-particle" style={{ opacity: Math.sin(progress * Math.PI / 50) }}></div>
          </div>
          <p className="vis-label">Single cell receives editing enzyme</p>
        </div>
      );

    case 'quantum-measurement-animation':
      return (
        <div className="visualization">
          <h4>Quantum Measurement Cascade</h4>
          <div className="cascade-visualization">
            <div className="central-cell"></div>
            <div className="cascade-wave" style={{ transform: `scale(${1 + progress / 50})`, opacity: Math.max(0, 1 - progress / 80) }}></div>
          </div>
          <p className="vis-label">Edit propagates to all entangled cells instantaneously</p>
        </div>
      );

    case 'adaptation-timeline':
      return (
        <div className="visualization">
          <h4>Post-Edit Adaptation Timeline</h4>
          <div className="timeline-visualization">
            <div className="timeline-bar">
              <div className="timeline-phase expression" style={{ width: '25%' }}>
                <span>Expression</span>
              </div>
              <div className="timeline-phase adaptation" style={{ width: '35%' }}>
                <span>Adaptation</span>
              </div>
              <div className="timeline-phase phenotype" style={{ width: '40%' }}>
                <span>Phenotype</span>
              </div>
            </div>
            <div className="timeline-labels">
              <span>{geneData.expressionTime}</span>
              <span>{geneData.adaptationTime}</span>
              <span>{geneData.phenotypeTime}</span>
            </div>
          </div>
        </div>
      );

    case 'native-biology':
      return (
        <div className="visualization">
          <h4>Native Mammalian Phenotype</h4>
          <div className="cells-grid-vis">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="cell-vis native"></div>
            ))}
          </div>
          <p className="vis-label">Standard mammalian cells without enhancement</p>
        </div>
      );

    case 'biohack-entanglement-spread':
      return (
        <div className="visualization">
          <h4>Entanglement Establishment</h4>
          <div className="cells-grid-vis">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className={`cell-vis ${i < progress / 8 ? 'entangled' : 'native'}`}
              ></div>
            ))}
          </div>
          <p className="vis-label">{Math.round(progress / 8) * 8}% of cells synchronized</p>
        </div>
      );

    case 'cas13-editing':
      return (
        <div className="visualization">
          <h4>RNA Base Editing</h4>
          <div className="rna-editing-viz">
            <div className="rna-strand">
              <span className="rna-base">A</span>
              <span className="rna-base">→</span>
              <span className="rna-base edited">I</span>
            </div>
            <div className="rna-strand">
              <span className="rna-base">C</span>
              <span className="rna-base">→</span>
              <span className="rna-base edited">U</span>
            </div>
          </div>
          <p className="vis-label">Temporary immune tolerance via RNA editing</p>
        </div>
      );

    case 'enhancement-insertion':
      return (
        <div className="visualization">
          <h4>Enhancement Gene Insertion</h4>
          <div className="insertion-viz">
            <div className="dna-original"></div>
            <div className="plus-sign">+</div>
            <div className="enhancement-sequence"></div>
            <div className="arrow">=</div>
            <div className="dna-enhanced"></div>
          </div>
          <p className="vis-label">{geneData.name} pathway integrated</p>
        </div>
      );

    case 'integration-timeline':
      return (
        <div className="visualization">
          <h4>Enhancement Integration Timeline</h4>
          <div className="timeline-visualization">
            <div className="timeline-bar">
              <div className="timeline-phase expression" style={{ width: '20%' }}>
                <span>Tolerance</span>
              </div>
              <div className="timeline-phase adaptation" style={{ width: '30%' }}>
                <span>Expression</span>
              </div>
              <div className="timeline-phase phenotype" style={{ width: '50%' }}>
                <span>Integration</span>
              </div>
            </div>
            <div className="timeline-labels">
              <span>24-72h</span>
              <span>{geneData.expressionTime}</span>
              <span>{geneData.phenotypeTime}</span>
            </div>
          </div>
        </div>
      );

    default:
      return <div className="visualization">No visualization available</div>;
  }
}

export default Demo;
