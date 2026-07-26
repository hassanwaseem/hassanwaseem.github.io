<!-- CHAPTER:05 -->
# Mechanics for Haptics
LEAD: Haptic interaction is governed by the relationship between force and motion. Mechanics provides the vocabulary needed to specify, model, measure, and control that relationship.

## Learning objectives
- Distinguish position, velocity, acceleration, force, torque, work, energy, and power.
- Explain mass, stiffness, damping, compliance, friction, and impedance.
- Apply simple mechanical models to haptic interfaces.
- Identify assumptions that make a model valid or invalid.

## 1. Kinematics and dynamics
Position describes configuration. Velocity is the rate of change of position, and acceleration is the rate of change of velocity. Force changes momentum; torque is the rotational counterpart of force.

In one dimension:

$$v = dx/dt,    a = dv/dt,    F = ma$$

Haptic systems rarely behave as ideal point masses. Linkages, cables, soft materials, skin, and actuators add compliance, friction, backlash, and distributed mass.

## 2. Stiffness and compliance
For an ideal linear spring:

$$F = kx$$

`k` is stiffness in newtons per metre and `x` is displacement from equilibrium. Compliance is the inverse relation: displacement per unit force. A rendered virtual wall often uses a spring-like force proportional to penetration.

Perceived stiffness is not determined by `k` alone. Exploration speed, damping, visual deformation, device inertia, and maximum stable force all affect the experience.

## 3. Damping
A viscous damper produces a force proportional to velocity:

$$F_d = bv$$

Damping dissipates energy and can reduce oscillation, but excessive damping makes motion feel sluggish. Real friction is not always viscous; bearings, seals, skin, and cables may show Coulomb friction, stiction, hysteresis, and velocity dependence.

## 4. Mass-spring-damper model
A common model is:

$$F = m a + b v + k x$$

This model supports intuition and controller design, but it is an approximation. Parameters may change with position, direction, preload, temperature, or deformation.

## 5. Impedance and admittance
Mechanical impedance describes how a system resists motion. In an **impedance-type** haptic interface, motion is measured and force is commanded. In an **admittance-type** interface, force is measured and motion is commanded.

The distinction affects hardware, sensing, controller bandwidth, and stability. A lightweight backdrivable device often behaves naturally as an impedance interface. A heavy industrial mechanism may be easier to control through admittance.

## 6. Contact and impact
Contact can involve indentation, distributed pressure, friction, adhesion, deformation, and impact. A penalty model approximates contact with a virtual spring and damper. An impact involves rapid momentum transfer and contains high-frequency components that may require separate event-based cues.

Contact models must match the intended scale. A simple spring may be sufficient for a virtual button but inadequate for soft tissue, granular material, or complex tool interaction.

## 7. Friction
A basic Coulomb model uses a tangential force opposing motion, limited by the normal force:

$$|F_t| ≤ μ F_n$$

Static and dynamic friction may differ. Real tactile friction also depends on moisture, contact area, skin mechanics, texture, velocity, and surface chemistry. Friction models should therefore be validated for the task rather than treated as universal material constants.

## 8. Work, energy, and power
Mechanical work is force integrated over displacement. Power is the rate of doing work:

$$P = F · v$$

Energy analysis is central to safety and passivity. A controller that injects uncontrolled energy can become unstable even when the commanded forces appear reasonable.

## Worked example: virtual wall
A stylus penetrates a virtual plane by 2 mm. With `k = 500 N/m`, the ideal spring force is 1 N. If the device can stably render only 0.6 N at the required update rate, increasing `k` in software will not create a harder wall; it may cause oscillation or saturation. A complete design also specifies damping, servo rate, device inertia, and contact geometry.

## Common misconceptions
- High nominal stiffness does not guarantee high perceived stiffness.
- Friction is not always a constant coefficient.
- A physically plausible model can still be unstable when discretized.
- The user and device form one coupled mechanical system.

## Key takeaways
- Force and motion must be considered together.
- Stiffness, damping, mass, friction, and delay shape the interaction.
- Mechanical models are useful only within stated assumptions.
- Energy and stability constraints are part of haptic rendering.

## Self-test
1. What is the difference between stiffness and compliance?
2. Why can high damping reduce transparency?
3. What distinguishes impedance and admittance control?
4. Why is impact difficult to reproduce with a slow actuator?
5. What does power reveal that peak force does not?

## Practical exercise
Model a one-dimensional virtual surface using a spring and damper. Calculate forces for several penetrations and velocities, then identify saturation and safety limits for a device with a 1 N maximum output.

