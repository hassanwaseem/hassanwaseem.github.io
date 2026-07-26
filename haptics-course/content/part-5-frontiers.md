<!-- CHAPTER:19 -->
# Haptics in Virtual and Augmented Reality
LEAD: Haptics in XR couples tracked bodies, virtual geometry, physical devices, and multisensory perception. The central challenge is maintaining plausible spatial, temporal, and causal correspondence while preserving natural movement.

## Learning objectives
- Explain visual–haptic co-registration and dynamic error.
- Compare controllers, wearables, passive props, encountered surfaces, and contactless feedback.
- Describe pseudo-haptics, redirected touch, retargeting, embodiment, and presence.
- Design calibration and evaluation for XR contact.
- Identify safety and usability constraints in immersive systems.

## 1. Why XR haptics is difficult
Visual displays can draw arbitrary objects almost anywhere. Physical haptic devices remain limited by workspace, attachment, force, geometry, and reaction structures.

XR haptics therefore uses three broad strategies:

1. reproduce selected physical cues;
2. reuse or redirect limited physical surfaces;
3. exploit multisensory inference so partial cues support a convincing event.

## 2. Co-registration
Co-registration aligns the intended virtual contact with the physical or perceived haptic event.

Error sources include:

- tracker calibration and drift;
- hand-model and joint-estimation error;
- device geometry;
- display and rendering latency;
- actuator response;
- user motion;
- perceptual capture.

FIGURE: assets/figures/16-teleoperation-xr.svg | XR contact error budget and bilateral teleoperation architecture. | **Figure 19.1 — Remote and virtual contact depend on correspondence.** Dynamic spatial error increases with motion speed and total delay. Original course diagram; CC BY 4.0.

A first-order dynamic error estimate is:

$$e ≈ vτ$$

where `v` is relative speed and `τ` total delay.

## 3. Controllers and handheld devices
Controllers provide reliable tracking and compact vibration. Some include triggers, adaptive resistance, or internal mass motion.

Advantages:

- robust input;
- known grasp location;
- integrated sensing and actuation.

Limitations:

- object identity remains controller-like;
- natural bare-hand interaction is lost;
- force and geometry are limited.

## 4. Wearables
Wearables can deliver cues to fingers, hands, arms, or body while preserving larger movement. They introduce fit, weight, calibration, and reaction-force challenges.

## 5. Passive props
A physical object can provide shape, mass, and contact while graphics alter appearance. Passive props are high-fidelity within their physical geometry but cannot change freely.

## 6. Encountered and robotic props
A robot positions a surface or object near predicted contact. This expands apparent geometry but demands safe high-speed motion, tracking, and contact prediction.

## 7. Contactless feedback
Ultrasound or airflow can create spatial cues without attachment. Output is weaker than many physical props and depends strongly on tracking and hand orientation.

## 8. Pseudo-haptics
Pseudo-haptics uses visual manipulation to alter perceived resistance, stiffness, mass, or texture. A change in control–display gain can make motion appear resisted even without corresponding force. [R21]

Pseudo-haptics is most effective when users accept the altered visual response as part of the same action.

## 9. Redirected touch and retargeting
Redirected touch maps a physical surface to a virtual contact at a different location or identity. Retargeting may gradually alter visual hand motion so one physical prop stands in for several virtual objects.

Evaluation should measure:

- detection of redirection;
- contact accuracy;
- aftereffects;
- task performance;
- trust and agency;
- failure during fast or bimanual movement.

## 10. Embodiment and presence
Haptic congruence can support body ownership and agency, but embodiment is not guaranteed by contact alone.

Separate:

- ownership;
- agency;
- self-location;
- environmental presence;
- object realism.

Use component-specific measures and suitable control conditions.

## 11. Bimanual and whole-body interaction
Bimanual interaction requires consistency across two hands, shared object state, and force closure. Whole-body XR introduces feet, torso, balance, locomotion, and collision safety.

A system that works for one fingertip may fail when users lean, grasp, or apply opposing forces.

## 12. Worked example: virtual sculpture
A user sculpts a virtual object with both hands.

Possible architecture:

- visual mesh at graphics rate;
- hand tracking and collision model;
- local surface proxy for each hand;
- wearable pressure or force cues;
- slower deformation solver;
- synchronized sound;
- periodic correction of haptic and visual state.

