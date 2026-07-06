import { CheckCircle2, Download, RotateCcw, ShoppingBag, BookOpen, ArrowRight } from 'lucide-react';
import type { ArchetypeResult } from '../data/archetypes';

interface ResultCardProps {
  data: ArchetypeResult;
  onReset?: () => void;
}

const severityColors = {
  mild: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  moderate: 'bg-amber-50 text-amber-700 border-amber-200',
  severe: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function ResultCard({ data, onReset }: ResultCardProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Decorative background */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-3xl blur-2xl" />

      {/* Main card */}
      <div className="relative bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-800 to-stone-900 px-8 py-10 text-white">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <span className="text-sm uppercase tracking-wider text-stone-300">Your Skin Pattern</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif mb-2">{data.archetype}</h2>
          <div className="flex items-center gap-2 text-stone-300">
            <span className="text-sm">Recommended:</span>
            <span className="font-medium text-white">{data.offer}</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          {/* Description */}
          <div className="mb-8">
            <p className="text-neutral-600 leading-relaxed">{data.description}</p>
          </div>

          {/* Severity Badge */}
          {data.severity && (
            <div className="mb-6">
              <span
                className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${
                  severityColors[data.severity]
                }`}
              >
                {data.severity.charAt(0).toUpperCase() + data.severity.slice(1)} concern level
              </span>
            </div>
          )}

          {/* Tips Section */}
          <div className="mb-8 p-6 bg-gradient-to-br from-neutral-50 to-stone-50 rounded-2xl">
            <h3 className="font-medium text-neutral-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <span>Quick Action Steps</span>
            </h3>
            <ul className="space-y-3">
              {data.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div className="mb-8">
            <h3 className="font-medium text-neutral-900 mb-4 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              <span>Recommended Support Products</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.affiliateSet.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl hover:border-amber-300 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-100 to-stone-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-neutral-400">{index + 1}</span>
                  </div>
                  <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                    {item}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-auto text-neutral-300 group-hover:text-amber-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-neutral-100">
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all shadow-lg shadow-orange-100">
              <Download className="w-5 h-5" />
              <span>Download My Blueprint</span>
            </button>
            {onReset && (
              <button
                onClick={onReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Start Over</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}