<!-- CHAPTER:06 -->
# Signals and Vibrations
LEAD: Haptic signals vary over time and space. Signal analysis is required to design waveforms, choose sampling rates, measure actuator output, and understand what reaches the body.

## Learning objectives
- Describe amplitude, frequency, phase, duration, and waveform.
- Explain sampling, aliasing, filtering, resonance, and frequency response.
- Interpret time plots, spectra, and spectrograms.
- Design a measurement chain for vibration.

## 1. Time-domain description
A sinusoid can be written as:

$$x(t) = A sin(2πft + φ)$$

`A` is amplitude, `f` frequency, and `φ` phase. Real haptic signals include transients, bursts, ramps, pulses, noise, and mixtures of frequencies. Duration and envelope often matter as much as carrier frequency.

Acceleration, displacement, and velocity are related through differentiation and integration. Reporting only “amplitude” is ambiguous unless the physical quantity, units, filtering, and measurement location are stated.

## 2. Frequency-domain description
The Fourier transform represents a signal as frequency components. A spectrum is useful for stationary or repeated signals. A spectrogram shows how frequency content changes over time and is useful for impacts, textures, and actuator start-up behaviour.

Frequency analysis does not replace time analysis. Two signals can have similar spectra but different temporal structures and therefore different perceptual meanings.

## 3. Sampling and aliasing
A sampled system must represent the highest relevant signal frequency. Sampling below the required rate causes aliasing, where high-frequency components appear as false lower frequencies.

The Nyquist criterion gives a minimum theoretical rate greater than twice the highest frequency, but practical systems need margin for filters, phase, controller delay, and waveform fidelity.

## 4. Filtering
Filters remove noise, isolate bands, or shape signals. Every filter has magnitude and phase effects. A causal low-pass filter adds delay. Filtering after data collection cannot restore information that was never sampled or was clipped.

Report filter type, order, cutoff frequencies, direction, and whether it was applied online or offline.

## 5. Resonance and frequency response
Mechanical systems amplify some frequencies and attenuate others. An actuator’s electrical input is transformed by its moving mass, housing, mounting, skin contact, and load. Frequency response is therefore configuration-dependent.

A signal that is flat at the actuator command may be highly non-flat at the body. Characterization should be performed in the intended mounting condition.

## 6. Transients and envelopes
Clicks, impacts, and slip events are transient. Their onset, rise time, peak, decay, and repetition affect perception. An actuator with slow rise time may convert a sharp command into a soft pulse.

Envelope design can separate event identity from carrier frequency. For example, a 200 Hz carrier with a 20 ms envelope can feel like a click, while the same carrier sustained for 500 ms feels like vibration.

## 7. Noise and signal-to-noise ratio
Noise may arise from electronics, quantization, tracking, mechanical vibration, mains coupling, or environmental movement. Signal-to-noise ratio should be evaluated at the sensor output and after filtering. Averaging can reduce random noise but may hide nonstationary errors.

## Worked example: measuring a tactor
Attach an accelerometer to the surface contacting the skin. Drive the actuator with several frequencies and amplitudes under a controlled preload. Record acceleration at a sampling rate with sufficient bandwidth. Compute RMS amplitude, peak amplitude, spectrum, and repeatability. Repeat after mounting to the target body site because the load changes the response.

## Common misconceptions
- Command frequency is not necessarily output frequency.
- A high sample rate alone does not guarantee accurate measurement.
- Filtering is not neutral; it alters phase and timing.
- RMS, peak, peak-to-peak, and spectral amplitude are not interchangeable.

## Key takeaways
- Specify physical quantity, units, location, and processing.
- Analyze both temporal structure and frequency content.
- Prevent aliasing before sampling.
- Characterize the full actuator-mount-body path.

## Self-test
1. Why can two signals with similar spectra feel different?
2. What creates aliasing?
3. Why does filtering add latency?
4. What determines mechanical resonance?
5. Why should output be measured under load?

## Practical exercise
Generate three 200 Hz signals: continuous, 20 ms burst, and amplitude-modulated. Plot time histories and spectra, then predict how actuator bandwidth and mounting could alter each output.

<!-- CHAPTER:07 -->
# Sensors for Haptic Systems
LEAD: A haptic controller is only as reliable as its measurements. Sensors must be selected, calibrated, synchronized, and characterized for the forces and motions that matter in the interaction.

## Learning objectives
- Compare force, position, motion, pressure, and contact sensors.
- Explain calibration, resolution, accuracy, repeatability, drift, and bandwidth.
- Design a synchronized measurement chain.
- Identify sensor placement and mechanical-coupling errors.