Evaluate co-registration, deformation consistency, bimanual coordination, task result, and fatigue.

## Common misconceptions
- Visual realism compensates for any haptic mismatch.
- Perceptual capture proves physical alignment.
- A controller vibration represents object geometry.
- One prop can be retargeted without detection at any distance.
- Presence, embodiment, and realism are interchangeable.
- Bare-hand interaction is automatically more natural.

## Key takeaways
- XR haptics is a correspondence problem across body, device, and virtual world.
- Physical and perceptual co-registration should be measured separately.
- Props, wearables, robots, and contactless systems trade flexibility against fidelity.
- Pseudo-haptics and retargeting exploit multisensory inference but have measurable limits.
- Bimanual and whole-body interaction require new validation.

## Self-test
1. What contributes to co-registration error?
2. How does delay become spatial error?
3. What is pseudo-haptics?
4. Why are passive props high fidelity but inflexible?
5. What should a retargeting study measure?
6. Distinguish ownership, agency, and presence.

## Practical exercise
Design an XR assembly task using one physical prop to represent three virtual tools. Specify retargeting, calibration, detection measures, safety, and failure recovery.

## Recommended reading
- [R21] Pseudo-haptic feedback survey.
- [R31] Multisensory body ownership.
- [R35] Mid-air volumetric haptics.

<!-- CHAPTER:20 -->
# Teleoperation and Shared Haptic Interaction
LEAD: Teleoperation connects a human operator to a remote robot or another user through motion, force, and communication channels. Delay, uncertainty, and stability fundamentally limit transparency.

## Learning objectives
- Describe bilateral teleoperation architecture.
- Explain transparency, stability, delay, and scattering or wave variables conceptually.
- Compare direct force reflection, shared control, and model-mediated rendering.
- Analyse network delay, jitter, packet loss, and rate mismatch.
- Design task and safety evaluation for remote haptics.

## 1. Bilateral teleoperation
A bilateral system contains:

- human operator;
- master haptic device;
- communication channel;
- slave robot;
- remote environment;
- forward motion or command channel;
- backward force or state channel.

The ideal is for the operator to feel the remote environment as though directly connected. This ideal is called transparency.

## 2. Transparency
Transparency asks whether the impedance felt at the master matches the remote environment after scaling and transformation.

Perfect transparency is rarely achievable because of:

- master and slave dynamics;
- sensor noise;
- controller filtering;
- communication delay;
- force saturation;
- contact uncertainty;
- coordinate and scale transformations.

## 3. Delay and stability
A delayed force signal can inject energy into the human–robot loop. Variable delay and jitter are especially challenging.

Niemeyer and Slotine developed stable adaptive teleoperation approaches using scattering or wave-variable concepts. [R23]

Passivity-based methods trade some transparency for robust stability.

## 4. Scaling
Motion and force may be scaled:

$$x_s = s_x x_m$$

$$F_m = s_f F_s$$

Scaling changes apparent stiffness and energy relationships. Choose scales according to task, robot limits, and perceptual sensitivity.

## 5. Direct force reflection
Directly returning measured force is intuitive but sensitive to delay, noise, and robot dynamics.

Filter design should preserve contact events without destabilizing the loop.

## 6. Model-mediated teleoperation
A local model predicts remote contact and renders it at high rate. Remote measurements update the model.

Advantages:

- low apparent contact delay;
- high-rate local rendering;
- possible compression of communication.

Risks:

- model mismatch;
- sudden correction;
- misleading contact;
- loss of trust;
- unsafe action based on stale state.

## 7. Shared control
Automation can guide or constrain the operator while preserving human intent.

Examples:

- virtual fixtures;
- tremor suppression;
- collision avoidance;
- path following;
- force limiting;
- autonomous grasp with human supervision.

Evaluate authority, override, agency, and performance after automation failure.

## 8. Haptic communication between people
Shared haptic systems can support collaborative manipulation, social touch, training, or guidance.

Questions include:

- whose force is displayed;
- whether actions are distinguishable;
- conflict resolution;
- turn-taking;
- consent and social meaning;
- privacy of movement and force data.

## 9. Network effects
Characterize:

- one-way and round-trip delay;
- jitter distribution;
- packet loss;
- reorder and burst loss;
- update rate;
- quantization;
- synchronization.

Simulate realistic networks rather than using only constant delay.

