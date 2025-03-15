// src/data/cardiology.js

const cardiologyQuestions = [
  {
    id: 1,
    question: 'What is the most common cause of a heart attack?',
    choices: ['Smoking', 'High cholesterol', 'Low blood pressure', 'Obesity'],
    correctAnswer: 'High cholesterol',
    explanation:
      'High cholesterol is a major risk factor for atherosclerosis, which can lead to heart attacks by causing coronary artery occlusion.',
  },
  {
    id: 2,
    question: 'What is the normal range for blood pressure?',
    choices: ['120/80 mmHg', '100/60 mmHg', '140/90 mmHg', '160/100 mmHg'],
    correctAnswer: '120/80 mmHg',
    explanation:
      'A normal blood pressure reading is around 120/80 mmHg. Higher or lower readings may indicate hypertension or hypotension, respectively.',
  },
  {
    id: 3,
    question: 'Which ECG finding is most specific for acute ST-elevation myocardial infarction (STEMI)?',
    choices: ['Q waves', 'T-wave inversion', 'ST elevation ≥1 mm', 'Prolonged PR interval'],
    correctAnswer: 'ST elevation ≥1 mm',
    explanation:
      'ST elevation ≥1 mm in two or more contiguous leads is the hallmark ECG finding of STEMI, indicating acute transmural ischemia.',
  },
  {
    id: 4,
    question: 'What is the primary energy substrate for the myocardium under normal conditions?',
    choices: ['Glucose', 'Fatty acids', 'Ketones', 'Lactate'],
    correctAnswer: 'Fatty acids',
    explanation:
      'Fatty acids account for 60-90% of myocardial energy production under aerobic conditions, with glucose as a secondary substrate.',
  },
  {
    id: 5,
    question: 'Which condition is most likely to cause a widened mediastinum on chest X-ray?',
    choices: ['Pneumothorax', 'Aortic dissection', 'Pericardial effusion', 'Pulmonary embolism'],
    correctAnswer: 'Aortic dissection',
    explanation:
      'Aortic dissection often presents with a widened mediastinum due to the separation of aortic wall layers, a critical finding in acute chest pain evaluation.',
  },
  {
    id: 6,
    question: 'What is the target INR range for a patient with a mechanical mitral valve on warfarin?',
    choices: ['1.5-2.0', '2.0-3.0', '2.5-3.5', '3.5-4.5'],
    correctAnswer: '2.5-3.5',
    explanation:
      'Mechanical mitral valves require a higher INR (2.5-3.5) due to increased thrombogenicity compared to aortic valves (2.0-3.0).',
  },
  {
    id: 7,
    question: 'Which murmur is classically associated with aortic stenosis?',
    choices: ['Holosystolic at apex', 'Crescendo-decrescendo systolic at right upper sternal border', 'Diastolic rumble', 'Continuous machinery murmur'],
    correctAnswer: 'Crescendo-decrescendo systolic at right upper sternal border',
    explanation:
      'Aortic stenosis produces a crescendo-decrescendo systolic murmur heard best at the right upper sternal border, radiating to the carotids.',
  },
  {
    id: 8,
    question: 'In acute decompensated heart failure, which biomarker is most indicative of myocardial strain?',
    choices: ['Troponin', 'BNP', 'D-dimer', 'Creatinine kinase'],
    correctAnswer: 'BNP',
    explanation:
      'B-type natriuretic peptide (BNP) is released in response to ventricular wall stress and is a key diagnostic marker in heart failure.',
  },
  {
    id: 9,
    question: 'What is the most common congenital heart defect presenting with cyanosis at birth?',
    choices: ['Ventricular septal defect', 'Tetralogy of Fallot', 'Atrial septal defect', 'Patent ductus arteriosus'],
    correctAnswer: 'Tetralogy of Fallot',
    explanation:
      'Tetralogy of Fallot causes right-to-left shunting, leading to cyanosis due to pulmonary stenosis, right ventricular hypertrophy, VSD, and overriding aorta.',
  },
  {
    id: 10,
    question: 'Which antiarrhythmic drug is contraindicated in patients with Wolff-Parkinson-White syndrome and atrial fibrillation?',
    choices: ['Amiodarone', 'Digoxin', 'Sotalol', 'Procainamide'],
    correctAnswer: 'Digoxin',
    explanation:
      'Digoxin slows AV node conduction but can enhance accessory pathway conduction in WPW, potentially worsening ventricular rates in AF.',
  },
  {
    id: 11,
    question: 'What is the hallmark echocardiographic finding in hypertrophic cardiomyopathy?',
    choices: ['Dilated left atrium', 'Systolic anterior motion of the mitral valve', 'Global hypokinesis', 'Pericardial effusion'],
    correctAnswer: 'Systolic anterior motion of the mitral valve',
    explanation:
      'Systolic anterior motion (SAM) of the mitral valve causes dynamic left ventricular outflow tract obstruction in hypertrophic cardiomyopathy.',
  },
  {
    id: 12,
    question: 'Which coronary artery is most commonly occluded in an inferior wall myocardial infarction?',
    choices: ['Left anterior descending', 'Right coronary artery', 'Left circumflex', 'Obtuse marginal'],
    correctAnswer: 'Right coronary artery',
    explanation:
      'The right coronary artery (RCA) supplies the inferior wall of the heart and is occluded in 80-90% of inferior STEMIs.',
  },
  {
    id: 13,
    question: 'What is the primary mechanism of action of nitroglycerin in relieving angina?',
    choices: ['Beta-blockade', 'Calcium channel blockade', 'Venodilation', 'Arterial constriction'],
    correctAnswer: 'Venodilation',
    explanation:
      'Nitroglycerin reduces preload via venodilation, decreasing myocardial oxygen demand and relieving angina.',
  },
  {
    id: 14,
    question: 'Which electrolyte abnormality is most likely to cause torsades de pointes?',
    choices: ['Hyperkalemia', 'Hypomagnesemia', 'Hypercalcemia', 'Hyponatremia'],
    correctAnswer: 'Hypomagnesemia',
    explanation:
      'Hypomagnesemia prolongs the QT interval, predisposing to torsades de pointes, a polymorphic ventricular tachycardia.',
  },
  {
    id: 15,
    question: 'In a patient with suspected endocarditis, which organism is the most common cause of native valve infection?',
    choices: ['Staphylococcus aureus', 'Streptococcus viridans', 'Enterococcus faecalis', 'Candida albicans'],
    correctAnswer: 'Streptococcus viridans',
    explanation:
      'Streptococcus viridans is the leading cause of subacute bacterial endocarditis on native valves, often linked to dental procedures.',
  },
  {
    id: 16,
    question: 'What is the gold standard diagnostic test for pulmonary hypertension?',
    choices: ['Echocardiography', 'Right heart catheterization', 'CT pulmonary angiography', 'Ventilation-perfusion scan'],
    correctAnswer: 'Right heart catheterization',
    explanation:
      'Right heart catheterization directly measures pulmonary artery pressure, confirming pulmonary hypertension when mean PAP ≥25 mmHg at rest.',
  },
  {
    id: 17,
    question: 'Which finding on physical exam is most specific for cardiac tamponade?',
    choices: ['Pulsus paradoxus', 'Muffled heart sounds', 'Jugular venous distension', 'Hypotension'],
    correctAnswer: 'Pulsus paradoxus',
    explanation:
      'Pulsus paradoxus (>10 mmHg drop in systolic BP during inspiration) is highly specific for cardiac tamponade due to impaired ventricular filling.',
  },
  {
    id: 18,
    question: 'What is the most common cause of secondary hypertension in young adults?',
    choices: ['Pheochromocytoma', 'Coarctation of the aorta', 'Renal artery stenosis', 'Primary aldosteronism'],
    correctAnswer: 'Renal artery stenosis',
    explanation:
      'Renal artery stenosis activates the renin-angiotensin system, leading to secondary hypertension, often seen in young adults with fibromuscular dysplasia.',
  },
  {
    id: 19,
    question: 'Which ECG change is most characteristic of hyperkalemia?',
    choices: ['Peaked T waves', 'U waves', 'Shortened QT interval', 'ST depression'],
    correctAnswer: 'Peaked T waves',
    explanation:
      'Peaked T waves are an early ECG sign of hyperkalemia due to accelerated repolarization from elevated extracellular potassium.',
  },
  {
    id: 20,
    question: 'What is the primary pathophysiological mechanism in dilated cardiomyopathy?',
    choices: ['Diastolic dysfunction', 'Systolic dysfunction', 'Valvular regurgitation', 'Myocardial ischemia'],
    correctAnswer: 'Systolic dysfunction',
    explanation:
      'Dilated cardiomyopathy is characterized by ventricular dilation and systolic dysfunction, leading to reduced ejection fraction.',
  },
  {
    id: 21,
    question: 'Which drug is first-line for rate control in atrial fibrillation with rapid ventricular response?',
    choices: ['Metoprolol', 'Amiodarone', 'Digoxin', 'Diltiazem'],
    correctAnswer: 'Metoprolol',
    explanation:
      'Beta-blockers like metoprolol are first-line for rate control in AF with RVR due to their efficacy and favorable side effect profile.',
  },
  {
    id: 22,
    question: 'What is the most common complication of an untreated ventricular septal defect?',
    choices: ['Pulmonary hypertension', 'Aortic dissection', 'Endocarditis', 'Heart block'],
    correctAnswer: 'Pulmonary hypertension',
    explanation:
      'Untreated VSDs cause left-to-right shunting, leading to pulmonary overcirculation and eventual pulmonary hypertension (Eisenmenger syndrome).',
  },
  {
    id: 23,
    question: 'Which type of shock is most likely in a patient with warm, dry skin and bounding pulses?',
    choices: ['Cardiogenic', 'Hypovolemic', 'Distributive', 'Obstructive'],
    correctAnswer: 'Distributive',
    explanation:
      'Distributive shock (e.g., septic shock) often presents with vasodilation, leading to warm, dry skin and bounding pulses despite hypotension.',
  },
  {
    id: 24,
    question: 'What is the primary site of action for loop diuretics in heart failure management?',
    choices: ['Proximal tubule', 'Loop of Henle', 'Distal tubule', 'Collecting duct'],
    correctAnswer: 'Loop of Henle',
    explanation:
      'Loop diuretics (e.g., furosemide) inhibit the Na-K-2Cl cotransporter in the thick ascending limb of the Loop of Henle, promoting diuresis.',
  },
  {
    id: 25,
    question: 'Which genetic mutation is most commonly associated with long QT syndrome type 1?',
    choices: ['SCN5A', 'KCNQ1', 'HERG', 'RYR2'],
    correctAnswer: 'KCNQ1',
    explanation:
      'KCNQ1 mutations impair the IKs potassium channel, prolonging ventricular repolarization in LQT1, the most common form of long QT syndrome.',
  },
  {
    id: 26,
    question: 'What is the most sensitive imaging modality for detecting acute myocarditis?',
    choices: ['Echocardiography', 'Cardiac MRI', 'CT coronary angiography', 'PET scan'],
    correctAnswer: 'Cardiac MRI',
    explanation:
      'Cardiac MRI with late gadolinium enhancement is highly sensitive for detecting myocardial inflammation and edema in acute myocarditis.',
  },
  {
    id: 27,
    question: 'Which valve lesion is most likely to cause a widened pulse pressure?',
    choices: ['Mitral stenosis', 'Aortic regurgitation', 'Tricuspid stenosis', 'Pulmonary regurgitation'],
    correctAnswer: 'Aortic regurgitation',
    explanation:
      'Aortic regurgitation causes a widened pulse pressure due to diastolic runoff into the left ventricle, lowering diastolic BP.',
  },
  {
    id: 28,
    question: 'What is the primary trigger for ventricular fibrillation in Brugada syndrome?',
    choices: ['Fever', 'Exercise', 'Hypokalemia', 'Tachycardia'],
    correctAnswer: 'Fever',
    explanation:
      'Fever exacerbates sodium channel dysfunction in Brugada syndrome, increasing the risk of ventricular fibrillation.',
  },
  {
    id: 29,
    question: 'Which condition is most likely to cause a fixed split S2 heart sound?',
    choices: ['Atrial septal defect', 'Ventricular septal defect', 'Pulmonary stenosis', 'Mitral regurgitation'],
    correctAnswer: 'Atrial septal defect',
    explanation:
      'A fixed split S2 occurs in ASD due to persistent left-to-right shunting, equalizing right and left atrial pressures throughout the respiratory cycle.',
  },
  {
    id: 30,
    question: 'What is the primary mechanism of action of sacubitril in heart failure treatment?',
    choices: ['ACE inhibition', 'Neprilysin inhibition', 'Beta-blockade', 'Aldosterone antagonism'],
    correctAnswer: 'Neprilysin inhibition',
    explanation:
      'Sacubitril inhibits neprilysin, increasing natriuretic peptide levels, which promote vasodilation and diuresis in heart failure.',
  },
  {
    id: 31,
    question: 'Which coronary artery supplies the sinoatrial node in most individuals?',
    choices: ['Left anterior descending', 'Right coronary artery', 'Left circumflex', 'Posterior descending'],
    correctAnswer: 'Right coronary artery',
    explanation:
      'The SA node artery arises from the RCA in 55-60% of people, making it the most common supply source.',
  },
  {
    id: 32,
    question: 'What is the most common cause of sudden cardiac death in young athletes?',
    choices: ['Coronary artery disease', 'Hypertrophic cardiomyopathy', 'Arrhythmogenic right ventricular cardiomyopathy', 'Myocarditis'],
    correctAnswer: 'Hypertrophic cardiomyopathy',
    explanation:
      'HCM is the leading cause of SCD in young athletes due to ventricular arrhythmias triggered by myocardial hypertrophy and fibrosis.',
  },
  {
    id: 33,
    question: 'Which finding on ECG is most suggestive of pericarditis?',
    choices: ['Diffuse ST elevation', 'Pathologic Q waves', 'Delta waves', 'Epsilon waves'],
    correctAnswer: 'Diffuse ST elevation',
    explanation:
      'Diffuse ST elevation with PR depression is classic for acute pericarditis due to subepicardial inflammation.',
  },
  {
    id: 34,
    question: 'What is the most common valvular abnormality in rheumatic heart disease?',
    choices: ['Aortic stenosis', 'Mitral stenosis', 'Tricuspid regurgitation', 'Pulmonary stenosis'],
    correctAnswer: 'Mitral stenosis',
    explanation:
      'Mitral stenosis is the hallmark of rheumatic heart disease, resulting from chronic inflammation and fibrosis of the mitral valve.',
  },
  {
    id: 35,
    question: 'Which drug is most effective for terminating reentrant supraventricular tachycardia?',
    choices: ['Adenosine', 'Verapamil', 'Amiodarone', 'Lidocaine'],
    correctAnswer: 'Adenosine',
    explanation:
      'Adenosine blocks AV node conduction, terminating reentrant SVT by interrupting the reentry circuit.',
  },
  {
    id: 36,
    question: 'What is the primary cause of death in untreated transposition of the great arteries?',
    choices: ['Heart failure', 'Hypoxemia', 'Arrhythmia', 'Infection'],
    correctAnswer: 'Hypoxemia',
    explanation:
      'TGA causes parallel circulations, leading to severe hypoxemia unless mixing occurs via a shunt (e.g., ASD or PDA).',
  },
  {
    id: 37,
    question: 'Which echocardiographic parameter best assesses left ventricular diastolic function?',
    choices: ['Ejection fraction', 'E/A ratio', 'Fractional shortening', 'Stroke volume'],
    correctAnswer: 'E/A ratio',
    explanation:
      'The E/A ratio (early to atrial filling velocity) on Doppler echo assesses diastolic function, with abnormalities indicating stiffness or relaxation issues.',
  },
  {
    id: 38,
    question: 'What is the most common arrhythmia associated with acute myocardial infarction?',
    choices: ['Atrial fibrillation', 'Ventricular tachycardia', 'Bradycardia', 'Second-degree AV block'],
    correctAnswer: 'Ventricular tachycardia',
    explanation:
      'VT is common in AMI due to ischemic myocardial irritability, often progressing to VF if untreated.',
  },
  {
    id: 39,
    question: 'Which condition is most likely to cause a bisferiens pulse?',
    choices: ['Aortic stenosis', 'Aortic regurgitation', 'Hypertrophic cardiomyopathy', 'Mitral stenosis'],
    correctAnswer: 'Aortic regurgitation',
    explanation:
      'A bisferiens pulse (double peak) occurs in AR due to rapid ejection followed by diastolic runoff, often with concurrent AS.',
  },
  {
    id: 40,
    question: 'What is the primary therapeutic goal of Impella device use in cardiogenic shock?',
    choices: ['Increase afterload', 'Reduce preload', 'Augment cardiac output', 'Stabilize arrhythmias'],
    correctAnswer: 'Augment cardiac output',
    explanation:
      'The Impella pump unloads the left ventricle and augments cardiac output by mechanically assisting forward flow in cardiogenic shock.',
  },
  {
    id: 41,
    question: 'Which biomarker is most specific for myocardial necrosis?',
    choices: ['CK-MB', 'Troponin I', 'Myoglobin', 'LDH'],
    correctAnswer: 'Troponin I',
    explanation:
      'Troponin I is highly specific for myocardial necrosis, remaining elevated for 7-10 days post-injury, unlike less specific markers like CK-MB.',
  },
  {
    id: 42,
    question: 'What is the most common cause of constrictive pericarditis in developed countries?',
    choices: ['Tuberculosis', 'Viral infection', 'Prior cardiac surgery', 'Rheumatoid arthritis'],
    correctAnswer: 'Prior cardiac surgery',
    explanation:
      'In developed countries, prior cardiac surgery (e.g., CABG) is the leading cause of constrictive pericarditis due to chronic pericardial scarring.',
  },
  {
    id: 43,
    question: 'Which congenital anomaly is most associated with a single S2 heart sound?',
    choices: ['Tetralogy of Fallot', 'Truncus arteriosus', 'Ebstein anomaly', 'Bicuspid aortic valve'],
    correctAnswer: 'Truncus arteriosus',
    explanation:
      'Truncus arteriosus has a single semilunar valve (truncal valve), resulting in a single S2 sound without splitting.',
  },
  {
    id: 44,
    question: 'What is the primary mechanism of action of ivabradine in heart failure?',
    choices: ['Beta-blockade', 'If channel inhibition', 'Calcium channel blockade', 'Sodium channel blockade'],
    correctAnswer: 'If channel inhibition',
    explanation:
      'Ivabradine reduces heart rate by inhibiting the If (funny) current in the SA node, without affecting contractility.',
  },
  {
    id: 45,
    question: 'Which ECG lead is most useful for diagnosing a posterior wall myocardial infarction?',
    choices: ['V1-V2', 'V3-V4', 'V7-V9', 'II, III, aVF'],
    correctAnswer: 'V7-V9',
    explanation:
      'Posterior MI is best diagnosed with posterior leads (V7-V9), showing ST elevation due to occlusion of the posterior descending artery.',
  },
  {
    id: 46,
    question: 'What is the most common cause of right heart failure in the absence of left heart disease?',
    choices: ['Cor pulmonale', 'Tricuspid regurgitation', 'Pulmonary embolism', 'Constrictive pericarditis'],
    correctAnswer: 'Cor pulmonale',
    explanation:
      'Cor pulmonale, caused by chronic lung disease and pulmonary hypertension, is the leading cause of isolated right heart failure.',
  },
  {
    id: 47,
    question: 'Which condition is most likely to cause a mid-diastolic murmur with an opening snap?',
    choices: ['Aortic regurgitation', 'Mitral stenosis', 'Tricuspid regurgitation', 'Pulmonary stenosis'],
    correctAnswer: 'Mitral stenosis',
    explanation:
      'Mitral stenosis produces a mid-diastolic rumble with an opening snap due to restricted valve opening and turbulent flow.',
  },
  {
    id: 48,
    question: 'What is the primary determinant of myocardial oxygen demand?',
    choices: ['Heart rate', 'Preload', 'Afterload', 'Contractility'],
    correctAnswer: 'Heart rate',
    explanation:
      'Heart rate is the primary determinant of myocardial oxygen demand, as increased frequency reduces diastolic filling and coronary perfusion time.',
  },
  {
    id: 49,
    question: 'Which drug is contraindicated in patients with acute decompensated heart failure and hypotension?',
    choices: ['Dobutamine', 'Milrinone', 'Nitroprusside', 'Metoprolol'],
    correctAnswer: 'Metoprolol',
    explanation:
      'Metoprolol, a beta-blocker, can worsen hypotension and cardiac output in acute decompensated heart failure with low BP.',
  },
  {
    id: 50,
    question: 'What is the most common genetic mutation in arrhythmogenic right ventricular cardiomyopathy?',
    choices: ['Desmoplakin', 'Plakophilin-2', 'Desmoglein', 'RyR2'],
    correctAnswer: 'Plakophilin-2',
    explanation:
      'Plakophilin-2 mutations disrupt desmosomal integrity in ARVC, leading to fibrofatty replacement of the right ventricle.',
  },
  {
    id: 51,
    question: 'Which condition is most likely to cause an S3 gallop in a patient over 40 years old?',
    choices: ['Mitral regurgitation', 'Heart failure', 'Constrictive pericarditis', 'Aortic stenosis'],
    correctAnswer: 'Heart failure',
    explanation:
      'An S3 gallop in adults over 40 is typically due to heart failure, reflecting rapid ventricular filling from fluid overload or systolic dysfunction.',
  },
  {
    id: 52,
    question: 'What is the most sensitive test for detecting coronary artery spasm in Prinzmetal angina?',
    choices: ['Stress echocardiography', 'Coronary angiography with ergonovine', 'Exercise treadmill test', 'Cardiac MRI'],
    correctAnswer: 'Coronary angiography with ergonovine',
    explanation:
      'Coronary angiography with ergonovine provocation is the gold standard for diagnosing coronary spasm in Prinzmetal (variant) angina.',
  },
];

export default cardiologyQuestions;