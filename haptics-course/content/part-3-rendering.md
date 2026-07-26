<!-- CHAPTER:09 -->
# Vibrotactile Rendering
LEAD: Vibrotactile rendering uses time-varying mechanical motion to communicate events, textures, urgency, direction, and system state. Effective design requires control of the body-level signal and its meaning in context.

## How to read this chapter
Treat a vibration cue as a structured event with a physical waveform, a transmission path, a body site, and a communicative role. The actuator name is not the cue.

## Learning objectives
- Specify vibration in displacement, velocity, or acceleration units.
- Separate carrier frequency, envelope, duration, rhythm, and spatial location.
- Explain frequency-dependent sensitivity and body-site effects.
- Design tactons and spatial arrays with controlled confounds.
- Characterize mounting, cross-talk, latency, and sound.
- Evaluate detectability, discriminability, meaning, and task benefit separately.

## 1. Anatomy of a vibrotactile cue
A cue may be represented as a carrier multiplied by an envelope:

$$x(t) = A(t) sin(2πft + φ)$$

The carrier controls rapid oscillation; the envelope controls onset, offset, pulses, and rhythm.

Design variables include:

- carrier frequency and spectrum;
- physical amplitude;
- duration;
- attack and decay;
- pulse count;
- inter-pulse interval;
- rhythm;
- location and direction;
- synchronization with visual and audio events.

## 2. Frequency and sensitivity
Tactile sensitivity varies with frequency, body site, contactor geometry, preload, and the physical quantity used to specify amplitude. A waveform that is equally strong in acceleration is not necessarily equally intense across frequency.

Perceptually equal cues can be created through frequency-specific calibration. This is preferable to assuming that equal voltage or equal acceleration yields equal intensity.

## 3. Transients and event structure
Short transients are effective for impacts, button clicks, and state transitions. Their interpretation depends on rise time, impulse, ringing, and synchronization.

Event-based contact rendering can improve realism by adding measured or synthesized impact transients to lower-frequency force feedback. [R11]

A long buzz may be highly detectable but poor at communicating a crisp event.

## 4. Rhythms and tactons
A **tacton** is a structured tactile message. Parameters can encode categories or continuous variables.

Examples:

- pulse count for menu level;
- rhythm for event class;
- intensity for urgency;
- location for direction;
- apparent motion for trajectory.

Use dimensions that participants can discriminate reliably and that do not interact unpredictably. Frequency and intensity, for example, can be perceptually coupled.

### 4.1 Designing a tacton vocabulary
1. Define the messages and their consequences.
2. Select perceptually separable dimensions.
3. measure physical output at every body site;
4. train participants consistently;
5. test confusion matrices, not only mean accuracy;
6. test under realistic cognitive and movement load;
7. include a no-cue or alternative-modality baseline.

## 5. Spatial arrays
A multi-tactor array can communicate location, direction, shape, or motion. Performance depends on spacing, mechanical spread, body coordinates, posture, and timing.

Array design should measure:

- one-point localization;
- pair discrimination;
- cross-talk;
- directional confusion;
- apparent motion;
- effects of clothing and posture;
- individual fit.

More tactors do not automatically increase information capacity.

## 6. Apparent motion and phantom points
Sequential stimulation can create apparent motion; simultaneous weighted stimulation can create an intermediate phantom location. These effects can reduce hardware count but must be parameterized for the target body site.

Do not label every sequential cue “motion.” Ask participants to report direction, continuity, speed, and path.

## 7. Mounting and body coupling
The same tactor can produce different output when:

- strapped tightly or loosely;
- mounted on rigid plastic or soft textile;
- placed over bone or soft tissue;
- loaded by clothing;
- held in the hand;
- oriented differently.

Report contactor area, preload, strap method, posture, and measurement location.

## 8. Unintended sound
Vibrotactile actuators generate airborne and structure-borne sound. Participants can identify patterns acoustically.

Use audio masking, acoustic measurement, silent control trials, or actuator isolation when touch is the dependent variable.

## 9. Intensity control
Possible physical amplitude measures include peak acceleration, RMS acceleration, displacement, velocity, and force. The appropriate measure depends on the actuator and frequency range.

Perceived intensity may be modelled empirically as a nonlinear function of physical amplitude. Calibrate within the intended operating range and population.

## 10. Worked example: collision cue
A hand controller should signal contact with a virtual object.

