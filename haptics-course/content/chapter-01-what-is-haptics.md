<!-- CHAPTER:01 -->
# What Is Haptics? From Physical Interaction to Perception
LEAD: Haptics is the science and engineering of touch-mediated perception and interaction. It is not a synonym for vibration. It is the study of how physical events are sensed, interpreted, reproduced, and used to guide action.

## How to read this chapter
This chapter establishes the language used throughout the course. A new researcher should leave it with a way to analyse any haptic system, whether the system is a phone motor, a surgical simulator, a wearable, a force-feedback robot, an ultrasound array, or a physical object being studied in a psychophysics laboratory.

The most important habit is to keep four descriptions separate:

1. **The physical event:** what force, displacement, acceleration, temperature change, or airflow reaches the body?
2. **The biological response:** which tissues and sensory populations are likely to be stimulated?
3. **The perceptual outcome:** what does the participant report or demonstrate through behaviour?
4. **The functional role:** what does the feedback help the user detect, decide, or do?

Confusing these levels is one of the most common causes of weak haptics research. A motor command is not a stimulus, a stimulus is not a percept, and a percept is not automatically useful for a task.

## Learning objectives
By the end of the chapter, you should be able to:

- define haptics without reducing it to vibrotactile feedback;
- distinguish tactile, cutaneous, kinesthetic, proprioceptive, and thermal information;
- explain why active touch is more than passive touch plus movement;
- describe a complete haptic interaction loop;
- classify a haptic interface by stimulus, body site, form factor, sensing, and control architecture;
- distinguish physical characterization from perceptual validation;
- identify what evidence is required to claim that a haptic effect works.

## 1. Begin with an ordinary mechanical button
Press a mechanical button slowly with one finger. The experience appears simple: the button moves and you feel a click. In reality, it is a tightly organized sequence of mechanical and perceptual events.

Before contact, vision and proprioception guide the finger toward the surface. At contact, the fingertip skin deforms and the contact area expands. As the finger continues to move, the button mechanism resists. Force rises while the mechanism stores elastic energy. Near the switching point, the mechanism may become mechanically unstable and move abruptly. That rapid event produces a short change in force, a vibration transient, and often a click sound. The button then reaches a new stable position. On release, the sequence occurs in reverse, usually with different force and timing.

The user does not separately perceive every physical variable. Instead, the nervous system combines skin deformation, vibration, finger motion, muscle activity, joint state, sound, expectation, and the consequences of the action. The final experience may be summarized as *the button clicked*.

FIGURE: assets/figures/01-button-and-haptic-loop.svg | Diagram showing the stages of a mechanical button press and the closed-loop stages of an engineered haptic system. | **Figure 1.1 — A real click is an event, not a waveform.** The upper row separates contact, deformation, resistance, the snap-through transient, and perception. The lower row shows the corresponding engineered interaction loop. Original course diagram; CC BY 4.0.

A phone can imitate one component of this event with a short vibration. A force-feedback mechanism can recreate resistance and release. A moving surface can recreate skin deformation. An audio system can recreate the click sound. None of these is automatically equivalent to the original button. Each reproduces selected evidence from which the user may infer a click.

> The engineering objective is not simply to make hardware move. It is to control physical evidence so that the user perceives the intended event while performing the intended action.

## 2. A working definition of haptics
The word **haptics** refers broadly to touch-mediated sensing, perception, action, communication, and interaction. In engineering and human–computer interaction, the field includes:

- the mechanics of contact between bodies and devices;
- sensory physiology and neural coding;
- psychophysical measurement;
- sensors and state estimation;
- actuators and mechanical transmission;
- control, simulation, and haptic rendering;
- interaction design and communication;
- embodiment and multisensory integration;
- task performance, safety, comfort, and accessibility.

The historical distinction between *touching* and *being touched* is central. Gibson’s observations on active touch argued that deliberate exploration is not adequately described as passive skin stimulation with kinesthesia added afterward. The movement is chosen to obtain information, so sensing and action are coupled from the beginning. [R26]

### 2.1 What haptics is not
Haptics is **not only vibration**. Vibrotactile feedback is one important class of haptic stimulation, but the field also includes pressure, skin stretch, force, torque, resistance, impact, temperature, airflow, and contactless acoustic or electrical effects.

Haptics is **not only artificial feedback**. A researcher who measures how people perceive real surfaces is doing haptics research even if no actuator is used.

