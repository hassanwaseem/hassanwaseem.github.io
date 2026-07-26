<!-- CHAPTER:09 -->
# Vibrotactile Rendering
LEAD: Vibrotactile rendering uses controlled time-varying mechanical stimulation to communicate events, textures, motion, urgency, and interaction state. Effective rendering requires more than selecting a frequency and amplitude.

## Learning objectives
- Specify vibrotactile signals in physical and perceptual terms.
- Design temporal patterns and spatial arrays.
- Explain body-site and mounting effects.
- Validate intensity, quality, localization, and meaning.

## 1. Signal dimensions
A vibrotactile pattern can vary in carrier frequency, amplitude, phase, waveform, duration, envelope, repetition, and spatial location. These parameters interact. Increasing drive voltage may alter both acceleration and frequency response, while soft mounting may attenuate high-frequency content.

Always state the measured physical quantity, such as acceleration in `m/s²`, displacement in metres, or force in newtons. “Intensity” should be reserved for perceived magnitude unless explicitly defined otherwise.

## 2. Frequency-dependent perception
Sensitivity to vibration depends on frequency, body site, contact area, preload, and duration. Different frequency ranges emphasize different receptor populations, but the mapping is not one actuator frequency to one receptor class. Mechanical transmission through the device and skin must also be considered.

Equal command amplitudes at two frequencies do not imply equal physical output or equal perceived intensity. Perceptual equalization may require frequency-specific calibration.

## 3. Temporal pattern design
Onset and offset define events. Short bursts can represent clicks or impacts. Repeated pulses can signal rhythm, count, or urgency. Long continuous signals may be fatiguing and can adapt perceptually.

A useful design process separates:
- **carrier:** the local vibration frequency;
- **envelope:** how amplitude changes over time;
- **event grammar:** how bursts are sequenced;
- **semantic mapping:** what the pattern means in context.

## 4. Spatial arrays
Multiple tactors can produce location, direction, apparent motion, and body-centred patterns. Array design must account for actuator spacing, mechanical cross-talk, body-site acuity, and timing. A nominally separate tactor can vibrate the shared housing or fabric and blur localization.

Apparent motion often requires calibrated inter-tactor timing and intensity rather than simply activating adjacent tactors sequentially.

## 5. Calibration across devices and users
A complete calibration can include:
- command-to-output transfer functions;
- preload and attachment control;
- frequency-response measurement;
- actuator-to-actuator equalization;
- body-site perceptual matching;
- session drift checks.

Population-level equalization may not eliminate individual differences. Adaptive user calibration can help but should be brief and reproducible.

## 6. Worked example: directional wrist cue
Four tactors are placed around the wrist. The intended cue is clockwise motion. First, measure cross-talk and match physical output. Next, sweep onset intervals to identify a range producing smooth motion rather than four taps. Test localization and direction recognition during the actual task, including arm movement and clothing.

## Common misconceptions
- Frequency alone does not define texture or quality.
- More tactors do not automatically increase spatial information.
- Equal voltage is not equal vibration.
- Detectability does not establish semantic clarity.

## Key takeaways
- Design carrier, envelope, sequence, and meaning separately.
- Measure output at the user interface.
- Calibrate frequency and body-site effects.
- Validate both perceptual quality and task performance.

## Self-test
1. Why can equal voltages feel unequal at two frequencies?
2. What is the role of an amplitude envelope?
3. How does mechanical cross-talk affect arrays?
4. What distinguishes detection from recognition?
5. Why test patterns during movement?

## Practical exercise
Design three vibrotactile patterns for confirmation, warning, and directional guidance. Specify waveform, timing, location, physical measurement, and a recognition experiment.

<!-- CHAPTER:10 -->
# Kinesthetic and Force Feedback
LEAD: Kinesthetic interfaces resist, guide, or move the user to represent contact, weight, constraints, compliance, and dynamics. Their quality depends on mechanics, sensing, control, workspace, and safety.

## Learning objectives
- Compare grounded, wearable, cable-driven, encountered, and braking systems.
- Distinguish force, position, impedance, and admittance control.
- Explain workspace, degrees of freedom, transparency, and backdrivability.
- Identify stability and safety constraints.

