<!-- CHAPTER:05 -->
# Mechanics for Haptics
LEAD: Haptic interaction is governed by relationships between force, motion, deformation, energy, and time. Mechanics provides the language for specifying those relationships and for recognizing when a device model is too simple.

## How to read this chapter
The objective is not to reproduce a complete mechanics curriculum. It is to build the models that repeatedly appear in haptic devices: mass, spring, damper, friction, contact, impact, and mechanical impedance.

Use each equation as a conditional model. Ask what is assumed, which variables are measured, which elements are neglected, and over what operating range the model is valid.

## Learning objectives
- Distinguish kinematic variables from forces, torques, energy, and power.
- Construct and interpret mass–spring–damper models.
- Explain stiffness, compliance, damping, impedance, and admittance.
- Distinguish static friction, kinetic friction, and velocity-dependent effects.
- Analyse contact and impact as time-dependent events.
- Relate passivity and energy flow to safe haptic interaction.
- Identify how device mechanics and body mechanics distort rendered output.

## 1. Coordinate systems and state variables
A mechanical description begins with a coordinate system. In one translational degree of freedom, position is `x(t)`. Velocity and acceleration are derivatives:

$$v(t) = dx/dt$$

$$a(t) = d²x/dt²$$

For rotation, the analogous quantities are angle `θ`, angular velocity `ω`, and angular acceleration `α`. Force `F` acts translationally; torque `τ` acts rotationally.

A haptic system may use several coordinate frames:

- encoder or actuator coordinates;
- device-joint coordinates;
- endpoint or tool coordinates;
- body coordinates;
- virtual-world coordinates.

Transformations among these frames are part of the measurement chain. A force reported in motor-current units is not yet a Cartesian force at the hand.

## 2. Newtonian dynamics
For an ideal point mass:

$$F = ma$$

For rotation:

$$τ = Jα$$

where `m` is mass and `J` is rotational inertia. Real haptic devices contain distributed masses, linkages, gears, cables, bearings, soft materials, and the user’s limb. Effective inertia often depends on configuration and direction.

CALLOUT: Research note | Characterize inertia in the workspace and posture where the device is used. A single motor-rotor inertia does not describe endpoint dynamics.

## 3. Springs, stiffness, and compliance
For an ideal linear spring:

$$F = kx$$

where `k` is stiffness in newtons per metre and `x` is displacement from equilibrium. The stored elastic energy is:

$$E_s = 1/2 kx²$$

**Compliance** is the inverse relationship. For a linear spring:

$$C = 1/k$$

High stiffness means a small displacement produces a large force. High compliance means the system deforms substantially under force.

### 3.1 Incremental and nonlinear stiffness
Many haptic materials are nonlinear. The local or incremental stiffness is:

$$k_t = dF/dx$$

A foam, biological tissue, elastomer, or buckling mechanism can have stiffness that changes with displacement, speed, temperature, history, or direction.

### 3.2 Perceived stiffness
Users estimate stiffness by sampling force and displacement. Perception is influenced by exploration speed, visual deformation, contact geometry, cutaneous cues, device inertia, friction, and force saturation. A numerical `k` is therefore a physical parameter, not a complete perceptual description.

## 4. Damping and dissipation
An ideal viscous damper produces force proportional to velocity:

$$F_d = bv$$

where `b` is the damping coefficient. Damping removes mechanical energy:

$$P_d = F_d v = bv²$$

Damping can suppress oscillation and improve stability. Excess damping makes free-space motion feel heavy or sticky.

Real systems may show nonlinear damping, dry friction, air drag, eddy-current braking, hydraulic effects, and speed-dependent motor losses.

## 5. The mass–spring–damper model
A widely used one-dimensional model is:

$$F(t) = m ẍ + b ẋ + kx$$

FIGURE: assets/figures/10-mechanics-impedance.svg | Mass–spring–damper model and comparison of free motion, compliant contact, and stiff constrained contact. | **Figure 5.1 — Mechanics links force to motion.** The same device can feel free, compliant, or constrained depending on the relationship it renders. Original course diagram; CC BY 4.0.

The natural frequency of an undamped mass–spring system is:

$$ω_n = √(k/m)$$

For the damped system, the damping ratio is:

$$ζ = b / (2√(km))$$

- `ζ < 1`: underdamped; oscillatory response.
- `ζ = 1`: critically damped in the ideal second-order model.
- `ζ > 1`: overdamped; slow non-oscillatory response.

