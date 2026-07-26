<!-- CHAPTER:15 -->
# Computational Haptic Modelling
LEAD: A computational haptic model represents how an object or environment responds to interaction and how that response should be converted into perceptually meaningful device output.

## Learning objectives
- Compare physical, empirical, data-driven, and object-centric models.
- Represent contact, stiffness, constraints, deformation, texture, and internal state.
- Separate object behaviour from device-specific rendering.
- Evaluate model fidelity, latency, stability, and perceptual coherence.

## 1. Why model haptic behaviour?
A model allows a system to respond to novel user actions rather than replaying fixed effects. It may predict force from penetration, vibration from surface scanning, deformation from load, or a multimodal response from an object state.

Models serve different purposes: scientific explanation, real-time rendering, compression, prediction, authoring, and control. The simplest model that supports the intended claim is normally preferable.

## 2. Physical models
Physical models derive output from mechanics. A spring-damper model can represent compliance; finite-element models can represent deformation; contact models can represent collision and friction. Physical models provide interpretable parameters but may be computationally expensive or require material properties that are difficult to measure.

Real-time haptics often uses reduced-order or approximate models with bounded computation time.

## 3. Empirical and signal models
An empirical model fits measured input-output relations without fully simulating the underlying physics. Examples include frequency-response models, lookup tables, or texture signals indexed by speed and force.

These models can reproduce measured behaviour efficiently but may extrapolate poorly beyond the calibration range.

## 4. Data-driven models
Machine-learning models can map images, geometry, motion, force, or context to haptic output. They can capture nonlinear and multimodal relations but depend on dataset coverage, split design, uncertainty, and deployment latency.

A model that predicts a sensor waveform is not automatically a perceptual model. Perceptual targets or validation are required when the claim concerns what users feel.

## 5. Object-centric state
An object-centric representation gives each virtual object internal variables such as:

- contact state and contact points;
- stiffness and damping;
- deformation history;
- friction and slip state;
- constraints and breakage;
- texture and temperature;
- confidence or uncertainty.

User action updates the state. A separate rendering layer maps the state to available actuators. This separation makes the object behaviour portable across devices and supports consistent multimodal output.

## 6. Cue scheduling
A system may have limited actuators or bandwidth. Cue scheduling determines which modality represents which property and when cues should be combined. A contact event might use ultrasound for location, vibration for impact, and a tether for resistance. Scheduling should prevent contradictory cues, overload, and unsafe output.

## 7. Real-time requirements
Models must meet bounded update times. Different outputs may need different rates: object-state prediction may run tens of times per second, while texture or force rendering may require hundreds or thousands of updates per second. Use asynchronous architecture carefully so that state and output remain synchronized.

## 8. Worked example: state-based virtual block
A virtual block stores contact, compression, slip, and fracture states. Finger motion updates compression. The object model generates target normal force and slip events. A rendering layer maps normal force to a cable device and slip to vibration. If the force device saturates, the renderer preserves event timing while reducing magnitude and records the limitation.

## Common misconceptions
- A more complex model is not automatically more realistic.
- Object behaviour and actuator command should not be conflated.
- Low average inference time does not guarantee bounded latency.
- Signal prediction accuracy does not establish perceptual validity.

## Key takeaways
- Models should be selected for a defined task and claim.
- Object state can separate interaction logic from device rendering.
- Real-time haptics requires bounded latency and synchronized outputs.
- Physical, data-driven, and perceptual evaluation are complementary.

## Self-test
1. What distinguishes a physical model from an empirical model?
2. Why separate object state and rendering?
3. What is cue scheduling?
4. Why is worst-case latency important?
5. When can a lookup table be preferable to a neural network?

## Practical exercise
Define an object-state model for a virtual sponge. List state variables, update rules, sensor inputs, outputs, actuator mappings, uncertainty, update rates, and validation tasks.

<!-- CHAPTER:16 -->
# Machine Learning for Haptics
LEAD: Machine learning can predict haptic signals, perceptual attributes, object states, or control actions. Valid claims require carefully structured datasets, baselines, splits, uncertainty, and perceptual evaluation.