## 1. Interface families
**Grounded endpoint devices** apply force through a handle or stylus and react against a fixed frame. **Exoskeletons** align mechanisms with the body. **Cable-driven systems** route forces through remote actuators. **Encountered-type systems** move a physical surface to predicted contact locations. **Brakes and clutches** resist motion without actively generating arbitrary trajectories.

Each family trades force capacity, workspace, inertia, setup time, encumbrance, and safety.

## 2. Degrees of freedom and workspace
A device may sense more degrees of freedom than it actuates. For example, it may track six-dimensional pose but apply only three-dimensional force. Clearly distinguish sensed, actuated, and constrained degrees of freedom.

Workspace should be reported as the region where required forces, accuracy, and stability are maintained—not only the geometric reach of the mechanism.

## 3. Control architectures
- **Position control:** the controller commands motion to follow a target.
- **Force control:** the controller commands interaction force.
- **Impedance control:** measured motion is mapped to commanded force.
- **Admittance control:** measured force is mapped to commanded motion.

Real systems are nested combinations. A motor may use a fast current loop inside a torque loop, with a higher-level impedance model.

## 4. Transparency and backdrivability
Transparency describes how little the device distorts the intended environment. An ideal free-space device feels massless and frictionless; an ideal contact feels rigid when required. Real systems have inertia, friction, backlash, quantization, and delay.

Backdrivability is the ease with which the user can move the mechanism. High gearing increases torque but usually increases reflected inertia and friction.

## 5. Force limits and safety
Specify continuous and peak force, torque, speed, energy, travel, and emergency-stop behaviour. Software saturation alone is insufficient if the mechanism can store energy or fail mechanically. Consider pinch points, cable breakage, unstable oscillation, and tracking loss.

## 6. Worked example: tethered finger resistance
A cable applies resistance to a finger. The system needs a load cell, position or spool estimate, tension maintenance, and safe travel limits. A controller can render spring force proportional to displacement, but pulley friction and cable elasticity distort force at the finger. Calibration should measure the complete path. A passive baseline and emergency release are needed.

## Common misconceptions
- Maximum motor torque is not equal to usable force at the hand.
- More degrees of freedom do not guarantee better interaction.
- A high-gain controller is not automatically transparent.
- Stronger force can worsen stability and comfort.

## Key takeaways
- Mechanical architecture and control must be designed together.
- Report sensed and actuated degrees of freedom separately.
- Transparency is constrained by inertia, friction, bandwidth, and delay.
- Safety requires physical as well as software limits.

## Self-test
1. What distinguishes geometric reach from usable workspace?
2. Why does gearing reduce backdrivability?
3. What is the input to an admittance controller?
4. Why measure force at the user rather than at the motor?
5. What failure modes remain after software saturation?

## Practical exercise
Specify a one-degree-of-freedom force-feedback device that renders 0–2 N. Include actuator, transmission, sensors, controller, update rate, force calibration, safety limits, and validation tasks.

<!-- CHAPTER:11 -->
# Haptic Rendering
LEAD: Haptic rendering computes how a virtual or remote environment should react to user motion and converts that reaction into stable device commands.

## Learning objectives
- Explain collision detection, penalty methods, and proxy methods.
- Describe virtual walls, friction, texture, and constraints.
- Distinguish graphics and haptic update loops.
- Explain stability, passivity, and virtual coupling.

## 1. Rendering pipeline
A typical loop performs:
1. read device state;
2. transform it into world coordinates;
3. detect contact or constraint violation;
4. update object or proxy state;
5. calculate force and tactile events;
6. apply limits and safety logic;
7. command the device;
8. log synchronized data.

The haptic loop often runs much faster than visual rendering because force interaction is sensitive to delay and discretization.

## 2. Penalty-based contact
A penalty method permits virtual penetration and computes force from penetration depth and velocity:

$$F_n = -k x - b v$$

It is simple and supports deformable models, but high stiffness can destabilize the discrete loop. Penetration also introduces geometric error.

## 3. Proxy or god-object methods
A proxy is constrained to valid free space or object surfaces while the physical device position may penetrate. A virtual coupling connects the device to the proxy. The proxy provides stable contact geometry and supports corners and constraints.