These categories are useful, but real haptic systems include sampling, delay, friction, saturation, and human impedance.

## 6. Mechanical impedance and admittance
Mechanical **impedance** describes the relationship between force and motion. In the frequency domain, a common velocity-based definition is:

$$Z(jω) = F(jω) / V(jω)$$

Mechanical **admittance** is the inverse:

$$Y(jω) = V(jω) / F(jω)$$

A stiff wall has high impedance. Free space has low impedance. A haptic device aims to render a useful range between these extremes.

This range is limited by physical device dynamics and digital control. Colgate and Brown introduced **Z-width** as the range of impedances that a haptic display can render while satisfying a robustness condition such as passivity. [R10]

### 6.1 Human impedance
The user is not an external disturbance. Grip, posture, voluntary muscle activation, and reflexes alter the coupled dynamics. A stable device on a rigid test fixture may behave differently in the hand.

## 7. Work, energy, and power
Mechanical work is:

$$W = ∫ F · dx$$

Instantaneous power is:

$$P = F · v$$

Positive power transfers energy into the receiving system; negative power absorbs energy. In multi-degree-of-freedom systems:

$$P = Fᵀv + τᵀω$$

Energy bookkeeping is central to stability and safety. Motors, compressed air, springs, gravity, and moving masses can inject or store energy.

## 8. Passivity
A passive physical element does not generate net energy. Springs store and return energy; dampers dissipate it. Active actuators can inject energy.

A discretely controlled virtual spring may become active because force is updated after position changes. Delay, quantization, and sample-and-hold can create energy even when the continuous mathematical model is passive.

Passivity is a sufficient framework for many stability analyses, but it is not identical to realism. A very dissipative system may be stable and perceptually poor.

## 9. Friction
Friction is not one constant coefficient.

### 9.1 Coulomb model
A simple kinetic-friction model is:

$$F_f = μ_k N sign(v)$$

where `N` is normal force. Static friction resists motion up to a limit:

$$|F_f| ≤ μ_s N$$

### 9.2 Limitations
Real friction depends on velocity, contact area, material, temperature, humidity, surface contamination, normal load, deformation, adhesion, and history. At low speeds, presliding displacement and the Stribeck effect can matter.

In touch interaction, friction affects both mechanics and perception. Surface-haptic devices often modulate friction rather than applying a direct tangential force.

## 10. Contact mechanics
Contact distributes force over an area. Key variables include:

- normal force;
- contact area and pressure distribution;
- indentation depth;
- curvature;
- material modulus and Poisson ratio;
- adhesion and friction;
- loading rate and history.

Hertzian contact models elastic non-adhesive contact between smooth curved bodies under restrictive assumptions. Biological tissue, rough surfaces, and soft wearable contacts often violate those assumptions.

CALLOUT: Modelling rule | Use the simplest model that predicts the measured variable over the required range. State explicitly when a spring is only an empirical approximation of a complex contact.

## 11. Impact and impulse
Impact is a transient change in momentum. Impulse is:

$$J = ∫ F(t)dt = Δp$$

Peak force alone does not fully describe impact. Duration, rise time, impulse, frequency content, and structural propagation influence perception and safety.

Event-based haptic rendering exploits short transients to increase contact realism without continuously increasing virtual-wall stiffness. [R11]

## 12. Cables, gears, backlash, and compliance
Transmission elements introduce nonideal behaviour.

- **Cables** add elasticity, friction, routing-dependent force, and possible slack.
- **Gears** increase torque but add reflected inertia, friction, backlash, and noise.
- **Belts** add compliance and damping.
- **Bowden cables** allow remote actuation but introduce hysteresis and configuration-dependent friction.
- **Soft structures** improve comfort but filter high-frequency output.

Measure the endpoint rather than inferring it from the motor.

## 13. Worked example: a virtual wall
A penalty-based virtual wall may use:

$$F = -kx - bv$$

when penetration `x > 0`, and zero force otherwise.

A defensible implementation process is:

1. calibrate position and force;
2. measure free-space friction and inertia;
3. increase stiffness gradually under safe limits;
4. measure oscillation and energy behaviour;
5. evaluate different hand impedances and approach speeds;
6. compare physical stiffness, perceived stiffness, and task performance;
7. report saturation and clipping.

A numerically high `k` that saturates or oscillates does not create a stiff wall.

