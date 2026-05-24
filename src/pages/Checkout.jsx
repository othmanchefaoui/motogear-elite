import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, CreditCard, ArrowRight, Lock, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
    const cartContext = useCart();
    const { cartItems = [] } = cartContext;
    const navigate = useNavigate();

    // 1. ANALYSE DES DONNÉES DANS LA CONSOLE
    useEffect(() => {
        console.log("=== INSPECTION DU PANIER MOTO GEAR ===");
        console.log("Voici la structure exacte de vos articles :", cartItems);
        console.log("=======================================");
    }, [cartItems]);

    // 2. CALCUL DU TOTAL SÉCURISÉ
    let totalRaw = 0;
    if (cartContext.cartTotal !== undefined) {
        totalRaw = cartContext.cartTotal;
    } else if (typeof cartContext.getCartTotal === 'function') {
        totalRaw = cartContext.getCartTotal();
    } else if (Array.isArray(cartItems)) {
        totalRaw = cartItems.reduce((sum, item) => {
            // Test de toutes les structures de prix possibles (direct ou dans l'objet product)
            const price = Number(item.price || item.prix || (item.product && (item.product.price || item.product.prix)) || 0);
            const qty = Number(item.quantity || item.qte || item.qty || 1);
            return sum + (price * qty);
        }, 0);
    }

    const cartTotal = Number(totalRaw) || 0;

    const [currentStep, setCurrentStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('visa');
    const [isOrdered, setIsOrdered] = useState(false);

    const shippingThreshold = 100;
    const shippingCost = cartTotal >= shippingThreshold || cartTotal === 0 ? 0 : 50;
    const grandTotal = cartTotal + shippingCost;

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsOrdered(true);
        if (typeof cartContext.clearCart === 'function') cartContext.clearCart();
    };

    if (isOrdered) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-barlow">
                <div className="bg-white border border-gray-200 p-8 md:p-12 max-w-md w-full text-center rounded-sm shadow-md space-y-6">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 border border-emerald-200">
                        <CheckCircle2 size={32} style={{ fill: '#10B981' }} className="text-white" />
                    </div>
                    <div>
                        <span className="inline-block text-[10px] font-black tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm uppercase mb-2">Paiement Accepté</span>
                        <h1 className="text-2xl font-black uppercase tracking-tight text-black">Commande Confirmée !</h1>
                        <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-bold">Référence : #MGE-2026-9412</p>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                        Merci pour votre confiance. Un conseiller de l'équipe <strong>MotoGear Élite</strong> va vous contacter sous peu pour valider l'expédition express 24h.
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                        <button
                            onClick={() => navigate('/')}
                            className="w-full bg-black text-white border-2 border-transparent hover:border-[#D4AF37] hover:bg-[#111111] hover:text-[#D4AF37] font-black text-xs uppercase tracking-widest py-4 transition-all duration-200 rounded-sm"
                        >
                            Retourner à l'accueil
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 font-barlow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <nav className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-6">
                    <Link to="/" className="hover:text-black">Accueil</Link> <span className="mx-2">/</span>
                    <Link to="/cart" className="hover:text-black">Panier</Link> <span className="mx-2">/</span>
                    <span className="text-black font-bold">Validation Étape par Étape</span>
                </nav>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold uppercase tracking-tight text-black">
                        Finaliser ma <span className="text-gold">Commande</span>
                    </h1>
                    <p className="text-xs text-gray-500 uppercase font-semibold mt-1">Tunnel sécurisé de validation d'achat</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* COLONNE DE GAUCHE */}
                    <div className="lg:col-span-7 space-y-4">

                        {/* ÉTAPE 1 : IDENTIFICATION */}
                        <div className={`bg-white border rounded-sm p-6 shadow-xs transition-all ${currentStep === 1 ? 'border-gold ring-1 ring-gold/20' : 'border-gray-200 opacity-75'}`}>
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentStep > 1 ? 'bg-emerald-500 text-white' : 'bg-black text-gold'}`}>
                                        {currentStep > 1 ? '✓' : '1'}
                                    </div>
                                    <h2 className="text-sm font-black uppercase tracking-widest text-black">Identification clients</h2>
                                </div>
                                {currentStep > 1 && (
                                    <button type="button" onClick={() => setCurrentStep(1)} className="text-xs font-bold text-gold hover:underline uppercase">Modifier</button>
                                )}
                            </div>

                            {currentStep === 1 ? (
                                <div className="space-y-4 animate-fade-in">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">Adresse Email *</label>
                                            <input type="email" defaultValue="client@elite.com" required className="w-full text-sm p-3 border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">Numéro de Téléphone *</label>
                                            <input type="tel" defaultValue="+212 600 112233" required className="w-full text-sm p-3 border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(2)}
                                        className="mt-2 bg-black text-white border-2 border-transparent hover:border-[#D4AF37] hover:bg-[#111111] hover:text-[#D4AF37] font-black text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all duration-200 flex items-center gap-1.5"
                                    >
                                        Valider l'identification <ArrowRight size={14} />
                                    </button>
                                </div>
                            ) : (
                                <p className="text-xs text-gray-500 font-medium">Coordonnées enregistrées avec succès.</p>
                            )}
                        </div>

                        {/* ÉTAPE 2 : ADRESSE DE LIVRAISON */}
                        <div className={`bg-white border rounded-sm p-6 shadow-xs transition-all ${currentStep === 2 ? 'border-gold ring-1 ring-gold/20' : 'border-gray-200'} ${currentStep < 2 ? 'opacity-50 pointer-events-none' : ''}`}>
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentStep > 2 ? 'bg-emerald-500 text-white' : 'bg-black text-gold'}`}>
                                        {currentStep > 2 ? '✓' : '2'}
                                    </div>
                                    <h2 className="text-sm font-black uppercase tracking-widest text-black">Adresse de livraison</h2>
                                </div>
                                {currentStep > 2 && (
                                    <button type="button" onClick={() => setCurrentStep(2)} className="text-xs font-bold text-gold hover:underline uppercase">Modifier</button>
                                )}
                            </div>

                            {currentStep === 2 && (
                                <div className="space-y-4 animate-fade-in">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">Prénom *</label>
                                            <input type="text" placeholder="Amine" required className="w-full text-sm p-3 border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">Nom *</label>
                                            <input type="text" placeholder="El Amrani" required className="w-full text-sm p-3 border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">Adresse postale complète *</label>
                                        <input type="text" placeholder="N° 42, Boulevard de la Corniche" required className="w-full text-sm p-3 border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">Ville *</label>
                                            <input type="text" placeholder="Casablanca" required className="w-full text-sm p-3 border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">Code Postal</label>
                                            <input type="text" placeholder="20000" className="w-full text-sm p-3 border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(3)}
                                        className="mt-2 bg-black text-white border-2 border-transparent hover:border-[#D4AF37] hover:bg-[#111111] hover:text-[#D4AF37] font-black text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all duration-200 flex items-center gap-1.5"
                                    >
                                        Confirmer la livraison <ArrowRight size={14} />
                                    </button>
                                </div>
                            )}
                            {currentStep !== 2 && currentStep > 2 && (
                                <p className="text-xs text-gray-500 font-medium">Adresse validée pour l'envoi express.</p>
                            )}
                        </div>

                        {/* ÉTAPE 3 : PAIEMENT SÉCURISÉ */}
                        <div className={`bg-white border rounded-sm p-6 shadow-xs transition-all ${currentStep === 3 ? 'border-gold ring-1 ring-gold/20' : 'border-gray-200'} ${currentStep < 3 ? 'opacity-40 pointer-events-none' : ''}`}>
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-5">
                                <div className="w-6 h-6 bg-black text-gold rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                <h2 className="text-sm font-black uppercase tracking-widest text-black flex items-center gap-2">
                                    Paiement 100% sécurisé {currentStep < 3 && <Lock size={14} className="text-gray-400" />}
                                </h2>
                            </div>

                            {currentStep === 3 && (
                                <form onSubmit={handlePlaceOrder} className="space-y-5 animate-fade-in">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div onClick={() => setPaymentMethod('visa')} className={`border-2 p-4 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all rounded-sm ${paymentMethod === 'visa' ? 'border-black bg-gray-50 font-bold' : 'border-gray-200 text-gray-500'}`}>
                                            <div className="text-sm font-black text-blue-800 tracking-tight">VISA / MasterCard</div>
                                            <span className="text-[10px] uppercase font-bold text-gray-400">Carte Bancaire</span>
                                        </div>
                                        <div onClick={() => setPaymentMethod('paypal')} className={`border-2 p-4 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all rounded-sm ${paymentMethod === 'paypal' ? 'border-black bg-gray-50 font-bold' : 'border-gray-200 text-gray-500'}`}>
                                            <div className="text-sm font-black italic text-blue-600">PayPal</div>
                                            <span className="text-[10px] uppercase font-bold text-gray-400">Compte En Ligne</span>
                                        </div>
                                    </div>

                                    {paymentMethod === 'visa' ? (
                                        <div className="space-y-3 p-4 bg-gray-50 border rounded-sm">
                                            <div>
                                                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Numéro de carte</label>
                                                <input type="text" placeholder="4111 2222 3333 4444" required className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Expiration (MM/AA)</label>
                                                    <input type="text" placeholder="12/28" required className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-1">Code CVC</label>
                                                    <input type="text" placeholder="123" required className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-sm focus:border-gold outline-none" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-sm text-xs text-blue-800 font-medium">
                                            🔒 Vous allez être redirigé vers l'interface cryptée sécurisée PayPal pour finaliser la transaction.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full bg-[#111111] text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-black hover:text-white hover:border-white font-black text-xs uppercase tracking-widest py-4 transition-all duration-200 rounded-sm shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <CreditCard size={14} /> Déclencher le paiement sécurisé — {grandTotal} DH
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>

                    {/* COLONNE DROITE : RECAPITULATIF REFAIT A NEUF */}
                    <div className="lg:col-span-5 sticky top-6">
                        <div className="bg-white border-2 border-black p-6 md:p-8 rounded-sm shadow-md space-y-6">

                            <h3 className="text-base font-black uppercase tracking-widest text-black pb-3 border-b-2 border-gray-100 flex justify-between items-center">
                                <span>Récapitulatif Articles</span>
                                <span className="bg-black text-gold text-xs font-bold px-2.5 py-0.5 rounded-sm">
                                    {cartItems.length}
                                </span>
                            </h3>

                            <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto pr-2 bg-neutral-50 border border-gray-100 p-4 rounded-sm">
                                {Array.isArray(cartItems) && cartItems.length > 0 ? (
                                    cartItems.map((item, idx) => {
                                        const itemName = item.name || item.title || (item.product && item.product.name) || `Article #${idx + 1}`;

                                        // Extraction profonde du prix
                                        const itemPrice = Number(item.price || item.prix || (item.product && (item.product.price || item.product.prix)) || 0);
                                        const itemQty = Number(item.quantity || item.qte || item.qty || 1);

                                        // Extraction profonde de l'image
                                        let itemImageSrc = '';
                                        if (Array.isArray(item.images) && item.images.length > 0) itemImageSrc = item.images[0];
                                        else if (item.product && Array.isArray(item.product.images) && item.product.images.length > 0) itemImageSrc = item.product.images[0];
                                        else if (typeof item.image === 'string') itemImageSrc = item.image;
                                        else if (item.product && typeof item.product.image === 'string') itemImageSrc = item.product.image;

                                        return (
                                            <div key={item.id || idx} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0 text-xs">

                                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-sm flex-shrink-0 flex items-center justify-center p-1 overflow-hidden">
                                                    {itemImageSrc ? (
                                                        <img
                                                            src={itemImageSrc}
                                                            alt={itemName}
                                                            className="w-full h-full object-contain"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.parentNode.innerHTML = '<div class="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24a1.79 1.79 0 0 0-1.8 0l-4 2.3a1.79 1.79 0 0 0-.9 1.53v8.66a1.79 1.79 0 0 0 .9 1.53l4 2.3a1.79 1.79 0 0 0 1.8 0l9-5.15a1.79 1.79 0 0 0 .9-1.53V9.4a1.79 1.79 0 0 0-.9-1.53z"/><path d="M3.23 6.2 12 11.2l8.77-5"/><path d="M12 22V11.2"/></svg></div>';
                                                            }}
                                                        />
                                                    ) : (
                                                        <Package size={20} className="text-gray-400" />
                                                    )}
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <p className="font-bold text-black uppercase truncate">{itemName}</p>
                                                    <p className="text-gray-400 font-bold text-[10px] uppercase mt-0.5 tracking-wide">
                                                        QTÉ : <span className="text-black">{itemQty}</span> | {item.size || 'Unique'}
                                                    </p>
                                                </div>

                                                <span className="font-black text-black whitespace-nowrap bg-white px-2 py-1 border border-gray-100 rounded-sm">
                                                    {itemPrice * itemQty} DH
                                                </span>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="text-center py-4 text-gray-400 text-[11px] uppercase font-bold">Aucun article</div>
                                )}
                            </div>

                            {/* FACTURATION */}
                            <div className="space-y-3 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <div className="flex justify-between">
                                    <span>Sous-total Panier</span>
                                    <span className="text-black font-bold">{cartTotal} DH</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Frais de port express</span>
                                    <span>{shippingCost === 0 ? <span className="text-emerald-600 font-black">OFFERT</span> : `${shippingCost} DH`}</span>
                                </div>

                                <div className="flex justify-between text-base font-black border-t-2 border-dashed border-gray-100 pt-4 text-black items-center">
                                    <span>Montant Global</span>
                                    <span className="text-white bg-black px-4 py-1.5 rounded-sm text-xl font-black tracking-tight border border-gold">
                                        {grandTotal} DH
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}