## 1. What should be measured?
Common variables include position, orientation, velocity, acceleration, force, torque, pressure, contact area, motor current, temperature, and physiological response. Select measurements from the research question and controller requirements rather than from available hardware alone.

## 2. Force and torque sensing
Load cells and strain gauges infer force from deformation. Multi-axis sensors measure forces and torques in several directions. Key concerns include range, overload, cross-axis sensitivity, mounting, temperature drift, and structural compliance.

A force sensor placed far from the contact may include friction and inertia from intervening parts. Report where the force is measured and what mechanical elements lie between sensor and user.

## 3. Position and motion sensing
Encoders measure angular or linear displacement. Optical trackers and cameras provide larger workspaces but may have occlusion, variable latency, and coordinate-calibration errors. Accelerometers measure inertial acceleration and are useful for vibration, but integration to velocity or position accumulates drift.

Sensor fusion can combine complementary measurements, but it adds model assumptions and timing requirements.

## 4. Pressure and contact sensing
Pressure arrays and capacitive sensors can estimate contact location and distribution. Their output depends on contact area, material compliance, hysteresis, and calibration load. A pressure map is not automatically equivalent to normal force unless the spatial integration and calibration are valid.

## 5. Calibration
Calibration maps sensor output to a known physical quantity. A useful calibration includes:

- traceable reference loads or displacements;
- multiple points across the expected range;
- loading and unloading cycles;
- residual error and uncertainty;
- repeatability across sessions;
- zeroing and drift procedure;
- relevant temperature and mounting conditions.

A single scale factor may be inadequate when response is nonlinear or hysteretic.

## 6. Resolution, accuracy, and precision
**Resolution** is the smallest output increment that can be represented. **Accuracy** is closeness to the reference value. **Precision** or repeatability concerns consistency. A sensor can have fine resolution but poor accuracy, or high accuracy after averaging but insufficient bandwidth for impact.

## 7. Sampling, synchronization, and latency
Multiple sensors must share a time base or be synchronized. Unsynchronized force and position measurements corrupt stiffness, impedance, and energy estimates. Timestamp precision does not guarantee low latency; buffering, operating systems, cameras, and communication buses can add variable delay.

Measure end-to-end timing where possible.

## 8. Current-based force estimation
Motor current can estimate torque using a motor constant, but gear friction, controller dynamics, temperature, and transmission losses introduce errors. Current sensing is valuable for control and safety but should not replace direct contact-force measurement without validation.

## Worked example: calibrating a tethered force device
Mount the device in its intended geometry. Apply known weights or forces across the operational range in both directions. Record raw sensor output, fit a model, inspect residuals, and repeat after reassembly. Measure pulley friction and cable angle because both alter the relation between motor torque, load-cell force, and force at the finger.

## Common misconceptions
- More ADC bits do not guarantee more useful resolution.
- A factory calibration does not include the user’s mechanical assembly.
- Software timestamps do not guarantee synchronized physical events.
- Motor current is not automatically equal to contact force.

## Key takeaways
- Sensor choice begins with the variable and bandwidth required.
- Calibration must include the installed mechanical configuration.
- Accuracy, repeatability, resolution, drift, and latency are distinct.
- Time synchronization is essential for dynamic haptic analysis.

## Self-test
1. Why can a remotely mounted force sensor misrepresent contact force?
2. What is the difference between resolution and accuracy?
3. Why measure loading and unloading curves?
4. What causes drift when integrating acceleration?
5. Why can current-based force estimation fail?

## Practical exercise
Write a calibration protocol for a load cell used from 0–2 N. Include references, repetitions, preload, loading direction, model fitting, uncertainty, drift checks, and acceptance criteria.

<!-- CHAPTER:08 -->
# Haptic Actuators
LEAD: Actuators convert electrical, pneumatic, acoustic, thermal, or other energy into bodily stimulation. Selection requires matching the output physics to the intended percept, body site, bandwidth, workspace, and safety limits.

## Learning objectives
- Compare major actuator families.
- Match actuator output to tactile or kinesthetic requirements.
- Evaluate bandwidth, response time, force, displacement, power, size, and controllability.
- Recognize transmission, mounting, and safety constraints.

## 1. Selection framework
For each actuator, specify:

- physical output: force, displacement, acceleration, pressure, friction, temperature, or airflow;
- direction and spatial extent;
- static and dynamic range;
- frequency response and latency;
- size, mass, noise, power, and heat;
- mounting and reaction-force path;
- controllability and sensor requirements;
- safety and failure mode.