## Common misconceptions
- Force is not the same as pressure.
- Stiffness is not the same as hardness in all perceptual tasks.
- High gain does not guarantee high-fidelity contact.
- Device inertia cannot be ignored in free-space motion.
- A passive mathematical environment can become active after discretization.
- Friction is not fully represented by one coefficient.
- Peak impact force is not a complete transient description.

## Key takeaways
- Mechanics specifies relationships between force, motion, deformation, and energy.
- Mass, stiffness, and damping provide a useful local model but not a universal description.
- Impedance and admittance describe interaction behaviour.
- Stable renderable impedance is limited by device and control dynamics.
- Energy analysis connects mechanics to stability and safety.
- Endpoint and body-interface measurements are more informative than actuator commands.

## Self-test
1. What is the difference between stiffness and compliance?
2. What does damping do to mechanical energy?
3. Why can a virtual spring inject energy?
4. What does Z-width describe?
5. Why is perceived stiffness not determined by `k` alone?
6. What information does impulse capture that peak force does not?
7. Name four transmission nonidealities.
8. Why should endpoint force be measured directly?

## Practical exercise
Model a 0.15 kg haptic endpoint connected to a spring of 800 N/m and damper of 5 N·s/m. Calculate natural frequency and damping ratio. Then list five real-device effects that make the measured response differ from the ideal model.

## Evidence and source notes
The Z-width formulation and the effects of sample-and-hold, quantization, filtering, and mechanical damping are grounded in Colgate and Brown. [R10] Event-based transients and their contribution to contact realism are developed by Kuchenbecker, Fiene, and Niemeyer. [R11]

## Recommended reading
- [R01] Jones, *Haptics*.
- [R10] Colgate and Brown, “Factors Affecting the Z-Width of a Haptic Display.”
- [R11] Kuchenbecker, Fiene, and Niemeyer, “Improving Contact Realism through Event-Based Haptic Feedback.”

<!-- CHAPTER:06 -->
# Signals and Vibrations
LEAD: Haptic signals evolve in time and are transformed by digital sampling, actuator dynamics, structures, skin, sensors, and analysis. Signal processing is therefore part of both rendering and measurement.

## How to read this chapter
Separate three signals:

1. the digital command;
2. the physical output at the body;
3. the measured signal after the sensor and acquisition chain.

They are related but rarely identical.

## Learning objectives
- Describe amplitude, phase, frequency, waveform, duration, and envelope.
- Apply sampling and aliasing principles.
- Interpret Fourier spectra and spectrograms.
- Explain filtering, resonance, transients, and noise.
- Choose appropriate acceleration, displacement, force, or velocity measures.
- Design a traceable haptic signal-measurement chain.

## 1. Time-domain description
A sinusoid can be written as:

$$x(t) = A sin(2πft + φ)$$

where `A` is amplitude, `f` frequency, and `φ` phase. Real haptic cues are often windowed bursts, pulses, clicks, ramps, or stochastic signals rather than steady sinusoids.

Important time-domain variables include:

- onset latency;
- rise time;
- duration;
- peak value;
- root-mean-square value;
- crest factor;
- pulse repetition rate;
- inter-stimulus interval;
- attack and decay envelope.

## 2. Displacement, velocity, and acceleration
For sinusoidal motion with displacement amplitude `X`:

$$V = 2πfX$$

$$A_acc = (2πf)²X$$

Thus equal displacement at higher frequency produces much greater acceleration. Reporting “amplitude” without the physical variable and units is ambiguous.

## 3. Sampling
A continuous signal is sampled at discrete times. The sampling frequency is `f_s`; sample interval is:

$$T_s = 1/f_s$$

For a band-limited signal, the Nyquist–Shannon result requires a sampling rate greater than twice the highest frequency for ideal reconstruction. Practical systems require margin and an analog anti-alias filter.

FIGURE: assets/figures/11-sampling-signal-chain.svg | Complete haptic signal chain and comparison of adequate sampling with aliasing. | **Figure 6.1 — Sampling acts on the measured physical signal, not the intended command.** Anti-alias filtering must precede digitization. Original course diagram; CC BY 4.0.

## 4. Aliasing
Aliasing occurs when frequencies above half the sampling rate appear as lower frequencies after sampling. Once aliased, they cannot be removed by later digital filtering.

Sources include:

- actuator harmonics;
- switching electronics;
- impacts and sharp edges;
- mechanical resonance;
- environmental vibration;
- sensor noise outside the intended band.

