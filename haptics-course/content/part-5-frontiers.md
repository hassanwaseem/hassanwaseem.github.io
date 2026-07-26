<!-- CHAPTER:19 -->
# Haptics in Virtual and Augmented Reality
LEAD: Haptics in XR links tracked bodies, virtual geometry, physical devices, and multisensory perception. The central challenge is maintaining plausible spatial and temporal correspondence while preserving natural interaction.

## Learning objectives
- Explain visual-haptic co-registration and latency.
- Compare controllers, wearables, passive props, encountered surfaces, and contactless feedback.
- Describe pseudo-haptics, redirected touch, retargeting, presence, and embodiment.
- Evaluate XR haptics against appropriate baselines.

## 1. The alignment problem
A virtual hand, physical hand, haptic device, and virtual object may each occupy a different coordinate frame. Calibration estimates transformations between them. Errors arise from tracking bias, drift, occlusion, display calibration, device deformation, and timing.

Co-registration should be measured across the usable workspace and over time. A low central-point error does not establish stable alignment during bimanual motion.

## 2. Device strategies
XR systems use handheld controllers, grounded devices, fingertip wearables, gloves, passive props, robots, cable systems, skin stimulation, and mid-air feedback. No strategy reproduces every property. Handheld controllers are robust but occupy the hand. Gloves move with the user but add encumbrance. Passive props offer strong contact but are limited to their physical geometry. Encountered systems provide contact on demand but require prediction and safe robotics.

## 3. Pseudo-haptics
Pseudo-haptics uses visual manipulation to change perceived physical properties without equivalent mechanical force. Slowing a visual cursor can make motion feel more resistant; changing object deformation can alter apparent stiffness.

Pseudo-haptics can complement weak hardware but should not be described as physical force feedback. Its effectiveness depends on visual attention, motor control, expectation, and cue conflict.

## 4. Redirected touch and retargeting
Retargeting maps several virtual objects to fewer physical surfaces. Small visual or hand-representation distortions can redirect the user toward available props. The technique extends physical coverage but may reduce ownership, agency, or spatial accuracy when distortions become noticeable.

## 5. Presence and embodiment
Haptic contact can strengthen presence and embodiment when it is spatially, temporally, and causally congruent. More feedback is not always better. Incorrect force direction or delayed contact can be more disruptive than no haptics.

Measure body ownership, agency, self-location, realism, task performance, and comfort separately.

## 6. Worked example: touching a virtual panel
A user presses virtual buttons with a tracked finger. A passive physical panel provides contact while a tactor supplies click transients. Calibration maps the panel plane to the virtual interface. Evaluation measures spatial error, click timing, selection accuracy, perceived realism, and whether retargeting between buttons is detected.

## Common misconceptions
- Visual and haptic coordinates do not stay aligned automatically.
- Presence is not synonymous with realism.
- Pseudo-haptics is not mechanical force.
- A wearable that frees the controller may still restrict natural movement.

## Key takeaways
- Co-registration is a measured system property.
- XR haptics is a multisensory integration problem.
- Device strategy should follow task and workspace requirements.
- Evaluate performance, embodiment, and comfort separately.

## Self-test
1. What causes co-registration drift?
2. How does pseudo-haptics create resistance?
3. What is retargeting?
4. Why can incorrect haptics reduce presence?
5. Which embodiment components should be separated?

## Practical exercise
Design an XR study comparing controller vibration, passive contact, and combined feedback for button pressing. Specify calibration, latency measurement, task outcomes, embodiment measures, and detection of mismatch.

<!-- CHAPTER:20 -->
# Teleoperation and Shared Haptic Interaction
LEAD: Teleoperation connects a human operator to a remote robot or environment. Haptic feedback can improve manipulation and awareness, but communication delay, packet loss, stability, and shared control complicate the loop.

## Learning objectives
- Describe bilateral teleoperation architecture.
- Explain transparency-stability trade-offs under delay.
- Introduce scattering, passivity, and model-mediated approaches.
- Design shared and collaborative haptic control.

## 1. Bilateral interaction
A master device measures operator motion or force. A remote slave interacts with the environment. Sensor information returns to the operator as force, vibration, or other cues. The desired experience is transparent: free motion should feel free, and remote contact should feel like the remote environment.

## 2. Delay and instability
Communication delay separates action and feedback and can inject energy into the coupled loop. Variable delay and packet loss are especially difficult. Simply increasing force gain to make contact stronger may destabilize the system.

Stability can be improved by damping, passivity control, wave variables, local control, predictive models, or reduced feedback bandwidth, but each may reduce transparency.