## Learning objectives
- Formulate haptic classification, regression, generation, and sequence-prediction problems.
- Design leakage-resistant datasets and splits.
- Compare feature-based, convolutional, recurrent, and encoder-decoder models.
- Evaluate generalization and perceptual relevance.

## 1. Define the target
Possible targets include:

- material or event class;
- force, vibration, or deformation time series;
- perceptual attributes such as roughness or hardness;
- contact or slip state;
- actuator command;
- user performance or preference.

The target determines labels, loss functions, sampling, and validation. Predicting a device command may reproduce one apparatus but fail to represent the underlying object.

## 2. Input representation
Haptic inputs may include force, torque, acceleration, position, audio, image features, geometry, motor current, pressure maps, and user context. Raw time series preserve information but require more data. Engineered features can improve interpretability and data efficiency.

Signals should be synchronized, calibrated, normalized, and segmented using rules that do not leak labels.

## 3. Model families
- **Linear and tree models:** strong interpretable baselines.
- **1D convolutional networks:** learn local temporal patterns.
- **RNNs and LSTMs:** model sequential dependencies.
- **Encoder-decoder networks:** map one sequence or modality to another.
- **Transformers:** model long-range relations but can be data intensive.
- **Multimodal fusion models:** combine signals at early, intermediate, or late stages.

Model choice should be justified against simpler baselines.

## 4. Dataset splits
Random trial splits can leak surface, user, device, or session identity. Stronger tests hold out the unit relevant to the claim:

- leave-one-surface-out;
- leave-one-user-out;
- leave-one-session-out;
- cross-device or cross-laboratory evaluation;
- unseen speed, force, or trajectory ranges.

State the unit of independence and prevent repeated measurements of the same item from appearing in both training and test sets.

## 5. Loss functions and metrics
Signal metrics include MAE, RMSE, correlation, spectral distance, and event timing. Classification uses accuracy, balanced accuracy, F1, calibration, and confusion matrices. Perceptual targets may need ordinal losses or attribute-specific weighting.

No single physical metric guarantees perceptual equivalence. Human evaluation remains necessary for rendering claims.

## 6. Uncertainty and failure
A deployed model should detect inputs outside its training distribution and expose uncertainty. Unsafe extrapolation should trigger conservative output, fallback models, or no actuation. Analyze failure by user, surface, condition, and body site rather than only average performance.

## 7. Reproducibility
Release data dictionaries, preprocessing, splits, seeds, model configurations, training logs, evaluation scripts, and license information. Report compute resources and inference latency on the deployment hardware.

## Worked example: predicting texture attributes from images
Images are paired with perceptual ratings for rough–smooth, flat–bumpy, sticky–slippery, and hard–soft. A model predicts attributes for unseen surfaces. A valid split holds out complete physical surfaces, not just images of the same surface. Evaluation includes attribute error, ranking, uncertainty, and a perceptual study comparing predicted and measured relationships.

## Common misconceptions
- More samples do not help if they are repeated measurements of the same few objects.
- High test accuracy can result from leakage.
- Deep learning is not automatically superior to calibrated baselines.
- Signal similarity is not equivalent to perceptual similarity.

## Key takeaways
- Define the intended generalization before collecting data.
- Splits must match the scientific claim.
- Include simple baselines and uncertainty.
- Perceptual validation is required for perceptual claims.

## Self-test
1. What unit should be held out for unseen-surface generalization?
2. Why can random trial splits leak information?
3. When is a 1D CNN appropriate?
4. What should happen outside the training distribution?
5. Why report deployment latency?

## Practical exercise
Design a machine-learning benchmark for predicting impact feedback from motion and force signals. Specify target, inputs, synchronization, splits, baselines, metrics, uncertainty, and human evaluation.

## Recommended reading
- [R19] Hassan et al., haptic attribute prediction using 1D-CNN.
- [R20] Culbertson et al., data-driven texture modelling.

