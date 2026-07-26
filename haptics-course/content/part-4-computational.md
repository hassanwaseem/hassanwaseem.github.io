<!-- CHAPTER:15 -->
# Computational Haptic Modelling
LEAD: A computational haptic model represents how an object, body, or environment changes during interaction and how those changes should be converted into device output.

## How to read this chapter
A model is a purposeful abstraction. Its quality depends on the decision it supports: stable real-time contact, perceptual similarity, prediction of material attributes, remote interaction, or scientific explanation.

Do not ask whether a model is “accurate” in general. Ask which variables it predicts, at what rate, over what range, with what uncertainty, and for which device and task.

## Learning objectives
- Distinguish physical, empirical, data-driven, perceptual, and hybrid models.
- Represent geometry, contact, stiffness, damping, friction, texture, deformation, and object state.
- Separate object behaviour from device-specific rendering.
- Explain model order, state, parameter identification, and observability.
- Design multi-rate and model-mediated architectures.
- Validate numerical, physical, perceptual, and functional performance.

## 1. What a model contains
A model usually defines:

- **inputs:** position, velocity, force, contact, time, image, audio, or context;
- **state:** variables carrying history, such as deformation, temperature, damage, or contact mode;
- **parameters:** stiffness, damping, friction, geometry, learned weights;
- **outputs:** force, displacement, vibration, pressure, predicted percept, or next state;
- **update rule:** continuous differential equations or discrete transitions.

A state-space form is:

$$x_{t+1} = f(x_t, u_t, θ)$$

$$y_t = g(x_t, u_t, θ)$$

where `x` is state, `u` input, `θ` parameters, and `y` output.

## 2. Physical models
Physical models use mechanics, acoustics, thermodynamics, electromagnetics, or contact theory.

Advantages:

- interpretable parameters;
- explicit constraints and conservation laws;
- possible extrapolation when assumptions remain valid.

Limitations:

- computational cost;
- unmeasured parameters;
- idealized geometry and material assumptions;
- difficult modelling of skin, friction, and complex devices.

## 3. Empirical and parametric models
Empirical models fit simple functions to observed behaviour. Examples include nonlinear force–displacement curves, frequency-response functions, and speed-dependent friction.

They can be efficient and accurate within the measured domain but should not be extrapolated without evidence.

## 4. Finite-element and continuum models
Finite-element methods discretize deformable bodies. They can model complex geometry and material behaviour but may be too slow for high-rate haptic rendering.

Strategies include:

- coarser meshes;
- reduced-order bases;
- precomputed deformation modes;
- local contact models;
- parallel computation;
- a fast proxy coupled to a slower solver.

## 5. Reduced-order models
A reduced-order model retains dominant dynamics with fewer variables. Reduction can be physics-based or data-driven.

Validate whether removed modes matter for contact stability, transient feel, or local deformation.

## 6. Object-centric state models
An object-centric haptic model stores properties independent of a specific actuator.

Possible state variables:

- contact and separation;
- rigid or compliant mode;
- local stiffness and damping;
- deformation and recovery;
- slip, stick, and friction state;
- surface texture identity;
- temperature;
- damage, puncture, fracture, or fill level.

A renderer then maps object state to available device channels.

This separation supports reuse across grounded, wearable, and contactless devices, but the mapping must acknowledge that devices cannot reproduce identical physical evidence.

## 7. Hybrid models
Hybrid models combine continuous dynamics with discrete transitions. Examples:

- free space → contact → slip → release;
- intact membrane → puncture → post-puncture drag;
- elastic deformation → yield → permanent deformation.

A hybrid state machine helps prevent ambiguous cue scheduling.

## 8. Parameter identification
Parameter identification estimates model parameters from measurements.

A defensible process includes:

1. define the model and identifiable parameters;
2. design excitations that reveal those parameters;
3. measure inputs and outputs with synchronized sensors;
4. fit parameters using a stated loss function;
5. inspect residual structure;
6. validate on held-out trajectories;
7. report uncertainty and parameter correlation.

A good numerical fit does not prove that the parameters correspond uniquely to physical properties.

