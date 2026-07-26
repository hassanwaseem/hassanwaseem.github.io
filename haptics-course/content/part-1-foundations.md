<!-- CHAPTER:01 -->
# What Is Haptics? From Physical Interaction to Perception
LEAD: Haptics is the science and engineering of touch-mediated perception and interaction. It connects physical events, sensing, computation, actuation, bodily stimulation, perception, and action.

## Learning objectives
- Define haptics without reducing it to vibration.
- Distinguish cutaneous, kinesthetic, proprioceptive, and thermal information.
- Explain active and passive touch.
- Describe the haptic interaction loop.
- Classify a haptic system by stimulus, body site, form factor, and control architecture.

## 1. Begin with an ordinary button
When a finger presses a mechanical button, several events occur. The fingertip contacts a surface and the skin deforms. The mechanism resists motion and stores energy. At the switching point, it moves abruptly and generates a transient force, vibration, and often sound. The nervous system receives pressure patterns at the skin, vibration, joint motion, and muscle-force information. Vision and audition may confirm that the event occurred.

A phone can imitate part of this event using a short vibration. A force-feedback device can render resistance and release. An ultrasound array can generate a localized mid-air sensation. None reproduces the full button, but each can reproduce selected information that the user may interpret as a click.

> The central engineering problem is not merely to generate a signal. It is to produce a controlled physical stimulus that yields the intended perception during interaction.

## 2. A working definition
**Haptics** covers the study and design of touch-mediated sensing, perception, action, communication, and control. It includes mechanics, physiology, psychophysics, sensors, actuators, control algorithms, rendering, interaction design, embodiment, and task performance.

The term **tactile** normally refers to skin-mediated cues such as pressure, vibration, skin stretch, friction, and temperature. **Kinesthetic** feedback concerns forces and motions perceived through the limbs and musculoskeletal system. **Proprioception** concerns body position and movement. Real interactions usually combine these channels.

## 3. Major haptic information channels
| Channel | Typical physical cause | Example implementation | Example percept |
|---|---|---|---|
| Cutaneous pressure | Local skin indentation | Pin array or pneumatic pouch | Contact, edge, shape |
| Vibration | Time-varying acceleration | LRA, voice coil, piezoelectric actuator | Buzz, click, texture |
| Skin stretch | Tangential deformation | Moving contactor or belt | Direction, friction, slip |
| Kinesthetic force | Resistance to limb motion | Motorized linkage, cable, brake | Weight, stiffness, constraint |
| Proprioceptive information | Changes in limb and muscle state | Indirectly altered by force and motion | Position, movement, effort |
| Thermal stimulation | Heat flow into or out of skin | Peltier element or heater | Warmth, coolness, material |
| Contactless stimulation | Acoustic radiation, airflow, electric field | Ultrasound array or air jet | Mid-air point, pulse, diffuse pressure |

These channels are not independent. Texture can be inferred from vibration, friction, geometry, and movement. Stiffness depends on the relationship between force and displacement but may also be influenced by visual deformation and sound.

## 4. Active and passive touch
In **passive touch**, a stimulus is delivered to a relatively stationary body site. A tactor vibrating on the wrist is a typical example. Passive stimulation is useful when precise experimental control is important.

In **active touch**, the person deliberately moves to obtain information. Sliding reveals texture, pressing reveals compliance, enclosing reveals shape, and lifting reveals weight. The movement selected by the user changes the stimulus arriving at the receptors. Action therefore becomes part of sensing.

This distinction matters experimentally. A threshold measured with passive fingertip stimulation may not transfer directly to an active grasping task.

## 5. The haptic interaction loop
A haptic system can be described as a closed loop:

1. **User action:** a finger, hand, limb, or body moves or applies force.
2. **Sensing:** the system measures position, velocity, force, contact, or context.
3. **Computation:** a model estimates contact and determines the response of the virtual or remote object.
4. **Actuation:** motors, tactors, pneumatics, acoustics, or other mechanisms are commanded.
5. **Physical stimulus:** force, displacement, acceleration, temperature, or airflow reaches the body.
6. **Perception:** the nervous system combines the stimulus with vision, audition, expectation, and prior experience.
7. **User response:** movement changes, beginning the next cycle.

Failure can occur at every stage. Poor sensing produces incorrect contact. Latency separates action from feedback. An actuator may reproduce the command electrically but not mechanically at the skin. A physically accurate output may still feel wrong because perception is nonlinear or context-dependent.

## 6. Device form factors
Haptic interfaces are commonly described as:

