// src/data/familyMedicine.js

// Core data for family medicine conditions (expanded with accurate data)
const conditions = [
  {
    name: 'Hypertension',
    demographics: { age: [40, 65], gender: ['male', 'female'] },
    symptoms: ['asymptomatic', 'headache', 'dizziness'],
    vitals: { bp: 'high' }, // High BP: >140/90 mmHg (JNC 8 Stage 2)
    riskFactors: ['smoking', 'obesity', 'family history', 'sedentary lifestyle'],
    keyFeature: 'elevated blood pressure requiring intervention based on stage',
    management: 'Start antihypertensive therapy (e.g., thiazide or ACE inhibitor)',
    distractors: [
      { name: 'Increase current antihypertensive dose', reason: 'assumes prior treatment, but no history is provided' },
      { name: 'Lifestyle modifications only', reason: 'insufficient for stage 2 hypertension (>140/90 mmHg) per JNC 8' },
      { name: 'Refer to a cardiologist', reason: 'unnecessary without resistant hypertension or end-organ damage' }
    ]
  },
  {
    name: 'Type 2 Diabetes Mellitus',
    demographics: { age: [35, 70], gender: ['male', 'female'] },
    symptoms: ['polyuria', 'polydipsia', 'fatigue', 'unintentional weight loss'],
    vitals: { glucose: 'high' }, // High glucose: >126 mg/dL fasting (ADA)
    riskFactors: ['obesity', 'sedentary lifestyle', 'family history', 'gestational diabetes'],
    keyFeature: 'chronic hyperglycemia requiring glycemic control',
    management: 'Initiate metformin therapy',
    distractors: [
      { name: 'Start insulin immediately', reason: 'reserved for HbA1c >9% or severe symptoms per ADA guidelines' },
      { name: 'Diet and exercise alone', reason: 'inadequate for confirmed diabetes with fasting glucose >126 mg/dL' },
      { name: 'Refer to endocrinologist', reason: 'not needed for initial uncomplicated type 2 diabetes management' }
    ]
  },
  {
    name: 'Acute Bronchitis',
    demographics: { age: [20, 60], gender: ['male', 'female'] },
    symptoms: ['cough', 'low-grade fever', 'chest discomfort', 'wheezing'],
    vitals: { temp: 'mild' }, // Mild temp: 37.5-38.5°C
    riskFactors: ['recent viral infection', 'smoking', 'exposure to irritants'],
    keyFeature: 'self-limiting viral respiratory infection typically lasting 1-3 weeks',
    management: 'Supportive care (rest, hydration, symptomatic relief)',
    distractors: [
      { name: 'Prescribe antibiotics', reason: 'ineffective for viral etiology absent bacterial signs (e.g., purulent sputum)' },
      { name: 'Order chest X-ray', reason: 'unnecessary unless pneumonia is suspected (e.g., high fever, hypoxia)' },
      { name: 'Refer to pulmonologist', reason: 'not indicated for uncomplicated acute bronchitis per AAFP' }
    ]
  },
  {
    name: 'Hyperlipidemia',
    demographics: { age: [40, 70], gender: ['male', 'female'] },
    symptoms: ['asymptomatic'],
    vitals: { cholesterol: 'high' }, // High cholesterol: LDL >130 mg/dL (ACC/AHA)
    riskFactors: ['obesity', 'diabetes', 'family history', 'poor diet'],
    keyFeature: 'elevated lipids increasing atherosclerotic cardiovascular disease risk',
    management: 'Start statin therapy (moderate-intensity)',
    distractors: [
      { name: 'Diet modification alone', reason: 'insufficient for LDL >130 mg/dL in high-risk patients per ACC/AHA' },
      { name: 'Repeat lipid panel in 6 months', reason: 'delays intervention in established hyperlipidemia with risk factors' },
      { name: 'Refer to cardiologist', reason: 'unnecessary for initial primary care management' }
    ]
  },
  {
    name: 'Asthma Exacerbation',
    demographics: { age: [10, 50], gender: ['male', 'female'] },
    symptoms: ['wheezing', 'shortness of breath', 'chest tightness'],
    vitals: { o2sat: 'low' }, // Low O2 sat: <92%
    riskFactors: ['allergies', 'smoking', 'viral infection'],
    keyFeature: 'acute reversible airway obstruction requiring bronchodilation',
    management: 'Administer albuterol via nebulizer',
    distractors: [
      { name: 'Prescribe oral steroids alone', reason: 'inadequate for acute symptom relief without initial bronchodilation' },
      { name: 'Order pulmonary function tests', reason: 'not indicated during an acute exacerbation per GINA guidelines' },
      { name: 'Refer to allergist', reason: 'unnecessary for acute management in primary care' }
    ]
  },
  {
    name: 'Community-Acquired Pneumonia',
    demographics: { age: [18, 80], gender: ['male', 'female'] },
    symptoms: ['fever', 'productive cough', 'dyspnea'],
    vitals: { temp: 'high' }, // High temp: 39-40°C
    riskFactors: ['smoking', 'elderly', 'chronic lung disease'],
    keyFeature: 'acute bacterial lung infection requiring antibiotic therapy',
    management: 'Prescribe amoxicillin (outpatient)',
    distractors: [
      { name: 'Supportive care only', reason: 'inappropriate for bacterial pneumonia per IDSA/ATS guidelines' },
      { name: 'Order sputum culture', reason: 'not required for outpatient management of uncomplicated CAP' },
      { name: 'Refer to pulmonologist', reason: 'unnecessary for initial outpatient treatment' }
    ]
  },
  {
    name: 'Depression',
    demographics: { age: [18, 65], gender: ['male', 'female'] },
    symptoms: ['sadness', 'anhedonia', 'sleep disturbance'],
    vitals: { mood: 'low' }, // Placeholder for clinical assessment
    riskFactors: ['family history', 'chronic stress', 'recent loss'],
    keyFeature: 'persistent low mood meeting DSM-5 criteria for major depressive disorder',
    management: 'Initiate SSRI therapy (e.g., sertraline)',
    distractors: [
      { name: 'Counseling alone', reason: 'insufficient for moderate-to-severe depression per APA guidelines' },
      { name: 'Order thyroid function tests', reason: 'a consideration but not the first step without physical signs' },
      { name: 'Refer to psychiatrist', reason: 'not needed for initial uncomplicated depression in primary care' }
    ]
  },
  {
    name: 'Osteoarthritis',
    demographics: { age: [50, 80], gender: ['male', 'female'] },
    symptoms: ['joint pain', 'stiffness', 'reduced mobility'],
    vitals: { pain: 'high' }, // Placeholder for pain scale (e.g., 6-10/10)
    riskFactors: ['age', 'obesity', 'previous joint injury'],
    keyFeature: 'degenerative joint disease causing chronic pain and dysfunction',
    management: 'Prescribe acetaminophen',
    distractors: [
      { name: 'Start opioid therapy', reason: 'not first-line due to risks per ACR guidelines' },
      { name: 'Order MRI', reason: 'unnecessary for typical OA diagnosis based on history and exam' },
      { name: 'Refer to orthopedist', reason: 'not indicated for initial conservative management' }
    ]
  },
  {
    name: 'Urinary Tract Infection (Uncomplicated)',
    demographics: { age: [20, 50], gender: ['female'] },
    symptoms: ['dysuria', 'urgency', 'frequency'],
    vitals: { temp: 'normal' }, // Normal temp: 36.6-38°C
    riskFactors: ['sexual activity', 'poor hygiene', 'diabetes'],
    keyFeature: 'acute bacterial infection of the lower urinary tract',
    management: 'Prescribe nitrofurantoin',
    distractors: [
      { name: 'Order urine culture', reason: 'not required for uncomplicated UTI in young women per IDSA' },
      { name: 'Supportive care only', reason: 'inadequate for bacterial infection requiring antibiotics' },
      { name: 'Refer to urologist', reason: 'unnecessary for initial uncomplicated UTI' }
    ]
  },
  {
    name: 'Gastroesophageal Reflux Disease (GERD)',
    demographics: { age: [30, 70], gender: ['male', 'female'] },
    symptoms: ['heartburn', 'regurgitation', 'dysphagia'],
    vitals: { none: 'normal' }, // No specific vital sign
    riskFactors: ['obesity', 'smoking', 'hiatal hernia'],
    keyFeature: 'chronic acid reflux causing esophageal irritation',
    management: 'Prescribe proton pump inhibitor (e.g., omeprazole)',
    distractors: [
      { name: 'Lifestyle changes alone', reason: 'insufficient for symptomatic GERD per ACG guidelines' },
      { name: 'Order endoscopy', reason: 'not indicated initially without alarm symptoms (e.g., weight loss)' },
      { name: 'Refer to gastroenterologist', reason: 'unnecessary for initial uncomplicated GERD' }
    ]
  },
  {
    name: 'Chronic Obstructive Pulmonary Disease (COPD) Exacerbation',
    demographics: { age: [50, 80], gender: ['male', 'female'] },
    symptoms: ['dyspnea', 'increased sputum', 'wheezing'],
    vitals: { o2sat: 'low' }, // Low O2 sat: <92%
    riskFactors: ['smoking', 'environmental exposure', 'recurrent infections'],
    keyFeature: 'acute worsening of chronic airway obstruction',
    management: 'Prescribe albuterol and systemic corticosteroids',
    distractors: [
      { name: 'Antibiotics alone', reason: 'incomplete without bronchodilation and steroids per GOLD guidelines' },
      { name: 'Order spirometry', reason: 'not indicated during an acute exacerbation' },
      { name: 'Refer to pulmonologist', reason: 'unnecessary for initial management in primary care' }
    ]
  },
  {
    name: 'Hypothyroidism',
    demographics: { age: [30, 70], gender: ['male', 'female'] },
    symptoms: ['fatigue', 'cold intolerance', 'weight gain'],
    vitals: { tsh: 'high' }, // High TSH: >4.5 mIU/L
    riskFactors: ['autoimmune disease', 'iodine deficiency', 'family history'],
    keyFeature: 'thyroid hormone deficiency requiring replacement',
    management: 'Prescribe levothyroxine',
    distractors: [
      { name: 'Monitor without treatment', reason: 'inappropriate for symptomatic hypothyroidism per AACE' },
      { name: 'Order thyroid ultrasound', reason: 'not needed for initial management without palpable nodules' },
      { name: 'Refer to endocrinologist', reason: 'unnecessary for uncomplicated hypothyroidism' }
    ]
  },
  {
    name: 'Migraine',
    demographics: { age: [20, 50], gender: ['male', 'female'] },
    symptoms: ['unilateral headache', 'nausea', 'photophobia'],
    vitals: { pain: 'high' }, // Pain: 6-10/10
    riskFactors: ['stress', 'family history', 'hormonal changes'],
    keyFeature: 'recurrent neurovascular headache with specific triggers',
    management: 'Prescribe sumatriptan',
    distractors: [
      { name: 'Start daily prophylactic therapy', reason: 'not first-line for acute attack per AAN guidelines' },
      { name: 'Order brain MRI', reason: 'unnecessary without red flags (e.g., focal deficits)' },
      { name: 'Refer to neurologist', reason: 'not indicated for initial uncomplicated migraine' }
    ]
  },
  {
    name: 'Allergic Rhinitis',
    demographics: { age: [10, 60], gender: ['male', 'female'] },
    symptoms: ['nasal congestion', 'sneezing', 'itchy eyes'],
    vitals: { none: 'normal' },
    riskFactors: ['seasonal allergies', 'pet exposure', 'family history'],
    keyFeature: 'IgE-mediated inflammation of nasal mucosa',
    management: 'Prescribe intranasal corticosteroids (e.g., fluticasone)',
    distractors: [
      { name: 'Antihistamines alone', reason: 'less effective for congestion per ARIA guidelines' },
      { name: 'Order allergy testing', reason: 'not required for initial empiric treatment' },
      { name: 'Refer to allergist', reason: 'unnecessary for uncomplicated allergic rhinitis' }
    ]
  },
  {
    name: 'Anemia (Iron Deficiency)',
    demographics: { age: [20, 70], gender: ['male', 'female'] },
    symptoms: ['fatigue', 'pallor', 'shortness of breath'],
    vitals: { hb: 'low' }, // Low Hb: <12 g/dL (female), <13 g/dL (male)
    riskFactors: ['menorrhagia', 'poor diet', 'chronic blood loss'],
    keyFeature: 'microcytic anemia due to inadequate iron stores',
    management: 'Prescribe oral iron supplementation',
    distractors: [
      { name: 'Order colonoscopy immediately', reason: 'a consideration but not first step without GI symptoms' },
      { name: 'Transfuse red blood cells', reason: 'reserved for severe symptomatic anemia (e.g., Hb <7 g/dL)' },
      { name: 'Refer to hematologist', reason: 'unnecessary for initial uncomplicated iron deficiency' }
    ]
  }
];

