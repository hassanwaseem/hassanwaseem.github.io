<!-- CHAPTER:03 -->
# Psychophysics of Touch
LEAD: Psychophysics provides the experimental and mathematical tools for connecting controlled physical stimulation to detection, discrimination, magnitude, quality, and behaviour.

## How to read this chapter
Psychophysics is not a collection of staircase recipes. It is a discipline for making perceptual questions operational.

A strong study begins by specifying:

- the perceptual construct;
- the physical variable under control;
- the response required from the participant;
- the decision rule used to define an estimate;
- the uncertainty and sources of bias;
- the population and conditions to which the result applies.

The same data-collection method can answer a good question or a poorly defined one. The method does not rescue an ambiguous construct.

## Learning objectives
By the end of the chapter, you should be able to:

- distinguish detection, discrimination, identification, scaling, and task-performance questions;
- define absolute thresholds and difference thresholds operationally;
- explain psychometric functions, guess rates, lapse rates, slopes, and criterion-defined thresholds;
- compare the method of constant stimuli with adaptive staircases;
- design a two-alternative forced-choice experiment;
- use Weber fractions cautiously;
- separate sensitivity from decision criterion using signal detection theory;
- identify common confounds in haptic psychophysics;
- write a reproducible threshold-estimation protocol.

## 1. Begin with the perceptual question
Before selecting a method, write the question in a form that could produce a participant response.

| Construct | Example question | Typical response |
|---|---|---|
| Detection | Was a vibration present? | Yes/no or interval choice |
| Discrimination | Which force was larger? | First/second or A/B |
| Identification | Which of four patterns was presented? | Category label |
| Localization | Where on the arm was the cue delivered? | Location or region |
| Scaling | How intense did the cue feel? | Number or rating |
| Matching | Adjust B until it feels equal to A. | Continuous adjustment |
| Preference | Which feedback do you prefer? | Choice or ranking |
| Functional performance | Did feedback improve control? | Error, time, success, workload |

These constructs are not interchangeable. A signal can be easily detected but poorly localized. Two cues can be discriminable without either being preferred. A realistic effect may not improve task performance.

CALLOUT: First protocol sentence | Write: “We will estimate [construct] as a function of [physical variable] under [body site, task, and context], using [response format] and defining the estimate at [criterion].” If this sentence is unclear, the experiment is not ready.

## 2. The psychophysical measurement chain
A haptic psychophysics experiment contains another interaction loop:

1. generate a device command;
2. measure the physical stimulus delivered at the body interface;
3. present the stimulus under controlled conditions;
4. collect a response;
5. model the relationship between stimulus and response;
6. estimate a parameter and its uncertainty;
7. interpret the result within the tested conditions.

Errors can enter at every stage. A nominal amplitude may drift as the actuator warms. Contact force may vary between trials. Participants may hear the actuator. The experimenter may unintentionally signal the answer. The analysis may impose a model that does not fit individual data.

## 3. Absolute and difference thresholds
An **absolute threshold** or **detection threshold** is the stimulus level associated with a stated detection criterion under stated conditions. It is not the smallest stimulus that any person could ever feel.

A **difference threshold** is the change in a stimulus required to reach a stated discrimination criterion. It is often called a **just-noticeable difference** or JND.

Both are conditional estimates. They depend on:

- body site;
- frequency and waveform;
- duration;
- contact area and preload;
- reference magnitude;
- task and response alternatives;
- masking and context;
- participant population;
- criterion and analysis model.

### 3.1 Point of subjective equality
In comparison experiments, the **point of subjective equality** (PSE) is the comparison level judged equal to the reference under the selected model. A shifted PSE indicates bias or a perceptual mismatch, not necessarily poorer sensitivity.

### 3.2 Threshold and slope
The threshold describes a location on the response curve. The slope describes how rapidly performance changes around that region. Two conditions can have the same threshold and different slopes, indicating different reliability or variability.

## 4. Psychometric functions
A **psychometric function** relates a physical stimulus variable to the probability of a response.