- **Grounded:** forces react against a table, floor, or frame. They can generate strong forces but have limited workspaces.
- **Wearable:** the device is attached to the body. It moves with the user but must manage weight, comfort, and reaction forces.
- **Handheld:** the user carries a controller, stylus, or tool.
- **Encountered:** a robot or surface moves into position only when contact is needed.
- **Environmental:** feedback is produced through a seat, floor, wall, airflow, or acoustic field.
- **Contactless:** stimulation reaches the body without a conventional attached or held device, although physical energy still reaches the user.

## 7. Open-loop and closed-loop feedback
An **open-loop** effect plays a predefined signal after an event. A phone notification normally does not adapt to the user’s actual skin motion.

A **closed-loop** system measures interaction and continually updates output. A force-feedback device may calculate force from penetration into a virtual surface. Closed-loop operation can improve consistency but introduces control, stability, and latency constraints.

## 8. Physical output is not perception
Two actuators can produce nominally identical waveforms yet feel different because of body location, contact force, mounting compliance, user motion, synchronized sound, expectation, or timing within the task.

Device characterization and perceptual validation therefore answer different questions. A laser vibrometer can show that acceleration was reproduced. A psychophysical study is still required to determine whether intensity, quality, or meaning was perceived as intended.

## 9. Worked example: designing a virtual click
A defensible design process is:

1. Define the target event: approach, contact, switch transition, and release.
2. Select a candidate cue: a short acceleration transient, possibly paired with force and sound.
3. Measure output at the surface held or touched by the user.
4. Compare candidate signals using discrimination, preference, or realism tasks.
5. Test the cue during the intended interaction rather than only in isolation.
6. Repeat under different grip forces, users, and mounting conditions.

A long high-amplitude buzz may be detectable but still fail as a click because its temporal structure does not match the event.

## 10. Common misconceptions
- Haptics is broader than vibration.
- Stronger output is not automatically better output.
- Correct actuator voltage does not guarantee correct bodily stimulation.
- Touch is not a single sensory channel.
- Contactless haptics still transfers physical energy to the body.

## Key takeaways
- Haptics links physical interaction, sensing, computation, actuation, perception, and action.
- Tactile and kinesthetic information are complementary.
- Active touch makes exploratory movement part of perception.
- Physical and perceptual validation are both necessary.
- Systems should be classified by stimulus, body site, form factor, and control loop rather than actuator name alone.

## Self-test
1. Why is a phone vibration not equivalent to a mechanical button click?
2. Give one cutaneous and one kinesthetic example.
3. What changes when touch becomes active rather than passive?
4. Where can latency enter the interaction loop?
5. Why is actuator command voltage insufficient as a measure of perceived intensity?

## Practical exercise
Select three systems: a phone, a force-feedback stylus, and a mid-air ultrasound display. For each, identify the user action, sensor, computational model, actuator, physical stimulus, body site, form factor, and whether the output is open-loop or closed-loop.

## Recommended reading
- [R01] Jones, *Haptics*.
- [R02] Lederman and Klatzky, “Haptic Perception: A Tutorial.”
- [R12] Culbertson, Schorr, and Okamura, “Haptics: The Present and Future of Artificial Touch Sensation.”

<!-- CHAPTER:02 -->
# The Human Somatosensory System
LEAD: Haptic devices act on a distributed biological sensing system. Skin, muscles, tendons, joints, and central neural processing jointly encode contact, vibration, movement, effort, temperature, and pain.

## Learning objectives
- Describe the main cutaneous mechanoreceptor classes used in engineering discussions.
- Explain receptive fields and adaptation.
- Distinguish cutaneous, kinesthetic, and proprioceptive contributions.
- Relate physiology to actuator placement, frequency, and spatial resolution.

## 1. Somatosensation is a system, not a single sensor
Somatosensation includes touch, proprioception, temperature, pain, and internal bodily signals. Haptic interfaces normally target cutaneous and kinesthetic channels, but thermal and nociceptive limits influence safety and comfort.

A useful engineering model separates peripheral transduction, neural transmission, central integration, and task-dependent interpretation. The model is incomplete but prevents the common mistake of mapping one actuator directly to one percept.

## 2. Glabrous and hairy skin
Glabrous skin covers the palm and fingertips. It supports manipulation and has high tactile acuity. Hairy skin covers much of the rest of the body and includes additional hair-follicle afferents. A vibration that is clear at the fingertip may be weak, diffuse, or qualitatively different on the forearm or torso.

Body-site effects should therefore be treated as experimental factors, not implementation details.