A defensible design:

1. detect collision using tracked geometry;
2. trigger a short transient with controlled onset;
3. measure end-to-end latency;
4. characterize acceleration at the grasp surface;
5. synchronize audio or remove it as a confound;
6. test detection and timing judgment;
7. compare against visual-only and continuous-buzz conditions;
8. test during actual reaching rather than stationary holding.

## 11. Evaluation hierarchy
- **Physical:** waveform, spectrum, latency, cross-talk, repeatability.
- **Perceptual:** detection, discrimination, localization, intensity matching.
- **Semantic:** recognition of message or event.
- **Functional:** task accuracy, response time, workload, eyes-off-time.
- **Experiential:** comfort, preference, realism, annoyance.

A cue can succeed at one level and fail at another.

## Common misconceptions
- Frequency and intensity are perceptually independent.
- Equal motor voltage means equal tactile intensity.
- More tactors always provide more spatial information.
- A detectable cue is automatically understandable.
- Audio masking is unnecessary when the actuator is “quiet.”
- A stationary-body threshold predicts moving-task performance.

## Key takeaways
- Vibration cues are structured in time, frequency, space, and context.
- Measure physical output at the body interface.
- Calibrate intensity across frequency and location.
- Spatial arrays require localization and cross-talk testing.
- Evaluate physical, perceptual, semantic, and task outcomes separately.

## Self-test
1. What is the difference between carrier and envelope?
2. Why can equal acceleration feel unequal across frequency?
3. What does a confusion matrix reveal?
4. Why is mounting part of the stimulus?
5. How can actuator sound bias a study?
6. What distinguishes apparent motion from sequential detection?
7. Name four levels of vibrotactile evaluation.

## Practical exercise
Design six tactons for navigation instructions. Specify waveform dimensions, physical calibration, training, confusion testing, and an evaluation during walking or a dual task.

## Recommended reading
- [R11] Event-based contact feedback.
- [R19] Haptic texture and perceptual attributes.
- [R36] Vibrotactile display review.

<!-- CHAPTER:10 -->
# Kinesthetic and Force Feedback
LEAD: Kinesthetic interfaces render forces, torques, constraints, and motion through grounded, wearable, handheld, cable-driven, encountered, or passive mechanisms.

## Learning objectives
- Distinguish impedance and admittance interfaces.
- Explain workspace, degrees of freedom, force reflection, transparency, and backdrivability.
- Compare grounded, exoskeletal, cable-driven, encountered, and passive devices.
- Analyse reaction forces, saturation, and safety.
- Characterize force output and free-space behaviour.

## 1. What force feedback represents
Force feedback can represent:

- contact and collision;
- stiffness and compliance;
- weight and inertia;
- guidance and virtual fixtures;
- constraints and boundaries;
- remote forces in teleoperation;
- resistance, drag, and braking.

A force cue is meaningful through its relationship to movement and task state.

## 2. Degrees of freedom
A rigid body has six motion degrees of freedom: three translations and three rotations. A device may sense and actuate different numbers of degrees of freedom.

Report separately:

- sensed DoF;
- actuated DoF;
- workspace;
- force and torque directions;
- coupled or underactuated axes.

## 3. Impedance and admittance devices
An **impedance device** measures motion and commands force. Lightweight desktop devices commonly follow this architecture.

An **admittance device** measures force and commands motion. Large robotic systems often use this approach when mechanisms are not easily backdriven.

FIGURE: assets/figures/13-haptic-control-rendering.svg | Haptic servo architecture, impedance and admittance control, and a proxy-based contact diagram. | **Figure 10.1 — Force feedback couples the user to a real-time control loop.** Device mechanics and loop timing constrain the rendered interaction. Original course diagram; CC BY 4.0.

## 4. Grounded interfaces
Grounded devices react against a fixed frame. They can generate strong forces and controlled endpoint motion.

Key metrics:

- workspace size and shape;
- maximum continuous and peak force;
- isotropy across direction;
- endpoint inertia and friction;
- position resolution;
- force bandwidth;
- backdrivability;
- singularities and joint limits.

The PHANToM demonstrated compact point-contact interaction with virtual objects and became influential in desktop haptics. [R08]

## 5. Exoskeletons and wearable force feedback
Exoskeletons apply forces through body-mounted linkages. They may resist finger motion, support joints, or constrain the arm.