## 9. Observability and identifiability
A state is **observable** if available measurements allow it to be inferred. Parameters are **identifiable** if distinct values produce distinguishable data under the experiment.

If stiffness and damping are both estimated from slow quasi-static motion, damping may be poorly identifiable. The experiment must excite relevant dynamics.

## 10. Model-mediated rendering
In teleoperation or expensive simulation, a local model can render fast contact while slower updates correct model state. This reduces perceived delay but introduces model mismatch.

The system must manage:

- update discontinuities;
- divergence between model and remote environment;
- uncertainty;
- safe correction;
- user trust when predictions are wrong.

## 11. Multi-rate cue scheduling
Different haptic components require different rates.

- geometry and boundary constraints may update rapidly;
- object deformation may update more slowly;
- texture vibration requires high temporal bandwidth;
- semantic or physiological state may update at tens of hertz.

A multi-rate model should define synchronization, interpolation, and transition smoothing.

## 12. Device-specific rendering
A device-independent object model still requires a renderer.

Example object state: “rough rigid surface with increasing slip.”

- grounded device: friction force plus vibration;
- wearable: skin stretch plus vibration;
- ultrasound: moving focal points and amplitude modulation;
- visual pseudo-haptics: control–display gain change.

These outputs are not physically equivalent. Validation should target task-relevant percepts rather than assume equivalence.

## 13. Uncertainty
Models should expose uncertainty when predictions affect safety or interpretation.

Sources include:

- sensor noise;
- parameter uncertainty;
- unmodelled dynamics;
- user variation;
- out-of-distribution objects;
- numerical approximation.

Uncertainty can inform conservative control, fallback cues, or requests for additional sensing.

## 14. Worked example: puncture model
A membrane-puncture model may use states:

1. no contact;
2. elastic loading;
3. rupture event;
4. post-puncture friction.

Inputs: tool position and velocity. Outputs: axial force and a transient event.

Validation layers:

- compare force–displacement curves with physical samples;
- compare rupture-force distribution;
- test puncture detection and realism;
- evaluate whether trainees learn force regulation;
- test new membrane thicknesses.

## 15. Model evaluation
### Numerical
Error, convergence, stability, runtime.

### Physical
Force, displacement, spectrum, latency, energy.

### Perceptual
Detection, discrimination, matching, realism.

### Functional
Task performance and transfer.

### Generalization
New conditions, users, objects, devices, and long-term state.

## Common misconceptions
- A more complex model is always more realistic.
- A low numerical error guarantees perceptual fidelity.
- Device-independent representation eliminates device effects.
- Parameters fitted from one trajectory are uniquely identified.
- A local predictive model removes network delay without trade-offs.
- Hidden state can be inferred without informative sensing.

## Key takeaways
- Models are defined by inputs, state, parameters, outputs, and purpose.
- Physical, empirical, learned, and hybrid models have complementary strengths.
- Object state should be separated from device rendering where useful.
- Identification requires informative experiments and held-out validation.
- Multi-rate architectures connect fast contact to slower state models.
- Numerical, physical, perceptual, and task validation are distinct.

## Self-test
1. What distinguishes state from parameter?
2. Why can two parameters be unidentifiable?
3. What is a reduced-order model?
4. Why use a hybrid state machine?
5. What problem does model-mediated rendering address?
6. Why does device-independent modelling not imply perceptual equivalence?
7. Name four validation levels.

## Practical exercise
Create a state model for a virtual sponge that can be contacted, compressed, held, released, and permanently damaged. Define states, inputs, parameters, outputs, transition rules, sensing, and validation.

## Recommended reading
- [R20] Data-driven texture modelling.
- [R22] Passivity and haptic control.
- [R23] Stable teleoperation under delay.

<!-- CHAPTER:16 -->
# Machine Learning for Haptics
LEAD: Machine learning can map signals, images, object state, and human judgments to haptic predictions or rendering parameters. Its value depends less on model size than on data design, split integrity, baselines, uncertainty, and human validation.