## 2. ERM and LRA actuators
An eccentric rotating mass motor produces vibration through an unbalanced rotating mass. It is inexpensive but has slow start/stop behaviour and couples frequency to motor speed.

A linear resonant actuator oscillates a mass near resonance. It provides sharper control than an ERM near its operating band but has limited bandwidth. Closed-loop drive can improve consistency.

## 3. Voice coils and solenoids
Voice coils produce force approximately proportional to current over a motion range. They support controlled transients and broadband vibration but require guidance, current drive, and thermal management.

Solenoids generate strong impulsive or switching motion. They are useful for taps and impacts but are less suitable for precise bidirectional continuous force unless designed with additional mechanics.

## 4. Piezoelectric actuators
Piezoelectric elements provide rapid, small displacements and high bandwidth. They are effective for vibration, surface deformation, and compact arrays but may require high voltage and mechanical amplification. Their response depends strongly on mounting and load.

## 5. Motors, cables, brakes, and clutches
Electric motors combined with transmissions can provide kinesthetic force and motion. Gearboxes increase torque but add friction and backlash. Cable-driven systems move mass away from the hand but introduce routing, compliance, and tension-control problems.

Brakes and clutches resist motion rather than actively driving it. They can be energy-efficient and safe for constraints but cannot generate arbitrary forces in every direction.

## 6. Pneumatic actuation
Pneumatic pouches, bellows, and soft chambers can produce pressure, shape change, impact, or lateral motion. They are compliant and compatible with wearable devices. Limitations include pumps, valves, tubes, compressibility, noise, and slower pressure dynamics.

## 7. Electrostatic surface haptics
Electrovibration and electroadhesion alter finger-surface friction through electrostatic attraction. They can create programmable surface sensations without moving parts but normally require sliding contact, insulated electrodes, and high-voltage low-current drive.

## 8. Ultrasound and airflow
Focused ultrasound can generate localized skin forces in mid-air. Air jets can create pressure, cooling, and directional cues. These methods avoid worn hardware but have limited force, spatial spread, environmental sensitivity, noise, and exposure constraints.

## 9. Thermal and smart-material actuators
Peltier elements can heat or cool the skin but have slow thermal dynamics and require heat sinking. Shape-memory alloys and electroactive materials offer compact deformation but may have hysteresis, limited efficiency, slow recovery, or difficult control.

## 10. Comparison table
| Family | Main strength | Main limitation | Typical use |
|---|---|---|---|
| ERM | Low cost | Slow and poorly controlled transients | Notifications |
| LRA | Crisp resonant vibration | Narrow operating band | Mobile clicks |
| Voice coil | Controllable broadband motion | Size, heat, mechanics | Texture and impact |
| Piezoelectric | Fast and compact | Small displacement, high voltage | Surface and array haptics |
| Motor/cable | Strong kinesthetic force | Friction, inertia, workspace | Force feedback |
| Pneumatic | Soft distributed pressure | Pump and tubing | Wearable pressure |
| Electrostatic | No moving parts | Requires sliding surface | Touchscreens |
| Ultrasound | Mid-air localization | Low force and complex field | Contactless cues |

## Worked example: actuator for a wearable impact cue
A short impact on the forearm needs fast onset and repeatable amplitude. An ERM may be too slow. A voice coil or solenoid can provide a sharper transient, while a pneumatic pouch can add distributed pressure but may have slower timing. The final choice depends on mass, noise, peak acceleration, attachment, driver electronics, and comfort. Physical measurement at the skin and perceptual comparison remain necessary.

## Common misconceptions
- Datasheet force is not necessarily force at the body.
- A wider command bandwidth does not guarantee wider mechanical bandwidth.
- Compact actuators may require bulky drivers, pumps, or heat sinks.
- One actuator rarely reproduces every haptic property.

## Key takeaways
- Choose the physical stimulus before choosing the actuator.
- Characterize the installed actuator under realistic load.
- Include driver, transmission, mounting, and power in the design.
- Multimodal systems should assign complementary roles to actuator families.

## Self-test
1. Why is an LRA normally narrowband?
2. What does a cable transmission improve and what does it worsen?
3. Why do piezoelectric actuators often need amplification?
4. What interaction is normally required for electrovibration?
5. Why should actuator sound be measured?

## Practical exercise
Select actuators for three targets: a 20 ms click at a fingertip, sustained 1 N finger resistance, and a moving mid-air point. Build a decision matrix covering output physics, bandwidth, mass, power, driver complexity, safety, and measurement.