## 10. Remote-environment sensing
Force can be measured proximally at the robot joints or distally near the tool. Distal sensing better isolates contact but introduces sterilization, size, wiring, and durability challenges in medical or hazardous contexts. [R42]

## 11. Worked example: remote palpation
A clinician palpates remote tissue through a robot.

Design requirements:

- force and position sensing;
- safe force limits;
- local or remote compliance model;
- delay monitoring;
- visual and haptic co-registration;
- calibration against physical references;
- detection of nodules or stiffness differences;
- clinician performance and confidence;
- failure response.

## 12. Evaluation
### System
Stability, bandwidth, delay, force error, contact transients.

### Perception
Stiffness discrimination, detection of events, realism.

### Task
Accuracy, time, applied force, damage, workload.

### Safety
Force limits, communication failure, robot fault, emergency stop.

### Trust
Awareness of automation and model uncertainty.

## Common misconceptions
- Faster communication alone guarantees transparency.
- Stable teleoperation reproduces remote forces accurately.
- Filtering noise has no perceptual cost.
- A local model removes the need for remote sensing.
- Shared control always improves learning.
- Average network delay describes realistic conditions.

## Key takeaways
- Teleoperation is a coupled human–master–network–robot–environment system.
- Delay creates stability and transparency trade-offs.
- Passivity and wave-variable methods can preserve stability at perceptual cost.
- Model mediation reduces apparent delay but introduces prediction risk.
- Shared control must preserve understandable authority and safe override.

## Self-test
1. What is bilateral teleoperation?
2. Define transparency.
3. Why can delay inject energy?
4. What is model-mediated rendering?
5. Why measure jitter and burst loss?
6. What should shared-control evaluation include?

## Practical exercise
Design a teleoperation study comparing direct force reflection with model-mediated rendering under three network conditions. Define stability, perception, task, and trust outcomes.

## Recommended reading
- [R23] Stable adaptive teleoperation.
- [R22] Time-domain passivity control.
- [R42] Haptics in teleoperated medical interventions.

<!-- CHAPTER:21 -->
# Haptics for Training, Medicine, and Rehabilitation
LEAD: Clinical and training haptics must be judged by learning, transfer, patient or operator outcomes, workflow, safety, and cost—not by realism alone.

## Learning objectives
- Identify major medical and rehabilitation applications.
- Distinguish simulation fidelity from educational validity.
- Explain force and tactile sensing challenges in minimally invasive systems.
- Design training, transfer, and clinical evaluation.
- Analyse patient safety, hygiene, accessibility, and regulation.

## 1. Application areas
Haptic technologies are used or investigated for:

- surgical and dental simulation;
- palpation and diagnosis training;
- catheter, needle, and endoscopic procedures;
- robot-assisted surgery;
- motor rehabilitation;
- prosthetics and sensory substitution;
- accessibility;
- remote examination;
- pain, cognition, and wellness interventions.

## 2. Simulation fidelity
Fidelity has multiple dimensions:

- physical geometry;
- force and tactile response;
- visual and auditory realism;
- workflow and tool use;
- decision complexity;
- consequences and stress.

A simulator need not reproduce every detail. It should reproduce the information required for the learning objective.

## 3. Educational validity
Important evidence includes:

- content validity from experts;
- construct validity distinguishing expertise levels;
- concurrent validity against accepted methods;
- predictive validity for later performance;
- learning gains;
- retention;
- transfer to physical or clinical tasks.

A realistic rating alone does not establish training effectiveness.

## 4. Robot-assisted minimally invasive surgery
Force feedback is difficult because forces applied to the patient must be sensed despite tool friction, sterilization, small distal instruments, and robot dynamics. Okamura reviews these technical and validation challenges. [R40]

Excessive force can damage tissue, so force information may support safer manipulation. However, delayed or inaccurate feedback can mislead the operator.

## 5. Surgical simulation
Haptic simulation can train suturing, palpation, cutting, needle insertion, laparoscopy, and dental procedures. Reviews report heterogeneous evidence and emphasize task-specific validation. [R39] [R41]

## 6. Palpation
Palpation involves distributed deformation, stiffness gradients, friction, anatomy, and exploratory strategy.

A palpation simulator should validate:

- force–deformation response;
- lesion size, depth, and stiffness;
- hand or tool contact geometry;
- visual information;
- diagnostic sensitivity and specificity;
- transfer to physical samples or patients.