## Learning objectives
- Frame haptic tasks as classification, regression, generation, or representation learning.
- Design train, validation, and test splits that match the generalization claim.
- Represent time-series and multimodal haptic data.
- Compare classical baselines with CNN, recurrent, transformer, and encoder–decoder models.
- Detect leakage, imbalance, overfitting, and shortcut learning.
- Evaluate predictions numerically and perceptually.

## 1. Define the prediction problem
Examples:

- classify material from vibration and force;
- predict roughness rating from an image;
- estimate contact state from sensors;
- generate a texture waveform from movement;
- predict device commands from object state;
- learn a perceptual embedding;
- adapt rendering across users.

Specify input, output, prediction horizon, unit of generalization, and use in the real-time system.

FIGURE: assets/figures/15-computational-ml-evaluation.svg | End-to-end computational and machine-learning pipeline with train, validation, held-out test, rendering, and human validation. | **Figure 16.1 — Model evaluation must match the claimed generalization.** Random window splits can leak object or participant identity. Original course diagram; CC BY 4.0.

## 2. Data units and leakage
The split unit is critical.

If many windows come from the same recording, randomly splitting windows lets nearly identical data appear in train and test. Test performance then measures interpolation within a recording, not generalization to new objects or users.

Possible split units:

- trial;
- recording session;
- participant;
- object;
- material class;
- device;
- laboratory;
- time period.

Choose the unit that matches the claim.

## 3. Time-series representation
Haptic data may include force, acceleration, position, velocity, audio, pressure arrays, and event labels.

Representations include:

- raw samples;
- engineered time-domain features;
- FFT or power spectra;
- spectrograms;
- wavelets;
- event sequences;
- multichannel synchronized windows.

Window length determines which events and frequencies are visible.

## 4. Classical baselines
Always compare against suitable simple models:

- linear or logistic regression;
- nearest neighbour;
- support-vector machines;
- random forests;
- spectral-feature regression;
- physical or heuristic models;
- mean or majority predictors.

A deep model that only matches a simple baseline adds complexity without evidence of value.

## 5. Convolutional models
One-dimensional CNNs can learn local temporal features. Two-dimensional CNNs can process time–frequency representations or pressure images.

Check whether convolutional receptive fields cover the relevant event duration.

## 6. Recurrent and sequence models
RNNs, GRUs, and LSTMs model sequential dependencies. They can represent history-dependent friction, deformation, or gesture.

Limitations include training difficulty, latency, and hidden-state drift.

## 7. Transformers and attention
Attention models can integrate long sequences and multimodal tokens. They require careful data scale, positional encoding, latency analysis, and comparison with smaller models.

Attention weights should not automatically be interpreted as causal explanations.

## 8. Encoder–decoder and generative models
Encoder–decoder models can map input modalities to haptic output. Generative models can synthesize waveforms or tactile patterns.

Evaluation should include:

- physical plausibility;
- temporal continuity;
- diversity without instability;
- conditioning accuracy;
- device limits;
- perceptual quality;
- failure under novel inputs.

## 9. Multimodal fusion
Fusion strategies include:

- early fusion of aligned features;
- late fusion of predictions;
- cross-modal attention;
- shared latent representations;
- missing-modality training.

Time synchronization is essential. A high-performing model may exploit actuator sound or visual background rather than the intended haptic mechanism.

## 10. Labels and human judgments
Human labels contain variability, context, and scale-use differences. Preserve participant-level structure when possible.

For perceptual ratings:

- report reliability;
- model rater variation;
- avoid treating consensus as ground truth without uncertainty;
- test whether prediction errors are perceptually meaningful.

## 11. Data augmentation
Augmentation must preserve the task label.

Potential operations:

- small amplitude scaling;
- time shift;
- realistic noise;
- speed transformation grounded in physics;
- sensor-axis rotation where valid.

Arbitrary time stretching or frequency shifting may change perceived texture and invalidate labels.

## 12. Metrics
Classification metrics include accuracy, balanced accuracy, precision, recall, F1, confusion matrix, and calibration.

Regression metrics include MAE, RMSE, correlation, and interval coverage.

A high correlation can coexist with large bias. Report multiple metrics and uncertainty.

## 13. Model calibration and uncertainty
A calibrated probability reflects empirical likelihood. Uncertainty methods include ensembles, Bayesian approximations, quantile regression, and conformal intervals.