// Vital sign ranges for randomization (expanded with accurate ranges)
const vitalRanges = {
  bp: { normal: '120/80 mmHg', high: '140-180/90-110 mmHg' },
  glucose: { normal: '70-99 mg/dL', high: '126-200 mg/dL' },
  temp: { normal: '36.6-38°C', mild: '37.5-38.5°C', high: '39-40°C' },
  cholesterol: { normal: 'LDL 70-100 mg/dL', high: 'LDL 130-200 mg/dL' },
  o2sat: { normal: '95-100%', low: '85-92%' },
  tsh: { normal: '0.4-4.5 mIU/L', high: '5-10 mIU/L' },
  hb: { normal: '12-15 g/dL (female), 13-17 g/dL (male)', low: '8-11 g/dL' },
  pain: { normal: '0-3/10', high: '6-10/10' },
  none: { normal: 'No abnormal vital signs' }
};

// Utility functions
const randomElement = (array) => array[Math.floor(Math.random() * array.length)];
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomVitalValue = (type, state) => vitalRanges[type][state];

// Generate patient scenario
function generatePatient() {
  const condition = randomElement(conditions);
  const age = randomRange(condition.demographics.age[0], condition.demographics.age[1]);
  const gender = randomElement(condition.demographics.gender);
  return { condition, age, gender };
}