The method still requires careful handling of friction, multiple contacts, rapidly changing geometry, and moving objects.

## 4. Friction and texture
Static friction resists initial tangential motion; dynamic friction opposes sliding. Simple Coulomb models may be combined with proxy displacement. Texture can be rendered through surface geometry, friction modulation, vibration, or data-driven signals.

Texture loops may run at high rate because fine surface events change rapidly during scanning.

## 5. Stability and passivity
Delay, sampling, quantization, high stiffness, sensor noise, and unmodelled dynamics can inject energy. Passivity-based methods track energy flow and limit output to prevent the device-controller-environment system from becoming active in an uncontrolled way.

Stability should be tested across users, grips, postures, directions, and contact conditions rather than in one nominal setup.

## 6. Virtual coupling
A spring-damper coupling between physical device and virtual proxy can isolate some instability and manage constraints. Strong coupling improves position agreement but can transmit more high-frequency energy. Weak coupling is stable but feels soft and lagged.

## 7. Worked example: rendering a sharp edge
A penalty method may produce force only after penetration, allowing the physical handle to pass through a thin edge. A proxy constrained to the surface can preserve the edge geometry. Add virtual coupling, force saturation, and a transient cue at first contact. Measure position error, peak force, oscillation, and perceived sharpness.

## Common misconceptions
- A 1 kHz loop is not automatically stable.
- A visually rigid object is not necessarily haptically rigid.
- Collision detection and force computation are separate problems.
- Passivity can improve robustness but may reduce transparency.

## Key takeaways
- Rendering links geometry and object dynamics to device output.
- Penalty and proxy approaches have different error and stability trade-offs.
- High-rate loops require synchronized sensing and bounded delay.
- Stability and transparency must be evaluated together.

## Self-test
1. Why does a penalty method require penetration?
2. What role does a proxy play?
3. Why can high virtual stiffness destabilize a loop?
4. What is virtual coupling?
5. Why separate graphics and haptic loops?

## Practical exercise
Write pseudocode for a haptic servo loop rendering a plane with friction. Include transforms, collision state, force calculation, saturation, timing checks, and logging.

<!-- CHAPTER:12 -->
# Surface and Texture Haptics
LEAD: Surface perception combines macrogeometry, microgeometry, vibration, friction, compliance, temperature, and exploratory movement. Texture rendering must model both the physical interaction and the resulting perceptual dimensions.

## Learning objectives
- Distinguish macrogeometry and microtexture.
- Explain roughness, friction, hardness, stickiness, and bumpiness as perceptual attributes.
- Compare physical, signal-based, and data-driven texture models.
- Design a generalization and perceptual-validation study.

## 1. What is a texture?
A surface may contain large features that guide the finger trajectory and fine features that generate vibration during scanning. The same material can feel different with speed, normal force, fingertip moisture, tool use, or surface orientation.

Texture is therefore not a fixed waveform stored in an object. It is a response generated by the interaction between surface, body, tool, and movement.

## 2. Perceptual attributes
Common attributes include rough–smooth, flat–bumpy, sticky–slippery, and hard–soft. These are perceptual dimensions, not direct sensor channels. They can correlate with multiple physical features and with one another.

A perceptual space can be constructed from similarity judgments, ratings, or multidimensional scaling. Such spaces support comparison, interpolation, and model evaluation.

## 3. Rendering approaches
- **Geometric:** render explicit surface height or normals.
- **Friction-based:** modulate tangential force or electrostatic friction.
- **Vibration-based:** play acceleration signals as a function of scanning speed and position.
- **Physical models:** simulate contact mechanics and material response.
- **Data-driven:** learn a mapping from measured interaction to output.
- **Hybrid:** combine geometry, friction, vibration, force, and audio.

## 4. Data collection
A texture dataset should record surface identity, tool or finger, normal force, speed, direction, sensor placement, sampling rate, environmental condition, and calibration. Train-test splits must prevent leakage from repeated recordings of the same surface or session.

## 5. Generalization
A model that reproduces held-out trials from known surfaces is not the same as a model that predicts unseen surfaces. Generalization can be evaluated across new samples, materials, users, tools, speeds, forces, or devices.