## 7. Needle insertion and puncture
Needle interaction includes tissue deformation, friction, puncture, layer transitions, and tool dynamics. A useful model should preserve clinically relevant event timing and force patterns.

## 8. Rehabilitation
Rehabilitation devices can provide assistance, resistance, perturbation, guidance, and sensory feedback.

Evaluate:

- impairment-level change;
- activity and participation;
- dosage and adherence;
- retention;
- transfer outside the device;
- compensation strategies;
- patient motivation and fatigue.

A robot moving a limb successfully does not prove the patient learned control.

## 9. Sensory substitution and augmentation
Haptic cues can communicate visual, auditory, prosthetic, or physiological information.

Design requires training, information capacity, cognitive load, and real-world evaluation. Accessibility needs differ among users.

## 10. Expert involvement
Domain experts should contribute to:

- task selection;
- failure consequences;
- realistic ranges;
- learning objectives;
- scenario design;
- outcome interpretation.

Expert preference should not replace controlled evidence.

## 11. Safety and hygiene
Clinical systems require:

- force and motion limits;
- electrical and thermal safety;
- cleaning and sterilization;
- biocompatible contact materials;
- infection control;
- fail-safe operation;
- patient data protection;
- documentation and maintenance.

## 12. Worked example: tumor palpation trainer
1. define diagnostic targets;
2. create physical reference phantoms;
3. characterize force–deformation behaviour;
4. build virtual or robotic model;
5. validate expert judgments of lesion location and stiffness;
6. train novices;
7. test retention and transfer to unseen phantoms;
8. compare with non-haptic or conventional training;
9. measure excessive force and diagnostic accuracy.

## Common misconceptions
- More realism always improves learning.
- Expert approval proves educational effectiveness.
- Better simulator scores prove clinical transfer.
- Force feedback is beneficial for every surgical task.
- Robotic assistance and motor learning are equivalent.
- Clinical haptic devices need only standard usability testing.

## Key takeaways
- Clinical value depends on task, outcome, transfer, and safety.
- Fidelity should support the learning objective rather than maximize every dimension.
- Force sensing and rendering in medical tools are technically constrained.
- Training studies should measure retention and transfer.
- Rehabilitation evaluation must distinguish assistance from recovery.
- Expert input and controlled evidence are complementary.

## Self-test
1. What is educational transfer?
2. Why can realism fail to improve learning?
3. What makes distal force sensing difficult?
4. What outcomes matter in rehabilitation?
5. How should expert judgment be used?
6. What distinguishes simulator performance from clinical performance?

## Practical exercise
Design an evaluation for a haptic needle-insertion trainer. Include physical references, expert validation, novice training, retention, transfer, force safety, and comparison conditions.

## Evidence and source notes
Okamura reviews technical challenges and evidence for haptic feedback in robot-assisted surgery. [R40] Reviews of medical simulation show broad application but heterogeneous validation and task dependence. [R39] [R41]

## Recommended reading
- [R40] Haptic feedback in robot-assisted surgery.
- [R39] Review of medical training simulators.
- [R41] Systematic review of virtual haptics in surgical simulation.

<!-- CHAPTER:22 -->
# Volumetric and Spatial Haptics
LEAD: Volumetric haptics aims to place tactile and force information throughout a three-dimensional interaction space, often co-registered with volumetric, holographic, or spatial visual content.

## Learning objectives
- Define spatial and volumetric haptic interaction.
- Compare point, surface, field, conforming, and encountered approaches.
- Explain co-registration, reach-through interaction, and bimanual constraints.
- Represent object boundaries, interiors, state, and deformation.
- Design evaluation for spatial coverage and object understanding.

## 1. From surface feedback to spatial objects
Traditional haptic displays often provide contact through a tool endpoint or fixed surface. Volumetric haptics seeks to support touch at many locations in 3D space, potentially including:

- outer boundaries;
- internal structures;
- moving components;
- bimanual grasp points;
- deforming volumes;
- embedded physiological or semantic cues.

## 2. Interface categories
### Contactless fields
Ultrasound, airflow, and acoustic fields provide remote tactile points or patterns.

### Encountered surfaces
Robotic surfaces move into contact positions.

### Conforming interfaces
Sheets, meshes, or soft structures deform around virtual shapes.

### Wearable and tethered systems
Forces or pressures are delivered relative to tracked hand position.