## 5. Quantization and dynamic range
An analog-to-digital converter represents amplitude using finite levels. Resolution depends on bit depth and input range.

A 16-bit converter does not guarantee 16 effective bits. Noise, reference stability, amplifier performance, sensor limits, and grounding determine effective resolution.

Choose the range so expected signals are large relative to noise but do not clip.

## 6. Fourier analysis
The Fourier transform represents a signal as frequency components. For discrete data, the discrete Fourier transform is commonly computed with an FFT.

A spectrum is influenced by:

- record length;
- sampling rate;
- window function;
- frequency resolution;
- leakage;
- detrending;
- averaging method;
- amplitude normalization.

### 6.1 Windowing
A finite record implicitly truncates the signal. Windows reduce spectral leakage but change amplitude and bandwidth. Report the window and normalization.

### 6.2 Power spectral density
Power spectral density estimates how signal power is distributed over frequency. It is useful for stochastic texture signals and noise, but its units and scaling must be stated.

## 7. Spectrograms
A spectrogram applies short-time Fourier analysis to show how frequency content changes over time.

There is a time–frequency trade-off:

- long windows improve frequency resolution but blur timing;
- short windows preserve transients but reduce frequency resolution.

A spectrogram can reveal actuator startup, impact transients, speed-dependent textures, and unstable oscillation.

## 8. Filters
Filters modify frequency content.

- **Low-pass:** suppresses high frequencies.
- **High-pass:** suppresses slow drift and DC.
- **Band-pass:** isolates a range.
- **Notch:** suppresses a narrow interference frequency.

Filter design includes cutoff, order, phase, group delay, stability, and transient behaviour.

### 8.1 Causal and zero-phase filtering
Real-time rendering requires causal filters and therefore introduces phase delay. Offline zero-phase filtering can avoid phase shift by using future data, but cannot be implemented in real time.

Do not use offline processing to claim real-time latency performance.

## 9. Resonance and frequency response
A device has a transfer function from command to output. Frequency response includes magnitude and phase.

An LRA is designed around a resonance. A voice coil, housing, strap, finger, table, and sensor each introduce additional dynamics. Output amplitude may vary sharply with frequency.

A frequency sweep should specify:

- command amplitude;
- contact and preload;
- sweep direction and rate;
- sensor location;
- environmental constraints;
- whether the system is linear over the tested range.

## 10. Transients
Clicks, impacts, and switching events are broadband. Characterize:

- onset delay;
- rise time;
- peak and RMS;
- impulse;
- ringing frequency and decay;
- repetition consistency.

Long-window spectra can hide temporal differences between signals with similar overall energy.

## 11. Noise and signal-to-noise ratio
Noise sources include sensors, amplifiers, power supplies, electromagnetic interference, quantization, structural vibration, and biological movement.

Signal-to-noise ratio can be expressed as:

$$SNR_dB = 20 log10(A_signal/A_noise)$$

for comparable amplitude measures, or 10 log10 for power ratios.

Always define the bandwidth over which noise is measured.

## 12. Calibration and traceability
Calibration links measured voltage to physical units. A traceable chain documents:

- sensor sensitivity;
- amplifier gain;
- acquisition range;
- sampling rate;
- filter response;
- mounting;
- calibration date and uncertainty.

## 13. Worked example: a 200 Hz burst
Suppose a 50 ms 200 Hz burst is commanded to an LRA.

A complete characterization should measure:

1. delay from trigger to mechanical onset;
2. rise time toward steady vibration;
3. acceleration at the contact surface;
4. spectral content and harmonics;
5. decay after command termination;
6. repeatability over temperature and battery state;
7. output under different body preload.

Because an LRA requires startup and decay time, a 50 ms command may contain relatively few cycles at the intended steady amplitude.

## Common misconceptions
- A command frequency is not necessarily the dominant skin frequency.
- Sampling at exactly twice the target frequency is not robust.
- A digital low-pass filter cannot undo analog aliasing.
- FFT magnitude depends on windowing and normalization.
- RMS and peak amplitude are not interchangeable.
- Zero-phase filtering is not a real-time method.
- High bit depth does not guarantee low noise.

## Key takeaways
- Specify haptic signals in physical units and time structure.
- Measure the full command-to-body transfer path.
- Sampling and anti-alias filtering determine recoverable information.
- Frequency response and resonance strongly shape output.
- Time-domain and frequency-domain descriptions are complementary.
- Calibration, uncertainty, and bandwidth must be reported.

