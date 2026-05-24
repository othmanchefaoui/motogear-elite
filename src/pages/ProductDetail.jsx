import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Shield, Truck, RefreshCw, Heart, Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, toggleWishlist, isInWishlist } = useCart();

    // Recherche du produit correspondant dans le mockData
    const product = PRODUCTS.find((p) => p.id === id);

    // États locaux pour les interactions de la fiche
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('specs'); // specs, description, reviews
    const [addedNotification, setAddedNotification] = useState(false);

    // Tailles standards disponibles pour les équipements moto
    const availableSizes = ['S', 'M', 'L', 'XL'];

    // Si le produit n'existe pas dans le fichier de données
    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
                <h2 className="text-xl font-bold uppercase tracking-wider text-[#111111] mb-2">Produit introuvable</h2>
                <p className="text-sm text-gray-500 mb-6">L'équipement demandé n'existe pas ou a été déplacé.</p>
                <Link to="/catalog" className="bg-[#111111] text-[#D4AF37] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-sm">
                    Retourner au catalogue
                </Link>
            </div>
        );
    }

    const isWish = isInWishlist(product.id);

    // Fonctions de modification de la quantité
    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    // Action d'ajout au panier avec effet de notification visuel
    const handleAddToCart = () => {
        addToCart(product, quantity, selectedSize);
        setAddedNotification(true);
        setTimeout(() => setAddedNotification(false), 3000); // Disparition après 3 secondes
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Fil d'Ariane / Breadcrumb */}
                <nav className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-6">
                    <Link to="/" className="hover:text-[#111111]">Accueil</Link>
                    <span className="mx-2">/</span>
                    <Link to="/catalog" className="hover:text-[#111111]">Catalogue</Link>
                    <span className="mx-2">/</span>
                    <Link to={`/catalog?category=${product.category}`} className="hover:text-[#111111] capitalize">{product.category}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[#111111] font-bold">{product.name}</span>
                </nav>

                {/* NOTIFICATION FLOTTANTE D'AJOUT RÉUSSI */}
                {addedNotification && (
                    <div className="fixed bottom-5 right-5 z-50 bg-[#111111] border-l-4 border-[#D4AF37] text-white p-4 shadow-xl rounded-sm flex items-center gap-3 animate-fade-in">
                        <div className="bg-[#D4AF37] text-[#111111] p-1 rounded-full">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">Panier mis à jour</p>
                            <p className="text-xs font-light">{quantity}x {product.name} ({selectedSize}) ajouté !</p>
                        </div>
                    </div>
                )}

                {/* GRILLE PRINCIPALE DE LA FICHE PRODUIT */}
                <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* COLONNE GAUCHE : GALERIE IMAGE INTERACTIVE */}
                    <div className="flex flex-col justify-center items-center relative bg-gray-50 border border-gray-100 rounded-sm p-6 aspect-square max-h-[500px]">
                        {product.badge && (
                            <span className="absolute top-4 left-4 bg-[#111111] text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-xs border border-[#D4AF37]/30">
                                {product.badge}
                            </span>
                        )}

                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-[380px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* COLONNE DROITE : INFORMATIONS COMMERCIALES & TECHNIQUE */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* Marque et Type */}
                            <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="text-xs font-black tracking-widest uppercase text-gray-400 bg-gray-100 px-2.5 py-1 rounded-xs">
                                    {product.brand}
                                </span>
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide italic">
                                    Ref: {product.ref}
                                </span>
                            </div>

                            {/* Nom complet du produit */}
                            <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#111111] mb-3">
                                {product.name}
                            </h1>

                            {/* Sous-type et Note étoilée */}
                            <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 pb-4 mb-4">
                                <span className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider">
                                    {product.type}
                                </span>
                                <div className="h-4 w-px bg-gray-300 hidden sm:block" />
                                <div className="flex items-center gap-1.5">
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-current' : ''} />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-[#111111] bg-amber-100 px-1.5 py-0.5 rounded-sm">
                                        {product.rating} / 5
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">({product.reviews.length} avis)</span>
                                </div>
                            </div>

                            {/* TARIFS */}
                            <div className="mb-6 flex items-baseline gap-4 bg-gray-50 p-4 rounded-sm border border-gray-100">
                                <div className="text-3xl font-black text-[#111111] tracking-tight">
                                    {product.price.toLocaleString()} DH
                                </div>
                                {product.originalPrice && (
                                    <div className="text-sm md:text-base text-gray-400 line-through font-medium">
                                        {product.originalPrice.toLocaleString()} DH
                                    </div>
                                )}
                                <span className="ml-auto text-xs font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                                    {product.stockLabel}
                                </span>
                            </div>

                            {/* SÉLECTION DES TAILLES MOTO */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-[#111111]">
                                        Sélectionner la taille :
                                    </label>
                                    <span className="text-[11px] text-gray-500 underline uppercase tracking-wider cursor-pointer hover:text-[#D4AF37]">
                                        Guide des tailles
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    {availableSizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`min-w-[50px] h-11 border text-xs font-bold uppercase tracking-wider transition-all rounded-sm ${selectedSize === size
                                                    ? 'bg-[#111111] text-[#D4AF37] border-[#111111] shadow-md shadow-black/10'
                                                    : 'border-gray-300 text-gray-700 bg-white hover:border-black'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CONFIGURATION QUANTITÉ ET AJOUT PANIER / WISHLIST */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6 border-t border-b border-gray-100 py-6">
                                {/* Sélecteur de quantité numérique */}
                                <div className="flex items-center justify-between border border-gray-300 bg-white h-14 rounded-sm sm:w-36 px-3">
                                    <button
                                        onClick={handleDecrement}
                                        className="p-1.5 text-gray-500 hover:text-black transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="text-sm font-bold text-[#111111] w-8 text-center select-none">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={handleIncrement}
                                        className="p-1.5 text-gray-500 hover:text-black transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                {/* Bouton d'ajout global au panier */}
                                <button
                                    onClick={handleAddToCart}
                                    disabled={product.stock === 'out'}
                                    className={`flex-1 h-14 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm text-center rounded-sm transition-all duration-300 ${product.stock === 'out'
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'bg-[#111111] text-white hover:bg-[#D4AF37] hover:text-[#111111] shadow-md shadow-black/15'
                                        }`}
                                >
                                    <ShoppingCart size={18} />
                                    {product.stock === 'out' ? 'Rupture de stock' : 'Ajouter au Panier'}
                                </button>

                                {/* Bouton Wishlist iconique */}
                                <button
                                    onClick={() => toggleWishlist(product)}
                                    className={`h-14 w-14 border rounded-sm flex items-center justify-center transition-all ${isWish
                                            ? 'bg-red-50 border-red-200 text-red-500'
                                            : 'border-gray-300 text-gray-600 hover:border-black hover:text-black bg-white'
                                        }`}
                                    title={isWish ? "Retirer des favoris" : "Ajouter aux favoris"}
                                >
                                    <Heart size={20} className={isWish ? 'fill-current' : ''} />
                                </button>
                            </div>
                        </div>

                        {/* AVANTAGES ASSURÉS PAR COMPOSANT LOCAL */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-gray-50 border border-gray-100 p-4 rounded-sm text-center sm:text-left">
                            <div className="flex items-center gap-3">
                                <Truck size={18} className="text-[#D4AF37] shrink-0 mx-auto sm:mx-0" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 leading-tight">Expédition Express 24H</span>
                            </div>
                            <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200 pt-2 sm:pt-0 sm:px-3">
                                <RefreshCw size={18} className="text-[#D4AF37] shrink-0 mx-auto sm:mx-0" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 leading-tight">Échange taille gratuit</span>
                            </div>
                            <div className="flex items-center gap-3 border-t sm:border-t-0 pt-2 sm:pt-0">
                                <Shield size={18} className="text-[#D4AF37] shrink-0 mx-auto sm:mx-0" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 leading-tight">Garantie Officielle CE</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* BLOC DES ONGLETS SYSTÈMES : SPECIFICATIONS / DESCRIPTION / AVIS */}
                <div className="mt-10 bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
                    <div className="flex border-b border-gray-200 bg-gray-50">
                        <button
                            onClick={() => setActiveTab('specs')}
                            className={`px-6 py-4 text-xs md:text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${activeTab === 'specs'
                                    ? 'border-[#D4AF37] text-[#111111] bg-white'
                                    : 'border-transparent text-gray-500 hover:text-black'
                                }`}
                        >
                            Fiche technique
                        </button>
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`px-6 py-4 text-xs md:text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${activeTab === 'description'
                                    ? 'border-[#D4AF37] text-[#111111] bg-white'
                                    : 'border-transparent text-gray-500 hover:text-black'
                                }`}
                        >
                            Description globale
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`px-6 py-4 text-xs md:text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${activeTab === 'reviews'
                                    ? 'border-[#D4AF37] text-[#111111] bg-white'
                                    : 'border-transparent text-gray-500 hover:text-black'
                                }`}
                        >
                            Avis motards ({product.reviews.length})
                        </button>
                    </div>

                    <div className="p-6">
                        {/* 1. CONTENU ONGLET SPÉCIFICATIONS TECHNIQUES (HTML TABLE) */}
                        {activeTab === 'specs' && (
                            <div className="max-w-3xl">
                                <table className="w-full text-left text-sm border-collapse">
                                    <tbody>
                                        {product.specs.map((spec, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'}>
                                                <td className="py-3 px-4 font-bold text-[#111111] uppercase tracking-wider text-xs w-1/3 border-b border-gray-100">
                                                    {spec.label}
                                                </td>
                                                <td className="py-3 px-4 text-gray-700 font-medium border-b border-gray-100">
                                                    {spec.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* 2. CONTENU ONGLET DESCRIPTION */}
                        {activeTab === 'description' && (
                            <div className="max-w-4xl text-gray-700 text-sm md:text-base leading-relaxed font-light">
                                <p className="mb-4">{product.description}</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-6">
                                    Produit certifié conforme aux normes européennes de sécurité routière.
                                </p>
                            </div>
                        )}

                        {/* 3. CONTENU ONGLET AVIS CLIENTS */}
                        {activeTab === 'reviews' && (
                            <div className="space-y-6 max-w-4xl">
                                {product.reviews.map((review) => (
                                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                                        <div className="flex items-center justify-between gap-4 mb-2">
                                            <div>
                                                <span className="font-bold text-sm uppercase tracking-wide text-[#111111] block">
                                                    {review.author}
                                                </span>
                                                <span className="text-[11px] font-medium text-gray-400 block uppercase">
                                                    Publié le {review.date}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 text-amber-400 bg-amber-50 px-2 py-0.5 rounded-sm">
                                                <Star size={12} className="fill-current" />
                                                <span className="text-xs font-black text-[#111111]">{review.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 italic font-light pl-2 border-l-2 border-gray-200">
                                            "{review.comment}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}