import { BookOpen, Video, FileText, Lightbulb, ArrowRight, Clock } from 'lucide-react';

const educationalContent = [
  {
    id: 1,
    type: 'guide' as const,
    title: 'Understanding Your Skin Barrier',
    description: 'The complete guide to recognizing, repairing, and protecting your skins most important line of defense.',
    readTime: '8 min read',
    category: 'Barrier Health',
    image: 'https://images.pexels.com/photos/4041398/pexels-photo-4041398.jpeg?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    type: 'video' as const,
    title: 'Acne Myths Debunked',
    description: 'Separating fact from fiction: what actually causes breakouts and what is just marketing mythology.',
    readTime: '12 min watch',
    category: 'Acne Education',
    image: 'https://images.pexels.com/photos/3783454/pexels-photo-3783454.jpeg?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    type: 'article' as const,
    title: 'The Science of Skin Pigmentation',
    description: 'Understanding melanin production and how to safely address uneven tone at the cellular level.',
    readTime: '10 min read',
    category: 'Pigmentation',
    image: 'https://images.pexels.com/photos/4041426/pexels-photo-4041426.jpeg?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    type: 'guide' as const,
    title: 'Building a Minimalist Routine',
    description: 'Why less can be more in skincare, and how to identify the essentials your skin actually needs.',
    readTime: '6 min read',
    category: 'Routine Design',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?w=400&h=250&fit=crop',
  },
];

const typeIcons = {
  guide: FileText,
  video: Video,
  article: BookOpen,
};

const quickTips = [
  {
    title: 'Layer from Thinnest to Thickest',
    description: 'Apply products in order of consistency: serums first, oils and creams last.',
  },
  {
    title: 'The 2-Week Rule',
    description: 'When trying a new active ingredient, wait 2 weeks before adding another to identify reactions.',
  },
  {
    title: 'Morning SPF is Non-Negotiable',
    description: 'Even on cloudy days, UV damage accumulates. SPF 30+ daily prevents 90% of premature aging.',
  },
  {
    title: 'Patch Test Everything',
    description: 'Apply new products behind your ear for 24 hours before full application.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full text-sm font-medium text-amber-800 mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Skin Health Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
            Learn Your Way to Better Skin
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Evidence-based education to help you understand your skin, not just treat it.
            Knowledge is the foundation of lasting skin health.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {educationalContent.map((item) => {
            const IconComponent = typeIcons[item.type];
            return (
              <article
                key={item.id}
                className="group flex flex-col md:flex-row bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg">
                    <IconComponent className="w-3 h-3 text-amber-600" />
                    <span className="text-xs font-medium text-neutral-700 capitalize">{item.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
                    <div className="flex items-center gap-1 text-neutral-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                    <button className="flex items-center gap-1 text-neutral-700 font-medium text-sm hover:text-amber-600 transition-colors">
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-serif text-white">Pro Tips for Every Routine</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, index) => (
              <div
                key={index}
                className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>
                <h4 className="font-medium text-white mb-2">{tip.title}</h4>
                <p className="text-sm text-stone-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}