## Self-test
1. How are displacement and acceleration amplitudes related for a sinusoid?
2. Why is anti-alias filtering analog?
3. What does a spectrogram add beyond an FFT?
4. Why does a causal filter affect latency?
5. What determines FFT frequency resolution?
6. Why should noise bandwidth be reported?
7. Why may a short LRA burst fail to reach steady state?
8. What information belongs in a calibration chain?

## Practical exercise
Generate a 100 Hz sine, a 100 Hz windowed burst, and a 5 ms impulse-like pulse. Compare their time histories, FFTs, and spectrograms at multiple window lengths. Explain which representation best exposes each difference.

## Recommended reading
- [R01] Jones, *Haptics*.
- [R11] Kuchenbecker, Fiene, and Niemeyer, event-based transient feedback.

<!-- CHAPTER:07 -->
# Sensors for Haptic Systems
LEAD: Haptic sensing converts mechanical state into data. Good sensing requires a defined measurand, suitable transducer, calibrated signal chain, adequate bandwidth, and uncertainty that is small relative to the scientific claim.

## Learning objectives
- Define measurand, sensitivity, resolution, accuracy, precision, and bandwidth.
- Compare force, torque, position, motion, pressure, and contact sensors.
- Explain calibration, drift, hysteresis, cross-talk, and uncertainty.
- Design sampling and filtering for closed-loop use.
- Distinguish direct measurement from model-based estimation.

## 1. Start with the measurand
The **measurand** is the physical quantity intended to be measured. “Touch” is not a measurand. Force, torque, displacement, acceleration, pressure distribution, contact state, temperature, and latency are.

Write the measurement equation:

$$y = Sx + b + ε$$

where `x` is the physical input, `S` sensitivity, `b` offset, and `ε` error contributions.

## 2. Measurement vocabulary
- **Accuracy:** closeness to the accepted value.
- **Precision:** consistency across repeated measurements.
- **Resolution:** smallest distinguishable output change under specified conditions.
- **Sensitivity:** output change per input change.
- **Linearity:** closeness to a linear input–output relationship.
- **Hysteresis:** different output for increasing and decreasing input.
- **Repeatability:** agreement under repeated identical conditions.
- **Reproducibility:** agreement after changes such as operator, setup, or day.
- **Bandwidth:** range over which dynamic input is measured with acceptable magnitude and phase error.

## 3. Force and torque sensing
### 3.1 Strain gauges and load cells
A strain gauge changes resistance with strain. Gauges are often arranged in a Wheatstone bridge to increase sensitivity and compensate temperature.

Load cells convert applied force into structural strain. They require calibration in the intended loading direction and mounting.

Common problems:

- off-axis loading;
- temperature drift;
- bridge excitation variation;
- creep;
- mechanical overload;
- fixture compliance;
- amplifier saturation.

### 3.2 Multi-axis force–torque sensors
These estimate several force and torque components. Cross-talk and coordinate transformation must be characterized. Mounting stiffness and tool mass affect dynamic measurements.

### 3.3 Force estimation from motor current
For a motor:

$$τ ≈ k_t I$$

where `k_t` is the torque constant. Endpoint force may be estimated through transmission and Jacobian models. Errors arise from friction, current-control error, gearing, cable routing, inertia, and unmodelled loads.

Current-based force is an estimate, not a direct endpoint measurement.

## 4. Position and angle sensing
### 4.1 Encoders
Incremental encoders measure changes from counts; absolute encoders report position within a range. Relevant variables include counts per revolution, interpolation, index reference, nonlinearity, jitter, and update latency.

### 4.2 Magnetic encoders
Magnetic angle sensors can be compact and robust, but alignment, magnet strength, axial offset, nearby magnetic fields, and electrical noise affect accuracy.

### 4.3 Potentiometers
Potentiometers provide simple absolute position sensing but have contact wear, friction, and limited life.

### 4.4 Optical tracking
Camera systems provide workspace motion but introduce calibration, occlusion, frame rate, reconstruction error, smoothing, and latency. Tracking accuracy should be measured for the actual markers, lighting, and movement speed.

## 5. Acceleration and vibration sensing
Accelerometers measure specific force. Selection variables include range, noise density, bandwidth, axis alignment, mass, mounting resonance, and sampling.

An accelerometer attached to a lightweight vibrating surface can change the dynamics. Laser vibrometry avoids added mass but requires line of sight and surface preparation.

