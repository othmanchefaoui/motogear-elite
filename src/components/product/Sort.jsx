import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

export default function Sort({ sortOption, setSortOption, totalProducts, onOpenFilters }) {
    return (
        <div className="bg-white border border-gray-200 p-4 rounded-sm flex items-center justify-between gap-4 mb-6">
            {/* Compteur de résultats */}
            <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-600">
                <span className="font-bold text-[#111111]">{totalProducts}</span> {totalProducts > 1 ? 'produits disponibles' : 'produit disponible'}
            </div>

            <div className="flex items-center gap-3">
                {/* Bouton pour déclencher le Drawer de Filtres sur Mobile */}
                <button
                    onClick={onOpenFilters}
                    className="lg:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#111111] text-white px-3 py-2 rounded-sm hover:bg-[#D4AF37] hover:text-[#111111] transition-colors"
                >
                    <SlidersHorizontal size={14} />
                    Filtres
                </button>

                {/* Menu de sélection du tri */}
                <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest text-gray-500">
                        Trier par :
                    </label>
                    <select
                        id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="text-xs font-medium uppercase tracking-wider border border-gray-300 rounded-sm bg-white px-3 py-2 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                    >
                        <option value="default">Pertinence</option>
                        <option value="price-asc">Prix : Croissant</option>
                        <option value="price-desc">Prix : Décroissant</option>
                        <option value="rating">Meilleures notes</option>
                    </select>
                </div>
            </div>
        </div>
    );
}