## 3. Cutaneous mechanoreceptor classes
Engineering texts commonly discuss four classes of low-threshold mechanoreceptive afferents in glabrous skin:

| Class | Adaptation | Receptive field | Often associated with |
|---|---|---|---|
| SA1 / Merkel-associated | Slowly adapting | Small | Edges, points, pressure, form |
| RA1 / Meissner-associated | Rapidly adapting | Small | Low-frequency skin motion, slip, flutter |
| SA2 / Ruffini-associated | Slowly adapting | Large | Skin stretch and hand configuration |
| RA2 / Pacinian-associated | Rapidly adapting | Large | High-frequency vibration and transients |

These associations are useful but should not be treated as exclusive one-to-one channels. Natural stimuli activate populations of receptors, and perception arises from combined activity.

## 4. Adaptation
Slowly adapting afferents continue responding during sustained deformation. Rapidly adapting afferents respond strongly to changes, onset, offset, and vibration.

This distinction explains why a vibration motor is effective for events but poor at representing sustained force. A constant pressure cue requires an actuator and attachment that can maintain deformation safely, while a transient click can exploit rapidly adapting sensitivity.

## 5. Receptive fields and spatial resolution
A receptive field is the region where stimulation changes the activity of a sensory neuron. Small receptive fields and dense innervation support fine spatial discrimination. Large fields support sensitivity to distributed or rapidly changing events but do not provide equivalent localization.

The spacing of tactors should be chosen from measured performance for the target body site and task. Simply placing actuators closer together does not guarantee independent percepts because mechanical fields overlap and neural integration may merge them.

## 6. Proprioception and kinesthesia
Muscle spindles provide information related to muscle length and change in length. Golgi tendon organs respond to tension. Joint, skin, and motor-command information also contributes to limb position, movement, and effort.

A force-feedback interface does not stimulate a hypothetical “force receptor” alone. It changes movement, muscle activity, tendon force, joint state, and skin deformation. Perceived stiffness is therefore an interaction-level quantity.

## 7. Exploratory procedures
People use stereotyped movements to obtain object properties:

- lateral motion for texture;
- pressure for hardness or compliance;
- enclosure for global shape;
- contour following for precise shape;
- unsupported holding for weight;
- static contact for temperature.

A device that prevents the relevant movement may make the intended property difficult to perceive even when it produces a strong stimulus.

## 8. Worked example: selecting a body site
Suppose a wearable must communicate four spatial directions. The fingertip offers high acuity but may interfere with grasping. The wrist is socially acceptable and leaves the hand free but supports poorer spatial resolution. The torso provides a large area but requires larger spacing and careful attachment.

Selection should consider receptor distribution, mechanical coupling, task interference, comfort, clothing, and movement—not only available surface area.

## 9. Design implications
- Calibrate at the body-device interface.
- Report body site, contact area, preload, attachment, posture, and motion.
- Use transients for event cues and sustained deformation for continuous contact when possible.
- Do not infer perceptual resolution directly from actuator spacing.
- Expect substantial individual variability.

## Key takeaways
- Somatosensation is distributed across skin and musculoskeletal sensing.
- Receptor classes differ in adaptation and receptive-field structure.
- Body site changes sensitivity, localization, and mechanical transmission.
- Active exploration is part of haptic sensing.
- Device design must respect both biology and mechanics.

## Self-test
1. Why do rapidly adapting afferents suit event cues?
2. Why can dense actuator placement fail to yield dense perceived points?
3. Which exploratory movement is commonly used for compliance?
4. What information contributes to proprioception?
5. Why should body site be reported in every tactile study?

## Practical exercise
Choose a fingertip, wrist, forearm, and torso placement for the same vibrotactile cue. Write a predicted advantage, limitation, confound, and validation measurement for each location.

## Recommended reading
- [R03] Jones and Lederman, *Human Hand Function*.
- [R05] Johansson and Vallbo, mechanoreceptive-unit densities in glabrous skin.

<!-- CHAPTER:03 -->
# Psychophysics of Touch
LEAD: Psychophysics provides quantitative methods for connecting controlled physical stimuli to detection, discrimination, magnitude, quality, and decision behaviour.

## Learning objectives
- Distinguish detection thresholds, difference thresholds, and suprathreshold scaling.
- Explain the method of constant stimuli and adaptive staircases.
- Design a two-alternative forced-choice experiment.
- Separate sensitivity from response bias.
- Interpret psychometric functions and uncertainty.

## 1. Start with the perceptual question
Before choosing statistics, define what is being measured:

- **Detection:** was any stimulus present?
- **Discrimination:** which of two stimuli was stronger or different?
- **Identification:** which category was presented?
- **Scaling:** how strong, rough, comfortable, or realistic was it?
- **Performance:** did feedback improve a task?

These are different constructs and require different procedures.

## 2. Detection and difference thresholds
A **detection threshold** is the stimulus magnitude associated with a specified detection criterion. A **difference threshold**, often called a just-noticeable difference or JND, is the change needed to reach a selected discrimination criterion.

Thresholds depend on frequency, duration, body site, contact force, task, criterion, and participant population. They should be reported as conditional estimates rather than universal constants.

## 3. Weber’s law
Over some ranges, the JND may scale with the reference magnitude:

$$ΔI / I = k$$

Here, `I` is the reference magnitude, `ΔI` the discrimination threshold, and `k` the Weber fraction. The approximation can fail near absolute threshold, saturation, or when different mechanisms dominate. Measure the range rather than assuming a universal fraction.

## 4. Method of constant stimuli
Several stimulus levels are selected, presented repeatedly in randomized order, and used to fit a psychometric function. The method samples the full response curve and reduces sequential predictability, but it can require many trials.

Use it when the approximate threshold range is known and the slope of the response function is valuable.

## 5. Adaptive staircases
A staircase changes stimulus level according to the participant’s responses. Correct responses make the task harder; errors make it easier. Reversals concentrate trials near a target performance level.

Efficiency does not remove design choices. The investigator must specify starting level, step sizes, up-down rule, number of reversals, lapse handling, interleaving, and termination.

## 6. Forced-choice procedures
In a two-alternative forced-choice task, the participant chooses between two alternatives. Examples include which interval contained vibration or which of two surfaces felt stiffer. Chance performance is defined, and the task reduces some response-criterion effects.

The alternatives must be meaningful. Forcing a choice when both stimuli may genuinely feel equal can distort interpretation.

## 7. Magnitude estimation and ratings
Magnitude estimation asks participants to assign numbers proportional to perceived strength. Bounded ratings use scales such as 1–7. These methods are useful for suprathreshold experience but are sensitive to anchors, wording, order, and individual scale use.

Ratings of realism or comfort do not provide a detection threshold, and ordinal ratings do not automatically justify interval-scale analysis.

## 8. Signal detection theory
Signal detection theory separates sensitivity from decision criterion. In a yes/no task, a participant may answer “yes” frequently because of liberal bias rather than high sensitivity.

Under common assumptions:

$$d′ = z(hit rate) - z(false alarm rate)$$

Extreme rates require correction before applying the inverse-normal transform. Forced choice reduces some bias but does not remove every decision effect.

## 9. Psychometric functions
A psychometric function relates stimulus level to response probability. A defensible report states:

- model family and link function;
- threshold criterion;
- slope or sensitivity;
- guess and lapse assumptions;
- participant-level and group-level analysis;
- confidence or credible intervals;
- exclusion and stopping rules.

Avoid averaging responses across participants before checking individual threshold differences.

## 10. Worked example: vibration detection
A tactor is attached to the forearm. Five acceleration levels around the expected threshold are presented in randomized two-interval trials. The participant selects the interval containing vibration. Acceleration is measured at the skin, and a psychometric curve estimates the level associated with the chosen criterion.

The result applies to the tested frequency, duration, body site, mounting, preload, task, and population—not to vibration in general.

## 11. Experimental controls
Potential confounds include actuator sound, device heating, visual indicators, transmission through furniture, inconsistent contact force, experimenter timing, learning, and fatigue. Use randomization, counterbalancing, masking, catch trials, preregistered exclusions, and calibrated instrumentation where appropriate.

## Common misconceptions
- A threshold is not an immutable biological constant.
- Statistical significance is not a JND.
- A rating scale is not a physical measurement.
- A staircase is not automatically unbiased.
- More trials do not repair a poorly defined perceptual question.

## Key takeaways
- Match the method to the perceptual construct.
- Define thresholds operationally.
- Measure the delivered stimulus rather than only the command.
- Separate sensitivity, bias, and preference.
- Preserve participant-level structure in analysis.

## Self-test
1. When is constant stimuli preferable to a staircase?
2. What does a Weber fraction normalize?
3. Why include false alarms in detection analysis?
4. What is chance performance in 2AFC?
5. Why can realism ratings not establish a detection threshold?

## Practical exercise
Draft a preregistered protocol to estimate the JND for force around a 1 N reference. Specify comparison levels, task, repetitions, randomization, model, threshold criterion, calibration, and exclusion rules.