Integrating acceleration to velocity or displacement amplifies low-frequency drift. Use physical constraints and appropriate filtering.

## 6. Pressure and tactile arrays
Pressure sensors measure distributed normal loading. Technologies include resistive, capacitive, piezoresistive, optical, and fluidic systems.

Important limitations:

- taxel-to-taxel variation;
- spatial cross-talk;
- hysteresis;
- nonlinear calibration;
- drift and creep;
- saturation;
- shear sensitivity;
- protective-layer effects.

Pressure maps are not equivalent to contact-force vectors unless geometry and integration are handled correctly.

## 7. Contact and proximity sensing
Binary switches, capacitive sensors, optical interrupters, time-of-flight sensors, and computer vision can estimate contact or approach.

A contact detector should be evaluated for false positives, false negatives, spatial error, temporal delay, and sensitivity to material and environment.

## 8. Calibration
A calibration procedure should span the intended range and loading directions.

### 8.1 Static calibration
Apply known inputs and fit the measurement function. Inspect residuals rather than reporting only `R²`.

### 8.2 Dynamic calibration
For time-varying signals, characterize frequency response and phase. A sensor can be statically accurate and dynamically inadequate.

### 8.3 Uncertainty budget
Combine contributions from reference uncertainty, repeatability, fitting, resolution, drift, cross-talk, and environmental conditions.

CALLOUT: Calibration rule | Calibration is not one scale factor copied from a datasheet. It is a documented relationship between the installed sensor output and the physical quantity under defined conditions.

## 9. Sampling, synchronization, and latency
Closed-loop systems require synchronized sensing and actuation.

Report:

- sensor sampling rate;
- controller update rate;
- timestamp source;
- buffering;
- communication latency;
- filter delay;
- synchronization with graphics and audio.

A nominal 1 kHz sensor may deliver buffered packets at a much lower effective update cadence.

## 10. Filtering
Filtering reduces noise but changes latency and phase. Use the lightest filtering that supports the measurement objective.

For control, test stability with the actual filter. For offline analysis, preserve raw data and document preprocessing.

## 11. Worked example: cable tension measurement
A cable-driven haptic interface uses a load cell in series with the cable.

A defensible measurement plan includes:

1. calibrate with known tensile loads in the installed orientation;
2. verify no bending or pulley side load reaches the cell;
3. measure hysteresis during loading and unloading;
4. characterize vibration bandwidth;
5. synchronize tension with motor position;
6. monitor zero drift before and after sessions;
7. define overload protection;
8. estimate tension at the user after pulley friction if the sensor is elsewhere.

## Common misconceptions
- Resolution is not accuracy.
- A high sampling rate does not guarantee high bandwidth.
- Datasheet sensitivity does not replace installed calibration.
- Motor current is not automatically endpoint force.
- Filtering improves noise at the cost of delay and distortion.
- A pressure array does not directly measure shear force.
- Optical tracking latency cannot be inferred from frame rate alone.

## Key takeaways
- Define the measurand before selecting hardware.
- Calibration, mounting, bandwidth, and synchronization determine usable data.
- Direct sensing and model-based estimation should be labelled separately.
- Static and dynamic accuracy are different.
- Uncertainty must be small enough to support the claim.

## Self-test
1. What is the difference between precision and accuracy?
2. Why can a load cell show cross-talk?
3. Why is current-based force estimation uncertain?
4. What makes acceleration integration drift?
5. Why can a 1 kHz sensor have lower usable bandwidth?
6. What should residuals reveal during calibration?
7. How does filtering affect a control loop?
8. What must be synchronized in a haptic experiment?

## Practical exercise
Design a calibration and uncertainty plan for a one-axis load cell measuring 0–10 N dynamic fingertip force. Include reference loads, mounting, rate, hysteresis, bandwidth, drift, and acceptance criteria.

## Recommended reading
- [R01] Jones, *Haptics*.
- [R34] Johansson and Vallbo, controlled tactile stimulus measurement linked to human thresholds.

<!-- CHAPTER:08 -->
# Haptic Actuators
LEAD: An actuator converts electrical, pneumatic, thermal, or acoustic energy into a physical stimulus. Selection should begin with the required body-level output rather than with the most convenient component.

## Learning objectives
- Compare major actuator families by physical output and dynamics.
- Explain reaction-force paths and transmission.
- Distinguish resonant and broadband actuation.
- Evaluate force, displacement, bandwidth, rise time, power, heat, noise, and safety.
- Select actuators from a target event and body interface.

