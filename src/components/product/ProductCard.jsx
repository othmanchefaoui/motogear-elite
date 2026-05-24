import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
    const { addToCart, toggleWishlist, isInWishlist } = useCart();
    const isWish = isInWishlist(product.id);

    return (
        <div className="group bg-white border border-[#E5E5E5] hover:border-[#D4AF37] transition-all duration-300 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-lg relative">

            {/* Badges d'état (Promo, bestseller, nouveauté) */}
            {product.badge && (
                <span className="absolute top-3 left-3 z-10 bg-[#111111] text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-xs border border-[#D4AF37]/40">
                    {product.badge}
                </span>
            )}

            {/* Bouton Favoris / Wishlist */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product);
                }}
                className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white p-2 rounded-full text-[#111111] hover:text-red-500 shadow-sm transition-all duration-200"
                title="Ajouter aux favoris"
            >
                <Heart size={16} className={isWish ? 'fill-red-500 text-red-500' : ''} />
            </button>

            {/* Section Image cliquable reliée au détail */}
            <Link to={`/product/${product.id}`} className="block relative aspect-square bg-gray-50 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
            </Link>

            {/* Corps informatif de la carte */}
            <div className="p-4 flex-1 flex flex-col justify-between border-t border-gray-100">
                <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span className="font-bold uppercase tracking-wide text-gray-400">{product.brand}</span>
                        <span className="italic">{product.type.split('·')[0]}</span>
                    </div>

                    <Link to={`/product/${product.id}`}>
                        <h3 className="text-sm md:text-base font-bold text-[#111111] uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-1">
                            {product.name}
                        </h3>
                    </Link>

                    {/* Note globale avec étoiles */}
                    <div className="flex items-center gap-1 mt-1 mb-3">
                        <div className="flex text-amber-400">
                            <Star size={12} className="fill-current" />
                        </div>
                        <span className="text-[11px] font-bold text-[#111111]">{product.rating}</span>
                    </div>
                </div>

                {/* Section Tarification et bouton d'action principal */}
                <div className="mt-2 border-t border-gray-50 pt-3 flex items-center justify-between">
                    <div>
                        <div className="text-base md:text-lg font-bold text-[#111111]">
                            {product.price.toLocaleString()} DH
                        </div>
                        {product.originalPrice && (
                            <div className="text-xs text-gray-400 line-through">
                                {product.originalPrice.toLocaleString()} DH
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => addToCart(product, 1, 'M')}
                        className="bg-[#111111] hover:bg-[#D4AF37] text-white hover:text-[#111111] p-2.5 transition-colors duration-300 rounded-sm shadow-sm"
                        title="Ajouter au Panier rapide"
                    >
                        <ShoppingCart size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}