### Hybrid systems
Multiple modalities divide boundary, texture, force, and event cues.

## 3. Reach-through visual displays
A reach-through display allows the user’s hand to occupy the visual volume. Haptics must not block the view or interaction while maintaining spatial correspondence.

Key constraints:

- display occlusion;
- tracking through the volume;
- physical hardware placement;
- contact timing;
- bimanual access;
- safety near moving or acoustic elements.

## 4. Boundary representation
A volumetric object boundary can be represented by:

- discrete tactile samples;
- moving points;
- force constraints;
- a conforming surface;
- pseudo-haptic visual resistance;
- combinations of cues.

Evaluate whether users can infer shape, size, curvature, and continuity.

## 5. Interior and state information
Haptic information can be placed inside a volume to represent:

- tissue stiffness;
- flow;
- temperature;
- heartbeat or vibration;
- hidden components;
- damage or material transitions.

The mapping should distinguish physical metaphor from abstract data encoding.

## 6. Bimanual interaction
Two hands impose simultaneous constraints. The system must maintain consistent object state and avoid contradictory forces.

Important tasks:

- grasp and scale;
- hold and manipulate;
- deform from two sides;
- feel relative motion;
- pass objects between hands.

## 7. Conforming haptic surfaces
A conforming sheet or mesh can wrap around virtual geometry and provide distributed contact. Challenges include:

- shape resolution;
- force and tension control;
- self-collision;
- rapid reconfiguration;
- bimanual access;
- release and failure safety;
- visual obstruction.

## 8. Object-centric modelling
Volumetric haptics benefits from object models containing boundaries, constraints, stiffness, deformation, texture, and state. Device-specific renderers select cues available at each hand location.

## 9. Co-registration
Measure spatial error throughout the volume. Static calibration at one point is insufficient.

Report:

- position and orientation error;
- dynamic error with speed;
- repeatability;
- inter-hand consistency;
- visual and haptic coordinate frames;
- perceptual localization.

## 10. Evaluation tasks
- locate a point or internal feature;
- trace a surface;
- classify shape;
- estimate size or stiffness;
- grasp and manipulate;
- perform a medical or training task;
- compare visual-only, haptic-only, and combined conditions.

## 11. Worked example: bimanual virtual organ
A user holds a volumetric organ and locates a stiff internal lesion.

Possible cue allocation:

- conforming boundary for global shape;
- tethered resistance for grasp;
- local vibration or pressure for lesion;
- visual deformation for compliance;
- state model for lesion and organ motion.

Evaluate shape reconstruction, lesion localization, applied force, bimanual coordination, and transfer to a physical phantom.

## Common misconceptions
- A collection of mid-air points forms a continuous surface automatically.
- Spatial field width equals perceived resolution.
- A one-hand result generalizes to bimanual interaction.
- Visual co-location proves haptic co-registration.
- More modalities always produce a more coherent object.
- Volumetric haptics requires full physical replication.

## Key takeaways
- Volumetric haptics represents boundaries, interiors, and object state across 3D space.
- Interface families trade contact strength, flexibility, obstruction, and workspace.
- Bimanual interaction requires consistent shared state.
- Co-registration must be measured throughout the volume and during motion.
- Evaluation should test object understanding and task performance.

## Self-test
1. What distinguishes volumetric from surface haptics?
2. Name four volumetric interface categories.
3. Why is bimanual rendering difficult?
4. What can be encoded inside an object volume?
5. How should co-registration be measured?
6. What task demonstrates boundary continuity?

## Practical exercise
Design a volumetric training display for palpating a virtual organ. Allocate cues to boundary, stiffness, texture, and internal lesions. Define co-registration and transfer tests.

## Recommended reading
- [R35] Volumetric mid-air ultrasound shapes.
- [R17] Perceptual correction in mid-air haptics.

<!-- CHAPTER:23 -->
# Safety, Ethics, and Responsible Design
LEAD: Haptic systems intentionally apply energy to bodies and can influence movement, attention, emotion, and behaviour. Safety and ethics must be designed into hardware, software, studies, and deployment.

## Learning objectives
- Identify mechanical, electrical, thermal, acoustic, ergonomic, and software hazards.
- Conduct a basic risk analysis with severity, likelihood, and mitigation.
- Design limits, interlocks, watchdogs, and stopping criteria.
- Address consent, accessibility, privacy, and affective manipulation.
- Evaluate AI and data risks in adaptive haptics.

