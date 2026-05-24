import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';

// Sélection de 3 produits de catégories différentes pour plus de réalisme
// (Un casque, une veste, et une paire de gants)
const featuredProductsIds = [
    'casque-agv-pista',   // AGV Pista (Casque)
    'veste-dainese-racing4', // Dainese Racing 4 (Veste)
    'gants-alpinestars-sp8' // Alpinestars SP-8 (Gants)
];

const featuredProducts = PRODUCTS.filter(p => featuredProductsIds.includes(p.id));

export default function FeaturedProducts() {
    return (
        <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* En-tête de section */}
                <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
                    <div>
                        <h2 className="text-4xl font-premium uppercase tracking-wider text-black">
                            Équipements <span className="text-gold">Vedettes</span>
                        </h2>
                        <p className="text-gray-600 font-barlow mt-2">La sélection premium de la Collection Élite 2026.</p>
                    </div>
                    <Link
                        to="/catalog"
                        className="flex items-center gap-2.5 text-black hover:text-gold font-barlow font-bold uppercase tracking-widest text-sm group transition-all"
                    >
                        Voir tout le catalogue
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Grille de produits */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="bg-gray-50 border border-gray-200 rounded-sm overflow-hidden group shadow-lg transition-all hover:border-gold hover:shadow-gold/10">

                            {/* Zone Image */}
                            <div className="relative h-72 overflow-hidden bg-white flex items-center justify-center p-6 border-b border-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Badge contextuel (ex: PREMIUM, BESTSELLER) */}
                                {product.badge && (
                                    <span className={`absolute top-4 left-4 font-barlow font-black uppercase text-[10px] tracking-wider px-3 py-1 rounded-sm shadow-md ${product.badge === 'PREMIUM' ? 'bg-black text-white' : 'bg-gold text-black'
                                        }`}>
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            {/* Zone Texte */}
                            <div className="p-6 space-y-3">
                                <div className="flex items-center justify-between text-xs text-gray-500 font-barlow font-medium uppercase tracking-wider">
                                    <span>{product.brand}</span>
                                    <span>{product.category}</span>
                                </div>

                                <h3 className="text-2xl font-premium uppercase tracking-widest text-black group-hover:text-gold transition-colors h-14 line-clamp-2">
                                    {product.name}
                                </h3>

                                {/* Rating */}
                                <div className="flex items-center gap-1.5 pt-1">
                                    <div className="flex text-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                                        ))}
                                    </div>
                                    <span className="text-sm font-barlow font-bold text-black">{product.rating.toFixed(1)}</span>
                                </div>

                                {/* Prix et CTA */}
                                <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-400 line-through font-barlow">{product.originalPrice} DH</span>
                                        )}
                                        <p className="text-3xl font-premium text-black tracking-tighter">
                                            {product.price} <span className="text-xl">DH</span>
                                        </p>
                                    </div>

                                    <Link
                                        to={`/product/${product.id}`}
                                        className="bg-black text-white hover:bg-gold hover:text-black font-barlow font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all"
                                    >
                                        Découvrir
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}