Challenges include:

- anatomical alignment;
- fit across users;
- joint-axis mismatch;
- weight and inertia;
- pressure distribution;
- donning and calibration;
- safety near joint limits.

Wearable force displays must report how reaction loads are distributed across the body. [R13]

## 6. Cable-driven systems
Cables can place actuators away from the user and provide low endpoint mass.

Design variables:

- cable routing and anchor geometry;
- tension-only actuation;
- minimum pretension;
- workspace where tensions remain feasible;
- pulley friction;
- cable stretch and hysteresis;
- redundancy and tension allocation;
- entanglement and breakage safety.

A single cable can pull but not push. Bidirectional force requires antagonistic cables, gravity, springs, or another reaction mechanism.

## 7. Encountered-type devices
An encountered surface moves into place before expected contact. It can provide convincing physical geometry while preserving free movement elsewhere.

Requirements:

- accurate prediction of contact location and time;
- safe robot motion around the user;
- low apparent latency;
- collision avoidance;
- sufficient surface geometry;
- recovery from prediction error.

## 8. Passive and brake-based interfaces
Brakes, clutches, and passive constraints dissipate or redirect user energy. They can render resistance safely and efficiently but cannot generally generate arbitrary motion.

Passive virtual fixtures are useful when guidance or forbidden regions matter more than active propulsion.

## 9. Transparency
An ideal device disappears in free space and accurately renders the environment in contact.

Transparency is degraded by:

- inertia;
- friction;
- damping;
- backlash;
- compliance;
- quantization;
- delay;
- saturation;
- limited bandwidth.

Characterize both free-space and contact behaviour.

## 10. Force control and saturation
Every system has limits. Force clipping changes the intended mechanical relationship. Rate limits and current limits can introduce delay or distortion.

Report:

- continuous and peak limits;
- duration of allowable peak force;
- thermal derating;
- workspace dependence;
- controller saturation behaviour;
- emergency stop and fault response.

## 11. Virtual fixtures and guidance
A virtual fixture applies forces that guide motion toward a path or away from a region. Guidance can improve performance but can also reduce skill learning, agency, or adaptability.

Evaluate:

- path error;
- completion time;
- user-applied force;
- reliance after guidance removal;
- subjective agency;
- transfer to unassisted tasks.

## 12. Worked example: a one-newton finger tether
A tethered interface should provide up to 1 N resistance.

A complete design considers:

1. anchor location and force direction;
2. cable tension measurement;
3. motor and spool radius;
4. controller bandwidth;
5. free motion and drag;
6. maximum speed and travel;
7. cable slack and pretension;
8. emergency release;
9. force accuracy over the workspace;
10. perceptual and task validation.

## Common misconceptions
- Maximum motor torque equals endpoint force.
- More DoF automatically improves usefulness.
- A stable device is transparent.
- Wearable force feedback has no grounding problem.
- Cable force is independent of routing.
- Force clipping merely reduces intensity; it can change stiffness and timing.

## Key takeaways
- Force feedback is a coupled mechanical-control interaction.
- Impedance and admittance architectures differ in measured input and commanded output.
- Form factor determines reaction path, workspace, and transparency.
- Free-space dynamics and force saturation must be characterized.
- Task benefit and skill transfer require separate evaluation.

## Self-test
1. What distinguishes sensed and actuated DoF?
2. Why does a cable require tension management?
3. What is backdrivability?
4. Name five sources of poor transparency.
5. Why can guidance harm learning?
6. What information is needed to convert motor torque to endpoint force?

## Practical exercise
Create a specification for a three-axis cable-driven hand interface. Include geometry, tension feasibility, sensing, calibration, free-space drag, maximum force, and fault behaviour.

## Evidence and source notes
Grounded force-feedback architecture is illustrated by the PHANToM. [R08] Wearable force-feedback design and taxonomy are reviewed by Pacchierotti and colleagues. [R13]

## Recommended reading
- [R08] Massie and Salisbury, PHANToM interface.
- [R10] Z-width and stable impedance range.
- [R13] Wearable haptic systems taxonomy.

<!-- CHAPTER:11 -->
# Haptic Rendering
LEAD: Haptic rendering converts interaction with a virtual or remote environment into stable, timely forces and tactile events. It combines collision handling, contact modelling, control, and numerical approximation.

