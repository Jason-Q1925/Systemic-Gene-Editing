import React from 'react';
import './Theory.css';

function Theory() {
  return (
    <div className="theory">
      <div className="theory-header">
        <h1>Complete Theoretical Framework</h1>
        <p>Full article: Efficient Gene Editing Delivery System for Multiple Cells Using Quantum Entanglement</p>
      </div>

      <div className="theory-container container">
        <div className="toc-section">
          <h3>Table of Contents</h3>
          <ol className="toc">
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#problem">The Problem Space</a>
              <ol>
                <li><a href="#medical">The Medical Industry</a></li>
                <li><a href="#biohacking">The Biohacking Industry</a></li>
              </ol>
            </li>
            <li><a href="#background">Background & Existing Science</a>
              <ol>
                <li><a href="#entanglement">Quantum Entanglement</a></li>
                <li><a href="#biology">Quantum Biology</a></li>
                <li><a href="#tools">Current Gene Editing Tools</a></li>
                <li><a href="#existing">Existing Genetic Biohacking</a></li>
              </ol>
            </li>
            <li><a href="#hypothesis">The Hypothesis</a></li>
            <li><a href="#applications">Applications</a></li>
            <li><a href="#methodology">Proposed Methodology</a></li>
            <li><a href="#challenges">Challenges & Open Questions</a></li>
            <li><a href="#vision">Vision & Impact</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
          </ol>
        </div>

        <div className="article-content">
          <section id="abstract" className="article-section">
            <h2>1. Abstract</h2>
            <p>
              Quantum biology is an emerging field that continues to unlock new therapeutic possibilities. In quantum physics, 
              quantum entanglement occurs when two particles share a correlated quantum state. Entanglement can be induced through 
              various methods: cascade transitions, parametric downconversion, photon absorption, or direct particle interaction.
            </p>
            <p>
              Quantum biology applies quantum mechanical principles to explain biological processes that classical physics alone 
              cannot account for, for example consciousness. This article proposes a theoretical framework in which quantum entanglement 
              is established between all cells of an organism.
            </p>
            <p className="highlight-box">
              <strong>Key Proposal:</strong> If sustained, such cellular entanglement could theoretically allow a targeted genetic 
              edit introduced to a single cell to propagate universally throughout the organism.
            </p>
            <p>
              We propose that this may occur through the synergy of protein-based qubits (Enhanced Yellow Fluorescent Proteins), 
              ordered water lattices within cells, and decoherence shields that protect quantum coherence from thermal disruption. 
              The Fröhlich mechanism - a process by which biological systems harness ambient thermal energy to maintain macroscopic 
              quantum coherence - would sustain this entanglement network.
            </p>
            <p>
              While significant technical and experimental challenges remain, this concept could revolutionize both medical genetics 
              (enabling systemic treatment of late-stage diseases) and biohacking (permitting organism-wide phenotypic enhancement).
            </p>
          </section>

          <section id="intro" className="article-section">
            <h2>2. Introduction</h2>
            <p>
              The primary bottleneck in modern genetic engineering is no longer the precision of the edit itself, but the logistics 
              of delivery. Our current "shipping" methods - such as lentiviral vectors and lipid nanoparticles - are constrained by 
              classical physics. They are too slow, too localized, and frequently trigger immune responses. To achieve systemic gene 
              editing - the ability to edit genes across trillions of cells simultaneously - we must move beyond the physical transport 
              of particles and toward the transfer of genetic information.
            </p>
            <p>
              Classically, biological systems were thought too "warm and noisy" to support quantum effects. However, quantum biology 
              is challenging this assumption. Nature has already evolved to exploit quantum coherence and entanglement for extraordinary 
              efficiency - for example, photosynthesis achieves near-perfect energy transfer through quantum tunneling & energy-efficient 
              coherence, and emerging evidence suggests human consciousness may depend on quantum processes in neural microtubules.
            </p>
            <p className="highlight-box">
              <strong>Central Question:</strong> What if the human body functions not as a collection of isolated cellular "bags," 
              but as a synchronized quantum network? If so, the delivery problem might fundamentally be a synchronization problem, 
              rather than a vector problem.
            </p>
          </section>

          <section id="problem" className="article-section">
            <h2>3. The Problem Space</h2>
            
            <h3 id="medical">3.1 The Medical Industry</h3>
            <p>
              In the medical field, a current gap that exists in treating and curing diseases are disease development. Some disorders 
              are uncurable, and often untreatable at their later stages, for example cancer or diabetes.
            </p>
            <p>
              The current genetic therapies involve a select type of edited cell. For example, with cancer, Chimeric Antigen Receptor 
              (CAR) T-cells are implemented - specialized and personalized cells designed to bind to and attack cancer cells. With 
              diabetes, stem cells edited by CRISPR-Cas9 are designed to produce insulin, to make up for the lack of these 
              insulin-producing beta cells.
            </p>
            <p>
              However, by the time diseases are in late stages, it has systemically affected almost the entire body, making the damage 
              widespread. Most therapies involving genetics for these diseases are too localized and too slow, making the treatment 
              inefficient. In fact, studies show that a four-week delay of treatment can raise the risk of mortality by approximately 
              6% to 13% (Hanna et al., 2020).
            </p>

            <h3 id="biohacking">3.2 The Biohacking Industry</h3>
            <p>
              Most biohacking advancements that use genetics aren't always bodily enhancements. The reality of our current capabilities 
              in biohacking is that they are mainly therapies for genetic restoration, rather than true enhancement.
            </p>
            <p>
              The reason biohacking isn't able to create significantly enhanced phenotypes is mainly due to the delivery bottleneck. 
              Even if a CRISPR-edited vector was injected into an organism, the maximum amount of cells it could reach would be 1% of 
              the total number of cells in the body, which results in little to no noticeable change in phenotype.
            </p>
          </section>

          <section id="background" className="article-section">
            <h2>4. Background & Existing Science</h2>
            
            <h3 id="entanglement">4.1 Quantum Entanglement and Quantum Biology</h3>
            <p>
              Quantum entanglement is a fundamental concept in quantum physics that happens when two particles are entangled together. 
              Quantum entanglement can happen in a multitude of ways:
            </p>
            
            <div className="science-box">
              <h4>Entanglement by Birth</h4>
              <p>
                When an excited atom emits two photons in opposite directions, conservation of angular momentum requires their 
                polarizations to be perfectly correlated, creating an entangled pair. Knowing the state of one photon automatically 
                tells you the state of the other, regardless of distance.
              </p>
            </div>

            <div className="science-box">
              <h4>Parametric Downconversion</h4>
              <p>
                This method uses non-linear optical crystals such as beta barium borate. When a high-energy violet/blue photon enters 
                the crystal, it splits into two lower-energy near-infrared photons. Due to conservation of momentum and polarization, 
                the resulting pair is naturally entangled.
              </p>
            </div>

            <h3 id="biology">4.2 Where Quantum Entanglement is Shown in Biology</h3>
            <p>
              Research on quantum biology has shown that quantum entanglement potentially plays a role in biological functions. 
              The myelin sheath - the fatty, insulating membrane wrapping around a neuron's axon - can act as a "chamber" that 
              amplifies infrared photons. Within this chamber, vibrations of carbon-hydrogen (CH) bonds undergo cascade emission, 
              spontaneously generating large numbers of highly correlated, entangled photon pairs (biphotons).
            </p>
            <p>
              These entangled photons travel through the brain's biochemical ionic tides and link widespread cellular components, 
              such as potassium (K+) ion channels. Because the channels are quantumly linked, when a neuron activates one channel, 
              it can instantaneously influence the state of others, providing a mechanism for over-distance neuronal synchronization 
              and quantum information transfer throughout the brain (Liu et al., 2024).
            </p>

            <h3 id="tools">4.3 Current Gene Editing Tools</h3>
            <p>
              <strong>Prime Editing:</strong> Prime editing is a versatile and highly precise gene-editing technology introduced in 2019. 
              It allows for small insertions, deletions, and all 12 possible base-to-base conversions. It is often described as a 
              "search-and-replace" tool for the genome.
            </p>
            <p>
              <strong>CRISPR-Cas13:</strong> Cas13 is a specialized class 2 type VI gene-editing system that uniquely targets and cleaves 
              RNA rather than DNA. Because it modifies RNA transcripts, it provides a major safety advantage over DNA-targeting systems 
              like Cas9: it avoids introducing double-strand breaks into the genome.
            </p>
          </section>

          <section id="hypothesis" className="article-section">
            <h2>5. The Hypothesis</h2>
            <p className="hypothesis-statement">
              <strong>If quantum entanglement is established between all cells of an organism, then a targeted genetic edit to one cell 
              can propagate universally to the other cells of an organism.</strong>
            </p>

            <h3>5.1 Justification</h3>
            <p>
              Despite the biological environment being hostile to quantum coherence, there are components in cells that can act as 
              "pockets" for quantum effects. Some enzymes, such as type II restriction endonucleases, act as "decoherence shields" - 
              they create decoherence-free spaces where quantum entanglement can occur without disruption.
            </p>
            <p>
              Another naturally occurring quantum coherence pocket is ordered water. Surface charges on cytoskeletal structures, such 
              as actin and microtubules, bind and order polar water molecules. This transforms the cytoplasm from a simple liquid into 
              a crystal-like structure that provides a more stable environment for quantum states.
            </p>

            <h3>5.2 Core Assumptions</h3>
            <div className="assumption-box">
              <h4>1. Organism-Wide Bose-Einstein Condensation</h4>
              <p>
                DNA across all cells could be brought into a coherent state where they surrender their individual identities, forming 
                a macroscopic quantum coherent system. The DNA across the entire body would be governed by a single quantum wave function.
              </p>
            </div>

            <div className="assumption-box">
              <h4>2. Systemic Decoherence Shielding</h4>
              <p>
                The organism must possess flawless, systemic decoherence shields to protect organism-wide entanglement from thermal 
                disruption. Examples include ordered water lattice structures within cells.
              </p>
            </div>

            <div className="assumption-box">
              <h4>3. The Fröhlich Mechanism</h4>
              <p>
                The organism utilizes active coherent pumping energy to generate and sustain macroscopic coherence. In biological 
                structures with periodic organization, such as the tubulin proteins making up microtubules, random thermal energy is 
                utilized for laser-like coherent pumping.
              </p>
            </div>

            <div className="assumption-box">
              <h4>4. Continuous Re-entanglement</h4>
              <p>
                Standard quantum measurement permanently destroys the entangled connection. To allow for an edit to take hold without 
                permanently severing quantum links, the organism must have a natural mechanism for continuous "re-entanglement," 
                mediated by biophotons.
              </p>
            </div>

            <div className="assumption-box">
              <h4>5. Non-Local Transfer of Complex Information</h4>
              <p>
                The quantum connection must be capable of transmitting highly complex, specific biological data. Microtubule networks 
                could function as an internal quantum communication system.
              </p>
            </div>
          </section>

          <section id="applications" className="article-section">
            <h2>6. Applications</h2>
            
            <h3>6.1 Medical Applications</h3>
            <p>
              <strong>Late-Stage Cancer:</strong> As cancer is the rapid, uncontrolled replication of cells caused by genetic mutations, 
              it can be difficult to control if it becomes too developed. In late-stage cancer, malignant cells have spread throughout 
              the body. Quantum entanglement could enable organism-wide correction.
            </p>
            <p>
              <strong>Diabetes:</strong> Treating diabetes requires updating the metabolic system across the body. Cellular entanglement 
              would allow a localized edit to target insulin-related gene expression. The entire body would instantly cascade the 
              recalibration of glucose metabolism.
            </p>

            <h3>6.2 Biohacking Applications</h3>
            <p>
              <strong>Planimal Cells:</strong> By integrating chloroplasts, these planimal cells can utilize light energy to independently 
              convert carbon dioxide and water into essential oxygen and glucose. Creating a multicellular planimal without editing it 
              from birth requires systemic editing, which quantum entanglement could enable.
            </p>
            <p>
              <strong>Sensory Enhancement:</strong> Biohacking the brain to expand sensory perception would require an extreme rewiring 
              of the nervous system. Quantum entanglement would allow a single edit to propagate across all neurons responsible for 
              sensory filtering simultaneously.
            </p>
          </section>

          <section id="methodology" className="article-section">
            <h2>7. Proposed Methodology</h2>
            <p>
              The complete experimental design is detailed in the interactive simulation. Three experiments are proposed:
            </p>
            <ol>
              <li><strong>Cellular Entanglement Procedure:</strong> Establishing quantum entanglement across all cells</li>
              <li><strong>Medical Experiment:</strong> HBB gene correction in tissue culture (sickle cell disease)</li>
              <li><strong>Biohacking Experiment:</strong> Chloroplast integration and immune tolerance editing</li>
            </ol>
            <p style={{ marginTop: '1rem' }}>
              Visit the <a href="/demo">interactive demo</a> to explore step-by-step procedures for all three experiments.
            </p>
          </section>

          <section id="challenges" className="article-section">
            <h2>8. Challenges & Open Questions</h2>
            <p>
              While cellular entanglement can solve many problems, the required technologies are likely years away from realization. 
              The cellular environment is extremely likely to cause quantum decoherence, often described as "trying to preserve a 
              snowflake in a hot kitchen."
            </p>
            <p className="warning-box">
              <strong>Key Challenges:</strong>
              <ul>
                <li>Scaling entanglement from single photons to trillions of cells</li>
                <li>Maintaining quantum coherence at 37°C body temperature</li>
                <li>Preventing off-target edits that propagate organism-wide</li>
                <li>Developing new regulatory frameworks for systemic editing</li>
                <li>Long-term immunotoxicity of constitutive editing machinery</li>
              </ul>
            </p>
          </section>

          <section id="vision" className="article-section">
            <h2>9. Vision & Impact</h2>
            <p>
              If cellular entanglement were successfully harnessed, it would completely shatter the bottleneck of modern genetic 
              medicine: physical delivery. Late-stage diseases could be cured in a single intervention. Sensory enhancement would 
              enable perception beyond human limits. Regenerative medicine could harness ethical stem cell factories.
            </p>
            <p className="vision-box">
              Quantum biology would explode as an industry. This wouldn't just affect the medical and biohacking industry, 
              but also the lives of billions of people.
            </p>
          </section>

          <section id="conclusion" className="article-section">
            <h2>10. Conclusion</h2>
            <p>
              To summarize, the hypothesis is that quantum entanglement and coherence can be harnessed within living tissues to 
              overcome the delivery limitations of traditional gene therapy. This allows a localized edit to act as a quantum 
              measurement, forcing all other entangled cells to express the newly edited state.
            </p>
            <p>
              The entanglement procedure relies on the entanglement of both DNA and RNA. Prime Editors and Cas-13 Editors are fused 
              to EYFP. The qubit carriers are pulsed with near-infrared frequencies to initiate the entanglement. After entanglement 
              is in place, the cells' Fröhlich coherence sustains the quantum network.
            </p>
            <p>
              Not only would this aid in medical practices, but boost biohacking innovations across society.
            </p>
          </section>

          <section className="references">
            <h2>References</h2>
            <ul>
              <li>Hanna et al. (2020). Treatment Delays and Mortality Outcomes</li>
              <li>Liu et al. (2024). Myelin Sheath Biphoton Dynamics</li>
              <li>Feder et al. (2025). Enhanced Yellow Fluorescent Protein as Cellular Qubits</li>
              <li>Shirmovsky & Chizhov (2025). Coherent Protons in DNA-Transcriptase Interactions</li>
              <li>Hubac et al. (2017). Hydrogen Bond Proton Dynamics</li>
              <li>Hameroff (2004). Quantum Processes in Microtubules</li>
              <li>Abudayyeh et al. (2016). CRISPR-Cas13 RNA Targeting</li>
              <li>Zhu et al. (2024). RNA Base Editors for Hearing Loss Prevention</li>
              <li>Newall (2025). Squirrel Monkey Trichromacy and Vision Enhancement</li>
              <li>Mubarik et al. (2025). Chloroplast Integration in Mammalian Cells</li>
              <li>Boretti (2025). Cancer Cell Biophoton Communication Networks</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Theory;