Image-to-haptic prediction should be evaluated against perceptual targets, not only signal reconstruction error.

## 6. Worked example: authoring an intermediate texture
Suppose two recorded textures are represented in a perceptual attribute space. Interpolating model parameters may create a new signal, but physical interpolation does not guarantee perceptual interpolation. Users should compare the synthesized texture with the intended intermediate attribute target.

## Common misconceptions
- Texture is not independent of scanning motion.
- Signal similarity does not guarantee perceptual similarity.
- A low prediction error on random trial splits may reflect data leakage.
- One roughness rating does not fully describe a surface.

## Key takeaways
- Surface haptics combines mechanics, sensing, modelling, and perception.
- Perceptual spaces provide structured targets for authoring and comparison.
- Dataset design determines what generalization claims are valid.
- Evaluation should include both physical and perceptual measures.

## Self-test
1. What distinguishes macrogeometry and microtexture?
2. Why does scanning speed affect vibration?
3. What is a perceptual attribute space?
4. How can train-test leakage occur in texture datasets?
5. Why is signal RMSE insufficient?

## Practical exercise
Design a dataset for ten surfaces scanned at multiple speeds and forces. Specify sensors, repetitions, splits, metadata, physical metrics, and perceptual validation.

## Recommended reading
- [R19] Hassan et al., haptic texture attribute space and image-based prediction.
- [R20] Culbertson et al., data-driven modelling and rendering of isotropic textures.

<!-- CHAPTER:13 -->
# Wearable and Soft Haptics
LEAD: Wearable and soft interfaces place actuation close to the body and move with the user. Their design must balance stimulus quality with weight, comfort, fit, reaction forces, power, and long-term use.

## Learning objectives
- Compare wearable placements and feedback mechanisms.
- Explain skin stretch, pressure, squeeze, pneumatic, textile, and soft-robotic output.
- Evaluate comfort, fit, fatigue, and task interference.
- Design a wearable validation protocol.

## 1. Placement and attachment
Wearables can target fingertips, hand, wrist, forearm, upper arm, torso, head, or whole body. Attachment determines preload and mechanical transmission. Straps that are too loose reduce output; excessive tightness alters circulation, comfort, and baseline sensation.

A device should accommodate anatomical variation and be reproducibly fitted.

## 2. Feedback mechanisms
Wearables commonly use vibration, normal pressure, squeeze, skin stretch, lateral force, impact, temperature, electrical stimulation, or passive resistance. Soft pneumatic chambers and textiles can distribute pressure over larger areas. Cable or tendon systems can produce directional force while keeping motors away from the body.

## 3. Reaction forces
Every mechanical force requires a reaction path. A fingertip brake may react against the palm, wrist, forearm, or external environment. The reaction can produce unintended cues or discomfort and should be reported as part of the interface.

## 4. Comfort and ergonomics
Evaluate mass, centre of gravity, pressure distribution, heat, noise, motion restriction, donning time, skin irritation, fatigue, hygiene, and compatibility with clothing. Comfort can change over time, so short first-impression ratings are insufficient for prolonged-use claims.

## 5. Softness is not automatic safety
Soft materials reduce sharp contacts but can still generate excessive pressure, heat, or constriction. Pneumatic systems can fail under pressure, and compliant mechanisms can store energy. Safety requires pressure limits, venting, mechanical stops, and monitored operating envelopes.

## 6. Worked example: multimodal forearm band
A band combines four vibration motors and inflatable chambers. The motors communicate direction; the chambers communicate sustained state. Validation includes actuator cross-talk, pressure distribution, timing, motion artifacts, recognition accuracy, comfort over a 30-minute task, and fit across arm sizes.

## Common misconceptions
- Wearable means unencumbered.
- Soft means safe.
- Low device mass guarantees low fatigue.
- A comfortable static fit may fail during movement.

## Key takeaways
- Wearable design is a body-device integration problem.
- Attachment and reaction forces shape the stimulus.
- Comfort and performance must be measured over realistic durations.
- Soft systems still need pressure, thermal, and mechanical safeguards.

