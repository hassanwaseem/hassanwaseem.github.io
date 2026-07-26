<!-- CHAPTER:04 -->
# Perceptual Organization and Multisensory Integration
LEAD: Haptic signals are organized across space and time and interpreted together with vision, sound, movement, and body representation. The resulting percept can differ substantially from the pattern of physical stimulation.

## How to read this chapter
A haptic interface does not deliver isolated sensations into an empty perceptual system. Every cue arrives with a location, time, body site, movement state, expectation, and usually visual or auditory context.

This chapter develops two related ideas:

1. **perceptual organization:** multiple tactile events can be grouped into locations, paths, shapes, or objects;
2. **multisensory integration:** haptic evidence can be combined with vision, audition, proprioception, and motor information.

The engineering opportunity is that sparse hardware can produce richer experiences. The scientific risk is that a convincing illusion may fail when timing, alignment, task, or reliability changes.

## Learning objectives
By the end of the chapter, you should be able to:

- distinguish mechanical cross-talk from perceptual spatial integration;
- explain phantom location, apparent tactile motion, and sensory saltation;
- describe how timing and spatial alignment affect event grouping;
- explain reliability-weighted visual–haptic cue combination;
- identify when multisensory conflict should be measured rather than hidden;
- distinguish body ownership, agency, and self-location;
- design unimodal, congruent, and incongruent control conditions;
- specify end-to-end spatial and temporal co-registration measurements.

## 1. Perception organizes events
Imagine two tactors on the forearm. From the device perspective, there are two actuators with two command signals. From the participant’s perspective, several outcomes are possible:

- two separate points;
- one broad region;
- a point between the tactors;
- motion from one tactor to the other;
- a sequence of taps apparently hopping through intermediate positions;
- an unlocalized buzz transmitted through the device.

Actuator count therefore does not determine perceptual structure.

Three mechanisms must be separated:

### 1.1 Mechanical cross-talk
Energy from one actuator propagates through the device, strap, skin, tissue, or skeleton and physically reaches another location. This can be measured with accelerometers, vibrometry, force sensors, or displacement measurements.

### 1.2 Peripheral overlap
Different actuators stimulate overlapping receptive fields or afferent populations.

### 1.3 Central perceptual integration
The nervous system groups separate events into a single location, path, or object even when mechanical stimulation remains distinct.

A convincing demonstration of a tactile illusion should therefore include physical measurements showing that the perceived intermediate event is not merely produced by uncontrolled mechanical vibration at that location.

## 2. Phantom location
When two spatially separated actuators are stimulated simultaneously, a participant may perceive a single location between them. The experienced position can shift as the relative intensities change. Early engineering work used this **phantom sensation** to transmit spatial information with fewer physical actuators. [R32]

Phantom location is useful for:

- increasing apparent spatial resolution;
- moving a perceived point continuously between tactors;
- reducing actuator count and wiring;
- creating directional or symbolic cues.

However, the effect depends on body site, spacing, waveform, intensity ratio, attachment, and individual differences. The word “phantom” should not be used merely because vibration spreads.

## 3. Apparent tactile motion
**Apparent tactile motion** occurs when stimulation at separated locations is sequenced so that the user experiences movement rather than disconnected events.

The percept depends on:

- spatial separation;
- stimulus duration;
- inter-stimulus onset interval;
- waveform and intensity;
- number of sites;
- movement direction;
- body posture and coordinate frame;
- task and attention.

Very short timing can produce simultaneity or a fused region. Very long timing produces separate taps. Between these extremes, a continuous motion percept may emerge.

Apparent motion is not equivalent to physically sweeping one contactor across the skin. A real sweep creates continuously changing local deformation and friction, while apparent motion reconstructs a path from discrete events. The two may support similar direction judgments but differ in texture, continuity, and speed perception.

## 4. Sensory saltation and the cutaneous rabbit
Geldard and Sherrick demonstrated that sequences of taps delivered at separated body locations can be mislocalized toward intermediate positions, creating the impression of taps hopping along the skin. They called this the **cutaneous rabbit**. [R33]

In sensory saltation:

- several physical pulses occur at one site;
- later pulses occur at a distant site;
- some pulses are perceived at intermediate locations where no actuator is present.

The phenomenon reveals that perceived location is influenced by the temporal structure of the entire sequence rather than being assigned independently pulse by pulse.

FIGURE: assets/figures/09-tactile-spatiotemporal-illusions.svg | Three-panel comparison of phantom location, apparent tactile motion, and sensory saltation, showing actual actuator sites and perceived intermediate locations or movement. | **Figure 4.1 — Three related but distinct spatial–temporal illusions.** Phantom location concerns an intermediate position, apparent motion concerns perceived travel, and saltation concerns discrete taps displaced along a path. Original course diagram; CC BY 4.0.