Haptics is **not only the hand**. The fingertip is important because of its role in manipulation and high tactile acuity, but haptic systems may target the wrist, arm, torso, head, foot, or whole body.

Haptics is **not identical to touch sensation**. The field also studies the motor actions that generate sensory evidence, the control systems that render it, and the decisions or behaviours that follow.

## 3. Four levels of description
A rigorous paper should make clear which level each claim belongs to.

| Level | Example statement | Appropriate evidence |
|---|---|---|
| Device command | The motor was driven with a 150 Hz sinusoid. | Logged command or electrical measurement |
| Physical stimulus | The skin experienced 0.8 g peak acceleration. | Accelerometer, vibrometer, force sensor, thermal sensor |
| Perceptual outcome | Participants judged stimulus A stronger than B. | Psychophysical responses and statistical model |
| Functional outcome | Feedback reduced target-selection error. | Task performance under controlled comparison |

Suppose a paper states that a device “renders a stronger vibration.” If only the input voltage was measured, the claim is about the command, not the skin acceleration. If acceleration was measured, the claim is physical. If participants judged the effect stronger, the claim is perceptual. These claims may agree, but agreement must be demonstrated rather than assumed.

CALLOUT: Research discipline | Write claims using verbs that match the evidence: *commanded*, *measured*, *detected*, *judged*, *recognized*, *improved*, or *preferred*. Avoid moving silently from one level to another.

## 4. Major haptic information channels
The terminology varies across disciplines, so definitions should be stated explicitly.

### 4.1 Cutaneous and tactile information
**Cutaneous** information arises from stimulation of the skin and associated tissues. It includes local indentation, pressure distribution, vibration, skin stretch, frictional events, slip, and temperature change.

The word **tactile** is often used similarly, especially in engineering. Some authors use tactile narrowly for skin-mediated mechanical cues; others include thermal information. The safest practice is to define the term when it matters.

### 4.2 Kinesthetic information
**Kinesthetic feedback** concerns forces and motions perceived through the limbs and musculoskeletal system. A grounded force-feedback device may resist the hand, constrain a trajectory, or apply torque. The resulting experience involves muscle, tendon, joint, skin, and motor-command information rather than a single isolated “force sense.”

### 4.3 Proprioceptive information
**Proprioception** concerns the state of the body: position, movement, configuration, and effort. Muscle spindles, tendon organs, joint-related information, skin stretch, and central motor signals all contribute. In haptics, proprioception matters whenever a device changes limb motion or effort.

### 4.4 Thermal information
Thermal perception depends strongly on heat transfer, contact duration, body site, starting temperature, and material properties. A cold metal object and a room-temperature polymer may have the same ambient temperature but create different rates of heat flow at contact.

### 4.5 Contactless stimulation
Contactless systems do not require the user to hold or wear a conventional interface, but they still transfer physical energy. Focused ultrasound can create local acoustic radiation forces and vibration-like sensations. Air jets create pressure and flow. Electrical fields can alter friction or stimulate tissue under controlled conditions. Low-frequency sound can produce distributed bodily effects. “Contactless” describes the interface arrangement, not the absence of physics.

FIGURE: assets/figures/02-haptic-information-map.svg | Concept map linking haptic perception to cutaneous, kinesthetic, proprioceptive, thermal, and contextual information. | **Figure 1.2 — Haptic perception is constructed from multiple information sources.** The categories are analytically useful, but natural interactions commonly activate several at once. Original course diagram; CC BY 4.0.

| Information source | Representative physical variables | Example percepts | Example technologies |
|---|---|---|---|
| Local skin deformation | Indentation depth, contact area, pressure distribution | Contact, edge, local shape | Pin arrays, pneumatic pouches, moving contactors |
| Vibration | Acceleration, displacement, frequency, transient structure | Buzz, click, texture, impact | ERM, LRA, voice coil, piezoelectric actuator |
| Tangential skin deformation | Stretch magnitude and direction, friction | Slip, direction, friction, pull | Skin-stretch devices, belts, lateral contactors |
| Limb force and motion | Force, torque, displacement, velocity | Weight, stiffness, constraint, resistance | Motorized linkages, exoskeletons, cable systems, brakes |
| Temperature and heat flow | Surface temperature, heat flux, duration | Warmth, coolness, material quality | Peltier devices, heaters, thermal displays |
| Remote physical field | Acoustic pressure, airflow, electric field | Mid-air point, pulse, pressure, friction change | Ultrasound arrays, air jets, electrostatic systems |