## 3. Model-mediated teleoperation
A local model of the remote environment is updated from remote measurements. The operator interacts with the local model at high rate while the slower network updates model parameters. This can provide crisp contact under delay but fails when the model is wrong or the environment changes unexpectedly.

Uncertainty and model-update events should be communicated to the operator.

## 4. Shared control
Shared control combines human intent with autonomous assistance. The system may guide a tool, reject unsafe motion, stabilize grasp, or suggest a path. Haptic guidance can communicate assistance continuously, but excessive authority can reduce agency or cause conflict.

The division of control should be explicit and evaluated under success and failure conditions.

## 5. Collaborative haptics
Multiple users can manipulate a shared object or exchange touch remotely. Challenges include distributed state consistency, conflict resolution, privacy, social interpretation, and asymmetric devices. A force that is mechanically safe may still be socially inappropriate or misleading.

## 6. Worked example: remote palpation
A clinician moves a local force-feedback probe while a robot palpates a remote sample. Force feedback is filtered and limited. Under network delay, a local tissue model renders contact and is updated from measured stiffness. Validation compares direct local palpation, delayed direct feedback, and model-mediated feedback for localization and stiffness discrimination.

## Common misconceptions
- Higher feedback gain does not always improve transparency.
- A stable system can still feel poor.
- A local model is only as reliable as its update and uncertainty handling.
- Shared control should not hide autonomous intervention.

## Key takeaways
- Teleoperation balances transparency, stability, latency, and safety.
- Local models can reduce apparent delay but introduce model error.
- Shared control requires clear authority and failure behaviour.
- Task performance and operator trust should both be evaluated.

## Self-test
1. Why can time delay destabilize bilateral control?
2. What does model mediation move to the local side?
3. How can passivity improve robustness?
4. What is authority allocation in shared control?
5. Why test model failure conditions?

## Practical exercise
Specify a delayed teleoperation benchmark with at least three delay conditions. Include controller strategies, stability criteria, task metrics, perceptual measures, and failure handling.

## Recommended reading
- [R22] Hannaford and Ryu, time-domain passivity control.
- [R23] Niemeyer and Slotine, stable adaptive teleoperation.

<!-- CHAPTER:21 -->
# Haptics for Training, Medicine, and Rehabilitation
LEAD: Application-driven haptics must improve a clinically or educationally meaningful outcome, not merely produce a convincing sensation. Design requires domain expertise, safety, transfer measures, and realistic deployment constraints.

## Learning objectives
- Identify haptic roles in simulation, palpation, motor training, rehabilitation, and accessibility.
- Distinguish realism, skill acquisition, transfer, and clinical outcome.
- Design studies with domain experts and target users.
- Address ethics, hygiene, accessibility, and regulation.

## 1. Training and simulation
Haptics can communicate contact, tool constraints, tissue stiffness, impact, or error. A simulator should specify the trained skill and mechanism of learning. Physical realism may help, but task-relevant augmented cues can sometimes support learning more effectively than literal reproduction.

Training evaluation should include retention and transfer to a different task or physical system, not only immediate simulator performance.

## 2. Palpation and surgical interaction
Palpation depends on force-displacement relations, spatial scanning, tissue deformation, and comparison across locations. A simulator should represent relevant variability and allow natural exploratory movements. Validation can compare expert discrimination, localization of embedded features, and diagnostic decisions.

## 3. Rehabilitation
Haptic systems can guide motion, resist movement, provide error augmentation, reward successful actions, or create engaging tasks. Assistance should be adjustable and should not cause the user to become dependent on the device.

Clinical relevance requires collaboration with therapists, appropriate target populations, functional outcomes, and consideration of fatigue, spasticity, pain, and cognitive load.

## 4. Accessibility and sensory substitution
Haptics can convey spatial layout, navigation, alerts, text, or environmental information. Accessible design should involve users with relevant lived experience from the beginning. Information rate, learnability, comfort, discretion, and compatibility with assistive technologies matter as much as detectability.

## 5. Safety and ethics
Medical and rehabilitation contexts may involve vulnerable participants, reduced sensation, implanted devices, pain, or fatigue. Use conservative limits, monitoring, stop procedures, and clinical oversight. Protect health and performance data and avoid claims beyond the validated population and task.

## 6. Deployment constraints
Consider cleaning, sterilization, setup time, calibration, clinician workload, maintenance, cost, space, and interoperability. A technically advanced device that requires lengthy alignment may be unsuitable for routine care.

