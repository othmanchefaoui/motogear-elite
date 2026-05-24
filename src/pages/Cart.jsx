import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
    const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();
    const navigate = useNavigate();

    // Seuil de livraison gratuite (100 DH comme défini dans mockData)
    const shippingThreshold = 100;
    const shippingCost = cartTotal >= shippingThreshold || cartTotal === 0 ? 0 : 50;
    const grandTotal = cartTotal + shippingCost;

    // Si le panier est vide, on affiche un bel écran de réassurance incitant à l'achat
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white border border-gray-200 p-8 md:p-12 max-w-md w-full text-center rounded-sm shadow-sm">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                        <ShoppingBag size={28} />
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#111111] mb-2">
                        Votre panier est vide
                    </h1>
                    <p className="text-sm text-gray-500 mb-8 font-light">
                        Vous n'avez pas encore ajouté d'équipement MotoGear Élite à votre sélection.
                    </p>
                    <Link
                        to="/catalog"
                        className="w-full block bg-[#111111] hover:bg-[#D4AF37] text-white hover:text-[#111111] font-bold text-xs uppercase tracking-widest py-4 transition-colors duration-300 rounded-sm"
                    >
                        Découvrir la Collection
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Fil d'Ariane / Breadcrumb */}
                <nav className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-6">
                    <Link to="/" className="hover:text-[#111111]">Accueil</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[#111111] font-bold">Votre Panier</span>
                </nav>

                {/* Titre de section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold uppercase tracking-tight text-[#111111]">
                        Mon Panier d'achat <span className="text-gray-400">({cartCount})</span>
                    </h1>
                    <div className="w-12 h-1 bg-[#D4AF37] mt-2" />
                </div>

                {/* GRILLE PRINCIPALE (Articles à gauche, Résumé financier à droite) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* COLONNE GAUCHE : LISTING DES ARTICLES DU PANIER */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item, index) => (
                            <div
                                key={`${item.product.id}-${item.size}-${index}`}
                                className="bg-white border border-gray-200 p-4 md:p-5 rounded-sm shadow-xs flex flex-col sm:flex-row items-center gap-4 md:gap-6 hover:border-gray-300 transition-all"
                            >
                                {/* Image miniature cliquable */}
                                <Link to={`/product/${item.product.id}`} className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 border border-gray-100 rounded-sm p-2 shrink-0 flex items-center justify-center">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </Link>

                                {/* Métadonnées de l'article */}
                                <div className="flex-1 text-center sm:text-left min-w-0 w-full">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        {item.product.brand}
                                    </span>
                                    <Link to={`/product/${item.product.id}`} className="block">
                                        <h3 className="text-sm md:text-base font-bold text-[#111111] uppercase tracking-tight hover:text-[#D4AF37] transition-colors truncate">
                                            {item.product.name}
                                        </h3>
                                    </Link>
                                    <p className="text-xs text-gray-500 font-medium uppercase mt-0.5 tracking-wide">
                                        Taille sélectionnée : <span className="font-bold text-[#111111] bg-gray-100 px-1.5 py-0.5 rounded-xs ml-1">{item.size}</span>
                                    </p>
                                    <div className="text-sm font-bold text-[#111111] mt-2 sm:hidden">
                                        {(item.product.price * item.quantity).toLocaleString()} DH
                                    </div>
                                </div>

                                {/* SÉLECTEUR DE QUANTITÉ INTERACTIF */}
                                <div className="flex items-center border border-gray-300 bg-white h-10 rounded-sm px-2 w-28 justify-between shrink-0 shadow-xs">
                                    <button
                                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                                        className="p-1 text-gray-500 hover:text-black transition-colors"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span className="text-xs font-bold text-[#111111] w-6 text-center select-none">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                                        className="p-1 text-gray-500 hover:text-black transition-colors"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>

                                {/* PRIX TOTAL POUR CET ARTICLE (VISIBLE UNIQUEMENT SUR DESKTOP) */}
                                <div className="hidden sm:block text-right min-w-[100px] shrink-0">
                                    <div className="text-base font-black text-[#111111] tracking-tight">
                                        {(item.product.price * item.quantity).toLocaleString()} DH
                                    </div>
                                    {item.quantity > 1 && (
                                        <div className="text-[11px] text-gray-400 font-medium">
                                            {item.product.price.toLocaleString()} DH / unité
                                        </div>
                                    )}
                                </div>

                                {/* BOUTON SUPPRESSION */}
                                <button
                                    onClick={() => removeFromCart(item.product.id, item.size)}
                                    className="p-2 text-gray-400 hover:text-red-500 border border-transparent hover:border-gray-200 hover:bg-gray-50 rounded-sm transition-all shrink-0"
                                    title="Supprimer l'article"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}

                        {/* BOUTON RETOUR CATALOGUE ACCESSIBLE */}
                        <div className="pt-2">
                            <Link
                                to="/catalog"
                                className="inline-block text-xs font-bold text-[#111111] hover:text-[#D4AF37] uppercase tracking-wider border-b-2 border-[#111111] hover:border-[#D4AF37] pb-1 transition-all"
                            >
                                ← Continuer mes achats
                            </Link>
                        </div>
                    </div>

                    {/* COLONNE DROITE : RÉSUMÉ DE LA COMMANDE (FACTURE COMMERCIALE) */}
                    <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm space-y-6">
                        <h2 className="text-sm font-black uppercase tracking-widest text-[#111111] border-b border-gray-100 pb-3">
                            Résumé de la commande
                        </h2>

                        {/* BLOC DE CALCUL ET TARIFICATION SÉPARÉ */}
                        <div className="space-y-3 text-sm border-b border-gray-100 pb-4">
                            <div className="flex justify-between text-gray-600 font-medium">
                                <span>Sous-total articles :</span>
                                <span className="font-bold text-[#111111]">{cartTotal.toLocaleString()} DH</span>
                            </div>
                            <div className="flex justify-between text-gray-600 font-medium items-center">
                                <span>Frais de livraison :</span>
                                {shippingCost === 0 ? (
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm uppercase tracking-wider">Gratuit</span>
                                ) : (
                                    <span className="font-bold text-[#111111]">{shippingCost} DH</span>
                                )}
                            </div>

                            {/* Barre de progression ou message de réassurance pour le port gratuit */}
                            {shippingCost > 0 && (
                                <div className="text-[11px] text-amber-600 font-medium bg-amber-50 p-2 border border-amber-100 rounded-sm uppercase tracking-wide">
                                    Ajoutez <strong>{(shippingThreshold - cartTotal)} DH</strong> pour débloquer la livraison gratuite !
                                </div>
                            )}
                        </div>

                        {/* TOTAL GÉNÉRAL EN GROS */}
                        <div className="flex justify-between items-baseline">
                            <span className="text-base font-bold uppercase tracking-tight text-[#111111]">Total TTC :</span>
                            <span className="text-2xl font-black text-[#111111] tracking-tight border-b-2 border-[#D4AF37] pb-1">
                                {grandTotal.toLocaleString()} DH
                            </span>
                        </div>

                        {/* BOUTON DE REDIRECTION CAISSE FINALE */}
                        <button
                            onClick={() => navigate('/checkout')}
                            className="w-full h-14 bg-[#111111] hover:bg-[#D4AF37] text-white hover:text-[#111111] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 rounded-sm shadow-md shadow-black/10"
                        >
                            Passer à la caisse sécurisée
                            <ArrowRight size={14} />
                        </button>

                        {/* BLOC DE SÉCURITÉ GARANTIE */}
                        <div className="bg-gray-50 border border-gray-100 p-3 rounded-sm flex items-start gap-2.5 text-gray-500">
                            <ShieldCheck size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                            <p className="text-[11px] leading-normal font-medium uppercase tracking-wide">
                                Transactions 100% sécurisées sous protocole crypté SSL. Échange et retour faciles sous 30 jours.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}