The categories should not be interpreted as independent perceptual wires. Texture, for example, can depend on vibration, friction, geometry, movement speed, contact force, temperature, and sound. Stiffness is inferred from the relationship between force and displacement and can be biased by visual deformation.

## 5. Active touch and passive touch
In **passive touch**, a stimulus is applied to a body site while the participant remains comparatively stationary. A probe indenting the fingertip or a tactor vibrating on the forearm is a typical example. Passive stimulation is valuable when the investigator needs precise control over location, timing, force, or waveform.

In **active touch**, the participant deliberately moves to obtain information. Lateral motion is effective for texture, pressure for hardness or compliance, enclosure for global shape, contour following for exact shape, unsupported holding for weight, and static contact for temperature. Lederman and Klatzky demonstrated systematic relationships between the property a person needed to judge and the exploratory movement selected to obtain it. [R04]

FIGURE: assets/figures/03-active-and-passive-touch.svg | Side-by-side comparison of passive stimulation at a fixed body site and active exploration where movement changes the available sensory evidence. | **Figure 1.3 — In active touch, movement is part of sensing.** Passive and active procedures answer different research questions and should not be treated as interchangeable. Original course diagram; CC BY 4.0.

### 5.1 Why the distinction matters experimentally
A passive detection threshold does not automatically predict performance in an active manipulation task. During active exploration:

- contact force varies with the user’s strategy;
- movement speed changes the temporal signal produced by a texture;
- the user can repeat or modify an exploratory action;
- prediction from self-generated movement changes sensory interpretation;
- attention and task goals determine which information is sampled.

A good experiment therefore reports whether movement was constrained, prescribed, measured, or freely selected.

## 6. The haptic interaction loop
A useful haptic system model contains seven stages.

### 6.1 User action
The user moves, presses, grasps, releases, or changes posture. Even a nominally passive wearable is embedded in ongoing body movement.

### 6.2 Sensing
The system measures variables such as position, velocity, acceleration, force, contact state, surface location, hand pose, or physiological context. Sensor accuracy, sampling rate, calibration, and delay set limits on what the system can know.

### 6.3 State estimation and computation
Raw measurements are converted into an estimate of the interaction. A system may detect collision, estimate penetration into a virtual object, infer slip, classify a gesture, predict a remote state, or update a dynamic model.

### 6.4 Actuation
The controller commands motors, tactors, brakes, pneumatics, thermal elements, acoustic arrays, or other actuators. Electrical commands are transformed by actuator dynamics, mounting, and the mechanics of the body-device connection.

### 6.5 Physical stimulus at the body
The relevant stimulus is what arrives at the body: force, torque, displacement, acceleration, skin strain, pressure distribution, temperature change, or airflow. This is often different from the actuator’s nominal specification.

### 6.6 Perception and interpretation
The nervous system integrates the stimulus with body state, vision, sound, expectation, task context, and previous experience. Perception is therefore conditional rather than a fixed readout of the command.

### 6.7 Changed action
The user responds. Grip force may decrease after slip is detected; a hand may stop at a virtual boundary; posture may change to explore a texture. That response becomes the input to the next loop cycle.

Failures can arise at every stage. A tracking error can create contact at the wrong location. Delay can separate a collision from its feedback. An actuator may generate the intended displacement in free air but not when attached to skin. A physically strong signal may still communicate the wrong event.

CALLOUT: Diagnostic question | When a participant says that feedback “feels wrong,” locate the failure in the loop before changing amplitude. The problem may be spatial alignment, timing, mechanical coupling, event structure, multimodal conflict, or task interpretation.

## 7. Form factors and the problem of reaction forces
Haptic devices must exchange mechanical energy with the user. Where the reaction force goes strongly influences the design.

### 7.1 Grounded interfaces
A grounded device reacts against a table, floor, wall, or frame. It can often produce stable and comparatively strong forces. Its disadvantages include limited workspace, inertia, obstruction, and installation requirements.

### 7.2 Wearable interfaces
A wearable moves with the body. It may squeeze one part of the finger against another, stretch the skin, pull from a waist or arm anchor, or use body segments as reaction structures. Wearables support mobility but must manage weight, fit, pressure, heat, and comfort.

