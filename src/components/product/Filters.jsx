import React from 'react';
import { X, ShieldCheck, Tag, Layers, SlidersHorizontal, SunSnow, LayoutGrid } from 'lucide-react';
import { CATEGORIES } from '../../data/mockData';

export default function Filters({
    activeCategory,
    setActiveCategory,
    selectedBrand,
    setSelectedBrand,
    selectedSize,
    setSelectedSize,
    selectedCeNorm,
    setSelectedCeNorm,
    selectedSeason,
    setSelectedSeason,
    onResetFilters,
    isOpen,
    onClose
}) {
    // Listes d'options de filtrage (Correspondant aux critères du cahier des charges)
    const brands = ['Shoei', 'Alpinestars', 'Furygan', 'Dainese', 'Bering'];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const ceNorms = [
        { label: 'Homologué CE', value: 'Oui' },
        { label: 'Non Homologué', value: 'Non' }
    ];
    const seasons = ['Été', 'Hiver', 'Mi-Saison', 'Toutes Saisons'];

    // Contenu des filtres partagé entre le rendu Desktop et le tiroir Mobile
    const FilterContent = () => (
        <div className="space-y-6 font-barlow text-[#111111]">

            {/* SECTION 1 : CATÉGORIES (Votre code d'origine préservé et stylisé) */}
            <div className="border-b border-gray-100 pb-5">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#111111] mb-4 flex items-center gap-1.5">
                    <LayoutGrid size={13} className="text-[#D4AF37]" /> Catégories
                </h3>
                <ul className="space-y-1">
                    {CATEGORIES.map((cat) => (
                        <li key={cat.id}>
                            <button
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    if (onClose) onClose(); // Ferme le tiroir sur mobile
                                }}
                                className={`w-full text-left px-3 py-2 text-xs uppercase tracking-wider transition-all rounded-sm font-semibold ${activeCategory === cat.id
                                    ? 'bg-[#111111] text-[#D4AF37] font-bold border-l-4 border-[#D4AF37]'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#111111]'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* SECTION 2 : MARQUE (Cahier des charges) */}
            <div className="border-b border-gray-100 pb-5">
                <h4 className="text-xs font-black uppercase tracking-wider mb-3 flex items-center gap-1.5 text-gray-500">
                    <Tag size={12} /> Marque
                </h4>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    <label className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wide cursor-pointer">
                        <input
                            type="radio"
                            name="brand"
                            checked={selectedBrand === 'all'}
                            onChange={() => setSelectedBrand('all')}
                            className="w-3.5 h-3.5 accent-black border-gray-300"
                        />
                        <span>Toutes les marques</span>
                    </label>
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-wide cursor-pointer hover:text-[#D4AF37] transition-colors">
                            <input
                                type="radio"
                                name="brand"
                                checked={selectedBrand === brand}
                                onChange={() => setSelectedBrand(brand)}
                                className="w-3.5 h-3.5 accent-black border-gray-300"
                            />
                            <span>{brand}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* SECTION 3 : TAILLE (Cahier des charges) */}
            <div className="border-b border-gray-100 pb-5">
                <h4 className="text-xs font-black uppercase tracking-wider mb-3 flex items-center gap-1.5 text-gray-500">
                    <Layers size={12} /> Taille disponible
                </h4>
                <div className="flex flex-wrap gap-1.5">
                    <button
                        type="button"
                        onClick={() => setSelectedSize('all')}
                        className={`px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider border rounded-sm transition-all ${selectedSize === 'all'
                            ? 'bg-black text-[#D4AF37] border-black'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-black'
                            }`}
                    >
                        Toutes
                    </button>
                    {sizes.map((size) => (
                        <button
                            key={size}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider border rounded-sm transition-all min-w-[34px] ${selectedSize === size
                                ? 'bg-black text-[#D4AF37] border-black'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-black'
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* SECTION 4 : NORME CE (Cahier des charges) */}
            <div className="border-b border-gray-100 pb-5">
                <h4 className="text-xs font-black uppercase tracking-wider mb-3 flex items-center gap-1.5 text-gray-500">
                    <ShieldCheck size={12} /> Certification CE
                </h4>
                <div className="space-y-2">
                    <label className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wide cursor-pointer">
                        <input
                            type="radio"
                            name="ceNorm"
                            checked={selectedCeNorm === 'all'}
                            onChange={() => setSelectedCeNorm('all')}
                            className="w-3.5 h-3.5 accent-black border-gray-300"
                        />
                        <span>Toutes les normes</span>
                    </label>
                    {ceNorms.map((norm) => (
                        <label key={norm.value} className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-wide cursor-pointer hover:text-[#D4AF37] transition-colors">
                            <input
                                type="radio"
                                name="ceNorm"
                                checked={selectedCeNorm === norm.value}
                                onChange={() => setSelectedCeNorm(norm.value)}
                                className="w-3.5 h-3.5 accent-black border-gray-300"
                            />
                            <span className={norm.value === 'Oui' ? 'text-emerald-700 font-bold' : ''}>
                                {norm.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* SECTION 5 : SAISONNALITÉ (Cahier des charges) */}
            <div className="pb-2">
                <h4 className="text-xs font-black uppercase tracking-wider mb-3 flex items-center gap-1.5 text-gray-500">
                    <SunSnow size={12} /> Saisonnalité
                </h4>
                <div className="space-y-2">
                    <label className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wide cursor-pointer">
                        <input
                            type="radio"
                            name="season"
                            checked={selectedSeason === 'all'}
                            onChange={() => setSelectedSeason('all')}
                            className="w-3.5 h-3.5 accent-black border-gray-300"
                        />
                        <span>Toutes saisons</span>
                    </label>
                    {seasons.map((season) => (
                        <label key={season} className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-wide cursor-pointer hover:text-[#D4AF37] transition-colors">
                            <input
                                type="radio"
                                name="season"
                                checked={selectedSeason === season}
                                onChange={() => setSelectedSeason(season)}
                                className="w-3.5 h-3.5 accent-black border-gray-300"
                            />
                            <span>{season}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* BOUTON RAZ GLOBAL (Apparaît si des filtres secondaires sont actifs) */}
            {(selectedBrand !== 'all' || selectedSize !== 'all' || selectedCeNorm !== 'all' || selectedSeason !== 'all') && (
                <button
                    onClick={onResetFilters}
                    className="w-full mt-2 bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-sm transition-all"
                >
                    Réinitialiser les filtres
                </button>
            )}
        </div>
    );

    return (
        <>
            {/* VERSION DESKTOP : Panneau fixe à gauche */}
            <div className="hidden lg:block w-64 shrink-0 bg-white border border-gray-200 p-6 rounded-sm sticky top-24 h-fit shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                    <h2 className="text-xs font-black uppercase tracking-widest text-[#111111] flex items-center gap-1.5">
                        <SlidersHorizontal size={13} className="text-[#D4AF37]" /> Affiner par
                    </h2>
                </div>
                <FilterContent />
            </div>

            {/* VERSION MOBILE DRAWER : Tiroir coulissant latéral */}
            {isOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Overlay d'ombrage flouté */}
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose} />

                    {/* Conteneur coulissant */}
                    <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-white p-6 shadow-xl flex flex-col z-50 transform transition-transform duration-300 ease-out">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                            <h2 className="text-sm font-black uppercase tracking-widest text-[#111111] flex items-center gap-2">
                                <SlidersHorizontal size={14} className="text-[#D4AF37]" /> Filtres catalogue
                            </h2>
                            <button onClick={onClose} className="p-1 text-gray-500 hover:text-black transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-1">
                            <FilterContent />
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <button
                                onClick={onClose}
                                className="w-full bg-black text-[#D4AF37] font-bold text-xs uppercase tracking-widest py-3 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all"
                            >
                                Appliquer les filtres
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}