// Generate question components
function generateQuestionComponents(id) {
  const { condition, age, gender } = generatePatient();
  const symptoms = randomElement(condition.symptoms) === 'asymptomatic' 
    ? 'an annual check-up with no specific complaints' 
    : `${randomElement(condition.symptoms)} for ${randomRange(1, 4)} weeks`;
  const vitalKey = Object.keys(condition.vitals)[0];
  const vitalValue = randomVitalValue(vitalKey, condition.vitals[vitalKey]);
  
  const vitalLabel = {
    bp: 'Blood pressure',
    glucose: 'Fasting glucose',
    temp: 'Temperature',
    cholesterol: 'Cholesterol',
    o2sat: 'Oxygen saturation',
    tsh: 'TSH',
    hb: 'Hemoglobin',
    pain: 'Pain level',
    none: 'Vital signs'
  }[vitalKey];
  
  const question = `${age}-year-old ${gender} presents for ${symptoms}. ${vitalLabel} is ${vitalValue}. What is the most appropriate next step in management?`;
  const choices = [condition.management, ...condition.distractors.map(d => d.name)].sort(() => Math.random() - 0.5);
  const correctAnswer = condition.management;

  return { id, question, choices, correctAnswer, condition, symptoms, vitalKey, vitalValue };
}

// Generate explanation dynamically
function generateExplanation({ condition, symptoms, vitalKey, vitalValue }) {
  const symptomText = symptoms.includes('check-up') 
    ? 'an asymptomatic presentation detected during routine screening' 
    : `symptoms of ${symptoms}`;
  const vitalText = `${vitalKey === 'bp' ? 'blood pressure' : vitalKey === 'glucose' ? 'fasting glucose' : vitalKey === 'temp' ? 'temperature' : vitalKey === 'cholesterol' ? 'cholesterol' : vitalKey === 'o2sat' ? 'oxygen saturation' : vitalKey === 'tsh' ? 'TSH' : vitalKey === 'hb' ? 'hemoglobin' : vitalKey === 'pain' ? 'pain level' : 'vital signs'} of ${vitalValue}`;
  
  const correctPart = `In this ${symptomText}, the finding of a ${vitalText} strongly supports a diagnosis of ${condition.name.toLowerCase()}. ${condition.name} is characterized by ${condition.keyFeature}. As per current family medicine guidelines (e.g., AAFP, JNC 8 for hypertension, ADA for diabetes, GOLD for COPD, ACR for osteoarthritis), the most appropriate next step is to ${condition.management.toLowerCase()} to address the condition effectively and reduce associated risks such as cardiovascular events, end-organ damage, or symptom progression.`;

  const distractorPart = condition.distractors.map(d => 
    `${d.name} is not the best choice here because it ${d.reason}.`
  ).join(' ');

  return `${correctPart} ${distractorPart}`;
}

// Infinite question generator (returns a single question per call)
function* infiniteQuestionGenerator(startId = 1) {
  let currentId = startId;
  while (true) {
    const components = generateQuestionComponents(currentId);
    const explanation = generateExplanation(components);
    yield {
      id: currentId,
      question: components.question,
      choices: components.choices,
      correctAnswer: components.correctAnswer,
      explanation
    };
    currentId++;
  }
}

// Usage example: Create an iterator and fetch questions dynamically
const questionGenerator = infiniteQuestionGenerator(2); // Start after your id: 1

// Function to get a specific number of questions
function getQuestions(count) {
  const questions = [];
  for (let i = 0; i < count; i++) {
    questions.push(questionGenerator.next().value);
  }
  return questions;
}

// Example: Generate 5 questions
const sampleQuestions = getQuestions(5);
console.log(sampleQuestions);

// Export the generator for external use
export default infiniteQuestionGenerator;