## 7. Worked example: virtual nodule palpation
A haptic surface contains virtual regions of altered stiffness. Clinicians locate and characterize nodules. The study measures localization error, confidence, exploration trajectory, force, and workload. Baselines include a physical phantom and visual-only simulation. Transfer is tested on unseen nodule sizes and locations.

## Common misconceptions
- Realism does not guarantee learning.
- Healthy-participant performance does not establish clinical efficacy.
- More assistance does not always improve rehabilitation.
- Accessibility should not be added after the device is complete.

## Key takeaways
- Begin with the target skill or functional outcome.
- Include domain experts and target users.
- Measure retention, transfer, safety, and workflow.
- Limit claims to the validated population and context.

## Self-test
1. What distinguishes simulator performance from skill transfer?
2. Why can augmented feedback outperform realism?
3. What is assistance dependence?
4. Which deployment factors matter in a clinic?
5. Why is participatory design important for accessibility?

## Practical exercise
Design a pilot study for haptic hand rehabilitation. Define target function, assistance strategy, progression, outcome measures, safety monitoring, user involvement, and criteria for a later controlled trial.

<!-- CHAPTER:22 -->
# Volumetric and Spatial Haptics
LEAD: Volumetric haptics aims to make three-dimensional visual content physically perceivable within its display volume. It requires spatial co-registration, free-hand access, multimodal force generation, and object-centred computation.

## Learning objectives
- Define volumetric haptic interaction.
- Explain co-registration, bimanual access, and conforming contact.
- Compare contactless, wearable, tethered, robotic, and deformable approaches.
- Identify open research bottlenecks.

## 1. From volumetric graphics to tangible volumes
A reach-through volumetric display allows the hand to enter the visual volume. Adding haptics requires feedback at the same apparent locations while preserving visibility and motion. Conventional grounded mechanisms can obstruct the volume; weak contactless forces may indicate location but not resistance.

The problem is therefore not simply to place a tactor near a display. The visual and mechanical volumes must coexist.

## 2. Co-registration
Spatial alignment must account for visual reconstruction, hand tracking, device coordinates, flexible materials, and body motion. Temporal alignment must account for sensing, model update, actuator response, and display latency.

Relevant metrics include point error, boundary localization, drift, deformation-dependent error, and bimanual consistency across the workspace.

## 3. Multimodal cue roles
Different technologies can provide complementary cues:

- focused ultrasound for spatial markers or surface outlines;
- vibration for impact and texture;
- tethers or motors for resistance;
- conforming sheets for distributed contact;
- audio for event confirmation;
- visual deformation for pseudo-haptic reinforcement.

The cue set should follow an object model so that modalities remain causally coherent.

## 4. Bimanual and unencumbered interaction
Two-handed interaction increases workspace, occlusion, tracking, collision, and safety complexity. Wearables may provide reliable local stimulation but reduce unencumbered interaction. Flexible surfaces can conform to hands but require deformable tracking and distributed actuation.

## 5. Object-centred behaviour
A volumetric object can maintain states such as contact, stiffness, constraint, deformation, and texture. User gestures update the state, and a perceptual renderer maps it to available devices. This avoids unrelated gesture-triggered effects and supports consistent object response.

## 6. Research bottlenecks
Open problems include:

- strong yet safe force in open volumes;
- stable co-registration under deformation;
- dense bimanual contact without bulky wearables;
- shared benchmarks and perceptual ranges;
- high-rate multimodal rendering;
- scalable safety and exposure validation;
- evaluation of learning and functional benefit.

## 7. Worked example: tangible volumetric sphere
A user reaches toward a floating sphere. Ultrasound marks the boundary before contact. A flexible surface provides distributed pressure when the hand intersects the sphere, and vibration signals slip. A state model updates deformation. Evaluation measures alignment, boundary localization, force, bimanual shape recognition, realism, workload, and safety.

## Common misconceptions
- A visual hologram and a haptic point at similar coordinates are not automatically co-registered.
- Weak contactless force alone may not represent object resistance.
- A deformable surface does not remove tracking requirements.
- Bimanual interaction is not two independent single-hand interactions.

## Key takeaways
- Volumetric haptics is a system-level integration problem.
- Multiple modalities can divide spatial, event, texture, and resistance roles.
- Object state can preserve coherent behaviour across devices.
- Co-registration and safety require continuous measurement.

## Self-test
1. What makes reach-through haptics difficult?
2. Which errors should co-registration metrics capture?
3. How can modalities divide roles?
4. Why is deformable tracking necessary?
5. What changes in bimanual interaction?

## Practical exercise
Specify a volumetric haptic demonstrator for a deformable object. Include display, tracking, cue technologies, state model, calibration, safety envelope, and evaluation KPIs.