### 4.1 Why the distinctions matter
A paper that claims “apparent motion” should measure direction or continuity, not only intermediate localization. A paper that claims “phantom location” should measure the perceived point, not merely recognition of a two-tactor pattern. A saltation claim should demonstrate systematic displacement of pulse locations.

## 5. Temporal organization of contact events
Haptic events have internal structure. Consider touching a virtual object:

1. approach;
2. initial contact;
3. impact transient;
4. sustained contact;
5. deformation or slip;
6. release.

A single continuous vibration ignores this structure. A more coherent rendering may use:

- a short transient at impact;
- sustained force or pressure during contact;
- vibration linked to sliding speed for texture;
- a release transient when contact ends.

### 5.1 Synchrony and causal grouping
Signals that begin together are more likely to be interpreted as one event. A visual collision, impact sound, and haptic transient can reinforce one another when their timing is compatible.

The relevant timing is **sensory arrival**, not command dispatch. Two commands sent in the same software frame may arrive at the eyes, ears, and skin at different times because of display refresh, audio buffering, sensor delay, actuator rise time, and mechanical transmission.

### 5.2 Temporal masking
A strong cue can reduce sensitivity to another cue close in time. An impact transient may obscure a weaker texture signal. Masking can be useful for hiding device artefacts, but it can also remove information.

### 5.3 Adaptation and repetition
Repeated identical pulses can become less salient or be grouped rhythmically. Timing variation can improve detectability or create patterns, but it may also increase cognitive load.

CALLOUT: Measurement rule | Report end-to-end latency from the physical user event to measured sensory output. Software timestamps alone do not establish multisensory synchrony.

## 6. Visual–haptic integration
Vision and haptics often provide estimates of the same object property, such as size, shape, position, or stiffness. The nervous system can combine those estimates.

Ernst and Banks measured visual and haptic estimates of object height and showed that combined judgments were close to a maximum-likelihood prediction: each cue was weighted according to its reliability. [R30]

A simplified reliability-weighted estimate can be written as:

$$ŝ = w_v s_v + w_h s_h$$

where:

- `s_v` is the visual estimate;
- `s_h` is the haptic estimate;
- `w_v` and `w_h` are weights that sum to one;
- the more reliable cue receives the larger weight.

Under independent Gaussian uncertainty, the weights are proportional to inverse variance:

$$w_v = (1/σ_v²) / [(1/σ_v²) + (1/σ_h²)]$$

and similarly for `w_h`.

This does not mean that all multisensory perception is statistically optimal. Cue compatibility, causal belief, prior experience, task, attention, and temporal alignment affect whether cues are integrated.

FIGURE: assets/figures/08-multisensory-cue-integration.svg | Diagram showing uncertain visual and haptic estimates combining into a narrower reliability-weighted estimate, with a comparison between aligned and conflicting cues. | **Figure 4.2 — Cue combination depends on reliability and congruence.** A more reliable cue generally receives more weight when the system treats the cues as arising from one event. Original course diagram; CC BY 4.0.

### 6.1 Visual dominance is conditional
Vision often dominates spatial judgments because it may be more precise in the relevant task. But haptics can dominate when haptic information is more reliable. “Vision dominates touch” is therefore not a universal rule.

### 6.2 Pseudo-haptics
Visual changes can alter the perceived physical properties of interaction without corresponding physical force. Examples include changing visual control–display gain to create resistance or modifying visual deformation to influence perceived stiffness.

Pseudo-haptic effects can reduce hardware requirements, but their interpretation depends on vision and action. They should be compared with visual-only controls and should not be described as measured physical force.

### 6.3 Redirected touch and retargeting
A user may touch one physical surface while seeing contact with a different virtual object or location. Small discrepancies can be tolerated or visually captured. Large discrepancies can reveal the manipulation.

The acceptable discrepancy is task- and context-dependent. It should be measured rather than assumed.

## 7. Audio–haptic integration
Sound contributes strongly to the interpretation of impacts, textures, materials, and device events.

### 7.1 Intended audio
A synchronized impact sound can make a weak haptic transient feel more convincing. Surface sounds can change the apparent material or roughness of an interaction. Audio can communicate event identity while haptics communicates timing or contact.

### 7.2 Unintended audio
Motors, relays, pneumatic valves, ultrasound electronics, and mechanical frames produce sound. Participants may use sound to detect or identify conditions.

Controls include:

- masking noise;
- acoustically isolated actuators;
- headphones;
- microphone measurements;
- silent sham trials;
- separate audio-only and haptic-only conditions.

### 7.3 Division of labour between modalities
A well-designed multimodal system assigns each modality a role. For example:

- vision provides geometry and global state;
- haptics provides contact timing and resistance;
- audio provides impact identity and event confirmation.

Adding all cues to all events can create redundancy, fatigue, and ambiguity.

## 8. Spatial co-registration
**Co-registration** means that physical or perceived feedback aligns with the intended visual or spatial location.

A co-registration claim should specify:

- coordinate systems;
- calibration procedure;
- tracking accuracy;
- actuator or contact-point location;
- workspace sampling;
- repeatability across sessions;
- drift over time;
- whether error is physical, visual, or perceptual.

### 8.1 Static and dynamic error
A system may be accurately aligned at calibration and drift during movement. Dynamic latency creates position error proportional to movement speed.

If the hand moves at velocity `v` and the total delay is `τ`, a first-order estimate of motion-related spatial error is:

$$e ≈ vτ$$

At 0.5 m/s and 40 ms delay, the error is approximately 20 mm. This simple calculation shows why apparently small delays can become large spatial mismatches during fast movement.

### 8.2 Perceptual capture is not calibration
Vision may pull the perceived haptic location toward a visual object. This can improve subjective alignment while hiding physical error. Physical and perceptual co-registration should be reported separately.

## 9. Embodiment: ownership, agency, and self-location
The term **embodiment** is often used too broadly. It is useful to separate at least three components.

### 9.1 Body ownership
The represented body or body part feels like it belongs to me.

### 9.2 Agency
I feel that I caused the action or event.

### 9.3 Self-location
I feel located where the represented body is.

Botvinick and Cohen’s rubber-hand experiment demonstrated that synchronous seen and felt touch could produce referral of touch toward an artificial hand and changes in reaching behaviour, revealing interaction among vision, touch, and proprioception. [R31]

This does not mean that any synchronous vibration produces ownership. Ownership depends on plausible spatial, temporal, anatomical, and contextual relationships.

### 9.4 Haptics and agency
Low latency and action-contingent feedback can support agency. A cue that occurs without a plausible relationship to the user’s movement may feel externally generated even if it is intense.

### 9.5 Measuring embodiment
Use component-specific measures rather than one undifferentiated score. Combine questionnaires with behavioural or physiological measures when justified. Avoid interpreting questionnaire agreement as direct proof of a neural mechanism.

## 10. Causal inference: should the cues be combined?
Before integrating cues, the perceptual system must implicitly or explicitly treat them as belonging to the same event.

Consider a visual ball collision and a vibration on the wrist:

- if timing and direction are compatible, the cue may be interpreted as collision feedback;
- if the vibration is delayed or at an implausible body site, it may feel like a notification;
- if conflict is large, the user may treat the modalities as separate causes.

This motivates **congruent** and **incongruent** experimental conditions. An incongruent condition is not merely a bad interface; it can reveal whether cues are genuinely integrated.

## 11. Worked example: contact with a virtual sphere
A participant reaches toward a visual sphere. Fingertip vibration begins when tracking reports penetration.

### Problem 1: spatial mismatch
The visual finger may enter the sphere before the haptic cue. Possible causes include calibration offset, tracking error, hand-model error, or delay.

### Problem 2: wrong event structure
Continuous vibration during stationary contact communicates actuator activity rather than static contact. A transient may be appropriate for impact, but sustained contact may require pressure or force.

### Problem 3: unintended audio
The tactor sound may provide stronger event timing than the skin stimulus.

### Problem 4: no causal comparison
A combined condition alone cannot show whether performance improvement came from haptics, sound, or redundancy.

### Improved design
- calibrate visual and physical coordinates across the workspace;
- measure total latency to physical output;
- use an impact transient at contact onset;
- add sustained pressure or force if continuous contact matters;
- include visual-only, haptic-only, audio-only, congruent combined, and delayed combined conditions where appropriate;
- measure both contact judgment and task performance.

## 12. Designing multisensory experiments
A useful factorial structure separates modality and congruence.

### 12.1 Unimodal baselines
- visual only;
- haptic only;
- audio only.

### 12.2 Congruent combinations
Cues indicate the same event, location, direction, or material.

### 12.3 Incongruent combinations
One cue is shifted in time, space, direction, or magnitude.

### 12.4 Measures
Depending on the question, measure:

- detection or discrimination;
- perceived location;
- temporal order or simultaneity;
- cue weighting or PSE shift;
- ownership, agency, or self-location separately;
- task accuracy and completion time;
- confidence and workload;
- aftereffects that indicate recalibration.

