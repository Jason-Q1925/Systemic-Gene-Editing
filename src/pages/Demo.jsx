import React, { useState, useEffect } from 'react';
import './Demo.css';

function Demo() {
  const [activeExperiment, setActiveExperiment] = useState('entanglement');
  const [experimentStage, setExperimentStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [medicalGene, setMedicalGene] = useState('HBB');
  const [biohackGene, setBiohackGene] = useState('CHLOROPLAST');
  const [cellStates, setCellStates] = useState([]);
  const [simulationData, setSimulationData] = useState({
    cellsEntangled: 0,
    coheenceLevel: 0,
    editPropagation: 0,
    affectedCells: 0,
  });

  const experiments = {
    entanglement: {
      title: 'Cellular Entanglement Procedure',
      description: 'Step-by-step activation of quantum entanglement across cellular systems',
      stages: [
        {
          name: 'Initial State',
          description: 'Cells with EYFP-Prime Editor and EYFP-Cas13 fusion proteins. Each cell operates independently.',
          visualization: 'cells-initial',
          details: [
            '• Prime Editor: DNA cutting enzyme fused to EYFP qubit',
            '• Cas13: RNA-targeting enzyme fused to EYFP qubit',
            '• EYFP: Enhanced Yellow Fluorescent Protein (spin qubit carrier)',
            '• Each cell: ~10 trillion copies of editing machinery per cell'
          ]
        },
        {
          name: 'Fröhlich Coherence Activation',
          description: 'Thermal energy pumps microtubules into synchronized vibration, creating Fröhlich Bose-Einstein condensate.',
          visualization: 'frohlich-activation',
          details: [
            '• Ambient thermal energy: 37°C mammalian temperature',
            '• Microtubules: Begin synchronized oscillation',
            '• Frequency: ~10¹⁴ Hz (coherent pumping rate)',
            '• Coherence: Forms ordered water lattice protection',
            '• Decoherence shields: Myelin sheath, enzyme pockets, ordered water'
          ]
        },
        {
          name: 'Near-Infrared Pulse Initiation',
          description: 'Calibrated near-infrared optical and microwave pulses excite EYFP qubits simultaneously.',
          visualization: 'nir-pulse',
          details: [
            '• Wavelength: 780-1000 nm (near-infrared)',
            '• Penetration depth: 5-10 mm into mammalian tissue',
            '• Pulse duration: 100 femtoseconds',
            '• Microwave frequency: 10¹⁰ Hz (qubit excitation)',
            '• Effect: EYFP triplet state → optically addressable spin qubit'
          ]
        },
        {
          name: 'Quantum Entanglement Collapse',
          description: 'EYFP qubits collapse into synchronized entangled state. Prime Editor and Cas13 surrender individual identities.',
          visualization: 'quantum-collapse',
          details: [
            '• Quantum measurement: Forces superposition collapse',
            '• Entanglement: All EYFP qubits now correlated',
            '• Wave function: Single unified quantum state across organism',
            '• Coherence time: ~100 microseconds (maintained by Fröhlich pumping)',
            '• Network: Biophoton exchange sustains re-entanglement'
          ]
        },
        {
          name: 'Organism-Wide Quantum Network',
          description: 'Cellular entanglement established. Single edit now propagates organism-wide through quantum measurement.',
          visualization: 'quantum-network',
          details: [
            '• Entangled cells: ~37 trillion cells in human body',
            '• Wave function: Unified across all cellular DNA',
            '• Coherence: Sustained by continuous Fröhlich mechanism',
            '• Communication: Biophoton-mediated re-entanglement',
            '• Measurement collapse: Forces quantum state synchronization'
          ]
        }
      ]
    },
    medical: {
      title: 'Medical Experiment: Genetic Correction',
      description: 'Demonstrating systemic HBB gene correction in sickle cell disease',
      stages: [
        {
          name: 'Disease State',
          description: 'Tissue culture with HBB mutation (sickle cell disease phenotype)',
          visualization: 'disease-state',
          details: [
            `• Gene target: ${medicalGene}`,
            '• Mutation: Glutamic acid → Valine at position 6',
            '• Protein: Hemoglobin β-chain',
            '• Effect: Polymerization under low oxygen → sickle shape',
            '• Tissue culture: Red blood cells showing sickling'
          ]
        },
        {
          name: 'Entanglement Establishment',
          description: 'Tissue culture pumped into entangled state using near-IR pulses',
          visualization: 'medical-entanglement',
          details: [
            '• All cells: Brought into Fröhlich coherent state',
            '• EYFP qubits: Excited via near-IR optical pulse',
            '• Entanglement: All cellular DNA synchronized',
            '• Duration: Maintained for duration of experiment',
            '• Cells affected: 100% of tissue culture'
          ]
        },
        {
          name: 'Prime Editor Introduction (Single Cell)',
          description: 'Prime Editor targeting HBB mutation introduced to single cell in culture',
          visualization: 'prime-editor-intro',
          details: [
            `• Target: ${medicalGene} - CTG → GAG base conversion (sickle → normal)`,
            '• Mechanism: Reverse transcriptase synthesizes correction',
            '• Delivery: Microinjection into single cell',
            '• Specificity: ~95% on-target efficiency',
            '• Cell marked: Single red cell in vast culture highlighted'
          ]
        },
        {
          name: 'Quantum Measurement & Collapse',
          description: 'Prime Editor reverse transcriptase reads coherent DNA proton qubits, forcing quantum collapse',
          visualization: 'quantum-measurement',
          details: [
            '• Measurement: Reading coherent DNA proton qubits',
            '• HBB sequence: CTG → GAG conversion in single cell',
            '• Collapse: Forces all entangled cells into same state',
            '• Information: Genetic edit propagates via quantum measurement',
            '• Timescale: Instantaneous (speed of quantum entanglement)'
          ]
        },
        {
          name: 'Bystander Cell Correction (Positive Result)',
          description: 'Unedited "bystander" cells spontaneously exhibit corrected HBB sequence',
          visualization: 'bystander-correction',
          details: [
            '• All cells: Now possess corrected HBB gene',
            '• Sequence: GAG (normal hemoglobin)',
            '• Observation: No cells retain original CTG mutation',
            '• Mitosis: Daughter cells inherit corrected DNA',
            '• Proof: Quantum entanglement successfully propagated edit'
          ]
        }
      ]
    },
    biohacking: {
      title: 'Biohacking Experiment: Planimal Cells',
      description: 'Integration of photosynthetic machinery into mammalian tissue',
      stages: [
        {
          name: 'Planimal Tissue Setup',
          description: 'Mammalian tissue model engineered with Synechococcus elongatus cyanobacteria chloroplast machinery',
          visualization: 'planimal-setup',
          details: [
            `• Gene target: ${biohackGene}`,
            '• Chloroplast machinery: From Synechococcus elongatus',
            '• Integration: Transfected into mammalian tissue',
            '• Status: Non-functional without host cell adaptation',
            '• Challenge: Immune system recognizes foreign proteins'
          ]
        },
        {
          name: 'Entanglement Establishment',
          description: 'Tissue pumped into entangled state via near-IR pulses',
          visualization: 'biohack-entanglement',
          details: [
            '• All cells: Synchronized via Fröhlich coherence',
            '• Quantum network: Unified cellular DNA wave function',
            '• Coherence: Sustained by continuous thermal energy pumping',
            '• Scope: All cells in tissue culture entangled',
            '• Status: Ready for systemic RNA editing'
          ]
        },
        {
          name: 'Cas13 RNA Editor Introduction',
          description: 'CRISPR-Cas13 base editor (A-to-I/C-to-U) targets immune rejection genes in single cell',
          visualization: 'cas13-intro',
          details: [
            '• Mechanism: REPAIR or RESCUE base editor',
            '• Target RNA: Immune MHC and TCR rejection genes',
            '• Conversion: A-to-I or C-to-U RNA base pairing changes',
            '• Effect: Temporarily suppresses immune rejection',
            '• Duration: Edit persists until cell division'
          ]
        },
        {
          name: 'Quantum Collapse & RNA Propagation',
          description: 'Cas13 edit collapses quantum state. All cells adopt modified immune tolerance protein expression.',
          visualization: 'rna-propagation',
          details: [
            '• Measurement: Cas13 RNA base conversion in single cell',
            '• Collapse: Quantum measurement forces all cells to adopt edit',
            '• Protein expression: Immune tolerance proteins now expressed',
            '• Duration: Lasts until transcripts degraded (24-72 hours)',
            '• Scope: Organism-wide tolerance to foreign chloroplast'
          ]
        },
        {
          name: 'Hypoxia Challenge',
          description: 'Tissue subjected to severe low-oxygen conditions. Near-IR light stimulates chloroplast photosynthesis.',
          visualization: 'hypoxia-challenge',
          details: [
            '• Oxygen level: <5% (severe hypoxia)',
            '• Duration: 15 minutes (mammalian tolerance limit)',
            '• Stimulus: Near-IR light penetrates tissue (780-1000 nm)',
            '• Photosynthesis: Chloroplasts activated by light',
            '• Reaction: H₂O + CO₂ + light → O₂ + glucose'
          ]
        },
        {
          name: 'Positive Result: Oxygen Production',
          description: 'Tissue produces oxygen internally and survives hypoxia. Quantum entanglement edit successful.',
          visualization: 'oxygen-production',
          details: [
            '• Oxygen production: Detected via sensor',
            '• Source: Internal chloroplast photosynthesis',
            '• Survival: Tissue viable after 15-minute hypoxia',
            '• Implication: Mammalian cells can now photosynthesize',
            '• Proof: Systemic quantum RNA edit successful across tissue'
          ]
        }
      ]
    }
  };

  const currentExperiment = experiments[activeExperiment];
  const currentStage = currentExperiment.stages[experimentStage];

  // Initialize cells on component mount
  useEffect(() => {
    const initialCells = Array(12).fill(null).map((_, i) => ({
      id: i,
      entangled: false,
      edited: false,
      stage: 0
    }));
    setCellStates(initialCells);
  }, []);

  // Run simulation
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSimulationData(prev => {
        const newData = {
          cellsEntangled: Math.min(prev.cellsEntangled + 2, 100),
          coherenceLevel: Math.min(prev.coherenceLevel + 1.5, 100),
          editPropagation: Math.min(prev.editPropagation + 3, 100),
          affectedCells: Math.min(prev.affectedCells + Math.floor(cellStates.length * 0.08), cellStates.length)
        };

        // Update cell states based on new data
        setCellStates(prevCells =>
          prevCells.map((cell, i) => ({
            ...cell,
            entangled: newData.cellsEntangled > i * (100 / cellStates.length),
            edited: newData.editPropagation > i * (100 / cellStates.length)
          }))
        );

        return newData;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isRunning, cellStates.length]);

  const handleNextStage = () => {
    if (experimentStage < currentExperiment.stages.length - 1) {
      setExperimentStage(experimentStage + 1);
      setIsRunning(false);
      setSimulationData({ cellsEntangled: 0, coherenceLevel: 0, editPropagation: 0, affectedCells: 0 });
    }
  };

  const handlePrevStage = () => {
    if (experimentStage > 0) {
      setExperimentStage(experimentStage - 1);
      setIsRunning(false);
      setSimulationData({ cellsEntangled: 0, coherenceLevel: 0, editPropagation: 0, affectedCells: 0 });
    }
  };

  const handleReset = () => {
    setExperimentStage(0);
    setIsRunning(false);
    setSimulationData({ cellsEntangled: 0, coherenceLevel: 0, editPropagation: 0, affectedCells: 0 });
    setCellStates(cellStates.map(c => ({ ...c, entangled: false, edited: false })));
  };

  return (
    <div className="demo">
      <div className="demo-header">
        <h1>Interactive Quantum Entanglement Simulation</h1>
        <p>Accurately simulating Section 7: Cellular Entanglement Procedure & Experiments</p>
      </div>

      <div className="demo-container">
        {/* Experiment Selector */}
        <div className="experiment-selector">
          <button 
            className={`experiment-btn ${activeExperiment === 'entanglement' ? 'active' : ''}`}
            onClick={() => {
              setActiveExperiment('entanglement');
              handleReset();
            }}
          >
            <div className="btn-label">Cellular Entanglement</div>
            <div className="btn-desc">Procedure</div>
          </button>
          <button 
            className={`experiment-btn ${activeExperiment === 'medical' ? 'active' : ''}`}
            onClick={() => {
              setActiveExperiment('medical');
              handleReset();
            }}
          >
            <div className="btn-label">Medical Experiment</div>
            <div className="btn-desc">Gene Correction</div>
          </button>
          <button 
            className={`experiment-btn ${activeExperiment === 'biohacking' ? 'active' : ''}`}
            onClick={() => {
              setActiveExperiment('biohacking');
              handleReset();
            }}
          >
            <div className="btn-label">Biohacking Experiment</div>
            <div className="btn-desc">Planimal Cells</div>
          </button>
        </div>

        {/* Main Simulation Area */}
        <div className="simulation-area">
          {/* Left Panel - Stage Info */}
          <div className="stage-info-panel">
            <h2>{currentStage.name}</h2>
            <p className="stage-description">{currentStage.description}</p>
            
            <div className="stage-details">
              <h4>Technical Details:</h4>
              <ul>
                {currentStage.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            {/* Gene Selectors */}
            {activeExperiment === 'medical' && (
              <div className="gene-selector">
                <label>Target Gene:</label>
                <select value={medicalGene} onChange={(e) => setMedicalGene(e.target.value)}>
                  <option value="HBB">HBB (Sickle Cell)</option>
                  <option value="INS">INS (Diabetes)</option>
                  <option value="CFTR">CFTR (Cystic Fibrosis)</option>
                </select>
              </div>
            )}

            {activeExperiment === 'biohacking' && (
              <div className="gene-selector">
                <label>Target System:</label>
                <select value={biohackGene} onChange={(e) => setBiohackGene(e.target.value)}>
                  <option value="CHLOROPLAST">Chloroplast Integration</option>
                  <option value="SENSORY">Sensory Enhancement</option>
                  <option value="METABOLISM">Metabolic Redesign</option>
                </select>
              </div>
            )}
          </div>

          {/* Right Panel - Visualization */}
          <div className="visualization-panel">
            <div className="visualization-container">
              {/* Cell Visualization */}
              <div className="cells-visualization">
                <h4>Cellular States</h4>
                <div className="cells-grid">
                  {cellStates.map((cell) => (
                    <div
                      key={cell.id}
                      className={`cell ${cell.entangled ? 'entangled' : ''} ${cell.edited ? 'edited' : ''}`}
                      title={`Cell ${cell.id}: ${cell.entangled ? 'Entangled ' : ''}${cell.edited ? 'Edited ' : ''}${!cell.entangled && !cell.edited ? 'Normal' : ''}`}
                    ></div>
                  ))}
                </div>
                <div className="cell-legend">
                  <span><div className="cell-legend-item normal"></div> Normal</span>
                  <span><div className="cell-legend-item entangled"></div> Entangled</span>
                  <span><div className="cell-legend-item edited"></div> Edited</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="metrics">
                <div className="metric">
                  <div className="metric-label">Cells Entangled</div>
                  <div className="metric-value">{Math.round(simulationData.cellsEntangled)}%</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: `${simulationData.cellsEntangled}%` }}></div>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-label">Coherence Level</div>
                  <div className="metric-value">{Math.round(simulationData.coherenceLevel)}%</div>
                  <div className="metric-bar">
                    <div className="metric-fill coherence" style={{ width: `${simulationData.coherenceLevel}%` }}></div>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-label">Edit Propagation</div>
                  <div className="metric-value">{Math.round(simulationData.editPropagation)}%</div>
                  <div className="metric-bar">
                    <div className="metric-fill edit" style={{ width: `${simulationData.editPropagation}%` }}></div>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-label">Affected Cells</div>
                  <div className="metric-value">{simulationData.affectedCells}/{cellStates.length}</div>
                </div>
              </div>

              {/* DNA/RNA Visualization */}
              <div className="dna-visualization">
                <h4>Molecular State</h4>
                <div className="dna-container">
                  <div className="dna-strand before">
                    <div className="dna-label">Before Edit</div>
                    <div className="dna-sequence">
                      {activeExperiment === 'medical' ? 'CTG...' : 'MHC-I...'}
                    </div>
                  </div>
                  <div className="dna-arrow">→</div>
                  <div className="dna-strand after">
                    <div className="dna-label">After Edit</div>
                    <div className="dna-sequence">
                      {activeExperiment === 'medical' ? 'GAG...' : 'MODIFIED...'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="demo-controls">
          <div className="stage-counter">
            Stage {experimentStage + 1} of {currentExperiment.stages.length}
          </div>

          <div className="button-group">
            <button 
              className="btn btn-sm"
              onClick={handlePrevStage}
              disabled={experimentStage === 0}
            >
              ← Previous
            </button>

            <button 
              className={`btn btn-sm btn-primary ${isRunning ? 'running' : ''}`}
              onClick={() => setIsRunning(!isRunning)}
            >
              {isRunning ? '⏸ Pause' : '▶ Run Simulation'}
            </button>

            <button 
              className="btn btn-sm"
              onClick={handleNextStage}
              disabled={experimentStage === currentExperiment.stages.length - 1}
            >
              Next →
            </button>

            <button 
              className="btn btn-sm"
              onClick={handleReset}
              style={{ marginLeft: 'auto' }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Information Panel */}
      <div className="info-section">
        <h3>How to Use This Simulation</h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>Select an Experiment</h4>
            <p>Choose between the three Section 7 experiments: cellular entanglement procedure, medical gene correction, or biohacking planimal cells.</p>
          </div>
          <div className="info-card">
            <h4>Progress Through Stages</h4>
            <p>Click "Next" to advance through detailed procedural steps, or "Previous" to review earlier stages.</p>
          </div>
          <div className="info-card">
            <h4>Run Simulations</h4>
            <p>Press "Run Simulation" to see real-time cellular state changes, entanglement metrics, and edit propagation visualization.</p>
          </div>
          <div className="info-card">
            <h4>Vary Parameters</h4>
            <p>Select different target genes or systems to see how the entanglement procedure adapts to different genetic targets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