<!-- CHAPTER:17 -->
# Designing Haptic Experiments
LEAD: A strong haptics experiment connects a precise perceptual or interaction question to calibrated stimulation, controlled procedures, appropriate analysis, and transparent reporting.

## Learning objectives
- Formulate variables, hypotheses, and estimands.
- Choose within-subject, between-subject, factorial, or psychophysical designs.
- Plan randomization, counterbalancing, power, and exclusions.
- Preregister and document a reproducible protocol.

## 1. From question to estimand
A research question should identify the population, manipulation, comparison, outcome, and context. An estimand states what effect is to be estimated, such as the mean within-participant difference in path error between visual-only and visual-plus-haptic conditions.

Avoid vague questions such as “Does haptics improve immersion?” Define which haptic system, task, measure, and baseline are involved.

## 2. Independent and dependent variables
Independent variables include device condition, frequency, force, delay, body site, modality, and task. Dependent variables may include threshold, accuracy, completion time, force error, workload, comfort, realism, or preference.

Manipulation checks verify that the intended physical or perceptual difference occurred. For example, measured acceleration can confirm output, while a discrimination task can confirm that conditions were perceptually distinct.

## 3. Within- and between-subject designs
Within-subject designs improve power by comparing each participant with themselves but are vulnerable to learning, fatigue, carryover, and demand effects. Between-subject designs avoid some carryover but require more participants and careful group equivalence.

Mixed designs can separate repeated technical conditions from participant-group differences.

## 4. Randomization and counterbalancing
Randomize trial order when order is not part of the hypothesis. Counterbalance condition blocks using Latin squares or balanced sequences. Separate practice from recorded trials and define retraining procedures.

Full counterbalancing may be impossible with many conditions; report the method used and test for residual order effects.

## 5. Sample size
Determine sample size from the primary estimand, expected effect, variability, design, and acceptable error. Pilot data can estimate feasibility and variance but may give unstable effect sizes. Sequential or Bayesian designs require predefined stopping rules.

“Similar to earlier studies” is insufficient without relating the earlier design and outcome to the present one.

## 6. Blinding and confounds
Participants may hear actuators, see device motion, feel heat, or infer condition from setup. Experimenters may influence timing or instructions. Use masking, standardized scripts, automated presentation, and blinded coding where practical.

Measure unintended cues when they cannot be eliminated.

## 7. Subjective and objective outcomes
Objective performance and subjective experience answer different questions. A device may improve accuracy while reducing comfort, or increase realism without improving learning. Use validated questionnaires where appropriate and preserve item-level interpretation.

## 8. Ethics and data management
Obtain ethics approval before recruitment when required. Provide informed consent, withdrawal procedures, risk information, and data-protection measures. Minimize collection of identifiable data. Define retention, anonymization, and sharing before the study begins.

## 9. Preregistration and reporting
A preregistration can include hypotheses, primary outcomes, sample size, exclusions, randomization, models, contrasts, and stopping rules. Deviations are permissible when transparently reported as exploratory.

Release calibrated stimuli, code, device descriptions, and anonymized data when legal and ethical constraints allow.

## Worked example: visual versus haptic boundary localization
Participants move a tracked finger to locate a virtual boundary under visual-only and visual-plus-haptic conditions. The primary outcome is absolute localization error. Conditions are within-subject and counterbalanced. Physical co-registration is measured before each block. A secondary outcome is workload. The analysis estimates the paired condition effect with uncertainty and checks whether drift predicts error.

## Common misconceptions
- More dependent variables do not strengthen a study.
- Within-subject design does not remove order effects.
- Statistical significance does not establish practical importance.
- A pilot study is not automatically a powered confirmatory study.

## Key takeaways
- Define the estimand before selecting the test.
- Calibrate and verify the manipulation.
- Control order, learning, fatigue, and unintended cues.
- Separate confirmatory and exploratory analyses.
- Make the protocol reproducible.

