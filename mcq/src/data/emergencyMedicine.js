// src/data/emergencyMedicine.js

const emergencyMedicineQuestions = [
  {
    id: 1,
    question: 'A 30-year-old male presents to the emergency room after a motorcycle accident. He is hypotensive, tachycardic, and has abdominal distension. What is the most likely diagnosis?',
    choices: ['Abdominal trauma with internal bleeding', 'Acute appendicitis', 'Pneumothorax', 'Spinal cord injury'],
    correctAnswer: 'Abdominal trauma with internal bleeding',
    explanation: 'Hypotension, tachycardia, and abdominal distension following trauma suggest internal bleeding, often from solid organ injury.',
  },
  {
    id: 2,
    question: 'A 45-year-old male presents to the ED with sudden-onset chest pain radiating to his left arm, diaphoresis, and nausea. His ECG shows ST elevation in leads V1-V4. During initial management, he becomes unresponsive and pulseless. What is the most appropriate next step?',
    choices: ['Administer aspirin 325 mg', 'Perform synchronized cardioversion', 'Initiate CPR and defibrillation', 'Give alteplase IV'],
    correctAnswer: 'Initiate CPR and defibrillation',
    explanation: 'This patient likely has an acute anterior wall myocardial infarction (MI) based on ST elevation in V1-V4, but the sudden loss of pulse suggests ventricular fibrillation (VF) or pulseless ventricular tachycardia (VT), common complications of MI. The immediate step is to initiate CPR and defibrillation per ACLS guidelines. Aspirin is indicated for MI but not in cardiac arrest. Synchronized cardioversion is used for unstable tachyarrhythmias with a pulse, not pulselessness. Alteplase is for thrombolysis in MI but is contraindicated in active resuscitation.'
  },
  {
    id: 3,
    question: 'A 22-year-old female presents with dyspnea and pleuritic chest pain 2 days after a long flight. Her vital signs show HR 110, RR 24, SpO2 88% on room air, and BP 110/70 mmHg. What is the most likely diagnosis?',
    choices: ['Pneumonia', 'Pulmonary embolism', 'Pneumothorax', 'Acute heart failure'],
    correctAnswer: 'Pulmonary embolism',
    explanation: 'The history of a long flight, acute dyspnea, tachycardia, hypoxia, and pleuritic chest pain strongly suggest pulmonary embolism (PE), a common diagnosis in the ED with risk factors like immobility. Pneumonia typically includes fever and productive cough, absent here. Pneumothorax may cause sudden dyspnea but is less likely without trauma or a history of lung disease. Acute heart failure would likely present with edema and jugular venous distension, not seen in this case.'
  },
  {
    id: 4,
    question: 'A 60-year-old male with a history of hypertension presents with the "worst headache of his life," vomiting, and neck stiffness. His BP is 200/110 mmHg. What is the most urgent diagnostic step?',
    choices: ['Lumbar puncture', 'Non-contrast head CT', 'MRI brain', 'Administer IV labetalol'],
    correctAnswer: 'Non-contrast head CT',
    explanation: 'The "worst headache of his life" with hypertension, vomiting, and neck stiffness raises suspicion for subarachnoid hemorrhage (SAH). A non-contrast head CT is the most urgent step to detect acute blood. Lumbar puncture is indicated if CT is negative but should not precede imaging due to the risk of herniation. MRI is less sensitive for acute hemorrhage. Lowering BP is important but secondary to confirming the diagnosis.'
  },
  {
    id: 5,
    question: 'A 35-year-old female presents with altered mental status, fever, and a petechial rash. Her BP is 80/50 mmHg, and she has a stiff neck. What is the most appropriate initial management?',
    choices: ['IV fluids and antibiotics', 'CT head', 'Mannitol IV', 'Intubation'],
    correctAnswer: 'IV fluids and antibiotics',
    explanation: 'This presentation suggests meningococcal meningitis with septic shock (fever, petechiae, hypotension, altered mental status, neck stiffness). Immediate IV fluids and broad-spectrum antibiotics (e.g., ceftriaxone) are critical to address sepsis and infection. CT head is needed before lumbar puncture if focal neurologic signs are present, but resuscitation and antibiotics take priority. Mannitol is for cerebral edema, not initial management. Intubation may be needed later but isn’t the first step.'
  },
  {
    id: 6,
    question: 'A 50-year-old male presents with epigastric pain and hematemesis. His BP is 90/60 mmHg, HR 120. Nasogastric lavage reveals bright red blood. What is the most likely source of bleeding?',
    choices: ['Esophageal varices', 'Mallory-Weiss tear', 'Peptic ulcer', 'Gastric cancer'],
    correctAnswer: 'Peptic ulcer',
    explanation: 'Peptic ulcer disease is the most common cause of upper GI bleeding in the ED, often presenting with epigastric pain, hematemesis, and hemodynamic instability. Esophageal varices are more likely with cirrhosis or portal hypertension history, not mentioned here. Mallory-Weiss tears typically follow vomiting, not noted. Gastric cancer is less common and usually presents with chronic symptoms.'
  },
  {
    id: 7,
    question: 'A 28-year-old male presents with severe right flank pain radiating to the groin, nausea, and hematuria. His vital signs are stable. What is the best initial imaging modality?',
    choices: ['Ultrasound', 'Non-contrast CT abdomen', 'KUB X-ray', 'MRI abdomen'],
    correctAnswer: 'Non-contrast CT abdomen',
    explanation: 'This classic presentation of ureteral colic (flank pain radiating to groin, hematuria) is best evaluated with a non-contrast CT abdomen, the gold standard for detecting renal stones with high sensitivity and specificity. Ultrasound is less sensitive but useful in pregnancy. KUB X-ray misses radiolucent stones. MRI is not indicated acutely.'
  },
  {
    id: 8,
    question: 'A 65-year-old female with atrial fibrillation presents with sudden right leg pain, pallor, and pulselessness. What is the most likely diagnosis?',
    choices: ['Deep vein thrombosis', 'Acute arterial embolism', 'Peripheral neuropathy', 'Spinal cord compression'],
    correctAnswer: 'Acute arterial embolism',
    explanation: 'Sudden limb pain, pallor, and pulselessness in a patient with atrial fibrillation suggest an acute arterial embolism, often from a cardiac thrombus. DVT causes swelling and warmth, not pulselessness. Neuropathy doesn’t cause acute vascular changes. Spinal cord issues would affect sensation and motor function bilaterally.'
  },
  {
    id: 9,
    question: 'A 19-year-old male presents after a seizure with tongue biting and urinary incontinence. He is now confused. What is the most appropriate initial test?',
    choices: ['EEG', 'Head CT', 'Blood glucose', 'Lumbar puncture'],
    correctAnswer: 'Blood glucose',
    explanation: 'In a postictal patient, hypoglycemia is a reversible cause of seizures and altered mental status that must be ruled out immediately with a bedside glucose test. Head CT is indicated for new seizures or trauma but follows glucose check. EEG is for chronic evaluation, not acute. Lumbar puncture is for infection, not the first step here.'
  },
  {
    id: 10,
    question: 'A 40-year-old male presents with dyspnea, fever, and a productive cough with rusty sputum. Chest X-ray shows lobar consolidation. What is the most likely pathogen?',
    choices: ['Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Legionella pneumophila', 'Staphylococcus aureus'],
    correctAnswer: 'Streptococcus pneumoniae',
    explanation: 'Lobar consolidation, rusty sputum, and acute fever suggest pneumococcal pneumonia, caused by Streptococcus pneumoniae, the most common bacterial pneumonia in adults. Mycoplasma causes atypical pneumonia with diffuse infiltrates. Legionella is associated with water exposure and systemic symptoms. Staphylococcus aureus is more common post-influenza or in necrotizing pneumonia.'
  },
  {
    id: 11,
    question: 'A 55-year-old male presents with chest pain and syncope. His ECG shows a wide-complex tachycardia at 180 bpm, and BP is 80/50 mmHg. What is the most appropriate intervention?',
    choices: ['Amiodarone IV', 'Synchronized cardioversion', 'Adenosine IV', 'IV fluids bolus'],
    correctAnswer: 'Synchronized cardioversion',
    explanation: 'Unstable ventricular tachycardia (VT) with hypotension requires immediate synchronized cardioversion per ACLS. Amiodarone is for stable VT or after cardioversion. Adenosine is for SVT, not wide-complex tachycardia. Fluids won’t correct the arrhythmia.'
  },
  {
    id: 12,
    question: 'A 30-year-old female presents with severe abdominal pain, fever, and vaginal bleeding at 8 weeks gestation. Her BP is 90/60 mmHg. What is the most likely diagnosis?',
    choices: ['Ectopic pregnancy', 'Appendicitis', 'Ovarian torsion', 'Pelvic inflammatory disease'],
    correctAnswer: 'Ectopic pregnancy',
    explanation: 'Abdominal pain, vaginal bleeding, and hypotension in early pregnancy strongly suggest a ruptured ectopic pregnancy, a life-threatening emergency. Appendicitis lacks bleeding. Ovarian torsion causes unilateral pain without bleeding. PID presents with discharge, not typically bleeding or shock.'
  },
  {
    id: 13,
    question: 'A 70-year-old male presents with back pain and a pulsatile abdominal mass. His BP is 80/50 mmHg. What is the most appropriate next step?',
    choices: ['CT abdomen with contrast', 'Bedside ultrasound', 'IV fluids and transfusion', 'MRI abdomen'],
    correctAnswer: 'Bedside ultrasound',
    explanation: 'A pulsatile mass with hypotension in an older patient suggests a ruptured abdominal aortic aneurysm (AAA). Bedside ultrasound can confirm this rapidly in the ED. CT is definitive but delays treatment in unstable patients. Fluids and transfusion are supportive but not diagnostic. MRI is impractical in this acute setting.'
  },
  {
    id: 14,
    question: 'A 25-year-old male presents with headache, photophobia, and a temperature of 39°C. Kernig’s sign is positive. What is the most likely diagnosis?',
    choices: ['Migraine', 'Subarachnoid hemorrhage', 'Bacterial meningitis', 'Tension headache'],
    correctAnswer: 'Bacterial meningitis',
    explanation: 'Fever, headache, photophobia, and a positive Kernig’s sign (neck stiffness with leg extension) are classic for bacterial meningitis. Migraines lack fever and meningeal signs. Subarachnoid hemorrhage presents with sudden "thunderclap" headache, not fever. Tension headaches are not associated with neurologic signs or fever.'
  },
  {
    id: 15,
    question: 'A 45-year-old female presents with right upper quadrant pain, jaundice, and fever. Her BP is 100/60 mmHg. What is the most likely diagnosis?',
    choices: ['Acute cholecystitis', 'Ascending cholangitis', 'Hepatitis', 'Pancreatitis'],
    correctAnswer: 'Ascending cholangitis',
    explanation: 'The triad of fever, jaundice, and right upper quadrant pain (Charcot’s triad) points to ascending cholangitis, a biliary infection requiring urgent antibiotics and decompression. Cholecystitis lacks jaundice unless complicated. Hepatitis causes jaundice but not typically fever and pain together. Pancreatitis presents with epigastric pain radiating to the back.'
  },
  {
    id: 16,
    question: 'A 32-year-old male presents with a stab wound to the left chest. He is tachypneic, with absent breath sounds on the left and a BP of 90/60 mmHg. What is the most appropriate intervention?',
    choices: ['Chest X-ray', 'Needle decompression', 'Tube thoracostomy', 'Pericardiocentesis'],
    correctAnswer: 'Needle decompression',
    explanation: 'This patient has signs of a tension pneumothorax (hypotension, absent breath sounds, tachypnea) after penetrating trauma. Needle decompression in the 2nd intercostal space, midclavicular line, is the immediate step, followed by tube thoracostomy. Chest X-ray delays treatment. Pericardiocentesis is for tamponade, not pneumothorax.'
  },
  {
    id: 17,
    question: 'A 60-year-old female presents with confusion, fever, and flank pain. Urinalysis shows pyuria and bacteria. Her BP is 85/55 mmHg. What is the most appropriate initial management?',
    choices: ['IV fluids and antibiotics', 'CT abdomen', 'Urine culture', 'Norepinephrine infusion'],
    correctAnswer: 'IV fluids and antibiotics',
    explanation: 'This suggests urosepsis from pyelonephritis (fever, flank pain, pyuria, hypotension). Initial management includes aggressive IV fluids and broad-spectrum antibiotics to treat sepsis. CT may identify complications but follows resuscitation. Urine culture is sent but not immediate. Pressors like norepinephrine are used if fluids fail.'
  },
  {
    id: 18,
    question: 'A 50-year-old male presents with dyspnea and chest pain. His ECG shows new right bundle branch block and S1Q3T3 pattern. What is the most likely diagnosis?',
    choices: ['Myocardial infarction', 'Pulmonary embolism', 'Pericarditis', 'Aortic dissection'],
    correctAnswer: 'Pulmonary embolism',
    explanation: 'The S1Q3T3 pattern and new right bundle branch block suggest right heart strain, commonly seen in pulmonary embolism (PE). MI typically shows ST changes or Q waves. Pericarditis causes diffuse ST elevation and PR depression. Aortic dissection may present with tearing pain and pulse deficits, not ECG findings like these.'
  },
  {
    id: 19,
    question: 'A 35-year-old male presents with agitation, diaphoresis, and a temperature of 40°C after a party. His pupils are dilated. What is the most likely cause?',
    choices: ['Heat stroke', 'Cocaine overdose', 'Serotonin syndrome', 'Neuroleptic malignant syndrome'],
    correctAnswer: 'Cocaine overdose',
    explanation: 'Agitation, hyperthermia, diaphoresis, and dilated pupils after a party suggest cocaine overdose, a sympathomimetic toxicity. Heat stroke lacks pupil changes and party context. Serotonin syndrome includes myoclonus and is drug-related (e.g., SSRIs). Neuroleptic malignant syndrome involves rigidity and antipsychotics, not mentioned here.'
  },
  {
    id: 20,
    question: 'A 28-year-old female presents with unilateral vision loss lasting 20 minutes, followed by a throbbing headache. What is the most likely diagnosis?',
    choices: ['Stroke', 'Migraine with aura', 'Retinal detachment', 'Temporal arteritis'],
    correctAnswer: 'Migraine with aura',
    explanation: 'Transient unilateral vision loss (aura) followed by headache is classic for migraine with aura. Stroke causes persistent deficits. Retinal detachment presents with a "curtain" over vision, not transient. Temporal arteritis affects older patients with jaw claudication and ESR elevation.'
  },
  {
    id: 21,
    question: 'A 55-year-old male presents with tearing chest pain radiating to the back and unequal pulses. What is the most appropriate imaging?',
    choices: ['Chest X-ray', 'CT angiography', 'Echocardiogram', 'MRI chest'],
    correctAnswer: 'CT angiography',
    explanation: 'Tearing pain radiating to the back with unequal pulses suggests aortic dissection. CT angiography is the fastest, most accurate imaging in the ED to confirm this. Chest X-ray may show a widened mediastinum but isn’t diagnostic. Echocardiogram is useful for proximal dissection but less comprehensive. MRI is too slow for acute settings.'
  },
  {
    id: 22,
    question: 'A 40-year-old male presents with shortness of breath and a rash after a bee sting. His BP is 80/50 mmHg, and he has wheezing. What is the most appropriate initial treatment?',
    choices: ['Epinephrine IM', 'Albuterol nebulizer', 'Diphenhydramine IV', 'Methylprednisolone IV'],
    correctAnswer: 'Epinephrine IM',
    explanation: 'This is anaphylaxis (hypotension, wheezing, rash post-sting). Epinephrine IM is the first-line treatment to reverse airway and cardiovascular collapse. Albuterol helps bronchospasm but not hypotension. Antihistamines (diphenhydramine) and steroids (methylprednisolone) are adjuncts, not primary.'
  },
  {
    id: 23,
    question: 'A 65-year-old male presents with left-sided weakness and slurred speech for 1 hour. His symptoms resolve in the ED. What is the most likely diagnosis?',
    choices: ['Stroke', 'Transient ischemic attack', 'Hypoglycemia', 'Seizure'],
    correctAnswer: 'Transient ischemic attack',
    explanation: 'Transient focal neurologic deficits (weakness, slurred speech) resolving within hours suggest a transient ischemic attack (TIA). Stroke symptoms persist beyond 24 hours. Hypoglycemia causes global confusion, not focal deficits. Seizures may mimic TIA but typically include positive symptoms (e.g., shaking), not just weakness.'
  },
  {
    id: 24,
    question: 'A 30-year-old male presents with burns to his face, chest, and arms after a house fire. He has a hoarse voice and singed nasal hairs. What is the most urgent intervention?',
    choices: ['IV fluids', 'Intubation', 'Burn dressing', 'Oxygen via nasal cannula'],
    correctAnswer: 'Intubation',
    explanation: 'Hoarse voice and singed nasal hairs indicate inhalation injury with impending airway edema, requiring urgent intubation to secure the airway. IV fluids are critical for burn resuscitation but follow airway management. Dressings and oxygen are secondary in this scenario.'
  },
  {
    id: 25,
    question: 'A 50-year-old female presents with palpitations and dizziness. Her ECG shows a regular narrow-complex tachycardia at 180 bpm. She is hemodynamically stable. What is the most appropriate treatment?',
    choices: ['Vagal maneuvers', 'Adenosine IV', 'Synchronized cardioversion', 'Amiodarone IV'],
    correctAnswer: 'Vagal maneuvers',
    explanation: 'Stable supraventricular tachycardia (SVT) with a narrow-complex rhythm should first be treated with vagal maneuvers (e.g., Valsalva) to terminate it. Adenosine is the next step if vagal maneuvers fail. Cardioversion is for unstable patients. Amiodarone is used for ventricular rhythms or refractory cases.'
  },
  {
    id: 26,
    question: 'A 45-year-old male presents with fever, cough, and hemoptysis 2 weeks after dental surgery. Chest X-ray shows a cavitary lesion. What is the most likely diagnosis?',
    choices: ['Tuberculosis', 'Lung abscess', 'Pulmonary embolism', 'Lung cancer'],
    correctAnswer: 'Lung abscess',
    explanation: 'Fever, cough, hemoptysis, and a cavitary lesion post-dental surgery suggest a lung abscess from anaerobic bacteria aspirated during the procedure. Tuberculosis causes chronic symptoms and upper lobe cavitation. PE presents acutely with dyspnea, not cavitation. Lung cancer is less likely to present acutely post-surgery.'
  },
  {
    id: 27,
    question: 'A 60-year-old male presents with dyspnea and chest pain. His BP is 90/60 mmHg, JVD is present, and heart sounds are muffled. What is the most likely diagnosis?',
    choices: ['Pneumothorax', 'Cardiac tamponade', 'Pulmonary embolism', 'Myocardial infarction'],
    correctAnswer: 'Cardiac tamponade',
    explanation: 'Beck’s triad (hypotension, JVD, muffled heart sounds) is classic for cardiac tamponade, often from pericardial effusion. Pneumothorax causes absent breath sounds. PE may cause JVD but not muffled sounds. MI lacks this specific triad unless complicated by rupture.'
  },
  {
    id: 28,
    question: 'A 35-year-old female presents with severe headache, seizures, and BP 220/120 mmHg at 36 weeks gestation. What is the most appropriate treatment?',
    choices: ['Magnesium sulfate IV', 'Labetalol IV', 'Nimodipine IV', 'Phenytoin IV'],
    correctAnswer: 'Magnesium sulfate IV',
    explanation: 'Headache, seizures, and severe hypertension in late pregnancy indicate eclampsia. Magnesium sulfate is the treatment of choice to prevent further seizures and stabilize the patient. Labetalol lowers BP but doesn’t treat seizures. Nimodipine is for SAH. Phenytoin is less effective for eclampsia.'
  },
  {
    id: 29,
    question: 'A 25-year-old male presents with priapism lasting 6 hours after cocaine use. What is the most appropriate initial management?',
    choices: ['Terbutaline SC', 'Phenylephrine intracavernosal injection', 'Sildenafil PO', 'Surgical shunting'],
    correctAnswer: 'Phenylephrine intracavernosal injection',
    explanation: 'Cocaine-induced ischemic priapism (>4 hours) requires urgent detumescence with intracavernosal phenylephrine, an alpha-agonist, to reduce inflow. Terbutaline is less effective and used for non-ischemic cases. Sildenafil worsens priapism. Surgery is reserved for refractory cases.'
  },
  {
    id: 30,
    question: 'A 70-year-old female presents with confusion and a temperature of 35°C. She has a history of hypothyroidism. What is the most likely diagnosis?',
    choices: ['Sepsis', 'Myxedema coma', 'Stroke', 'Hypoglycemia'],
    correctAnswer: 'Myxedema coma',
    explanation: 'Hypothermia, confusion, and a hypothyroidism history suggest myxedema coma, a rare endocrine emergency. Sepsis typically causes fever, not hypothermia. Stroke causes focal deficits. Hypoglycemia is possible but less likely without diabetes history.'
  },
  {
    id: 31,
    question: 'A 40-year-old male presents with a gunshot wound to the abdomen. His BP is 70/40 mmHg, and he is tachycardic. What is the most appropriate next step?',
    choices: ['CT abdomen', 'Exploratory laparotomy', 'IV fluids alone', 'Ultrasound (FAST)'],
    correctAnswer: 'Exploratory laparotomy',
    explanation: 'Penetrating abdominal trauma with shock requires immediate laparotomy to control bleeding. CT delays surgery in unstable patients. Fluids are supportive but not definitive. FAST can confirm free fluid but isn’t necessary with clear instability.'
  },
  {
    id: 32,
    question: 'A 50-year-old male presents with fever, neck swelling, and drooling. He cannot swallow. What is the most likely diagnosis?',
    choices: ['Epiglottitis', 'Peritonsillar abscess', 'Ludwig’s angina', 'Retropharyngeal abscess'],
    correctAnswer: 'Epiglottitis',
    explanation: 'Fever, neck swelling, drooling, and inability to swallow suggest epiglottitis, an airway emergency often caused by Haemophilus influenzae or Streptococcus. Peritonsillar abscess causes unilateral swelling and trismus. Ludwig’s angina involves the submandibular space. Retropharyngeal abscess may cause dysphagia but less drooling.'
  },
  {
    id: 33,
    question: 'A 60-year-old female presents with lethargy and a serum sodium of 118 mEq/L. She takes hydrochlorothiazide. What is the most likely cause?',
    choices: ['SIADH', 'Hypovolemic hyponatremia', 'Hypervolemic hyponatremia', 'Pseudohyponatremia'],
    correctAnswer: 'Hypovolemic hyponatremia',
    explanation: 'Thiazide diuretics cause hypovolemic hyponatremia by increasing sodium loss and water retention, common in older patients. SIADH causes euvolemic hyponatremia with high urine osmolality. Hypervolemic states (e.g., CHF) have edema, not mentioned. Pseudohyponatremia is from hyperlipidemia or hyperproteinemia, not drug-related.'
  },
  {
    id: 34,
    question: 'A 45-year-old male presents with a painful red eye, blurred vision, and nausea. His pupil is mid-dilated and fixed. What is the most likely diagnosis?',
    choices: ['Corneal abrasion', 'Acute angle-closure glaucoma', 'Uveitis', 'Conjunctivitis'],
    correctAnswer: 'Acute angle-closure glaucoma',
    explanation: 'Painful red eye, blurred vision, nausea, and a mid-dilated, fixed pupil are hallmarks of acute angle-closure glaucoma, an ocular emergency requiring urgent pressure reduction. Corneal abrasion causes pain but not pupil changes. Uveitis has photophobia but a constricted pupil. Conjunctivitis is less severe and lacks these findings.'
  },
  {
    id: 35,
    question: 'A 30-year-old female presents with palpitations, weight loss, and heat intolerance. Her HR is 120 bpm, and she has a fine tremor. What is the most likely diagnosis?',
    choices: ['Pheochromocytoma', 'Hyperthyroidism', 'Anxiety disorder', 'Carcinoid syndrome'],
    correctAnswer: 'Hyperthyroidism',
    explanation: 'Palpitations, weight loss, heat intolerance, tachycardia, and tremor suggest hyperthyroidism, often from Graves’ disease or toxic adenoma. Pheochromocytoma causes episodic hypertension and flushing. Anxiety lacks physical signs like tremor. Carcinoid syndrome includes diarrhea and flushing, not tachycardia alone.'
  },
  {
    id: 36,
    question: 'A 55-year-old male presents with fever, hypotension, and a new systolic murmur after a recent dental procedure. What is the most likely diagnosis?',
    choices: ['Septic shock', 'Endocarditis', 'Myocarditis', 'Pericarditis'],
    correctAnswer: 'Endocarditis',
    explanation: 'Fever, hypotension, and a new murmur post-dental procedure suggest acute bacterial endocarditis, often from viridans streptococci. Septic shock lacks a murmur. Myocarditis causes heart failure without a clear murmur. Pericarditis presents with chest pain and rub, not a murmur.'
  },
  {
    id: 37,
    question: 'A 25-year-old male presents with testicular pain and swelling for 6 hours. The cremasteric reflex is absent. What is the most appropriate next step?',
    choices: ['Ultrasound scrotum', 'Manual detorsion', 'Antibiotics IV', 'CT pelvis'],
    correctAnswer: 'Ultrasound scrotum',
    explanation: 'Acute testicular pain with an absent cremasteric reflex suggests testicular torsion, requiring urgent ultrasound to confirm and assess viability before surgery. Manual detorsion is attempted only after imaging or in extremis. Antibiotics treat epididymitis, not torsion. CT is irrelevant here.'
  },
  {
    id: 38,
    question: 'A 70-year-old male presents with chest pain and dyspnea. His troponin is elevated, and ECG shows new Q waves in V1-V3. What is the most likely diagnosis?',
    choices: ['Unstable angina', 'NSTEMI', 'STEMI', 'Pericarditis'],
    correctAnswer: 'STEMI',
    explanation: 'Chest pain, elevated troponin, and new Q waves in V1-V3 indicate a completed anterior wall STEMI, suggesting transmural infarction. Unstable angina lacks troponin elevation or Q waves. NSTEMI has troponin rise without ST elevation or Q waves. Pericarditis shows diffuse ST elevation, not Q waves.'
  },
  {
    id: 39,
    question: 'A 40-year-old female presents with unilateral leg swelling and dyspnea. Her D-dimer is elevated, and ultrasound shows a proximal DVT. What is the most appropriate treatment?',
    choices: ['Heparin IV', 'Aspirin PO', 'IVC filter', 'Thrombolysis'],
    correctAnswer: 'Heparin IV',
    explanation: 'Proximal DVT with dyspnea suggests pulmonary embolism (PE). Initial treatment is anticoagulation with IV heparin to prevent clot propagation. Aspirin is insufficient for acute DVT/PE. IVC filters are for anticoagulation contraindications. Thrombolysis is reserved for massive PE with instability.'
  },
  {
    id: 40,
    question: 'A 50-year-old male presents with altered mental status and a serum alcohol level of 300 mg/dL. He has a history of chronic alcohol use. What is the most likely complication?',
    choices: ['Wernicke’s encephalopathy', 'Hepatic encephalopathy', 'Alcohol withdrawal', 'Hypoglycemia'],
    correctAnswer: 'Wernicke’s encephalopathy',
    explanation: 'Altered mental status in a chronic alcoholic with high alcohol levels suggests Wernicke’s encephalopathy from thiamine deficiency, presenting with confusion, ataxia, and ophthalmoplegia. Hepatic encephalopathy requires liver failure signs (e.g., jaundice). Withdrawal causes tremors and seizures, not acute intoxication. Hypoglycemia is possible but less specific without glucose testing.'
  },
  {
    id: 41,
    question: 'A 55-year-old male presents with chest pain for 2 hours. His ECG shows ST depression in leads II, III, and aVF, and troponin is elevated. What is the most appropriate next step?',
    choices: ['Percutaneous coronary intervention', 'Heparin and anti-ischemic therapy', 'Fibrinolysis', 'Synchronized cardioversion'],
    correctAnswer: 'Heparin and anti-ischemic therapy',
    explanation: 'ST depression and elevated troponin suggest a non-ST-elevation myocardial infarction (NSTEMI), typically due to subendocardial ischemia. Initial management includes anticoagulation (heparin), anti-ischemic therapy (nitrates, beta-blockers), and antiplatelet agents, followed by risk stratification for catheterization. PCI is for STEMI or high-risk NSTEMI later. Fibrinolysis is contraindicated in NSTEMI. Cardioversion is for arrhythmias, not ischemia.'
  },
  {
    id: 42,
    question: 'A 28-year-old female presents with sudden severe pelvic pain and syncope. She is 6 weeks pregnant, and her BP is 80/50 mmHg. What is the most urgent diagnostic test?',
    choices: ['Pelvic ultrasound', 'CT abdomen', 'Serum beta-hCG', 'Laparoscopy'],
    correctAnswer: 'Pelvic ultrasound',
    explanation: 'Sudden pelvic pain, syncope, and hypotension in early pregnancy suggest a ruptured ectopic pregnancy. Transvaginal ultrasound is the most urgent test to identify an extrauterine gestation or free fluid. CT is less specific and involves radiation risk. Beta-hCG confirms pregnancy but not location. Laparoscopy is therapeutic, not diagnostic, and follows imaging.'
  },
  {
    id: 43,
    question: 'A 65-year-old male presents with fever, confusion, and a productive cough. His BP is 85/55 mmHg, and chest X-ray shows multilobar infiltrates. What is the most likely diagnosis?',
    choices: ['Pneumonia with sepsis', 'Acute respiratory distress syndrome', 'Pulmonary edema', 'Chronic obstructive pulmonary disease exacerbation'],
    correctAnswer: 'Pneumonia with sepsis',
    explanation: 'Fever, confusion, hypotension, and multilobar infiltrates indicate severe pneumonia with sepsis, likely bacterial (e.g., Streptococcus pneumoniae). ARDS may follow but lacks initial fever. Pulmonary edema from heart failure causes bilateral fluffy infiltrates, not lobar. COPD exacerbation presents with wheezing and hypercapnia, not fever or infiltrates.'
  },
  {
    id: 44,
    question: 'A 30-year-old male presents with a laceration to the neck after a bar fight. His voice is hoarse, and subcutaneous emphysema is palpable. What is the most appropriate next step?',
    choices: ['CT neck', 'Immediate intubation', 'Surgical exploration', 'Chest X-ray'],
    correctAnswer: 'Immediate intubation',
    explanation: 'Hoarseness and subcutaneous emphysema after neck trauma suggest laryngeal or tracheal injury, risking airway compromise. Immediate intubation secures the airway before swelling worsens. CT neck is useful but delays airway management in this unstable scenario. Surgical exploration follows stabilization. Chest X-ray may show pneumothorax but isn’t the priority.'
  },
  {
    id: 45,
    question: 'A 50-year-old female presents with dyspnea and leg swelling. Her ECG shows sinus tachycardia, and D-dimer is elevated. What is the most appropriate imaging?',
    choices: ['Chest X-ray', 'CT pulmonary angiography', 'Echocardiogram', 'Ventilation-perfusion scan'],
    correctAnswer: 'CT pulmonary angiography',
    explanation: 'Dyspnea, leg swelling, tachycardia, and elevated D-dimer suggest pulmonary embolism (PE). CT pulmonary angiography (CTPA) is the gold standard for diagnosing PE in the ED due to its speed and accuracy. Chest X-ray is nonspecific. Echocardiogram assesses right heart strain but not the clot. V/Q scan is an alternative if CTPA is contraindicated (e.g., contrast allergy).'
  },
  {
    id: 46,
    question: 'A 40-year-old male presents with headache, vomiting, and papilledema. His BP is 180/100 mmHg, and CT shows a cerebellar hemorrhage. What is the most urgent intervention?',
    choices: ['IV mannitol', 'Neurosurgical consult', 'BP reduction with nitroprusside', 'Lumbar puncture'],
    correctAnswer: 'Neurosurgical consult',
    explanation: 'Cerebellar hemorrhage with papilledema (raised ICP) and vomiting requires urgent neurosurgical intervention (e.g., decompression) due to the risk of herniation. Mannitol temporizes ICP but isn’t definitive. BP reduction is important but secondary to surgery in this location. Lumbar puncture is contraindicated with increased ICP and mass effect.'
  },
  {
    id: 47,
    question: 'A 25-year-old female presents with dyspnea and chest pain 3 days postpartum. Her SpO2 is 90%, and ECG shows sinus tachycardia. What is the most likely diagnosis?',
    choices: ['Postpartum cardiomyopathy', 'Pulmonary embolism', 'Pneumonia', 'Myocardial infarction'],
    correctAnswer: 'Pulmonary embolism',
    explanation: 'Dyspnea, chest pain, hypoxia, and tachycardia postpartum suggest pulmonary embolism, a common complication due to hypercoagulability in pregnancy/postpartum. Cardiomyopathy causes heart failure signs (e.g., edema). Pneumonia includes fever and cough. MI is less likely without risk factors or ECG changes.'
  },
  {
    id: 48,
    question: 'A 60-year-old male presents with fever, flank pain, and dysuria. His BP is 90/60 mmHg, and urinalysis shows pyuria. What is the most appropriate antibiotic choice?',
    choices: ['Ciprofloxacin PO', 'Ceftriaxone IV', 'Nitrofurantoin PO', 'Vancomycin IV'],
    correctAnswer: 'Ceftriaxone IV',
    explanation: 'Fever, flank pain, dysuria, and hypotension suggest pyelonephritis with sepsis. IV ceftriaxone provides broad-spectrum coverage for gram-negative bacteria (e.g., E. coli) in an unstable patient. Oral ciprofloxacin or nitrofurantoin is for outpatient treatment, not sepsis. Vancomycin targets gram-positive organisms, less common here.'
  },
  {
    id: 49,
    question: 'A 35-year-old male presents with a headache and blurred vision after a car accident. His GCS is 14, and CT shows a thin crescent-shaped hyperdensity along the skull. What is the most likely diagnosis?',
    choices: ['Epidural hematoma', 'Subdural hematoma', 'Subarachnoid hemorrhage', 'Intracerebral hemorrhage'],
    correctAnswer: 'Subdural hematoma',
    explanation: 'A crescent-shaped hyperdensity on CT after trauma indicates a subdural hematoma, often from venous bleeding (e.g., bridging veins). Epidural hematomas are lens-shaped and arterial. Subarachnoid hemorrhage shows blood in cisterns, not a crescent. Intracerebral hemorrhage is intraparenchymal, not along the skull.'
  },
  {
    id: 50,
    question: 'A 45-year-old female presents with chest tightness and dyspnea. Her BP is 100/60 mmHg, and ECG shows diffuse ST elevation with PR depression. What is the most likely diagnosis?',
    choices: ['Myocardial infarction', 'Pericarditis', 'Pulmonary embolism', 'Aortic dissection'],
    correctAnswer: 'Pericarditis',
    explanation: 'Diffuse ST elevation with PR depression suggests acute pericarditis, often viral or idiopathic, causing chest tightness relieved by sitting forward. MI has regional ST elevation. PE shows right heart strain on ECG. Aortic dissection presents with tearing pain and pulse deficits, not this ECG pattern.'
  },
  {
    id: 51,
    question: 'A 30-year-old male presents with agitation, tachycardia, and a serum pH of 7.25 after ingesting an unknown substance. What is the most likely toxin?',
    choices: ['Ethanol', 'Salicylates', 'Methamphetamine', 'Carbon monoxide'],
    correctAnswer: 'Salicylates',
    explanation: 'Agitation, tachycardia, and metabolic acidosis (pH 7.25) suggest salicylate overdose (e.g., aspirin), which causes a mixed respiratory alkalosis and metabolic acidosis. Ethanol causes sedation, not acidosis. Methamphetamine leads to sympathomimetic effects without acidosis. Carbon monoxide causes hypoxia, not pH changes directly.'
  },
  {
    id: 52,
    question: 'A 70-year-old female presents with abdominal pain and vomiting. Her BP is 90/50 mmHg, and CT shows air in the portal vein. What is the most likely diagnosis?',
    choices: ['Bowel obstruction', 'Mesenteric ischemia', 'Perforated ulcer', 'Pancreatitis'],
    correctAnswer: 'Mesenteric ischemia',
    explanation: 'Abdominal pain, hypotension, and portal vein gas on CT strongly suggest mesenteric ischemia with infarction, often from arterial embolism or thrombosis. Bowel obstruction causes air-fluid levels, not portal gas. Perforated ulcer shows free intraperitoneal air. Pancreatitis lacks vascular gas findings.'
  },
  {
    id: 53,
    question: 'A 25-year-old male presents with a swollen, painful knee after a fall. Aspiration reveals blood in the joint. What is the most likely injury?',
    choices: ['ACL tear', 'Meniscal injury', 'Hemarthrosis from fracture', 'Septic arthritis'],
    correctAnswer: 'Hemarthrosis from fracture',
    explanation: 'Traumatic knee swelling with bloody aspiration suggests hemarthrosis, most commonly from an intra-articular fracture (e.g., tibial plateau). ACL tears cause hemarthrosis but less commonly than fractures. Meniscal injuries don’t typically bleed into the joint. Septic arthritis presents with fever and pus, not trauma.'
  },
  {
    id: 54,
    question: 'A 60-year-old male presents with sudden vision loss in one eye lasting 10 minutes, now resolved. He has a history of hypertension. What is the most likely diagnosis?',
    choices: ['Retinal detachment', 'Amaurosis fugax', 'Stroke', 'Glaucoma'],
    correctAnswer: 'Amaurosis fugax',
    explanation: 'Transient monocular vision loss (amaurosis fugax) in a hypertensive patient suggests a retinal artery embolism, often from carotid atherosclerosis. Retinal detachment causes persistent "curtain-like" loss. Stroke causes persistent deficits. Glaucoma presents with painful, red eyes and fixed vision loss.'
  },
  {
    id: 55,
    question: 'A 40-year-old female presents with fever, rash, and joint pain after starting a new medication. Her BP is 90/60 mmHg. What is the most likely diagnosis?',
    choices: ['Anaphylaxis', 'Drug-induced hypersensitivity syndrome', 'Sepsis', 'Rheumatoid arthritis'],
    correctAnswer: 'Drug-induced hypersensitivity syndrome',
    explanation: 'Fever, rash, joint pain, and hypotension after a new medication suggest drug-induced hypersensitivity syndrome (e.g., DRESS), a severe reaction involving systemic inflammation. Anaphylaxis is more acute with wheezing. Sepsis lacks a drug trigger here. Rheumatoid arthritis is chronic, not acute or hypotensive.'
  },
  {
    id: 56,
    question: 'A 50-year-old male presents with left arm weakness and facial droop for 30 minutes. His BP is 200/110 mmHg, and CT is normal. What is the most appropriate next step?',
    choices: ['IV thrombolysis', 'BP control with labetalol', 'Aspirin PO', 'MRI brain'],
    correctAnswer: 'BP control with labetalol',
    explanation: 'Transient symptoms (TIA) with severe hypertension and normal CT suggest a hypertensive emergency contributing to symptoms. BP control (e.g., labetalol) is the priority to prevent recurrence. Thrombolysis is for stroke, not TIA. Aspirin is secondary prevention. MRI may show ischemia but follows BP management.'
  },
  {
    id: 57,
    question: 'A 35-year-old male presents with chest pain and shortness of breath after a car accident. His BP is 80/50 mmHg, and chest X-ray shows a widened mediastinum. What is the most likely diagnosis?',
    choices: ['Pneumothorax', 'Aortic transection', 'Rib fractures', 'Pulmonary contusion'],
    correctAnswer: 'Aortic transection',
    explanation: 'Chest pain, hypotension, and a widened mediastinum post-trauma suggest traumatic aortic transection, a life-threatening injury requiring urgent CT angiography or surgery. Pneumothorax causes absent breath sounds. Rib fractures don’t widen the mediastinum. Pulmonary contusion shows patchy infiltrates, not mediastinal changes.'
  },
  {
    id: 58,
    question: 'A 28-year-old female presents with palpitations and a heart rate of 200 bpm. Her ECG shows a narrow-complex tachycardia. Vagal maneuvers fail. What is the most appropriate next step?',
    choices: ['Adenosine IV', 'Synchronized cardioversion', 'Amiodarone IV', 'Beta-blocker IV'],
    correctAnswer: 'Adenosine IV',
    explanation: 'Stable narrow-complex tachycardia (e.g., SVT) unresponsive to vagal maneuvers requires adenosine IV to terminate the re-entry circuit. Cardioversion is for unstable patients. Amiodarone is for ventricular rhythms. Beta-blockers are an option but less immediate than adenosine.'
  },
  {
    id: 59,
    question: 'A 65-year-old male presents with fever, dyspnea, and a new murmur. Blood cultures grow Streptococcus bovis. What is the most likely associated condition?',
    choices: ['Colorectal cancer', 'Rheumatic fever', 'IV drug use', 'Cirrhosis'],
    correctAnswer: 'Colorectal cancer',
    explanation: 'Streptococcus bovis endocarditis is strongly associated with colorectal cancer, necessitating colonoscopy. Rheumatic fever causes mitral/aortic issues in younger patients. IV drug use links to Staphylococcus aureus. Cirrhosis relates to enterococcal endocarditis, not S. bovis.'
  },
  {
    id: 60,
    question: 'A 45-year-old female presents with right-sided weakness and aphasia for 2 hours. Her BP is 160/90 mmHg, and CT is normal. What is the most appropriate treatment?',
    choices: ['IV alteplase', 'Aspirin PO', 'Heparin IV', 'BP reduction'],
    correctAnswer: 'IV alteplase',
    explanation: 'Acute stroke symptoms (weakness, aphasia) within 4.5 hours and a normal CT (no hemorrhage) indicate eligibility for IV alteplase per stroke guidelines. Aspirin is for secondary prevention. Heparin isn’t standard for acute ischemic stroke. BP reduction is avoided unless >185/110 mmHg for thrombolysis.'
  },
  {
    id: 61,
    question: 'A 30-year-old male presents with severe headache and seizures after a fall. CT shows a biconvex hyperdensity near the skull. What is the most likely diagnosis?',
    choices: ['Subdural hematoma', 'Epidural hematoma', 'Subarachnoid hemorrhage', 'Cerebral contusion'],
    correctAnswer: 'Epidural hematoma',
    explanation: 'A biconvex hyperdensity post-trauma suggests an epidural hematoma, typically from arterial bleeding (e.g., middle meningeal artery). Subdural hematomas are crescent-shaped. Subarachnoid hemorrhage shows blood in cisterns. Contusions are intraparenchymal, not biconvex.'
  },
  {
    id: 62,
    question: 'A 55-year-old female presents with dyspnea and hypoxia. Her chest X-ray shows bilateral infiltrates, and PCWP is 10 mmHg. What is the most likely diagnosis?',
    choices: ['Pulmonary edema', 'Acute respiratory distress syndrome', 'Pneumonia', 'Pulmonary embolism'],
    correctAnswer: 'Acute respiratory distress syndrome',
    explanation: 'Bilateral infiltrates with a low pulmonary capillary wedge pressure (PCWP <18 mmHg) suggest ARDS, a non-cardiogenic pulmonary edema. Pulmonary edema from heart failure has elevated PCWP. Pneumonia may mimic but lacks diffuse bilateral involvement here. PE causes hypoxia without infiltrates.'
  },
  {
    id: 63,
    question: 'A 40-year-old male presents with abdominal pain and dark urine. His BP is 180/110 mmHg, and labs show hematuria and proteinuria. What is the most likely diagnosis?',
    choices: ['Nephrolithiasis', 'Glomerulonephritis', 'Pyelonephritis', 'Bladder cancer'],
    correctAnswer: 'Glomerulonephritis',
    explanation: 'Hypertension, hematuria, proteinuria, and abdominal pain suggest glomerulonephritis (e.g., post-streptococcal), an inflammatory renal condition. Nephrolithiasis causes colicky pain without proteinuria. Pyelonephritis includes fever and pyuria. Bladder cancer presents with painless hematuria, not hypertension.'
  },
  {
    id: 64,
    question: 'A 25-year-old female presents with chest pain and dyspnea after cocaine use. Her ECG shows ST elevation in V1-V3. What is the most appropriate treatment?',
    choices: ['Percutaneous coronary intervention', 'Benzodiazepines IV', 'Fibrinolysis', 'Nitroglycerin IV'],
    correctAnswer: 'Percutaneous coronary intervention',
    explanation: 'Cocaine-induced STEMI (ST elevation in V1-V3) requires urgent PCI to restore coronary flow, as vasospasm or thrombosis may be involved. Benzodiazepines reduce sympathetic drive but don’t reperfuse. Fibrinolysis is avoided due to bleeding risk. Nitroglycerin helps vasospasm but isn’t definitive.'
  },
  {
    id: 65,
    question: 'A 60-year-old male presents with fever, neck stiffness, and photophobia. His CSF shows 1000 WBCs, low glucose, and gram-positive cocci. What is the most likely pathogen?',
    choices: ['Neisseria meningitidis', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Listeria monocytogenes'],
    correctAnswer: 'Streptococcus pneumoniae',
    explanation: 'CSF findings (high WBCs, low glucose, gram-positive cocci) in an older adult with meningitis suggest Streptococcus pneumoniae, the most common cause in this age group. N. meningitidis (gram-negative diplococci) causes petechiae. H. influenzae is less common post-vaccination. Listeria (gram-positive rods) affects neonates or immunocompromised patients.'
  },
  {
    id: 66,
    question: 'A 35-year-old male presents with a productive cough and hemoptysis. His chest X-ray shows upper lobe cavitation, and he has a history of night sweats. What is the most likely diagnosis?',
    choices: ['Lung cancer', 'Tuberculosis', 'Pneumonia', 'Pulmonary embolism'],
    correctAnswer: 'Tuberculosis',
    explanation: 'Upper lobe cavitation, hemoptysis, and night sweats strongly suggest pulmonary tuberculosis, especially with chronic symptoms. Lung cancer may cavitate but is less likely with fever and sweats. Pneumonia causes acute lobar consolidation. PE presents with acute dyspnea, not cavitation.'
  },
  {
    id: 67,
    question: 'A 50-year-old female presents with chest pain and dyspnea. Her BP is 90/60 mmHg, and ultrasound shows a pericardial effusion with right ventricular collapse. What is the most appropriate intervention?',
    choices: ['IV fluids', 'Pericardiocentesis', 'Heparin IV', 'Synchronized cardioversion'],
    correctAnswer: 'Pericardiocentesis',
    explanation: 'Hypotension and pericardial effusion with RV collapse indicate cardiac tamponade, requiring urgent pericardiocentesis to relieve pressure. Fluids temporize but don’t address the cause. Heparin is for PE, not tamponade. Cardioversion is irrelevant without arrhythmia.'
  },
  {
    id: 68,
    question: 'A 30-year-old male presents with unilateral facial swelling and fever after dental extraction. His airway is patent. What is the most appropriate management?',
    choices: ['IV antibiotics and drainage', 'Oral antibiotics', 'CT neck', 'Steroids IV'],
    correctAnswer: 'IV antibiotics and drainage',
    explanation: 'Facial swelling and fever post-dental extraction suggest a deep neck space infection (e.g., Ludwig’s angina or abscess), requiring IV antibiotics (e.g., ampicillin-sulbactam) and surgical drainage. Oral antibiotics are insufficient for severe infection. CT neck aids diagnosis but follows initial therapy. Steroids are not indicated.'
  },
  {
    id: 69,
    question: 'A 45-year-old male presents with confusion and a blood glucose of 30 mg/dL. He is not responding to verbal commands. What is the most appropriate treatment?',
    choices: ['Oral glucose gel', 'IV dextrose 50%', 'Glucagon IM', 'Insulin IV'],
    correctAnswer: 'IV dextrose 50%',
    explanation: 'Severe hypoglycemia (glucose 30 mg/dL) with altered mental status requires immediate IV dextrose 50% to rapidly restore glucose levels. Oral glucose is unsafe in unresponsive patients. Glucagon IM is slower and less reliable in severe cases. Insulin worsens hypoglycemia.'
  },
  {
    id: 70,
    question: 'A 60-year-old female presents with abdominal pain and distension. Her BP is 80/50 mmHg, and X-ray shows air under the diaphragm. What is the most appropriate next step?',
    choices: ['CT abdomen', 'Exploratory laparotomy', 'IV antibiotics', 'NG tube placement'],
    correctAnswer: 'Exploratory laparotomy',
    explanation: 'Air under the diaphragm (pneumoperitoneum) with hypotension suggests a perforated viscus (e.g., ulcer), requiring urgent laparotomy. CT delays surgery in an unstable patient. Antibiotics are adjunctive. NG tube decompresses but isn’t definitive.'
  },
  {
    id: 71,
    question: 'A 25-year-old male presents with shortness of breath and chest pain after scuba diving. His SpO2 is 88%, and chest X-ray is normal. What is the most likely diagnosis?',
    choices: ['Pneumothorax', 'Decompression sickness', 'Pulmonary embolism', 'Asthma exacerbation'],
    correctAnswer: 'Decompression sickness',
    explanation: 'Dyspnea and chest pain post-scuba diving with normal X-ray suggest decompression sickness (DCS) from nitrogen bubbles, a diving-related emergency. Pneumothorax shows lung collapse on X-ray. PE is less likely without risk factors. Asthma lacks diving context.'
  },
  {
    id: 72,
    question: 'A 55-year-old male presents with epigastric pain radiating to the back and vomiting. His lipase is 1000 U/L. What is the most likely diagnosis?',
    choices: ['Acute pancreatitis', 'Perforated ulcer', 'Mesenteric ischemia', 'Aortic dissection'],
    correctionAnswer: 'Acute pancreatitis',
    explanation: 'Epigastric pain radiating to the back with elevated lipase (1000 U/L) is diagnostic of acute pancreatitis, often from gallstones or alcohol. Perforated ulcer causes free air on X-ray. Mesenteric ischemia presents with pain out of proportion to exam. Aortic dissection has tearing pain and pulse deficits.'
  },
  {
    id: 73,
    question: 'A 40-year-old female presents with headache, confusion, and a sodium level of 125 mEq/L after marathon running. What is the most appropriate treatment?',
    choices: ['Normal saline IV', '3% hypertonic saline IV', 'Furosemide IV', 'Fluid restriction'],
    correctAnswer: '3% hypertonic saline IV',
    explanation: 'Symptomatic hyponatremia (confusion, Na 125 mEq/L) post-marathon suggests exercise-associated hyponatremia from water overload, requiring 3% hypertonic saline to correct sodium slowly and prevent cerebral edema. Normal saline is for hypovolemic hyponatremia. Furosemide worsens dehydration. Fluid restriction is too slow for acute symptoms.'
  },
  {
    id: 74,
    question: 'A 65-year-old male presents with chest pain and a new left bundle branch block on ECG. His BP is 110/70 mmHg. What is the most appropriate next step?',
    choices: ['Aspirin and heparin', 'Immediate PCI', 'Fibrinolysis', 'Beta-blocker IV'],
    correctAnswer: 'Immediate PCI',
    explanation: 'New LBBB with chest pain is a STEMI equivalent, indicating acute coronary occlusion requiring urgent PCI per guidelines. Aspirin and heparin are adjuncts but not definitive. Fibrinolysis is second-line if PCI is unavailable. Beta-blockers are contraindicated in acute LBBB without stability.'
  },
  {
    id: 75,
    question: 'A 30-year-old male presents with a rash, fever, and hypotension after a tick bite. His labs show thrombocytopenia. What is the most likely diagnosis?',
    choices: ['Lyme disease', 'Rocky Mountain spotted fever', 'Anaphylaxis', 'Sepsis'],
    correctAnswer: 'Rocky Mountain spotted fever',
    explanation: 'Rash, fever, hypotension, and thrombocytopenia post-tick bite suggest Rocky Mountain spotted fever (RMSF) from Rickettsia rickettsii, a treatable emergency with doxycycline. Lyme disease causes erythema migrans without hypotension. Anaphylaxis lacks tick history. Sepsis is possible but less specific without RMSF signs.'
  },
  {
    id: 76,
    question: 'A 50-year-old female presents with right leg pain and swelling. Ultrasound shows a distal DVT. She is hemodynamically stable. What is the most appropriate treatment?',
    choices: ['Heparin IV', 'Rivaroxaban PO', 'IVC filter', 'Thrombolysis'],
    correctAnswer: 'Rivaroxaban PO',
    explanation: 'Stable distal DVT can be managed outpatient with oral anticoagulants like rivaroxaban, a direct Xa inhibitor, per guidelines. Heparin IV is for proximal DVT or PE. IVC filters are for anticoagulation failure or contraindications. Thrombolysis is for massive PE or limb-threatening DVT.'
  },
  {
    id: 77,
    question: 'A 60-year-old male presents with confusion and ataxia. His pupils are pinpoint, and respiratory rate is 8/min. What is the most appropriate treatment?',
    choices: ['Naloxone IV', 'Flumazenil IV', 'Glucose IV', 'Thiamine IV'],
    correctAnswer: 'Naloxone IV',
    explanation: 'Confusion, ataxia, pinpoint pupils, and bradypnea suggest opioid overdose, reversed with naloxone IV. Flumazenil is for benzodiazepines (dilated pupils). Glucose treats hypoglycemia, not respiratory depression. Thiamine is for Wernicke’s but lacks opioid signs here.'
  },
  {
    id: 78,
    question: 'A 45-year-old female presents with dyspnea and hemoptysis. Her INR is 6.0, and she takes warfarin. What is the most appropriate reversal agent?',
    choices: ['Vitamin K IV', 'Fresh frozen plasma', 'Prothrombin complex concentrate', 'Protamine sulfate'],
    correctAnswer: 'Prothrombin complex concentrate',
    explanation: 'Supratherapeutic INR (6.0) with bleeding (hemoptysis) requires rapid reversal with prothrombin complex concentrate (PCC) for immediate factor replacement. Vitamin K is slower (hours). FFP is less concentrated and slower than PCC. Protamine reverses heparin, not warfarin.'
  },
  {
    id: 79,
    question: 'A 35-year-old male presents with flank pain and hematuria. His BP is 150/90 mmHg, and CT shows a 5 mm ureteral stone with hydronephrosis. What is the most appropriate management?',
    choices: ['IV fluids and pain control', 'Shockwave lithotripsy', 'Ureteral stent', 'Nephrectomy'],
    correctAnswer: 'IV fluids and pain control',
    explanation: 'A 5 mm ureteral stone with hydronephrosis can often pass spontaneously with IV fluids, pain control (e.g., ketorolac), and tamsulosin. Lithotripsy or stenting is for larger stones or obstruction with infection. Nephrectomy is for malignancy or severe infection, not stones.'
  },
  {
    id: 80,
    question: 'A 50-year-old male presents with chest pain and syncope. His ECG shows ventricular tachycardia, and BP is 70/40 mmHg. What is the most appropriate intervention?',
    choices: ['Amiodarone IV', 'Synchronized cardioversion', 'Defibrillation', 'Adenosine IV'],
    correctAnswer: 'Defibrillation',
    explanation: 'Unstable ventricular tachycardia (VT) with hypotension requires immediate defibrillation per ACLS, as it’s a shockable rhythm. Amiodarone is for stable VT. Synchronized cardioversion is for stable VT or SVT. Adenosine is for SVT, not VT.'
  }
];

export default emergencyMedicineQuestions;