## Self-test
1. Why is preload important?
2. Where do reaction forces go in a wearable?
3. What should a prolonged-use study measure?
4. Why can a pneumatic wearable remain hazardous?
5. How can clothing affect output?

## Practical exercise
Develop a requirements table for a hand wearable used for 45 minutes. Include sensation, mass, fit range, pressure, heat, donning, cleaning, safety, and outcome measures.

## Recommended reading
- [R13] Pacchierotti et al., taxonomy and review of wearable hand haptics.

<!-- CHAPTER:14 -->
# Mid-Air and Contactless Haptics
LEAD: Contactless haptics delivers physical stimulation without a conventional worn or handheld interface. Technologies include focused ultrasound, airflow, electrostatic fields, sparks, and low-frequency acoustics.

## Learning objectives
- Explain the physical mechanisms of major contactless approaches.
- Compare force, spatial resolution, workspace, latency, and safety.
- Distinguish command fields from delivered bodily stimulation.
- Design a perceptually calibrated contactless system.

## 1. Focused ultrasound
Phased arrays control the phase of many transducers to focus acoustic energy in space. Acoustic radiation force can deform the skin, and amplitude modulation can create detectable vibration. Multiple focal points or scanned trajectories can form patterns.

Output depends on array geometry, frequency, focus position, modulation, reflections, air conditions, and body orientation. Force is generally much lower than grounded force feedback.

## 2. Airflow
Air jets produce pressure, cooling, and directional stimulation. They can cover large areas and generate clear events, but spatial resolution depends on nozzle geometry and distance. Compressors and valves add noise and latency.

## 3. Electrostatic and high-voltage methods
Electric fields can alter skin forces or produce localized discharge and air movement. These systems require rigorous electrical isolation, current limiting, exposure control, and formal safety review. Perceptual output may combine mechanical, electrical, thermal, auditory, and visual cues.

## 4. Low-frequency sound
Low-frequency acoustic fields can produce pressure and vibration on the body and may be perceived internally as well as at the skin. Room modes, reflections, standing waves, posture, and hearing-related cues complicate control. Acoustic simulation and spatial measurement are necessary before perceptual claims.

## 5. Spatial and temporal control
A nominal focus coordinate is not the same as a perceived point. Measure field position, size, intensity, and repeatability across the workspace. Tracking latency and body motion can produce spatial error. Temporal modulation should account for transducer response and propagation through the field-body interface.

## 6. Perceptual correction
Physical output often varies with position, height, orientation, or frequency. A perceptually correct renderer maps device command to a target perceived intensity using physical measurement and psychophysical calibration. The mapping should be validated on held-out locations or users when generalization is claimed.

## 7. Safety and exposure
Consider acoustic exposure, hearing, electrical risk, thermal rise, airflow pressure, startle, and interactions with medical devices. Report duty cycle, duration, distance, field measurements, and shutdown procedures. “Non-contact” does not mean risk-free.

## 8. Worked example: constant-intensity mid-air point
Measure acoustic output at several positions, then estimate perceived intensity through a controlled comparison task. Fit a command correction for position and frequency. Validate whether corrected points are perceptually matched at untrained positions. Track the hand and report end-to-end alignment error.

## Common misconceptions
- A computed acoustic focus guarantees a perceptually localized point.
- Contactless systems can reproduce arbitrary kinesthetic force.
- Equal field pressure guarantees equal sensation.
- Absence of a wearable does not remove exposure or safety constraints.

## Key takeaways
- Contactless systems trade encumbrance for field complexity and limited force.
- Field measurement and psychophysics are both necessary.
- Spatial co-registration depends on tracking, calibration, and body state.
- Safety must be specified by physical exposure and operating conditions.

## Self-test
1. How does a phased array create a focus?
2. Why can perceived intensity vary with height?
3. What confounds arise in low-frequency acoustic haptics?
4. What does perceptual correction accomplish?
5. Why is duty cycle a safety variable?

## Practical exercise
Design a calibration study for an ultrasound array across a 3D workspace. Specify field measurements, psychophysical task, model, train-test split, alignment metric, and safety reporting.

## Recommended reading
- [R17] Hassan et al., perceptually correct mid-air ultrasound rendering.
- [R18] Hassan et al., low-frequency non-contact body sensations.