Uncertainty is useful for detecting out-of-distribution inputs and selecting conservative output.

## 14. Ablation and interpretation
Ablations test which inputs, features, or components contribute.

Examples:

- remove force channel;
- remove image input;
- remove mechanoreceptor-inspired filtering;
- replace learned renderer with baseline playback;
- test speed conditioning.

Interpretation should be tied to falsifiable hypotheses.

## 15. Real-time deployment
Measure:

- inference latency and jitter;
- memory and power;
- startup and hidden-state behaviour;
- robustness to missing samples;
- numerical precision;
- output saturation;
- safe fallback.

Offline accuracy is insufficient for closed-loop haptics.

## 16. Perceptual loss and human validation
A sample-wise waveform loss may penalize harmless phase changes while ignoring perceptually important structure.

Perceptual objectives can use:

- frequency-weighted error;
- feature-space error;
- learned embeddings;
- human similarity judgments;
- task-specific performance.

Ultimately, human evaluation is required when the claim concerns experience.

## 17. Worked example: image-to-texture prediction
1. collect images, physical texture signals, and ratings;
2. split by held-out physical objects;
3. establish image-feature and mean-rating baselines;
4. train a model to predict attributes or latent texture state;
5. quantify uncertainty;
6. render predicted output through a device model;
7. test held-out-object perceptual similarity;
8. report objects and attributes where vision is insufficient.

## Common misconceptions
- More windows mean more independent samples.
- High test accuracy proves generalization to new users or objects.
- Deep learning removes the need for physical understanding.
- Attention weights prove causality.
- A low waveform error guarantees perceptual similarity.
- Human ratings are noise-free labels.
- Offline inference time represents real-time latency.

## Key takeaways
- Define the prediction target and unit of generalization first.
- Prevent leakage by splitting at object, participant, session, or device level as required.
- Compare with simple and physical baselines.
- Evaluate uncertainty, calibration, ablations, and failures.
- Real-time constraints are part of model performance.
- Human validation is required for perceptual claims.

## Self-test
1. Why is random window splitting dangerous?
2. When is a spectrogram useful?
3. What is the role of a validation set?
4. Why use simple baselines?
5. How can augmentation invalidate labels?
6. What does calibration measure?
7. Why is RMSE insufficient alone?
8. What should be measured for deployment?

## Practical exercise
Design a model predicting perceived roughness from acceleration and scan speed. Specify split unit, features, baseline, architecture, metrics, uncertainty, runtime test, and human validation.

## Evidence and source notes
Data-driven texture rendering demonstrates interaction-conditioned learning from physical signals. [R20] Image-based prediction of haptic attributes illustrates cross-modal modelling and held-out-object evaluation. [R19]

## Recommended reading
- [R19] Image features and haptic texture attributes.
- [R20] Data-driven texture rendering.
- [R37] Recent vibration-to-perception neural prediction as an example of model and human-rating integration.

<!-- CHAPTER:17 -->
# Designing Haptic Experiments
LEAD: A haptic experiment should connect a precise research claim to controlled physical stimulation, participant behaviour, and an analysis that preserves uncertainty and scope.

## Learning objectives
- Convert broad questions into testable constructs and hypotheses.
- Select within-, between-, and mixed designs.
- Apply randomization, counterbalancing, masking, and blinding.
- Plan sample size and repeated measures.
- Separate manipulation checks, primary outcomes, and exploratory measures.
- Design ethical, preregistered, reproducible studies.

## 1. Start with the claim
Examples of different claims:

- the device generates 1 N accurately;
- users detect the cue;
- cue A feels stronger than B;
- the system improves target selection;
- training transfers to a physical task;
- an effect generalizes across body sites.

Each requires different evidence.

## 2. Construct and operationalization
A **construct** is the concept of interest: realism, stiffness, comfort, ownership, workload, skill, trust.

Operationalization defines how it is measured. “Realism” might be a rating, forced-choice comparison, or match to a physical reference. These are not equivalent.

CALLOUT: Design rule | Define one primary outcome that directly answers the research question. Additional measures should have explicit roles rather than being collected because they are convenient.