For a two-alternative forced-choice discrimination task, the lower asymptote is commonly 0.5 because chance performance is 50%. A threshold is often defined at 75% correct when lapse is ignored, because 75% lies halfway between chance and perfect performance. This is a convention, not a law. The criterion and model must be stated.

A general form can be written as:

$$p(x) = γ + (1 - γ - λ)F(x; α, β)$$

where:

- `p(x)` is response probability at stimulus level `x`;
- `γ` is the guess rate;
- `λ` is the lapse rate;
- `F` is a cumulative distribution such as logistic or cumulative Gaussian;
- `α` is a location parameter related to threshold or PSE;
- `β` controls slope.

FIGURE: assets/figures/06-psychometric-function.svg | S-shaped psychometric curve for a two-alternative forced-choice task, showing chance performance, a criterion-defined threshold, slope, measured points, uncertainty, and a lapse region. | **Figure 3.1 — A threshold is a defined point on a response function.** The curve, criterion, guess rate, lapse assumption, and uncertainty should be reported. Original course diagram; CC BY 4.0.

### 4.1 Why binary responses still produce a curve
Each individual trial gives a binary response such as correct or incorrect. Repeated trials across stimulus levels estimate a response probability. The psychometric function models how that probability changes.

### 4.2 Guess and lapse rates
The **guess rate** is determined partly by task structure. In a balanced 2AFC task, chance is 0.5. In four-alternative identification, chance is 0.25.

The **lapse rate** represents errors that occur even at easy stimulus levels because of inattention, accidental responses, or other non-sensory causes. Ignoring lapses can bias threshold and slope estimates.

### 4.3 Individual and group models
Participants often differ substantially. Pooling all trials before fitting a curve can produce a group function that describes nobody. Better approaches include:

- fitting each participant and analysing participant-level parameters;
- hierarchical models that estimate participant and population distributions together;
- mixed-effects models appropriate to the response distribution.

## 5. Method of constant stimuli
The **method of constant stimuli** selects several stimulus levels and presents them repeatedly in randomized order.

### Advantages
- samples the response function across a planned range;
- supports direct estimation of slope and lapse behaviour;
- reduces predictability caused by monotonic stimulus sequences;
- is straightforward to analyse and simulate before data collection.

### Limitations
- can require many trials;
- wastes trials at levels that are always easy or always impossible;
- requires a reasonable prior estimate of the useful range;
- can become fatiguing in slow haptic setups.

### When to use it
Use constant stimuli when the full psychometric curve matters, when stimulus levels can be planned confidently, or when adaptive dependencies would complicate interpretation.

### 5.1 Selecting levels
A pilot study should identify levels spanning near-chance to near-asymptotic performance. If every level produces 50% or 100% performance, threshold and slope cannot be estimated reliably.

## 6. Adaptive staircases
An **adaptive staircase** selects the next stimulus level based on previous responses. Correct responses typically make the task harder, while errors make it easier. Trials concentrate near a target region of the psychometric function.

Levitt formalized transformed up–down procedures and their convergence properties. [R29] Under standard idealized assumptions:

- a 1-down/1-up rule targets approximately 50% correct;
- a 2-down/1-up rule targets approximately 70.7% correct;
- a 3-down/1-up rule targets approximately 79.4% correct.

These values do not mean that any implementation automatically produces an unbiased threshold. Step sizes, starting level, reversals, lapses, nonstationarity, and stopping rules matter.

FIGURE: assets/figures/07-adaptive-staircase.svg | Trial-by-trial staircase showing stimulus level decreasing after correct responses, increasing after errors, marking reversals, and clustering near a target region. | **Figure 3.2 — A staircase is an allocation rule, not a complete analysis.** The convergence target and estimate depend on the response rule and implementation details. Original course diagram; CC BY 4.0.

### 6.1 Terms that must be specified
A reproducible staircase protocol states:

- starting level;
- initial and final step sizes;
- up–down rule;
- how a reversal is defined;
- when step size changes;
- number of reversals or trials;
- threshold estimator;
- handling of missed responses and lapses;
- whether multiple staircases are interleaved;
- maximum and minimum stimulus bounds.

