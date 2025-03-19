// src/data/endocrinology.js

const endocrinologyQuestions = [
  {
    id: 1,
    question: 'A 45-year-old woman presents with fatigue, weight gain, and cold intolerance. Her TSH levels are elevated, and free T4 is low. What is the most likely diagnosis?',
    choices: ['Hypothyroidism', 'Hyperthyroidism', 'Cushing\'s syndrome', 'Addison\'s disease'],
    correctAnswer: 'Hypothyroidism',
    explanation: 'Elevated TSH and low free T4 levels indicate primary hypothyroidism, commonly seen in autoimmune thyroiditis (Hashimoto\'s thyroiditis).',
  },
  {
    id: 2,
    question: 'A 32-year-old male presents with polyuria, polydipsia, and unintentional weight loss of 10 kg over 2 months. His fasting plasma glucose is 280 mg/dL, and HbA1c is 9.8%. Autoantibodies to glutamic acid decarboxylase (GAD) are positive. What is the most likely diagnosis?',
    choices: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Maturity-onset diabetes of the young (MODY)', 'Latent autoimmune diabetes in adults (LADA)'],
    correctAnswer: 'Latent autoimmune diabetes in adults (LADA)',
    explanation: 'This patient presents with classic symptoms of hyperglycemia (polyuria, polydipsia, weight loss) and elevated glucose levels, suggestive of diabetes mellitus. The presence of GAD autoantibodies indicates an autoimmune etiology. While Type 1 diabetes mellitus (T1DM) is a possibility, it typically presents in younger individuals with a more acute onset. LADA, a subtype of autoimmune diabetes, occurs in adults and progresses more slowly than T1DM, often mimicking Type 2 diabetes mellitus (T2DM) initially. T2DM is less likely due to the significant weight loss and autoantibody positivity, which are not typical features. MODY is a monogenic form of diabetes without autoimmune markers, making it incorrect here.'
  },
  {
    id: 3,
    question: 'A 50-year-old woman with a history of hypertension presents with episodic headaches, sweating, and palpitations. Her blood pressure is 180/100 mmHg during an episode. Plasma metanephrines are markedly elevated. What is the most likely diagnosis?',
    choices: ['Essential hypertension', 'Pheochromocytoma', 'Primary aldosteronism', 'Cushing’s syndrome'],
    correctAnswer: 'Pheochromocytoma',
    explanation: 'The triad of episodic headaches, sweating, and palpitations, combined with severe hypertension and elevated plasma metanephrines, strongly suggests pheochromocytoma, a catecholamine-secreting tumor of the adrenal medulla. Essential hypertension does not present with paroxysmal symptoms or elevated metanephrines. Primary aldosteronism typically causes hypokalemia and resistant hypertension without catecholamine excess. Cushing’s syndrome may cause hypertension, but it is associated with weight gain, moon facies, and cortisol excess, not metanephrine elevation.'
  },
  {
    id: 4,
    question: 'A 28-year-old female presents with amenorrhea and galactorrhea for 6 months. Her serum prolactin level is 120 ng/mL (normal < 25 ng/mL), and an MRI reveals a 1.2 cm pituitary mass. What is the most appropriate next step in management?',
    choices: ['Transsphenoidal surgery', 'Cabergoline therapy', 'Radiation therapy', 'Observation with serial MRIs'],
    correctAnswer: 'Cabergoline therapy',
    explanation: 'This patient has a prolactinoma, indicated by hyperprolactinemia, amenorrhea, galactorrhea, and a pituitary mass. Dopamine agonists like cabergoline are the first-line treatment for prolactinomas, as they effectively reduce prolactin levels and tumor size in most cases. Surgery is reserved for cases resistant to medical therapy or with significant mass effect (e.g., vision loss). Radiation is a third-line option, and observation is inappropriate given the symptomatic tumor.'
  },
  {
    id: 5,
    question: 'A 60-year-old man with a history of atrial fibrillation presents with fatigue and heat intolerance. His TSH is <0.01 mIU/L, free T4 is 2.8 ng/dL (normal 0.8-1.8 ng/dL), and T3 is elevated. Thyroid uptake scan shows decreased uptake. What is the most likely cause of his hyperthyroidism?',
    choices: ['Graves’ disease', 'Toxic multinodular goiter', 'Subacute thyroiditis', 'Iodine-induced hyperthyroidism'],
    correctAnswer: 'Subacute thyroiditis',
    explanation: 'Decreased thyroid uptake with hyperthyroidism suggests thyroid hormone release from damaged tissue rather than increased synthesis. Subacute thyroiditis, often post-viral, causes thyrotoxicosis due to follicular destruction, leading to low uptake on scan. Graves’ disease and toxic multinodular goiter show increased uptake due to autonomous hormone production. Iodine-induced hyperthyroidism (e.g., from amiodarone, used in atrial fibrillation) typically occurs with pre-existing thyroid autonomy and normal-to-high uptake.'
  },
  {
    id: 6,
    question: 'A 45-year-old man presents with muscle weakness, hypertension, and hypokalemia. His plasma aldosterone-to-renin ratio is 40 (normal < 20). What is the most likely diagnosis?',
    choices: ['Primary aldosteronism', 'Secondary aldosteronism', 'Liddle syndrome', 'Cushing’s syndrome'],
    correctAnswer: 'Primary aldosteronism',
    explanation: 'Primary aldosteronism (e.g., Conn’s syndrome) is characterized by autonomous aldosterone secretion, leading to hypertension, hypokalemia, and a high aldosterone-to-renin ratio due to suppressed renin. Secondary aldosteronism (e.g., from renal artery stenosis) has elevated renin and aldosterone. Liddle syndrome mimics aldosteronism but has low aldosterone and renin levels due to a sodium channel defect. Cushing’s syndrome can cause hypokalemia and hypertension but is driven by cortisol excess, not aldosterone.'
  },
  {
    id: 7,
    question: 'A 38-year-old woman with type 1 diabetes mellitus presents with confusion and lethargy. Her blood glucose is 600 mg/dL, serum osmolality is 320 mOsm/kg, and arterial pH is 7.35. What is the most likely diagnosis?',
    choices: ['Diabetic ketoacidosis (DKA)', 'Hyperosmolar hyperglycemic state (HHS)', 'Lactic acidosis', 'Hypoglycemic encephalopathy'],
    correctAnswer: 'Hyperosmolar hyperglycemic state (HHS)',
    explanation: 'HHS typically occurs in older patients or those with type 2 diabetes but can rarely affect type 1 patients. It presents with severe hyperglycemia (>600 mg/dL), hyperosmolality (>320 mOsm/kg), and minimal acidosis (pH >7.30), as seen here. DKA involves significant acidosis (pH <7.30) due to ketone production, which is absent here. Lactic acidosis causes metabolic acidosis unrelated to hyperglycemia. Hypoglycemia is ruled out by the elevated glucose.'
  },
  {
    id: 8,
    question: 'A 55-year-old man presents with central obesity, purple striae, and proximal muscle weakness. His 1-mg overnight dexamethasone suppression test shows a cortisol level of 12 µg/dL (normal <1.8 µg/dL). What is the most likely diagnosis?',
    choices: ['Cushing’s disease', 'Adrenal adenoma', 'Ectopic ACTH syndrome', 'Pseudo-Cushing’s syndrome'],
    correctAnswer: 'Cushing’s disease',
    explanation: 'Failure to suppress cortisol after low-dose dexamethasone suggests Cushing’s syndrome. Cushing’s disease (pituitary ACTH-secreting tumor) is the most common endogenous cause, often presenting with classic features like central obesity and striae. Adrenal adenoma and ectopic ACTH syndrome also cause Cushing’s but are less common; further testing (e.g., ACTH levels) differentiates them. Pseudo-Cushing’s (e.g., from alcohol or depression) typically suppresses with higher-dose dexamethasone.'
  },
  {
    id: 9,
    question: 'A 25-year-old woman presents with weight loss, tremor, and exophthalmos. Her TSH is <0.01 mIU/L, and free T4 is elevated. Thyroid-stimulating immunoglobulin (TSI) is positive. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Toxic adenoma', 'Silent thyroiditis', 'Pituitary adenoma'],
    correctAnswer: 'Graves’ disease',
    explanation: 'Graves’ disease is an autoimmune condition causing hyperthyroidism, characterized by low TSH, high T4, and TSI positivity. Exophthalmos is a hallmark feature. Toxic adenoma causes focal hyperthyroidism without autoantibodies or eye findings. Silent thyroiditis is painless and transient, lacking TSI. Pituitary adenoma causing TSH excess is rare and would elevate TSH, not suppress it.'
  },
  {
    id: 10,
    question: 'A 62-year-old man with type 2 diabetes mellitus on metformin presents with fatigue and Kussmaul breathing. His glucose is 250 mg/dL, pH is 7.15, and serum bicarbonate is 10 mEq/L. What is the most likely diagnosis?',
    choices: ['Diabetic ketoacidosis (DKA)', 'Hyperosmolar hyperglycemic state (HHS)', 'Metformin-associated lactic acidosis', 'Renal tubular acidosis'],
    correctAnswer: 'Metformin-associated lactic acidosis',
    explanation: 'Metformin can rarely cause lactic acidosis, especially in renal impairment, presenting with acidosis (pH <7.35, low bicarbonate) and Kussmaul breathing. Glucose is modestly elevated, unlike the severe hyperglycemia of DKA or HHS. DKA typically occurs in type 1 diabetes with ketosis, not evident here. HHS lacks significant acidosis. Renal tubular acidosis causes non-anion gap acidosis, unlike the high anion gap seen here.'
  },
  {
    id: 11,
    question: 'A 40-year-old woman presents with fatigue, weight gain, and a diffusely enlarged thyroid. Her TSH is 8 mIU/L, and anti-thyroid peroxidase (TPO) antibodies are positive. What is the most likely diagnosis?',
    choices: ['Hashimoto’s thyroiditis', 'Subacute thyroiditis', 'Nontoxic multinodular goiter', 'Thyroid cancer'],
    correctAnswer: 'Hashimoto’s thyroiditis',
    explanation: 'Hashimoto’s thyroiditis, an autoimmune condition, causes hypothyroidism (elevated TSH) with a diffuse goiter and positive anti-TPO antibodies. Subacute thyroiditis is painful and transient, often with thyrotoxicosis initially. Nontoxic multinodular goiter lacks autoimmune markers and hypothyroidism. Thyroid cancer typically presents as a nodule, not diffuse enlargement.'
  },
  {
    id: 12,
    question: 'A 35-year-old man presents with episodic hypertension and a blood pressure of 200/110 mmHg during an episode. Urinary vanillylmandelic acid (VMA) is elevated. What is the most likely diagnosis?',
    choices: ['Pheochromocytoma', 'Renal artery stenosis', 'Primary aldosteronism', 'Essential hypertension'],
    correctAnswer: 'Pheochromocytoma',
    explanation: 'Episodic hypertension with elevated VMA, a catecholamine metabolite, points to pheochromocytoma. Renal artery stenosis causes secondary aldosteronism with continuous hypertension, not episodic. Primary aldosteronism involves aldosterone excess, not catecholamines. Essential hypertension is chronic and lacks VMA elevation.'
  },
  {
    id: 13,
    question: 'A 29-year-old woman presents with irregular menses and hirsutism. Her serum testosterone is 90 ng/dL (normal <50 ng/dL), and LH:FSH ratio is 3:1. What is the most likely diagnosis?',
    choices: ['Polycystic ovary syndrome (PCOS)', 'Congenital adrenal hyperplasia (CAH)', 'Androgen-secreting tumor', 'Cushing’s syndrome'],
    correctAnswer: 'Polycystic ovary syndrome (PCOS)',
    explanation: 'PCOS is characterized by hyperandrogenism (elevated testosterone, hirsutism) and ovulatory dysfunction (irregular menses), often with an elevated LH:FSH ratio. CAH (e.g., 21-hydroxylase deficiency) also causes hirsutism but typically includes adrenal abnormalities (e.g., elevated 17-hydroxyprogesterone). Androgen-secreting tumors cause markedly higher testosterone (>150 ng/dL). Cushing’s syndrome presents with cortisol excess signs, not isolated hyperandrogenism.'
  },
  {
    id: 14,
    question: 'A 70-year-old man presents with confusion and dehydration. His glucose is 900 mg/dL, serum sodium is 150 mEq/L, and pH is 7.38. What is the most likely diagnosis?',
    choices: ['Diabetic ketoacidosis (DKA)', 'Hyperosmolar hyperglycemic state (HHS)', 'Lactic acidosis', 'Central diabetes insipidus'],
    correctAnswer: 'Hyperosmolar hyperglycemic state (HHS)',
    explanation: 'HHS presents with extreme hyperglycemia (>600 mg/dL), hypernatremia from dehydration, and minimal acidosis (pH >7.30), as seen here. DKA involves acidosis (pH <7.30) and ketosis. Lactic acidosis causes metabolic acidosis unrelated to glucose. Central diabetes insipidus causes polyuria and hypernatremia but not hyperglycemia.'
  },
  {
    id: 15,
    question: 'A 50-year-old woman presents with bone pain and a serum calcium of 11.5 mg/dL (normal 8.5-10.2 mg/dL). Her PTH is 90 pg/mL (normal 15-65 pg/mL). What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Malignancy-related hypercalcemia', 'Familial hypocalciuric hypercalcemia (FHH)', 'Vitamin D intoxication'],
    correctAnswer: 'Primary hyperparathyroidism',
    explanation: 'Elevated calcium with inappropriately high PTH suggests primary hyperparathyroidism, typically from a parathyroid adenoma. Malignancy-related hypercalcemia (e.g., PTHrP-mediated) suppresses PTH. FHH causes mild hypercalcemia with low urinary calcium, not bone pain. Vitamin D intoxication elevates calcium but suppresses PTH.'
  },
  {
    id: 16,
    question: 'A 45-year-old man with a history of smoking presents with weight loss and hyperpigmentation. His ACTH is elevated, and cortisol is high but does not suppress with high-dose dexamethasone. What is the most likely diagnosis?',
    choices: ['Cushing’s disease', 'Adrenal carcinoma', 'Ectopic ACTH syndrome', 'Addison’s disease'],
    correctAnswer: 'Ectopic ACTH syndrome',
    explanation: 'Ectopic ACTH syndrome, often from lung cancer in smokers, causes high ACTH and cortisol with failure to suppress on high-dose dexamethasone. Hyperpigmentation occurs due to ACTH excess. Cushing’s disease suppresses with high-dose dexamethasone. Adrenal carcinoma causes cortisol excess with low ACTH. Addison’s disease features low cortisol and high ACTH due to adrenal failure.'
  },
  {
    id: 17,
    question: 'A 30-year-old woman presents with fatigue and hypotension. Her serum sodium is 128 mEq/L, potassium is 5.8 mEq/L, and cortisol is low. What is the most likely diagnosis?',
    choices: ['Addison’s disease', 'SIADH', 'Hypopituitarism', 'Primary aldosteronism'],
    correctAnswer: 'Addison’s disease',
    explanation: 'Addison’s disease (primary adrenal insufficiency) causes cortisol deficiency, leading to fatigue, hypotension, hyponatremia, and hyperkalemia due to aldosterone deficiency. SIADH causes hyponatremia with normal potassium and no cortisol deficiency. Hypopituitarism (secondary adrenal insufficiency) spares aldosterone, so hyperkalemia is absent. Primary aldosteronism causes hypertension and hypokalemia.'
  },
  {
    id: 18,
    question: 'A 55-year-old woman presents with palpitations and a thyroid nodule. Her TSH is 0.1 mIU/L, and free T4 is 2.5 ng/dL. A thyroid scan shows a single "hot" nodule. What is the most likely diagnosis?',
    choices: ['Toxic adenoma', 'Graves’ disease', 'Thyroid cancer', 'Subacute thyroiditis'],
    correctAnswer: 'Toxic adenoma',
    explanation: 'A single "hot" (hyperfunctioning) nodule on thyroid scan with suppressed TSH and elevated T4 indicates a toxic adenoma causing hyperthyroidism. Graves’ disease shows diffuse uptake. Thyroid cancer nodules are typically "cold" (nonfunctioning). Subacute thyroiditis shows low uptake due to inflammation.'
  },
  {
    id: 19,
    question: 'A 65-year-old man presents with polyuria and a serum calcium of 12 mg/dL. His PTH is suppressed, and PTHrP is elevated. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Humoral hypercalcemia of malignancy', 'Familial hypocalciuric hypercalcemia', 'Sarcoidosis'],
    correctAnswer: 'Humoral hypercalcemia of malignancy',
    explanation: 'Elevated calcium with suppressed PTH and high PTHrP points to humoral hypercalcemia of malignancy, often from tumors like squamous cell carcinoma. Primary hyperparathyroidism has elevated PTH. FHH features mild hypercalcemia and low urinary calcium. Sarcoidosis causes hypercalcemia via vitamin D activation, not PTHrP.'
  },
  {
    id: 20,
    question: 'A 40-year-old woman with type 2 diabetes presents with recurrent hypoglycemia despite reducing insulin. Her C-peptide is elevated during a hypoglycemic episode. What is the most likely diagnosis?',
    choices: ['Insulinoma', 'Factitious hypoglycemia', 'Adrenal insufficiency', 'Hypopituitarism'],
    correctAnswer: 'Insulinoma',
    explanation: 'Insulinoma, a pancreatic tumor, causes endogenous hyperinsulinism with elevated C-peptide during hypoglycemia. Factitious hypoglycemia from exogenous insulin shows low C-peptide. Adrenal insufficiency and hypopituitarism cause hypoglycemia due to cortisol deficiency, not hyperinsulinism.'
  },
  {
    id: 21,
    question: 'A 50-year-old man presents with fatigue and a random cortisol of 2 µg/dL. An ACTH stimulation test shows no cortisol response. What is the most likely diagnosis?',
    choices: ['Primary adrenal insufficiency', 'Secondary adrenal insufficiency', 'Cushing’s syndrome', 'Pheochromocytoma'],
    correctAnswer: 'Primary adrenal insufficiency',
    explanation: 'Low cortisol with no response to ACTH stimulation indicates primary adrenal insufficiency (Addison’s disease), where the adrenals cannot produce cortisol. Secondary adrenal insufficiency (pituitary failure) shows a blunted but present response due to adrenal atrophy. Cushing’s syndrome features cortisol excess. Pheochromocytoma involves catecholamines, not cortisol.'
  },
  {
    id: 22,
    question: 'A 35-year-old woman presents with weight gain and a buffalo hump. Her 24-hour urinary free cortisol is 300 µg (normal <50 µg). What is the most likely diagnosis?',
    choices: ['Cushing’s syndrome', 'Polycystic ovary syndrome (PCOS)', 'Hypothyroidism', 'Adrenal insufficiency'],
    correctAnswer: 'Cushing’s syndrome',
    explanation: 'Elevated urinary free cortisol with classic signs (weight gain, buffalo hump) indicates Cushing’s syndrome from cortisol excess. PCOS causes hirsutism and irregular menses, not cortisol elevation. Hypothyroidism leads to fatigue and weight gain without cortisol excess. Adrenal insufficiency causes cortisol deficiency.'
  },
  {
    id: 23,
    question: 'A 28-year-old man presents with polydipsia and polyuria. His serum osmolality is 300 mOsm/kg, and urine osmolality is 100 mOsm/kg after water deprivation. What is the most likely diagnosis?',
    choices: ['Central diabetes insipidus', 'Nephrogenic diabetes insipidus', 'Primary polydipsia', 'SIADH'],
    correctAnswer: 'Nephrogenic diabetes insipidus',
    explanation: 'Persistent dilute urine (low osmolality) despite high serum osmolality after water deprivation suggests diabetes insipidus. Nephrogenic diabetes insipidus (renal resistance to ADH) fails to concentrate urine even with ADH administration, unlike central diabetes insipidus, which responds. Primary polydipsia shows dilute urine but normal concentration with deprivation. SIADH causes concentrated urine and hyponatremia.'
  },
  {
    id: 24,
    question: 'A 60-year-old woman presents with osteoporosis and a serum calcium of 11 mg/dL. Her PTH is 80 pg/mL. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Secondary hyperparathyroidism', 'Tertiary hyperparathyroidism', 'Malignancy-related hypercalcemia'],
    correctAnswer: 'Primary hyperparathyroidism',
    explanation: 'Elevated calcium with high PTH indicates primary hyperparathyroidism, often causing osteoporosis from bone resorption. Secondary hyperparathyroidism occurs in hypocalcemia (e.g., vitamin D deficiency). Tertiary hyperparathyroidism follows chronic secondary disease with autonomous PTH secretion. Malignancy-related hypercalcemia suppresses PTH.'
  },
  {
    id: 25,
    question: 'A 45-year-old man presents with hypertension and a potassium of 3.0 mEq/L. His aldosterone is elevated, and renin is suppressed. What is the most likely diagnosis?',
    choices: ['Primary aldosteronism', 'Secondary aldosteronism', 'Liddle syndrome', 'Renal artery stenosis'],
    correctAnswer: 'Primary aldosteronism',
    explanation: 'Elevated aldosterone with suppressed renin and hypokalemia suggests primary aldosteronism (e.g., adrenal adenoma). Secondary aldosteronism (e.g., renal artery stenosis) elevates both aldosterone and renin. Liddle syndrome mimics aldosteronism but has low aldosterone. Renal artery stenosis causes secondary hypertension with high renin.'
  },
  {
    id: 26,
    question: 'A 33-year-old woman presents with tremor and heat intolerance. Her TSH is <0.01 mIU/L, and free T4 is 3.0 ng/dL. Thyroid uptake is diffusely increased. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Toxic multinodular goiter', 'Subacute thyroiditis', 'Iodine-induced hyperthyroidism'],
    correctAnswer: 'Graves’ disease',
    explanation: 'Diffuse increased thyroid uptake with hyperthyroidism (low TSH, high T4) indicates Graves’ disease, an autoimmune condition. Toxic multinodular goiter shows focal uptake. Subacute thyroiditis has low uptake due to inflammation. Iodine-induced hyperthyroidism typically follows iodine exposure and varies in uptake.'
  },
  {
    id: 27,
    question: 'A 55-year-old man presents with erectile dysfunction and gynecomastia. His testosterone is 200 ng/dL (normal 300-1000 ng/dL), and prolactin is 50 ng/mL (normal <20 ng/mL). What is the most likely diagnosis?',
    choices: ['Prolactinoma', 'Hypogonadotropic hypogonadism', 'Klinefelter syndrome', 'Cirrhosis'],
    correctAnswer: 'Prolactinoma',
    explanation: 'Elevated prolactin from a prolactinoma suppresses GnRH, causing low testosterone, erectile dysfunction, and gynecomastia. Hypogonadotropic hypogonadism features low LH/FSH, not prolactin elevation. Klinefelter syndrome (XXY) causes primary hypogonadism with high FSH. Cirrhosis increases estrogen but not prolactin significantly.'
  },
  {
    id: 28,
    question: 'A 40-year-old woman presents with fatigue and a serum sodium of 125 mEq/L. Her urine osmolality is 600 mOsm/kg, and serum osmolality is 270 mOsm/kg. What is the most likely diagnosis?',
    choices: ['SIADH', 'Addison’s disease', 'Hypothyroidism', 'Diabetes insipidus'],
    correctAnswer: 'SIADH',
    explanation: 'SIADH causes hyponatremia with inappropriately concentrated urine (high urine osmolality) relative to low serum osmolality, due to excess ADH. Addison’s disease causes hyponatremia with hyperkalemia and low cortisol. Hypothyroidism can cause hyponatremia but not concentrated urine. Diabetes insipidus features dilute urine.'
  },
  {
    id: 29,
    question: 'A 50-year-old man presents with polyuria and a serum calcium of 9.0 mg/dL. His PTH is 10 pg/mL (normal 15-65 pg/mL). What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Hypoparathyroidism', 'Vitamin D deficiency', 'Chronic kidney disease'],
    correctAnswer: 'Hypoparathyroidism',
    explanation: 'Low PTH with normal calcium and polyuria suggests hypoparathyroidism, impairing renal calcium reabsorption. Primary hyperparathyroidism elevates PTH and calcium. Vitamin D deficiency causes secondary hyperparathyroidism with low calcium. Chronic kidney disease raises PTH due to phosphate retention.'
  },
  {
    id: 30,
    question: 'A 35-year-old man presents with weight loss and diarrhea. His TSH is <0.01 mIU/L, and free T4 is 2.9 ng/dL. Anti-TSH receptor antibodies are positive. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Toxic adenoma', 'Subacute thyroiditis', 'Pituitary adenoma'],
    correctAnswer: 'Graves’ disease',
    explanation: 'Positive anti-TSH receptor antibodies with hyperthyroidism (low TSH, high T4) confirm Graves’ disease. Toxic adenoma lacks autoantibodies and shows focal uptake. Subacute thyroiditis is transient and antibody-negative. Pituitary adenoma causing TSH excess is rare and elevates TSH.'
  },
  {
    id: 31,
    question: 'A 60-year-old woman presents with confusion and a glucose of 800 mg/dL. Her pH is 7.40, and serum osmolality is 340 mOsm/kg. What is the most likely diagnosis?',
    choices: ['Diabetic ketoacidosis (DKA)', 'Hyperosmolar hyperglycemic state (HHS)', 'Lactic acidosis', 'Hypoglycemia'],
    correctAnswer: 'Hyperosmolar hyperglycemic state (HHS)',
    explanation: 'HHS features severe hyperglycemia, hyperosmolality, and minimal acidosis (pH >7.30), as seen here. DKA includes acidosis (pH <7.30) and ketosis. Lactic acidosis causes metabolic acidosis unrelated to glucose. Hypoglycemia is ruled out by high glucose.'
  },
  {
    id: 32,
    question: 'A 45-year-old man presents with fatigue and a random cortisol of 3 µg/dL. His ACTH is elevated, and aldosterone is low. What is the most likely diagnosis?',
    choices: ['Addison’s disease', 'Hypopituitarism', 'Cushing’s syndrome', 'Pheochromocytoma'],
    correctAnswer: 'Addison’s disease',
    explanation: 'Low cortisol and aldosterone with high ACTH indicate primary adrenal insufficiency (Addison’s disease). Hypopituitarism (secondary) spares aldosterone and has low ACTH. Cushing’s syndrome features cortisol excess. Pheochromocytoma involves catecholamines, not cortisol.'
  },
  {
    id: 33,
    question: 'A 30-year-old woman presents with hirsutism and a testosterone of 180 ng/dL. An adrenal CT shows a 5 cm mass. What is the most likely diagnosis?',
    choices: ['Androgen-secreting adrenal tumor', 'Polycystic ovary syndrome (PCOS)', 'Congenital adrenal hyperplasia (CAH)', 'Cushing’s syndrome'],
    correctAnswer: 'Androgen-secreting adrenal tumor',
    explanation: 'Markedly elevated testosterone with an adrenal mass suggests an androgen-secreting tumor. PCOS causes milder testosterone elevation (50-100 ng/dL) without adrenal masses. CAH (e.g., 21-hydroxylase deficiency) elevates 17-hydroxyprogesterone, not mass-related. Cushing’s syndrome causes cortisol excess, not isolated androgen elevation.'
  },
  {
    id: 34,
    question: 'A 55-year-old man presents with bone pain and a serum calcium of 13 mg/dL. His PTH is 5 pg/mL, and phosphorus is 4.5 mg/dL. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Malignancy-related hypercalcemia', 'Vitamin D intoxication', 'Sarcoidosis'],
    correctAnswer: 'Malignancy-related hypercalcemia',
    explanation: 'High calcium with suppressed PTH suggests malignancy-related hypercalcemia (e.g., PTHrP or osteolytic metastases). Primary hyperparathyroidism elevates PTH. Vitamin D intoxication suppresses PTH but often lowers phosphorus. Sarcoidosis raises calcium via vitamin D, not PTH suppression alone.'
  },
  {
    id: 35,
    question: 'A 40-year-old woman presents with amenorrhea and a prolactin of 150 ng/mL. An MRI shows a 2 cm pituitary mass with optic chiasm compression. What is the most appropriate next step?',
    choices: ['Cabergoline therapy', 'Transsphenoidal surgery', 'Radiation therapy', 'Observation'],
    correctAnswer: 'Transsphenoidal surgery',
    explanation: 'A large prolactinoma (2 cm) with optic chiasm compression requires surgery due to mass effect, despite cabergoline being first-line for smaller tumors. Radiation is a last resort. Observation is inappropriate with visual compromise.'
  },
  {
    id: 36,
    question: 'A 50-year-old man presents with fatigue and a TSH of 0.05 mIU/L. His free T4 is 2.2 ng/dL, and thyroid uptake is low. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Subacute thyroiditis', 'Toxic multinodular goiter', 'Iodine-induced hyperthyroidism'],
    correctAnswer: 'Subacute thyroiditis',
    explanation: 'Low uptake with hyperthyroidism (low TSH, high T4) suggests subacute thyroiditis, releasing stored hormone from inflammation. Graves’ disease and toxic multinodular goiter show high uptake. Iodine-induced hyperthyroidism varies in uptake but often follows exposure history.'
  },
  {
    id: 37,
    question: 'A 45-year-old woman presents with weight gain and a cortisol of 15 µg/dL after 1-mg dexamethasone suppression. Her ACTH is 80 pg/mL. What is the most likely diagnosis?',
    choices: ['Cushing’s disease', 'Adrenal adenoma', 'Ectopic ACTH syndrome', 'Pseudo-Cushing’s syndrome'],
    correctAnswer: 'Cushing’s disease',
    explanation: 'Failure to suppress cortisol with elevated ACTH suggests ACTH-dependent Cushing’s syndrome. Cushing’s disease (pituitary adenoma) is the most common cause and often suppresses with high-dose dexamethasone, unlike ectopic ACTH syndrome. Adrenal adenoma has low ACTH. Pseudo-Cushing’s suppresses normally.'
  },
  {
    id: 38,
    question: 'A 60-year-old man presents with polyuria and a serum sodium of 148 mEq/L. His urine osmolality is 150 mOsm/kg after water deprivation. What is the most likely diagnosis?',
    choices: ['Central diabetes insipidus', 'Nephrogenic diabetes insipidus', 'Primary polydipsia', 'SIADH'],
    correctAnswer: 'Nephrogenic diabetes insipidus',
    explanation: 'Dilute urine despite hypernatremia and water deprivation indicates diabetes insipidus. Nephrogenic diabetes insipidus fails to respond to ADH, unlike central diabetes insipidus. Primary polydipsia concentrates urine with deprivation. SIADH causes concentrated urine and hyponatremia.'
  },
  {
    id: 39,
    question: 'A 35-year-old man presents with hypertension and a potassium of 2.8 mEq/L. His aldosterone-to-renin ratio is 50. What is the most likely diagnosis?',
    choices: ['Primary aldosteronism', 'Secondary aldosteronism', 'Liddle syndrome', 'Cushing’s syndrome'],
    correctAnswer: 'Primary aldosteronism',
    explanation: 'A high aldosterone-to-renin ratio with hypokalemia and hypertension indicates primary aldosteronism (e.g., Conn’s syndrome). Secondary aldosteronism elevates renin. Liddle syndrome mimics aldosteronism but has low aldosterone. Cushing’s syndrome causes hypokalemia via cortisol, not aldosterone.'
  },
  {
    id: 40,
    question: 'A 25-year-old woman presents with palpitations and a TSH of <0.01 mIU/L. Her free T4 is 2.8 ng/dL, and thyroid scan shows multiple hot nodules. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Toxic multinodular goiter', 'Subacute thyroiditis', 'Toxic adenoma'],
    correctAnswer: 'Toxic multinodular goiter',
    explanation: 'Multiple hot nodules with hyperthyroidism (low TSH, high T4) indicate toxic multinodular goiter. Graves’ disease shows diffuse uptake. Subacute thyroiditis has low uptake. Toxic adenoma features a single hot nodule.'
  },
  {
    id: 41,
    question: 'A 50-year-old woman presents with fatigue and a serum calcium of 8.0 mg/dL. Her PTH is 100 pg/mL, and 25-hydroxyvitamin D is 15 ng/mL. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Secondary hyperparathyroidism', 'Hypoparathyroidism', 'Vitamin D intoxication'],
    correctAnswer: 'Secondary hyperparathyroidism',
    explanation: 'Low calcium with elevated PTH and low vitamin D suggests secondary hyperparathyroidism from vitamin D deficiency, stimulating PTH to maintain calcium. Primary hyperparathyroidism elevates calcium. Hypoparathyroidism has low PTH. Vitamin D intoxication raises calcium and suppresses PTH.'
  },
  {
    id: 42,
    question: 'A 45-year-old man presents with fatigue, weight loss, and hyperpigmentation of the skin. His morning cortisol is 4 µg/dL, and ACTH is 150 pg/mL (normal 10-50 pg/mL). What is the most likely diagnosis?',
    choices: ['Addison’s disease', 'Cushing’s syndrome', 'Hypopituitarism', 'Congenital adrenal hyperplasia'],
    correctAnswer: 'Addison’s disease',
    explanation: 'Low cortisol with elevated ACTH and symptoms like fatigue, weight loss, and hyperpigmentation (due to ACTH-driven melanocyte stimulation) indicate primary adrenal insufficiency (Addison’s disease). Cushing’s syndrome features cortisol excess with suppressed ACTH if adrenal in origin, or elevated ACTH in pituitary/ectopic cases, but not hyperpigmentation. Hypopituitarism (secondary adrenal insufficiency) causes low ACTH and cortisol, without hyperpigmentation. Congenital adrenal hyperplasia (e.g., 21-hydroxylase deficiency) typically presents earlier with precocious puberty or salt-wasting, not in adulthood with these features.'
  },
  {
    id: 43,
    question: 'A 38-year-old woman presents with irregular menses, acne, and hirsutism. Her serum DHEAS is 600 µg/dL (normal <350 µg/dL), and a pelvic ultrasound is normal. What is the most likely diagnosis?',
    choices: ['Polycystic ovary syndrome (PCOS)', 'Adrenal androgen-secreting tumor', 'Congenital adrenal hyperplasia (CAH)', 'Cushing’s syndrome'],
    correctAnswer: 'Adrenal androgen-secreting tumor',
    explanation: 'Markedly elevated DHEAS (>500 µg/dL) with normal pelvic ultrasound suggests an adrenal androgen-secreting tumor, which causes virilization (hirsutism, acne) and menstrual irregularities. PCOS typically shows milder androgen elevation (testosterone 50-100 ng/dL, DHEAS <400 µg/dL) with ovarian cysts. CAH (e.g., 21-hydroxylase deficiency) elevates 17-hydroxyprogesterone, not DHEAS alone, and often presents earlier. Cushing’s syndrome causes cortisol excess with possible mild androgen elevation, but not DHEAS this high.'
  },
  {
    id: 44,
    question: 'A 60-year-old man presents with confusion and seizures. His serum sodium is 118 mEq/L, urine osmolality is 500 mOsm/kg, and serum osmolality is 260 mOsm/kg. What is the most likely diagnosis?',
    choices: ['Syndrome of inappropriate antidiuretic hormone (SIADH)', 'Central diabetes insipidus', 'Nephrogenic diabetes insipidus', 'Primary polydipsia'],
    correctAnswer: 'Syndrome of inappropriate antidiuretic hormone (SIADH)',
    explanation: 'Severe hyponatremia with inappropriately concentrated urine (high urine osmolality) relative to low serum osmolality suggests SIADH, where excess ADH causes water retention. Central and nephrogenic diabetes insipidus cause dilute urine (low osmolality) with hypernatremia. Primary polydipsia dilutes both serum and urine osmolality, but urine concentrates with water restriction, unlike here.'
  },
  {
    id: 45,
    question: 'A 28-year-old woman presents with heat intolerance and a palpable thyroid nodule. Her TSH is 0.02 mIU/L, free T4 is 2.6 ng/dL, and a thyroid scan shows a single "hot" nodule. What is the most appropriate next step?',
    choices: ['Radioactive iodine ablation', 'Thyroidectomy', 'Fine-needle aspiration biopsy', 'Antithyroid drugs'],
    correctAnswer: 'Radioactive iodine ablation',
    explanation: 'A single "hot" nodule causing hyperthyroidism (low TSH, high T4) indicates a toxic adenoma. Radioactive iodine ablation is the preferred treatment to destroy the autonomous nodule and restore euthyroidism. Thyroidectomy is reserved for large or compressive nodules. Fine-needle aspiration is unnecessary for hyperfunctioning nodules, which are rarely malignant. Antithyroid drugs control symptoms but do not address the underlying nodule.'
  },
  {
    id: 46,
    question: 'A 55-year-old woman presents with osteoporosis and a serum calcium of 11.2 mg/dL. Her PTH is 85 pg/mL, and urinary calcium is elevated. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Familial hypocalciuric hypercalcemia (FHH)', 'Malignancy-related hypercalcemia', 'Vitamin D intoxication'],
    correctAnswer: 'Primary hyperparathyroidism',
    explanation: 'Elevated calcium with high PTH and increased urinary calcium points to primary hyperparathyroidism, typically from a parathyroid adenoma, causing bone resorption (osteoporosis). FHH features high calcium and PTH but low urinary calcium due to a calcium-sensing receptor defect. Malignancy-related hypercalcemia suppresses PTH. Vitamin D intoxication raises calcium but suppresses PTH.'
  },
  {
    id: 47,
    question: 'A 40-year-old man presents with episodic hypertension, sweating, and a blood pressure of 190/110 mmHg during an episode. His plasma free metanephrines are elevated. What is the most appropriate next step?',
    choices: ['CT scan of the adrenals', '24-hour urinary catecholamines', 'Clonidine suppression test', 'Adrenal vein sampling'],
    correctAnswer: 'CT scan of the adrenals',
    explanation: 'Elevated plasma free metanephrines with episodic hypertension and sweating strongly suggest pheochromocytoma. The next step is imaging (e.g., adrenal CT) to locate the tumor. Urinary catecholamines are less specific and sensitive than metanephrines, which are already diagnostic. Clonidine suppression tests are used for ambiguous cases, not here. Adrenal vein sampling is for aldosteronism, not catecholamine excess.'
  },
  {
    id: 48,
    question: 'A 35-year-old woman presents with weight gain, moon facies, and a buffalo hump. Her 1-mg dexamethasone suppression test shows cortisol of 10 µg/dL, and ACTH is 70 pg/mL. What is the most likely diagnosis?',
    choices: ['Cushing’s disease', 'Adrenal adenoma', 'Ectopic ACTH syndrome', 'Pseudo-Cushing’s syndrome'],
    correctAnswer: 'Cushing’s disease',
    explanation: 'Failure to suppress cortisol with elevated ACTH suggests ACTH-dependent Cushing’s syndrome. Cushing’s disease (pituitary adenoma) is the most common cause and typically suppresses with high-dose dexamethasone, unlike ectopic ACTH syndrome (e.g., lung cancer), which does not. Adrenal adenoma causes cortisol excess with low ACTH. Pseudo-Cushing’s (e.g., from stress) suppresses normally with low-dose dexamethasone.'
  },
  {
    id: 49,
    question: 'A 50-year-old man presents with polyuria and polydipsia. His serum osmolality is 310 mOsm/kg, and urine osmolality is 120 mOsm/kg after water deprivation. Desmopressin increases urine osmolality to 600 mOsm/kg. What is the most likely diagnosis?',
    choices: ['Central diabetes insipidus', 'Nephrogenic diabetes insipidus', 'Primary polydipsia', 'SIADH'],
    correctAnswer: 'Central diabetes insipidus',
    explanation: 'Dilute urine despite high serum osmolality after water deprivation suggests diabetes insipidus. A significant increase in urine osmolality with desmopressin indicates central diabetes insipidus (ADH deficiency), which responds to exogenous ADH. Nephrogenic diabetes insipidus (renal ADH resistance) shows no response. Primary polydipsia concentrates urine with deprivation alone. SIADH causes concentrated urine and hyponatremia.'
  },
  {
    id: 50,
    question: 'A 60-year-old woman presents with fatigue and a TSH of 0.03 mIU/L. Her free T4 is 2.4 ng/dL, and thyroid uptake is diffusely increased. What is the most appropriate initial treatment?',
    choices: ['Methimazole', 'Radioactive iodine', 'Propranolol', 'Thyroidectomy'],
    correctAnswer: 'Methimazole',
    explanation: 'Diffuse uptake with hyperthyroidism (low TSH, high T4) suggests Graves’ disease. Methimazole, an antithyroid drug, is the initial treatment to block thyroid hormone synthesis. Radioactive iodine is definitive but not first-line. Propranolol manages symptoms (e.g., tachycardia) but does not treat the cause. Thyroidectomy is reserved for specific cases (e.g., large goiter).'
  },
  {
    id: 51,
    question: 'A 45-year-old man presents with muscle weakness and hypertension. His potassium is 2.9 mEq/L, and aldosterone-to-renin ratio is 45. What is the most likely diagnosis?',
    choices: ['Primary aldosteronism', 'Secondary aldosteronism', 'Liddle syndrome', 'Cushing’s syndrome'],
    correctAnswer: 'Primary aldosteronism',
    explanation: 'Hypokalemia, hypertension, and a high aldosterone-to-renin ratio indicate primary aldosteronism (e.g., adrenal adenoma). Secondary aldosteronism (e.g., renal artery stenosis) elevates renin. Liddle syndrome mimics aldosteronism but has low aldosterone and renin. Cushing’s syndrome causes hypokalemia via cortisol, not aldosterone excess.'
  },
  {
    id: 52,
    question: 'A 30-year-old woman presents with galactorrhea and amenorrhea. Her prolactin is 90 ng/mL, and MRI shows a 0.8 cm pituitary mass. What is the most appropriate initial treatment?',
    choices: ['Cabergoline', 'Transsphenoidal surgery', 'Bromocriptine', 'Radiation therapy'],
    correctAnswer: 'Cabergoline',
    explanation: 'A prolactinoma causing hyperprolactinemia (galactorrhea, amenorrhea) with a small pituitary mass (<1 cm) is best treated with cabergoline, a dopamine agonist that reduces prolactin and tumor size. Surgery is for larger tumors or medical failure. Bromocriptine is an alternative but less tolerated. Radiation is a last resort.'
  },
  {
    id: 53,
    question: 'A 55-year-old man presents with weight loss and diarrhea. His TSH is <0.01 mIU/L, free T4 is 3.1 ng/dL, and thyroid uptake is low. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Subacute thyroiditis', 'Toxic multinodular goiter', 'Iodine-induced hyperthyroidism'],
    correctAnswer: 'Subacute thyroiditis',
    explanation: 'Low thyroid uptake with hyperthyroidism (low TSH, high T4) suggests subacute thyroiditis, where inflammation releases stored hormone. Graves’ disease and toxic multinodular goiter show increased uptake. Iodine-induced hyperthyroidism varies in uptake but typically follows iodine exposure, not specified here.'
  },
  {
    id: 54,
    question: 'A 65-year-old woman presents with confusion and a glucose of 700 mg/dL. Her pH is 7.36, and serum osmolality is 330 mOsm/kg. What is the most likely diagnosis?',
    choices: ['Diabetic ketoacidosis (DKA)', 'Hyperosmolar hyperglycemic state (HHS)', 'Lactic acidosis', 'Hypoglycemia'],
    correctAnswer: 'Hyperosmolar hyperglycemic state (HHS)',
    explanation: 'Severe hyperglycemia (>600 mg/dL), hyperosmolality (>320 mOsm/kg), and normal pH (>7.30) indicate HHS, typically seen in type 2 diabetes. DKA features acidosis (pH <7.30) and ketosis. Lactic acidosis causes metabolic acidosis unrelated to glucose. Hypoglycemia is ruled out by high glucose.'
  },
  {
    id: 55,
    question: 'A 40-year-old man presents with bone pain and a serum calcium of 12.5 mg/dL. His PTH is 10 pg/mL, and PTHrP is elevated. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Humoral hypercalcemia of malignancy', 'Familial hypocalciuric hypercalcemia', 'Sarcoidosis'],
    correctAnswer: 'Humoral hypercalcemia of malignancy',
    explanation: 'High calcium with suppressed PTH and elevated PTHrP suggests humoral hypercalcemia of malignancy (e.g., squamous cell carcinoma). Primary hyperparathyroidism elevates PTH. FHH has high PTH and low urinary calcium. Sarcoidosis raises calcium via vitamin D, not PTHrP.'
  },
  {
    id: 56,
    question: 'A 35-year-old woman presents with fatigue and a TSH of 6 mIU/L. Her free T4 is 0.7 ng/dL, and anti-TPO antibodies are positive. What is the most appropriate treatment?',
    choices: ['Levothyroxine', 'Methimazole', 'Radioactive iodine', 'Observation'],
    correctAnswer: 'Levothyroxine',
    explanation: 'Elevated TSH, low T4, and positive anti-TPO antibodies indicate hypothyroidism from Hashimoto’s thyroiditis. Levothyroxine replaces thyroid hormone to normalize levels. Methimazole and radioactive iodine treat hyperthyroidism, not hypothyroidism. Observation is inappropriate for symptomatic hypothyroidism.'
  },
  {
    id: 57,
    question: 'A 50-year-old man presents with erectile dysfunction and low libido. His testosterone is 150 ng/dL, LH is 2 mIU/mL (normal 2-12 mIU/mL), and FSH is 3 mIU/mL (normal 1-12 mIU/mL). What is the most likely diagnosis?',
    choices: ['Primary hypogonadism', 'Hypogonadotropic hypogonadism', 'Klinefelter syndrome', 'Prolactinoma'],
    correctAnswer: 'Hypogonadotropic hypogonadism',
    explanation: 'Low testosterone with inappropriately normal LH and FSH suggests hypogonadotropic hypogonadism (e.g., pituitary dysfunction). Primary hypogonadism (e.g., Klinefelter syndrome) elevates LH/FSH due to testicular failure. Prolactinoma causes low testosterone but typically elevates prolactin, not specified here.'
  },
  {
    id: 58,
    question: 'A 45-year-old woman presents with palpitations and a TSH of <0.01 mIU/L. Her free T4 is 2.9 ng/dL, and thyroid scan shows multiple hot nodules. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Toxic multinodular goiter', 'Subacute thyroiditis', 'Toxic adenoma'],
    correctAnswer: 'Toxic multinodular goiter',
    explanation: 'Multiple hot nodules with hyperthyroidism (low TSH, high T4) indicate toxic multinodular goiter. Graves’ disease shows diffuse uptake. Subacute thyroiditis has low uptake. Toxic adenoma features a single hot nodule.'
  },
  {
    id: 59,
    question: 'A 60-year-old man presents with fatigue and a serum sodium of 130 mEq/L. His cortisol is 3 µg/dL, and ACTH is elevated. What is the most likely diagnosis?',
    choices: ['Addison’s disease', 'SIADH', 'Hypopituitarism', 'Diabetes insipidus'],
    correctAnswer: 'Addison’s disease',
    explanation: 'Low cortisol with high ACTH and hyponatremia suggest primary adrenal insufficiency (Addison’s disease), causing aldosterone deficiency. SIADH causes hyponatremia with normal cortisol. Hypopituitarism has low ACTH and cortisol. Diabetes insipidus causes hypernatremia, not hyponatremia.'
  },
  {
    id: 60,
    question: 'A 30-year-old woman presents with weight loss and exophthalmos. Her TSH is <0.01 mIU/L, free T4 is 3.0 ng/dL, and TSI is positive. What is the most appropriate initial treatment?',
    choices: ['Methimazole', 'Propranolol', 'Radioactive iodine', 'Thyroidectomy'],
    correctAnswer: 'Methimazole',
    explanation: 'Positive TSI with hyperthyroidism and exophthalmos confirms Graves’ disease. Methimazole is the initial treatment to block thyroid hormone synthesis. Propranolol manages symptoms but not the cause. Radioactive iodine and thyroidectomy are definitive options after stabilization.'
  },
  {
    id: 61,
    question: 'A 55-year-old man presents with hypertension and a potassium of 3.1 mEq/L. His aldosterone is elevated, and renin is suppressed. What is the most appropriate next step?',
    choices: ['Adrenal CT scan', 'Adrenal vein sampling', 'Spironolactone', 'Renal artery Doppler'],
    correctAnswer: 'Adrenal CT scan',
    explanation: 'Elevated aldosterone with suppressed renin and hypokalemia suggest primary aldosteronism. An adrenal CT scan identifies an adenoma or hyperplasia. Adrenal vein sampling differentiates unilateral from bilateral disease but follows imaging. Spironolactone treats symptoms but is not diagnostic. Renal artery Doppler is for secondary aldosteronism.'
  },
  {
    id: 62,
    question: 'A 40-year-old woman presents with amenorrhea and a prolactin of 200 ng/mL. Her MRI shows a 3 cm pituitary mass with optic chiasm compression. What is the most appropriate next step?',
    choices: ['Cabergoline', 'Transsphenoidal surgery', 'Radiation therapy', 'Observation'],
    correctAnswer: 'Transsphenoidal surgery',
    explanation: 'A large prolactinoma (>1 cm) with optic chiasm compression requires surgery due to mass effect, despite cabergoline being first-line for smaller tumors. Radiation is a last resort. Observation is inappropriate with visual compromise.'
  },
  {
    id: 63,
    question: 'A 50-year-old man presents with polyuria and a serum calcium of 8.5 mg/dL. His PTH is 8 pg/mL, and phosphorus is 4.0 mg/dL. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Hypoparathyroidism', 'Vitamin D deficiency', 'Chronic kidney disease'],
    correctAnswer: 'Hypoparathyroidism',
    explanation: 'Low PTH with normal calcium and polyuria suggests hypoparathyroidism, impairing renal calcium reabsorption. Primary hyperparathyroidism elevates PTH and calcium. Vitamin D deficiency causes secondary hyperparathyroidism with low calcium. Chronic kidney disease raises PTH due to phosphate retention.'
  },
  {
    id: 64,
    question: 'A 35-year-old man presents with tremor and heat intolerance. His TSH is <0.01 mIU/L, free T4 is 2.8 ng/dL, and thyroid uptake is diffusely increased. What is the most likely diagnosis?',
    choices: ['Graves’ disease', 'Toxic adenoma', 'Subacute thyroiditis', 'Iodine-induced hyperthyroidism'],
    correctAnswer: 'Graves’ disease',
    explanation: 'Diffuse increased uptake with hyperthyroidism (low TSH, high T4) indicates Graves’ disease, an autoimmune condition. Toxic adenoma shows focal uptake. Subacute thyroiditis has low uptake. Iodine-induced hyperthyroidism varies in uptake and often follows exposure.'
  },
  {
    id: 65,
    question: 'A 60-year-old woman presents with fatigue and a serum calcium of 7.8 mg/dL. Her PTH is 120 pg/mL, and 25-hydroxyvitamin D is 10 ng/mL. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Secondary hyperparathyroidism', 'Hypoparathyroidism', 'Vitamin D intoxication'],
    correctAnswer: 'Secondary hyperparathyroidism',
    explanation: 'Low calcium with elevated PTH and low vitamin D suggests secondary hyperparathyroidism from vitamin D deficiency, stimulating PTH to maintain calcium. Primary hyperparathyroidism elevates calcium. Hypoparathyroidism has low PTH. Vitamin D intoxication raises calcium and suppresses PTH.'
  },
  {
    id: 66,
    question: 'A 45-year-old man presents with weight loss and a random glucose of 300 mg/dL. His C-peptide is low, and GAD antibodies are positive. What is the most likely diagnosis?',
    choices: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Latent autoimmune diabetes in adults (LADA)', 'Maturity-onset diabetes of the young (MODY)'],
    correctAnswer: 'Latent autoimmune diabetes in adults (LADA)',
    explanation: 'Positive GAD antibodies with hyperglycemia and low C-peptide (indicating beta-cell failure) suggest an autoimmune diabetes. LADA presents in adults with a slower progression than type 1 diabetes mellitus (T1DM), which typically affects younger patients acutely. Type 2 diabetes mellitus (T2DM) has high C-peptide and no autoantibodies. MODY is genetic, not autoimmune.'
  },
  {
    id: 67,
    question: 'A 50-year-old woman presents with bone pain and a serum calcium of 13 mg/dL. Her PTH is 5 pg/mL, and alkaline phosphatase is elevated. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Malignancy-related hypercalcemia', 'Vitamin D intoxication', 'Paget’s disease of bone'],
    correctAnswer: 'Malignancy-related hypercalcemia',
    explanation: 'High calcium with suppressed PTH and elevated alkaline phosphatase suggests malignancy-related hypercalcemia (e.g., osteolytic metastases or PTHrP). Primary hyperparathyroidism elevates PTH. Vitamin D intoxication suppresses PTH but lacks bone pain context here. Paget’s disease elevates alkaline phosphatase but typically normalizes calcium unless immobilized.'
  },
  {
    id: 68,
    question: 'A 35-year-old woman presents with fatigue and a TSH of 10 mIU/L. Her free T4 is 0.6 ng/dL, and she is 12 weeks pregnant. What is the most appropriate treatment?',
    choices: ['Levothyroxine', 'Propylthiouracil', 'Radioactive iodine', 'Observation'],
    correctAnswer: 'Levothyroxine',
    explanation: 'Elevated TSH and low T4 during pregnancy indicate hypothyroidism, requiring levothyroxine to prevent fetal neurodevelopmental issues. Propylthiouracil treats hyperthyroidism, contraindicated here. Radioactive iodine is unsafe in pregnancy. Observation risks fetal harm from untreated hypothyroidism.'
  },
  {
    id: 69,
    question: 'A 55-year-old man presents with headache and a blood pressure of 180/100 mmHg. His plasma metanephrines are elevated, and an adrenal mass is found on CT. What is the most appropriate next step?',
    choices: ['Alpha-blockade with phenoxybenzamine', 'Surgical resection', 'Beta-blockade with propranolol', 'Observation'],
    correctAnswer: 'Alpha-blockade with phenoxybenzamine',
    explanation: 'Elevated metanephrines and an adrenal mass suggest pheochromocytoma. Alpha-blockade (e.g., phenoxybenzamine) is the first step to control hypertension and prevent intraoperative crises before surgical resection. Beta-blockade alone risks unopposed alpha stimulation. Observation is inappropriate for a symptomatic tumor.'
  },
  {
    id: 70,
    question: 'A 40-year-old woman presents with weight gain and a cortisol of 12 µg/dL after 1-mg dexamethasone suppression. Her ACTH is undetectable. What is the most likely diagnosis?',
    choices: ['Cushing’s disease', 'Adrenal adenoma', 'Ectopic ACTH syndrome', 'Pseudo-Cushing’s syndrome'],
    correctAnswer: 'Adrenal adenoma',
    explanation: 'Failure to suppress cortisol with undetectable ACTH indicates an adrenal source of cortisol excess (e.g., adenoma), suppressing pituitary ACTH. Cushing’s disease and ectopic ACTH syndrome elevate ACTH. Pseudo-Cushing’s suppresses normally with dexamethasone.'
  },
  {
    id: 71,
    question: 'A 50-year-old man presents with polyuria and a serum sodium of 150 mEq/L. His urine osmolality is 100 mOsm/kg after water deprivation. What is the most likely diagnosis?',
    choices: ['Central diabetes insipidus', 'Nephrogenic diabetes insipidus', 'Primary polydipsia', 'SIADH'],
    correctAnswer: 'Nephrogenic diabetes insipidus',
    explanation: 'Dilute urine despite hypernatremia and water deprivation suggests diabetes insipidus. Nephrogenic diabetes insipidus (renal ADH resistance) fails to concentrate urine, unlike central diabetes insipidus, which responds to desmopressin. Primary polydipsia concentrates urine with deprivation. SIADH causes concentrated urine and hyponatremia.'
  },
  {
    id: 72,
    question: 'A 60-year-old woman presents with fatigue and a TSH of 0.1 mIU/L. Her free T4 is 2.3 ng/dL, and thyroid uptake shows multiple hot nodules. What is the most appropriate treatment?',
    choices: ['Radioactive iodine', 'Methimazole', 'Thyroidectomy', 'Propranolol'],
    correctAnswer: 'Radioactive iodine',
    explanation: 'Multiple hot nodules with hyperthyroidism (low TSH, high T4) indicate toxic multinodular goiter. Radioactive iodine is the preferred treatment to ablate hyperfunctioning nodules. Methimazole controls symptoms but is not definitive. Thyroidectomy is for large goiters. Propranolol manages symptoms only.'
  },
  {
    id: 73,
    question: 'A 45-year-old man presents with fatigue and a serum calcium of 11.8 mg/dL. His PTH is 90 pg/mL, and phosphorus is 2.0 mg/dL. What is the most likely diagnosis?',
    choices: ['Primary hyperparathyroidism', 'Secondary hyperparathyroidism', 'Tertiary hyperparathyroidism', 'Malignancy-related hypercalcemia'],
    correctAnswer: 'Primary hyperparathyroidism',
    explanation: 'Elevated calcium with high PTH and low phosphorus indicates primary hyperparathyroidism, typically from a parathyroid adenoma. Secondary hyperparathyroidism occurs in hypocalcemia. Tertiary hyperparathyroidism follows chronic secondary disease. Malignancy-related hypercalcemia suppresses PTH.'
  },
  {
    id: 74,
    question: 'A 35-year-old woman presents with hirsutism and a testosterone of 120 ng/dL. Her 17-hydroxyprogesterone is 300 ng/dL (normal <200 ng/dL). What is the most likely diagnosis?',
    choices: ['Polycystic ovary syndrome (PCOS)', 'Congenital adrenal hyperplasia (CAH)', 'Androgen-secreting tumor', 'Cushing’s syndrome'],
    correctAnswer: 'Congenital adrenal hyperplasia (CAH)',
    explanation: 'Elevated 17-hydroxyprogesterone with hyperandrogenism (hirsutism, high testosterone) suggests CAH, typically 21-hydroxylase deficiency, impairing cortisol synthesis and increasing ACTH-driven androgens. PCOS has normal 17-hydroxyprogesterone. Androgen-secreting tumors cause higher testosterone (>150 ng/dL). Cushing’s syndrome features cortisol excess, not this profile.'
  },
  {
    id: 75,
    question: 'A 50-year-old man presents with confusion and a glucose of 600 mg/dL. His pH is 7.20, and serum ketones are positive. What is the most likely diagnosis?',
    choices: ['Diabetic ketoacidosis (DKA)', 'Hyperosmolar hyperglycemic state (HHS)', 'Lactic acidosis', 'Alcoholic ketoacidosis'],
    correctAnswer: 'Diabetic ketoacidosis (DKA)',
    explanation: 'Hyperglycemia (>250 mg/dL), acidosis (pH <7.30), and ketosis indicate DKA, typically in type 1 diabetes or decompensated type 2. HHS features higher glucose (>600 mg/dL) and minimal acidosis (pH >7.30). Lactic acidosis lacks ketones. Alcoholic ketoacidosis follows alcohol binge with normal/low glucose.'
  },
  {
    id: 76,
    question: 'A 40-year-old woman presents with fatigue and a serum sodium of 128 mEq/L. Her urine osmolality is 700 mOsm/kg, and cortisol is normal. What is the most likely diagnosis?',
    choices: ['SIADH', 'Addison’s disease', 'Hypothyroidism', 'Diabetes insipidus'],
    correctAnswer: 'SIADH',
    explanation: 'Hyponatremia with inappropriately concentrated urine (high urine osmolality) and normal cortisol suggests SIADH from excess ADH. Addison’s disease causes hyponatremia with low cortisol and hyperkalemia. Hypothyroidism can cause hyponatremia but not concentrated urine typically. Diabetes insipidus features dilute urine.'
  },
  {
    id: 77,
    question: 'A 55-year-old man presents with weight loss and a random cortisol of 30 µg/dL. His ACTH is 120 pg/mL and does not suppress with high-dose dexamethasone. What is the most likely diagnosis?',
    choices: ['Cushing’s disease', 'Adrenal adenoma', 'Ectopic ACTH syndrome', 'Pseudo-Cushing’s syndrome'],
    correctAnswer: 'Ectopic ACTH syndrome',
    explanation: 'High cortisol and ACTH without suppression on high-dose dexamethasone suggest ectopic ACTH syndrome (e.g., small cell lung cancer). Cushing’s disease typically suppresses with high-dose dexamethasone. Adrenal adenoma has low ACTH. Pseudo-Cushing’s suppresses with low-dose dexamethasone.'
  },
  {
    id: 78,
    question: 'A 30-year-old woman presents with polyuria and a serum osmolality of 305 mOsm/kg. Her urine osmolality is 150 mOsm/kg after water deprivation, and desmopressin has no effect. What is the most likely diagnosis?',
    choices: ['Central diabetes insipidus', 'Nephrogenic diabetes insipidus', 'Primary polydipsia', 'SIADH'],
    correctAnswer: 'Nephrogenic diabetes insipidus',
    explanation: 'Dilute urine despite high serum osmolality and no response to desmopressin indicate nephrogenic diabetes insipidus (renal ADH resistance). Central diabetes insipidus responds to desmopressin. Primary polydipsia concentrates urine with deprivation. SIADH causes concentrated urine and hyponatremia.'
  },
  {
    id: 79,
    question: 'A 45-year-old man presents with fatigue and a TSH of 0.05 mIU/L. His free T4 is 2.5 ng/dL, and thyroid uptake is low. What is the most appropriate initial treatment?',
    choices: ['Methimazole', 'Propranolol', 'Supportive care', 'Radioactive iodine'],
    correctAnswer: 'Supportive care',
    explanation: 'Low uptake with hyperthyroidism (low TSH, high T4) suggests subacute thyroiditis, a self-limiting condition releasing stored hormone. Supportive care (e.g., NSAIDs, beta-blockers) is appropriate as it resolves spontaneously. Methimazole and radioactive iodine treat autonomous hormone production, not applicable here. Propranolol manages symptoms but is adjunctive.'
  },
  {
    id: 80,
    question: 'A 60-year-old woman presents with osteoporosis and a serum calcium of 11.5 mg/dL. Her PTH is 95 pg/mL, and urinary calcium is elevated. What is the most appropriate next step?',
    choices: ['Parathyroidectomy', 'Bisphosphonates', 'Vitamin D supplementation', 'Observation'],
    correctAnswer: 'Parathyroidectomy',
    explanation: 'Elevated calcium, PTH, and urinary calcium with osteoporosis indicate primary hyperparathyroidism, often from an adenoma. Parathyroidectomy is the definitive treatment for symptomatic disease (e.g., osteoporosis). Bisphosphonates manage bone loss but not the cause. Vitamin D supplementation risks worsening hypercalcemia. Observation is for asymptomatic cases.'
  }
];

export default endocrinologyQuestions;