### 7.3 Handheld interfaces
A controller or tool can vibrate, change shape, shift internal mass, or resist internal mechanisms. The user gains portability but must continuously hold the device, which changes natural hand use.

### 7.4 Encountered-type interfaces
A robot or surface moves to the predicted contact location and remains elsewhere when not needed. This can preserve free-space movement but requires accurate tracking, safe motion planning, and reliable timing.

### 7.5 Environmental and contactless interfaces
Seats, floors, walls, airflow systems, loudspeakers, and acoustic arrays move the source away from the body. These systems can reduce encumbrance, but spatial resolution, intensity, noise, room effects, and bystander exposure become important.

## 8. Open-loop and closed-loop feedback
An **open-loop** effect plays a predefined output after an event. A phone notification may trigger the same vibration regardless of contact force, grip, or device motion.

A **closed-loop** haptic system repeatedly senses interaction and updates output. A virtual wall may compute force from penetration depth. A wearable may regulate pressure using a force sensor. A teleoperator may return forces measured by a remote robot.

Closed-loop feedback can improve consistency and responsiveness, but it introduces stability and delay constraints. High gain does not guarantee realism; an unstable or oscillatory contact may feel strong while being physically unsafe and perceptually implausible.

## 9. Physical output is not perception
A recurring error is to treat a physical variable as though it were a perceptual scale.

Two actuators can produce the same nominal frequency and amplitude yet feel different because of:

- different contact area or preload;
- mounting compliance;
- body location;
- propagation through the device or skeleton;
- individual anatomy;
- movement and grip force;
- unintended sound;
- visual context;
- expectation and task timing.

Similarly, two physically different signals may be perceptually matched. This is the basis of perceptual calibration: adjust the command so that users experience comparable intensity or quality across changing locations, frequencies, devices, or contexts.

### 9.1 Characterization and validation answer different questions
**Physical characterization** asks what the system produced. Appropriate tools include force sensors, accelerometers, laser vibrometers, displacement sensors, microphones, thermal cameras, and calibrated tracking systems.

**Perceptual validation** asks what users could detect, discriminate, identify, judge, or use. Appropriate methods include forced choice, psychometric functions, magnitude estimation, identification tasks, and controlled performance studies.

A strong haptics paper usually needs both.

## 10. Worked example: designing a virtual click
Assume that a researcher wants a touchscreen interaction to feel like a crisp mechanical switch.

### Step 1: define the event
The target is not “a vibration.” The target event has approach, contact, force rise, transition, confirmation, and release.

### Step 2: decide which evidence is essential
A minimal design may use a brief acceleration transient at the transition. A richer system may add localized force, surface displacement, and synchronized audio.

### Step 3: specify physical variables
Report waveform duration, frequency content, peak acceleration or displacement at the touched surface, onset delay, and contact conditions. Do not report only motor voltage.

### Step 4: measure the complete path
Measure from touch detection to mechanical output. Software timestamps alone omit sensor delay, actuator rise time, and structural transmission.

### Step 5: test perceptual questions separately
Possible experiments include:

- **detection:** was a click present?
- **discrimination:** which click was sharper?
- **identification:** was the event interpreted as press, release, or error?
- **realism:** how closely did it resemble the reference switch?
- **performance:** did it reduce accidental presses or improve timing?

### Step 6: test in context
A signal that feels excellent in isolation may fail during rapid tapping, walking, high grip force, background noise, or visual delay.

### Step 7: state the scope of the conclusion
The result applies to the tested hardware, mounting, body site, task, participant population, and context. Generalization requires further evidence.

## 11. How to analyse any haptic system
For a first reading of a paper or prototype, complete the following research worksheet.

| Question | What to record |
|---|---|
| What event is being represented? | Contact, impact, texture, stiffness, direction, alert, social cue, physiological event |
| What does the user do? | Press, slide, grasp, reach, remain still, manipulate a remote tool |
| What is sensed? | Position, force, contact, motion, gesture, context |
| What is computed? | Collision, state estimate, physical model, classifier, rendering rule |
| What actuator is used? | Motor, brake, pneumatic element, piezo, thermal element, ultrasound array |
| What reaches the body? | Measured force, acceleration, displacement, pressure, temperature, airflow |
| Where is it delivered? | Fingerpad, nail, wrist, forearm, torso, tool, environment |
| What percept is claimed? | Contact, vibration, roughness, weight, stiffness, embodiment, realism |
| How was it measured? | Instrumentation, psychophysics, task performance, questionnaire |
| What is the baseline? | No feedback, visual only, another device, physical reference |
| What are the limits? | Workspace, latency, safety, comfort, variability, power, calibration |