## 3. Independent and dependent variables
Independent variables are manipulated or classified factors. Dependent variables are measured outcomes.

Also identify:

- covariates;
- nuisance variables;
- random effects such as participant and object;
- mediators and moderators;
- manipulation checks.

## 4. Within-subject designs
Every participant experiences all conditions.

Advantages:

- controls stable individual differences;
- often higher statistical power;
- useful for perceptual comparisons.

Limitations:

- learning, fatigue, adaptation, and carryover;
- longer sessions;
- need for counterbalancing.

## 5. Between-subject designs
Participants experience different conditions.

Advantages:

- avoids some carryover;
- simpler exposure for training interventions.

Limitations:

- more participants;
- greater sensitivity to group imbalance;
- individual variability can obscure effects.

## 6. Mixed and repeated-measures designs
Mixed designs combine within- and between-subject factors. Analysis should reflect repeated measurements and crossed factors such as participant and object.

Avoid treating repeated trials as independent participants.

## 7. Randomization and counterbalancing
Randomize trial order where appropriate. Counterbalance condition blocks to distribute order effects.

For many conditions, use Latin squares or algorithmic balanced orders rather than every permutation.

Randomization should be reproducible through stored seeds and trial logs.

## 8. Blinding and masking
Participants or experimenters may infer condition from sound, device motion, appearance, or procedure.

Possible controls:

- conceal device settings;
- use auditory masking;
- automate trial presentation;
- standardize instructions;
- blind analysts to condition labels;
- include sham or placebo-like feedback where ethical and meaningful.

## 9. Training and familiarization
Novel haptic cues require training. Define:

- instruction format;
- practice trials;
- feedback during practice;
- performance criterion;
- whether training stimuli overlap test stimuli.

Training can create expertise specific to the experiment, so report it fully.

## 10. Sample size
Sample-size planning depends on design, expected effect, variability, desired precision, and analysis.

Use prior data or pilot estimates cautiously. Small pilots produce unstable effect sizes. Precision-based planning may be more defensible than targeting a large uncertain effect.

## 11. Psychophysics versus HCI task evaluation
Psychophysics isolates perceptual relationships. HCI evaluation examines interaction in context.

A complete project may need both:

1. controlled threshold or discrimination study;
2. realistic task study;
3. longitudinal or transfer study.

## 12. Baselines
Choose baselines that test the mechanism.

Examples:

- no feedback;
- visual only;
- audio only;
- conventional vibration;
- physical reference;
- another algorithm;
- matched-intensity control;
- delayed or spatially incongruent cue.

A weak baseline can exaggerate novelty.

## 13. Objective and subjective measures
Objective measures include error, force, time, trajectory, success, and physiological data.

Subjective measures include intensity, comfort, realism, preference, workload, presence, and ownership.

Subjective does not mean invalid, but the construct and scale must be appropriate.

## 14. Questionnaire use
Use validated instruments when they match the construct and population. Do not modify item wording without acknowledging that validity evidence may no longer apply.

Report individual items or justified subscales rather than averaging unrelated questions.

## 15. Exclusions and missing data
Define before analysis:

- sensor failure;
- incomplete sessions;
- noncompliance;
- performance below training criterion;
- outlier treatment;
- missing-response handling.

Report counts and reasons by condition.

## 16. Preregistration
Preregistration records hypotheses, design, primary outcomes, exclusions, and analysis before observing results. It does not prevent exploration; it distinguishes confirmatory and exploratory analysis.

## 17. Ethics and stopping rules
Haptic studies can involve force, vibration, heat, electrical stimulation, sound, motion, fatigue, or clinical populations.

Define:

- exposure limits;
- contraindications;
- emergency stop;
- participant-controlled withdrawal;
- adverse-event recording;
- data privacy;
- deception and debriefing.

## 18. Worked example: evaluating a texture renderer
Primary claim: speed-conditioned rendering improves similarity to real textures.

Design:

- within-subject;
- factors: renderer and speed;
- physical reference trials;
- similarity forced choice as primary measure;
- roughness rating as secondary;
- matched output-level control;
- randomized trials and counterbalanced blocks;
- participant and texture as random effects;
- preregistered exclusions;
- held-out textures.