## Learning objectives
- Explain penalty and constraint-based contact.
- Describe proxy or god-object rendering.
- Separate graphics, physics, and haptic servo loops.
- Explain stability, passivity, Z-width, and transparency.
- Implement normal force, damping, friction, and event transients conceptually.
- Identify numerical and perceptual failure modes.

## 1. Rendering architecture
A haptic application commonly contains:

- a high-rate device servo loop;
- collision and contact logic;
- a world or object model;
- a slower graphics loop;
- asynchronous input, audio, and networking.

The haptic loop must remain deterministic enough to avoid force discontinuities and excessive delay.

## 2. Penalty-based contact
A simple method allows the device point to penetrate a virtual surface and applies restoring force:

$$F_n = -k d n - b v_n n$$

where `d` is penetration depth, `n` surface normal, and `v_n` normal velocity.

Advantages:

- simple implementation;
- works with many geometries;
- intuitive parameters.

Limitations:

- finite penetration;
- stiffness limited by stability;
- discontinuities at edges or changing normals;
- force saturation changes the model.

## 3. Constraint-based proxy rendering
The god-object or proxy method separates the measured device point from a constrained virtual point. The proxy remains on or outside the surface while the spring-like displacement between device and proxy defines force. [R09]

Benefits:

- prevents proxy penetration;
- supports stable contact with complex geometry;
- separates collision constraints from the physical device position.

Challenges:

- robust nearest-feasible-point computation;
- edge and corner transitions;
- multiple contacts;
- moving and deformable geometry;
- friction state.

## 4. Collision detection
Graphics collision algorithms are not automatically suitable for haptics. Haptic contact requires:

- low and predictable latency;
- continuous or sufficiently conservative detection;
- stable normals;
- correct response at thin features;
- handling of fast motion;
- no force spikes from topology changes.

## 5. Servo rate and scheduling
The required update rate depends on device dynamics, rendered stiffness, delay, and filtering. “1 kHz” is a common target, not a universal guarantee of stability.

Measure actual loop-period distribution, missed deadlines, and worst-case computation.

## 6. Stability and passivity
A stable coupled system avoids unbounded oscillation. Passivity constrains net generated energy and is often used to support stability under uncertain user dynamics.

Z-width describes the range of stable impedances a display can render. [R10]

Time-domain passivity observers and controllers can monitor and dissipate generated energy. [R22]

## 7. Friction rendering
A simple Coulomb model applies tangential force opposite motion. More realistic models include static sticking, presliding, velocity dependence, and state.

Proxy-based friction may use a tangential constraint region. When the required force exceeds a threshold, the proxy slips.

Friction rendering must avoid discontinuous direction changes near zero velocity.

## 8. Texture rendering
Texture can be rendered as:

- geometry and surface normals;
- friction modulation;
- vibration conditioned on speed and force;
- event impulses at features;
- data-driven stochastic signals.

The haptic loop must map exploratory motion to texture output in real time.

## 9. Event-based rendering
Impacts contain high-frequency transients that may be difficult to generate through a conventional low-bandwidth force loop. Event-based methods add separate transient signals at contact. [R11]

The event detector and transient should be calibrated so repeated microcontacts do not create unstable or unrealistic chatter.

## 10. Moving and deformable objects
Rendering deformable contact requires a model of object state and force response. Full finite-element simulation may be too slow for the haptic loop.

Approaches include:

- reduced-order models;
- precomputed responses;
- local compliance models;
- multi-rate solvers;
- model-mediated rendering;
- data-driven surrogates.

## 11. Multi-rate systems
A slower physics model can update object state while a fast local model maintains contact. State transitions must be smoothed to prevent force discontinuities.

## 12. Worked example: rendering a textured virtual wall
1. Use proxy-based normal contact.
2. Add stable spring and damping.
3. estimate tangential velocity.
4. condition texture vibration on speed and normal force;
5. add impact transient at first contact;
6. limit force and signal rate safely;
7. measure latency and endpoint output;
8. test realism and roughness against references.

## 13. Failure diagnosis
- Buzzing wall: insufficient damping, delay, quantization, or normal noise.
- Sticky free space: excessive compensation or friction.
- Force spike at edge: discontinuous normal or proxy jump.
- Texture independent of motion: open-loop playback rather than interaction rendering.
- Soft wall despite high `k`: saturation, filtering, compliance, or low update rate.

