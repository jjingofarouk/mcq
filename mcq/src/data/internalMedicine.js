// src/data/internalMedicine.js

const internalMedicineQuestions = [
  {
    id: 1,
    question: 'A 65-year-old female presents with shortness of breath, orthopnea, and bilateral leg edema. She has a history of myocardial infarction. What is the most likely diagnosis?',
    choices: ['Congestive heart failure', 'Pulmonary embolism', 'Chronic obstructive pulmonary disease (COPD)', 'Pneumonia'],
    correctAnswer: 'Congestive heart failure',
    explanation: 'Congestive heart failure commonly presents with shortness of breath, orthopnea, and leg edema due to fluid retention.',
  },
  {
    id: 2,
    question: 'A 55-year-old male with hypertension and diabetes presents with chest pain radiating to his jaw, diaphoresis, and nausea. His ECG shows ST elevation in leads I, aVL, and V5-V6. What is the most likely diagnosis?',
    choices: ['Unstable angina', 'Acute lateral wall myocardial infarction', 'Pericarditis', 'Aortic dissection'],
    correctAnswer: 'Acute lateral wall myocardial infarction',
    explanation: 'ST elevation in leads I, aVL, and V5-V6 indicates an acute lateral wall myocardial infarction (MI), typically due to occlusion of the left circumflex artery. Unstable angina lacks ST elevation. Pericarditis causes diffuse ST elevation and PR depression, not regional changes. Aortic dissection presents with tearing pain and unequal pulses, not this ECG pattern.'
  },
  {
    id: 3,
    question: 'A 70-year-old female presents with fatigue, weight loss, and hypercalcemia. Her PTH is elevated, and imaging shows a parathyroid mass. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Secondary hyperparathyroidism', 'Multiple myeloma', 'Sarcoidosis'],
    correctAnswer: 'Primary hyperparathyroidism',
    explanation: 'Fatigue, weight loss, hypercalcemia, and elevated PTH with a parathyroid mass suggest primary hyperparathyroidism, often from a parathyroid adenoma. Secondary hyperparathyroidism occurs in renal failure with low calcium. Multiple myeloma causes hypercalcemia but with low PTH and bone lesions. Sarcoidosis raises calcium via vitamin D, not PTH.'
  },
  {
    id: 4,
    question: 'A 45-year-old male with a history of alcohol use presents with epigastric pain radiating to the back, nausea, and vomiting. His lipase is 1200 U/L. What is the most appropriate initial management?',
    choices: ['IV fluids and pain control', 'Endoscopic retrograde cholangiopancreatography (ERCP)', 'Antibiotics IV', 'Surgical consult'],
    correctAnswer: 'IV fluids and pain control',
    explanation: 'Epigastric pain radiating to the back with elevated lipase (1200 U/L) indicates acute pancreatitis, commonly from alcohol. Initial management includes aggressive IV fluids and pain control (e.g., opioids). ERCP is for gallstone pancreatitis with obstruction. Antibiotics are reserved for infected necrosis. Surgery is for complications like pseudocysts.'
  },
  {
    id: 5,
    question: 'A 60-year-old female with rheumatoid arthritis presents with dyspnea and dry cough. Chest X-ray shows bilateral interstitial infiltrates. What is the most likely diagnosis?',
    choices: ['Pulmonary fibrosis', 'Congestive heart failure', 'Pneumonia', 'Pulmonary embolism'],
    correctAnswer: 'Pulmonary fibrosis',
    explanation: 'Dyspnea, dry cough, and bilateral interstitial infiltrates in rheumatoid arthritis suggest pulmonary fibrosis, a known complication. CHF causes wet cough and pleural effusions. Pneumonia includes fever and consolidation. PE presents with acute dyspnea and normal X-ray or wedge infarcts.'
  },
  {
    id: 6,
    question: 'A 50-year-old male presents with polyuria, polydipsia, and a random glucose of 300 mg/dL. His HbA1c is 9.5%. What is the most appropriate initial therapy?',
    choices: ['Metformin PO', 'Insulin SC', 'Sulfonylurea PO', 'Lifestyle modification alone'],
    correctAnswer: 'Metformin PO',
    explanation: 'Polyuria, polydipsia, hyperglycemia (glucose 300 mg/dL), and HbA1c 9.5% indicate type 2 diabetes. Metformin is the first-line therapy unless contraindicated (e.g., renal failure). Insulin is for type 1 or severe hyperglycemia (e.g., DKA). Sulfonylureas are second-line. Lifestyle modification alone is insufficient for this HbA1c.'
  },
  {
    id: 7,
    question: 'A 65-year-old male with COPD presents with worsening dyspnea and productive cough. His PaO2 is 55 mmHg, and PaCO2 is 60 mmHg. What is the most appropriate next step?',
    choices: ['Increase supplemental oxygen', 'Start non-invasive ventilation', 'Intubate immediately', 'Administer IV steroids'],
    correctAnswer: 'Start non-invasive ventilation',
    explanation: 'Worsening dyspnea, hypoxemia (PaO2 55 mmHg), and hypercapnia (PaCO2 60 mmHg) in COPD exacerbation suggest acute respiratory failure. Non-invasive ventilation (e.g., BiPAP) improves ventilation and avoids intubation. Oxygen alone risks worsening hypercapnia. Intubation is for NIV failure. Steroids treat inflammation but don’t address ventilation.'
  },
  {
    id: 8,
    question: 'A 40-year-old female presents with fatigue, cold intolerance, and constipation. Her TSH is 15 mIU/L, and free T4 is low. What is the most likely diagnosis?',
    choices: ['Hypothyroidism', 'Hyperthyroidism', 'Pituitary adenoma', 'Subclinical hypothyroidism'],
    correctAnswer: 'Hypothyroidism',
    explanation: 'Fatigue, cold intolerance, constipation, high TSH (15 mIU/L), and low free T4 indicate overt primary hypothyroidism, likely Hashimoto’s thyroiditis. Hyperthyroidism causes opposite symptoms. Pituitary adenoma lowers TSH with low T4 (secondary). Subclinical hypothyroidism has normal T4 with mildly elevated TSH.'
  },
  {
    id: 9,
    question: 'A 55-year-old male with cirrhosis presents with confusion and asterixis. His ammonia level is 90 µmol/L. What is the most appropriate treatment?',
    choices: ['Lactulose PO', 'Rifaximin PO', 'Neomycin IV', 'Protein restriction'],
    correctAnswer: 'Lactulose PO',
    explanation: 'Confusion and asterixis in cirrhosis with elevated ammonia suggest hepatic encephalopathy. Lactulose reduces ammonia by acidifying the colon and promoting excretion. Rifaximin is adjunctive or for recurrence. Neomycin is rarely used due to toxicity. Protein restriction is outdated and risks malnutrition.'
  },
  {
    id: 10,
    question: 'A 60-year-old female presents with fatigue and bone pain. Labs show calcium 11.5 mg/dL, creatinine 2.0 mg/dL, and monoclonal protein on electrophoresis. What is the most likely diagnosis?',
    choices: ['Multiple myeloma', 'Primary hyperparathyroidism', 'Metastatic cancer', 'Chronic kidney disease'],
    correctAnswer: 'Multiple myeloma',
    explanation: 'Fatigue, bone pain, hypercalcemia, renal dysfunction, and monoclonal protein suggest multiple myeloma, a plasma cell disorder. Primary hyperparathyroidism raises calcium but not monoclonal protein. Metastatic cancer lacks monoclonal spikes. CKD causes secondary hyperparathyroidism, not primary hypercalcemia.'
  },
  {
    id: 11,
    question: 'A 45-year-old male presents with joint pain and morning stiffness in his hands. Labs show positive rheumatoid factor and anti-CCP antibodies. What is the most likely diagnosis?',
    choices: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correctAnswer: 'Rheumatoid arthritis',
    explanation: 'Symmetric joint pain, morning stiffness, positive RF, and anti-CCP antibodies are diagnostic for rheumatoid arthritis, an autoimmune condition. Osteoarthritis lacks systemic features or autoantibodies. Gout causes acute monoarthritis with urate crystals. Psoriatic arthritis involves skin lesions and asymmetric joints.'
  },
  {
    id: 12,
    question: 'A 50-year-old male with hypertension presents with a potassium of 6.5 mEq/L and peaked T waves on ECG. What is the most appropriate initial treatment?',
    choices: ['Calcium gluconate IV', 'Insulin and glucose IV', 'Sodium bicarbonate IV', 'Kayexalate PO'],
    correctAnswer: 'Calcium gluconate IV',
    explanation: 'Hyperkalemia (6.5 mEq/L) with ECG changes (peaked T waves) requires immediate calcium gluconate IV to stabilize cardiac membranes and prevent arrhythmias. Insulin/glucose shifts potassium intracellularly but acts slower. Bicarbonate is for acidosis-related hyperkalemia. Kayexalate removes potassium but takes hours.'
  },
  {
    id: 13,
    question: 'A 60-year-old female with atrial fibrillation presents with fatigue and dyspnea. Her INR is 1.2 on warfarin. What is the most appropriate adjustment?',
    choices: ['Increase warfarin dose', 'Switch to apixaban', 'Add aspirin', 'Stop warfarin'],
    correctAnswer: 'Increase warfarin dose',
    explanation: 'Subtherapeutic INR (1.2) in atrial fibrillation (target 2.0-3.0) indicates inadequate anticoagulation, risking stroke. Increasing the warfarin dose is appropriate. Switching to apixaban is an option if warfarin fails. Aspirin alone is insufficient. Stopping warfarin increases embolic risk.'
  },
  {
    id: 14,
    question: 'A 35-year-old female presents with fatigue, weight loss, and diarrhea. Labs show low albumin and positive anti-tissue transglutaminase antibodies. What is the most likely diagnosis?',
    choices: ['Celiac disease', 'Inflammatory bowel disease', 'Irritable bowel syndrome', 'Pancreatic insufficiency'],
    correctAnswer: 'Celiac disease',
    explanation: 'Fatigue, weight loss, diarrhea, low albumin, and positive anti-tTG antibodies indicate celiac disease, a gluten-sensitive enteropathy. IBD causes bloody diarrhea and negative serology. IBS lacks malabsorption or antibodies. Pancreatic insufficiency causes steatorrhea without these antibodies.'
  },
  {
    id: 15,
    question: 'A 70-year-old male presents with dyspnea and cough. His BNP is 800 pg/mL, and chest X-ray shows pulmonary edema. What is the most appropriate diuretic?',
    choices: ['Furosemide IV', 'Hydrochlorothiazide PO', 'Spironolactone PO', 'Acetazolamide IV'],
    correctAnswer: 'Furosemide IV',
    explanation: 'Dyspnea, elevated BNP (800 pg/mL), and pulmonary edema indicate acute decompensated heart failure. IV furosemide is the first-line diuretic for rapid fluid removal. HCTZ is for mild hypertension, not acute HF. Spironolactone is adjunctive for chronic HF. Acetazolamide is for alkalosis, not HF.'
  },
  {
    id: 16,
    question: 'A 50-year-old male with HIV presents with fever, headache, and confusion. CSF shows 200 WBCs, low glucose, and budding yeast. What is the most likely pathogen?',
    choices: ['Cryptococcus neoformans', 'Streptococcus pneumoniae', 'Neisseria meningitidis', 'Mycobacterium tuberculosis'],
    correctAnswer: 'Cryptococcus neoformans',
    explanation: 'Fever, headache, confusion, and CSF with low glucose and budding yeast in HIV suggest cryptococcal meningitis. S. pneumoniae and N. meningitidis cause bacterial meningitis with different CSF profiles (polymorphs, gram-positive/negative). TB meningitis is chronic with acid-fast bacilli.'
  },
  {
    id: 17,
    question: 'A 60-year-old female presents with fatigue and pruritus. Labs show elevated alkaline phosphatase and positive anti-mitochondrial antibodies. What is the most likely diagnosis?',
    choices: ['Primary biliary cholangitis', 'Primary sclerosing cholangitis', 'Hepatitis C', 'Gallstone disease'],
    correctAnswer: 'Primary biliary cholangitis',
    explanation: 'Fatigue, pruritus, elevated ALP, and positive AMA are diagnostic for primary biliary cholangitis, an autoimmune liver disease. PSC involves bile duct strictures and IBD association. Hepatitis C causes transaminitis, not AMA positivity. Gallstones cause pain, not chronic pruritus.'
  },
  {
    id: 18,
    question: 'A 45-year-old male presents with chest pain and dyspnea. His D-dimer is elevated, and CT shows a saddle pulmonary embolism. What is the most appropriate initial therapy?',
    choices: ['Heparin IV', 'Thrombolysis', 'Warfarin PO', 'IVC filter'],
    correctAnswer: 'Heparin IV',
    explanation: 'A saddle PE with stable vitals requires immediate anticoagulation with IV heparin to prevent clot propagation. Thrombolysis is for massive PE with instability (e.g., hypotension). Warfarin is for long-term therapy after bridging. IVC filter is for anticoagulation contraindications.'
  },
  {
    id: 19,
    question: 'A 55-year-old female presents with joint pain and a butterfly rash. Labs show positive ANA and anti-dsDNA antibodies. What is the most likely diagnosis?',
    choices: ['Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Sjogren’s syndrome', 'Scleroderma'],
    correctAnswer: 'Systemic lupus erythematosus',
    explanation: 'Joint pain, malar rash, positive ANA, and anti-dsDNA are highly specific for systemic lupus erythematosus (SLE). RA involves symmetric arthritis without rash. Sjogren’s causes sicca symptoms. Scleroderma presents with skin thickening and Raynaud’s.'
  },
  {
    id: 20,
    question: 'A 65-year-old male with CKD presents with fatigue and a hemoglobin of 8 g/dL. His MCV is 80 fL, and ferritin is low. What is the most appropriate treatment?',
    choices: ['Erythropoietin SC', 'Iron supplementation', 'Blood transfusion', 'Folic acid PO'],
    correctAnswer: 'Iron supplementation',
    explanation: 'Anemia (Hb 8 g/dL), normal MCV (80 fL), and low ferritin in CKD suggest iron deficiency anemia, requiring iron supplementation first. Erythropoietin is for anemia of CKD after iron repletion. Transfusion is for severe symptoms. Folic acid treats megaloblastic anemia, not iron deficiency.'
  },
  {
    id: 21,
    question: 'A 50-year-old male presents with fever, night sweats, and weight loss. Lymph node biopsy shows Reed-Sternberg cells. What is the most likely diagnosis?',
    choices: ['Non-Hodgkin lymphoma', 'Hodgkin lymphoma', 'Tuberculosis', 'Sarcoidosis'],
    correctAnswer: 'Hodgkin lymphoma',
    explanation: 'Fever, night sweats, weight loss, and Reed-Sternberg cells are diagnostic for Hodgkin lymphoma. Non-Hodgkin lymphoma lacks these cells. TB causes granulomas, not Reed-Sternberg cells. Sarcoidosis shows non-caseating granulomas without B symptoms.'
  },
  {
    id: 22,
    question: 'A 60-year-old female with type 2 diabetes presents with confusion and a glucose of 600 mg/dL. Her serum osmolality is 320 mOsm/kg. What is the most appropriate initial therapy?',
    choices: ['IV fluids', 'Insulin IV', 'Potassium replacement', 'Sodium bicarbonate'],
    correctAnswer: 'IV fluids',
    explanation: 'Confusion, hyperglycemia (600 mg/dL), and elevated osmolality (320 mOsm/kg) suggest hyperosmolar hyperglycemic state (HHS). Initial therapy is IV fluids (normal saline) to correct dehydration. Insulin follows fluid resuscitation. Potassium is replaced later if low. Bicarbonate is for acidosis, not HHS.'
  },
  {
    id: 23,
    question: 'A 45-year-old male presents with dyspnea and hemoptysis. His chest X-ray shows diffuse alveolar hemorrhage, and labs show anti-GBM antibodies. What is the most likely diagnosis?',
    choices: ['Goodpasture syndrome', 'Wegener’s granulomatosis', 'Pulmonary embolism', 'Tuberculosis'],
    correctAnswer: 'Goodpasture syndrome',
    explanation: 'Dyspnea, hemoptysis, alveolar hemorrhage, and anti-GBM antibodies indicate Goodpasture syndrome, affecting lungs and kidneys. Wegener’s (GPA) involves ANCA, not anti-GBM. PE causes clot-related symptoms. TB presents with cavitation and chronic cough.'
  },
  {
    id: 24,
    question: 'A 70-year-old male presents with fatigue and a calcium of 12 mg/dL. His PTH is suppressed, and vitamin D is normal. What is the most likely cause?',
    choices: ['Primary hyperparathyroidism', 'Malignancy', 'Milk-alkali syndrome', 'Sarcoidosis'],
    correctAnswer: 'Malignancy',
    explanation: 'Hypercalcemia (12 mg/dL) with suppressed PTH suggests malignancy (e.g., PTHrP from cancer). Primary hyperparathyroidism raises PTH. Milk-alkali syndrome involves alkali intake history. Sarcoidosis increases vitamin D, not suppressed PTH.'
  },
  {
    id: 25,
    question: 'A 50-year-old female presents with fatigue and a TSH of 0.1 mIU/L with elevated free T4. She has a palpable thyroid nodule. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Toxic adenoma', 'Subacute thyroiditis', 'Pituitary tumor'],
    correctAnswer: 'Toxic adenoma',
    explanation: 'Low TSH, high free T4, and a thyroid nodule suggest a toxic adenoma, a hyperfunctioning nodule. Graves’ disease causes diffuse goiter and eye signs. Subacute thyroiditis is painful with transient thyrotoxicosis. Pituitary tumors raise TSH with high T4 (secondary).'
  },
  {
    id: 26,
    question: 'A 60-year-old male with hypertension presents with a serum creatinine of 2.5 mg/dL and proteinuria. His BP is 160/90 mmHg. What is the most appropriate initial therapy?',
    choices: ['ACE inhibitor', 'Calcium channel blocker', 'Beta-blocker', 'Diuretic'],
    correctAnswer: 'ACE inhibitor',
    explanation: 'Elevated creatinine, proteinuria, and hypertension suggest chronic kidney disease (CKD). ACE inhibitors (e.g., lisinopril) slow CKD progression by reducing proteinuria and intraglomerular pressure. Calcium channel blockers and beta-blockers treat BP but lack renoprotection. Diuretics manage volume but aren’t first-line.'
  },
  {
    id: 27,
    question: 'A 45-year-old female presents with fever, rash, and arthralgias after a camping trip. Labs show thrombocytopenia and elevated LFTs. What is the most likely diagnosis?',
    choices: ['Lyme disease', 'Rocky Mountain spotted fever', 'Leptospirosis', 'Viral hepatitis'],
    correctAnswer: 'Rocky Mountain spotted fever',
    explanation: 'Fever, rash, arthralgias, thrombocytopenia, and elevated LFTs post-camping suggest Rocky Mountain spotted fever (RMSF), a tick-borne rickettsial disease. Lyme causes erythema migrans. Leptospirosis involves water exposure and renal failure. Viral hepatitis lacks rash or thrombocytopenia.'
  },
  {
    id: 28,
    question: 'A 55-year-old male with COPD presents with dyspnea and a PaCO2 of 70 mmHg. His pH is 7.30. What is the most likely acid-base disorder?',
    choices: ['Acute respiratory acidosis', 'Chronic respiratory acidosis', 'Metabolic alkalosis', 'Mixed disorder'],
    correctAnswer: 'Chronic respiratory acidosis',
    explanation: 'Elevated PaCO2 (70 mmHg) with near-normal pH (7.30) in COPD suggests chronic respiratory acidosis with renal compensation (bicarbonate retention). Acute respiratory acidosis has lower pH. Metabolic alkalosis raises pH with normal PaCO2. Mixed disorders require additional abnormalities.'
  },
  {
    id: 29,
    question: 'A 60-year-old female presents with dysphagia and regurgitation. Esophageal manometry shows absent peristalsis and high LES pressure. What is the most likely diagnosis?',
    choices: ['Achalasia', 'Diffuse esophageal spasm', 'GERD', 'Esophageal cancer'],
    correctAnswer: 'Achalasia',
    explanation: 'Dysphagia, regurgitation, absent peristalsis, and high LES pressure on manometry are diagnostic for achalasia, a motility disorder. Diffuse esophageal spasm causes chest pain with uncoordinated contractions. GERD involves reflux, not high LES. Esophageal cancer causes progressive dysphagia without motility findings.'
  },
  {
    id: 30,
    question: 'A 50-year-old male presents with fatigue and a hemoglobin of 10 g/dL. His MCV is 70 fL, and iron studies show low ferritin. What is the most likely diagnosis?',
    choices: ['Iron deficiency anemia', 'Anemia of chronic disease', 'Thalassemia', 'Vitamin B12 deficiency'],
    correctAnswer: 'Iron deficiency anemia',
    explanation: 'Fatigue, low hemoglobin (10 g/dL), microcytic MCV (70 fL), and low ferritin confirm iron deficiency anemia, often from GI bleeding. Anemia of chronic disease is normocytic with high ferritin. Thalassemia has normal ferritin. B12 deficiency causes macrocytic anemia.'
  },
  {
    id: 31,
    question: 'A 65-year-old male with atrial fibrillation presents with a sudden right leg pain and numbness. His INR is 2.5. What is the most likely diagnosis?',
    choices: ['Peripheral artery disease', 'Acute arterial embolism', 'Deep vein thrombosis', 'Spinal cord infarction'],
    correctAnswer: 'Acute arterial embolism',
    explanation: 'Sudden leg pain and numbness in atrial fibrillation (INR 2.5) suggest acute arterial embolism, often from a cardiac thrombus despite therapeutic anticoagulation. PAD causes chronic claudication. DVT presents with swelling, not numbness. Spinal cord infarction affects both legs.'
  },
  {
    id: 32,
    question: 'A 40-year-old female presents with fatigue and heat intolerance. Her TSH is 0.05 mIU/L, and free T3 is elevated. What is the most appropriate next step?',
    choices: ['Thyroid uptake scan', 'Anti-thyroid antibodies', 'Thyroid ultrasound', 'Start levothyroxine'],
    correctAnswer: 'Thyroid uptake scan',
    explanation: 'Fatigue, heat intolerance, low TSH (0.05 mIU/L), and high free T3 suggest hyperthyroidism. A thyroid uptake scan distinguishes Graves’ disease (diffuse uptake) from toxic nodules. Antibodies confirm Graves’ but don’t guide therapy. Ultrasound evaluates structure, not function. Levothyroxine treats hypothyroidism, not hyperthyroidism.'
  },
  {
    id: 33,
    question: 'A 55-year-old male with hepatitis C presents with ascites and jaundice. His INR is 1.8, and albumin is 2.5 g/dL. What is the most appropriate diuretic regimen?',
    choices: ['Furosemide alone', 'Spironolactone and furosemide', 'Hydrochlorothiazide', 'Acetazolamide'],
    correctAnswer: 'Spironolactone and furosemide',
    explanation: 'Ascites, jaundice, prolonged INR, and low albumin in hepatitis C indicate cirrhosis with portal hypertension. Spironolactone (aldosterone antagonist) and furosemide (loop diuretic) together manage ascites effectively. Furosemide alone risks hypokalemia. HCTZ is weak for ascites. Acetazolamide is for alkalosis, not ascites.'
  },
  {
    id: 34,
    question: 'A 60-year-old female presents with fatigue and a serum sodium of 125 mEq/L. Her urine osmolality is 600 mOsm/kg, and serum osmolality is 270 mOsm/kg. What is the most likely diagnosis?',
    choices: ['SIADH', 'Diabetes insipidus', 'Hypovolemic hyponatremia', 'Hypervolemic hyponatremia'],
    correctAnswer: 'SIADH',
    explanation: 'Hyponatremia (Na 125 mEq/L), high urine osmolality (600 mOsm/kg), and low serum osmolality (270 mOsm/kg) suggest SIADH, causing euvolemic water retention. DI causes dilute urine. Hypovolemic hyponatremia has low urine sodium. Hypervolemic hyponatremia (e.g., CHF) involves edema.'
  },
  {
    id: 35,
    question: 'A 45-year-old male presents with chest pain and fever. His ECG shows diffuse ST elevation, and troponin is normal. What is the most likely diagnosis?',
    choices: ['Myocardial infarction', 'Pericarditis', 'Pulmonary embolism', 'Myocarditis'],
    correctAnswer: 'Pericarditis',
    explanation: 'Chest pain, fever, diffuse ST elevation, and normal troponin suggest acute pericarditis, often viral. MI has regional ST elevation and elevated troponin. PE shows right heart strain. Myocarditis mimics MI with troponin rise and focal ECG changes.'
  },
  {
    id: 36,
    question: 'A 50-year-old female with breast cancer presents with dyspnea and hypoxia. Chest X-ray shows pleural effusion, and cytology reveals malignant cells. What is the most appropriate management?',
    choices: ['Thoracentesis', 'Chemotherapy', 'Diuretics', 'Antibiotics'],
    correctAnswer: 'Thoracentesis',
    explanation: 'Dyspnea, hypoxia, and malignant pleural effusion require thoracentesis for symptom relief and diagnosis confirmation. Chemotherapy addresses the underlying cancer but not acute symptoms. Diuretics treat CHF effusions, not malignancy. Antibiotics are for infection, not cancer.'
  },
  {
    id: 37,
    question: 'A 60-year-old male with diabetes presents with foot pain and a non-healing ulcer. X-ray shows osteomyelitis. What is the most appropriate antibiotic duration?',
    choices: ['2 weeks', '4-6 weeks', '10 days', '3 months'],
    correctAnswer: '4-6 weeks',
    explanation: 'Diabetic foot ulcer with osteomyelitis requires 4-6 weeks of antibiotics (e.g., vancomycin, piperacillin-tazobactam) based on bone penetration and culture. Shorter courses (10 days, 2 weeks) treat soft tissue only. 3 months is for chronic osteomyelitis or hardware.'
  },
  {
    id: 38,
    question: 'A 55-year-old female presents with fatigue and a hemoglobin of 9 g/dL. Her MCV is 100 fL, and B12 level is low. What is the most appropriate treatment?',
    choices: ['Iron PO', 'Vitamin B12 IM', 'Folic acid PO', 'Blood transfusion'],
    correctAnswer: 'Vitamin B12 IM',
    explanation: 'Fatigue, anemia (Hb 9 g/dL), macrocytic MCV (100 fL), and low B12 indicate B12 deficiency, treated with IM B12 (e.g., pernicious anemia). Iron is for microcytic anemia. Folic acid treats folate deficiency, not B12. Transfusion is for severe symptomatic anemia.'
  },
  {
    id: 39,
    question: 'A 65-year-old male presents with weight loss and abdominal pain. CT shows a pancreatic mass, and CA 19-9 is elevated. What is the most likely diagnosis?',
    choices: ['Pancreatic adenocarcinoma', 'Chronic pancreatitis', 'Pancreatic pseudocyst', 'Neuroendocrine tumor'],
    correctAnswer: 'Pancreatic adenocarcinoma',
    explanation: 'Weight loss, abdominal pain, pancreatic mass, and elevated CA 19-9 suggest pancreatic adenocarcinoma, a common malignancy. Chronic pancreatitis causes pain without a mass or marker elevation. Pseudocysts follow pancreatitis. Neuroendocrine tumors (e.g., insulinoma) have hormonal symptoms.'
  },
  {
    id: 40,
    question: 'A 50-year-old male with hypertension presents with a BP of 200/110 mmHg and papilledema. His creatinine is 1.8 mg/dL. What is the most appropriate initial therapy?',
    choices: ['Nitroprusside IV', 'Labetalol IV', 'Amlodipine PO', 'Hydrochlorothiazide PO'],
    correctAnswer: 'Labetalol IV',
    explanation: 'Severe hypertension (200/110 mmHg) with papilledema and renal dysfunction indicates hypertensive emergency. IV labetalol provides controlled BP reduction to prevent organ damage. Nitroprusside is reserved for refractory cases. Oral meds (amlodipine, HCTZ) are too slow for acute management.'
  },
  {
    id: 41,
    question: 'A 58-year-old male with type 2 diabetes and hypertension presents with a 3-day history of progressive dyspnea, orthopnea, and a new S3 gallop on exam. His BNP is 1200 pg/mL, chest X-ray shows bilateral pleural effusions, and ECG reveals new Q waves in V1-V3. Despite IV furosemide, his oxygen saturation remains 88% on 4L nasal cannula. What is the most likely underlying etiology driving his current presentation?',
    choices: ['Acute decompensated heart failure from ischemic cardiomyopathy', 'Pulmonary embolism with right heart strain', 'Bacterial pneumonia with parapneumonic effusion', 'Pericardial effusion with tamponade'],
    correctAnswer: 'Acute decompensated heart failure from ischemic cardiomyopathy',
    explanation: 'This patient’s presentation—progressive dyspnea, orthopnea, S3 gallop, elevated BNP (1200 pg/mL), bilateral pleural effusions, and new Q waves in V1-V3—points to acute decompensated heart failure (ADHF) precipitated by ischemic cardiomyopathy. The Q waves suggest a prior anterior wall myocardial infarction (MI), likely silent given his diabetes, which blunts pain perception. This chronic ischemic damage has led to systolic dysfunction, now acutely worsened, possibly by ischemia or volume overload. BNP elevation strongly supports heart failure over other causes, as levels >500 pg/mL are highly specific for ADHF. The lack of response to furosemide indicates severe pump failure or diuretic resistance, common in advanced cardiomyopathy, and persistent hypoxia reflects pulmonary edema. Pulmonary embolism (PE) could cause dyspnea and hypoxia, but bilateral effusions, S3, and Q waves are inconsistent; PE typically shows right heart strain (e.g., S1Q3T3) on ECG. Bacterial pneumonia might cause effusions, but the absence of fever, cough, or consolidation on X-ray, plus the cardiac findings, makes this less likely. Pericardial effusion with tamponade could mimic dyspnea and hypoxia, but the absence of jugular venous distension, muffled heart sounds, or pulsus paradoxus, and presence of S3 and Q waves, rules it out. Thus, ADHF from ischemic cardiomyopathy is the most cohesive diagnosis.'
  },
  {
    id: 42,
    question: 'A 62-year-old female with rheumatoid arthritis on methotrexate presents with fatigue, jaundice, and right upper quadrant pain. Labs show AST 450 U/L, ALT 520 U/L, ALP 300 U/L, bilirubin 4.5 mg/dL, and INR 1.6. Ultrasound reveals hepatomegaly without biliary obstruction. What is the most likely cause of her liver injury?',
    choices: ['Methotrexate-induced hepatotoxicity', 'Autoimmune hepatitis', 'Primary biliary cholangitis', 'Viral hepatitis B reactivation'],
    correctAnswer: 'Methotrexate-induced hepatotoxicity',
    explanation: 'This patient’s acute liver injury—marked by elevated transaminases (AST 450 U/L, ALT 520 U/L), ALP (300 U/L), bilirubin (4.5 mg/dL), and INR (1.6)—in the context of rheumatoid arthritis (RA) and methotrexate use strongly suggests methotrexate-induced hepatotoxicity. Methotrexate, a folate antagonist, is metabolized by the liver and can cause dose-dependent toxicity, ranging from steatosis to fibrosis and acute hepatitis, especially with cumulative doses or risk factors like obesity or alcohol use (not specified here but common confounders). The mixed hepatocellular (high AST/ALT) and cholestatic (elevated ALP) pattern, plus coagulopathy (INR 1.6), aligns with severe drug-induced liver injury (DILI). Ultrasound showing hepatomegaly without obstruction excludes mechanical causes like gallstones. Autoimmune hepatitis (AIH) is a consideration given RA, but it typically presents with antinuclear antibodies (ANA) or anti-smooth muscle antibodies (ASMA), not mentioned here, and a more chronic course with interface hepatitis on biopsy, which isn’t indicated yet. Primary biliary cholangitis (PBC) features anti-mitochondrial antibodies (AMA) and a predominant ALP elevation, not this transaminase-heavy picture. Viral hepatitis B reactivation could occur with immunosuppression, but the absence of HBsAg or HBV DNA data, and the acute onset tied to methotrexate, makes this less likely. Methotrexate withdrawal and supportive care are critical, with potential N-acetylcysteine use in severe cases, making this the most probable diagnosis.'
  },
  {
    id: 43,
    question: 'A 47-year-old male with a history of alcohol use disorder presents with confusion, ataxia, and ophthalmoplegia. His glucose is 90 mg/dL, and thiamine is administered empirically. Brain MRI shows hyperintensities in the mammillary bodies and periaqueductal gray. Despite thiamine, his symptoms persist after 48 hours. What is the most likely explanation for his ongoing neurologic deficits?',
    choices: ['Irreversible Wernicke encephalopathy', 'Osmotic demyelination syndrome', 'Hepatic encephalopathy', 'Stroke in the posterior circulation'],
    correctAnswer: 'Irreversible Wernicke encephalopathy',
    explanation: 'This patient’s triad of confusion, ataxia, and ophthalmoplegia, combined with MRI findings of hyperintensities in the mammillary bodies and periaqueductal gray, is classic for Wernicke encephalopathy (WE), a thiamine deficiency state common in chronic alcoholism. Thiamine was appropriately given empirically, as WE is a medical emergency, and glucose administration without thiamine can worsen it by depleting reserves. However, persistent symptoms after 48 hours suggest irreversible damage, likely Korsakoff syndrome, a chronic sequela of WE with amnesia and confabulation due to neuronal loss in these regions. The MRI findings confirm the diagnosis, as these areas are selectively vulnerable to thiamine deficiency. Osmotic demyelination syndrome (ODS) could cause persistent neurologic deficits, but it’s linked to rapid sodium correction (not mentioned), and MRI would show pontine or extrapontine lesions, not mammillary involvement. Hepatic encephalopathy (HE) might cause confusion in an alcoholic, but it requires liver dysfunction (e.g., elevated ammonia), lacks ophthalmoplegia, and responds to lactulose, not thiamine. Posterior circulation stroke could mimic ataxia and eye findings, but the bilateral MRI pattern and alcohol history favor WE. The lack of improvement reflects delayed treatment or severe initial injury, making irreversible WE the most likely explanation.'
  },
  {
    id: 44,
    question: 'A 70-year-old male with CKD stage 4 presents with fatigue, dyspnea, and a hemoglobin of 7.5 g/dL. His MCV is 85 fL, ferritin is 50 ng/mL, and TSAT is 15%. Erythropoietin levels are elevated. He has no overt bleeding. What is the most appropriate next step in managing his anemia?',
    choices: ['Initiate IV iron therapy', 'Start erythropoiesis-stimulating agent (ESA)', 'Transfuse packed red blood cells', 'Order colonoscopy to rule out GI bleeding'],
    correctAnswer: 'Initiate IV iron therapy',
    explanation: 'This patient with CKD stage 4 presents with severe anemia (Hb 7.5 g/dL), normocytic MCV (85 fL), low ferritin (50 ng/mL), and low transferrin saturation (TSAT 15%), despite elevated erythropoietin levels, indicating anemia of chronic kidney disease (CKD) with functional iron deficiency. In CKD, erythropoietin production is impaired, but levels may be inappropriately high relative to anemia severity due to inflammation or hypoxia, yet insufficient to correct it. The low ferritin and TSAT suggest inadequate iron stores or availability for erythropoiesis, common in CKD due to chronic inflammation (hepcidin-mediated iron sequestration) rather than absolute deficiency. IV iron therapy is the most appropriate next step to replete iron and support red cell production, as oral iron is poorly absorbed in CKD due to hepcidin. Starting an ESA (e.g., darbepoetin) without correcting iron deficiency is less effective and risks hypertension or thrombosis, per KDIGO guidelines, which recommend iron repletion first if TSAT <30% and ferritin <500 ng/mL. Transfusion is reserved for symptomatic anemia (e.g., tachycardia, hypoxia), not specified here, and carries risks like volume overload in CKD. Colonoscopy is reasonable for occult GI bleeding, but no melena, hematochezia, or iron-deficiency pattern (microcytic anemia) is present, making this less urgent. IV iron addresses the immediate pathophysiology and is the best initial step.'
  },
  {
    id: 45,
    question: 'A 52-year-old female with systemic lupus erythematosus (SLE) presents with chest pain, dyspnea, and a new pericardial friction rub. Her ESR is 80 mm/hr, ANA is positive, and echocardiography shows a moderate pericardial effusion without tamponade. Labs reveal a creatinine of 2.2 mg/dL and proteinuria of 2 g/day. What is the most appropriate initial therapy to address her multiorgan involvement?',
    choices: ['High-dose prednisone', 'Cyclophosphamide IV', 'Colchicine PO', 'NSAIDs'],
    correctAnswer: 'High-dose prednisone',
    explanation: 'This patient with SLE presents with pericarditis (chest pain, friction rub, effusion) and lupus nephritis (creatinine 2.2 mg/dL, proteinuria 2 g/day), indicating active multiorgan disease. The elevated ESR (80 mm/hr) and positive ANA support an SLE flare. High-dose prednisone (e.g., 1 mg/kg/day) is the most appropriate initial therapy to rapidly suppress inflammation across these systems, per ACR guidelines for lupus flares. Pericarditis in SLE responds well to corticosteroids, avoiding progression to tamponade, while early nephritis benefits from prompt immunosuppression to prevent irreversible renal damage. Cyclophosphamide IV is used for severe lupus nephritis (e.g., class III/IV on biopsy) or refractory disease, but biopsy confirmation and slower onset make it a second step here; her moderate renal involvement doesn’t yet mandate it. Colchicine is effective for idiopathic or viral pericarditis but not SLE-related, where systemic inflammation drives the process. NSAIDs (e.g., ibuprofen) may relieve mild pericarditis symptoms but are contraindicated with her renal dysfunction (creatinine 2.2 mg/dL) due to risk of worsening GFR and are insufficient for nephritis. High-dose prednisone balances efficacy and speed, addressing both pericardial and renal manifestations as a bridge to further workup (e.g., renal biopsy).'
  },
  {
    id: 46,
    question: 'A 65-year-old male with a 40-pack-year smoking history presents with progressive dyspnea, weight loss, and hemoptysis. Chest CT reveals a 3 cm spiculated lung mass and mediastinal lymphadenopathy. Biopsy shows small cell lung cancer (SCLC). His sodium is 128 mEq/L, serum osmolality is 260 mOsm/kg, and urine osmolality is 500 mOsm/kg. What is the most appropriate initial management of his hyponatremia?',
    choices: ['3% hypertonic saline IV', 'Fluid restriction', 'Tolvaptan PO', 'Demeclocycline PO'],
    correctAnswer: 'Fluid restriction',
    explanation: 'This patient with small cell lung cancer (SCLC) presents with hyponatremia (Na 128 mEq/L), low serum osmolality (260 mOsm/kg), and high urine osmolality (500 mOsm/kg), consistent with the syndrome of inappropriate antidiuretic hormone secretion (SIADH), a paraneoplastic syndrome common in SCLC due to ectopic ADH production. The euvolemic state (no edema or dehydration) and concentrated urine despite low serum osmolality confirm SIADH. Fluid restriction (e.g., 800-1000 mL/day) is the most appropriate initial management to correct sodium by reducing water retention, as it addresses the underlying pathophysiology without immediate risk. 3% hypertonic saline IV is reserved for severe symptomatic hyponatremia (e.g., seizures, Na <120 mEq/L), which isn’t present here; rapid correction risks osmotic demyelination syndrome (ODS), especially in chronic cases like paraneoplastic SIADH. Tolvaptan, a V2 receptor antagonist, corrects SIADH but is costly, requires monitoring for hepatotoxicity, and is typically second-line after fluid restriction fails. Demeclocycline inhibits ADH action but has a slow onset (days) and nephrotoxicity risks, making it less ideal acutely. Fluid restriction aligns with guidelines (e.g., Endocrine Society), balancing efficacy and safety while awaiting oncology treatment to address the SCLC source.'
  },
  {
    id: 47,
    question: 'A 38-year-old female with a history of migraines presents with fatigue, polyuria, and a serum calcium of 11.2 mg/dL. Her PTH is 80 pg/mL (normal 15-65), phosphorus is 2.0 mg/dL, and 25-hydroxyvitamin D is 35 ng/mL. Imaging shows a single parathyroid adenoma. She has no kidney stones or osteoporosis. What is the most appropriate management given her asymptomatic presentation?',
    choices: ['Parathyroidectomy', 'Observation with serial monitoring', 'Cinacalcet PO', 'Bisphosphonate IV'],
    correctAnswer: 'Observation with serial monitoring',
    explanation: 'This patient has mild hypercalcemia (11.2 mg/dL), elevated PTH (80 pg/mL), low phosphorus (2.0 mg/dL), and a parathyroid adenoma, confirming primary hyperparathyroidism (PHPT). However, she’s asymptomatic (no stones, fractures, or severe symptoms), and her calcium is <12 mg/dL, prompting consideration of surgical vs. medical management. Per Endocrine Society guidelines, asymptomatic PHPT can be observed if the patient is <50 years old (she’s 38), but only if calcium is <1 mg/dL above normal (here, ~10.5 mg/dL upper limit, so 11.2 is close), and there’s no end-organ damage (e.g., osteoporosis, renal impairment), which isn’t present. Observation with serial monitoring (calcium, PTH, bone density, renal function) is appropriate to detect progression, avoiding surgery’s risks (e.g., hypoparathyroidism) in a stable case. Parathyroidectomy is definitive and indicated for symptomatic PHPT, age <50 (a relative indication), or calcium >12 mg/dL, but her mild presentation doesn’t mandate it yet. Cinacalcet lowers calcium by sensitizing the calcium-sensing receptor but is costly, used for inoperable cases, and unnecessary here without symptoms. Bisphosphonates (e.g., zoledronic acid) treat hypercalcemia or bone loss but aren’t first-line for PHPT without osteoporosis. Observation balances her young age and mild disease, with surgery reserved for progression.'
  },
  {
    id: 48,
    question: 'A 60-year-old male with cirrhosis from hepatitis C presents with worsening ascites and a fever of 38.5°C. Paracentesis yields cloudy fluid with 350 PMNs/µL, total protein 1.2 g/dL, and Gram stain negative. His serum albumin is 2.8 g/dL, and SAAG is 1.5 g/dL. What is the most appropriate antibiotic regimen?',
    choices: ['Ceftriaxone IV', 'Vancomycin IV', 'Levofloxacin PO', 'Piperacillin-tazobactam IV'],
    correctAnswer: 'Ceftriaxone IV',
    explanation: 'This patient with cirrhosis presents with fever, worsening ascites, and paracentesis showing 350 PMNs/µL, indicating spontaneous bacterial peritonitis (SBP), a common complication of portal hypertension. The SAAG (1.5 g/dL) confirms portal hypertension, and low ascites protein (1.2 g/dL) reflects high risk for SBP. The negative Gram stain is typical, as cultures are often negative in SBP due to low bacterial load. Ceftriaxone IV (e.g., 1-2 g daily) is the most appropriate empiric therapy per AASLD guidelines, covering common pathogens like Escherichia coli, Klebsiella, and Streptococcus pneumoniae, with excellent peritoneal penetration. It’s preferred over broader-spectrum agents unless resistance or hospital-acquired infection is suspected. Vancomycin targets gram-positive organisms (e.g., MRSA) but misses gram-negative coverage critical for SBP. Levofloxacin PO is an alternative for outpatient prophylaxis or mild cases, but IV therapy is needed here given fever and severity. Piperacillin-tazobactam is overly broad for community-acquired SBP and reserved for complicated or nosocomial infections. Ceftriaxone’s efficacy, narrow spectrum, and guideline support make it the best choice, with albumin IV (1.5 g/kg) as adjunctive therapy to prevent hepatorenal syndrome.'
  },
  {
    id: 49,
    question: 'A 55-year-old female with type 2 diabetes on metformin and insulin presents with nausea, lethargy, and a pH of 7.15. Her glucose is 180 mg/dL, anion gap is 25 mEq/L, and lactate is 6 mmol/L. She has no fever or hypoxia. What is the most likely cause of her acid-base disturbance?',
    choices: ['Diabetic ketoacidosis', 'Metformin-associated lactic acidosis', 'Sepsis-induced lactic acidosis', 'Renal tubular acidosis'],
    correctAnswer: 'Metformin-associated lactic acidosis',
    explanation: 'This patient’s presentation—nausea, lethargy, metabolic acidosis (pH 7.15), elevated anion gap (25 mEq/L), and lactate (6 mmol/L)—with type 2 diabetes on metformin points to metformin-associated lactic acidosis (MALA). Metformin inhibits mitochondrial respiration, increasing lactate production, especially in states impairing clearance (e.g., renal dysfunction, not specified but plausible with diabetes). Her glucose (180 mg/dL) is modestly elevated, ruling out diabetic ketoacidosis (DKA), which requires hyperglycemia (>250 mg/dL), ketonemia, and insulin deficiency, more typical in type 1 diabetes. The absence of fever, hypoxia, or infection signs makes sepsis-induced lactic acidosis unlikely, though it’s a differential in shock states; here, no such clues exist. Renal tubular acidosis (RTA) causes non-anion gap acidosis (e.g., hyperchloremic), not this picture. MALA is rare but life-threatening, with risk factors like dehydration or renal impairment (creatinine not given but inferred). Treatment involves stopping metformin, IV bicarbonate if pH <7.1, and hemodialysis for severe cases (lactate >5 mmol/L, as here). The clinical context, labs, and metformin use make MALA the most cohesive diagnosis over DKA or sepsis.'
  },
  {
    id: 50,
    question: 'A 68-year-old male with atrial fibrillation on warfarin presents with melena and a hemoglobin drop from 12 to 8 g/dL. His INR is 5.5, BP is 100/60 mmHg, and HR is 110 bpm. What is the most appropriate reversal strategy given his hemodynamic instability?',
    choices: ['Vitamin K IV alone', 'Prothrombin complex concentrate (PCC) and vitamin K IV', 'Fresh frozen plasma (FFP) and vitamin K IV', 'Tranexamic acid IV'],
    correctAnswer: 'Prothrombin complex concentrate (PCC) and vitamin K IV',
    explanation: 'This patient with atrial fibrillation on warfarin presents with GI bleeding (melena), anemia (Hb 8 g/dL), supratherapeutic INR (5.5), and hemodynamic instability (BP 100/60 mmHg, HR 110 bpm), necessitating urgent reversal of anticoagulation. Prothrombin complex concentrate (PCC) combined with IV vitamin K is the most appropriate strategy per ACCP and ASH guidelines. PCC (e.g., 4-factor PCC) rapidly replaces clotting factors (II, VII, IX, X) depleted by warfarin, correcting INR within minutes, critical for active bleeding and instability. Vitamin K IV (e.g., 10 mg) ensures sustained reversal by promoting endogenous factor synthesis, as PCC’s effect wanes in 6-12 hours. Vitamin K alone is too slow (onset 6-24 hours) for acute hemorrhage, failing to address immediate risk. Fresh frozen plasma (FFP) also replaces factors but requires larger volumes (10-15 mL/kg), delaying correction and risking volume overload in an unstable patient; it’s less concentrated than PCC (e.g., 25-50 units/kg). Tranexamic acid stabilizes clots but doesn’t reverse warfarin’s anticoagulant effect, making it adjunctive at best. PCC’s speed, efficacy, and lower volume, paired with vitamin K’s durability, make this the optimal choice for this life-threatening scenario.'
  },
  {
    id: 51,
    question: 'A 45-year-old male with HIV (CD4 150 cells/µL) presents with a 2-week history of dry cough, dyspnea, and fever. Chest X-ray shows bilateral interstitial infiltrates, and LDH is 600 U/L. His PaO2 is 60 mmHg on room air. What is the most likely diagnosis requiring urgent treatment?',
    choices: ['Pneumocystis jirovecii pneumonia', 'Tuberculosis', 'Bacterial pneumonia', 'Cryptococcal pneumonia'],
    correctAnswer: 'Pneumocystis jirovecii pneumonia',
    explanation: 'This patient with HIV (CD4 150 cells/µL) presents with subacute dry cough, dyspnea, fever, bilateral interstitial infiltrates, elevated LDH (600 U/L), and hypoxemia (PaO2 60 mmHg), strongly suggesting Pneumocystis jirovecii pneumonia (PJP), an opportunistic infection common when CD4 <200 cells/µL. PJP typically causes insidious onset, diffuse infiltrates, and high LDH due to lung injury, with hypoxemia reflecting impaired gas exchange. Urgent treatment with trimethoprim-sulfamethoxazole (TMP-SMX) and steroids (for PaO2 <70 mmHg) is critical to reduce mortality. Tuberculosis (TB) can present with infiltrates in HIV, but it’s more chronic, often cavitary in reactivation, and lacks this LDH elevation; AFB staining or GeneXpert would clarify, but PJP fits better acutely. Bacterial pneumonia (e.g., Streptococcus pneumoniae) causes lobar consolidation, productive cough, and acute onset, not interstitial patterns or high LDH. Cryptococcal pneumonia is rare, typically with nodules or masses, and associated with meningitis (not present). The CD4 count, subacute course, and classic radiologic/laboratory findings make PJP the most likely diagnosis requiring immediate intervention.'
  },
  {
    id: 52,
    question: 'A 72-year-old female with hypertension and osteoporosis presents with acute back pain after lifting groceries. Spine X-ray shows a T12 compression fracture, and labs reveal a calcium of 12.5 mg/dL, PTH <10 pg/mL, and 25-hydroxyvitamin D of 20 ng/mL. What is the most likely underlying cause of her hypercalcemia?',
    choices: ['Primary hyperparathyroidism', 'Malignancy-associated hypercalcemia', 'Vitamin D toxicity', 'Milk-alkali syndrome'],
    correctAnswer: 'Malignancy-associated hypercalcemia',
    explanation: 'This patient’s acute back pain, T12 compression fracture, hypercalcemia (12.5 mg/dL), and suppressed PTH (<10 pg/mL) suggest malignancy-associated hypercalcemia, likely from osteolytic metastases or parathyroid hormone-related protein (PTHrP) secretion. Compression fractures in the elderly raise suspicion for multiple myeloma or metastatic cancer (e.g., breast, lung), which release cytokines (e.g., RANKL) or PTHrP, driving bone resorption and calcium release while suppressing endogenous PTH. Primary hyperparathyroidism (PHPT) causes elevated PTH (not suppressed), typically with milder hypercalcemia and stones/osteoporosis, not acute fractures unless severe. Vitamin D toxicity elevates 25-hydroxyvitamin D (>100 ng/mL), not 20 ng/mL as here, and suppresses PTH but lacks fracture association without overdose history. Milk-alkali syndrome requires alkali and calcium intake (e.g., supplements), not indicated, and presents with metabolic alkalosis. The fracture, severe hypercalcemia, and PTH suppression point to malignancy, necessitating workup (e.g., SPEP, PTHrP, imaging) and treatment (IV fluids, bisphosphonates) over PHPT or other causes.'
  },
  {
    id: 53,
    question: 'A 50-year-old male with alcoholic cirrhosis presents with hematemesis and hypotension (BP 85/50 mmHg). Endoscopy reveals bleeding esophageal varices. After octreotide and banding, his hemoglobin stabilizes at 9 g/dL, but he develops oliguria and a creatinine rise from 1.0 to 2.5 mg/dL over 48 hours. What is the most appropriate next step to prevent further renal deterioration?',
    choices: ['Albumin IV', 'Terlipressin IV', 'Furosemide IV', 'Hemodialysis'],
    correctAnswer: 'Albumin IV',
    explanation: 'This patient with alcoholic cirrhosis, variceal bleeding, and subsequent oliguria with creatinine rise (1.0 to 2.5 mg/dL) likely has hepatorenal syndrome (HRS), a functional renal failure from splanchnic vasodilation and reduced renal perfusion post-hemorrhage. Diagnostic criteria (e.g., EASL) include acute kidney injury (AKI) after GI bleeding, no shock after resuscitation, and no nephrotoxins, fitting this scenario. Albumin IV (1 g/kg on day 1, then 20-40 g/day) is the most appropriate next step to expand intravascular volume, improve renal perfusion, and prevent HRS progression, as shown in trials (e.g., ANSWER study) reducing mortality when paired with vasoconstrictors like octreotide (already given). Terlipressin IV, a vasopressin analog, also treats HRS by constricting splanchnic vessels, but it’s typically combined with albumin, not standalone, and less available in some regions (e.g., U.S.) compared to octreotide. Furosemide worsens volume depletion in HRS, contraindicated here. Hemodialysis is for refractory AKI or electrolyte imbalance, not initial prevention, and lacks evidence in early HRS. Albumin’s volume expansion and anti-inflammatory effects make it the best choice to halt renal decline.'
  },
  {
    id: 54,
    question: 'A 35-year-old female with a family history of sudden cardiac death presents with palpitations and syncope. ECG shows a prolonged QTc of 500 ms, and genetic testing reveals a KCNQ1 mutation. She is not on QT-prolonging drugs. What is the most appropriate long-term management to reduce her risk of ventricular arrhythmias?',
    choices: ['Beta-blocker therapy', 'Implantable cardioverter-defibrillator (ICD)', 'Amiodarone PO', 'Magnesium sulfate IV'],
    correctAnswer: 'Beta-blocker therapy',
    explanation: 'This patient with palpitations, syncope, prolonged QTc (500 ms), and a KCNQ1 mutation has congenital long QT syndrome (LQTS) type 1, an inherited channelopathy predisposing to torsades de pointes and sudden cardiac death (SCD). The family history reinforces this high-risk diagnosis. Beta-blocker therapy (e.g., nadolol or propranolol) is the most appropriate long-term management per AHA/ACC guidelines, reducing sympathetic triggers of arrhythmias, especially in LQT1, where exercise or stress (via KCNQ1 potassium channel dysfunction) precipitates events. Trials like the International LQTS Registry show beta-blockers reduce SCD risk by >70% in symptomatic patients. An implantable cardioverter-defibrillator (ICD) is indicated for secondary prevention (e.g., cardiac arrest survivors) or high-risk primary prevention (e.g., QTc >550 ms with syncope despite beta-blockers), but her first syncopal event and QTc 500 ms don’t yet meet this threshold; beta-blockers are trialed first. Amiodarone prolongs QT further, risking torsades, and is contraindicated in LQTS. Magnesium sulfate IV treats acute torsades but isn’t long-term prophylaxis. Beta-blockers balance efficacy, safety, and guideline support for her risk profile.'
  },
  {
    id: 55,
    question: 'A 60-year-old male with COPD and a 50-pack-year smoking history presents with progressive dyspnea and a barrel chest. His FEV1 is 35% predicted, and CT shows upper lobe predominant emphysema. He develops a pneumothorax requiring chest tube placement. Post-discharge, he remains oxygen-dependent (PaO2 55 mmHg on room air). What is the most appropriate intervention to improve his long-term prognosis?',
    choices: ['Lung volume reduction surgery', 'Long-term oxygen therapy', 'Pulmonary rehabilitation', 'Lung transplantation'],
    correctAnswer: 'Long-term oxygen therapy',
    explanation: 'This patient with severe COPD (FEV1 35% predicted), upper lobe emphysema, and hypoxemia (PaO2 55 mmHg) post-pneumothorax meets criteria for long-term oxygen therapy (LTOT), the most appropriate intervention to improve survival per GOLD guidelines. The MRC and NOTT trials demonstrate LTOT (≥15 hours/day) reduces mortality in COPD with resting PaO2 ≤55 mmHg or ≤60 mmHg with cor pulmonale, by alleviating hypoxic pulmonary vasoconstriction and right heart strain. His barrel chest and CT findings confirm advanced emphysema, and oxygen dependence post-pneumothorax underscores chronicity. Lung volume reduction surgery (LVRS) benefits select patients with upper lobe emphysema and FEV1 >20%, improving dyspnea and exercise capacity (NETT trial), but his recent pneumothorax increases surgical risk, and LTOT addresses hypoxemia directly. Pulmonary rehabilitation enhances quality of life and function but doesn’t alter survival like LTOT. Lung transplantation is for end-stage disease (e.g., FEV1 <20%, hypercapnia), not yet indicated here. LTOT’s mortality benefit and applicability make it the best long-term strategy.'
  },
  {
    id: 56,
    question: 'A 48-year-old female with obesity and type 2 diabetes presents with right upper quadrant pain, fever, and jaundice. Ultrasound shows gallstones and a thickened gallbladder wall. Labs reveal AST 80 U/L, ALT 90 U/L, ALP 250 U/L, and bilirubin 3.5 mg/dL. Her BP drops to 90/50 mmHg despite fluids. What is the most appropriate next step in management?',
    choices: ['Emergent cholecystectomy', 'Endoscopic retrograde cholangiopancreatography (ERCP)', 'Broad-spectrum antibiotics IV', 'Percutaneous cholecystostomy'],
    correctAnswer: 'Broad-spectrum antibiotics IV',
    explanation: 'This patient with obesity, diabetes, right upper quadrant pain, fever, jaundice, gallstones, and hypotension (90/50 mmHg) despite fluids has acute cholangitis complicating cholecystitis, likely from choledocholithiasis. The Charcot triad (pain, fever, jaundice) and Reynolds pentad (adding hypotension and mental status changes, latter not specified) suggest severe biliary infection with sepsis. Ultrasound confirms gallstones and inflammation (thickened wall), while labs show a mixed cholestatic (ALP 250 U/L, bilirubin 3.5 mg/dL) and hepatocellular (AST 80 U/L, ALT 90 U/L) pattern. Broad-spectrum antibiotics IV (e.g., piperacillin-tazobactam or ceftriaxone plus metronidazole) are the most appropriate next step per Tokyo Guidelines (TG18), targeting gram-negative (E. coli, Klebsiella) and anaerobic pathogens, stabilizing sepsis before definitive intervention. Emergent cholecystectomy is risky in septic shock without source control. ERCP is indicated for biliary decompression but follows antibiotics and resuscitation in unstable patients; her hypotension prioritizes medical stabilization. Percutaneous cholecystostomy drains the gallbladder in high-risk surgical candidates but doesn’t address common bile duct obstruction causing cholangitis. Antibiotics initiate sepsis management, enabling safer subsequent ERCP or surgery.'
  },
  {
    id: 57,
    question: 'A 65-year-old male with hypertension and CKD stage 3 presents with a serum potassium of 6.8 mEq/L, peaked T waves on ECG, and a creatinine of 2.8 mg/dL. He takes lisinopril and spironolactone. What is the most appropriate sequence of interventions to address his hyperkalemia?',
    choices: ['Calcium gluconate IV, then insulin/glucose IV', 'Sodium polystyrene sulfonate PO, then furosemide IV', 'Bicarbonate IV, then hemodialysis', 'Stop spironolactone, then albuterol nebulizer'],
    correctAnswer: 'Calcium gluconate IV, then insulin/glucose IV',
    explanation: 'This patient with CKD stage 3, hypertension, and hyperkalemia (K 6.8 mEq/L) with ECG changes (peaked T waves) faces a life-threatening risk of arrhythmias from medications (lisinopril, spironolactone) impairing potassium excretion. The most appropriate sequence is calcium gluconate IV followed by insulin/glucose IV. Calcium gluconate (e.g., 10 mL of 10% solution) stabilizes cardiac membranes within minutes, countering hyperkalemia’s depolarization effects, critical given ECG findings; it doesn’t lower potassium but buys time. Insulin (10 units IV) with glucose (25 g D50) then shifts potassium intracellularly within 20-30 minutes, reducing serum levels by 0.5-1 mEq/L, per KDIGO and AHA guidance. Sodium polystyrene sulfonate (SPS) removes potassium but acts slowly (hours) and risks bowel necrosis, making it less urgent than stabilization/shifting. Furosemide requires adequate renal function, ineffective here with CKD (Cr 2.8 mg/dL). Bicarbonate shifts potassium but is for acidosis (not specified) and slower than insulin; hemodialysis is for refractory cases, not initial management with intact urine output presumed. Stopping spironolactone prevents recurrence but doesn’t address acute hyperkalemia; albuterol shifts potassium but is adjunctive, not primary with ECG changes. This sequence prioritizes cardiac protection and rapid potassium reduction.'
  },
  {
    id: 58,
    question: 'A 42-year-old male with ulcerative colitis presents with bloody diarrhea, fatigue, and a hemoglobin of 9 g/dL. His ESR is 60 mm/hr, and colonoscopy shows continuous inflammation from rectum to transverse colon. He’s on mesalamine, but symptoms persist. What is the most appropriate escalation in therapy?',
    choices: ['Oral prednisone', 'Infliximab IV', 'Azathioprine PO', 'Colectomy'],
    correctAnswer: 'Oral prednisone',
    explanation: 'This patient with ulcerative colitis (UC) has moderate-to-severe disease—bloody diarrhea, anemia (Hb 9 g/dL), elevated ESR (60 mm/hr), and extensive colitis—uncontrolled on mesalamine, a 5-ASA agent for mild UC. Oral prednisone (e.g., 40-60 mg/day) is the most appropriate escalation per AGA guidelines to induce remission in moderate flares, rapidly reducing inflammation via systemic corticosteroid effects. It bridges to maintenance therapy, avoiding biologics’ delay or surgery’s invasiveness initially. Infliximab IV, an anti-TNF agent, is effective for steroid-refractory or severe UC, but its onset (days-weeks) and cost make it second-line after steroids fail; no refractory history is given. Azathioprine, a thiopurine, maintains remission but takes 2-3 months to act, unsuitable for acute flares. Colectomy is for fulminant UC, toxic megacolon, or refractory disease, not yet indicated with viable medical options. Prednisone’s speed, efficacy, and guideline support make it the best next step, with tapering planned once remission is achieved.'
  },
  {
    id: 59,
    question: 'A 70-year-old female with rheumatoid arthritis on hydroxychloroquine presents with progressive dyspnea and a non-productive cough. Chest CT shows ground-glass opacities and honeycombing in the lower lobes. PFTs reveal a restrictive pattern with DLCO 40% predicted. What is the most likely diagnosis driving her pulmonary symptoms?',
    choices: ['Rheumatoid arthritis-associated interstitial lung disease', 'Hydroxychloroquine-induced pneumonitis', 'Congestive heart failure', 'Chronic hypersensitivity pneumonitis'],
    correctAnswer: 'Rheumatoid arthritis-associated interstitial lung disease',
    explanation: 'This patient with rheumatoid arthritis (RA) presents with progressive dyspnea, dry cough, CT findings of ground-glass opacities and honeycombing, and restrictive PFTs with low DLCO (40% predicted), pointing to RA-associated interstitial lung disease (RA-ILD), a serious extra-articular manifestation. RA-ILD, often usual interstitial pneumonia (UIP) or nonspecific interstitial pneumonia (NSIP), occurs in 10-20% of RA patients, driven by autoimmune fibrosis, with honeycombing indicating advanced disease. The restrictive pattern (low FVC, TLC) and reduced DLCO reflect parenchymal damage and gas exchange impairment, aligning with UIP’s prognosis (median survival 3-5 years). Hydroxychloroquine-induced pneumonitis is rare, typically reversible, and lacks honeycombing; it’s more associated with acute infiltrates, not chronic fibrosis, and her long-term use without prior lung issues makes this unlikely. Congestive heart failure (CHF) causes dyspnea and ground-glass opacities, but honeycombing is absent, and PFTs would show obstruction if related to RA’s pleural effects, not restriction; no cardiac history supports CHF. Chronic hypersensitivity pneumonitis (HP) mimics ILD with ground-glass and fibrosis, but requires an antigen exposure (e.g., birds), not mentioned, and lacks RA’s systemic context. RA-ILD’s prevalence, CT pattern, and PFTs make it the most likely diagnosis, warranting immunosuppression (e.g., steroids, mycophenolate).'
  },
  {
    id: 60,
    question: 'A 55-year-old male with type 2 diabetes and hypertension presents with chest pain and dyspnea. His ECG shows new T-wave inversions in V1-V4, troponin is 0.8 ng/mL, and coronary angiography reveals a 90% LAD stenosis. He is started on dual antiplatelet therapy and a statin. Two days later, he develops a rash and eosinophilia. What is the most likely cause of his new findings?',
    choices: ['Acute coronary syndrome with hypersensitivity reaction', 'Clopidogrel-induced drug reaction', 'Eosinophilic myocarditis', 'Statin-induced dermatitis'],
    correctAnswer: 'Clopidogrel-induced drug reaction',
    explanation: 'This patient with an acute coronary syndrome (ACS)—new T-wave inversions, troponin 0.8 ng/mL, and 90% LAD stenosis—started dual antiplatelet therapy (likely aspirin and clopidogrel) and a statin post-angiography. The subsequent rash and eosinophilia suggest a clopidogrel-induced drug reaction, a rare hypersensitivity syndrome (incidence <1%) presenting 1-2 weeks after initiation with rash, fever, or hematologic changes like eosinophilia. Clopidogrel, a P2Y12 inhibitor, is metabolized via CYP2C19, and hypersensitivity may involve immune-mediated mechanisms, distinct from aspirin’s salicylate effects (e.g., urticaria without eosinophilia). Acute coronary syndrome itself doesn’t cause eosinophilia or rash unless complicated by dress syndrome (DRESS) from other drugs, but the timing and antiplatelet context favor clopidogrel. Eosinophilic myocarditis could explain dyspnea and eosinophilia, but chest pain preceded therapy, troponin reflects ischemia (not myocarditis’ diffuse injury), and no biopsy supports it; it’s typically post-viral or drug-related (e.g., antibiotics). Statin-induced dermatitis is rare, usually myopathic (e.g., CK rise), and lacks eosinophilia. Clopidogrel’s discontinuation (switching to ticagrelor) and monitoring resolve this, making it the most likely cause given the ACS treatment timeline and classic presentation.'
  },
  {
    id: 61,
    question: 'A 68-year-old male with chronic lymphocytic leukemia (CLL) presents with fever, night sweats, and lymphadenopathy. His WBC is 120,000/µL, with 90% lymphocytes, and LDH is 800 U/L. CT shows bulky retroperitoneal nodes. Biopsy reveals transformation to diffuse large B-cell lymphoma (DLBCL). What is the most appropriate initial therapy for his transformed disease?',
    choices: ['R-CHOP chemotherapy', 'Ibrutinib PO', 'Fludarabine IV', 'Allogeneic stem cell transplant'],
    correctAnswer: 'R-CHOP chemotherapy',
    explanation: 'This patient with chronic lymphocytic leukemia (CLL) presents with fever, night sweats, lymphadenopathy, high WBC (120,000/µL, 90% lymphocytes), elevated LDH (800 U/L), and biopsy-confirmed transformation to diffuse large B-cell lymphoma (DLBCL), indicating Richter syndrome (RS), a rare (2-10% of CLL) but aggressive progression. RS requires urgent treatment due to its poor prognosis (median survival <1 year). R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone) is the most appropriate initial therapy per NCCN guidelines, as it targets DLBCL’s B-cell proliferation with chemoimmunotherapy, achieving response rates of 50-60% in RS. Rituximab binds CD20 on malignant B-cells, while CHOP addresses rapid cell turnover (high LDH reflects this). Ibrutinib, a BTK inhibitor, is effective for CLL but not standard for RS-DLBCL, lacking cytotoxic punch for large-cell transformation; it’s better for untransformed CLL or relapse. Fludarabine, a purine analog, treats CLL but is lymphodepleting and ineffective against DLBCL’s aggressive histology. Allogeneic stem cell transplant offers cure potential but is consolidative post-chemotherapy in younger, fit patients, not initial therapy given RS’s acuity and his age (68). R-CHOP balances efficacy, guideline support, and immediate need to control transformed disease.'
  },
  {
    id: 62,
    question: 'A 50-year-old female with Sjogren’s syndrome presents with fatigue, dry eyes, and a serum potassium of 3.0 mEq/L. Her pH is 7.30, HCO3 is 18 mEq/L, and urine pH is 6.5 despite acidosis. Anti-SSA antibodies are positive. What is the most likely renal complication explaining her electrolyte and acid-base abnormalities?',
    choices: ['Type 1 renal tubular acidosis', 'Type 4 renal tubular acidosis', 'Hypokalemic periodic paralysis', 'Fanconi syndrome'],
    correctAnswer: 'Type 1 renal tubular acidosis',
    explanation: 'This patient with Sjogren’s syndrome presents with fatigue, hypokalemia (K 3.0 mEq/L), metabolic acidosis (pH 7.30, HCO3 18 mEq/L), and an inappropriately high urine pH (6.5) despite acidosis, suggesting type 1 (distal) renal tubular acidosis (RTA). Sjogren’s, an autoimmune disease with anti-SSA positivity, commonly causes distal RTA via interstitial nephritis, impairing H+ secretion in the distal tubule. This leads to inability to acidify urine (pH >5.5), bicarbonate wasting, and hypokalemia from potassium loss to compensate for retained H+. The non-anion gap acidosis (normal gap assumed, not specified) fits distal RTA’s profile. Type 4 RTA, from hypoaldosteronism, causes hyperkalemia and acidosis, opposite to this hypokalemia, and is linked to diabetes or ACE inhibitors, not Sjogren’s. Hypokalemic periodic paralysis involves acute muscle weakness from potassium shifts, not chronic acidosis or renal defects. Fanconi syndrome, a proximal RTA, causes generalized tubular dysfunction (e.g., glucosuria, phosphaturia), but urine pH would acidify appropriately, unlike here. Distal RTA’s association with Sjogren’s, hypokalemia, and urine pH mismatch make it the most likely diagnosis, treatable with potassium citrate.'
  },
  {
    id: 63,
    question: 'A 60-year-old male with multiple myeloma on lenalidomide presents with dyspnea and leg swelling. His BNP is 300 pg/mL, D-dimer is 2000 ng/mL, and ultrasound confirms a proximal DVT. CT pulmonary angiography shows segmental pulmonary emboli. His creatinine is 1.5 mg/dL, and INR is 1.1. What is the most appropriate anticoagulant given his malignancy and renal function?',
    choices: ['Warfarin PO', 'Apixaban PO', 'Enoxaparin SC', 'Rivaroxaban PO'],
    correctAnswer: 'Enoxaparin SC',
    explanation: 'This patient with multiple myeloma, a hypercoagulable malignancy, presents with dyspnea, leg swelling, proximal DVT, and segmental pulmonary emboli (PE), requiring anticoagulation. His creatinine (1.5 mg/dL, eGFR ~40-50 mL/min) and active cancer guide therapy choice. Enoxaparin SC, a low-molecular-weight heparin (LMWH), is the most appropriate per ASCO and ISTH guidelines for cancer-associated venous thromboembolism (VTE), offering superior efficacy over warfarin (e.g., CLOT trial: reduced recurrence) and predictable dosing in moderate renal impairment (dose-adjusted if CrCl <30 mL/min, not here). Warfarin requires INR monitoring (1.1 currently), interacts with lenalidomide (CYP metabolism), and is inferior in cancer VTE due to higher recurrence and bleeding risks. Apixaban and rivaroxaban, direct oral anticoagulants (DOACs), are alternatives in cancer VTE (e.g., CARAVAGGIO trial), but apixaban’s renal clearance (25%) and rivaroxaban’s (35%) increase bleeding risk with CrCl 30-50 mL/min; LMWH is preferred in myeloma with renal dysfunction. Enoxaparin’s subcutaneous route, cancer-specific evidence, and safety in CKD make it the best choice, dosed at 1 mg/kg twice daily.'
  },
  {
    id: 64,
    question: 'A 45-year-old male with HIV (CD4 50 cells/µL) presents with headache, confusion, and a CD4 count drop from 200 six months ago. Brain MRI shows ring-enhancing lesions in the basal ganglia, and CSF cryptococcal antigen is negative. Toxoplasma IgG is positive. What is the most appropriate empiric therapy while awaiting further diagnostics?',
    choices: ['Pyrimethamine and sulfadiazine', 'Fluconazole IV', 'Rifampin and isoniazid', 'Acyclovir IV'],
    correctAnswer: 'Pyrimethamine and sulfadiazine',
    explanation: 'This patient with advanced HIV (CD4 50 cells/µL) presents with headache, confusion, and ring-enhancing brain lesions, suggesting cerebral toxoplasmosis, the most common CNS mass lesion when CD4 <100 cells/µL. Positive Toxoplasma IgG supports prior exposure, and the basal ganglia location is typical. Negative CSF cryptococcal antigen reduces likelihood of cryptococcoma, though not definitive. Empiric pyrimethamine and sulfadiazine (with leucovorin to reduce myelosuppression) is the most appropriate therapy per IDSA guidelines, targeting Toxoplasma gondii while awaiting biopsy or response (improvement in 7-14 days confirms diagnosis). Fluconazole IV treats cryptococcal meningitis, but lesions and negative antigen argue against it; amphotericin B would be preferred if suspected. Rifampin and isoniazid treat TB (e.g., tuberculoma), possible with ring-enhancing lesions, but TB’s chronicity and extrapulmonary signs (e.g., lung involvement) are absent. Acyclovir IV is for HSV encephalitis, which causes temporal lobe enhancement, not ring lesions. Pyrimethamine/sulfadiazine’s specificity for toxoplasmosis in this HIV context makes it the best empiric choice.'
  },
  {
    id: 65,
    question: 'A 70-year-old female with type 2 diabetes and hypertension presents with fatigue and a serum sodium of 120 mEq/L. Her serum osmolality is 250 mOsm/kg, urine osmolality is 400 mOsm/kg, and urine sodium is 50 mEq/L. She takes hydrochlorothiazide and has no edema. What is the most appropriate initial management of her hyponatremia?',
    choices: ['3% hypertonic saline IV', 'Fluid restriction', 'Tolvaptan PO', 'Stop hydrochlorothiazide and give normal saline IV'],
    correctAnswer: 'Stop hydrochlorothiazide and give normal saline IV',
    explanation: 'This patient with fatigue and severe hyponatremia (Na 120 mEq/L), low serum osmolality (250 mOsm/kg), high urine osmolality (400 mOsm/kg), and urine sodium (50 mEq/L) on hydrochlorothiazide (HCTZ) likely has thiazide-induced hyponatremia, a common cause in the elderly with diabetes/hypertension. HCTZ impairs urinary dilution in the distal tubule, increasing water reabsorption via ADH-independent mechanisms, leading to euvolemic hyponatremia (no edema). The most appropriate initial management is stopping HCTZ and administering normal saline IV to correct volume status and sodium gradually (target 4-6 mEq/L rise in 24 hours), per Endocrine Society guidelines. 3% hypertonic saline IV is for symptomatic hyponatremia (e.g., seizures), not specified here, and risks overcorrection (ODS) in chronic cases (onset >48 hours likely). Fluid restriction treats SIADH, but high urine sodium and HCTZ use favor drug-induced etiology over SIADH (urine Na typically >40 mEq/L in both, but context differs). Tolvaptan, a V2 antagonist, corrects SIADH but is costly and unnecessary when stopping HCTZ resolves the cause. Normal saline with HCTZ cessation addresses the pathophysiology directly, restoring sodium homeostasis safely.'
  },
  {
    id: 66,
    question: 'A 55-year-old male with alcoholic cirrhosis presents with confusion and a flapping tremor. His ammonia is 150 µmol/L, and EEG shows triphasic waves. He has no fever or focal neurologic signs. Lactulose improves his symptoms, but he relapses after 3 days. What is the most appropriate adjunctive therapy to prevent recurrence of his hepatic encephalopathy?',
    choices: ['Rifaximin PO', 'Neomycin PO', 'Zinc sulfate PO', 'Branched-chain amino acids IV'],
    correctAnswer: 'Rifaximin PO',
    explanation: 'This patient with alcoholic cirrhosis, confusion, flapping tremor (asterixis), elevated ammonia (150 µmol/L), and triphasic waves on EEG has hepatic encephalopathy (HE), a neuropsychiatric complication of liver dysfunction. Lactulose, which traps ammonia in the colon, improved symptoms, but relapse suggests inadequate control. Rifaximin PO (550 mg twice daily) is the most appropriate adjunctive therapy per AASLD guidelines, reducing gut bacterial ammonia production (non-absorbable antibiotic) and preventing HE recurrence, as shown in the RIME trial (40% risk reduction vs. placebo). It’s superior to lactulose alone in chronic HE, with fewer side effects than alternatives. Neomycin PO also reduces ammonia but is nephrotoxic and ototoxic, rarely used today due to safer options like rifaximin. Zinc sulfate corrects deficiency linked to HE but lacks robust trial evidence for recurrence prevention; it’s adjunctive at best. Branched-chain amino acids (BCAAs) IV improve nutrition in cirrhosis but don’t directly reduce ammonia or prevent HE acutely, requiring long-term use. Rifaximin’s efficacy, safety, and guideline endorsement make it the best choice to maintain remission.'
  },
  {
    id: 67,
    question: 'A 62-year-old female with breast cancer on tamoxifen presents with right leg swelling and dyspnea. Ultrasound confirms a proximal DVT, and CT shows a massive PE with right ventricular strain. Her BP is 90/60 mmHg, and troponin is elevated. What is the most appropriate intervention given her hemodynamic instability?',
    choices: ['Systemic thrombolysis', 'Heparin IV', 'Catheter-directed thrombolysis', 'IVC filter placement'],
    correctAnswer: 'Systemic thrombolysis',
    explanation: 'This patient with breast cancer, proximal DVT, massive pulmonary embolism (PE) with right ventricular (RV) strain, hypotension (BP 90/60 mmHg), and elevated troponin has a high-risk PE per ESC guidelines, warranting systemic thrombolysis (e.g., alteplase 100 mg IV over 2 hours). Massive PE—defined by sustained hypotension (<90 mmHg systolic) or shock—carries a >15% mortality risk within 30 days, and thrombolysis dissolves clots rapidly, relieving RV strain and improving hemodynamics, as shown in trials like PEITHO (reduced death/hemodynamic collapse). Her cancer increases VTE risk, but bleeding risk (e.g., from tamoxifen or metastases) is outweighed by life-threatening instability. Heparin IV (e.g., 80 units/kg bolus, 18 units/kg/hr) prevents clot propagation but doesn’t lyse existing thrombus, inadequate for massive PE with shock. Catheter-directed thrombolysis (CDT) delivers lower-dose lytics to the clot, reducing bleeding risk, but it’s for submassive PE (RV strain without hypotension) or when systemic therapy is contraindicated; her instability favors systemic speed. IVC filter prevents recurrent PE but doesn’t treat the current clot, reserved for anticoagulation failure. Systemic thrombolysis’s rapid efficacy and guideline support make it the best intervention here.'
  },
  {
    id: 68,
    question: 'A 40-year-old male with Crohn’s disease on infliximab presents with fever, cough, and weight loss. Chest X-ray shows upper lobe cavitation, and sputum AFB stain is positive. His infliximab was started 6 months ago without TB screening. What is the most likely diagnosis driving his pulmonary symptoms?',
    choices: ['Pulmonary tuberculosis reactivation', 'Nocardiosis', 'Histoplasmosis', 'Lung abscess'],
    correctAnswer: 'Pulmonary tuberculosis reactivation',
    explanation: 'This patient with Crohn’s disease on infliximab presents with fever, cough, weight loss, upper lobe cavitation, and positive sputum AFB stain, strongly indicating pulmonary tuberculosis (TB) reactivation. Infliximab, an anti-TNF agent, suppresses cell-mediated immunity, increasing risk of latent TB reactivation (LTBI), especially without prior screening (a guideline violation per AGA). Upper lobe cavitation is classic for post-primary TB, and AFB positivity (Mycobacterium tuberculosis) confirms active infection, necessitating urgent anti-TB therapy (e.g., RIPE: rifampin, isoniazid, pyrazinamide, ethambutol). Nocardiosis, another infliximab-related infection, causes cavitation but is gram-positive (not AFB) and often brain-invasive, not specified here. Histoplasmosis, a fungal infection, mimics TB with cavitation in endemic areas, but sputum stains yeast, not AFB, and infliximab’s TB risk is higher. Lung abscess (e.g., from anaerobes) causes cavitation but lacks AFB positivity and systemic symptoms like weight loss without aspiration history. TB reactivation’s epidemiology (1-2% annual risk on anti-TNF), radiologic findings, and microbiology make it the most likely diagnosis, highlighting screening’s importance.'
  },
  {
    id: 69,
    question: 'A 65-year-old male with hypertension and CKD presents with a serum potassium of 3.0 mEq/L, bicarbonate of 32 mEq/L, and BP of 160/90 mmHg. He takes lisinopril and spironolactone. His urine pH is 5.0, and chloride is 98 mEq/L. What is the most likely acid-base disorder explaining his electrolyte abnormalities?',
    choices: ['Metabolic alkalosis from diuretic use', 'Type 4 renal tubular acidosis', 'Respiratory alkalosis from hyperventilation', 'Mixed metabolic alkalosis and respiratory acidosis'],
    correctAnswer: 'Metabolic alkalosis from diuretic use',
    explanation: 'This patient with hypertension, CKD, hypokalemia (K 3.0 mEq/L), elevated bicarbonate (32 mEq/L), and spironolactone/lisinopril use has metabolic alkalosis, likely from diuretic-like effects despite spironolactone’s potassium-sparing nature. Metabolic alkalosis (high HCO3) arises from volume contraction (e.g., prior loop/thiazide diuretic use, not listed but possible) or aldosterone excess, though spironolactone blocks this; here, lisinopril’s renin-angiotensin inhibition may paradoxically enhance distal H+ secretion, retaining HCO3 and wasting K+. Urine pH 5.0 reflects compensatory acid excretion, and normal chloride (98 mEq/L) suggests chloride-resistant alkalosis (e.g., hyperaldosteronism-like state), though CKD complicates this. Type 4 RTA, common with spironolactone (blocks aldosterone), causes hyperkalemia and acidosis (low HCO3), opposite to this hypokalemia and alkalosis; his meds don’t fully explain RTA. Respiratory alkalosis (low PaCO2) requires hyperventilation (e.g., anxiety), not evident, and wouldn’t cause HCO3 rise without chronicity. Mixed disorders need arterial blood gas (e.g., high PaCO2 for respiratory acidosis), unavailable here. Metabolic alkalosis from diuretic-like effects or drug interactions fits his labs and history, treatable by stopping spironolactone and correcting volume.'
  },
  {
    id: 70,
    question: 'A 50-year-old female with systemic sclerosis presents with dyspnea and a dry cough. Echocardiography shows a pulmonary artery systolic pressure of 60 mmHg, and right heart catheterization confirms pulmonary arterial hypertension (PAH) with a mean PAP of 35 mmHg and PCWP of 10 mmHg. What is the most appropriate initial therapy to target her PAH?',
    choices: ['Sildenafil PO', 'Bosentan PO', 'IV epoprostenol', 'Nifedipine PO'],
    correctAnswer: 'Sildenafil PO',
    explanation: 'This patient with systemic sclerosis (SSc) presents with dyspnea, dry cough, and confirmed pulmonary arterial hypertension (PAH) via right heart catheterization (mean PAP 35 mmHg, PCWP 10 mmHg), a common complication of SSc from endothelial dysfunction and vascular remodeling. Sildenafil PO, a phosphodiesterase-5 inhibitor (e.g., 20 mg TID), is the most appropriate initial therapy per ESC/ERS guidelines for WHO Group 1 PAH (pre-capillary, PCWP <15 mmHg), increasing cGMP to vasodilate pulmonary arteries, improving symptoms and exercise capacity (SUPER-1 trial). It’s well-tolerated in early functional class II-III PAH (likely here, dyspnea without overt failure), balancing efficacy and safety. Bosentan, an endothelin receptor antagonist, also treats SSc-PAH but requires liver monitoring and is often second-line or combined therapy; sildenafil’s simpler profile fits initial management. IV epoprostenol, a prostacyclin, is gold-standard for severe PAH (class IV, RV failure), but its complexity (continuous infusion, side effects) reserves it for advanced cases, not initial therapy without decompensation. Nifedipine, a calcium channel blocker, is for vasoreactive PAH (rare, <10% of cases), requiring a positive vasoreactivity test (not done), and ineffective in non-responders like most SSc-PAH. Sildenafil’s guideline support and SSc relevance make it the best first step.'
  },
  {
    id: 71,
    question: 'A 60-year-old male with type 2 diabetes and CKD stage 4 presents with chest pain and dyspnea. His ECG shows new Q waves in II, III, aVF, and troponin is 1.2 ng/mL. His creatinine is 3.5 mg/dL, and eGFR is 20 mL/min. What is the most appropriate anti-ischemic therapy given his renal function?',
    choices: ['Nitroglycerin SL', 'Metoprolol PO', 'Ranolazine PO', 'Amlodipine PO'],
    correctAnswer: 'Nitroglycerin SL',
    explanation: 'This patient with type 2 diabetes, CKD stage 4 (eGFR 20 mL/min), chest pain, dyspnea, new Q waves in II, III, aVF, and elevated troponin (1.2 ng/mL) has an inferior wall myocardial infarction (MI), likely completed given Q waves. Anti-ischemic therapy is needed, but renal function limits options. Nitroglycerin SL (e.g., 0.4 mg q5min) is the most appropriate, relieving angina by venodilation (reducing preload) and coronary vasodilation, with minimal renal clearance (metabolized hepatically), safe in CKD per AHA guidelines. It’s first-line for acute ischemia symptoms, though his completed MI suggests residual ischemia or post-infarct angina. Metoprolol, a beta-blocker, reduces myocardial oxygen demand but requires renal adjustment (not primary issue), and hypotension risk in CKD with low eGFR is high; it’s contraindicated if unstable. Ranolazine, for chronic angina, inhibits late sodium current but is renally excreted (dose reduction <30 mL/min), and lacks acute MI data, making it less ideal. Amlodipine, a calcium channel blocker, treats hypertension/angina but has slower onset and no acute MI benefit; CKD adjusts metabolism minimally. Nitroglycerin’s rapid action, renal safety, and guideline role in ischemic pain make it the best choice here.'
  },
  {
    id: 72,
    question: 'A 45-year-old female with polycystic ovary syndrome (PCOS) presents with fatigue, weight gain, and a fasting glucose of 140 mg/dL. Her HbA1c is 7.2%, and HOMA-IR is 4.5, indicating insulin resistance. She has no retinopathy or neuropathy. What is the most appropriate initial therapy to address her glycemic control and underlying pathophysiology?',
    choices: ['Metformin PO', 'Liraglutide SC', 'Pioglitazone PO', 'Insulin glargine SC'],
    correctAnswer: 'Metformin PO',
    explanation: 'This patient with PCOS presents with fatigue, weight gain, fasting hyperglycemia (140 mg/dL), HbA1c 7.2%, and insulin resistance (HOMA-IR 4.5), confirming type 2 diabetes driven by PCOS-related hyperinsulinemia and obesity. Metformin PO (e.g., 500 mg BID, titrated) is the most appropriate initial therapy per ADA guidelines, improving insulin sensitivity in the liver, reducing hepatic glucose output, and addressing PCOS’s metabolic root (insulin resistance), with bonus effects on weight and ovulation. Trials like DPP show metformin delays diabetes progression in insulin-resistant states, and its safety (no hypoglycemia, renal-adjusted) fits her new diagnosis without complications. Liraglutide, a GLP-1 agonist, aids weight loss and glucose control but is second-line due to cost, injection burden, and less PCOS-specific data; it’s ideal for obesity-driven cases failing metformin. Pioglitazone, a PPAR-gamma agonist, enhances peripheral insulin sensitivity but causes weight gain and fluid retention, counterintuitive in PCOS/obesity, and is reserved for metformin intolerance. Insulin glargine is for advanced diabetes (e.g., HbA1c >9%, symptomatic hyperglycemia), not initial therapy here with moderate control and no end-organ damage. Metformin’s dual benefit in diabetes and PCOS pathophysiology makes it the best first step.'
  },
  {
    id: 73,
    id: 73,
    question: 'A 68-year-old male with a history of prostate cancer treated with androgen deprivation therapy (ADT) presents with fatigue and bone pain. Labs show a calcium of 13.0 mg/dL, albumin of 3.5 g/dL, PTH of <5 pg/mL, and PSA of 50 ng/mL (previously undetectable). Bone scan reveals multiple osteolytic lesions. What is the most appropriate initial management of his hypercalcemia?',
    choices: ['IV fluids and zoledronic acid', 'Calcitonin IM', 'Cinacalcet PO', 'Denosumab SC'],
    correctAnswer: 'IV fluids and zoledronic acid',
    explanation: 'This patient with prostate cancer on ADT presents with fatigue, bone pain, severe hypercalcemia (13.0 mg/dL, corrected ~13.4 mg/dL with albumin 3.5 g/dL), suppressed PTH (<5 pg/mL), rising PSA (50 ng/mL), and osteolytic lesions, indicating malignancy-associated hypercalcemia from metastatic progression. Prostate cancer typically causes osteoblastic lesions, but ADT resistance can shift to osteolytic metastases, releasing calcium via osteoclast activation (e.g., RANKL) or PTHrP (not measured). IV fluids (normal saline, 200-300 mL/hr) and zoledronic acid (4 mg IV) are the most appropriate initial management per NCCN guidelines, rapidly lowering calcium by diluting serum levels and inhibiting osteoclasts (peak effect 2-4 days). Fluids address dehydration from hypercalcemia’s diuretic effect, while zoledronic acid, a bisphosphonate, is superior to pamidronate in cancer hypercalcemia (trials show 80-90% normalization). Calcitonin IM (4 IU/kg) acts quickly (hours) but has a ceiling effect and tachyphylaxis after 48 hours, making it adjunctive, not primary. Cinacalcet lowers calcium in hyperparathyroidism (high PTH), not malignancy (low PTH), and is ineffective here. Denosumab, a RANKL inhibitor, treats refractory hypercalcemia or bisphosphonate failure, but its slower onset and cost reserve it for second-line; renal dosing isn’t an issue here (creatinine not given). IV fluids and zoledronic acid’s synergy and guideline support make them the best initial approach.'
  },
  {
    id: 74,
    question: 'A 55-year-old female with primary biliary cholangitis (PBC) presents with pruritus and fatigue. Her ALP is 400 U/L, bilirubin is 2.5 mg/dL, and anti-mitochondrial antibodies (AMA) are positive. Ursodeoxycholic acid (UDCA) at 15 mg/kg/day has been ineffective after 12 months. Liver biopsy shows stage 3 fibrosis. What is the most appropriate next step in her management?',
    choices: ['Obeticholic acid PO', 'Cholestyramine PO', 'Prednisone PO', 'Liver transplantation'],
    correctAnswer: 'Obeticholic acid PO',
    explanation: 'This patient with PBC—pruritus, fatigue, elevated ALP (400 U/L), bilirubin (2.5 mg/dL), positive AMA, and stage 3 fibrosis—has an inadequate response to UDCA (15 mg/kg/day) after 12 months, defined by persistent ALP >1.67x upper limit or bilirubin rise (EASL criteria). Obeticholic acid (OCA) PO (5-10 mg/day), a farnesoid X receptor agonist, is the most appropriate next step per AASLD guidelines, improving biochemical markers (e.g., ALP reduction >15%) and slowing progression in UDCA non-responders, as shown in the POISE trial. It enhances bile acid homeostasis, addressing PBC’s cholestatic pathophysiology. Cholestyramine PO relieves pruritus by binding bile acids in the gut but doesn’t alter disease course or fibrosis, limiting its role to symptom control. Prednisone is for autoimmune hepatitis, not PBC (no interface hepatitis here), and worsens osteoporosis risk in cholestasis. Liver transplantation is for end-stage PBC (e.g., MELD >15, decompensated cirrhosis), not yet indicated with stage 3 fibrosis and moderate bilirubin. OCA’s disease-modifying effect and guideline endorsement make it the best escalation in UDCA failure.'
  },
  {
    id: 75,
    question: 'A 60-year-old male with type 2 diabetes and hypertension presents with chest pain and dyspnea. His ECG shows ST depression in V4-V6, and troponin is 0.5 ng/mL. Coronary angiography reveals diffuse three-vessel disease not amenable to PCI or CABG. His EF is 35% on echo. What is the most appropriate medical therapy to reduce his ischemic burden?',
    choices: ['Ranolazine PO', 'Isosorbide mononitrate PO', 'Carvedilol PO', 'Ivabradine PO'],
    correctAnswer: 'Ranolazine PO',
    explanation: 'This patient with type 2 diabetes, hypertension, chest pain, dyspnea, ST depression in V4-V6, troponin 0.5 ng/mL, and diffuse three-vessel disease not amenable to revascularization has a non-ST-elevation myocardial infarction (NSTEMI) with ischemic cardiomyopathy (EF 35%). Ranolazine PO (500-1000 mg BID) is the most appropriate medical therapy to reduce ischemic burden per ACC/AHA guidelines, inhibiting late sodium current in myocytes, decreasing calcium overload, and improving diastolic relaxation without affecting heart rate or BP—key in diffuse disease where revascularization isn’t an option. The MERLIN-TIMI 36 trial shows ranolazine reduces recurrent ischemia in NSTEMI, especially with chronic angina, fitting his profile. Isosorbide mononitrate reduces preload and dilates coronaries but risks hypotension in EF 35% and tolerance with chronic use, less ideal without revascularization. Carvedilol, a beta-blocker, improves HF survival (EF 35%) but may worsen ischemia acutely in NSTEMI without rate control need (HR not given); it’s adjunctive, not primary anti-ischemic here. Ivabradine lowers heart rate via If channel inhibition but is for HF with sinus tachycardia (>70 bpm), not ischemia directly, and lacks NSTEMI data. Ranolazine’s mechanism and trial evidence make it the best choice for ischemic relief.'
  },
  {
    id: 76,
    question: 'A 50-year-old male with alcoholic cirrhosis presents with jaundice and abdominal pain. His bilirubin is 10 mg/dL, INR is 2.0, and albumin is 2.0 g/dL. Ultrasound shows a 3 cm hepatocellular carcinoma (HCC) in segment VI without vascular invasion. His Child-Pugh score is B8. What is the most appropriate definitive treatment for his HCC?',
    choices: ['Radiofrequency ablation (RFA)', 'Transarterial chemoembolization (TACE)', 'Sorafenib PO', 'Liver transplantation'],
    correctAnswer: 'Radiofrequency ablation (RFA)',
    explanation: 'This patient with alcoholic cirrhosis, jaundice, bilirubin 10 mg/dL, INR 2.0, albumin 2.0 g/dL (Child-Pugh B8), and a 3 cm hepatocellular carcinoma (HCC) in segment VI without vascular invasion has early-stage HCC (BCLC stage A). Radiofrequency ablation (RFA) is the most appropriate definitive treatment per AASLD guidelines for single HCC ≤3 cm in Child-Pugh A/B patients not eligible for resection due to liver dysfunction. RFA uses thermal energy to ablate the tumor, achieving >90% complete necrosis for <3 cm lesions, with survival comparable to resection in early HCC (e.g., Lencioni trials). His Child-Pugh B8 (moderate decompensation) contraindicates surgery (resection risks bleeding, liver failure), but RFA’s local approach is feasible. Transarterial chemoembolization (TACE) is for intermediate-stage HCC (BCLC B, multifocal), not single small tumors, and less effective in Child-Pugh B with jaundice. Sorafenib, a tyrosine kinase inhibitor, is for advanced HCC (BCLC C, vascular invasion/metastases), not early-stage, and offers survival benefit (SHARP trial) only in Child-Pugh A. Liver transplantation cures HCC and cirrhosis but is limited by organ availability and MELD prioritization (his score ~20-25 isn’t high enough); it’s ideal for multifocal HCC within Milan criteria, not solitary here. RFA’s efficacy, safety in B8, and guideline support make it the best definitive option.'
  },
  {
    id: 77,
    question: 'A 45-year-old female with rheumatoid arthritis on methotrexate and prednisone presents with fever, rash, and lymphadenopathy. Labs show AST 300 U/L, ferritin 10,000 ng/mL, triglycerides 400 mg/dL, and fibrinogen 100 mg/dL. Bone marrow biopsy reveals hemophagocytosis. What is the most appropriate initial therapy for her life-threatening condition?',
    choices: ['High-dose dexamethasone IV', 'Etoposide IV', 'Rituximab IV', 'Anakinra SC'],
    correctAnswer: 'High-dose dexamethasone IV',
    explanation: 'This patient with rheumatoid arthritis (RA) on immunosuppression (methotrexate, prednisone) presents with fever, rash, lymphadenopathy, elevated AST (300 U/L), ferritin (10,000 ng/mL), triglycerides (400 mg/dL), low fibrinogen (100 mg/dL), and hemophagocytosis on bone marrow biopsy, meeting HLH-2004 criteria for hemophagocytic lymphohistiocytosis (HLH). HLH, a hyperinflammatory syndrome, is likely macrophage activation syndrome (MAS) secondary to RA, triggered by infection or flare. High-dose dexamethasone IV (e.g., 10 mg/m²/day) is the most appropriate initial therapy per Histiocyte Society guidelines, rapidly suppressing the cytokine storm (IL-1, IL-6, TNF) driving HLH, critical in this life-threatening state (mortality >50% untreated). Etoposide IV, a chemotherapeutic, is part of HLH-94 protocol but follows steroids in secondary HLH/MAS, reserved for refractory cases or primary HLH (genetic, not here); its toxicity (myelosuppression) delays use in RA-driven HLH. Rituximab targets B-cells in lymphoma-associated HLH, not RA-MAS, lacking evidence here. Anakinra, an IL-1 inhibitor, is emerging for MAS but lacks robust trial data vs. steroids and is subcutaneous, slower than IV dexamethasone. Dexamethasone’s speed, broad immunosuppression, and guideline role make it the best initial step, with etoposide added if unresponsive.'
  },
  {
    id: 78,
    question: 'A 60-year-old male with type 2 diabetes and hypertension presents with fatigue and a hemoglobin of 8 g/dL. His MCV is 90 fL, reticulocyte count is 0.5%, ferritin is 300 ng/mL, and EPO level is 50 mU/mL (elevated). His creatinine is 2.5 mg/dL. What is the most appropriate therapy to address his anemia given his underlying condition?',
    choices: ['Erythropoiesis-stimulating agent (ESA) SC', 'Iron IV', 'Blood transfusion', 'Folic acid PO'],
    correctAnswer: 'Erythropoiesis-stimulating agent (ESA) SC',
    explanation: 'This patient with type 2 diabetes, hypertension, fatigue, anemia (Hb 8 g/dL), normocytic MCV (90 fL), low reticulocyte count (0.5%), adequate ferritin (300 ng/mL), elevated EPO (50 mU/mL), and CKD (Cr 2.5 mg/dL, eGFR ~25-30 mL/min) has anemia of chronic kidney disease (CKD). CKD impairs EPO production, but his elevated EPO is inappropriately low for anemia severity, reflecting renal resistance and ineffective erythropoiesis. Erythropoiesis-stimulating agent (ESA) SC (e.g., darbepoetin 0.45 µg/kg weekly) is the most appropriate therapy per KDIGO guidelines, stimulating red cell production when iron stores are replete (ferritin >100 ng/mL, TSAT not given but assumed >20%), targeting Hb 10-11.5 g/dL to improve fatigue without transfusion risks. Iron IV is unnecessary with ferritin 300 ng/mL, indicating no absolute deficiency; functional deficiency (TSAT <20%) isn’t supported here. Blood transfusion is for acute symptoms (e.g., dyspnea, tachycardia), not chronic anemia, and risks sensitization or overload in CKD. Folic acid treats megaloblastic anemia (high MCV), not normocytic CKD anemia. ESA’s efficacy in CKD anemia, safety with adequate iron, and guideline support make it the best choice over supportive measures.'
  },
  {
    id: 79,
    question: 'A 50-year-old male with HIV (CD4 300 cells/µL) presents with odynophagia and epigastric pain persisting for 2 weeks. Endoscopy reveals multiple deep esophageal ulcers, and biopsy shows large cells with intranuclear inclusions. His viral load is undetectable on ART, and fluconazole has failed to improve symptoms. What is the most appropriate therapy for his esophageal condition?',
    choices: ['Ganciclovir IV', 'Acyclovir IV', 'Prednisone PO', 'Esomeprazole PO'],
    correctAnswer: 'Ganciclovir IV',
    explanation: 'This patient with HIV (CD4 300 cells/µL), odynophagia, epigastric pain, and endoscopic findings of multiple deep esophageal ulcers with biopsy showing intranuclear inclusions likely has cytomegalovirus (CMV) esophagitis, an opportunistic infection in immunocompromised states. Despite a relatively preserved CD4 count and undetectable viral load on antiretroviral therapy (ART), CMV can reactivate, especially with prior immunosuppression or incomplete immune recovery. The large cells with intranuclear inclusions ("owl’s eye" appearance) are pathognomonic for CMV, distinguishing it from Candida (pseudohyphae, responsive to fluconazole, which failed here) or herpes simplex virus (HSV, smaller inclusions, multinucleated cells). Ganciclovir IV (5 mg/kg BID) is the most appropriate therapy per IDSA guidelines, targeting CMV’s DNA polymerase to halt replication, with induction for 2-3 weeks followed by valganciclovir maintenance if needed. Acyclovir IV treats HSV esophagitis, but the biopsy and fluconazole failure make HSV less likely; acyclovir has minimal CMV activity. Prednisone PO could worsen an infection and is used for idiopathic ulcers or autoimmune esophagitis, not supported here. Esomeprazole PO (PPI) addresses reflux, but ulcers and inclusions point to infection, not GERD. Ganciclovir’s specificity for CMV, biopsy correlation, and guideline support make it the best choice.'
  },
  {
    id: 80,
    question: 'A 62-year-old female with type 2 diabetes and hypertension presents with fatigue, dyspnea, and a new murmur. Echocardiography shows severe aortic stenosis (valve area 0.8 cm², mean gradient 45 mmHg) and an EF of 30%. Her creatinine is 2.0 mg/dL, and coronary angiography reveals no significant CAD. She declines surgery due to personal preference. What is the most appropriate medical therapy to optimize her condition?',
    choices: ['Furosemide IV and lisinopril PO', 'Transcatheter aortic valve replacement (TAVR)', 'Digoxin PO and metoprolol PO', 'Balloon aortic valvuloplasty'],
    correctAnswer: 'Furosemide IV and lisinopril PO',
    explanation: 'This patient with type 2 diabetes, hypertension, fatigue, dyspnea, severe aortic stenosis (AS; valve area 0.8 cm², gradient 45 mmHg), reduced EF (30%), and CKD (Cr 2.0 mg/dL) has symptomatic heart failure (HF) from AS but declines surgical aortic valve replacement (SAVR), the definitive treatment. Without intervention, severe AS with HF has a 50% 2-year mortality, but her preference limits options to medical management. Furosemide IV and lisinopril PO are the most appropriate to optimize her condition per ACC/AHA guidelines for non-surgical AS. Furosemide relieves dyspnea by reducing preload and pulmonary congestion, critical in low EF (30%), while lisinopril, an ACE inhibitor, cautiously lowers afterload, improving cardiac output despite AS’s fixed obstruction—dosed low (e.g., 2.5 mg) with renal adjustment (eGFR ~30 mL/min). TAVR, though ideal for high-risk patients (PARTNER trial: reduced mortality vs. medical therapy), isn’t an option due to her refusal, as it’s procedural, not medical. Digoxin and metoprolol may control rate in AF or HF but don’t address AS’s mechanical issue; metoprolol risks decompensation in low EF without rate control need, and digoxin’s benefit is minimal here. Balloon valvuloplasty, a temporizing procedure, isn’t medical therapy and has high restenosis rates, reserved for bridge-to-TAVR/SAVR, which she declines. Furosemide and lisinopril palliate symptoms and optimize hemodynamics within her constraints.'
  },
  {
    id: 81,
    question: 'A 38-year-old male with a history of IV drug use presents with fever, chills, and a new pansystolic murmur at the left sternal border. Blood cultures grow MRSA, and echocardiography reveals tricuspid valve vegetation with severe regurgitation. His creatinine rises from 1.0 to 2.5 mg/dL over 3 days, and urinalysis shows hematuria with red cell casts. What is the most appropriate therapy to address his renal complication?',
    choices: ['Vancomycin IV', 'Prednisone PO', 'Cyclophosphamide IV', 'Plasmapheresis'],
    correctAnswer: 'Vancomycin IV',
    explanation: 'This patient with IV drug use, fever, chills, a tricuspid murmur, MRSA bacteremia, and tricuspid vegetation has infective endocarditis (IE), likely causing acute kidney injury (AKI; Cr 1.0 to 2.5 mg/dL) with hematuria and red cell casts, suggesting glomerulonephritis (GN). In IE, GN arises from immune complex deposition (e.g., MRSA antigens), common in right-sided IE from septic emboli or circulating immune complexes. Vancomycin IV (e.g., 15-20 mg/kg q12h, adjusted for renal function) is the most appropriate therapy per AHA guidelines, targeting the underlying MRSA infection to halt immune-mediated renal injury. Eradicating bacteremia typically resolves IE-associated GN, as seen in observational studies, avoiding immunosuppression unless refractory. Prednisone PO or cyclophosphamide IV treat primary GN (e.g., post-streptococcal, lupus), but in IE, they risk worsening infection without source control; no biopsy confirms primary GN here. Plasmapheresis removes immune complexes in severe GN (e.g., RPGN with crescentic findings), but lacks evidence in IE-GN and is premature without persistent renal decline post-antibiotics. Vancomycin addresses the root cause—MRSA IE—offering renal recovery as bacteremia clears, making it the best initial step.'
  },
  {
    id: 82,
    question: 'A 70-year-old male with COPD and a 60-pack-year smoking history presents with hemoptysis and weight loss. Chest CT shows a 4 cm cavitary mass in the right upper lobe and mediastinal lymphadenopathy. Sputum cytology reveals squamous cell carcinoma, and PET scan shows no distant metastases. His FEV1 is 45% predicted. What is the most appropriate next step in his management?',
    choices: ['Surgical lobectomy', 'Stereotactic body radiotherapy (SBRT)', 'Chemotherapy with cisplatin', 'Bronchoscopic biopsy'],
    correctAnswer: 'Stereotactic body radiotherapy (SBRT)',
    explanation: 'This patient with COPD, a 60-pack-year history, hemoptysis, weight loss, a 4 cm cavitary right upper lobe mass, mediastinal lymphadenopathy, and squamous cell carcinoma (SCC) on sputum cytology has stage IIB non-small cell lung cancer (NSCLC; T2bN1M0, assuming N1 nodes). His FEV1 (45% predicted) reflects severe COPD, impacting treatment. Stereotactic body radiotherapy (SBRT) is the most appropriate next step per NCCN guidelines for early-stage NSCLC in patients unfit for surgery due to comorbidities. SBRT delivers high-dose, precise radiation (e.g., 54 Gy in 3 fractions), achieving local control rates >90% in stage I-II NSCLC (RTOG 0236), ideal for his 4 cm tumor and poor pulmonary reserve (FEV1 <50% increases surgical risk). Surgical lobectomy is curative for stage IIB but requires FEV1 >60% predicted or postoperative FEV1 >40% (predicted here <30%), risking respiratory failure in severe COPD. Chemotherapy with cisplatin is for stage III/IV or adjuvant post-resection, not primary therapy in operable early-stage disease; his N1 status doesn’t mandate it upfront. Bronchoscopic biopsy is redundant with sputum cytology confirming SCC. SBRT balances efficacy and safety given his lung function and stage.'
  },
  {
    id: 83,
    question: 'A 55-year-old female with systemic lupus erythematosus (SLE) presents with fatigue, proteinuria (3 g/day), and a creatinine rise from 0.8 to 1.5 mg/dL. ANA is positive, anti-dsDNA is 1:320, and complement C3 is low. Renal biopsy shows diffuse proliferative glomerulonephritis (class IV). She has a history of DVT. What is the most appropriate induction therapy for her lupus nephritis?',
    choices: ['Mycophenolate mofetil PO and prednisone PO', 'Cyclophosphamide IV and prednisone PO', 'Rituximab IV', 'Hydroxychloroquine PO alone'],
    correctAnswer: 'Mycophenolate mofetil PO and prednisone PO',
    explanation: 'This patient with SLE, fatigue, proteinuria (3 g/day), rising creatinine (0.8 to 1.5 mg/dL), high anti-dsDNA (1:320), low C3, and class IV lupus nephritis (LN) on biopsy has active proliferative disease requiring induction therapy. Mycophenolate mofetil (MMF) PO (2-3 g/day) with prednisone PO (1 mg/kg/day, tapered) is the most appropriate per ACR and EULAR guidelines, offering remission rates of 50-60% in class IV LN (ALMS trial), comparable to cyclophosphamide with less toxicity (e.g., infertility, infection). Her DVT history suggests possible antiphospholipid syndrome (APS), common in SLE, but doesn’t alter LN induction; anticoagulation (not asked) would address APS separately. Cyclophosphamide IV (e.g., NIH regimen: 0.5-1 g/m² monthly) is equally effective but has higher risks (hemorrhagic cystitis, malignancy), reserved for severe/refractory cases or resource-limited settings; MMF’s safety profile favors it here. Rituximab IV targets B-cells but lacks phase III evidence as first-line induction for LN (LUNAR trial failed), used in refractory disease. Hydroxychloroquine PO alone is adjunctive for SLE maintenance, not induction for active LN. MMF with prednisone balances efficacy, safety, and her clinical profile.'
  },
  {
    id: 84,
    question: 'A 65-year-old male with atrial fibrillation on apixaban presents with melena and a hemoglobin drop from 13 to 9 g/dL. His BP is 100/60 mmHg, HR is 110 bpm, and INR is 1.2. Endoscopy shows a bleeding duodenal ulcer. What is the most appropriate reversal strategy given his hemodynamic instability?',
    choices: ['Andexanet alfa IV', 'Prothrombin complex concentrate (PCC) IV', 'Fresh frozen plasma (FFP) IV', 'Vitamin K IV'],
    correctAnswer: 'Andexanet alfa IV',
    explanation: 'This patient with atrial fibrillation on apixaban, melena, hemoglobin drop (13 to 9 g/dL), and hemodynamic instability (BP 100/60 mmHg, HR 110 bpm) has a major GI bleed from a duodenal ulcer. Apixaban, a direct factor Xa inhibitor, requires specific reversal in life-threatening bleeding. Andexanet alfa IV (e.g., 400 mg bolus, 4 mg/min infusion) is the most appropriate per FDA approval and ISTH guidelines, binding apixaban to restore hemostasis within minutes, as shown in ANNEXA-4 (82% hemostatic efficacy). His INR (1.2) is minimally elevated (DOACs don’t reliably affect INR), and instability necessitates rapid action. PCC IV (e.g., 25-50 units/kg) reverses warfarin or off-label DOACs but lacks specificity for apixaban, with variable efficacy (30-50%) and thrombosis risk; it’s second-line if andexanet is unavailable. FFP IV replaces factors but requires large volumes (10-15 mL/kg), delaying correction in shock, and is ineffective for DOACs. Vitamin K IV reverses warfarin, not apixaban, which acts downstream of vitamin K-dependent factors. Andexanet’s targeted reversal, speed, and guideline support make it ideal for this unstable DOAC bleed.'
  },
  {
    id: 85,
    question: 'A 48-year-old male with alcohol use disorder presents with abdominal pain, jaundice, and fever. Labs show AST 200 U/L, ALT 90 U/L, bilirubin 8 mg/dL, and INR 1.8. Ultrasound reveals hepatomegaly and ascites. His MELD score is 25. He has no response to a 7-day trial of prednisolone for alcoholic hepatitis. What is the most appropriate next step in his management?',
    choices: ['Liver transplantation evaluation', 'Pentoxifylline PO', 'N-acetylcysteine IV', 'Continue prednisolone'],
    correctAnswer: 'Liver transplantation evaluation',
    explanation: 'This patient with alcohol use disorder, abdominal pain, jaundice, fever, AST 200 U/L (AST>ALT), bilirubin 8 mg/dL, INR 1.8, ascites, and MELD 25 has severe alcoholic hepatitis (AH), confirmed by prednisolone non-response (Lille score likely >0.45 after 7 days). Severe AH with MELD >20 and steroid failure carries a 70-80% 6-month mortality without intervention. Liver transplantation evaluation is the most appropriate next step per AASLD guidelines, as early transplant in select first-episode AH non-responders (e.g., SALT trial) improves survival (77% at 6 months vs. 23% medical therapy). His MELD 25 prioritizes him for listing, assuming sobriety and psychosocial clearance. Pentoxifylline PO (400 mg TID) was historically used for AH but lacks efficacy in steroid non-responders (STOPAH trial) and is obsolete in severe cases. N-acetylcysteine IV (NAC) enhances survival with steroids in early AH but not alone post-failure; it’s adjunctive, not definitive. Continuing prednisolone is futile with non-response, risking infection without benefit. Transplantation addresses his end-stage liver failure, offering the best prognosis in this dire scenario.'
  },
  {
    id: 86,
    question: 'A 60-year-old female with primary hyperparathyroidism presents with confusion and a serum calcium of 14 mg/dL. Her PTH is 120 pg/mL, creatinine is 1.8 mg/dL, and ECG shows a shortened QT interval. She has a history of nephrolithiasis. What is the most appropriate acute management of her hypercalcemia?',
    choices: ['Normal saline IV and calcitonin IM', 'Zoledronic acid IV', 'Cinacalcet PO', 'Parathyroidectomy'],
    correctAnswer: 'Normal saline IV and calcitonin IM',
    explanation: 'This patient with primary hyperparathyroidism (PHPT), confusion, severe hypercalcemia (14 mg/dL), elevated PTH (120 pg/mL), CKD (Cr 1.8 mg/dL), and shortened QT interval has a hypercalcemic crisis requiring acute management. Normal saline IV (e.g., 200-300 mL/hr) and calcitonin IM (4 IU/kg q12h) are the most appropriate per Endocrine Society guidelines, rapidly lowering calcium to relieve neurologic symptoms (confusion) and prevent arrhythmias. Saline rehydrates (hypercalcemia causes diuresis) and dilutes serum calcium within hours, while calcitonin inhibits osteoclasts, dropping calcium 1-2 mg/dL within 4-6 hours, though tachyphylaxis limits use beyond 48 hours. Zoledronic acid IV (4 mg) effectively lowers calcium in malignancy but peaks at 2-4 days, too slow for crisis; it’s adjunctive later in PHPT. Cinacalcet PO (30-60 mg/day) reduces PTH in PHPT but acts over days-weeks, not acutely, and is for non-surgical candidates. Parathyroidectomy is definitive for PHPT but not immediate in crisis; it follows stabilization. Saline and calcitonin’s rapid onset and synergy make them the best acute therapy, bridging to definitive care.'
  },
  {
    id: 87,
    question: 'A 52-year-old male with type 2 diabetes and CKD stage 3 presents with chest pain and dyspnea. His ECG shows new T-wave inversions in V1-V3, troponin is 0.9 ng/mL, and HbA1c is 8.5%. Coronary angiography reveals a 70% proximal LAD stenosis. His eGFR is 40 mL/min. What is the most appropriate revascularization strategy given his renal function?',
    choices: ['Percutaneous coronary intervention (PCI) with drug-eluting stent', 'Coronary artery bypass grafting (CABG)', 'Medical therapy with ranolazine', 'Fractional flow reserve (FFR)-guided PCI'],
    correctAnswer: 'Percutaneous coronary intervention (PCI) with drug-eluting stent',
    explanation: 'This patient with type 2 diabetes, CKD stage 3 (eGFR 40 mL/min), chest pain, dyspnea, T-wave inversions in V1-V3, and troponin 0.9 ng/mL has an NSTEMI with a 70% proximal LAD stenosis. Percutaneous coronary intervention (PCI) with a drug-eluting stent (DES) is the most appropriate revascularization strategy per ACC/AHA guidelines, relieving ischemia and reducing MACE in single-vessel disease, especially proximal LAD, a high-risk lesion. DES (e.g., everolimus-eluting) minimizes restenosis in diabetes (FREEDOM trial subanalyses), and CKD stage 3 tolerates PCI with contrast minimization (e.g., iso-osmolar agents, <100 mL). CABG is preferred in multivessel disease or diabetes with left main involvement (SYNTAX trial), but his single-vessel LAD lesion doesn’t warrant it; CKD increases CABG morbidity (bleeding, infection). Medical therapy with ranolazine reduces angina but not mortality in NSTEMI, inadequate for proximal LAD occlusion risk. FFR-guided PCI assesses lesion significance (e.g., FFR <0.80), but 70% proximal LAD with NSTEMI symptoms justifies intervention without FFR per guidelines; CKD limits additional contrast. PCI with DES balances efficacy, safety, and renal considerations.'
  },
  {
    id: 88,
    question: 'A 45-year-old female with rheumatoid arthritis on adalimumab presents with fever, night sweats, and a dry cough. Chest CT shows miliary nodules, and sputum AFB stain is negative. Her Quantiferon-TB test was positive 6 months ago, untreated due to patient refusal. Liver function tests are normal. What is the most appropriate empiric therapy while awaiting culture results?',
    choices: ['Rifampin, isoniazid, pyrazinamide, ethambutol (RIPE)', 'Levofloxacin and azithromycin', 'Amphotericin B IV', 'Prednisone PO'],
    correctAnswer: 'Rifampin, isoniazid, pyrazinamide, ethambutol (RIPE)',
    explanation: 'This patient with rheumatoid arthritis (RA) on adalimumab, fever, night sweats, dry cough, and miliary nodules on chest CT likely has disseminated tuberculosis (TB) reactivation, a risk with anti-TNF therapy (adalimumab). Her positive Quantiferon-TB test 6 months ago indicates latent TB infection (LTBI), untreated, and immunosuppression likely triggered progression. Miliary TB, a hematogenous spread, presents with diffuse micronodules, mimicking fungal or malignancy, but her TB history and adalimumab use strongly favor TB. Empiric RIPE therapy (rifampin 10 mg/kg, isoniazid 5 mg/kg, pyrazinamide 15-30 mg/kg, ethambutol 15-20 mg/kg daily) is the most appropriate per ATS/IDSA guidelines, covering active TB while awaiting cultures (AFB negative in 50% of miliary cases due to low bacillary load). Levofloxacin and azithromycin treat atypical pneumonia (e.g., Legionella), but miliary pattern and TB risk argue against this. Amphotericin B IV targets disseminated fungal infections (e.g., histoplasmosis), possible in immunosuppression, but normal LFTs and TB history prioritize TB; biopsy might differentiate later. Prednisone PO worsens TB dissemination, contraindicated without infection exclusion. RIPE’s urgency, TB likelihood, and guideline support make it the best empiric choice.'
  },
  {
    id: 89,
    question: 'A 68-year-old male with chronic lymphocytic leukemia (CLL) presents with fatigue and dyspnea. His hemoglobin is 7 g/dL, reticulocyte count is 0.2%, and direct Coombs test is positive. Bone marrow biopsy shows adequate megakaryocytes and erythroid hypoplasia. What is the most appropriate therapy for his anemia?',
    choices: ['Prednisone PO', 'Rituximab IV', 'Erythropoietin SC', 'Blood transfusion alone'],
    correctAnswer: 'Prednisone PO',
    explanation: 'This patient with CLL, fatigue, dyspnea, severe anemia (Hb 7 g/dL), low reticulocyte count (0.2%), positive direct Coombs test, and bone marrow erythroid hypoplasia has autoimmune hemolytic anemia (AIHA), a common CLL complication from immune dysregulation. The Coombs positivity confirms warm IgG-mediated hemolysis, and hypoplasia reflects suppressed erythropoiesis from autoantibodies or CLL infiltration. Prednisone PO (1 mg/kg/day) is the most appropriate therapy per ASH guidelines, rapidly suppressing hemolysis by reducing antibody production and splenic clearance, with response in 70-80% of warm AIHA cases within 1-3 weeks. Rituximab IV (375 mg/m² weekly x4) targets B-cells producing autoantibodies, effective in steroid-refractory AIHA or CLL progression, but its slower onset (weeks) and cost make it second-line here. Erythropoietin SC stimulates red cell production but is ineffective in AIHA with active hemolysis and marrow suppression; it’s for anemia of chronic disease. Blood transfusion alone temporizes severe symptoms (e.g., hypoxia) but doesn’t treat hemolysis, risking alloimmunization; it’s supportive with steroids. Prednisone’s speed, efficacy, and guideline role make it the best initial therapy.'
  },
  {
    id: 90,
    question: 'A 55-year-old female with systemic sclerosis presents with digital ulcers and Raynaud’s phenomenon. Her BP is 160/100 mmHg, and labs show a creatinine rise from 1.0 to 2.5 mg/dL over 2 weeks, with proteinuria 1 g/day. Renal biopsy reveals thrombotic microangiopathy (TMA). What is the most appropriate therapy for her scleroderma renal crisis?',
    choices: ['Captopril PO', 'Plasma exchange', 'Eculizumab IV', 'Nifedipine PO'],
    correctAnswer: 'Captopril PO',
    explanation: 'This patient with systemic sclerosis (SSc), digital ulcers, Raynaud’s, hypertension (160/100 mmHg), acute kidney injury (Cr 1.0 to 2.5 mg/dL), proteinuria (1 g/day), and biopsy showing thrombotic microangiopathy (TMA) has scleroderma renal crisis (SRC), a life-threatening SSc complication from intimal proliferation and renin-mediated hypertension. Captopril PO (e.g., 25 mg q8h, titrated) is the most appropriate therapy per EULAR guidelines, rapidly controlling BP and reducing renin-angiotensin drive, improving renal perfusion and survival (60-70% vs. 10% untreated). SRC’s TMA mimics TTP/HUS, but SSc context, normal platelets (assumed), and hypertension distinguish it. Plasma exchange treats TTP with ADAMTS13 deficiency, not SRC, where renin, not microthrombi, is primary; evidence is lacking in SRC. Eculizumab IV targets complement in atypical HUS, but SRC’s pathophysiology (endothelial injury, not complement) and SSc link exclude it. Nifedipine PO manages Raynaud’s or mild hypertension but lacks SRC-specific renin inhibition, risking renal worsening. Captopril’s targeted mechanism, efficacy, and guideline support make it the best choice, with dialysis if AKI persists.'
  },
  {
    id: 91,
    question: 'A 60-year-old male with type 2 diabetes presents with fatigue and a random glucose of 400 mg/dL. His pH is 7.35, serum osmolality is 320 mOsm/kg, and sodium is 130 mEq/L. He has no Kussmaul breathing. What is the most appropriate initial therapy for his hyperglycemic state?',
    choices: ['Normal saline IV', 'Insulin IV', 'Potassium chloride IV', 'Sodium bicarbonate IV'],
    correctAnswer: 'Normal saline IV',
    explanation: 'This patient with type 2 diabetes, fatigue, hyperglycemia (glucose 400 mg/dL), normal pH (7.35), elevated osmolality (320 mOsm/kg), and hyponatremia (130 mEq/L) has hyperosmolar hyperglycemic state (HHS), a complication of type 2 diabetes with profound dehydration and osmotic diuresis, but no acidosis (unlike DKA). Normal saline IV (e.g., 1-2 L bolus, then 250 mL/hr) is the most appropriate initial therapy per ADA guidelines, correcting volume depletion (10-15 L deficit typical) to restore perfusion and lower glucose via dilution and renal clearance, before insulin risks hypokalemia or rapid osmotic shifts. Insulin IV (e.g., 0.1 units/kg/hr) follows fluids in HHS, as early insulin without rehydration can precipitate shock or cerebral edema; his glucose isn’t >600 mg/dL, but treatment principles apply. Potassium chloride IV is needed later (K+ likely low, not given) once fluids stabilize urine output, not initially. Sodium bicarbonate IV is for DKA acidosis (pH <7.3), irrelevant here with pH 7.35. Normal saline’s primacy in HHS resuscitation, safety, and guideline support make it the best first step.'
  },
  {
    id: 92,
    question: 'A 70-year-old female with osteoporosis presents with acute back pain after a fall. Spine X-ray shows a new L1 compression fracture, and labs reveal a calcium of 11.5 mg/dL, PTH <10 pg/mL, and 25-hydroxyvitamin D of 15 ng/mL. SPEP shows a monoclonal spike. What is the most appropriate next diagnostic step to evaluate her hypercalcemia and fracture?',
    choices: ['Bone marrow biopsy', 'Parathyroid scan', 'Serum PTHrP level', 'Whole-body PET-CT'],
    correctAnswer: 'Bone marrow biopsy',
    explanation: 'This patient with osteoporosis, acute L1 compression fracture, hypercalcemia (11.5 mg/dL), suppressed PTH (<10 pg/mL), low vitamin D (15 ng/mL), and a monoclonal spike on SPEP likely has multiple myeloma (MM), a plasma cell malignancy causing osteolytic lesions and hypercalcemia via osteoclast activation (e.g., RANKL). Bone marrow biopsy is the most appropriate next step per IMWG guidelines, confirming MM with clonal plasma cells (>10%), correlating fracture (CRAB criteria: Calcium elevation, Renal impairment, Anemia, Bone lesions), and guiding therapy (e.g., lenalidomide, bortezomib). Suppressed PTH rules out primary hyperparathyroidism, so a parathyroid scan is unnecessary. Serum PTHrP evaluates malignancy-associated hypercalcemia (e.g., squamous cell carcinoma), but MM’s monoclonal spike and fracture favor a marrow source over PTHrP-mediated etiology; it’s adjunctive later. Whole-body PET-CT detects MM lesions but doesn’t confirm diagnosis histologically, less specific than biopsy here. Bone marrow biopsy’s diagnostic yield, specificity for MM, and guideline role make it the best next step.'
  },
  {
    id: 93,
    question: 'A 50-year-old male with hepatitis C cirrhosis presents with confusion and asterixis. His ammonia is 120 µmol/L, and EEG shows triphasic waves. Lactulose improves symptoms, but he develops diarrhea and a potassium of 2.8 mEq/L. What is the most appropriate adjustment to his hepatic encephalopathy management?',
    choices: ['Add rifaximin PO and potassium chloride IV', 'Increase lactulose dose', 'Stop lactulose and start neomycin PO', 'Add branched-chain amino acids IV'],
    correctAnswer: 'Add rifaximin PO and potassium chloride IV',
    explanation: 'This patient with hepatitis C cirrhosis, confusion, asterixis, elevated ammonia (120 µmol/L), and triphasic waves has hepatic encephalopathy (HE), initially improved by lactulose, a first-line therapy trapping ammonia in the colon. However, diarrhea and hypokalemia (K 2.8 mEq/L) from lactulose overuse (osmotic laxative) complicate management, as low potassium worsens HE by increasing renal ammonia production. Adding rifaximin PO (550 mg BID) and potassium chloride IV (e.g., 20-40 mEq) is the most appropriate adjustment per AASLD guidelines. Rifaximin reduces gut ammonia production, decreasing HE recurrence (RIME trial: 40% risk reduction), allowing lactulose dose stabilization, while IV potassium corrects hypokalemia rapidly, mitigating HE exacerbation. Increasing lactulose worsens diarrhea and hypokalemia, counterproductive here. Stopping lactulose for neomycin PO risks ototoxicity/nephrotoxicity without superior efficacy; rifaximin is preferred. Branched-chain amino acids IV improve nutrition in cirrhosis but don’t acutely lower ammonia or address potassium, lacking HE trial support. Rifaximin and potassium optimize HE control and correct the electrolyte imbalance effectively.'
  },
  {
    id: 94,
    question: 'A 45-year-old female with polycythemia vera (PV) on hydroxyurea presents with headache and blurred vision. Her hematocrit is 50%, platelet count is 600,000/µL, and JAK2 V617F mutation is positive. Fundoscopy shows papilledema. What is the most appropriate next step to address her neurologic symptoms?',
    choices: ['Phlebotomy', 'Aspirin PO', 'Lumbar puncture', 'Acetazolamide PO'],
    correctAnswer: 'Phlebotomy',
    explanation: 'This patient with polycythemia vera (PV), hydroxyurea therapy, hematocrit 50%, platelets 600,000/µL, JAK2 V617F mutation, headache, blurred vision, and papilledema likely has hyperviscosity syndrome from elevated red cell mass, increasing blood viscosity and intracranial pressure (ICP). Phlebotomy (e.g., 300-500 mL, targeting Hct <45%) is the most appropriate next step per ASH guidelines, rapidly reducing viscosity, relieving neurologic symptoms, and preventing thrombosis, a PV hallmark (CYTO-PV trial: Hct <45% reduces CV events). Hydroxyurea controls myeloproliferation but hasn’t normalized Hct here, necessitating urgent phlebotomy. Aspirin PO (81 mg/day) prevents thrombosis in PV but doesn’t address acute hyperviscosity or ICP; it’s adjunctive. Lumbar puncture evaluates ICP (e.g., pseudotumor cerebri), but PV’s viscosity etiology and papilledema favor phlebotomy first; LP risks herniation without viscosity correction. Acetazolamide PO lowers ICP in idiopathic intracranial hypertension but not PV-related hyperviscosity, lacking evidence here. Phlebotomy’s direct effect on Hct, symptom relief, and guideline support make it the best immediate step.'
  },
  {
    id: 95,
    question: 'A 60-year-old male with type 2 diabetes and CKD stage 4 presents with chest pain and dyspnea. His ECG shows ST elevation in V1-V4, and troponin is 2.0 ng/mL. His creatinine is 3.0 mg/dL, and eGFR is 25 mL/min. Primary PCI is unavailable within 90 minutes. What is the most appropriate reperfusion therapy given his renal function and timing?',
    choices: ['Tenecteplase IV', 'Heparin IV alone', 'Streptokinase IV', 'Transfer for delayed PCI'],
    correctAnswer: 'Tenecteplase IV',
    explanation: 'This patient with type 2 diabetes, CKD stage 4 (eGFR 25 mL/min), chest pain, dyspnea, ST elevation in V1-V4, and troponin 2.0 ng/mL has an anterior STEMI, requiring reperfusion. With primary PCI unavailable within 90 minutes, fibrinolysis is indicated per ACC/AHA guidelines if door-to-needle time is <30 minutes. Tenecteplase IV (e.g., 30-50 mg bolus, weight-based) is the most appropriate, offering fibrin-specific lysis, single-dose ease, and reduced bleeding risk vs. streptokinase (ASSENT-2 trial: equivalent efficacy to alteplase, less non-cerebral bleeding). CKD increases bleeding risk, but tenecteplase’s short half-life and no renal adjustment favor it over heparin alone, which prevents clot extension but doesn’t reperfuse (mortality benefit absent). Streptokinase IV is less fibrin-specific, risks hypotension/allergy, and has higher intracranial hemorrhage rates, less ideal in CKD. Transfer for delayed PCI (>90 minutes) loses the time-to-reperfusion window (GUSTO-I: mortality rises 1% per 30-min delay), unacceptable here. Tenecteplase balances efficacy, safety in CKD, and guideline support for timely STEMI reperfusion.'
  },
  {
    id: 96,
    question: 'A 55-year-old female with primary biliary cholangitis (PBC) presents with fatigue and jaundice. Her ALP is 500 U/L, bilirubin is 4 mg/dL, and AMA is positive. UDCA at 15 mg/kg/day for 2 years has failed, and liver biopsy shows stage 4 fibrosis. Her MELD score is 18. What is the most appropriate next step in her management?',
    choices: ['Liver transplantation evaluation', 'Obeticholic acid PO', 'Fibrates PO', 'Cholestyramine PO'],
    correctAnswer: 'Liver transplantation evaluation',
    explanation: 'This patient with PBC, fatigue, jaundice, ALP 500 U/L, bilirubin 4 mg/dL, positive AMA, stage 4 fibrosis (cirrhosis), and MELD 18 has end-stage liver disease after UDCA failure (ALP >1.67x ULN, bilirubin rise). Liver transplantation evaluation is the most appropriate next step per AASLD guidelines, offering a cure for PBC cirrhosis with 5-year survival >80% (UNOS data), indicated by MELD ≥15 or decompensation (jaundice here). UDCA (15 mg/kg/day) slows progression in early PBC, but non-response after 2 years and cirrhosis necessitate transplant. Obeticholic acid PO (5-10 mg/day) improves biochemistry in UDCA non-responders (POISE trial) but lacks survival benefit in stage 4, delaying inevitable transplant. Fibrates (e.g., bezafibrate) reduce ALP in PBC but are unproven in cirrhosis and not FDA-approved for this; they’re adjunctive at best. Cholestyramine PO relieves pruritus but doesn’t alter disease course or MELD. Transplantation addresses her advanced PBC, offering the best prognosis given her MELD and fibrosis.'
  },
  {
    id: 97,
    question: 'A 65-year-old male with hypertension and CKD presents with a serum potassium of 7.0 mEq/L and widened QRS on ECG. His creatinine is 2.8 mg/dL, and he takes lisinopril and spironolactone. He has no acidosis (pH 7.40). What is the most appropriate initial therapy to prevent cardiac arrhythmia?',
    choices: ['Calcium gluconate IV', 'Insulin and glucose IV', 'Sodium bicarbonate IV', 'Sodium polystyrene sulfonate PO'],
    correctAnswer: 'Calcium gluconate IV',
    explanation: 'This patient with hypertension, CKD (Cr 2.8 mg/dL), hyperkalemia (K 7.0 mEq/L), widened QRS, and lisinopril/spironolactone use faces imminent risk of ventricular arrhythmias from potassium’s membrane depolarization effects. Calcium gluconate IV (e.g., 10 mL of 10% solution over 2-5 minutes) is the most appropriate initial therapy per AHA guidelines, stabilizing cardiac membranes within minutes by raising the threshold potential, preventing arrest despite not lowering potassium. His ECG changes (widened QRS) mandate urgent action, and CKD with RAAS inhibitors (lisinopril, spironolactone) explains hyperkalemia via reduced excretion. Insulin and glucose IV (10 units/25 g) shift potassium intracellularly (20-30 min onset), critical next, but don’t address immediate arrhythmia risk. Sodium bicarbonate IV shifts potassium in acidosis (pH 7.40 here excludes this), ineffective without H+ excess. Sodium polystyrene sulfonate PO (15-30 g) removes potassium over hours, too slow for ECG changes, and risks necrosis in CKD. Calcium gluconate’s rapid cardioprotection and guideline priority make it the best first step, followed by shifting/excretion strategies.'
  },
  {
    id: 98,
    question: 'A 40-year-old female with ulcerative colitis on infliximab presents with abdominal pain and bloody diarrhea. Colonoscopy shows severe pancolitis, and her CRP is 100 mg/L. She fails a 5-day course of IV hydrocortisone. Her albumin is 2.5 g/dL, and stool cultures are negative. What is the most appropriate rescue therapy to avoid colectomy?',
    choices: ['Cyclosporine IV', 'Tacrolimus PO', 'Adalimumab SC', 'Tofacitinib PO'],
    correctAnswer: 'Cyclosporine IV',
    explanation: 'This patient with ulcerative colitis (UC) on infliximab, abdominal pain, bloody diarrhea, severe pancolitis, elevated CRP (100 mg/L), hypoalbuminemia (2.5 g/dL), and IV hydrocortisone failure (5 days) has acute severe UC (ASUC) refractory to steroids, risking toxic megacolon or perforation. Cyclosporine IV (2 mg/kg/day, targeting 150-250 ng/mL) is the most appropriate rescue therapy per ECCO guidelines, rapidly inhibiting T-cell activation to induce remission in 60-80% of steroid-refractory ASUC cases (Järnerot trial), avoiding colectomy. Infliximab failure (anti-TNF) suggests resistance, necessitating a different mechanism. Tacrolimus PO achieves similar remission but lacks IV speed and robust ASUC data; it’s second-line. Adalimumab SC, another anti-TNF, is unlikely to work given infliximab failure, with slower onset (weeks) unsuitable for ASUC. Tofacitinib PO, a JAK inhibitor, is for moderate UC maintenance, not acute rescue, with delayed efficacy. Cyclosporine’s rapid action, efficacy in ASUC, and guideline support make it the best choice, bridging to maintenance (e.g., azathioprine) if successful.'
  },
  {
    id: 99,
    question: 'A 70-year-old male with multiple myeloma on bortezomib presents with dyspnea and peripheral edema. His BNP is 800 pg/mL, and echocardiography shows an EF of 40% with a speckled pattern. Renal function is normal, and troponin is 0.1 ng/mL. What is the most appropriate diagnostic test to confirm the etiology of his heart failure?',
    choices: ['Endomyocardial biopsy', 'Serum free light chain assay', 'Cardiac MRI', 'Coronary angiography'],
    correctAnswer: 'Endomyocardial biopsy',
    explanation: 'This patient with multiple myeloma (MM) on bortezomib, dyspnea, edema, elevated BNP (800 pg/mL), EF 40%, and a speckled echocardiogram likely has cardiac amyloidosis (AL type), a rare MM complication from light chain deposition causing restrictive cardiomyopathy. Endomyocardial biopsy is the most appropriate diagnostic test per ESC guidelines, confirming amyloid with Congo red staining and typing (AL vs. ATTR) via mass spectrometry, critical for therapy (e.g., chemotherapy for AL). The speckled pattern, HF with preserved renal function (unlike MM nephropathy), and low troponin (ruling out ischemia) strongly suggest amyloidosis over bortezomib cardiotoxicity (reversible, EF drop uncommon). Serum free light chain assay supports AL amyloidosis (elevated kappa/lambda) but isn’t confirmatory without tissue; it’s adjunctive. Cardiac MRI detects amyloid (late gadolinium enhancement) but lacks specificity vs. biopsy and doesn’t type amyloid, delaying treatment. Coronary angiography excludes CAD (troponin 0.1 ng/mL is nonspecific), irrelevant here with amyloid signs. Biopsy’s gold-standard status, diagnostic precision, and therapeutic impact make it the best test.'
  },
  {
    id: 100,
    question: 'A 55-year-old male with alcoholic cirrhosis presents with hematemesis and hypotension (BP 80/50 mmHg). Endoscopy shows bleeding gastric varices, and octreotide fails to control bleeding. His MELD score is 30. What is the most appropriate intervention to achieve hemostasis given his refractory bleeding?',
    choices: ['Transjugular intrahepatic portosystemic shunt (TIPS)', 'Balloon tamponade', 'Sclerotherapy', 'Propranolol PO'],
    correctAnswer: 'Transjugular intrahepatic portosystemic shunt (TIPS)',
    explanation: 'This patient with alcoholic cirrhosis, hematemesis, hypotension (80/50 mmHg), bleeding gastric varices, octreotide failure, and MELD 30 has refractory variceal hemorrhage, a life-threatening complication of portal hypertension. Transjugular intrahepatic portosystemic shunt (TIPS) is the most appropriate intervention per AASLD guidelines, reducing portal pressure by shunting blood from portal to hepatic veins, achieving hemostasis in >90% of refractory gastric variceal bleeds (Garcia-Pagán trial: improved survival vs. medical therapy). Gastric varices, unlike esophageal, respond poorly to banding and octreotide (vasoconstrictor), and his instability/MELD 30 necessitate urgent action. Balloon tamponade (e.g., Sengstaken-Blakemore tube) temporizes bleeding but risks aspiration/rebleeding, a bridge to TIPS, not definitive here with failure already. Sclerotherapy injects sclerosant but is less effective for gastric varices (larger, deeper) and lacks trial support vs. TIPS. Propranolol PO prevents rebleeding long-term but is futile in active hemorrhage. TIPS’s efficacy, guideline endorsement, and suitability for refractory gastric varices make it the best choice, despite HE risk in MELD 30, manageable post-procedure.'
  }
];

export default internalMedicineQuestions;