## 19. Reporting
Provide enough detail to reproduce:

- hardware and software versions;
- body interface;
- calibration;
- stimuli;
- trial sequence;
- raw and processed measures;
- analysis code;
- exclusions;
- deviations;
- data and material availability.

## Common misconceptions
- More dependent variables make a study stronger.
- Within-subject designs need no counterbalancing.
- Repeated trials increase participant sample size.
- A validated questionnaire remains validated after arbitrary modification.
- Statistical significance proves practical benefit.
- A pilot effect size is a reliable power estimate.
- Preregistration prevents exploratory research.

## Key takeaways
- Match claim, construct, manipulation, measure, and analysis.
- Separate physical, perceptual, and task evidence.
- Control order, learning, sound, posture, and device variation.
- Treat participant and object variability explicitly.
- Define primary outcomes, exclusions, and stopping rules before analysis.
- Report enough detail for replication.

## Self-test
1. What is operationalization?
2. When is a within-subject design advantageous?
3. Why counterbalance blocks?
4. What is a manipulation check?
5. Why are repeated trials not independent participants?
6. What makes a baseline mechanistically useful?
7. What does preregistration distinguish?
8. Name four haptics-specific confounds.

## Practical exercise
Write a preregistration outline for comparing two mid-air contact renderers. Include primary claim, factors, baseline, calibration, auditory control, participant plan, exclusions, analysis, and safety.

## Recommended reading
- [R06] Psychophysics fundamentals.
- [R07] Detection theory.
- [R25] Human-centred design process.

<!-- CHAPTER:18 -->
# Haptic System Evaluation
LEAD: Haptic evaluation should trace evidence from hardware output to perception, interaction, generalization, and risk. No single metric captures system quality.

## Learning objectives
- Build a multi-layer evaluation plan.
- Characterize force, displacement, vibration, frequency response, latency, and repeatability.
- Select psychophysical and task metrics.
- Compare baselines and quantify uncertainty.
- Evaluate comfort, accessibility, reliability, and deployment constraints.
- Distinguish verification, validation, and generalization.

## 1. Verification and validation
**Verification:** did the system meet its engineering specification?

**Validation:** does it support the intended human use or scientific claim?

A device can pass verification and fail validation, or vice versa if the specification was incomplete.

FIGURE: assets/figures/17-research-validation-safety.svg | Evidence ladder from research question to deployment, alongside safety and ethics gates. | **Figure 18.1 — Evaluation builds evidence in layers.** Each stage has distinct measures, risks, and claims. Original course diagram; CC BY 4.0.

## 2. Physical characterization
### Static output
Force–displacement, pressure, maximum force, travel, hysteresis, creep.

### Dynamic output
Frequency response, rise time, settling, impulse, bandwidth, phase, delay.

### Spatial output
Workspace, focus size, contact area, localization field, cross-talk.

### Repeatability
Within trial, across trials, days, devices, users, temperature, and battery state.

### Reliability
Failure rate, drift, calibration retention, wear, and fault recovery.

## 3. Latency
Measure end-to-end latency from user action or sensor event to physical output.

Report distribution, not only mean. Jitter can be perceptually and dynamically important.

Separate:

- sensing;
- communication;
- computation;
- actuation;
- mechanical response;
- display synchronization.

## 4. Accuracy and resolution
Accuracy should be referenced to a calibrated standard. Resolution should reflect noise and repeatability, not only command increments.

Spatial resolution of a haptic display is perceptual unless specifically labelled as actuator spacing or physical field width.

## 5. Psychophysical evaluation
Possible questions:

- detection threshold;
- discrimination or JND;
- localization;
- identification;
- intensity matching;
- similarity to a reference;
- perceptual attribute scaling.

Use methods described in Chapter 3 and preserve participant-level uncertainty.

## 6. Task evaluation
Task outcomes include:

- error and success;
- completion time;
- force regulation;
- trajectory quality;
- information transfer;
- learning rate;
- retention and transfer;
- visual attention;
- workload.

Choose tasks that represent intended use without confounding the mechanism.

