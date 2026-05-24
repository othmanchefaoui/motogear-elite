import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import Filters from '../components/product/Filters';
import Sort from '../components/product/Sort';
import ProductCard from '../components/product/ProductCard';

export default function Catalog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || 'all';

    // États locaux de base
    const [activeCategory, setActiveCategory] = useState(categoryParam);
    const [sortOption, setSortOption] = useState('default');
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // ÉTATS DES FILTRES CRITIQUES (Issus du cahier des charges)
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedSize, setSelectedSize] = useState('all');
    const [selectedCeNorm, setSelectedCeNorm] = useState('all');
    const [selectedSeason, setSelectedSeason] = useState('all');

    // Synchronise la catégorie avec l'URL
    useEffect(() => {
        setActiveCategory(categoryParam);
    }, [categoryParam]);

    // Met à jour la catégorie et nettoie l'URL
    const handleCategoryChange = (id) => {
        setActiveCategory(id);
        if (id === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', id);
        }
        setSearchParams(searchParams);
    };

    // Réinitialisation globale de tous les filtres secondaires
    const handleResetFilters = () => {
        setSelectedBrand('all');
        setSelectedSize('all');
        setSelectedCeNorm('all');
        setSelectedSeason('all');
    };

    // ==========================================
    // LOGIQUE DE FILTRAGE MULTI-CRITÈRES COMBINÉE
    // ==========================================
    const filteredProducts = PRODUCTS.filter((product) => {
        // 1. Filtre par Catégorie (URL / Principal)
        const matchCategory = activeCategory === 'all' || product.category === activeCategory;

        // 2. Filtre par Marque
        const matchBrand = selectedBrand === 'all' || product.brand === selectedBrand;

        // 3. Filtre par Taille
        // Gère les tailles simples ("M") ou les tableaux de tailles disponibles (["M", "L"])
        const matchSize = selectedSize === 'all' ||
            (Array.isArray(product.sizes) ? product.sizes.includes(selectedSize) : product.size === selectedSize);

        // 4. Filtre par Norme CE / Homologation
        const matchCeNorm = selectedCeNorm === 'all' || String(product.ceNorm).toLowerCase() === selectedCeNorm.toLowerCase();

        // 5. Filtre par Saisonnalité
        const matchSeason = selectedSeason === 'all' || product.season === selectedSeason;

        return matchCategory && matchBrand && matchSize && matchCeNorm && matchSeason;
    });

    // Logique de Tri sur les éléments filtrés
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        if (sortOption === 'rating') return b.rating - a.rating;
        return 0;
    });

    return (
        <div className="min-h-screen bg-gray-50 py-8 font-barlow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Fil d'Ariane */}
                <nav className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-6">
                    <span>Accueil</span> <span className="mx-2">/</span> <span className="text-[#111111] font-bold">Catalogue</span>
                </nav>

                {/* Titre de page */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold uppercase tracking-tight text-[#111111]">
                        Notre E-Boutique <span className="text-[#D4AF37]">MotoGear</span>
                    </h1>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-bold">Équipez-vous avec le meilleur matériel certifié CE</p>
                </div>

                {/* Layout principal */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Bloc Filtres mis à jour avec les nouveaux critères */}
                    <Filters
                        activeCategory={activeCategory}
                        setActiveCategory={handleCategoryChange}

                        // Nouveaux paramètres transmis à vos filtres
                        selectedBrand={selectedBrand}
                        setSelectedBrand={setSelectedBrand}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        selectedCeNorm={selectedCeNorm}
                        setSelectedCeNorm={setSelectedCeNorm}
                        selectedSeason={selectedSeason}
                        setSelectedSeason={setSelectedSeason}
                        onResetFilters={handleResetFilters}

                        isOpen={isMobileFiltersOpen}
                        onClose={() => setIsMobileFiltersOpen(false)}
                    />

                    {/* Bloc Contenu Principal */}
                    <div className="flex-1">
                        <Sort
                            sortOption={sortOption}
                            setSortOption={setSortOption}
                            totalProducts={sortedProducts.length}
                            onOpenFilters={() => setIsMobileFiltersOpen(true)}
                        />

                        {sortedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sortedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white border-2 border-dashed border-gray-200 p-12 text-center rounded-sm">
                                <p className="text-gray-500 uppercase tracking-wider text-xs font-bold">
                                    Aucun équipement ne correspond à vos critères de recherche.
                                </p>
                                <button
                                    onClick={handleResetFilters}
                                    className="mt-4 text-xs bg-black text-white px-4 py-2 uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-colors rounded-sm"
                                >
                                    Réinitialiser les critères
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}