## Common misconceptions
- A graphics collision point is sufficient for haptic contact.
- High update rate alone guarantees stability.
- A passive virtual model remains passive after discretization.
- Greater stiffness always increases realism.
- Texture is a waveform independent of movement.
- A proxy eliminates every collision problem.

## Key takeaways
- Haptic rendering is a real-time contact and control problem.
- Penalty methods trade penetration for force; proxy methods enforce geometric constraints.
- Stability depends on device, user, sampling, delay, and rendered model.
- Multi-rate and event-based strategies separate slow state from fast contact cues.
- Physical and perceptual evaluation should target distinct failure modes.

## Self-test
1. What is virtual penetration in a penalty method?
2. Why separate device point and proxy?
3. What does Z-width describe?
4. How can a passive continuous spring become active digitally?
5. Why must texture depend on exploratory motion?
6. What causes edge force spikes?

## Practical exercise
Write pseudocode for a haptic servo loop with proxy contact, normal spring-damper force, friction, force saturation, and an impact event. Identify every point where delay or discontinuity can enter.

## Evidence and source notes
Constraint-based proxy rendering was formalized by Zilles and Salisbury. [R09] Z-width and sampled-interface limitations were established by Colgate and Brown. [R10] Time-domain passivity control is described by Hannaford and Ryu. [R22]

## Recommended reading
- [R09] God-object method.
- [R10] Z-width.
- [R22] Time-domain passivity control.

<!-- CHAPTER:12 -->
# Surface and Texture Haptics
LEAD: Texture emerges from the interaction among surface structure, material mechanics, friction, exploratory motion, skin, sound, and the rendering device. A texture model must therefore be conditioned on interaction.

## Learning objectives
- Distinguish macrogeometry, microgeometry, friction, compliance, and vibration cues.
- Explain speed- and force-dependent texture measurement.
- Compare physical, signal-based, data-driven, and perceptual representations.
- Design texture capture and rendering pipelines.
- Evaluate signal similarity, perceptual similarity, and task value.

## 1. What is a haptic texture?
Texture can describe properties such as roughness, bumpiness, coarseness, stickiness, slipperiness, softness, and regularity. These attributes are correlated but not identical.

A surface is not intrinsically represented by one acceleration trace. The trace depends on scan speed, normal force, direction, probe, and device.

FIGURE: assets/figures/14-texture-model-pipeline.svg | Pipeline from controlled scanning of a real surface to measurement, representation, interaction conditioning, rendering, and three levels of validation. | **Figure 12.1 — Texture is generated by interaction.** A model should preserve relevant changes with speed, force, direction, and state. Original course diagram; CC BY 4.0.

## 2. Spatial and temporal structure
A periodic surface with spatial wavelength `λ_s` scanned at speed `v` produces a temporal frequency approximately:

$$f = v / λ_s$$

Changing scan speed shifts temporal content. A fixed playback frequency cannot reproduce this relationship.

## 3. Macrogeometry and microgeometry
- **Macrogeometry:** large features represented through position and force.
- **Microgeometry:** small features often represented through vibration and friction.

The boundary depends on device resolution, scan speed, and body sensitivity.

## 4. Friction and stick–slip
Surface texture can create fluctuating tangential force through adhesion, deformation, and slip. Friction depends on normal force, skin moisture, material, and velocity.

Electrovibration and ultrasonic surface haptics modulate apparent friction rather than reproducing geometric height directly.

## 5. Data collection
A robust texture dataset records:

- surface identity and preparation;
- probe or finger geometry;
- scan direction and speed;
- normal and tangential force;
- acceleration or displacement;
- position and contact state;
- environmental conditions;
- repeated trials;
- human ratings under matched conditions.

## 6. Representations
### Physical models
Represent geometry, stiffness, and friction parameters. Interpretable but may omit complex stochastic effects.

### Signal playback
Replay measured acceleration. Simple, but tied to capture speed, force, and hardware.

### Parametric signal models
Use spectra, filters, autoregressive processes, or event distributions conditioned on interaction.

### Data-driven models
Learn mappings from motion and object features to output. Culbertson and colleagues developed data-driven modelling and rendering for isotropic textures. [R20]

### Perceptual spaces
Represent textures by judged attributes or similarity. Such spaces support authoring and interpolation but depend on the stimuli and participant population used to construct them.