<!-- CHAPTER:23 -->
# Safety, Ethics, and Responsible Design
LEAD: Haptic systems apply physical energy to people and often collect detailed movement and physiological data. Responsible design integrates safety, consent, accessibility, privacy, and reproducibility from the first prototype.

## Learning objectives
- Identify mechanical, acoustic, electrical, thermal, and ergonomic hazards.
- Design operating envelopes, monitoring, and emergency behaviour.
- Address consent, privacy, vulnerable users, and affective manipulation.
- Apply responsible practices to AI-driven and data-intensive haptics.

## 1. Hazard analysis
Begin with the full energy path and foreseeable misuse. Hazards may include excessive force, trapped fingers, cable entanglement, unstable motion, vibration exposure, high sound pressure, electric shock, burns, pressure injury, allergic contact, startle, fatigue, and interference with medical devices.

Risk depends on severity and likelihood. Controls should follow a hierarchy: eliminate the hazard, reduce it mechanically, add sensing and limits, then use procedures and training.

## 2. Mechanical safety
Use physical stops, torque or force limits, compliant elements, guarded pinch points, emergency release, and safe shutdown. Test sensor failure, communication loss, tracking loss, and power interruption. A controller should transition to a predictable low-energy state.

## 3. Acoustic, electrical, and thermal safety
For acoustic systems, measure exposure under the actual modulation, distance, duty cycle, reflections, and session duration. For high-voltage systems, use isolation, current limiting, enclosures, interlocks, and qualified review. For thermal devices, monitor surface temperature and heat flow; skin damage can occur before discomfort is reported reliably.

## 4. Human-participant ethics
Provide clear information about stimuli, risks, recording, withdrawal, and data use. Avoid undue pressure to tolerate discomfort. Define stopping rules and report adverse events. Additional safeguards may be needed for children, patients, people with reduced sensation, or people unable to consent independently.

## 5. Privacy
Hand trajectories, force profiles, tremor, reaction time, and physiological responses can reveal identity or health-related information. Collect only necessary data, separate identifiers, define access, encrypt storage, document retention, and consider re-identification risk before public release.

## 6. Affective and social touch
Haptic cues can communicate urgency, intimacy, authority, or emotion. Remote touch and body-centred stimulation raise questions of consent, context, and unwanted contact. Users should control who can send touch, when, where, and at what intensity.

## 7. AI and automation
AI models may predict object response, adapt output, or infer user state. Training data should be documented for population coverage, consent, and bias. Models should expose uncertainty, limit outputs through independent safety layers, and avoid autonomous escalation of stimulation.

## 8. Accessibility and inclusion
A safe average setting may be ineffective or uncomfortable for specific users. Include varied body sizes, ages, sensory abilities, skin properties, and mobility. Offer alternative modalities and adjustable output without making accessibility an optional afterthought.

## 9. Reproducibility as responsibility
Incomplete hardware and stimulus reporting prevents others from assessing safety. Release calibration, operating limits, negative results, failure modes, and versioned code when possible. Protect commercially sensitive details without obscuring participant risk.

## Worked example: contactless body stimulation
Before a study, map the field, define exposure and duty-cycle limits, test unintended sound and heating, exclude incompatible medical devices where justified, provide stop controls, monitor participant state, and record delivered exposure. AI-based intensity adaptation remains inside a hard independent envelope.

## Common misconceptions
- Soft or contactless systems are not automatically safe.
- Participant consent does not replace risk reduction.
- Anonymized trajectories may still be identifiable.
- AI prediction accuracy does not establish safe output.

## Key takeaways
- Safety must be engineered, measured, and tested under failure.
- Consent includes control over bodily stimulation and data.
- Privacy applies to motion and force data.
- Independent limits should constrain adaptive algorithms.
- Transparent reporting supports both ethics and reproducibility.

## Self-test
1. What is the hierarchy of risk controls?
2. Why are software limits alone insufficient?
3. How can motion data become sensitive?
4. What controls are needed for remote social touch?
5. Why should AI output be bounded independently?

## Practical exercise
Create a hazard and ethics register for a wearable pneumatic device. Include hazard, cause, affected user, severity, likelihood, prevention, monitoring, stop trigger, and residual risk.

<!-- CHAPTER:24 -->
# How to Conduct Haptics Research
LEAD: Haptics research succeeds when a clear question is connected to a measurable physical interaction, a reproducible prototype, a valid perceptual method, and a transparent scientific claim.