### 6.2 Reversals
A **reversal** occurs when the direction of stimulus adjustment changes. Averaging late reversal levels is a traditional estimator, but it is not universally optimal. Model-based analysis of all trials may be preferable.

### 6.3 Interleaving
Interleaving multiple staircases reduces sequence predictability and allows several conditions to be estimated in one session. However, it increases task complexity and may lengthen the time between related trials.

### 6.4 When staircases fail
Adaptive procedures become unreliable when:

- the participant’s sensitivity changes during the run;
- the start is far from threshold and the run is short;
- step sizes are inappropriate;
- responses are biased by predictable sequences;
- the task is not understood;
- hard stimulus bounds trap the staircase;
- strong adaptation or fatigue develops.

## 7. Forced-choice methods
In **two-alternative forced choice** (2AFC), the participant chooses between two alternatives. In a two-interval task, one interval may contain the stimulus and the other may be blank. In a comparative task, both intervals contain stimuli and the participant chooses which is stronger, rougher, or otherwise different.

### 7.1 Why forced choice is useful
- chance performance is defined;
- participants need not invent a personal yes/no criterion;
- sensitivity can be estimated with reduced influence from some response biases;
- the task can be combined with constant stimuli or adaptive procedures.

### 7.2 Forced choice does not remove all bias
Order effects, interval preference, motor habits, expectation, and unequal stimulus cues can still bias responses. The participant may also genuinely experience the stimuli as equal. Forcing a choice does not make equality impossible; it changes how equality appears in the data.

### 7.3 Catch trials
Catch trials can detect false alarms, inattention, or use of unintended cues. They must be designed carefully so that they do not change the participant’s strategy or create an unrealistic stimulus distribution.

## 8. Weber’s law and Weber fractions
Over a limited range, a difference threshold may scale with the reference magnitude:

$$ΔI / I = k$$

where:

- `I` is the reference magnitude;
- `ΔI` is the difference threshold;
- `k` is the Weber fraction.

A constant Weber fraction means that discrimination depends on relative rather than absolute change. For example, if `k = 0.1`, a 1 N reference would have a JND of approximately 0.1 N and a 2 N reference approximately 0.2 N within the range where the approximation holds.

### 8.1 Why Weber’s law must be tested
The relation can fail:

- near absolute threshold;
- near physical or perceptual saturation;
- across different receptor or mechanical regimes;
- when the task changes;
- when noise is not proportional to magnitude;
- when device resolution limits dominate.

Do not borrow a Weber fraction from another body site, waveform, or task without validation.

## 9. Scaling suprathreshold perception
Threshold methods ask whether a stimulus is detectable or discriminable. Many design questions concern clearly perceptible stimuli.

### 9.1 Magnitude estimation
Participants assign numbers proportional to perceived magnitude. The method can reveal nonlinear scaling, but participants differ in number use and anchors.

### 9.2 Magnitude production
The participant adjusts the stimulus to produce a requested perceptual magnitude. This can be useful for calibration but depends on motor control and adjustment strategy.

### 9.3 Category ratings
Bounded scales such as 1–7 are simple and useful for comfort, realism, or preference. They are sensitive to wording, anchors, order, and context. A rating is not automatically an interval-scale physical measurement.

### 9.4 Cross-modal matching
A haptic magnitude can be matched to a visual, auditory, or another haptic reference. Cross-modal matching is powerful but introduces assumptions about the comparison modality.

## 10. Signal detection theory
Signal detection theory separates **sensitivity** from **decision criterion**.

In a yes/no detection task:

- a **hit** occurs when the signal is present and the participant says yes;
- a **miss** occurs when the signal is present and the participant says no;
- a **false alarm** occurs when the signal is absent and the participant says yes;
- a **correct rejection** occurs when the signal is absent and the participant says no.

Under a common equal-variance Gaussian model:

$$d′ = z(H) - z(F)$$

where `H` is hit rate, `F` is false-alarm rate, and `z` is the inverse standard-normal transform.

