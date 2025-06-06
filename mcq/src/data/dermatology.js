
const dermatologyQuestions = [
  {
    id: 2,
    question: 'A 45-year-old male presents with a non-blanching, palpable purpura on his lower extremities, along with arthralgias and abdominal pain. What is the most likely diagnosis?',
    choices: ['Henoch-Schönlein purpura', 'Leukocytoclastic vasculitis', 'Rocky Mountain spotted fever', 'Meningococcemia'],
    correctAnswer: 'Henoch-Schönlein purpura',
    explanation: 'Henoch-Schönlein purpura (HSP) is a small-vessel vasculitis characterized by palpable purpura, arthralgias, abdominal pain, and renal involvement. Leukocytoclastic vasculitis can present similarly but lacks the systemic features of HSP. Rocky Mountain spotted fever and meningococcemia are infections with different clinical presentations.',
  },
  {
    id: 3,
    question: 'A 60-year-old female presents with a rapidly expanding, erythematous, and tender plaque on her leg with fever and chills. What is the most likely diagnosis?',
    choices: ['Erysipelas', 'Necrotizing fasciitis', 'Cellulitis', 'Deep vein thrombosis'],
    correctAnswer: 'Erysipelas',
    explanation: 'Erysipelas is a superficial bacterial skin infection characterized by well-demarcated, erythematous, and tender plaques, often accompanied by systemic symptoms like fever. Necrotizing fasciitis is deeper and more severe, with necrosis and systemic toxicity. Cellulitis is less demarcated, and DVT presents with swelling and pain but no fever.',
  },
  {
    id: 4,
    question: 'A 30-year-old female presents with a butterfly-shaped rash on her face, photosensitivity, and joint pain. What is the most likely diagnosis?',
    choices: ['Systemic lupus erythematosus', 'Rosacea', 'Seborrheic dermatitis', 'Dermatomyositis'],
    correctAnswer: 'Systemic lupus erythematosus',
    explanation: 'The butterfly rash, photosensitivity, and joint pain are classic features of systemic lupus erythematosus (SLE). Rosacea and seborrheic dermatitis do not present with systemic symptoms. Dermatomyositis can present with a rash but is associated with muscle weakness.',
  },
  {
    id: 5,
    question: 'A 50-year-old male presents with a scaly, erythematous plaque on his scalp with alopecia. What is the most likely diagnosis?',
    choices: ['Tinea capitis', 'Psoriasis', 'Discoid lupus erythematosus', 'Seborrheic dermatitis'],
    correctAnswer: 'Discoid lupus erythematosus',
    explanation: 'Discoid lupus erythematosus (DLE) presents with scaly, erythematous plaques and scarring alopecia. Tinea capitis is fungal and often seen in children. Psoriasis and seborrheic dermatitis do not typically cause scarring alopecia.',
  },
  {
    id: 6,
    question: 'A 25-year-old male presents with a pruritic, erythematous, and vesicular rash on his hands after wearing latex gloves. What is the most likely diagnosis?',
    choices: ['Allergic contact dermatitis', 'Irritant contact dermatitis', 'Dyshidrotic eczema', 'Scabies'],
    correctAnswer: 'Allergic contact dermatitis',
    explanation: 'Allergic contact dermatitis is a type IV hypersensitivity reaction, often caused by allergens like latex. Irritant contact dermatitis is non-immunologic. Dyshidrotic eczema presents with vesicles on the palms and soles. Scabies causes burrows and intense itching, especially at night.',
  },
  {
    id: 7,
    question: 'A 40-year-old female presents with a solitary, firm, flesh-colored nodule on her face with telangiectasias. What is the most likely diagnosis?',
    choices: ['Basal cell carcinoma', 'Squamous cell carcinoma', 'Melanoma', 'Sebaceous hyperplasia'],
    correctAnswer: 'Basal cell carcinoma',
    explanation: 'Basal cell carcinoma (BCC) often presents as a pearly, flesh-colored nodule with telangiectasias. Squamous cell carcinoma is more scaly and keratotic. Melanoma is pigmented, and sebaceous hyperplasia presents as yellowish papules.',
  },
  {
    id: 8,
    question: 'A 55-year-old male presents with a hyperpigmented, velvety plaque on his neck. What is the most likely diagnosis?',
    choices: ['Acanthosis nigricans', 'Tinea versicolor', 'Addison’s disease', 'Psoriasis'],
    correctAnswer: 'Acanthosis nigricans',
    explanation: 'Acanthosis nigricans presents as hyperpigmented, velvety plaques in body folds and is often associated with insulin resistance. Tinea versicolor is caused by Malassezia and presents as hypopigmented or hyperpigmented macules. Addison’s disease causes generalized hyperpigmentation, and psoriasis presents as scaly plaques.',
  },
  {
    id: 9,
    question: 'A 70-year-old male presents with a painful, unilateral vesicular rash in a dermatomal distribution. What is the most likely diagnosis?',
    choices: ['Herpes zoster', 'Herpes simplex', 'Impetigo', 'Dermatitis herpetiformis'],
    correctAnswer: 'Herpes zoster',
    explanation: 'Herpes zoster (shingles) presents as a painful, unilateral vesicular rash in a dermatomal distribution. Herpes simplex is typically bilateral and recurrent. Impetigo is a bacterial infection with honey-colored crusts. Dermatitis herpetiformis is associated with celiac disease and presents with grouped vesicles on extensor surfaces.',
  },
  {
    id: 10,
    question: 'A 20-year-old female presents with a pruritic, erythematous rash in the groin area with satellite lesions. What is the most likely diagnosis?',
    choices: ['Candidiasis', 'Tinea cruris', 'Intertrigo', 'Psoriasis'],
    correctAnswer: 'Candidiasis',
    explanation: 'Candidiasis presents with erythematous, pruritic rashes in intertriginous areas, often with satellite lesions. Tinea cruris is caused by dermatophytes and has a scaly border. Intertrigo is caused by friction and moisture, and psoriasis presents as well-demarcated plaques.',
  },
  {
    id: 11,
    question: 'A 65-year-old male presents with a rapidly growing, ulcerated nodule on his ear with a rolled border. What is the most likely diagnosis?',
    choices: ['Squamous cell carcinoma', 'Basal cell carcinoma', 'Keratoacanthoma', 'Melanoma'],
    correctAnswer: 'Squamous cell carcinoma',
    explanation: 'Squamous cell carcinoma (SCC) often presents as a rapidly growing, ulcerated nodule with a rolled border, especially in sun-exposed areas. Basal cell carcinoma is less aggressive. Keratoacanthoma is a variant of SCC but is self-limiting. Melanoma is pigmented and asymmetric.',
  },
  {
    id: 12,
    question: 'A 30-year-old female presents with a pruritic, erythematous rash on her elbows and knees. What is the most likely diagnosis?',
    choices: ['Atopic dermatitis', 'Psoriasis', 'Lichen planus', 'Contact dermatitis'],
    correctAnswer: 'Psoriasis',
    explanation: 'Psoriasis commonly presents with well-demarcated, erythematous plaques on extensor surfaces like elbows and knees. Atopic dermatitis is more common in flexural areas. Lichen planus presents with violaceous papules, and contact dermatitis is localized to the site of allergen exposure.',
  },
  {
    id: 13,
    question: 'A 50-year-old male presents with a pruritic, erythematous rash in the axillae and groin. What is the most likely diagnosis?',
    choices: ['Inverse psoriasis', 'Tinea cruris', 'Candidiasis', 'Seborrheic dermatitis'],
    correctAnswer: 'Inverse psoriasis',
    explanation: 'Inverse psoriasis presents with erythematous plaques in intertriginous areas like the axillae and groin. Tinea cruris and candidiasis are fungal infections, and seborrheic dermatitis affects sebaceous areas like the scalp and face.',
  },
  {
    id: 14,
    question: 'A 40-year-old female presents with a pruritic, erythematous rash on her wrists and ankles with linear burrows. What is the most likely diagnosis?',
    choices: ['Scabies', 'Lichen planus', 'Atopic dermatitis', 'Contact dermatitis'],
    correctAnswer: 'Scabies',
    explanation: 'Scabies presents with pruritic, erythematous rashes and linear burrows, especially in interdigital spaces, wrists, and ankles. Lichen planus has violaceous papules, atopic dermatitis is flexural, and contact dermatitis is localized to allergen exposure.',
  },
  {
    id: 15,
    question: 'A 25-year-old male presents with a pruritic, erythematous rash on his palms and soles with vesicles. What is the most likely diagnosis?',
    choices: ['Dyshidrotic eczema', 'Tinea manuum', 'Psoriasis', 'Contact dermatitis'],
    correctAnswer: 'Dyshidrotic eczema',
    explanation: 'Dyshidrotic eczema presents with pruritic vesicles on the palms and soles. Tinea manuum is a fungal infection with scaling. Psoriasis presents as plaques, and contact dermatitis is localized to allergen exposure.',
  },
  {
    id: 16,
    question: 'A 60-year-old male presents with a pruritic, erythematous rash on his lower legs with hyperpigmentation. What is the most likely diagnosis?',
    choices: ['Stasis dermatitis', 'Cellulitis', 'Venous ulcers', 'Erysipelas'],
    correctAnswer: 'Stasis dermatitis',
    explanation: 'Stasis dermatitis presents with erythema, scaling, and hyperpigmentation on the lower legs due to chronic venous insufficiency. Cellulitis and erysipelas are infections with systemic symptoms. Venous ulcers are open wounds.',
  },
  {
    id: 17,
    question: 'A 35-year-old female presents with a pruritic, erythematous rash on her neck and upper chest after sun exposure. What is the most likely diagnosis?',
    choices: ['Polymorphous light eruption', 'Lupus erythematosus', 'Photosensitive drug reaction', 'Solar urticaria'],
    correctAnswer: 'Polymorphous light eruption',
    explanation: 'Polymorphous light eruption (PMLE) is a common photosensitivity disorder presenting with pruritic, erythematous rashes after sun exposure. Lupus erythematosus has systemic symptoms, photosensitive drug reactions are linked to medications, and solar urticaria presents with hives.',
  },
  {
    id: 18,
    question: 'A 50-year-old male presents with a pruritic, erythematous rash on his scalp with greasy scales. What is the most likely diagnosis?',
    choices: ['Seborrheic dermatitis', 'Psoriasis', 'Tinea capitis', 'Atopic dermatitis'],
    correctAnswer: 'Seborrheic dermatitis',
    explanation: 'Seborrheic dermatitis presents with erythema and greasy scales on the scalp, face, and chest. Psoriasis has silvery scales, tinea capitis is fungal, and atopic dermatitis is flexural.',
  },
  {
    id: 19,
    question: 'A 40-year-old female presents with a pruritic, erythematous rash on her trunk with annular lesions. What is the most likely diagnosis?',
    choices: ['Tinea corporis', 'Pityriasis rosea', 'Granuloma annulare', 'Erythema multiforme'],
    correctAnswer: 'Tinea corporis',
    explanation: 'Tinea corporis presents with annular, scaly, erythematous plaques caused by dermatophytes. Pityriasis rosea has a herald patch, granuloma annulare is non-scaly, and erythema multiforme has target lesions.',
  },
  {
    id: 20,
    question: 'A 30-year-old male presents with a pruritic, erythematous rash on his trunk with a herald patch. What is the most likely diagnosis?',
    choices: ['Pityriasis rosea', 'Tinea versicolor', 'Psoriasis', 'Lichen planus'],
    correctAnswer: 'Pityriasis rosea',
    explanation: 'Pityriasis rosea presents with a herald patch followed by a Christmas tree-like distribution of erythematous papules. Tinea versicolor is caused by Malassezia, psoriasis has plaques, and lichen planus has violaceous papules.',
  },
  {
    id: 21,
    question: 'A 45-year-old female presents with a pruritic, erythematous rash on her trunk with target lesions. What is the most likely diagnosis?',
    choices: ['Erythema multiforme', 'Pityriasis rosea', 'Tinea corporis', 'Lichen planus'],
    correctAnswer: 'Erythema multiforme',
    explanation: 'Erythema multiforme presents with target lesions, often triggered by infections or medications. Pityriasis rosea has a herald patch, tinea corporis is annular, and lichen planus has violaceous papules.',
  },
  {
    id: 22,
    question: 'A 50-year-old male presents with a pruritic, erythematous rash on his trunk with grouped vesicles. What is the most likely diagnosis?',
    choices: ['Dermatitis herpetiformis', 'Herpes zoster', 'Scabies', 'Contact dermatitis'],
    correctAnswer: 'Dermatitis herpetiformis',
    explanation: 'Dermatitis herpetiformis presents with pruritic, grouped vesicles on extensor surfaces and is associated with celiac disease. Herpes zoster is unilateral, scabies has burrows, and contact dermatitis is localized.',
  },
  {
    id: 23,
    question: 'A 35-year-old female presents with a pruritic, erythematous rash on her trunk with excoriations. What is the most likely diagnosis?',
    choices: ['Scabies', 'Atopic dermatitis', 'Psoriasis', 'Lichen planus'],
    correctAnswer: 'Scabies',
    explanation: 'Scabies presents with pruritic rashes and excoriations, especially in interdigital spaces and flexural areas. Atopic dermatitis is flexural, psoriasis has plaques, and lichen planus has violaceous papules.',
  },
  {
    id: 24,
    question: 'A 40-year-old male presents with a pruritic, erythematous rash on his trunk with lichenification. What is the most likely diagnosis?',
    choices: ['Lichen simplex chronicus', 'Psoriasis', 'Atopic dermatitis', 'Contact dermatitis'],
    correctAnswer: 'Lichen simplex chronicus',
    explanation: 'Lichen simplex chronicus presents with lichenified, pruritic plaques due to chronic scratching. Psoriasis has silvery scales, atopic dermatitis is flexural, and contact dermatitis is localized.',
  },
  {
    id: 25,
    question: 'A 50-year-old female presents with a pruritic, erythematous rash on her trunk with excoriations and nodules. What is the most likely diagnosis?',
    choices: ['Prurigo nodularis', 'Lichen planus', 'Psoriasis', 'Atopic dermatitis'],
    correctAnswer: 'Prurigo nodularis',
    explanation: 'Prurigo nodularis presents with pruritic, excoriated nodules due to chronic scratching. Lichen planus has violaceous papules, psoriasis has plaques, and atopic dermatitis is flexural.',
  },
  {
    id: 26,
    question: 'A 60-year-old male presents with a pruritic, erythematous rash on his trunk with hyperpigmentation. What is the most likely diagnosis?',
    choices: ['Lichen planus', 'Psoriasis', 'Atopic dermatitis', 'Contact dermatitis'],
    correctAnswer: 'Lichen planus',
    explanation: 'Lichen planus presents with pruritic, violaceous papules that can lead to hyperpigmentation. Psoriasis has plaques, atopic dermatitis is flexural, and contact dermatitis is localized.',
  },
  {
    id: 27,
    question: 'A 35-year-old female presents with a pruritic, erythematous rash on her trunk with hypopigmentation. What is the most likely diagnosis?',
    choices: ['Tinea versicolor', 'Vitiligo', 'Pityriasis alba', 'Post-inflammatory hypopigmentation'],
    correctAnswer: 'Tinea versicolor',
    explanation: 'Tinea versicolor presents with hypopigmented or hyperpigmented macules caused by Malassezia. Vitiligo is depigmented, pityriasis alba is common in children, and post-inflammatory hypopigmentation follows inflammation.',
  },
  {
    id: 28,
    question: 'A 40-year-old male presents with a pruritic, erythematous rash on his trunk with depigmentation. What is the most likely diagnosis?',
    choices: ['Vitiligo', 'Tinea versicolor', 'Pityriasis alba', 'Post-inflammatory hypopigmentation'],
    correctAnswer: 'Vitiligo',
    explanation: 'Vitiligo presents with depigmented macules due to melanocyte destruction. Tinea versicolor is caused by Malassezia, pityriasis alba is common in children, and post-inflammatory hypopigmentation follows inflammation.',
  },
  {
    id: 29,
    question: 'A 50-year-old female presents with a pruritic, erythematous rash on her trunk with scaling. What is the most likely diagnosis?',
    choices: ['Psoriasis', 'Tinea corporis', 'Pityriasis rosea', 'Lichen planus'],
    correctAnswer: 'Psoriasis',
    explanation: 'Psoriasis presents with well-demarcated, erythematous plaques with silvery scales. Tinea corporis is annular, pityriasis rosea has a herald patch, and lichen planus has violaceous papules.',
  },
  {
    id: 30,
    question: 'A 45-year-old male presents with well-demarcated, erythematous plaques with overlying silvery scales on his scalp and extensor surfaces. He also has onycholysis and nail pitting. What is the most likely diagnosis?',
    choices: ['Psoriasis', 'Seborrheic dermatitis', 'Tinea capitis', 'Lichen planus'],
    correctAnswer: 'Psoriasis',
    explanation: 'Psoriasis commonly affects extensor surfaces and the scalp, presenting as erythematous plaques with silvery scales. Nail changes such as pitting and onycholysis are characteristic. Seborrheic dermatitis involves greasy scales, tinea capitis causes alopecia, and lichen planus features violaceous papules.',
  },
  {
    id: 31,
    question: 'A 30-year-old female presents with multiple oval, salmon-colored plaques with collarette scaling along skin cleavage lines. She recalls having a single, larger lesion on her back two weeks ago. What is the most likely diagnosis?',
    choices: ['Pityriasis rosea', 'Tinea corporis', 'Guttate psoriasis', 'Secondary syphilis'],
    correctAnswer: 'Pityriasis rosea',
    explanation: 'Pityriasis rosea starts with a "herald patch," followed by a generalized rash with collarette scaling along cleavage lines. Tinea corporis is annular, guttate psoriasis has drop-like lesions, and secondary syphilis presents with a diffuse rash including palms and soles.',
  },
  {
    id: 32,
    question: 'A 60-year-old male presents with tense bullae on erythematous skin, primarily on his trunk and extremities. Direct immunofluorescence shows linear IgG and C3 deposition along the basement membrane. What is the most likely diagnosis?',
    choices: ['Bullous pemphigoid', 'Pemphigus vulgaris', 'Dermatitis herpetiformis', 'Erythema multiforme'],
    correctAnswer: 'Bullous pemphigoid',
    explanation: 'Bullous pemphigoid presents with tense bullae due to IgG autoantibodies against hemidesmosomes. Pemphigus vulgaris has flaccid bullae with positive Nikolsky sign, dermatitis herpetiformis is associated with celiac disease, and erythema multiforme has target lesions.',
  },
  {
    id: 33,
    question: 'A 35-year-old female presents with recurrent painful oral ulcers, genital ulcers, and uveitis. Pathergy test is positive. What is the most likely diagnosis?',
    choices: ['Behçet’s disease', 'Pemphigus vulgaris', 'Herpes simplex virus infection', 'Systemic lupus erythematosus'],
    correctAnswer: 'Behçet’s disease',
    explanation: 'Behçet’s disease is an autoimmune vasculitis characterized by recurrent oral and genital ulcers, uveitis, and a positive pathergy test. Pemphigus vulgaris has oral erosions but lacks genital ulcers, HSV causes vesicular lesions, and SLE features systemic involvement.',
  },
  {
    id: 34,
    question: 'A 28-year-old male presents with purple, polygonal, pruritic papules on his wrists and oral white reticulations (Wickham striae). What is the most likely diagnosis?',
    choices: ['Lichen planus', 'Psoriasis', 'Secondary syphilis', 'Erythema multiforme'],
    correctAnswer: 'Lichen planus',
    explanation: 'Lichen planus presents with the "6 Ps" (pruritic, purple, polygonal, planar, papules, and plaques) and Wickham striae. Psoriasis has silvery scales, secondary syphilis has a diffuse rash including palms and soles, and erythema multiforme features target lesions.',
  },
  {
    id: 35,
    question: 'A 40-year-old male presents with a chronic, erythematous facial rash with telangiectasias and papules. He reports frequent flushing triggered by spicy foods and alcohol. What is the most likely diagnosis?',
    choices: ['Rosacea', 'Acne vulgaris', 'Seborrheic dermatitis', 'Systemic lupus erythematosus'],
    correctAnswer: 'Rosacea',
    explanation: 'Rosacea presents with facial erythema, flushing, telangiectasias, and papules, often triggered by heat, alcohol, or spicy foods. Acne vulgaris has comedones, seborrheic dermatitis involves greasy scales, and SLE has a malar rash but lacks papules and pustules.',
  },
  {
    id: 36,
    question: 'A 22-year-old female presents with painful nodules on her shins. She recently had a streptococcal throat infection. What is the most likely diagnosis?',
    choices: ['Erythema nodosum', 'Pyoderma gangrenosum', 'Cellulitis', 'Cutaneous lupus erythematosus'],
    correctAnswer: 'Erythema nodosum',
    explanation: 'Erythema nodosum presents with painful, erythematous nodules on the shins, often triggered by infections, medications, or inflammatory diseases. Pyoderma gangrenosum has ulcers with a violaceous border, cellulitis is an acute bacterial infection, and cutaneous lupus has discoid lesions.',
  },
  {
    id: 37,
    question: 'A 55-year-old male with a history of chronic sun exposure presents with a non-healing, ulcerated lesion on his lower lip. What is the most likely diagnosis?',
    choices: ['Squamous cell carcinoma', 'Basal cell carcinoma', 'Actinic keratosis', 'Melanoma'],
    correctAnswer: 'Squamous cell carcinoma',
    explanation: 'Squamous cell carcinoma commonly affects sun-exposed areas, including the lower lip, and presents as a non-healing ulcerated lesion. Basal cell carcinoma has pearly nodules with telangiectasias, actinic keratosis is a precursor lesion, and melanoma has asymmetric pigmentation.',
  },
  {
    id: 38,
    question: 'A 65-year-old female presents with intensely pruritic, grouped vesicles on her elbows and knees. She has a history of celiac disease. What is the most likely diagnosis?',
    choices: ['Dermatitis herpetiformis', 'Eczema', 'Bullous pemphigoid', 'Tinea corporis'],
    correctAnswer: 'Dermatitis herpetiformis',
    explanation: 'Dermatitis herpetiformis is an autoimmune blistering disorder associated with celiac disease, characterized by intensely pruritic, grouped vesicles. Eczema presents with eczematous plaques, bullous pemphigoid has tense bullae, and tinea corporis is annular with central clearing.',
  },
  {
    id: 39,
    question: 'A 50-year-old male presents with a rapidly growing, dome-shaped, keratin-filled nodule on his face. The lesion appeared suddenly and has a central crater. What is the most likely diagnosis?',
    choices: ['Keratoacanthoma', 'Squamous cell carcinoma', 'Basal cell carcinoma', 'Seborrheic keratosis'],
    correctAnswer: 'Keratoacanthoma',
    explanation: 'Keratoacanthoma is a rapidly growing, dome-shaped nodule with central keratin-filled crater that may spontaneously regress. SCC can appear similar but grows more indolently. BCC has pearly nodules, and seborrheic keratosis has a "stuck-on" appearance.',
  },

  {
    id: 40,
    question: 'A 70-year-old female presents with a solitary, slowly enlarging, darkly pigmented lesion on her back. It has irregular borders and multiple shades of brown and black. What is the most likely diagnosis?',
    choices: ['Melanoma', 'Seborrheic keratosis', 'Basal cell carcinoma', 'Actinic keratosis'],
    correctAnswer: 'Melanoma',
    explanation: 'Melanoma is characterized by irregular borders, multiple colors, and rapid growth. Seborrheic keratosis has a "stuck-on" appearance, BCC has a pearly, nodular appearance with telangiectasias, and actinic keratosis is usually a rough, scaly lesion on sun-exposed areas.',
  },
  {
    id: 41,
    question: 'A 55-year-old male with a history of chronic alcohol use presents with erythematous, scaly plaques on his face and scalp. What is the most likely diagnosis?',
    choices: ['Seborrheic dermatitis', 'Rosacea', 'Psoriasis', 'Tinea capitis'],
    correctAnswer: 'Seborrheic dermatitis',
    explanation: 'Seborrheic dermatitis is characterized by erythematous, greasy, scaly plaques, typically affecting the face, scalp, and body folds. Rosacea involves flushing and telangiectasias, psoriasis has silvery scales, and tinea capitis presents with scalp ringworm and hair loss.',
  },
  {
    id: 42,
    question: 'A 25-year-old female presents with pruritic, raised, erythematous papules with a shiny surface, often appearing on the extensor surfaces. She reports a family history of atopic dermatitis. What is the most likely diagnosis?',
    choices: ['Atopic dermatitis', 'Contact dermatitis', 'Psoriasis', 'Lichen planus'],
    correctAnswer: 'Atopic dermatitis',
    explanation: 'Atopic dermatitis is characterized by pruritic, erythematous papules with a shiny surface, commonly affecting flexural areas. Psoriasis affects extensor surfaces with silvery scales, contact dermatitis results from exposure to allergens, and lichen planus presents with purple, flat papules.',
  },
  {
    id: 43,
    question: 'A 45-year-old male presents with multiple dark brown, velvety, thickened plaques on his neck and axillae. His fasting blood glucose is elevated. What is the most likely diagnosis?',
    choices: ['Acanthosis nigricans', 'Neurofibromatosis', 'Tinea versicolor', 'Nodular melanoma'],
    correctAnswer: 'Acanthosis nigricans',
    explanation: 'Acanthosis nigricans presents with thickened, hyperpigmented, velvety plaques in body folds and is commonly associated with insulin resistance. Neurofibromatosis has café-au-lait spots and neurofibromas, tinea versicolor presents with hypopigmented lesions, and nodular melanoma presents as a raised, irregular dark lesion.',
  },
  {
    id: 44,
    question: 'A 38-year-old female presents with a red, butterfly-shaped rash across her cheeks and nose. She also has joint pain, fatigue, and photosensitivity. What is the most likely diagnosis?',
    choices: ['Systemic lupus erythematosus', 'Rosacea', 'Dermatomyositis', 'Erythema multiforme'],
    correctAnswer: 'Systemic lupus erythematosus',
    explanation: 'The butterfly-shaped rash over the cheeks and nose is characteristic of systemic lupus erythematosus (SLE). Rosacea involves erythema and papules but lacks a butterfly-shaped rash, dermatomyositis has a heliotrope rash with muscle weakness, and erythema multiforme presents with target lesions.',
  },
  {
    id: 45,
    question: 'A 50-year-old male presents with a persistent, itchy rash on his hands and feet with clear, fluid-filled blisters. He has a history of using topical steroids. What is the most likely diagnosis?',
    choices: ['Dyshidrotic eczema', 'Contact dermatitis', 'Pemphigus vulgaris', 'Herpes simplex virus infection'],
    correctAnswer: 'Dyshidrotic eczema',
    explanation: 'Dyshidrotic eczema presents as intensely pruritic, clear, fluid-filled blisters on the palms and soles. Contact dermatitis results from an allergen or irritant, pemphigus vulgaris has flaccid blisters, and HSV causes grouped vesicles.',
  },
  {
    id: 46,
    question: 'A 60-year-old male presents with a growing, ulcerated, and crusted lesion on his lower lip. He has a history of significant sun exposure. What is the most likely diagnosis?',
    choices: ['Squamous cell carcinoma', 'Basal cell carcinoma', 'Actinic keratosis', 'Melanoma'],
    correctAnswer: 'Squamous cell carcinoma',
    explanation: 'Squamous cell carcinoma (SCC) often presents as an ulcerated, crusted lesion, particularly in sun-exposed areas like the lips. BCC typically presents as a pearly nodule, actinic keratosis is a precursor lesion, and melanoma has irregular pigmentation.',
  },
  {
    id: 47,
    question: 'A 27-year-old female presents with multiple discrete, round, scaly patches of hair loss on her scalp. There is no inflammation or scarring. What is the most likely diagnosis?',
    choices: ['Alopecia areata', 'Tinea capitis', 'Psoriasis', 'Trichotillomania'],
    correctAnswer: 'Alopecia areata',
    explanation: 'Alopecia areata presents with well-defined, non-scarring hair loss, often in round patches. Tinea capitis involves fungal infection and may cause inflammation or scaling, psoriasis affects scalp with silvery scales, and trichotillomania causes patchy hair loss due to pulling.',
  },
  {
    id: 48,
    question: 'A 42-year-old male with a history of smoking presents with a painless, non-healing ulcer with raised borders on his tongue. What is the most likely diagnosis?',
    choices: ['Squamous cell carcinoma', 'Aphthous stomatitis', 'Herpes simplex virus infection', 'Lichen planus'],
    correctAnswer: 'Squamous cell carcinoma',
    explanation: 'Squamous cell carcinoma of the oral cavity often presents as a non-healing ulcer with raised borders, especially in smokers. Aphthous stomatitis is painful, HSV typically causes grouped vesicles, and lichen planus presents with white, reticulated lesions in the mouth.',
  },
  {
    id: 49,
    question: 'A 33-year-old female presents with a history of chronic, intensely pruritic, erythematous patches with silvery scales on her scalp, elbows, and knees. She also reports a family history of similar symptoms. What is the most likely diagnosis?',
    choices: ['Psoriasis', 'Eczema', 'Seborrheic dermatitis', 'Atopic dermatitis'],
    correctAnswer: 'Psoriasis',
    explanation: 'Psoriasis is characterized by erythematous plaques with silvery scales, commonly affecting the scalp, elbows, and knees. Eczema and atopic dermatitis are pruritic but typically affect flexural areas, and seborrheic dermatitis presents with greasy scales.',
  },
  {
    id: 50,
    question: 'A 25-year-old male presents with large, annular plaques with central clearing and a raised border on his trunk. What is the most likely diagnosis?',
    choices: ['Tinea corporis', 'Psoriasis', 'Pityriasis rosea', 'Lichen planus'],
    correctAnswer: 'Tinea corporis',
    explanation: 'Tinea corporis, or ringworm, presents as annular lesions with a raised border and central clearing. Psoriasis has well-defined plaques with silvery scales, pityriasis rosea typically begins with a herald patch, and lichen planus features violaceous papules.',
  },
  {
    id: 51,
    question: 'A 40-year-old male presents with multiple dark, irregularly shaped spots on his back. The largest one has a diameter greater than 6 mm and an uneven border. What is the most likely diagnosis?',
    choices: ['Melanoma', 'Seborrheic keratosis', 'Basal cell carcinoma', 'Actinic keratosis'],
    correctAnswer: 'Melanoma',
    explanation: 'Melanoma is characterized by an asymmetrical shape, irregular borders, varying color, and a diameter greater than 6 mm. Seborrheic keratosis is a benign lesion with a "stuck-on" appearance, BCC is usually pearly with telangiectasias, and actinic keratosis is a precursor to SCC.',
  },
  {
    id: 52,
    question: 'A 60-year-old female presents with a slow-growing, pearly nodule with central ulceration and telangiectasias on her cheek. What is the most likely diagnosis?',
    choices: ['Basal cell carcinoma', 'Squamous cell carcinoma', 'Melanoma', 'Seborrheic keratosis'],
    correctAnswer: 'Basal cell carcinoma',
    explanation: 'Basal cell carcinoma (BCC) is the most common skin cancer, presenting as a pearly, slow-growing nodule with central ulceration and telangiectasias. Squamous cell carcinoma has an ulcerated, crusted appearance, melanoma has irregular pigmentation, and seborrheic keratosis is benign.',
  },
  {
    id: 53,
    question: 'A 36-year-old male presents with small, hyperpigmented macules with an irregular shape, scattered across his face and upper chest. What is the most likely diagnosis?',
    choices: ['Lentigo simplex', 'Melasma', 'Neurofibromatosis type 1', 'Peutz-Jeghers syndrome'],
    correctAnswer: 'Lentigo simplex',
    explanation: 'Lentigo simplex presents as well-demarcated, hyperpigmented macules, typically on sun-exposed areas. Melasma is symmetrical and hormonally induced, neurofibromatosis type 1 has café-au-lait spots with neurofibromas, and Peutz-Jeghers syndrome has pigmented spots around the mouth.',
  },
  {
    id: 54,
    question: 'A 28-year-old female presents with thickened skin, hyperpigmentation, and velvety plaques in her axillae and neck. Her fasting glucose is elevated. What is the most likely diagnosis?',
    choices: ['Acanthosis nigricans', 'Acrochordons', 'Morphea', 'Tinea versicolor'],
    correctAnswer: 'Acanthosis nigricans',
    explanation: 'Acanthosis nigricans is associated with insulin resistance and presents as thickened, hyperpigmented, velvety plaques in body folds. Acrochordons are skin tags, morphea is localized scleroderma, and tinea versicolor presents with hypopigmented patches.',
  },
  {
    id: 55,
    question: 'A 65-year-old female with a history of sun exposure presents with a raised, pearly nodule with central ulceration and telangiectasias on her nose. What is the most likely diagnosis?',
    choices: ['Basal cell carcinoma', 'Squamous cell carcinoma', 'Melanoma', 'Seborrheic keratosis'],
    correctAnswer: 'Basal cell carcinoma',
    explanation: 'Basal cell carcinoma (BCC) is characterized by a pearly, slow-growing nodule with central ulceration and telangiectasias, often occurring on sun-exposed areas like the nose. Squamous cell carcinoma appears as an ulcerated lesion, melanoma has irregular pigmentation, and seborrheic keratosis has a "stuck-on" appearance.',
  },
  {
    id: 56,
    question: 'A 55-year-old male presents with an inflamed, tender nodule on his scalp that has been growing over the past several months. The lesion is soft and fluctuant on palpation. What is the most likely diagnosis?',
    choices: ['Epidermoid cyst', 'Sebaceous cyst', 'Abscess', 'Basal cell carcinoma'],
    correctAnswer: 'Abscess',
    explanation: 'Abscesses present as tender, fluctuating, erythematous nodules due to infection. Epidermoid and sebaceous cysts are typically non-tender and firm, while BCC is a slow-growing, non-tender nodule with a pearly appearance.',
  },
  {
    id: 57,
    question: 'A 45-year-old female presents with a history of recurrent episodes of painful, vesicular lesions around her mouth. The lesions recur when she is stressed or ill. What is the most likely diagnosis?',
    choices: ['Herpes simplex virus infection', 'Shingles', 'Aphthous stomatitis', 'Chickenpox'],
    correctAnswer: 'Herpes simplex virus infection',
    explanation: 'Herpes simplex virus (HSV) presents as recurrent, painful vesicular lesions, often triggered by stress or illness. Shingles occurs in a dermatomal pattern, aphthous stomatitis presents with painful, non-vesicular ulcers, and chickenpox presents with a generalized vesicular rash.',
  },
  {
    id: 58,
    question: 'A 30-year-old female presents with a sudden-onset, intensely pruritic, erythematous rash with papules and pustules on her arms and legs. She has a recent history of taking antibiotics. What is the most likely diagnosis?',
    choices: ['Drug eruption', 'Psoriasis', 'Atopic dermatitis', 'Contact dermatitis'],
    correctAnswer: 'Drug eruption',
    explanation: 'Drug eruptions can present as a sudden, pruritic rash following the initiation of a medication, commonly antibiotics. Psoriasis presents with silvery scales, atopic dermatitis is chronic and often in flexural areas, and contact dermatitis is localized to the site of contact.',
  },
  {
    id: 59,
    question: 'A 20-year-old male presents with well-demarcated, erythematous plaques with silvery scales, predominantly affecting his elbows, knees, and scalp. He also has mild nail pitting. What is the most likely diagnosis?',
    choices: ['Psoriasis', 'Tinea corporis', 'Atopic dermatitis', 'Seborrheic dermatitis'],
    correctAnswer: 'Psoriasis',
    explanation: 'Psoriasis is characterized by erythematous plaques with silvery scales, commonly affecting extensor surfaces such as elbows, knees, and scalp. Nail pitting is a classic feature. Tinea corporis is annular, atopic dermatitis affects flexural surfaces, and seborrheic dermatitis causes greasy scaling.',
  },
  {
    id: 60,
    question: 'A 50-year-old male presents with a rapidly growing, painless nodule on his neck. The lesion is firm, smooth, and mobile, but it has a central ulceration. What is the most likely diagnosis?',
    choices: ['Squamous cell carcinoma', 'Basal cell carcinoma', 'Lipoma', 'Metastatic node'],
    correctAnswer: 'Metastatic node',
    explanation: 'A metastatic node typically presents as a firm, non-tender, rapidly growing mass with central ulceration, particularly in patients with a history of cancer. SCC and BCC are typically located in sun-exposed areas, lipomas are benign and soft, and metastatic nodes often indicate underlying malignancy.',
  }
];

export default dermatologyQuestions;