## Self-test
1. What is an estimand?
2. Why can within-subject designs suffer carryover?
3. What is a manipulation check?
4. When is a subjective measure necessary?
5. What belongs in a preregistration?

## Practical exercise
Write a one-page preregistration for a study comparing three texture-rendering methods. Include hypotheses, primary outcome, design, sample size rationale, order control, exclusions, analysis, and open-science plan.

<!-- CHAPTER:18 -->
# Haptic System Evaluation
LEAD: Haptic evaluation should connect device physics, control performance, perceptual capability, usability, and task outcomes. No single metric adequately characterizes a haptic system.

## Learning objectives
- Construct a layered evaluation plan.
- Measure force, displacement, bandwidth, latency, accuracy, repeatability, and spatial resolution.
- Select perceptual and task baselines.
- Report operating conditions and uncertainty.

## 1. Layered evaluation
A useful framework contains four layers:

1. **Component:** sensor and actuator characterization.
2. **System:** closed-loop force, position, timing, workspace, and safety.
3. **Perception:** detection, discrimination, quality, and comfort.
4. **Task:** accuracy, time, learning, workload, and transfer.

Success at one layer does not guarantee success at the next. A device can have excellent bandwidth but poor mounting, or clear sensations that do not improve performance.

## 2. Physical characterization
Measure the output relevant to the user:

- static and dynamic force;
- displacement or acceleration;
- frequency response and bandwidth;
- rise time and transient response;
- noise and drift;
- cross-talk;
- spatial field or workspace;
- thermal and acoustic output;
- repeatability across sessions.

State instrumentation, calibration, preload, geometry, filtering, and uncertainty.

## 3. Latency
Latency can be decomposed into sensing, communication, computation, scheduling, driver, actuator, and mechanical response. Report median and distribution, not only one nominal value. Jitter can be perceptually and dynamically important.

Measure end-to-end delay with a shared physical reference when possible.

## 4. Accuracy and repeatability
Accuracy compares output with a target or reference. Repeatability measures consistency under the same conditions. Reproducibility concerns changes across operators, setups, devices, or laboratories.

Spatial accuracy should be mapped across the workspace rather than reported from a central point alone.

## 5. Perceptual evaluation
Select methods from the perceptual claim. Detection thresholds support minimum-output claims. JNDs support resolution claims. Identification supports information capacity. Ratings support comfort or realism. Preference alone does not establish accuracy.

Include a baseline such as visual-only, audio-only, conventional device, sham stimulation, or physical reference.

## 6. Task performance
Task measures should represent the intended application. Examples include boundary localization, path tracking, stiffness discrimination, object recognition, grasp stability, error rate, skill transfer, and rehabilitation adherence.

A statistically significant laboratory benefit may be too small or slow for practical use. Report effect size, uncertainty, failure cases, and user variability.

## 7. Comfort and acceptance
Measure pressure, heat, fatigue, pain, restriction, donning time, and willingness to reuse. For wearables, include realistic duration and movement. For contactless systems, include exposure, sound, and environmental constraints.

## Worked example: evaluating a mid-air texture system
Component tests measure acoustic output and modulation. System tests map focal position and latency. Perceptual tests estimate detection and texture discrimination. Task tests compare material identification against visual-only and vibration baselines. Safety reporting includes exposure, duty cycle, and session duration.

## Common misconceptions
- Peak actuator output is not a complete system specification.
- User preference does not establish rendering fidelity.
- One body site or participant group does not establish generality.
- Average latency can hide damaging jitter.

## Key takeaways
- Evaluate from component physics through task outcome.
- Match metrics to claims.
- Use meaningful baselines and uncertainty.
- Report operating conditions, limitations, and failure cases.

## Self-test
1. What are the four evaluation layers?
2. Why map output across the workspace?
3. What is the difference between repeatability and reproducibility?
4. Which method supports a spatial-resolution claim?
5. Why report latency distribution?

## Practical exercise
Create an evaluation matrix for a new wearable force-feedback device. Include component, system, perception, task, comfort, safety, baselines, and pass/fail criteria.