A participant who says “yes” frequently may have many hits and many false alarms. High hit rate alone does not prove high sensitivity.

### 10.1 Extreme rates
Hit rates of 1 and false-alarm rates of 0 produce infinite `z` values. A stated correction is needed, such as replacing extreme counts using a finite-sample rule. The correction should be chosen before analysis.

### 10.2 Criterion
The response criterion indicates conservative or liberal decision behaviour. Criterion may change with instructions, costs, expectations, and stimulus prevalence.

## 11. Bias, order, and context
Haptic experiments are particularly vulnerable to hidden cues.

### 11.1 Actuator sound
A vibration motor, pneumatic valve, or robot can produce audible evidence. Use acoustic measurement, masking noise, hearing protection where appropriate, and control conditions.

### 11.2 Heat and drift
Actuator temperature and output may drift. Randomization does not eliminate systematic warming if time is correlated with condition.

### 11.3 Contact variation
Preload, strap tension, grip force, and posture alter mechanical transmission. Standardize or measure them.

### 11.4 Visual leakage
Status LEDs, device motion, experimenter behaviour, or screen timing can reveal condition.

### 11.5 Sequential effects
The previous trial influences expectation and judgment. Randomization, interleaving, and explicit modelling may be required.

### 11.6 Learning and fatigue
Participants become better at unfamiliar tasks and worse when fatigued. Use training, breaks, practice criteria, and session-order balancing.

## 12. Worked example: forearm vibration detection
Suppose the objective is to estimate detection threshold for a 150 Hz vibration on the volar forearm.

### 12.1 Define the construct
The construct is interval-based detection, not comfort or intensity.

### 12.2 Define the physical variable
Use measured root-mean-square acceleration at the skin interface over a specified time window. Record preload and contactor area.

### 12.3 Select the task
Use a two-interval forced-choice trial. One interval contains vibration and the other is blank. Randomize order.

### 12.4 Control unintended cues
Use masking noise, conceal visual device motion, and check that the blank interval does not contain switching transients.

### 12.5 Select the sampling method
A method of constant stimuli could use six levels spanning expected chance-to-high performance. An interleaved staircase could estimate the target region more efficiently. The choice depends on whether slope and lapse estimation are important.

### 12.6 Specify the model
Fit a cumulative Gaussian or logistic psychometric function with chance fixed at 0.5 and a justified lapse treatment. Define the threshold criterion before data collection.

### 12.7 Quantify uncertainty
Report participant-level thresholds and confidence or credible intervals. Do not report only the group mean.

### 12.8 State the scope
The result applies to the tested frequency, waveform, duration, contactor, preload, body site, posture, population, and task.

## 13. Designing a JND experiment around a reference force
Assume a 1 N reference force and the question: what increase is discriminable?

A complete design must specify:

- whether reference and comparison are sequential or simultaneous;
- which interval contains the reference;
- the comparison levels;
- force rise time and duration;
- where force is measured;
- limb position and movement constraints;
- whether auditory or visual cues are masked;
- number of repetitions;
- randomization and counterbalancing;
- the model used to estimate PSE and JND;
- exclusion and stopping rules;
- whether positive and negative differences are sampled.

Sampling both lower and higher comparison forces allows estimation of a PSE and discrimination spread rather than only an “increase threshold.”

## 14. Reproducibility checklist
A psychophysical methods section should state:

### Participants
- sample size and rationale;
- age range and relevant inclusion criteria;
- handedness or body-site factors when relevant;
- compensation and ethics approval.

### Apparatus
- actuator and sensor models;
- body site and contact geometry;
- calibration procedure;
- sampling and update rates;
- measured latency;
- environmental conditions.

### Stimuli
- physical units at the body interface;
- waveform, duration, ramp, and timing;
- reference and comparison levels;
- bounds and safety limits.

### Procedure
- task instructions;
- training and practice criterion;
- randomization and counterbalancing;
- number of trials and breaks;
- masking and blinding.