## 1. Risk as a lifecycle process
Risk assessment occurs during:

- concept design;
- bench testing;
- first body contact;
- participant study;
- long-duration use;
- public deployment;
- maintenance and disposal.

A system safe in one stage is not automatically safe in the next.

FIGURE: assets/figures/17-research-validation-safety.svg | Evidence ladder and safety gates across haptics research. | **Figure 23.1 — Risk review should accompany every evidence stage.** New users, durations, and environments introduce new hazards. Original course diagram; CC BY 4.0.

## 2. Mechanical hazards
- excessive force or torque;
- pinch and crush points;
- high-speed impact;
- cable entanglement;
- joint overextension;
- sharp edges;
- stored spring or pneumatic energy;
- unstable force feedback;
- falling or detached components.

Mitigations include mechanical stops, force limits, compliant elements, guarded motion, quick release, emergency stop, and fault testing.

## 3. Electrical hazards
- shock and leakage current;
- high-voltage breakdown;
- damaged insulation;
- electrode burns;
- EMI affecting sensors or medical devices;
- battery faults;
- grounding errors.

Use appropriate isolation, current limiting, creepage, clearance, enclosures, monitoring, and standards review.

## 4. Thermal hazards
Motors, drivers, Peltier elements, batteries, resistive heaters, and compressed air can heat or cool tissue.

Monitor contact temperature and duration. Include thermal shutdown and consider impaired thermal sensitivity.

## 5. Acoustic and vibration exposure
Ultrasound, low-frequency sound, vibration, and audible artefacts require frequency-, intensity-, and duration-specific assessment.

Measure actual field or body-interface exposure. Include duty cycle, harmonics, bystanders, and room effects.

## 6. Ergonomics
Hazards include pressure concentration, circulation restriction, fatigue, repetitive motion, constrained posture, visual–vestibular conflict, and reduced balance.

Short comfort ratings do not establish long-term ergonomic safety.

## 7. Software and control hazards
- stale sensor data;
- sign or coordinate errors;
- runaway integrators;
- force spikes;
- network loss;
- unsynchronized state;
- unsafe model extrapolation;
- incorrect unit conversion.

Use watchdogs, bounds, rate limits, sanity checks, safe defaults, logging, and independent emergency paths.

## 8. Human-participant ethics
Participants need understandable information about:

- physical sensations and risks;
- duration and stopping;
- data collection;
- audio, video, motion, and physiological recording;
- deception;
- withdrawal without penalty;
- adverse-event reporting.

The Declaration of Helsinki provides broad principles for research involving humans. [R24]

## 9. Accessibility and fairness
Haptic perception and wearable fit vary across bodies, ages, health conditions, and sensory function.

Responsible design includes:

- adjustable intensity and fit;
- alternatives to haptic-only information;
- testing with intended populations;
- avoidance of stigmatizing form factors;
- consideration of contraindications;
- reporting who was excluded.

## 10. Privacy
Haptic systems can collect movement, force, tremor, gait, physiological state, and behavioural patterns. These can reveal health or identity information.

Minimize collection, define retention, secure transmission, and separate research consent from secondary use.

## 11. Affective and persuasive haptics
Touch can influence urgency, intimacy, comfort, and attention. Systems should not covertly manipulate users or simulate interpersonal touch without consent.

Social haptic communication requires control over sender, recipient, timing, intensity, and blocking.

## 12. AI responsibility
Adaptive models can personalize output but introduce:

- biased training data;
- poor performance for underrepresented users;
- hidden failure modes;
- privacy leakage;
- unsafe out-of-distribution output;
- inability to explain adaptation;
- overreliance on predicted user state.

Use bounded outputs, uncertainty, fallback behaviour, audit logs, and human override.

## 13. Risk analysis
A simple process:

1. identify hazard;
2. describe hazardous situation;
3. estimate severity and likelihood;
4. reduce risk through design;
5. add protective measures;
6. communicate residual risk;
7. verify mitigations;
8. monitor incidents.

Do not use participant consent as a substitute for risk reduction.

## 14. Worked example: force-feedback glove
Hazards:

- finger overextension;
- cable entanglement;
- motor overheating;
- pressure injury;
- controller runaway;
- battery fault.

Mitigations:

