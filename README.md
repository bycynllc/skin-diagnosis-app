# Skin Diagnosis App

Evidence-based skin intelligence platform with diagnostic engine, product recommendations, and education hub.

## Features

- **Interactive Diagnosis Flow** - Select skin concerns and receive personalized archetype analysis
- **Smart Pattern Recognition** - Rule-based engine maps symptoms to 7 distinct skin archetypes
- **Product Recommendations** - Curated product suggestions based on diagnosis results
- **Education Hub** - Evidence-based articles, guides, and quick tips
- **Email Capture** - Lead generation with personalized skin report offer

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── DiagnosisFlow.tsx    # Interactive symptom selector
│   ├── ResultCard.tsx       # Archetype result display
│   ├── Shop.tsx             # Product grid
│   ├── Education.tsx        # Articles and tips
│   └── EmailCapture.tsx     # Lead generation form
├── data/
│   └── archetypes.ts        # Diagnostic engine logic
├── App.tsx                  # Main layout and navigation
└── main.tsx                 # Entry point
```

## License

MIT