## 1. From percept to actuator
Use the sequence:

1. intended event or percept;
2. physical stimulus needed at the body;
3. body location and contact geometry;
4. actuator and transmission;
5. sensing and control;
6. physical and perceptual validation.

FIGURE: assets/figures/12-actuator-selection-map.svg | Approximate map of actuator families and a selection funnel from intended percept to validation. | **Figure 8.1 — Actuator selection is a constrained systems problem.** Position on the map is qualitative; actual performance depends on implementation. Original course diagram; CC BY 4.0.

## 2. Comparison criteria
For every actuator, record:

- output variable: force, displacement, acceleration, pressure, strain, heat, or field;
- usable range at the body;
- bandwidth and resonance;
- rise and settling time;
- controllability and repeatability;
- size, mass, and reaction structure;
- power, efficiency, and heat;
- audible noise and EMI;
- lifetime and wear;
- safety and failure mode;
- cost and integration complexity.

## 3. Eccentric rotating mass motors
An ERM rotates an off-centre mass. Centrifugal force creates vibration.

Advantages:

- inexpensive;
- compact;
- simple drive electronics;
- widely available.

Limitations:

- amplitude and frequency are coupled through motor speed;
- slow startup and coast-down;
- orientation and mounting affect output;
- difficult precise transient control;
- audible and mechanical noise.

Use ERMs for coarse notifications, not when independent waveform control is required.

## 4. Linear resonant actuators
An LRA drives a moving mass near mechanical resonance.

Advantages:

- faster response than many ERMs;
- efficient near resonance;
- compact and common in mobile devices.

Limitations:

- narrow effective frequency range;
- output depends on load and mounting;
- drive electronics may require resonance tracking;
- short bursts may not reach steady amplitude.

## 5. Voice-coil actuators
A voice coil produces force approximately proportional to current over a range.

Advantages:

- bidirectional force;
- controllable transients;
- broader bandwidth than resonant tactors;
- useful for displacement, force, and vibration.

Limitations:

- requires a magnetic circuit and reaction mass or structure;
- travel and force limits;
- heat at sustained current;
- feedback control often needed.

## 6. Solenoids
A solenoid pulls a ferromagnetic plunger when energized. Force is strongly position-dependent.

Useful for impacts, clicks, locks, and discrete switching. Less suitable for smooth bidirectional force without additional mechanics.

## 7. Motors and mechanical transmissions
DC, brushless, stepper, and servomotors can generate force through gears, capstans, cables, screws, or linkages.

Advantages:

- substantial force and travel;
- closed-loop position, velocity, or torque control;
- suitable for grounded and wearable kinesthetic systems.

Limitations:

- inertia, friction, backlash, noise, and power;
- need for reaction structure;
- safety risks under control failure;
- transmission complexity.

## 8. Brakes and clutches
Brakes resist motion rather than actively driving it. Technologies include friction, electromagnetic, magnetorheological, eddy-current, and electrostatic clutches.

Passive or semi-active devices can be lightweight and intrinsically energy-limited, but they cannot generally create arbitrary forces or pull the user through free space.

## 9. Piezoelectric actuators
Piezoelectric materials deform under electric field.

Advantages:

- high bandwidth;
- high force at small displacement;
- compact structures;
- suitable for surface vibration and ultrasonic modulation.

Limitations:

- small stroke unless mechanically amplified;
- high drive voltage;
- hysteresis and capacitance;
- brittle materials and integration constraints.

## 10. Pneumatic actuators
Pneumatic systems use pressure to inflate chambers, move pistons, or deform soft structures.

Advantages:

- soft, conformable output;
- distributed pressure and shape change;
- remote heavy components possible.

Limitations:

- pumps, valves, tubing, and noise;
- compressibility and delay;
- pressure regulation;
- leaks and hysteresis;
- limited portability in some designs.

## 11. Shape-memory alloys and thermal actuators
Shape-memory alloys contract when heated.

Advantages include compactness and high force-to-mass ratio. Limitations include slow thermal response, poor efficiency, hysteresis, fatigue, and burn risk. They are better suited to slow shape change than high-rate vibration.

## 12. Electroactive polymers and dielectric elastomers
These materials deform electrically and can form soft lightweight actuators. Challenges include high voltage, nonlinear behaviour, lifetime, fabrication, control, and safety.

