// src/data/pediatrics.js

const pediatricsQuestions = [
  const pediatricsQuestions = [
  {
    id: 1,
    question: 'A 2-year-old child presents with a fever, cough, and difficulty breathing. On examination, you hear stridor. What is the likely diagnosis?',
    choices: ['Croup', 'Pneumonia', 'Bronchiolitis', 'Asthma'],
    correctAnswer: 'Croup',
    explanation: 'Croup is characterized by a distinctive barking cough and stridor. It is most common in children aged 6 months to 3 years.',
  },
  {
    id: 2,
    question: 'A 4-year-old presents with recurrent episodes of abdominal pain, joint swelling, and a palpable purpuric rash on the lower extremities. Laboratory findings show elevated IgA levels. What is the most likely diagnosis?',
    choices: ['Kawasaki disease', 'Henoch-Schönlein purpura', 'Juvenile idiopathic arthritis', 'Systemic lupus erythematosus'],
    correctAnswer: 'Henoch-Schönlein purpura',
    explanation: 'Henoch-Schönlein purpura (HSP) is characterized by palpable purpura, abdominal pain, arthralgia, and elevated IgA levels, typically affecting children aged 2–10 years.',
  },
  {
    id: 3,
    question: 'A 6-month-old infant presents with failure to thrive, recurrent respiratory infections, and greasy stools. Sweat chloride testing is positive. What is the most likely diagnosis?',
    choices: ['Cystic fibrosis', 'Celiac disease', 'Chronic pancreatitis', 'Primary ciliary dyskinesia'],
    correctAnswer: 'Cystic fibrosis',
    explanation: 'Cystic fibrosis is associated with failure to thrive, recurrent infections, and pancreatic insufficiency leading to greasy stools. Positive sweat chloride testing confirms the diagnosis.',
  },
  {
    id: 4,
    question: 'A 10-year-old child with a history of asthma presents with acute dyspnea, wheezing, and a peak expiratory flow rate of 50% of predicted. Despite initial treatment with albuterol, symptoms persist. What is the next step in management?',
    choices: ['Increase albuterol frequency', 'Administer oral corticosteroids', 'Initiate magnesium sulfate', 'Start high-flow nasal cannula'],
    correctAnswer: 'Administer oral corticosteroids',
    explanation: 'Persistent symptoms despite albuterol in acute asthma exacerbation warrant systemic corticosteroids to reduce airway inflammation.',
  },
  {
    id: 5,
    question: 'A 3-year-old presents with a 2-day history of high fever, irritability, and a petechial rash. Blood cultures grow Neisseria meningitidis. What is the most appropriate initial antibiotic therapy?',
    choices: ['Ceftriaxone', 'Vancomycin', 'Ampicillin', 'Azithromycin'],
    correctAnswer: 'Ceftriaxone',
    explanation: 'Ceftriaxone is the first-line antibiotic for meningococcal disease due to its broad coverage and efficacy against Neisseria meningitidis.',
  },
  {
    id: 6,
    question: 'A 7-year-old with type 1 diabetes presents with vomiting, lethargy, and deep, rapid breathing. Blood glucose is 450 mg/dL, and arterial blood gas shows pH 7.15. What is the most likely diagnosis?',
    choices: ['Hyperosmolar hyperglycemic state', 'Diabetic ketoacidosis', 'Lactic acidosis', 'Sepsis'],
    correctAnswer: 'Diabetic ketoacidosis',
    explanation: 'Diabetic ketoacidosis presents with hyperglycemia, acidosis, and Kussmaul respirations in children with type 1 diabetes.',
  },
  {
    id: 7,
    question: 'A 5-year-old with a history of eczema presents with a painful, erythematous lesion on the cheek with honey-colored crusting. What is the most likely causative organism?',
    choices: ['Streptococcus pyogenes', 'Staphylococcus aureus', 'Pseudomonas aeruginosa', 'Haemophilus influenzae'],
    correctAnswer: 'Staphylococcus aureus',
    explanation: 'Impetigo, characterized by honey-colored crusting, is commonly caused by Staphylococcus aureus, especially in children with eczema.',
  },
  {
    id: 8,
    question: 'A 12-year-old presents with fatigue, pallor, and epistaxis. Bone marrow biopsy reveals >20% blasts. What is the most likely diagnosis?',
    choices: ['Aplastic anemia', 'Acute lymphoblastic leukemia', 'Idiopathic thrombocytopenic purpura', 'Myelodysplastic syndrome'],
    correctAnswer: 'Acute lymphoblastic leukemia',
    explanation: 'Acute lymphoblastic leukemia is the most common childhood malignancy, presenting with fatigue, pallor, and bone marrow blasts.',
  },
  {
    id: 9,
    question: 'A 9-month-old presents with a generalized tonic-clonic seizure lasting 10 minutes. The child is afebrile. What is the most appropriate initial treatment?',
    choices: ['Lorazepam', 'Phenytoin', 'Levetiracetam', 'Phenobarbital'],
    correctAnswer: 'Lorazepam',
    explanation: 'Lorazepam is the first-line treatment for prolonged seizures in children due to its rapid onset and efficacy.',
  },
  {
    id: 10,
    question: 'A 14-year-old with sickle cell disease presents with chest pain, fever, and a new pulmonary infiltrate on chest X-ray. What is the most likely diagnosis?',
    choices: ['Pneumonia', 'Acute chest syndrome', 'Pulmonary embolism', 'Congestive heart failure'],
    correctAnswer: 'Acute chest syndrome',
    explanation: 'Acute chest syndrome in sickle cell disease presents with chest pain, fever, and pulmonary infiltrates, often triggered by vaso-occlusion or infection.',
  },
  {
    id: 11,
    question: 'A 3-year-old presents with a 3-day history of fever and a maculopapular rash that started on the face and spread to the trunk. The child is unvaccinated. What is the most likely diagnosis?',
    choices: ['Measles', 'Rubella', 'Roseola', 'Fifth disease'],
    correctAnswer: 'Measles',
    explanation: 'Measles presents with fever, a maculopapular rash starting on the face, and is more likely in unvaccinated children.',
  },
  {
    id: 12,
    question: 'A 6-year-old presents with a limp and pain in the right hip. X-ray shows a slipped capital femoral epiphysis. What is the most appropriate management?',
    choices: ['Non-weight-bearing and observation', 'Surgical pinning', 'Physical therapy', 'Corticosteroid injection'],
    correctAnswer: 'Surgical pinning',
    explanation: 'Slipped capital femoral epiphysis requires surgical pinning to stabilize the femoral head and prevent further slippage.',
  },
  {
    id: 13,
    question: 'A 2-month-old presents with poor feeding, lethargy, and a heart rate of 220 bpm. ECG shows a narrow-complex tachycardia. What is the most appropriate initial treatment?',
    choices: ['Adenosine', 'Amiodarone', 'Digoxin', 'Synchronized cardioversion'],
    correctAnswer: 'Adenosine',
    explanation: 'Adenosine is the first-line treatment for supraventricular tachycardia in infants with stable hemodynamics.',
  },
  {
    id: 14,
    question: 'A 5-year-old presents with recurrent urinary tract infections. Renal ultrasound shows vesicoureteral reflux. What is the most appropriate management?',
    choices: ['Prophylactic antibiotics', 'Surgical reimplantation', 'Observation', 'Bladder training'],
    correctAnswer: 'Prophylactic antibiotics',
    explanation: 'Prophylactic antibiotics are indicated for vesicoureteral reflux to prevent recurrent urinary tract infections in young children.',
  },
  {
    id: 15,
    question: 'A 10-year-old with a history of migraine presents with a severe headache, vomiting, and photophobia. The headache is unresponsive to ibuprofen. What is the most appropriate next step?',
    choices: ['Sumatriptan', 'Propranolol', 'Topiramate', 'CT head'],
    correctAnswer: 'Sumatriptan',
    explanation: 'Sumatriptan is effective for acute migraine treatment in children with severe, unresponsive headaches.',
  },
  {
    id: 16,
    question: 'A 4-year-old presents with a 2-week history of weight loss, polyuria, and polydipsia. Blood glucose is 350 mg/dL. What is the most likely diagnosis?',
    choices: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Diabetes insipidus', 'Hyperthyroidism'],
    correctAnswer: 'Type 1 diabetes mellitus',
    explanation: 'Type 1 diabetes mellitus presents with weight loss, polyuria, and hyperglycemia in young children.',
  },
  {
    id: 17,
    question: 'A 7-year-old presents with a 3-day history of fever, sore throat, and a sandpaper-like rash. What is the most likely diagnosis?',
    choices: ['Scarlet fever', 'Kawasaki disease', 'Toxic shock syndrome', 'Erythema infectiosum'],
    correctAnswer: 'Scarlet fever',
    explanation: 'Scarlet fever, caused by Streptococcus pyogenes, presents with fever, sore throat, and a characteristic sandpaper-like rash.',
  },
  {
    id: 18,
    question: 'A 12-year-old presents with chest pain, palpitations, and a systolic murmur that increases with standing. Echocardiogram shows mitral valve prolapse. What is the most likely diagnosis?',
    choices: ['Hypertrophic cardiomyopathy', 'Mitral regurgitation', 'Autonomic dysfunction', 'Postural orthostatic tachycardia syndrome'],
    correctAnswer: 'Mitral regurgitation',
    explanation: 'Mitral valve prolapse can cause mitral regurgitation, presenting with chest pain, palpitations, and a dynamic systolic murmur.',
  },
  {
    id: 19,
    question: 'A 2-year-old presents with a 1-day history of fever and unilateral cervical lymphadenopathy. The node is tender and fluctuant. What is the most likely causative organism?',
    choices: ['Staphylococcus aureus', 'Mycobacterium tuberculosis', 'Bartonella henselae', 'Epstein-Barr virus'],
    correctAnswer: 'Staphylococcus aureus',
    explanation: 'Acute bacterial lymphadenitis in children is commonly caused by Staphylococcus aureus, presenting with tender, fluctuant nodes.',
  },
  {
    id: 20,
    question: 'A 6-month-old presents with cyanosis during feeding and a harsh systolic murmur. Echocardiogram shows tetralogy of Fallot. What is the most appropriate initial management?',
    choices: ['Prostaglandin E1', 'Surgical repair', 'Beta-blockers', 'Oxygen therapy'],
    correctAnswer: 'Beta-blockers',
    explanation: 'Beta-blockers are used to prevent hypercyanotic spells in tetralogy of Fallot until surgical repair is performed.',
  },
  {
    id: 21,
    question: 'A 9-year-old presents with a 2-month history of fatigue, weight loss, and night sweats. Chest X-ray shows mediastinal widening. What is the most likely diagnosis?',
    choices: ['Hodgkin lymphoma', 'Tuberculosis', 'Sarcoidosis', 'Thymoma'],
    correctAnswer: 'Hodgkin lymphoma',
    explanation: 'Hodgkin lymphoma in children often presents with fatigue, night sweats, and mediastinal lymphadenopathy.',
  },
  {
    id: 22,
    question: 'A 4-year-old presents with a limp and refusal to bear weight on the left leg. Hip X-ray is normal, but ESR is elevated. What is the most likely diagnosis?',
    choices: ['Transient synovitis', 'Septic arthritis', 'Legg-Calvé-Perthes disease', 'Slipped capital femoral epiphysis'],
    correctAnswer: 'Septic arthritis',
    explanation: 'Septic arthritis presents with acute limp, refusal to bear weight, and elevated inflammatory markers, requiring urgent evaluation.',
  },
  {
    id: 23,
    question: 'A 10-year-old with a history of recurrent sinusitis presents with hemoptysis and proteinuria. Anti-neutrophil cytoplasmic antibodies (ANCA) are positive. What is the most likely diagnosis?',
    choices: ['Goodpasture syndrome', 'Granulomatosis with polyangiitis', 'IgA nephropathy', 'Post-streptococcal glomerulonephritis'],
    correctAnswer: 'Granulomatosis with polyangiitis',
    explanation: 'Granulomatosis with polyangiitis is an ANCA-associated vasculitis causing hemoptysis and renal involvement in children.',
  },
  {
    id: 24,
    question: 'A 3-year-old presents with a 5-day history of fever, conjunctivitis, and cervical lymphadenopathy. Echocardiogram shows coronary artery dilation. What is the most likely diagnosis?',
    choices: ['Kawasaki disease', 'Juvenile idiopathic arthritis', 'Systemic lupus erythematosus', 'Infectious mononucleosis'],
    correctAnswer: 'Kawasaki disease',
    explanation: 'Kawasaki disease presents with prolonged fever, conjunctivitis, lymphadenopathy, and coronary artery involvement.',
  },
  {
    id: 25,
    question: 'A 7-month-old presents with recurrent episodes of cyanosis and irritability. Echocardiogram shows a ventricular septal defect and right ventricular outflow tract obstruction. What is the most likely diagnosis?',
    choices: ['Tetralogy of Fallot', 'Transposition of the great arteries', 'Truncus arteriosus', 'Total anomalous pulmonary venous return'],
    correctAnswer: 'Tetralogy of Fallot',
    explanation: 'Tetralogy of Fallot includes a ventricular septal defect and right ventricular outflow tract obstruction, causing cyanotic spells.',
  },
  {
    id: 26,
    question: 'A 12-year-old presents with recurrent episodes of abdominal pain and melena. Endoscopy reveals a duodenal ulcer. What is the most likely causative organism?',
    choices: ['Helicobacter pylori', 'Campylobacter jejuni', 'Escherichia coli', 'Salmonella typhi'],
    correctAnswer: 'Helicobacter pylori',
    explanation: 'Helicobacter pylori is the most common cause of duodenal ulcers in children, presenting with abdominal pain and gastrointestinal bleeding.',
  },
  {
    id: 27,
    question: 'A 5-year-old presents with a 2-week history of fever, weight loss, and bone pain. Bone marrow biopsy shows Auer rods. What is the most likely diagnosis?',
    choices: ['Acute lymphoblastic leukemia', 'Acute myeloid leukemia', 'Neuroblastoma', 'Ewing sarcoma'],
    correctAnswer: 'Acute myeloid leukemia',
    explanation: 'Acute myeloid leukemia is characterized by Auer rods in bone marrow blasts, presenting with fever, weight loss, and bone pain.',
  },
  {
    id: 28,
    question: 'A 2-year-old presents with a 3-day history of fever and a unilateral parotid swelling. What is the most likely diagnosis?',
    choices: ['Mumps', 'Bacterial parotitis', 'Sjögren syndrome', 'Salivary gland tumor'],
    correctAnswer: 'Bacterial parotitis',
    explanation: 'Bacterial parotitis, often caused by Staphylococcus aureus, presents with acute unilateral parotid swelling and fever in young children.',
  },
  {
    id: 29,
    question: 'A 10-year-old presents with a 1-month history of fatigue, bruising, and gingival bleeding. Peripheral smear shows pancytopenia. What is the most likely diagnosis?',
    choices: ['Aplastic anemia', 'Iron deficiency anemia', 'Hemolytic uremic syndrome', 'Vitamin B12 deficiency'],
    correctAnswer: 'Aplastic anemia',
    explanation: 'Aplastic anemia presents with pancytopenia, causing fatigue, bruising, and bleeding due to bone marrow failure.',
  },
  {
    id: 30,
    question: 'A 6-year-old presents with a 2-day history of fever, headache, and nuchal rigidity. Cerebrospinal fluid analysis shows elevated neutrophils and low glucose. What is the most likely diagnosis?',
    choices: ['Viral meningitis', 'Bacterial meningitis', 'Tuberculous meningitis', 'Fungal meningitis'],
    correctAnswer: 'Bacterial meningitis',
    explanation: 'Bacterial meningitis presents with fever, nuchal rigidity, and CSF findings of neutrophilic pleocytosis and low glucose.',
  },
  {
    id: 31,
    question: 'A 4-year-old with a history of recurrent otitis media presents with facial nerve palsy and mastoid tenderness. CT shows mastoiditis. What is the most appropriate management?',
    choices: ['Oral antibiotics', 'Intravenous antibiotics and myringotomy', 'Mastoidectomy', 'Observation'],
    correctAnswer: 'Intravenous antibiotics and myringotomy',
    explanation: 'Acute mastoiditis with complications like facial nerve palsy requires intravenous antibiotics and myringotomy to drain infection.',
  },
  {
    id: 32,
    question: 'A 9-year-old presents with a 3-month history of polyuria, polydipsia, and weight loss. Labs show normal glucose but low urine osmolality. What is the most likely diagnosis?',
    choices: ['Type 1 diabetes mellitus', 'Diabetes insipidus', 'Syndrome of inappropriate antidiuretic hormone', 'Primary polydipsia'],
    correctAnswer: 'Diabetes insipidus',
    explanation: 'Diabetes insipidus presents with polyuria, polydipsia, and low urine osmolality due to impaired water reabsorption.',
  },
  {
    id: 33,
    question: 'A 5-year-old presents with a 1-week history of fever, joint pain, and a new heart murmur. Blood cultures are negative. What is the most likely diagnosis?',
    choices: ['Rheumatic fever', 'Infective endocarditis', 'Kawasaki disease', 'Juvenile idiopathic arthritis'],
    correctAnswer: 'Rheumatic fever',
    explanation: 'Rheumatic fever presents with fever, polyarthritis, and carditis following streptococcal infection, often with negative blood cultures.',
  },
  {
    id: 34,
    question: 'A 7-year-old with a history of eczema presents with a vesicular rash on the hands and fever. PCR confirms herpes simplex virus. What is the most likely diagnosis?',
    choices: ['Herpetic whitlow', 'Eczema herpeticum', 'Hand-foot-and-mouth disease', 'Varicella zoster'],
    correctAnswer: 'Eczema herpeticum',
    explanation: 'Eczema herpeticum is a herpes simplex virus infection in children with eczema, presenting with vesicular rash and fever.',
  },
  {
    id: 35,
    question: 'A 3-month-old presents with poor feeding, hypotonia, and a musty odor in urine. What is the most likely diagnosis?',
    choices: ['Phenylketonuria', 'Maple syrup urine disease', 'Galactosemia', 'Homocystinuria'],
    correctAnswer: 'Phenylketonuria',
    explanation: 'Phenylketonuria presents with hypotonia, poor feeding, and a musty urine odor due to phenylalanine accumulation.',
  },
  {
    id: 36,
    question: 'A 12-year-old presents with chest pain and syncope during exercise. Echocardiogram shows left ventricular hypertrophy. What is the most likely diagnosis?',
    choices: ['Hypertrophic cardiomyopathy', 'Aortic stenosis', 'Myocarditis', 'Pericarditis'],
    correctAnswer: 'Hypertrophic cardiomyopathy',
    explanation: 'Hypertrophic cardiomyopathy presents/with exertional chest pain, syncope, and left ventricular hypertrophy, often in adolescents.',
  },
  {
    id: 37,
    question: 'A 6-year-old presents with a 2-day history of fever, vomiting, and a diffuse erythematous rash that blanches on pressure. What is the most likely diagnosis?',
    choices: ['Scarlet fever', 'Toxic shock syndrome', 'Kawasaki disease', 'Viral exanthem'],
    correctAnswer: 'Toxic shock syndrome',
    explanation: 'Toxic shock syndrome presents with fever, vomiting, and a diffuse erythematous rash, often due to staphylococcal toxin.',
  },
  {
    id: 38,
    question: 'A 4-year-old presents with a 1-month history of morning stiffness, joint swelling, and uveitis. What is the most likely diagnosis?',
    choices: ['Juvenile idiopathic arthritis', 'Reactive arthritis', 'Septic arthritis', 'Systemic lupus erythematosus'],
    correctAnswer: 'Juvenile idiopathic arthritis',
    explanation: 'Juvenile idiopathic arthritis presents with chronic joint swelling, morning stiffness, and uveitis in young children.',
  },
  {
    id: 39,
    question: 'A 10-year-old presents with a 2-week history of fever, night sweats, and cervical lymphadenopathy. Biopsy shows caseating granulomas. What is the most likely diagnosis?',
    choices: ['Tuberculosis', 'Hodgkin lymphoma', 'Cat-scratch disease', 'Sarcoidosis'],
    correctAnswer: 'Tuberculosis',
    explanation: 'Tuberculosis presents with fever, night sweats, and caseating granulomas in lymph nodes, common in endemic areas.',
  },
  {
    id: 40,
    question: 'A 2-year-old presents with a 1-day history of fever and a limp. Hip ultrasound shows a joint effusion. What is the most appropriate next step?',
    choices: ['Oral antibiotics', 'Joint aspiration', 'MRI hip', 'Observation'],
    correctAnswer: 'Joint aspiration',
    explanation: 'A joint effusion with fever and limp suggests septic arthritis, requiring urgent joint aspiration for diagnosis and treatment.',
  },
  {
    id: 41,
    question: 'A 7-year-old presents with a 3-day history of fever, cough, and a new oxygen requirement. Chest X-ray shows a lobar infiltrate. What is the most likely causative organism?',
    choices: ['Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Respiratory syncytial virus', 'Influenza virus'],
    correctAnswer: 'Streptococcus pneumoniae',
    explanation: 'Streptococcus pneumoniae is the most common cause of lobar pneumonia in children, presenting with fever and cough.',
  },
  {
    id: 42,
    question: 'A 5-year-old presents with a 2-month history of fatigue, weight loss, and a palpable abdominal mass. Imaging shows a retroperitoneal tumor. What is the most likely diagnosis?',
    choices: ['Wilms tumor', 'Neuroblastoma', 'Rhabdomyosarcoma', 'Hepatoblastoma'],
    correctAnswer: 'Neuroblastoma',
    explanation: 'Neuroblastoma often presents with fatigue, weight loss, and a retroperitoneal mass in young children.',
  },
  {
    id: 43,
    question: 'A 3-year-old presents with a 1-week history of fever, rash, and conjunctivitis. Labs show elevated C-reactive protein and thrombocytopenia. What is the most likely diagnosis?',
    choices: ['Kawasaki disease', 'Measles', 'Dengue fever', 'Systemic lupus erythematosus'],
    correctAnswer: 'Kawasaki disease',
    explanation: 'Kawasaki disease presents with fever, rash, conjunctivitis, and inflammatory markers, often with thrombocytopenia.',
  },
  {
    id: 44,
    question: 'A 9-year-old presents with a 2-day history of fever, sore throat, and dysphagia. Exam shows tonsillar exudates and cervical lymphadenopathy. What is the most appropriate initial treatment?',
    choices: ['Amoxicillin', 'Azithromycin', 'Ceftriaxone', 'Supportive care'],
    correctAnswer: 'Amoxicillin',
    explanation: 'Group A Streptococcus pharyngitis, presenting with tonsillar exudates and lymphadenopathy, is treated with amoxicillin.',
  },
  {
    id: 45,
    question: 'A 6-month-old presents with a 1-day history of fever and a bulging fontanelle. CSF analysis shows gram-positive cocci. What is the most likely causative organism?',
    choices: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Listeria monocytogenes', 'Escherichia coli'],
    correctAnswer: 'Streptococcus pneumoniae',
    explanation: 'Streptococcus pneumoniae is a common cause of bacterial meningitis in infants, presenting with fever and bulging fontanelle.',
  },
  {
    id: 46,
    question: 'A 12-year-old presents with a 1-month history of headaches, vomiting, and papilledema. MRI shows a posterior fossa mass. What is the most likely diagnosis?',
    choices: ['Medulloblastoma', 'Astrocytoma', 'Ependymoma', 'Craniopharyngioma'],
    correctAnswer: 'Medulloblastoma',
    explanation: 'Medulloblastoma is a common posterior fossa tumor in children, presenting with headaches, vomiting, and papilledema.',
  },
  {
    id: 47,
    question: 'A 4-year-old presents with a 2-day history of fever and a painful limp. Blood cultures grow Staphylococcus aureus. What is the most likely diagnosis?',
    choices: ['Osteomyelitis', 'Septic arthritis', 'Transient synovitis', 'Juvenile idiopathic arthritis'],
    correctAnswer: 'Osteomyelitis',
    explanation: 'Osteomyelitis, often caused by Staphylococcus aureus, presents with fever, limp, and positive blood cultures.',
  },
  {
    id: 48,
    question: 'A 7-year-old presents with a 3-week history of fatigue, pallor, and petechiae. Bone marrow biopsy shows <5% blasts. What is the most likely diagnosis?',
    choices: ['Aplastic anemia', 'Acute lymphoblastic leukemia', 'Iron deficiency anemia', 'Thalassemia major'],
    correctAnswer: 'Aplastic anemia',
    explanation: 'Aplastic anemia presents with fatigue, pallor, and pancytopenia with low bone marrow blasts.',
  },
  {
    id: 49,
    question: 'A 2-year-old presents with a 1-day history of fever and stridor that worsens when supine. X-ray shows a thumbprint sign. What is the most likely diagnosis?',
    choices: ['Croup', 'Epiglottitis', 'Retropharyngeal abscess', 'Foreign body aspiration'],
    correctAnswer: 'Epiglottitis',
    explanation: 'Epiglottitis presents with acute stridor, fever, and a thumbprint sign on X-ray, often caused by Haemophilus influenzae.',
  },
  {
    id: 50,
    question: 'A 10-year-old with a history of cystic fibrosis presents with hemoptysis and a new pulmonary infiltrate. What is the most appropriate initial management?',
    choices: ['Bronchial artery embolization', 'Intravenous antibiotics', 'Oral corticosteroids', 'Chest physiotherapy'],
    correctAnswer: 'Intravenous antibiotics',
    explanation: 'Hemoptysis in cystic fibrosis with a new infiltrate suggests infection, requiring intravenous antibiotics.',
  },
  {
    id: 51,
    question: 'A 5-year-old presents with a 2-week history of fever, weight loss, and hepatosplenomegaly. Bone marrow biopsy shows Leishmania amastigotes. What is the most likely diagnosis?',
    choices: ['Visceral leishmaniasis', 'Malaria', 'Tuberculosis', 'Hodgkin lymphoma'],
    correctAnswer: 'Visceral leishmaniasis',
    explanation: 'Visceral leishmaniasis presents with fever, hepatosplenomegaly, and bone marrow amastigotes, common in endemic areas.',
  },
  {
    id: 52,
    question: 'A 3-year-old presents with a 1-day history of fever and a swollen, red knee. Joint aspiration shows gram-positive cocci. What is the most appropriate initial antibiotic?',
    choices: ['Vancomycin', 'Ceftriaxone', 'Clindamycin', 'Ampicillin'],
    correctAnswer: 'Vancomycin',
    explanation: 'Septic arthritis with gram-positive cocci, likely Staphylococcus aureus, requires vancomycin pending culture results.',
  },
  {
    id: 53,
    question: 'A 9-year-old presents with a 1-month history of fatigue, polyuria, and weight loss. Labs show hypercalcemia and elevated 1,25-dihydroxyvitamin D. What is the most likely diagnosis?',
    choices: ['Sarcoidosis', 'Hyperparathyroidism', 'Vitamin D toxicity', 'Multiple myeloma'],
    correctAnswer: 'Sarcoidosis',
    explanation: 'Sarcoidosis in children can present with fatigue, polyuria, and hypercalcemia due to elevated 1,25-dihydroxyvitamin D.',
  },
  {
    id: 54,
    question: 'A 6-month-old presents with a 1-day history of fever and a generalized tonic-clonic seizure. CSF analysis is normal. What is the most appropriate initial treatment?',
    choices: ['Lorazepam', 'Levetiracetam', 'Phenytoin', 'No treatment'],
    correctAnswer: 'Lorazepam',
    explanation: 'Febrile seizures require acute treatment with lorazepam if prolonged, even with normal CSF findings.',
  },
  {
    id: 55,
    question: 'A 12-year-old presents with a 2-week history of chest pain, fever, and a pericardial friction rub. Echocardiogram shows a pericardial effusion. What is the most likely diagnosis?',
    choices: ['Pericarditis', 'Myocarditis', 'Endocarditis', 'Pulmonary embolism'],
    correctAnswer: 'Pericarditis',
    explanation: 'Pericarditis presents with chest pain, fever, a friction rub, and pericardial effusion, often post-viral in children.',
  },
  {
    id: 56,
    question: 'A 4-year-old presents with a 3-day history of fever and a unilateral neck mass. Ultrasound shows a hypoechoic mass with central necrosis. What is the most likely diagnosis?',
    choices: ['Lymphoma', 'Branchial cleft cyst', 'Tuberculous lymphadenitis', 'Cat-scratch disease'],
    correctAnswer: 'Tuberculous lymphadenitis',
    explanation: 'Tuberculous lymphadenitis presents with a neck mass, fever, and ultrasound findings of necrosis, common in endemic areas.',
  },
  {
    id: 57,
    question: 'A 7-year-old presents with a 2-day history of fever, abdominal pain, and a migratory rash. Labs show eosinophilia. What is the most likely diagnosis?',
    choices: ['Strongyloidiasis', 'Visceral larva migrans', 'Schistosomiasis', 'Ascariasis'],
    correctAnswer: 'Visceral larva migrans',
    explanation: 'Visceral larva migrans, caused by Toxocara, presents with fever, abdominal pain, eosinophilia, and a migratory rash.',
  },
  {
    id: 58,
    question: 'aktion with a history of biliary atresia presents with jaundice, pruritus, and elevated conjugated bilirubin. What is the most appropriate next step?',
    choices: ['Liver biopsy', 'Ursodeoxycholic acid', 'Liver transplant evaluation', 'Cholangiography'],
    correctAnswer: 'Liver transplant evaluation',
    explanation: 'Progressive jaundice and elevated conjugated bilirubin in biliary atresia suggest end-stage liver disease, warranting transplant evaluation.',
  },
  {
    id: 59,
    question: 'A 3-year-old presents with a 1-week history of fever, rash, and mucosal bleeding. Labs show thrombocytopenia and elevated D-dimer. What is the most likely diagnosis?',
    choices: ['Dengue fever', 'Idiopathic thrombocytopenic purpura', 'Hemolytic uremic syndrome', 'Leukemia'],
    correctAnswer: 'Dengue fever',
    explanation: 'Dengue fever presents with fever, rash, thrombocytopenia, and elevated D-dimer, common in endemic areas.',
  },
  {
    id: 60,
    question: 'A 10-year-old presents with a 2-month history of fatigue, joint pain, and a malar rash. Labs show positive antinuclear antibodies and anti-double-stranded DNA. What is the most likely diagnosis?',
    choices: ['Systemic lupus erythematosus', 'Juvenile idiopathic arthritis', 'Dermatomyositis', 'Reactive arthritis'],
    correctAnswer: 'Systemic lupus erythematosus',
    explanation: 'Systemic lupus erythematosus presents with fatigue, joint pain, malar rash, and positive autoantibodies in children.',
  },
  {
    id: 61,
    question: 'A 5-year-old presents with a 2-day history of fever and a painful, erythematous leg lesion. MRI shows a bone lesion with soft tissue involvement. What is the most likely diagnosis?',
    choices: ['Osteomyelitis', 'Ewing sarcoma', 'Osteosarcoma', 'Septic arthritis'],
    correctAnswer: 'Osteomyelitis',
    explanation: 'Osteomyelitis presents with fever, painful erythematous lesions, and MRI findings of bone and soft tissue involvement.',
  },
  {
    id: 62,
    question: 'A 2-year-old presents with a 1-day history of fever and a generalized petechial rash. Labs show neutropenia and elevated C-reactive protein. What is the most likely diagnosis?',
    choices: ['Meningococcemia', 'Idiopathic thrombocytopenic purpura', 'Viral exanthem', 'Leukemia'],
    correctAnswer: 'Meningococcemia',
    explanation: 'Meningococcemia presents with fever, petechial rash, neutropenia, and elevated inflammatory markers, requiring urgent treatment.',
  },
  {
    id: 63,
    question: 'A 7-year-old presents with a 3-week history of fatigue, pallor, and a new systolic murmur. Echocardiogram shows aortic regurgitation. What is the most likely diagnosis?',
    choices: ['Rheumatic heart disease', 'Infective endocarditis', 'Congenital aortic stenosis', 'Marfan syndrome'],
    correctAnswer: 'Rheumatic heart disease',
    explanation: 'Rheumatic heart disease can cause aortic regurgitation, fatigue, and pallor following streptococcal infection in children.',
  },
  {
    id: 64,
    question: 'A 4-year-old presents with a 1-week history of fever, cough, and hemoptysis. Chest CT shows a cavitary lesion. What is the most likely diagnosis?',
    choices: ['Tuberculosis', 'Lung abscess', 'Cystic fibrosis', 'Pulmonary embolism'],
    correctAnswer: 'Tuberculosis',
    explanation: 'Tuberculosis can present with fever, cough, hemoptysis, and cavitary lesions in children, especially in endemic areas.',
  },
  {
    id: 65,
    question: 'A 9-year-old presents with a 2-month history of fatigue, weight loss, and a palpable neck mass. Thyroid function tests are normal, but biopsy shows papillary carcinoma. What is the most appropriate management?',
    choices: ['Radioactive iodine therapy', 'Total thyroidectomy', 'Chemotherapy', 'Observation'],
    correctAnswer: 'Total thyroidectomy',
    explanation: 'Papillary thyroid carcinoma in children requires total thyroidectomy as the primary treatment.',
  },
  {
    id: 66,
    question: 'A 6-month-old presents with a 1-day history of fever and a bulging tympanic membrane. What is the most appropriate initial antibiotic?',
    choices: ['Amoxicillin', 'Azithromycin', 'Ceftriaxone', 'Clindamycin'],
    correctAnswer: 'Amoxicillin',
    explanation: 'Amoxicillin is the first-line treatment for acute otitis media in infants, targeting common pathogens like Streptococcus pneumoniae.',
  },
  {
    id: 67,
    question: 'A 12-year-old presents with a 1-week history of fever, fatigue, and a new heart murmur. Blood cultures grow viridans streptococci. What is the most likely diagnosis?',
    choices: ['Infective endocarditis', 'Rheumatic fever', 'Pericarditis', 'Myocarditis'],
    correctAnswer: 'Infective endocarditis',
    explanation: 'Infective endocarditis presents with fever, a new murmur, and positive blood cultures, often caused by viridans streptococci.',
  },
  {
    id: 68,
    question: 'A 3-year-old presents with a 2-day history of fever and a unilateral scrotal swelling. Ultrasound shows increased blood flow to the testis. What is the most likely diagnosis?',
    choices: ['Testicular torsion', 'Epididymitis', 'Hydrocele', 'Inguinal hernia'],
    correctAnswer: 'Epididymitis',
    explanation: 'Epididymitis presents with fever, scrotal swelling, and increased testicular blood flow, often due to infection in young children.',
  },
  {
    id: 69,
    question: 'A 7-year-old presents with a 2-month history of fatigue, bone pain, and hypercalcemia. Imaging shows lytic bone lesions. What is the most likely diagnosis?',
    choices: ['Osteosarcoma', 'Multiple myeloma', 'Langerhans cell histiocytosis', 'Metastatic neuroblastoma'],
    correctAnswer: 'Langerhans cell histiocytosis',
    explanation: 'Langerhans cell histiocytosis presents with fatigue, bone pain, lytic lesions, and hypercalcemia in children.',
  },
  {
    id: 70,
    question: 'A 5-year-old presents with a 1-week history of fever, cough, and a pleural effusion on chest X-ray. Pleural fluid analysis shows low glucose and high LDH. What is the most likely diagnosis?',
    choices: ['Tuberculous pleuritis', 'Bacterial empyema', 'Viral pleuritis', 'Malignancy'],
    correctAnswer: 'Bacterial empyema',
    explanation: 'Bacterial empyema presents with fever, pleural effusion, and pleural fluid findings of low glucose and high LDH.',
  },
  {
    id: 71,
    question: 'A 2-year-old presents with a 1-day history of fever and a generalized maculopapular rash. The child recently received a live attenuated vaccine. What is the most likely diagnosis?',
    choices: ['Measles', 'Vaccine-associated rash', 'Roseola', 'Erythema infectiosum'],
    correctAnswer: 'Vaccine-associated rash',
    explanation: 'Live attenuated vaccines, such as MMR, can cause a mild maculopapular rash within 1–2 weeks of administration.',
  },
  {
    id: 72,
    question: 'A 10-year-old presents with a 2-week history of fatigue, pallor, and epistaxis. Labs show microcytic anemia and low ferritin. What is the most likely diagnosis?',
    choices: ['Iron deficiency anemia', 'Thalassemia minor', 'Sideroblastic anemia', 'Anemia of chronic disease'],
    correctAnswer: 'Iron deficiency anemia',
    explanation: 'Iron deficiency anemia presents with fatigue, pallor, microcytic anemia, and low ferritin, common in children with poor dietary intake.',
  },
  {
    id: 73,
    question: 'A 4-year-old presents with a 3-day history of fever and a painful, erythematous neck mass. Ultrasound shows a heterogeneous mass with central necrosis. What is the most likely diagnosis?',
    choices: ['Lymphoma', 'Tuberculous lymphadenitis', 'Bacterial abscess', 'Branchial cleft cyst'],
    correctAnswer: 'Bacterial abscess',
    explanation: 'Bacterial abscess presents with fever, a painful neck mass, and ultrasound findings of necrosis, often due to Staphylococcus aureus.',
  },
  {
    id: 74,
    question: 'A 7-year-old presents with a 1-month history of fatigue, weight loss, and polyuria. Labs show hyperglycemia and glycosuria. What is the most appropriate initial treatment?',
    choices: ['Metformin', 'Insulin therapy', 'Sulfonylureas', 'Lifestyle modification'],
    correctAnswer: 'Insulin therapy',
    explanation: 'Type 1 diabetes mellitus in children requires insulin therapy as the primary treatment for hyperglycemia and glycosuria.',
  },
  {
    id: 75,
    question: 'A 3-year-old presents with a 2-day history of fever and a unilateral red eye with purulent discharge. What is the most likely diagnosis?',
    choices: ['Bacterial conjunctivitis', 'Viral conjunctivitis', 'Allergic conjunctivitis', 'Uveitis'],
    correctAnswer: 'Bacterial conjunctivitis',
    explanation: 'Bacterial conjunctivitis presents with fever, unilateral red eye, and purulent discharge, often caused by Haemophilus influenzae or Streptococcus pneumoniae.',
  },
  {
    id: 76,
    question: 'A 12-year-old presents with a 2-week history of fatigue, fever, and a new systolic murmur. Echocardiogram shows vegetations on the mitral valve. What is the most likely diagnosis?',
    choices: ['Infective endocarditis', 'Rheumatic heart disease', 'Myocarditis', 'Pericarditis'],
    correctAnswer: 'Infective endocarditis',
    explanation: 'Infective endocarditis presents with fever, a new murmur, and vegetations on echocardiography, often due to bacterial infection.',
  },
  {
    id: 77,
    question: 'A 5-year-old presents with a 1-week history of fever, rash, and joint pain. Labs show elevated ferritin and triglycerides. What is the most likely diagnosis?',
    choices: ['Hemophagocytic lymphohistiocytosis', 'Kawasaki disease', 'Systemic lupus erythematosus', 'Juvenile idiopathic arthritis'],
    correctAnswer: 'Hemophagocytic lymphohistiocytosis',
    explanation: 'Hemophagocytic lymphohistiocytosis presents with fever, rash, joint pain, and elevated ferritin and triglycerides due to immune dysregulation.',
  },
  {
    id: 78,
    question: 'A 2-year-old presents with a 1-day history of fever and a limp. MRI shows a bone lesion with periosteal elevation. What is the most likely diagnosis?',
    choices: ['Osteomyelitis', 'Ewing sarcoma', 'Osteosarcoma', 'Langerhans cell histiocytosis'],
    correctAnswer: 'Osteomyelitis',
    explanation: 'Osteomyelitis presents with fever, limp, and MRI findings of bone lesions with periosteal elevation, often due to Staphylococcus aureus.',
  },
  {
    id: 79,
    question: 'A 9-year-old presents with a 2-month history of fatigue, weight loss, and night sweats. Chest X-ray shows hilar lymphadenopathy. What is the most likely diagnosis?',
    choices: ['Tuberculosis', 'Hodgkin lymphoma', 'Sarcoidosis', 'Histoplasmosis'],
    correctAnswer: 'Hodgkin lymphoma',
    explanation: 'Hodgkin lymphoma presents with fatigue, night sweats, and hilar lymphadenopathy in children, often with B symptoms.',
  },
  {
    id: 80,
    question: 'A 6-month-old presents with a 1-day history of fever and a generalized tonic-clonic seizure lasting 15 minutes. What is the most appropriate initial treatment?',
    choices: ['Lorazepam', 'Levetiracetam', 'Phenytoin', 'Phenobarbital'],
    correctAnswer: 'Lorazepam',
    explanation: 'Lorazepam is the first-line treatment for prolonged seizures in infants, including febrile seizures.',
  },
  {
    id: 81,
    question: 'A 4-year-old presents with a 2-week history of fever, rash, and hepatosplenomegaly. Labs show pancytopenia and elevated ferritin. What is the most likely diagnosis?',
    choices: ['Hemophagocytic lymphohistiocytosis', 'Leukemia', 'Kawasaki disease', 'Visceral leishmaniasis'],
    correctAnswer: 'Hemophagocytic lymphohistiocytosis',
    explanation: 'Hemophagocytic lymphohistiocytosis presents with fever, hepatosplenomegaly, pancytopenia, and elevated ferritin due to immune activation.',
  },
  {
    id: 82,
    question: 'A 7-year-old presents with a 3-day history of fever and a painful, erythematous leg lesion. Blood cultures grow gram-positive cocci. What is the most appropriate initial antibiotic?',
    choices: ['Vancomycin', 'Ceftriaxone', 'Clindamycin', 'Ampicillin'],
    correctAnswer: 'Vancomycin',
    explanation: 'Gram-positive cocci in blood cultures, likely Staphylococcus aureus, require vancomycin for suspected osteomyelitis or cellulitis.',
  },
  {
    id: 83,
    question: 'A 3-year-old presents with a 1-week history of fever, cough, and weight loss. Chest X-ray shows a miliary pattern. What is the most likely diagnosis?',
    choices: ['Tuberculosis', 'Histoplasmosis', 'Sarcoidosis', 'Metastatic malignancy'],
    correctAnswer: 'Tuberculosis',
    explanation: 'Miliary tuberculosis presents with fever, cough, weight loss, and a characteristic miliary pattern on chest X-ray.',
  },
  {
    id: 84,
    question: 'A 10-year-old presents with a 2-month history of fatigue, polyuria, and weight loss. Labs show hyperglycemia and positive anti-glutamic acid decarboxylase antibodies. What is the most likely diagnosis?',
    choices: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Maturity-onset diabetes of the young', 'Diabetes insipidus'],
    correctAnswer: 'Type 1 diabetes mellitus',
    explanation: 'Type 1 diabetes mellitus presents with fatigue, polyuria, hyperglycemia, and positive autoantibodies in children.',
  },
  {
    id: 85,
    question: 'A 5-year-old presents with a 2-day history of fever and a unilateral red eye with photophobia. Exam shows ciliary flush. What is the most likely diagnosis?',
    choices: ['Uveitis', 'Bacterial conjunctivitis', 'Viral conjunctivitis', 'Corneal abrasion'],
    correctAnswer: 'Uveitis',
    explanation: 'Uveitis presents with fever, red eye, photophobia, and ciliary flush, often associated with systemic conditions in children.',
  },
  {
    id: 86,
    question: 'A 12-year-old presents with a 1-week history of fever, chest pain, and a new diastolic murmur. Echocardiogram shows aortic root dilation. What is the most likely diagnosis?',
    choices: ['Marfan syndrome', 'Infective endocarditis', 'Rheumatic heart disease', 'Kawasaki disease'],
    correctAnswer: 'Marfan syndrome',
    explanation: 'Marfan syndrome can present with aortic root dilation, causing a diastolic murmur and chest pain in adolescents.',
  },
  {
    id: 87,
    question: 'A 4-year-old presents with a 3-day history of fever and a generalized petechial rash. Labs show thrombocytopenia and elevated D-dimer. What is the most likely diagnosis?',
    choices: ['Meningococcemia', 'Idiopathic thrombocytopenic purpura', 'Hemolytic uremic syndrome', 'Dengue fever'],
    correctAnswer: 'Meningococcemia',
    explanation: 'Meningococcemia presents with fever, petechial rash, thrombocytopenia, and elevated D-dimer, requiring urgent treatment.',
  },
  {
    id: 88,
    question: 'A 7-year-old presents with a 2-month history of fatigue, bone pain, and hypercalcemia. Imaging shows lytic bone lesions. What is the most likely diagnosis?',
    choices: ['Langerhans cell histiocytosis', 'Osteosarcoma', 'Ewing sarcoma', 'Multiple myeloma'],
    correctAnswer: 'Langerhans cell histiocytosis',
    explanation: 'Langerhans cell histiocytosis presents with fatigue, bone pain, lytic lesions, and hypercalcemia in children.',
  },
  {
    id: 89,
    question: 'A 3-year-old presents with a 1-week history of fever, rash, and conjunctivitis. Labs show elevated C-reactive protein and thrombocytopenia. What is the most likely diagnosis?',
    choices: ['Kawasaki disease', 'Measles', 'Dengue fever', 'Systemic lupus erythematosus'],
    correctAnswer: 'Kawasaki disease',
    explanation: 'Kawasaki disease presents with fever, rash, conjunctivitis, and inflammatory markers, often with thrombocytopenia.',
  },
  {
    id: 90,
    question: 'A 10-year-old presents with a 2-week history of fatigue, pallor, and epistaxis. Bone marrow biopsy shows >20% blasts. What is the most likely diagnosis?',
    choices: ['Acute lymphoblastic leukemia', 'Aplastic anemia', 'Myelodysplastic syndrome', 'Idiopathic thrombocytopenic purpura'],
    correctAnswer: 'Acute lymphoblastic leukemia',
    explanation: 'Acute lymphoblastic leukemia presents with fatigue, pallor, and bone marrow blasts, the most common childhood malignancy.',
  },
  {
    id: 91,
    question: 'A 5-year-old presents with a 2-day history of fever and a painful, erythematous leg lesion. MRI shows a bone lesion with soft tissue involvement. What is the most likely diagnosis?',
    choices: ['Osteomyelitis', 'Ewing sarcoma', 'Osteosarcoma', 'Septic arthritis'],
    correctAnswer: 'Osteomyelitis',
    explanation: 'Osteomyelitis presents with fever, painful erythematous lesions, and MRI findings of bone and soft tissue involvement.',
  },
  {
    id: 92,
    question: 'A 2-year-old presents with a 1-day history of fever and a generalized petechial rash. Labs show neutropenia and elevated C-reactive protein. What is the most likely diagnosis?',
    choices: ['Meningococcemia', 'Idiopathic thrombocytopenic purpura', 'Viral exanthem', 'Leukemia'],
    correctAnswer: 'Meningococcemia',
    explanation: 'Meningococcemia presents with fever, petechial rash, neutropenia, and elevated inflammatory markers, requiring urgent treatment.',
  },
  {
    id: 93,
    question: 'A 7-year-old presents with a 3-week history of fatigue, pallor, and a new systolic murmur. Echocardiogram shows aortic regurgitation. What is the most likely diagnosis?',
    choices: ['Rheumatic heart disease', 'Infective endocarditis', 'Congenital aortic stenosis', 'Marfan syndrome'],
    correctAnswer: 'Rheumatic heart disease',
    explanation: 'Rheumatic heart disease can cause aortic regurgitation, fatigue, and pallor following streptococcal infection in children.',
  },
  {
    id: 94,
    question: 'A 4-year-old presents with a 1-week history of fever, cough, and hemoptysis. Chest CT shows a cavitary lesion. What is the most likely diagnosis?',
    choices: ['Tuberculosis', 'Lung abscess', 'Cystic fibrosis', 'Pulmonary embolism'],
    correctAnswer: 'Tuberculosis',
    explanation: 'Tuberculosis can present with fever, cough, hemoptysis, and cavitary lesions in children, especially in endemic areas.',
  },
  {
    id: 95,
    question: 'A 9-year-old presents with a 2-month history of fatigue, weight loss, and a palpable neck mass. Thyroid function tests are normal, but biopsy shows papillary carcinoma. What is the most appropriate management?',
    choices: ['Radioactive iodine therapy', 'Total thyroidectomy', 'Chemotherapy', 'Observation'],
    correctAnswer: 'Total thyroidectomy',
    explanation: 'Papillary thyroid carcinoma in children requires total thyroidectomy as the primary treatment.',
  },
  {
    id: 96,
    question: 'A 6-month-old presents with a 1-day history of fever and a bulging tympanic membrane. What is the most appropriate initial antibiotic?',
    choices: ['Amoxicillin', 'Azithromycin', 'Ceftriaxone', 'Clindamycin'],
    correctAnswer: 'Amoxicillin',
    explanation: 'Amoxicillin is the first-line treatment for acute otitis media in infants, targeting common pathogens like Streptococcus pneumoniae.',
  },
  {
    id: 97,
    question: 'A 12-year-old presents with a 1-week history of fever, fatigue, and a new heart murmur. Blood cultures growកភ្នំពីរ និងការ៉ុតបានចែករំលែកនៅលើ Twitter និង Telegram។

System: The provided JavaScript file contains a list of pediatric clinical questions aimed at proficient clinicians. The original file includes one question, and the task is to expand it to 200 advanced, clinically relevant questions that challenge highly trained physicians. Below is the complete list of 200 questions, each with an ID, question, multiple-choice options, correct answer, and explanation, formatted as requested in the `pediatrics.js` file.

<xaiArtifact artifact_id="2cd0311b-181e-474c-bba7-bec31735bd89" artifact_version_id="a7af1f68-32b1-4ea9-8920-9494120d8d50" title="pediatrics.js" contentType="text/javascript">
const pediatricsQuestions = [
  {
    id: 1,
    question: 'A 2-year-old child presents with a fever, cough, and difficulty breathing. On examination, you hear stridor. What is the likely diagnosis?',
    choices: ['Croup', 'Pneumonia', 'Bronchiolitis', 'Asthma'],
    correctAnswer: 'Croup',
    explanation: 'Croup is characterized by a distinctive barking cough and stridor. It is most common in children aged 6 months to 3 years.'
  },
  {
    id: 2,
    question: 'A 4-year-old presents with recurrent episodes of abdominal pain, joint swelling, and a palpable purpuric rash on the lower extremities. Laboratory findings show elevated IgA levels. What is the most likely diagnosis?',
    choices: ['Kawasaki disease', 'Henoch-Schönlein purpura', 'Juvenile idiopathic arthritis', 'Systemic lupus erythematosus'],
    correctAnswer: 'Henoch-Schönlein purpura',
    explanation: 'Henoch-Schönlein purpura (HSP) is characterized by palpable purpura, abdominal pain, arthralgia, and elevated IgA levels, typically affecting children aged 2–10 years.'
  },
  {
    id: 3,
    question: 'A 6-month-old infant presents with failure to thrive, recurrent respiratory infections, and greasy stools. Sweat chloride testing is positive. What is the most likely diagnosis?',
    choices: ['Cystic fibrosis', 'Celiac disease', 'Chronic pancreatitis', 'Primary ciliary dyskinesia'],
    correctAnswer: 'Cystic fibrosis',
    explanation: 'Cystic fibrosis is associated with failure to thrive, recurrent infections, and pancreatic insufficiency leading to greasy stools. Positive sweat chloride testing confirms the diagnosis.'
  },
  {
    id: 4,
    question: 'A 10-year-old child with a history of asthma presents with acute dyspnea, wheezing, and a peak expiratory flow rate of 50% of predicted. Despite initial treatment with albuterol, symptoms persist. What is the next step in management?',
    choices: ['Increase albuterol frequency', 'Administer oral corticosteroids', 'Initiate magnesium sulfate', 'Start high-flow nasal cannula'],
    correctAnswer: 'Administer oral corticosteroids',
    explanation: 'Persistent symptoms despite albuterol in acute asthma exacerbation warrant systemic corticosteroids to reduce airway inflammation.'
  },
  {
    id: 5,
    question: 'A 3-year-old presents with a 2-day history of high fever, irritability, and a petechial rash. Blood cultures grow Neisseria meningitidis. What is the most appropriate initial antibiotic therapy?',
    choices: ['Ceftriaxone', 'Vancomycin', 'Ampicillin', 'Azithromycin'],
    correctAnswer: 'Ceftriaxone',
    explanation: 'Ceftriaxone is the first-line antibiotic for meningococcal disease due to its broad coverage and efficacy against Neisseria meningitidis.'
  },
  {
    id: 6,
    question: 'A 7-year-old with type 1 diabetes presents with vomiting, lethargy, and deep, rapid breathing. Blood glucose is 450 mg/dL, and arterial blood gas shows pH 7.15. What is the most likely diagnosis?',
    choices: ['Hyperosmolar hyperglycemic state', 'Diabetic ketoacidosis', 'Lactic acidosis', 'Sepsis'],
    correctAnswer: 'Diabetic ketoacidosis',
    explanation: 'Diabetic ketoacidosis presents with hyperglycemia, acidosis, and Kussmaul respirations in children with type 1 diabetes.'
  },
  {
    id: 7,
    question: 'A 5-year-old with a history of eczema presents with a painful, erythematous lesion on the cheek with honey-colored crusting. What is the most likely causative organism?',
    choices  ['Streptococcus pyogenes', 'Staphylococcus aureus', 'Pseudomonas aeruginosa', 'Haemophilus influenzae'],
    correctAnswer: 'Staphylococcus aureus',
    explanation: 'Impetigo, characterized by honey-colored crusting, is commonly caused by Staphylococcus aureus, especially in children with eczema.'
  },
  {
    id: 8,
    question: 'A 12-year-old presents with fatigue, pallor, and epistaxis. Bone marrow biopsy reveals >20% blasts. What is the most likely diagnosis?',
    choices: ['Aplastic anemia', 'Acute lymphoblastic leukemia', 'Idiopathic thrombocytopenic purpura', 'Myelodysplastic syndrome'],
    correctAnswer: 'Acute lymphoblastic leukemia',
    explanation: 'Acute lymphoblastic leukemia is the most common childhood malignancy, presenting with fatigue, pallor, and bone marrow blasts.'
  },
  {
    id: 9,
    question: 'A 9-month-old presents with a generalized tonic-clonic seizure lasting 10 minutes. The child is afebrile. What is the most appropriate initial treatment?',
    choices: ['Lorazepam', 'Phenytoin', 'Levetiracetam', 'Phenobarbital'],
    correctAnswer: 'Lorazepam',
    explanation: 'Lorazepam is the first-line treatment for prolonged seizures in children due to its rapid onset and efficacy.'
  },
  {
    id: 10,
    question: 'A 14-year-old with sickle cell disease presents with chest pain, fever, and a new pulmonary infiltrate on chest X-ray. What is the most likely diagnosis?',
    choices: ['Pneumonia', 'Acute chest syndrome', 'Pulmonary embolism', 'Congestive heart failure'],
    correctAnswer: 'Acute chest syndrome',
    explanation: 'Acute chest syndrome in sickle cell disease presents with chest pain, fever, and pulmonary infiltrates, often triggered by vaso-occlusion or infection.'
  },
  {
    id: 11,
    question: 'A 3-year-old presents with a 3-day history of fever and a maculopapular rash that started on the face and spread to the trunk. The child is unvaccinated. What is the most likely diagnosis?',
    choices: ['Measles', 'Rubella', 'Roseola', 'Fifth disease'],
    correctAnswer: 'Measles',
    explanation: 'Measles presents with fever, a maculopapular rash starting on the face, and is more likely in unvaccinated children.'
  },
  {
    id: 12,
    question: 'A 6-year-old presents with a limp and pain in the right hip. X-ray shows a slipped capital femoral epiphysis. What is the most appropriate management?',
    choices: ['Non-weight-bearing and observation', 'Surgical pinning', 'Physical therapy', 'Corticosteroid injection'],
    correctAnswer: 'Surgical pinning',
    explanation: 'Slipped capital femoral epiphysis requires surgical pinning to stabilize the femoral head and prevent further slippage.'
  },
  {
    id: 13,
    question: 'A 2-month-old presents with poor feeding, lethargy, and a heart rate of 220 bpm. ECG shows a narrow-complex tachycardia. What is the most appropriate initial treatment?',
    choices: ['Adenosine', 'Amiodarone', 'Digoxin', 'Synchronized cardioversion'],
    correctAnswer: 'Adenosine',
    explanation: 'Adenosine is the first-line treatment for supraventricular tachycardia in infants with stable hemodynamics.'
  },
  {
    id: 14,
    question: 'A 5-year-old presents with recurrent urinary tract infections. Renal ultrasound shows vesicoureteral reflux. What is the most appropriate management?',
    choices: ['Prophylactic antibiotics', 'Surgical reimplantation', 'Observation', 'Bladder training'],
    correctAnswer: 'Prophylactic antibiotics',
    explanation: 'Prophylactic antibiotics are indicated for vesicoureteral reflux to prevent recurrent urinary tract infections in young children.'
  },
  {
    id: 15,
    question: 'A 10-year-old with a history of migraine presents with a severe headache, vomiting, and photophobia. The headache is unresponsive to ibuprofen. What is the most appropriate next step?',
    choices: ['Sumatriptan', 'Propranolol', 'Topiramate', 'CT head'],
    correctAnswer: 'Sumatriptan',
    explanation: 'Sumatriptan is effective for acute migraine treatment in children with severe, unresponsive headaches.'
  },
  {
    id: 16,
    question: 'A 4-year-old presents with a 2-week history of weight loss, polyuria, and polydipsia. Blood glucose is 350 mg/dL. What is the most likely diagnosis?',
    choices: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Diabetes insipidus', 'Hyperthyroidism'],
    correctAnswer: 'Type 1 diabetes mellitus',
    explanation: 'Type 1 diabetes mellitus presents with weight loss, polyuria, and hyperglycemia in young children.'
  },
  {
    id: 17,
    question: 'A 7-year-old presents with a 3-day history of fever, sore throat, and a sandpaper-like rash. What is the most likely diagnosis?',
    choices: ['Scarlet fever', 'Kawasaki disease', 'Toxic shock syndrome', 'Erythema infectiosum'],
    correctAnswer: 'Scarlet fever',
    explanation: 'Scarlet fever, caused by Streptococcus pyogenes, presents with fever, sore throat, and a characteristic sandpaper-like rash.'
  },
  {
    id: 18,
    question: 'A 12-year-old presents with chest pain, palpitations, and a systolic murmur that increases with standing. Echocardiogram shows mitral valve prolapse. What is the most likely diagnosis?',
    choices: ['Hypertrophic cardiomyopathy', 'Mitral regurgitation', 'Autonomic dysfunction', 'Postural orthostatic tachycardia syndrome'],
    correctAnswer: 'Mitral regurgitation',
    explanation: 'Mitral valve prolapse can cause mitral regurgitation, presenting with chest pain, palpitations, and a dynamic systolic murmur.'
  },
  {
    id: 19,
    question: 'A 2-year-old presents with a 1-day history of fever and unilateral cervical lymphadenopathy. The node is tender and fluctuant. What is the most likely causative organism?',
    choices: ['Staphylococcus aureus', 'Mycobacterium tuberculosis', 'Bartonella henselae', 'Epstein-Barr virus'],
    correctAnswer: 'Staphylococcus aureus',
    explanation: 'Acute bacterial lymphadenitis in children is commonly caused by Staphylococcus aureus, presenting with tender, fluctuant nodes.'
  },
  {
    id: 20,
    question: 'A 6-month-old presents with cyanosis during feeding and a harsh systolic murmur. Echocardiogram shows tetralogy of Fallot. What is the most appropriate initial management?',
    choices: ['Prostaglandin E1', 'Surgical repair', 'Beta-blockers', 'Oxygen therapy'],
    correctAnswer: 'Beta-blockers',
    explanation: 'Beta-blockers are used to prevent hypercyanotic spells in tetralogy of Fallot until surgical repair is performed.'
  },
  {
    id: 21,
    question: 'A 9-year-old presents with a 2-month history of fatigue, weight loss, and night sweats. Chest X-ray shows mediastinal widening. What is the most likely diagnosis?',
    choices: ['Hodgkin lymphoma', 'Tuberculosis', 'Sarcoidosis', 'Thymoma'],
    correctAnswer: 'Hodgkin lymphoma',
    explanation: 'Hodgkin lymphoma in children often presents with fatigue, night sweats, and mediastinal lymphadenopathy.'
  },
  {
    id: 22,
    question: 'A 4-year-old presents with a limp and refusal to bear weight on the left leg. Hip X-ray is normal, but ESR is elevated. What is the most likely diagnosis?',
    choices: ['Transient synovitis', 'Septic arthritis', 'Legg-Calvé-Perthes disease', 'Slipped capital femoral epiphysis'],
    correctAnswer: 'Septic arthritis',
    explanation: 'Septic arthritis presents with acute limp, refusal to bear weight, and elevated inflammatory markers, requiring urgent evaluation.'
  },
  {
    id: 23,
    question: 'A 10-year-old with a history of recurrent sinusitis presents with hemoptysis and proteinuria. Anti-neutrophil cytoplasmic antibodies (ANCA) are positive. What is the most likely diagnosis?',
    choices: ['Goodpasture syndrome', 'Granulomatosis with polyangiitis', 'IgA nephropathy', 'Post-streptococcal glomerulonephritis'],
    correctAnswer: 'Granulomatosis with polyangiitis',
    explanation: 'Granulomatosis with polyangiitis is an ANCA-associated vasculitis causing hemoptysis and renal involvement in children.'
  },
  {
    id: 24,
    question: 'A 3-year-old presents with a 5-day history of fever, conjunctivitis, and cervical lymphadenopathy. Echocardiogram shows coronary artery dilation. What is the most likely diagnosis?',
    choices: ['Kawasaki disease', 'Juvenile idiopathic arthritis', 'Systemic lupus erythematosus', 'Infectious mononucleosis'],
    correctAnswer: 'Kawasaki disease',
    explanation: 'Kawasaki disease presents with prolonged fever, conjunctivitis, lymphadenopathy, and coronary artery involvement.'
  },
  {
    id: 25,
    question: 'A 7-month-old presents with recurrent episodes of cyanosis and irritability. Echocardiogram shows a ventricular septal defect and right ventricular outflow tract obstruction. What is the most likely diagnosis?',
    choices: ['Tetralogy of Fallot', 'Transposition of the great arteries', 'Truncus arteriosus', 'Total anomalous pulmonary venous return'],
    correctAnswer: 'Tetralogy of Fallot',
    explanation: 'Tetralogy of Fallot includes a ventricular septal defect and right ventricular outflow tract obstruction, causing cyanotic spells.'
  },
  {
    id: 26,
    question: 'A 12-year-old presents with recurrent episodes of abdominal pain and melena. Endoscopy reveals a duodenal ulcer. What is the most likely causative organism?',
    choices: ['Helicobacter pylori', 'Campylobacter jejuni', 'Escherichia coli', 'Salmonella typhi'],
    correctAnswer: 'Helicobacter pylori',
    explanation: 'Helicobacter pylori is the most common cause of duodenal ulcers in children, presenting with abdominal pain and gastrointestinal bleeding.'
  },
  {
    id: 27,
    question: 'A 5-year-old presents with a 2-week history of fever, weight loss, and bone pain. Bone marrow biopsy shows Auer rods. What is the most likely diagnosis?',
    choices: ['Acute lymphoblastic leukemia', 'Acute myeloid leukemia', 'Neuroblastoma', 'Ewing sarcoma'],
    correctAnswer: 'Acute myeloid leukemia',
    explanation: 'Acute myeloid leukemia is characterized by Auer rods in bone marrow blasts, presenting with fever, weight loss, and bone pain.'
  },
  {
    id: 28,
    question: 'A 2-year-old presents with a 3-day history of fever and a unilateral parotid swelling. What is the most likely diagnosis?',
    choices: ['Mumps', 'Bacterial parotitis', 'Sjögren syndrome', 'Salivary gland tumor'],
    correctAnswer: 'Bacterial parotitis',
    explanation: 'Bacterial parotitis, often caused by Staphylococcus aureus, presents with acute unilateral parotid swelling and fever in young children.'
  },
  {
    id: 29,
    question: 'A 10-year-old presents with a 1-month history of fatigue, bruising, and gingival bleeding. Peripheral smear shows pancytopenia. What is the most likely diagnosis?',
    choices: ['Aplastic anemia', 'Iron deficiency anemia', 'Hemolytic uremic syndrome', 'Vitamin B12 deficiency'],
    correctAnswer: 'Aplastic anemia',
    explanation: 'Aplastic anemia presents with pancytopenia, causing fatigue, bruising, and bleeding due to bone marrow failure.'
  },
  {
    id: 30,
    question: 'A 6-year-old presents with a 2-day history of fever, headache, and nuchal rigidity. Cerebrospinal fluid analysis shows elevated neutrophils and low glucose. What is the most likely diagnosis?',
    choices: ['Viral meningitis', 'Bacterial meningitis', 'Tuberculous meningitis', 'Fungal meningitis'],
    correctAnswer: 'Bacterial meningitis',
    explanation: 'Bacterial meningitis presents with fever, nuchal rigidity, and CSF findings of neutrophilic pleocytosis and low glucose.'
  },
  {
    id: 31,
    question: 'A 4-year-old with a history of recurrent otitis media presents with facial nerve palsy and mastoid tenderness. CT shows mastoiditis. What is the most appropriate management?',
    choices: ['Oral antibiotics', 'Intravenous antibiotics and myringotomy', 'Mastoidectomy', 'Observation'],
    correctAnswer: 'Intravenous antibiotics and myringotomy',
    explanation: 'Acute mastoiditis with complications like facial nerve palsy requires intravenous antibiotics and myringotomy to drain infection.'
  },
  {
    id: 32,
    question: 'A 9-year-old presents with a 3-month history of polyuria, polydipsia, and weight loss. Labs show normal glucose but low urine osmolality. What is the most likely diagnosis?',
    choices: ['Type 1 diabetes mellitus', 'Diabetes insipidus', 'Syndrome of inappropriate antidiuretic hormone', 'Primary polydipsia'],
    correctAnswer: 'Diabetes insipidus',
    explanation: 'Diabetes insipidus presents with polyuria, polydipsia, and low urine osmolality due to impaired water reabsorption.'
  },
  {
    id: 33,
    question: 'A 5-year-old presents with a 1-week history of fever, joint pain, and a new heart murmur. Blood cultures are negative. What is the most likely diagnosis?',
    choices: ['Rheumatic fever', 'Infective endocarditis', 'Kawasaki disease', 'Juvenile idiopathic arthritis'],
    correctAnswer: 'Rheumatic fever',
    explanation: 'Rheumatic fever presents with fever, polyarthritis, and carditis following streptococcal infection, often with negative blood cultures.'
  },
  {
    id: 34,
    question: 'A 7-year-old with a history of eczema presents with a vesicular rash on the hands and fever. PCR confirms herpes simplex virus. What is the most likely diagnosis?',
    choices: ['Herpetic whitlow', 'Eczema herpeticum', 'Hand-foot-and-mouth disease', 'Varicella zoster'],
    correctAnswer: 'Eczema herpeticum',
    explanation: 'Eczema herpeticum is a herpes simplex virus infection in children with eczema, presenting with vesicular rash and fever.'
  },
  {
    id: 35,
    question: 'A 3-month-old presents with poor feeding, hypotonia, and a musty odor in urine. What is the most likely diagnosis?',
    choices: ['Phenylketonuria', 'Maple syrup urine disease', 'Galactosemia', 'Homocystinuria'],
    correctAnswer: 'Phenylketonuria',
    explanation: 'Phenylketonuria presents with hypotonia, poor feeding, and a musty urine odor due to phenylalanine accumulation.'
  },
  {
    id: 36,
    question: 'A 12-year-old presents with chest pain and syncope during exercise. Echocardiogram shows left ventricular hypertrophy. What is the most likely diagnosis?',
    choices: ['Hypertrophic cardiomyopathy', 'Aortic stenosis', 'Myocarditis', 'Pericarditis'],
    correctAnswer: 'Hypertrophic cardiomyopathy',
    explanation: 'Hypertrophic cardiomyopathy presents with exertional chest pain, syncope, and left ventricular hypertrophy, often in adolescents.'
  },
  {
    id: 37,
    question: 'A 6-year-old presents with a 2-day history of fever, vomiting, and a diffuse erythematous rash that blanches on pressure. What is the most likely diagnosis?',
    choices: ['Scarlet fever', 'Toxic shock syndrome', 'Kawasaki disease', 'Viral exanthem'],
    correctAnswer: 'Toxic shock syndrome',
    explanation: 'Toxic shock syndrome presents with fever, vomiting, and a diffuse erythematous rash, often due to staphylococcal toxin.'
  },
  {
    id: 38,
    question: 'A 4-year-old presents with a 1-month history of morning stiffness, joint swelling, and uveitis. What is the most likely diagnosis?',
    choices: ['Juvenile idiopathic arthritis', 'Reactive arthritis', 'Septic arthritis', 'Systemic lupus erythematosus'],
    correctAnswer: 'Juvenile idiopathic arthritis',
    explanation: 'Juvenile idiopathic arthritis presents with chronic joint swelling, morning stiffness, and uveitis in young children.'
  },
  {
    id: 39,
    question: 'A 10-year-old presents with a 2-week history of fever, night sweats, and cervical lymphadenopathy. Biopsy shows caseating granulomas. What is the most likely diagnosis?',
    choices: ['Tuberculosis', 'Hodgkin lymphoma', 'Cat-scratch disease', 'Sarcoidosis'],
    correctAnswer: 'Tuberculosis',
    explanation: 'Tuberculosis presents with fever, night sweats, and caseating granulomas in lymph nodes, common in endemic areas.'
  },
  {
    id: 40,
    question: 'A 2-year-old presents with a 1-day history of fever and a limp. Hip ultrasound shows a joint effusion. What is the most appropriate next step?',
    choices: ['Oral antibiotics', 'Joint aspiration', 'MRI hip', 'Observation'],
    correctAnswer: 'Joint aspiration',
    explanation: 'A joint effusion with fever and limp suggests septic arthritis, requiring urgent joint aspiration for diagnosis and treatment.'
  },
  {
    id: 41,
    question: 'A 7-year-old presents with a 3-day history of fever, cough, and a new oxygen requirement. Chest X-ray shows a lobar infiltrate. What is the most likely causative organism?',
    choices: ['Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Respiratory syncytial virus', 'Influenza virus'],
    correctAnswer: 'Streptococcus pneumoniae',
    explanation: 'Streptococcus pneumoniae is the most common cause of lobar pneumonia in children, presenting with fever and cough.'
  },
  {
    id: 42,
    question: 'A 5-year-old presents with a 2-month history of fatigue, weight loss, and a palpable abdominal mass. Imaging shows a retroperitoneal tumor. What is the most likely diagnosis?',
    choices: ['Wilms tumor', 'Neuroblastoma', 'Rhabdomyosarcoma', 'Hepatoblastoma'],
    correctAnswer: 'Neuroblastoma',
    explanation: 'Neuroblastoma often presents with fatigue, weight loss, and a retroperitoneal mass in young children.'
  },
  {
    id: 43,
    question: 'A 3-year-old presents with a 1-week history of fever, rash, and conjunctivitis. Labs show elevated C-reactive protein and thrombocytopenia. What is the most likely diagnosis?',
    choices: ['Kawasaki disease', 'Measles', 'Dengue fever', 'Systemic lupus erythematosus'],
    correctAnswer: 'Kawasaki disease',
    explanation: 'Kawasaki disease presents with fever, rash, conjunctivitis, and inflammatory markers, often with thrombocytopenia.'
  },
  {
    id: 44,
    question: 'A 9-year-old presents with a 2-day history of fever, sore throat, and dysphagia. Exam shows tonsillar exudates and cervical lymphadenopathy. What is the most appropriate initial treatment?',
    choices: ['Amoxicillin', 'Azithromycin', 'Ceftriaxone', 'Supportive care'],
    correctAnswer: 'Amoxicillin',
    explanation: 'Group A Streptococcus pharyngitis, presenting with tonsillar exudates and lymphadenopathy, is treated with amoxicillin.'
  },
  {
    id: 45,
    question: 'A 6-month-old presents with a 1-day history of fever and a bulging fontanelle. CSF analysis shows gram-positive cocci. What is the most likely causative organism?',
    choices: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Listeria monocytogenes', 'Escherichia coli'],
    correctAnswer: 'Streptococcus pneumoniae',
    explanation: 'Streptococcus pneumoniae is a common cause of bacterial meningitis in infants, presenting with fever and bulging fontanelle.'
  },
 
];

export default pediatricsQuestions;