- mechanical joint stops;
- quick-release cables;
- current and temperature limits;
- pressure-distributing interfaces;
- watchdog and zero-force fault state;
- protected battery enclosure;
- participant emergency control.

## Common misconceptions
- Low force means no risk.
- Soft materials are intrinsically safe.
- Participant consent makes hazardous exposure acceptable.
- Ultrasound is safe because it is inaudible.
- A software limit replaces a mechanical stop.
- Personalization is automatically inclusive.
- Anonymized motion data has no privacy risk.

## Key takeaways
- Haptic safety covers mechanical, electrical, thermal, acoustic, ergonomic, and software systems.
- Risk must be revisited at each development stage.
- Design controls are preferable to warnings alone.
- Ethics includes consent, accessibility, privacy, and manipulation.
- Adaptive and AI haptics require bounded, auditable, uncertainty-aware operation.

## Self-test
1. What is a hazardous situation?
2. Why is a software limit insufficient alone?
3. What makes long-duration testing different?
4. How can haptic data reveal health information?
5. What risks arise from personalized models?
6. What should happen after a communication failure?

## Practical exercise
Construct a risk register for a mid-air ultrasound and wearable-force hybrid. Include hazard, cause, severity, likelihood, mitigation, verification, and residual risk.

## Recommended reading
- [R24] Declaration of Helsinki.
- [R25] Human-centred design.

<!-- CHAPTER:24 -->
# How to Conduct Haptics Research
LEAD: Haptics research succeeds when a clear perceptual or interaction question is connected to a reproducible physical system, calibrated measurements, appropriate human evidence, and explicit limits.

## Learning objectives
- Develop a research question from a gap rather than a device idea alone.
- Plan prototype, characterization, pilot, and main study stages.
- Choose baselines and validation layers.
- Organize code, data, hardware, and documentation for reproducibility.
- Write claims that match evidence.
- Release materials responsibly.

## 1. Begin with a research problem
Weak starting point: “We built a new actuator.”

Stronger starting points:

- existing devices cannot render a required cue within a form-factor constraint;
- a perceptual mechanism is unknown;
- a model fails to generalize across objects;
- a haptic cue may improve a consequential task;
- a new interface enables an interaction not previously testable.

The device is then part of the method or contribution.

## 2. Literature review
Map the problem across:

- perception and physiology;
- device mechanisms;
- rendering and control;
- measurement methods;
- application tasks;
- evaluation standards;
- limitations and negative results.

Use primary sources for foundational claims and recent reviews for coverage.

## 3. Define the contribution
Possible contribution types:

- device or mechanism;
- rendering algorithm;
- perceptual finding;
- dataset or model;
- interaction technique;
- evaluation method;
- application evidence;
- theory or taxonomy.

State what is new and what evidence supports it.

## 4. Build a minimum scientific prototype
The minimum prototype should:

- produce controlled output;
- expose relevant parameters;
- include measurement access;
- log commands and sensor data;
- have safe limits;
- support repeatable setup.

Appearance can improve later. Scientific controllability comes first.

## 5. Characterize before recruiting
Before a user study:

- calibrate sensors;
- measure output range;
- measure frequency response and latency;
- test repeatability;
- inspect failure modes;
- verify safety limits;
- document setup.

A participant study should not be the first time the output is measured.

## 6. Pilot studies
Pilots test:

- whether participants understand the task;
- stimulus range;
- session duration;
- equipment reliability;
- confounds;
- analysis pipeline;
- safety and comfort.

Do not overinterpret pilot effect sizes.

## 7. Select baselines
A baseline should test the mechanism or practical value.

Examples:

- no haptics;
- visual or audio alternative;
- standard actuator;
- existing algorithm;
- physical reference;
- matched-intensity control;
- ablation of a model component.

## 8. Plan layered evidence
A typical sequence:

1. bench feasibility;
2. physical characterization;
3. psychophysical validation;
4. interaction task;
5. generalization;
6. longitudinal or field evaluation.

Not every project needs every stage, but claims must remain within completed evidence.

## 9. Data management
Define:

- raw versus processed data;
- calibration records;
- participant identifiers;
- file naming;
- metadata and units;
- version control;
- backups;
- retention and consent;
- public release plan.

Store raw data whenever ethically and technically possible.

## 10. Reproducible code
Use:

- version control;
- tagged releases;
- environment specification;
- deterministic seeds where relevant;
- automated preprocessing;
- unit tests for transformations;
- example data;
- clear licences;
- hardware configuration files.