## Recommended reading
- [R06] Gescheider, *Psychophysics: The Fundamentals*.
- [R07] Macmillan and Creelman, *Detection Theory: A User’s Guide*.

<!-- CHAPTER:04 -->
# Perceptual Organization and Multisensory Integration
LEAD: Haptic signals are organized across space and time and are rarely isolated from vision, audition, movement, or body representation. Multisensory design can strengthen an experience, but misalignment can expose the illusion.

## Learning objectives
- Explain tactile masking, apparent motion, phantom sensation, and sensory saltation.
- Describe how spatial and temporal alignment affect multisensory integration.
- Distinguish body ownership, agency, and self-location.
- Design multimodal feedback with explicit roles for each modality.

## 1. Spatial organization
Multiple tactors do not necessarily create independent points. Their mechanical fields can overlap, and the nervous system may integrate them into a single location or shape. Simultaneous stimulation can produce a phantom point between tactors. Sequential stimulation can produce apparent movement.

Actuator count is therefore not equivalent to perceptual resolution.

## 2. Temporal organization
Onset synchrony, duration, order, and repetition determine whether events are grouped. A tactile transient synchronized with a visual collision is often interpreted as contact. The same transient delivered late may feel like an unrelated notification.

Temporal masking occurs when one stimulus reduces sensitivity to another close in time. Strong impact cues may obscure weaker texture information.

## 3. Apparent motion and sensory saltation
Apparent tactile motion is generated by sequential activation at separated locations. Perceived continuity depends on spacing, inter-stimulus timing, duration, intensity, and body site. Sensory saltation can make stimuli appear at intermediate locations.

These effects allow sparse hardware to create richer spatial experiences, but parameter ranges must be validated for the target placement and task.

## 4. Visual-haptic integration
Vision can bias perceived position, motion, size, stiffness, and ownership. This enables pseudo-haptics and redirected touch, but visual dominance is not guaranteed. Cue weighting depends on reliability, context, and prior expectation.

Spatial co-registration should be measured across the workspace. Temporal co-registration should be measured end-to-end from sensing to bodily output, not inferred only from software timestamps.

## 5. Audio-haptic integration
Sound can alter perceived material, impact, roughness, and intensity. Mechanical actuators also emit unintended sound, which can become a confound. Masking noise, headphones, and acoustic measurement may be required when tactile perception is the dependent variable.

Designed audio can also clarify events and reduce the required haptic output. Test unimodal and multimodal conditions to determine what each modality contributes.

## 6. Embodiment
Embodiment is often separated into:

- **Body ownership:** the body or representation feels like mine.
- **Agency:** I feel that I caused the action.
- **Self-location:** I feel located where the represented body is.

Haptic congruence can support embodiment by confirming contact and resistance. Incorrect direction, body location, or latency can weaken it.

## 7. Worked example: virtual contact
A user reaches toward a virtual sphere and receives fingertip vibration when the tracked finger crosses the surface. Three problems may occur:

1. Spatial offset makes the visual finger penetrate before feedback occurs.
2. Tracking and actuation delay make the cue arrive late.
3. Sustained vibration represents a motor rather than sustained contact.

A better design calibrates the surface, uses a transient for impact, adds sustained pressure or force when possible, and measures combined latency.

## 8. Design principles
- Describe the event structure: approach, impact, deformation, slip, and release.
- Assign each modality a specific role.
- Align strong event onsets.
- Test visual-only, haptic-only, audio-only, and combined conditions where relevant.
- Include incongruent conditions when studying causal integration.
- Report physical alignment and perceptual outcomes separately.

## Common misconceptions
- Multisensory integration is not always visual dominance.
- Simultaneous computer commands do not guarantee simultaneous sensory arrival.
- More modalities do not automatically increase realism.
- Embodiment is not adequately represented by one undifferentiated score.

## Key takeaways
- Spatial and temporal patterns can create percepts not located at any actuator.
- Alignment is central to contact realism.
- Vision and audition can enhance or confound haptic results.
- Embodiment includes ownership, agency, and self-location.

## Self-test
1. What distinguishes phantom sensation from apparent motion?
2. Why can synchronized audio change perceived vibration intensity?
3. Name three components of embodiment.
4. What measurements support a co-registration claim?
5. Why should unimodal conditions be tested?

## Practical exercise
Design a 3 × 2 study with three haptic delays and audio present or absent. Define the task, dependent measures, hypotheses, counterbalancing, and end-to-end latency measurement.

## Recommended reading
- [R02] Lederman and Klatzky, “Haptic Perception: A Tutorial.”
- [R21] Lécuyer, survey of pseudo-haptic feedback.
