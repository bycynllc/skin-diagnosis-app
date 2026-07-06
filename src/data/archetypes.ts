export interface ArchetypeResult {
  archetype: string;
  offer: string;
  description: string;
  affiliateSet: string[];
  tips: string[];
  severity?: 'mild' | 'moderate' | 'severe';
}

export const symptomOptions = [
  { id: 'barrier_damage', label: 'Compromised Barrier', description: 'Tightness, sensitivity, reactions to products' },
  { id: 'irritation', label: 'Irritation', description: 'Redness, stinging, inflammation' },
  { id: 'acne', label: 'Acne', description: 'Persistent breakouts, congestion' },
  { id: 'breakouts', label: 'Hormonal Breakouts', description: 'Cyclical flare-ups, deep cystic spots' },
  { id: 'pigmentation', label: 'Pigmentation', description: 'Uneven skin tone, dark patches' },
  { id: 'dark_spots', label: 'Dark Spots', description: 'Post-acne marks, sun damage' },
  { id: 'dryness', label: 'Dryness', description: 'Flaking, rough texture, dehydration' },
  { id: 'oiliness', label: 'Oiliness', description: 'Excess sebum, enlarged pores' },
  { id: 'aging', label: 'Aging Concerns', description: 'Fine lines, loss of firmness' },
  { id: 'dullness', label: 'Dullness', description: 'Lack of radiance, tired appearance' },
];