## 7. Experience and usability
Measure comfort, fatigue, realism, preference, trust, agency, presence, and acceptability when relevant.

Use qualitative interviews to identify failure modes that fixed ratings miss.

## 8. Benchmarking
A useful benchmark defines:

- standardized task;
- hardware configuration;
- calibration;
- data format;
- reference conditions;
- analysis metrics;
- acceptable variation.

Benchmarks improve comparison but can encourage optimization to narrow tasks. Include ecological evaluation.

## 9. Baseline design
Compare against the strongest relevant alternatives, not only no feedback.

For a new texture renderer, compare against:

- no texture;
- simple playback;
- physical reference;
- another conditioned method;
- matched-amplitude control.

## 10. Statistical and practical significance
Report effect size and uncertainty. Ask whether the change is meaningful relative to task demands, perceptual thresholds, cost, and risk.

A statistically detectable 2 ms improvement may be irrelevant; a small force reduction may be clinically important.

## 11. Generalization
Test dimensions that matter:

- new participants;
- body sizes and skin conditions;
- new objects or materials;
- new tasks;
- new devices;
- longer duration;
- different environments;
- expert and novice users.

## 12. Accessibility and inclusion
Evaluate whether feedback is usable across sensory, motor, cognitive, and anatomical diversity.

Do not assume haptics is inherently accessible. Strong vibration can be uncomfortable or undetectable for some users; wearable fit can exclude bodies; force feedback can demand motor ability.

## 13. Failure analysis
Record and report:

- unstable contact;
- missed cues;
- false contacts;
- calibration loss;
- discomfort;
- device breakage;
- participant misunderstanding;
- out-of-distribution model failure.

Failure cases define system boundaries.

## 14. Worked example: evaluating a wearable brake
### Verification
- torque–current or braking command curve;
- response time;
- maximum temperature;
- fail-safe release;
- repeatability.

### Perceptual validation
- resistance detection;
- discrimination among levels;
- direction and timing judgment.

### Task validation
- braking at target locations;
- error, time, and applied force;
- comparison with active motor feedback.

### Wearability
- mass, pressure, comfort, range of motion, long-duration use.

### Generalization
- different limb sizes, speeds, tasks, and sessions.

## 15. Evaluation matrix
| Claim | Minimum evidence |
|---|---|
| Accurate force | Calibrated force measurement and uncertainty |
| Stable contact | Dynamic tests across user impedances and conditions |
| Detectable cue | Psychophysical detection experiment |
| More realistic | Defined reference and perceptual comparison |
| Improves task | Controlled baseline and task outcome |
| Generalizable | Held-out users, objects, devices, or contexts |
| Safe | Risk analysis, limits, monitoring, and fault tests |

## Common misconceptions
- One user study validates the entire system.
- Actuator spacing is perceptual resolution.
- Mean latency is sufficient.
- Preference proves performance benefit.
- A statistically significant result is automatically useful.
- A short laboratory exposure proves long-term safety.
- No reported failures means no failures occurred.

## Key takeaways
- Evaluate hardware, perception, task, usability, generalization, and safety separately.
- Verification and validation answer different questions.
- Latency, repeatability, and uncertainty require distributions and conditions.
- Strong baselines and failure reporting increase credibility.
- Accessibility and long-term use are system properties.

## Self-test
1. What distinguishes verification from validation?
2. Why report latency jitter?
3. What is the difference between actuator spacing and spatial resolution?
4. What makes a baseline strong?
5. Why measure retention and transfer?
6. What is practical significance?
7. Name five generalization dimensions.
8. Why are failure cases valuable?

## Practical exercise
Create an evaluation matrix for a six-channel tactile sleeve. Include physical, perceptual, task, ergonomic, accessibility, reliability, and safety measures with acceptance criteria.

## Evidence and source notes
Z-width work illustrates the need to evaluate dynamic range and stability rather than isolated force values. [R10] Haptic teleoperation reviews emphasize systematic validation from force sensing to user performance. [R42]

## Recommended reading
- [R10] Z-width evaluation.
- [R12] Broad haptics review.
- [R42] Haptics in teleoperated medical interventions.