### Analysis
- preprocessing and exclusions;
- model family;
- threshold criterion;
- guess and lapse assumptions;
- uncertainty method;
- participant and group structure;
- preregistered deviations.

## 15. Common misconceptions
- **“A threshold is a biological constant.”** It is a conditional estimate produced by a method and criterion.
- **“A staircase finds the threshold automatically.”** It allocates trials according to rules that must be specified and analysed.
- **“Seventy-five percent correct is always the threshold.”** It is a common 2AFC convention, not a universal definition.
- **“Forced choice eliminates bias.”** It reduces some criterion effects but not order, interval, or expectation biases.
- **“A significant difference is a JND.”** Statistical significance and perceptual discrimination thresholds are different quantities.
- **“A Likert rating measures physical intensity.”** It records a category response under specific wording and context.
- **“More trials fix bad measurement.”** More data cannot repair an undefined construct or uncontrolled stimulus.

## Key takeaways
- Start with a precise perceptual construct and operational definition.
- A threshold is a criterion-defined parameter of a response function.
- Constant stimuli samples a planned range; adaptive methods concentrate trials near a target.
- Staircase convergence depends on the up–down rule and implementation.
- Signal detection theory separates sensitivity from response criterion.
- Physical stimulus measurement at the body interface is essential.
- Participant-level variability and uncertainty must remain visible.
- Reproducibility requires detailed reporting of apparatus, contact, procedure, and analysis.

## Self-test
1. What is the difference between detection, discrimination, and identification?
2. Why can two conditions have equal thresholds but different psychometric slopes?
3. What does the lower asymptote represent in 2AFC?
4. Under ideal assumptions, approximately where does a 2-down/1-up staircase converge?
5. Why is a Weber fraction not universally transferable?
6. How can a participant have a high hit rate but low sensitivity?
7. Why should acceleration be measured at the skin rather than inferred from voltage?
8. What additional information does a PSE provide?
9. Why can pooling all trials before fitting be misleading?
10. Name four non-haptic cues that can contaminate a tactile experiment.

### Answer guide
1. Detection asks whether a signal exists, discrimination compares stimuli, and identification assigns a category.
2. Threshold is a location parameter; slope reflects response variability or sensitivity around that location.
3. Chance performance determined by the task alternatives.
4. Approximately 70.7% correct.
5. It depends on reference range, body site, waveform, task, and mechanism.
6. A liberal yes-response criterion can increase both hits and false alarms.
7. Device dynamics, mounting, and tissue coupling change the delivered stimulus.
8. It estimates where comparison and reference are perceived as equal and can reveal bias.
9. Individual curves can differ, and the pooled curve may describe no participant.
10. Sound, visual indicators, heat, experimenter behaviour, floor vibration, and switching transients are examples.

## Practical exercise
Write a preregistered protocol to estimate the force JND around 1 N. Include stimulus levels, task, repetitions, calibration, randomization, psychometric model, threshold definition, lapse treatment, participant-level analysis, exclusions, and a plan for measuring end-to-end latency.

## Research-level discussion question
Adaptive methods maximize efficiency near a target, while modern hierarchical models benefit from observations across the full psychometric curve. Design a hybrid sampling strategy and justify how it balances participant burden, slope estimation, lapse detection, and individual variability.

## Evidence and source notes
Transformed up–down staircase rules and their convergence properties originate in Levitt’s formal treatment of adaptive psychophysical procedures. [R29] The tactile field has long linked physical stimulus measurement to neural and psychophysical thresholds; Johansson and Vallbo compared controlled indentation thresholds with afferent responses in the human hand. [R34] General treatments of psychometric functions, signal detection, and scaling should be consulted for model assumptions and estimation details. [R06] [R07]

## Recommended reading
- [R29] Levitt, “Transformed Up–Down Methods in Psychoacoustics.”
- [R06] Gescheider, *Psychophysics: The Fundamentals*.
- [R07] Macmillan and Creelman, *Detection Theory: A User’s Guide*.
- [R34] Johansson and Vallbo, “Detection of Tactile Stimuli…”