export function diagnoseSymptoms(symptoms: string[]): ArchetypeResult {
  // Barrier-Compromised Skin
  if (symptoms.includes('barrier_damage') || symptoms.includes('irritation')) {
    return {
      archetype: 'Barrier-Compromised Skin',
      offer: 'Busy Life Skin Reset Blueprint',
      description: 'Your skin barrier has been compromised, leading to sensitivity, reactivity, and discomfort. This pattern often develops from over-exfoliation, harsh products, or environmental stress.',
      affiliateSet: [
        'GlyMed Barrier Repair Cream',
        'Circadia Calm Repair Serum',
        'Ceramide-Rich Moisturizer',
        'Gentle Cleansing Milk',
      ],
      tips: [
        'Simplify your routine to 3-4 products max',
        'Avoid active ingredients for 2-4 weeks',
        'Use lukewarm water only',
        'Apply moisturizer on damp skin',
      ],
      severity: symptoms.length > 2 ? 'moderate' : 'mild',
    };
  }

  // Inflammatory Acne Loop
  if (symptoms.includes('acne') || symptoms.includes('breakouts')) {
    return {
      archetype: 'Inflammatory Acne Loop',
      offer: 'Acne System Reset Blueprint',
      description: 'Your skin is caught in an inflammatory cycle where breakouts trigger more breakouts. This pattern requires a strategic approach to break the loop without causing further irritation.',
      affiliateSet: [
        'Dermalogica Clear Start Kit',
        'Circadia Clarifying System',
        'Salicylic Acid Treatment',
        'Niacinamide Serum',
      ],
      tips: [
        'Never pick or pop active breakouts',
        'Cleanse morning and evening only',
        'Use non-comedogenic products only',
        'Change pillowcases every 2-3 days',
      ],
      severity: symptoms.length > 2 ? 'severe' : 'moderate',
    };
  }

  // Pigment Accumulation Pattern
  if (symptoms.includes('pigmentation') || symptoms.includes('dark_spots')) {
    return {
      archetype: 'Pigment Accumulation Pattern',
      offer: 'Tone Correction System Blueprint',
      description: 'Your skin is showing signs of melanin accumulation from past inflammation or sun exposure. This pattern requires patience and consistent brightening ingredients.',
      affiliateSet: [
        'Brightening Vitamin C Serum',
        'SPF 50 Clinical Sunscreen',
        'Alpha Arbutin Treatment',
        'Retinol Night Treatment',
      ],
      tips: [
        'SPF is non-negotiable every single day',
        'Treat existing spots while preventing new ones',
        'Be patient - pigmentation takes 8-12 weeks to fade',
        'Avoid direct sun during peak hours',
      ],
      severity: 'mild',
    };
  }

  // Dehydration Pattern
  if (symptoms.includes('dryness')) {
    return {
      archetype: 'Dehydrated Skin Pattern',
      offer: 'Hydration Restoration Blueprint',
      description: 'Your skin lacks water, not oil. This pattern shows up as tightness, fine lines, and dullness even if you have oily areas. Hydration is the foundation of healthy skin.',
      affiliateSet: [
        'Hyaluronic Acid Serum',
        'Barrier Repair Moisturizer',
        'Hydrating Toner',
        'Overnight Hydration Mask',
      ],
      tips: [
        'Apply hydrating products to damp skin',
        'Seal hydration with an occlusive layer',
        'Use a humidifier in dry environments',
        'Avoid hot water when cleansing',
      ],
      severity: 'mild',
    };
  }

  // Oil Control Pattern
  if (symptoms.includes('oiliness')) {
    return {
      archetype: 'Sebum Dysregulation Pattern',
      offer: 'Oil Balance Blueprint',
      description: 'Your skin is producing excess sebum, which can lead to congestion and enlarged pores. This pattern often responds to over-drying with even more oil production.',
      affiliateSet: [
        'Niacinamide 10% Serum',
        'Clay Detox Mask',
        'Lightweight Gel Moisturizer',
        'Oil-Control Toner',
      ],
      tips: [
        'Donnot skip moisturizer - use lightweight formulas',
        'Blotting papers > powder for midday oil',
        'Look for "non-comedogenic" labels',
        'Clay masks 1-2x weekly for deep cleansing',
      ],
      severity: 'mild',
    };
  }

  // Aging Concerns
  if (symptoms.includes('aging')) {
    return {
      archetype: 'Chronological Aging Pattern',
      offer: 'Age-Defiance Blueprint',
      description: 'Your skin is showing natural signs of aging including fine lines and loss of firmness. This pattern benefits from strategic actives that support collagen and cell turnover.',
      affiliateSet: [
        'Retinol Night Cream',
        'Peptide Serum',
        'Vitamin C Antioxidant',
        'SPF 50 Daily Protection',
      ],
      tips: [
        'Start retinol slowly - 1-2x weekly at first',
        'Vitamin C in the morning, retinol at night',
        'SPF is your best anti-aging investment',
        'Pat products in, don\'t rub',
      ],
      severity: 'mild',
    };
  }

  // Dullness Pattern
  if (symptoms.includes('dullness')) {
    return {
      archetype: 'Lackluster Skin Pattern',
      offer: 'Radiance Restoration Blueprint',
      description: 'Your skin has lost its natural glow due to slow cell turnover, dehydration, or accumulated dead skin cells. This pattern responds well to gentle exfoliation and brightening.',
      affiliateSet: [
        'Gentle Enzyme Exfoliant',
        'Vitamin C Brightening Serum',
        'Hydrating Toner',
        'Illuminating Moisturizer',
      ],
      tips: [
        'Exfoliate 2-3x weekly with gentle acids',
        'Cold water rinse for morning brightness',
        'Facial massage boosts circulation',
        'Sleep 7-9 hours for skin repair',
      ],
      severity: 'mild',
    };
  }

  // Default: Overactive Routine Syndrome
  return {
    archetype: 'Overactive Routine Syndrome',
    offer: 'Skin Simplification Blueprint',
    description: 'Your skin may be overwhelmed by too many products or conflicting ingredients. Simplification often leads to dramatic improvements.',
    affiliateSet: [
      'Gentle Cleanser',
      'Barrier Repair Moisturizer',
      'Mineral SPF',
    ],
    tips: [
      'Reset with just cleanser + moisturizer + SPF for 2 weeks',
      'Reintroduce actives one at a time',
      'Check product expiration dates',
      'Avoid mixing too many actives',
    ],
    severity: 'mild',
  };
}