## 13. Electrostatic and electrovibration systems
Electrostatic attraction can modulate friction between finger and surface. The user usually needs tangential motion to perceive the effect.

Advantages:

- thin, transparent surfaces;
- no large mechanical moving parts;
- spatial integration with touchscreens.

Limitations:

- high voltage at low current;
- dependence on skin condition, humidity, grounding, speed, and normal force;
- limited direct normal force;
- electrical safety and insulation requirements.

## 14. Ultrasound and air-based actuation
Focused airborne ultrasound can generate acoustic radiation force and vibration-like effects at remote skin locations. Volumetric mid-air shapes were demonstrated with phased arrays by Long and colleagues. [R35]

Advantages:

- no attached device;
- programmable spatial focus;
- rapid electronic steering.

Limitations:

- low force relative to many contact devices;
- limited workspace and spatial resolution;
- array size, audible artefacts, reflection, and exposure considerations;
- dependence on hand position and orientation.

Air jets create pressure and thermal-flow cues but require compressors or fans and have turbulence, noise, and spatial-spread limitations.

## 15. Thermal actuators
Peltier elements can heat or cool a contact surface.

Design requires attention to:

- heat flux, not only element temperature;
- thermal inertia;
- skin starting temperature;
- contact area;
- condensation;
- safe temperature and duration limits;
- removal of waste heat.

## 16. Reaction forces
Every force actuator needs a reaction path.

Possible reaction paths include:

- a grounded frame;
- another body segment;
- device inertia;
- gravity;
- a brake resisting user motion;
- environmental contact;
- acoustic or airflow momentum transfer.

Claims of “unencumbered force feedback” should explain where momentum and energy go.

## 17. Worked example: choosing an actuator for three cues
### Notification pulse on the wrist
An LRA may be appropriate if compactness and efficient short vibration are priorities.

### Continuous finger resistance
A motorized linkage, cable system, brake, or clutch is more appropriate because continuous force and reaction structure are needed.

### Mid-air contact marker
An ultrasound array or air jet may be appropriate when no wearable is allowed, accepting lower force and calibration constraints.

The same perceptual label “contact” can require different actuators depending on task and form factor.

## 18. Safety and failure analysis
For each actuator, define:

- maximum force, displacement, pressure, voltage, current, temperature, and exposure duration;
- mechanical stops;
- emergency shutdown;
- watchdog and communication-loss behaviour;
- stored-energy release;
- skin-pressure and pinch hazards;
- acoustic and electrical risks;
- thermal monitoring.

## Common misconceptions
- A high actuator rating guarantees high output at the body.
- Resonant actuators reproduce arbitrary waveforms accurately.
- Soft actuators are automatically safe.
- Brakes can generate arbitrary active forces.
- Contactless systems have no reaction physics.
- High voltage always means high current, but low current does not remove insulation and breakdown risks.
- Actuator bandwidth and controller update rate are not the same.

## Key takeaways
- Choose the body-level stimulus before the actuator.
- Compare actuator families across force, travel, bandwidth, response, power, noise, safety, and transmission.
- Resonant devices are efficient but spectrally constrained.
- Kinesthetic forces require a reaction path.
- Safety must include normal operation, faults, and stored energy.
- Physical and perceptual validation remain necessary after component selection.

## Self-test
1. Why are ERM amplitude and frequency coupled?
2. Why is an LRA efficient over a limited range?
3. What distinguishes a brake from a motorized force source?
4. Why do piezoelectric actuators often need mechanical amplification?
5. Why must thermal systems consider heat flux?
6. Name three reaction-force paths.
7. What are two limitations of mid-air ultrasound?
8. What measurements are required before claiming a wearable force level?

## Practical exercise
Select actuators for a fingertip click, a torso pressure cue, and a one-newton hand constraint. Build a decision matrix containing output variable, bandwidth, reaction path, mass, power, safety, sensing, and validation.

## Evidence and source notes
Wearable actuator and interface taxonomies are reviewed by Pacchierotti and colleagues. [R13] Mid-air volumetric ultrasound rendering was demonstrated by Long and colleagues. [R35] Broad actuator and application comparisons are available in modern haptics reviews. [R12]

## Recommended reading
- [R12] Culbertson, Schorr, and Okamura, broad review of artificial touch.
- [R13] Pacchierotti et al., wearable haptic systems taxonomy.
- [R35] Long et al., volumetric mid-air ultrasound haptics.