### 12.5 Analysis logic
An improvement in the combined condition may reflect:

- statistical integration;
- redundant-signal facilitation;
- attention capture;
- decision-level combination;
- learning;
- use of one dominant cue.

The experiment should be designed to distinguish plausible explanations.

## 13. Common misconceptions
- **“Two actuators produce two perceived points.”** Mechanical and perceptual integration may produce a region, phantom point, or motion.
- **“Phantom sensation, apparent motion, and saltation are the same.”** They involve different spatial–temporal organizations and require different measurements.
- **“Simultaneous commands create simultaneous perception.”** Sensory arrival depends on the full hardware and display path.
- **“Vision always dominates haptics.”** Cue weighting depends on reliability and task.
- **“More modalities create more realism.”** Redundancy, conflict, masking, and overload can reduce quality.
- **“A visually captured haptic point proves physical alignment.”** Perceptual capture can hide calibration error.
- **“Embodiment is one quantity.”** Ownership, agency, and self-location should be distinguished.
- **“A combined condition proves integration.”** Unimodal and incongruent controls are needed.

## Key takeaways
- Perceived haptic structure is not determined directly by actuator count or command pattern.
- Phantom location, apparent motion, and sensory saltation are distinct phenomena.
- Temporal event structure and end-to-end latency strongly influence causal interpretation.
- Visual and haptic cues can be combined according to reliability when they are treated as arising from the same event.
- Audio can strengthen haptic interpretation or contaminate an experiment.
- Physical and perceptual co-registration should be measured separately.
- Embodiment includes ownership, agency, and self-location.
- Strong multisensory claims require unimodal, congruent, and incongruent controls.

## Self-test
1. What is the difference between mechanical cross-talk and phantom location?
2. How does apparent motion differ from sensory saltation?
3. Why can two commands issued simultaneously arrive asynchronously?
4. Under reliability-weighted integration, which cue receives more weight?
5. Why is visual dominance conditional?
6. What does the approximation `e ≈ vτ` describe?
7. Name three components of embodiment.
8. Why should audio-only conditions be included in some haptic studies?
9. What evidence distinguishes cue integration from use of one dominant cue?
10. Why can perceptual alignment not replace physical calibration?

### Answer guide
1. Mechanical cross-talk is physical energy spread; phantom location is a perceived intermediate position created by combined stimulation.
2. Apparent motion is perceived travel between sites; saltation is displacement of discrete taps into intermediate locations.
3. Sensors, computation, displays, audio buffers, actuators, and mechanical structures have different delays.
4. The more reliable cue, represented by lower uncertainty.
5. Haptics can dominate when it is more reliable for the task.
6. Motion-related spatial error caused by velocity and latency.
7. Body ownership, agency, and self-location.
8. Actuator sound may provide task-relevant information or change the haptic percept.
9. Manipulating cue reliability or conflict and measuring systematic cue weighting helps distinguish integration.
10. Vision can capture perceived location and conceal physical misalignment.

## Practical exercise
Design a study of virtual contact using three haptic delays and two audio conditions. Include a visual-only baseline, measured end-to-end latency, a contact-localization task, and a realism rating. State which result would support temporal integration and which would indicate that audio alone explains the effect.

## Research-level discussion question
A sparse wearable creates a moving point using apparent tactile motion. Should evaluation compare it with the intended percept, with a physically moving contactor, or with a denser actuator array? Define the scientific claim first, then choose the appropriate reference conditions.

## Evidence and source notes
Phantom-sensation displays were investigated as a method for transmitting spatial information with sparse actuators. [R32] The cutaneous-rabbit illusion established systematic spatial mislocalization produced by temporally organized taps. [R33] Reliability-weighted visual–haptic integration was measured quantitatively by Ernst and Banks. [R30] The rubber-hand experiment demonstrated interactions among vision, touch, and proprioception relevant to body ownership. [R31] These studies support the chapter’s distinctions, but parameter ranges must be remeasured for each body site, device, and task.

## Recommended reading
- [R32] Alles, “Information Transmission by Phantom Sensations.”
- [R33] Geldard and Sherrick, “The Cutaneous ‘Rabbit’: A Perceptual Illusion.”
- [R30] Ernst and Banks, “Humans Integrate Visual and Haptic Information in a Statistically Optimal Fashion.”
- [R31] Botvinick and Cohen, “Rubber Hands ‘Feel’ Touch That Eyes See.”
- [R02] Lederman and Klatzky, “Haptic Perception: A Tutorial.”