## 7. Image-to-haptic mapping
Visual features can predict some haptic attributes, but appearance does not uniquely determine friction, compliance, or subsurface structure. Image-based models require held-out object testing and perceptual validation. [R19]

## 8. Rendering across devices
A model captured with one tool cannot be transferred directly to another actuator without considering frequency response, contact geometry, and body coupling.

Possible strategies:

- inverse filter to compensate device response;
- perceptual matching across devices;
- device-conditioned learned models;
- abstract attribute rendering rather than physical replication.

## 9. Texture synthesis and interpolation
Interpolation in waveform space may produce signals that are mathematically intermediate but perceptually implausible. Interpolate in a validated latent or perceptual space and test the result.

## 10. Evaluation
### Signal fidelity
Compare spectra, temporal statistics, force distributions, or model residuals.

### Perceptual fidelity
Use matching, discrimination, identification, attribute ratings, or similarity judgments.

### Functional value
Measure search, manipulation, material classification, or learning.

### Generalization
Test new speeds, forces, directions, users, objects, and devices.

## 11. Worked example: rendering fabric
1. Scan fabric at several speeds and forces.
2. measure acceleration, force, and position;
3. fit a conditional stochastic model;
4. characterize actuator response;
5. render based on real-time scan speed;
6. compare with real fabric and baseline playback;
7. test roughness, material class, and similarity;
8. evaluate held-out fabrics.

## Common misconceptions
- A texture is one vibration recording.
- Equal spectra guarantee equal percepts.
- Roughness is the only texture attribute.
- Images fully determine tactile properties.
- Training/test windows from the same surface are independent generalization.
- Device compensation guarantees perceptual equivalence.

## Key takeaways
- Texture is an interaction-dependent multimodal property.
- Speed and force conditioning are essential.
- Models can be physical, signal-based, stochastic, learned, or perceptual.
- Device transfer requires compensation and validation.
- Signal, perceptual, and functional fidelity are separate outcomes.

## Self-test
1. How does scan speed affect temporal frequency?
2. What distinguishes macrogeometry and microgeometry?
3. Why is replaying one acceleration trace limited?
4. What does a perceptual texture space represent?
5. Why are image-based predictions incomplete?
6. Name three generalization tests.

## Practical exercise
Design a dataset for 20 textures captured at five speeds and three forces. Specify split strategy, sensors, metadata, model inputs, outputs, and perceptual validation.

## Recommended reading
- [R19] Haptic texture attribute space and prediction.
- [R20] Data-driven isotropic texture modelling.

<!-- CHAPTER:13 -->
# Wearable and Soft Haptics
LEAD: Wearable haptics brings actuation onto the body. This increases mobility and intimacy but makes fit, reaction forces, comfort, tissue loading, and individual variability central engineering variables.

## Learning objectives
- Classify wearable feedback by body site, output, grounding, and form factor.
- Explain skin stretch, pressure, squeeze, soft pneumatic, textile, and exoskeletal feedback.
- Analyse fit, ergonomics, reaction forces, and long-duration use.
- Design calibration across users and postures.
- Evaluate perceptual performance together with wearability.

## 1. Wearability is a systems property
A device is not wearable merely because it can be strapped to the body. Wearability includes:

- mass and mass distribution;
- volume and obstruction;
- fit and adjustability;
- pressure and shear on skin;
- heat and noise;
- range of motion;
- donning and removal;
- social acceptability;
- battery and tethering;
- cleaning and hygiene.

Pacchierotti and colleagues provide a detailed taxonomy of fingertip and hand wearables. [R13]

## 2. Vibrotactile wearables
Vibration is common because components are compact. Main challenges are mounting variability, body-site sensitivity, mechanical cross-talk, habituation, and sound.

## 3. Skin stretch
Tangential skin deformation can communicate direction, slip, friction, and force. It can create strong directional cues with relatively small actuator motion.

Report contactor material, area, preload, displacement, speed, direction, and return path.

## 4. Pressure and squeeze
Pneumatic chambers, motorized bands, and shape-changing structures can apply distributed pressure.

Pressure cues can represent contact, embrace, urgency, or continuous state. Risks include pressure concentration, circulation restriction, fit variation, and slow release.

## 5. Soft pneumatic devices
Soft chambers conform to the body and can produce shape change or squeeze. Pumps and valves may remain off-body.

Characterize:

- pressure–volume relationship;
- body-contact force;
- inflation and deflation time;
- hysteresis;
- leaks;
- maximum pressure;
- noise and tethering.

## 6. Textile haptics
Textiles can integrate tactors, pneumatic channels, heating elements, and tensioning mechanisms. Fabric stretch and garment size change actuator placement and transmission.

A garment should be tested across body dimensions and during movement.

## 7. Wearable force feedback
Hand exoskeletons, tendon systems, brakes, and clutches can resist joints or fingers. They require anatomical alignment and a reaction path through the device and body.

## 8. Softness and safety
Soft materials reduce sharp contact but can store energy, create high pressure, trap heat, or fail unpredictably. Softness is not a safety certification.

## 9. Calibration across users
Possible calibration layers:

- geometric fit;
- preload or strap tension;
- physical output at the body;
- perceptual intensity matching;
- spatial localization;
- comfort and maximum acceptable level.

## 10. Long-duration use
Short laboratory trials can miss:

- skin irritation;
- pressure marks;
- heat buildup;
- fatigue;
- habituation;
- battery degradation;
- movement restriction;
- sensor or strap drift.

## 11. Worked example: directional wristband
1. choose four tactors or skin-stretch directions;
2. standardize strap tension;
3. measure output across wrist postures;
4. test direction identification;
5. measure confusion during walking;
6. assess comfort over one hour;
7. include different wrist sizes;
8. document cleaning and reuse.

## Common misconceptions
- Lightweight means comfortable.
- Soft means safe.
- One-size straps produce equal preload.
- A cue calibrated at rest remains calibrated during movement.
- High identification accuracy proves long-term usability.
- Wearable force feedback needs no reaction structure.

## Key takeaways
- Wearable haptics is constrained by the body-device interface.
- Fit, preload, motion, and body diversity change output.
- Soft and textile systems require physical characterization.
- Long-term comfort and hygiene are part of performance.
- Perceptual calibration and ergonomic evaluation should be combined.

## Self-test
1. What makes a device wearable beyond attachment?
2. Why does strap tension matter?
3. What variables define a skin-stretch cue?
4. Why can soft pneumatics still be hazardous?
5. What does long-duration testing reveal?
6. How should body-size variation be handled?

## Practical exercise
Write a validation protocol for a pneumatic torso garment used for two hours. Include pressure mapping, fit sizes, thermal monitoring, motion, perceptual tasks, and stopping criteria.

## Recommended reading
- [R13] Wearable haptic systems taxonomy.
- [R15] Skin stretch and virtual friction.

<!-- CHAPTER:14 -->
# Mid-Air and Contactless Haptics
LEAD: Contactless haptics delivers mechanical or electrical effects without requiring a conventional handheld or body-worn actuator. The absence of attachment changes the interaction, but does not remove energy transfer, calibration, or safety requirements.

## Learning objectives
- Explain major contactless stimulation mechanisms.
- Describe focused-ultrasound control and acoustic radiation force conceptually.
- Compare ultrasound, air jets, low-frequency sound, and electrical approaches.
- Analyse workspace, intensity, spatial resolution, tracking, and exposure.
- Distinguish physical field control from perceptual correction.

## 1. What contactless means
Contactless systems transfer energy through air or an electric field. The user may still experience pressure, vibration, airflow, sound, temperature change, or electrical stimulation.

The term describes the lack of conventional attached contact, not the absence of physical interaction.

## 2. Focused airborne ultrasound
A phased array controls the relative phase and amplitude of many transducers so waves interfere constructively at selected locations.

For a focal point `p`, a simple phase choice compensates propagation distance from each transducer:

$$φ_i = -k r_i + φ_0$$

where `r_i` is propagation distance and `k` the acoustic wavenumber. Practical systems account for element response, amplitude constraints, multiple foci, reflections, and optimization.

Acoustic radiation force and modulation can create tactile sensations on the skin. Long and colleagues demonstrated volumetric haptic shapes in mid-air. [R35]

## 3. Spatial and temporal modulation
A focus can be:

- amplitude modulated;
- moved rapidly along a path;
- multiplexed across points;
- conditioned on hand tracking;
- combined into patterns or shapes.

Perceived shape depends on scan trajectory, update rate, modulation frequency, hand orientation, and spatial sampling.

