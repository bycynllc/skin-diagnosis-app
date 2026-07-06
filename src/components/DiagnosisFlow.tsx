import { useState } from 'react';
import ResultCard from './ResultCard';
import { symptomOptions, diagnoseSymptoms, type ArchetypeResult } from '../data/archetypes';
import { Sparkles, ChevronRight } from 'lucide-react';

export default function DiagnosisFlow() {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<ArchetypeResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
    setResult(null);
  };

  const runDiagnosis = async () => {
    if (selected.length === 0) return;

    setIsAnalyzing(true);

    // Simulate analysis time for better UX
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const diagnosis = diagnoseSymptoms(selected);
    setResult(diagnosis);
    setIsAnalyzing(false);
  };

  const clearSelection = () => {
    setSelected([]);
    setResult(null);
  };

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full text-sm font-medium text-amber-800 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Free Skin Analysis</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-4">
            What is your skin struggling with?
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Select all the concerns that apply to your skin right now. Our diagnostic
            engine will identify your unique skin pattern and recommend a personalized approach.
          </p>
        </div>

        {/* Symptom Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {symptomOptions.map((symptom) => {
            const isSelected = selected.includes(symptom.id);
            return (
              <button
                key={symptom.id}
                onClick={() => toggleSymptom(symptom.id)}
                className={`group relative p-5 rounded-2xl text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-br from-stone-800 to-stone-900 text-white shadow-lg shadow-stone-300/50 scale-[1.02]'
                    : 'bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`font-medium mb-1 ${isSelected ? 'text-white' : 'text-neutral-900'}`}>
                      {symptom.label}
                    </h3>
                    <p className={`text-sm ${isSelected ? 'text-stone-200' : 'text-neutral-500'}`}>
                      {symptom.description}
                    </p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-white bg-white'
                        : 'border-neutral-300 group-hover:border-neutral-400'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selection Summary */}
        {selected.length > 0 && !result && (
          <div className="mb-8">
            <p className="text-neutral-600 mb-4">
              {selected.length} concern{selected.length !== 1 ? 's' : ''} selected
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {selected.map((id) => {
                const symptom = symptomOptions.find((s) => s.id === id);
                return (
                  <span
                    key={id}
                    className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-700"
                  >
                    {symptom?.label}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {selected.length > 0 && (
            <button
              onClick={clearSelection}
              className="px-6 py-3 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Clear Selection
            </button>
          )}
          <button
            onClick={runDiagnosis}
            disabled={selected.length === 0 || isAnalyzing}
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white transition-all duration-300 ${
              selected.length === 0
                ? 'bg-neutral-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 shadow-lg hover:shadow-xl shadow-orange-200'
            }`}
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Analyzing Your Skin...</span>
              </>
            ) : (
              <>
                <span>Diagnose My Skin</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Result Display */}
        {result && (
          <div className="mt-16 animate-fade-in">
            <ResultCard data={result} onReset={clearSelection} />
          </div>
        )}
      </div>
    </section>
  );
}