## Learning objectives
- Move from research gap to testable question.
- Plan prototype, calibration, pilot, confirmatory study, and analysis.
- Write claims that match evidence.
- Release hardware, software, stimuli, and data responsibly.

## 1. Define the contribution
A haptics project can contribute:

- a new physical effect or actuator;
- an interface or interaction technique;
- a rendering or control method;
- a perceptual finding;
- a model or dataset;
- an application outcome;
- a theory, taxonomy, or design method.

State the primary contribution and the evidence required. Building a device and testing user preference may not establish a new perceptual principle.

## 2. Review the literature
Search across haptics, robotics, HCI, psychophysics, neuroscience, control, materials, and the target application. Build a claim-evidence matrix: what has been demonstrated, under which conditions, with which limitations, and what remains unresolved.

Verify terminology and distinguish independent invention from recombination of established components.

## 3. Write the research question
A useful question identifies the system, manipulation, comparison, outcome, user population, and context. Convert broad ambition into falsifiable hypotheses or clearly framed exploratory objectives.

Example: “Does position-corrected ultrasound modulation reduce perceived-intensity variation across a 20 cm workspace compared with constant command amplitude?”

## 4. Build the minimum informative prototype
Construct the simplest system that can test the key mechanism. Instrument it from the beginning. Separate prototype convenience from experimental validity. Record versions of hardware, firmware, CAD, drivers, and dependencies.

## 5. Calibrate before user testing
Characterize sensor accuracy, actuator output, spatial variation, latency, noise, drift, safety, and repeatability. Define an operating envelope. A user study should not be the first time the output is measured.

## 6. Pilot strategically
A pilot tests feasibility, instructions, trial duration, stimulus range, failure modes, and data quality. It is not merely a smaller final study. Use it to refine the design and preregister the confirmatory protocol.

## 7. Choose the experimental method
Match the method to the claim:

- thresholds for detectability or resolution;
- forced choice for discrimination;
- identification for information transfer;
- task performance for functional benefit;
- ratings for experience and comfort;
- interviews for strategy and interpretation;
- longitudinal measures for learning and adaptation.

## 8. Analyze transparently
Predefine primary outcomes, models, contrasts, exclusions, and stopping rules. Show participant-level data and uncertainty. Check assumptions, report effect sizes, and distinguish confirmatory from exploratory analyses.

A null result can still constrain design space when measurement sensitivity and operating conditions are clear.

## 9. Write claims that match evidence
Avoid universal language from one device, body site, task, or population. Separate:

- physical capability;
- perceptual detectability;
- subjective quality;
- task benefit;
- application transfer.

Each requires different evidence.

## 10. Release and maintain
Useful open resources include CAD, bill of materials, firmware, software, calibration scripts, experiment code, anonymized data, data dictionaries, analysis, environment files, and licenses. Archive stable versions with persistent identifiers. Document safety and exclusions.

## 11. A practical research workflow
1. Define the gap and contribution.
2. Create a claim-evidence matrix.
3. Specify the minimum prototype.
4. Instrument and calibrate.
5. Establish safety and ethics.
6. Run a feasibility pilot.
7. Preregister the main study.
8. Collect synchronized data.
9. Analyze with uncertainty.
10. Validate limitations and failure cases.
11. Write claims at the correct level.
12. Release reproducible resources.

## Worked example: new texture renderer
The project claims that a data-driven renderer improves perceptual similarity for unseen textures. It collects calibrated force and acceleration data, holds out complete surfaces, compares against physical and signal baselines, measures inference latency, and conducts a forced-choice similarity study. The paper reports where the model fails and releases fixed train-test splits.

## Common misconceptions
- A novel prototype does not automatically provide a novel scientific contribution.
- A user study is not a substitute for device characterization.
- Positive ratings do not establish physical accuracy.
- Open-source code without data, calibration, and versions may remain irreproducible.

## Key takeaways
- Let the claim determine the evidence.
- Instrument and calibrate before evaluation.
- Use pilots to refine rather than confirm.
- Separate physical, perceptual, and functional outcomes.
- Treat reproducibility and safety as design requirements.

## Self-test
1. What kinds of contribution can a haptics paper make?
2. What belongs in a claim-evidence matrix?
3. Why should calibration precede a user study?
4. How does a pilot differ from a main study?
5. What resources make a release reproducible?

## Practical exercise
Write a two-page research plan for a new haptic interface. Include contribution, question, literature gap, prototype, calibration, safety, pilot, main experiment, analysis, claims, timeline, and release plan.

## Recommended reading
- [R16] Schneider et al., haptic experience design practice.
- [R25] ISO 9241-210, human-centred design.