## 11. Hardware documentation
Release or document:

- CAD and drawings;
- bill of materials;
- wiring and connectors;
- firmware;
- assembly sequence;
- calibration fixtures;
- safety warnings;
- tolerances and material choices.

State which components cannot be redistributed.

## 12. Analysis discipline
Before inspecting condition effects:

- validate sensor units;
- visualize raw data;
- check missingness;
- verify randomization;
- run manipulation checks;
- confirm exclusions;
- preserve participant-level structure;
- quantify uncertainty.

## 13. Writing claims
Match words to evidence.

- “generated” for commanded output;
- “measured” for physical quantities;
- “detected” or “discriminated” for psychophysics;
- “rated” for subjective scales;
- “improved” for controlled task outcomes;
- “generalized” only after held-out testing;
- “safe” only within defined conditions and evidence.

Avoid “realistic,” “natural,” “intuitive,” and “accurate” without operational definitions.

## 14. Figures and diagrams
Good haptics figures show:

- coordinate systems;
- body contact and reaction path;
- sensors and actuators;
- timing and control loops;
- measured output;
- experimental task;
- uncertainty and participant data.

Schematics should distinguish measured, computed, and inferred variables.

## 15. Negative and null results
Report when:

- users cannot distinguish conditions;
- performance does not improve;
- a model fails on new objects;
- output varies across users;
- comfort or safety limits reduce effect;
- a mechanism works only in narrow conditions.

These results define the design space and prevent repetition.

## 16. Peer review readiness
Before submission, ask:

- Is the research question clear?
- Is the novelty compared with the strongest prior work?
- Are physical units and calibration reported?
- Are baselines fair?
- Are statistics aligned with design?
- Are claims narrower than evidence?
- Are figures interpretable without the text?
- Are data, code, and hardware release statements accurate?

## 17. Open release
A responsible release includes:

- citation file;
- licence;
- README;
- tested example;
- known limitations;
- safety notes;
- data dictionary;
- model cards or dataset documentation where appropriate.

Do not release unsafe high-voltage, force, acoustic, or medical instructions without explicit warnings and constraints.

## 18. Worked research plan
Research question: Can a conforming bimanual haptic surface improve identification of volumetric object boundaries?

Plan:

1. review spatial haptics and shape perception;
2. build instrumented prototype;
3. characterize shape error, force, latency, and safety;
4. pilot cue ranges;
5. run shape-identification psychophysics;
6. compare visual-only, sparse-contact, and conforming conditions;
7. evaluate bimanual manipulation task;
8. test new shapes and participants;
9. release CAD, firmware, data, and analysis;
10. state workspace and generalization limits.

## Common misconceptions
- Novel hardware is sufficient scientific contribution.
- A user study can replace engineering characterization.
- More measures compensate for a vague hypothesis.
- Open-source release guarantees reproducibility.
- Null results are failed research.
- A statistically significant result supports every interpretation.
- Reviewers can infer missing calibration details.

## Key takeaways
- Start with a question, mechanism, and evidence plan.
- Build measurement and safety into the prototype.
- Characterize before testing participants.
- Use pilots to test procedures, not prove effects.
- Layer physical, perceptual, task, and generalization evidence.
- Match every claim to the measurement that supports it.
- Reproducibility requires code, data, hardware, metadata, and honest limits.

## Self-test
1. Name four contribution types.
2. Why characterize before recruiting?
3. What is the purpose of a pilot?
4. What makes a baseline strong?
5. How should raw and processed data differ?
6. What wording should be used for subjective ratings?
7. Why report null results?
8. What belongs in a hardware release?

## Practical exercise
Write a two-page research plan for a new haptic interface. Include question, gap, contribution, prototype, characterization, pilot, main study, baseline, safety, analysis, and release plan.

## Final research checklist
- Research question and construct defined
- Primary literature checked
- Device output measured in physical units
- Calibration and uncertainty documented
- Latency and synchronization measured
- Safety limits and fault behaviour tested
- Baselines selected to test the mechanism
- Primary outcome preregistered where appropriate
- Participant and object variability modelled
- Failures and exclusions reported
- Claims match evidence
- Code, data, and hardware documentation prepared

## Recommended reading
- [R12] Broad review of artificial touch.
- [R16] Haptic experience-design practice.
- [R25] Human-centred design.
