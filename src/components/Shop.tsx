import { ShoppingBag, Star, ExternalLink } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Barrier Repair Essentials Kit',
    category: 'Barrier Support',
    price: '$89',
    rating: 4.9,
    reviews: 127,
    description: 'Complete repair system for compromised skin barriers. Includes gentle cleanser, repair serum, and ceramide moisturizer.',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?w=400&h=300&fit=crop',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Circadia Clarifying System',
    category: 'Acne Control',
    price: '$124',
    rating: 4.8,
    reviews: 89,
    description: 'Professional-grade clarifying set with salicylic acid treatment and calming botanicals.',
    image: 'https://images.pexels.com/photos/3783454/pexels-photo-3783454.jpeg?w=400&h=300&fit=crop',
    bestseller: false,
  },
  {
    id: 3,
    name: 'Brightening Vitamin C Collection',
    category: 'Pigmentation',
    price: '$149',
    rating: 4.7,
    reviews: 203,
    description: 'Clinical-strength brightening trio for uneven tone, dark spots, and environmental protection.',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?w=400&h=300&fit=crop',
    bestseller: true,
  },
  {
    id: 4,
    name: 'Hydration Hero Set',
    category: 'Dehydration',
    price: '$79',
    rating: 4.9,
    reviews: 156,
    description: 'Multi-weight hyaluronic acid system for deep, lasting hydration at every skin layer.',
    image: 'https://images.pexels.com/photos/4041426/pexels-photo-4041426.jpeg?w=400&h=300&fit=crop',
    bestseller: false,
  },
];

const categories = [
  'All Products',
  'Barrier Repair',
  'Acne Control',
  'Pigmentation',
  'Hydration',
  'Anti-Aging',
];

export default function Shop() {
  return (
    <section id="shop" className="py-16 md:py-24 px-6 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 mb-6 border border-neutral-200">
            <ShoppingBag className="w-4 h-4" />
            <span>Curated Selection</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
            Professional-Grade Solutions
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Every product in our collection has been carefully vetted by skin health professionals.
            Designed to address specific skin patterns identified through our diagnostic system.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.bestseller && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium rounded-full">
                    Bestseller
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs text-neutral-600">{product.rating}</span>
                    <span className="text-xs text-neutral-400">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-medium text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-neutral-900">{product.price}</span>
                  <button className="flex items-center gap-1 px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors">
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-neutral-200 text-neutral-700 font-medium rounded-xl hover:border-neutral-300 hover:shadow-md transition-all">
            <span>View All Products</span>
          </button>
        </div>
      </div>
    </section>
  );
}