## 4. Perceptual correction
Equal acoustic field strength does not imply equal perceived intensity across modulation frequency, position, or hand region. Perceptual calibration can adjust commands to preserve intended intensity or pattern. [R17]

## 5. Air jets and airflow
Air jets provide normal pressure, directional flow, cooling, and diffuse touch.

Advantages:

- intuitive physical direction;
- relatively large workspace;
- possible thermal component.

Limitations:

- turbulence and spread;
- compressor or fan noise;
- slow valve dynamics;
- environmental airflow;
- drying or cooling discomfort.

## 6. Low-frequency sound and whole-body effects
Low-frequency acoustic fields can create distributed pressure and vibration through air and body coupling. Effects depend on sound pressure, frequency, position, room modes, body posture, and auditory perception. [R18]

Claims of internal or bodily sensation require controlled auditory, tactile, and contextual comparisons.

## 7. Electrical and electrostatic methods
Some systems stimulate nerves electrically or alter friction through electrostatic fields. Electrical safety, electrode contact, skin impedance, insulation, current limits, and contraindications must be considered.

Surface electrovibration is often contact-based at the finger even though the force is generated electrostatically.

## 8. Tracking and co-registration
Contactless output is spatially meaningful only if the body is tracked accurately.

Total error includes:

- camera calibration;
- marker or hand-model error;
- tracking latency;
- array coordinate calibration;
- acoustic propagation and steering;
- user motion;
- perceptual localization.

## 9. Workspace and occlusion
Ultrasound fields and air jets have finite workspaces. The hand can shadow, reflect, or disturb fields. Multiple users and objects alter propagation.

Report field measurements across the usable volume, not only at the central focus.

## 10. Intensity and spatial resolution
Spatial resolution depends on wavelength, aperture, focus geometry, modulation, scanning, and perception. Perceived resolution may differ from measured pressure-field width.

Increasing focal number divides available output and may reduce intensity.

## 11. Audible artefacts
Amplitude modulation, nonlinearities, electronics, and structures can create audible sound. Use acoustic measurement and controls.

## 12. Safety and exposure
Assess:

- acoustic pressure and frequency content;
- harmonics and audible by-products;
- exposure duration and duty cycle;
- electrical and thermal risks;
- effects on bystanders;
- fault behaviour;
- applicable institutional and regulatory guidance.

Avoid declaring safety solely because carrier frequency is above hearing.

## 13. Worked example: mid-air button
1. track the fingertip and define a virtual surface;
2. measure spatial calibration between tracking and array;
3. render an impact transient at crossing;
4. provide a sustained cue only if it has a clear event role;
5. measure acoustic field and modulation output;
6. test detection, location, and click interpretation;
7. compare with visual-only and audio-controlled conditions;
8. evaluate multiple approach speeds and hand orientations.

## Common misconceptions
- Contactless means no energy transfer.
- Ultrasound frequency alone determines tactile frequency.
- A pressure maximum is the perceived point.
- More focal points provide greater detail without cost.
- Above-audible carrier frequency guarantees silence.
- Central-workspace calibration applies everywhere.
- Field measurements replace user studies.

## Key takeaways
- Contactless haptics remains a physical stimulation system.
- Field control, tracking, and perception jointly determine output.
- Ultrasound offers electronic spatial steering but limited force.
- Air and sound systems introduce environmental and auditory factors.
- Physical field characterization and perceptual calibration are complementary.
- Safety must include exposure, artefacts, bystanders, and faults.

## Self-test
1. How does phased focusing work conceptually?
2. Why can equal acoustic output feel unequal?
3. What limits multi-focus intensity?
4. Why is tracking latency a spatial error?
5. Name three air-jet limitations.
6. Why can an ultrasonic array produce audible artefacts?
7. What safety variables should be reported?

## Practical exercise
Design a complete validation plan for a mid-air haptic slider. Include tracking calibration, field mapping, latency, modulation, perceptual correction, auditory control, hand orientation, and safety limits.

## Evidence and source notes
Volumetric ultrasound haptic shapes were demonstrated by Long and colleagues. [R35] Perceptually corrected mid-air ultrasound rendering is described by Hassan and colleagues. [R17] Low-frequency sound-based non-contact body sensations are addressed in Hassan and colleagues. [R18]

## Recommended reading
- [R35] Long et al., volumetric ultrasound haptics.
- [R17] Perceptually correct mid-air rendering.
- [R18] Low-frequency sound body sensations.