This worksheet prevents device novelty from replacing scientific explanation.

## 12. Common misconceptions
- **“Haptics means vibration.”** Vibration is one stimulus class within a much broader field.
- **“Stronger feedback is better feedback.”** Excess intensity can mask information, reduce comfort, destabilize control, or communicate the wrong event.
- **“The actuator specification tells us what the user felt.”** The body-device interface changes the delivered stimulus.
- **“Touch is one sensory channel.”** Natural haptic perception combines cutaneous, proprioceptive, kinesthetic, thermal, motor, and contextual information.
- **“Contactless means no physical interaction.”** Energy must still reach the body.
- **“A realistic waveform creates a realistic experience.”** Timing, action, spatial alignment, context, and multisensory evidence also matter.

## Key takeaways
- Haptics studies the complete chain from physical interaction to perception and action.
- Commands, physical stimuli, percepts, and functional outcomes are distinct levels of evidence.
- Active touch couples action and sensing; exploratory movement is part of perception.
- Haptic information can be cutaneous, kinesthetic, proprioceptive, thermal, or contactless, and these sources frequently interact.
- Physical characterization and perceptual validation are complementary requirements.
- A defensible haptic claim specifies the event, stimulus, body interface, task, measurement, and scope.

## Self-test
1. Why is a short phone vibration not physically equivalent to a mechanical button click?
2. Give one example each of cutaneous, kinesthetic, proprioceptive, and thermal information.
3. Why is active touch not adequately described as passive touch plus movement?
4. Where can latency enter the haptic interaction loop?
5. Why is actuator voltage insufficient evidence for perceived intensity?
6. What is the difference between a device command, a physical stimulus, and a perceptual outcome?
7. Why must a force-feedback device have a reaction path?
8. What additional evidence is required to claim that a haptic cue improved interaction?

### Answer guide
1. A mechanical click includes force rise, displacement, snap-through, vibration, sound, and state change; a phone vibration recreates only selected evidence.
2. Examples include fingertip pressure, arm resistance, perceived joint position, and cooling of the skin.
3. In active touch, the movement is deliberately selected to reveal information and therefore changes the stimulus being sampled.
4. Delay can arise in sensing, communication, computation, actuator dynamics, structural transmission, and display synchronization.
5. Voltage does not account for actuator dynamics, mounting, contact, body mechanics, or perceptual sensitivity.
6. They refer respectively to what the system requests, what reaches the body, and what the user experiences or reports.
7. Mechanical force must be balanced by an equal reaction through a frame, another body segment, inertia, the environment, or another physical mechanism.
8. A controlled comparison with a baseline and a task-relevant behavioural measure is needed.

## Practical exercise
Choose three systems: a phone, a force-feedback stylus, and a mid-air ultrasound display. For each system, complete the analysis worksheet in Section 11. Then identify one claim that can be supported by physical measurement, one that requires psychophysics, and one that requires task-performance evidence.

## Research-level discussion question
A visually convincing pseudo-haptic effect can alter perceived stiffness without applying a corresponding physical force. Should it be classified as haptic feedback, multisensory interaction, or visual interaction? Develop a definition that is useful for science rather than merely inclusive.

## Evidence and source notes
The active-touch distinction is grounded in Gibson’s observations on touching versus being touched. [R26] The relationship between exploratory goals and hand movements was established experimentally by Lederman and Klatzky. [R04] The four-class description of glabrous-skin mechanoreceptive afferents comes from human microneurography studies by Johansson and Vallbo and is developed further in Chapter 2. [R05] Broad device and field taxonomies can be compared with modern haptics overviews, but this chapter deliberately separates physical, biological, perceptual, and functional claims rather than treating actuator categories as perceptual categories. [R12]

## Recommended reading
- [R26] Gibson, “Observations on Active Touch.”
- [R04] Lederman and Klatzky, “Hand Movements: A Window into Haptic Object Recognition.”
- [R01] Jones, *Haptics*.
- [R03] Jones and Lederman, *Human Hand Function*.
- [R12] Culbertson, Schorr, and Okamura, “Haptics: The Present and Future of Artificial Touch Sensation.”
