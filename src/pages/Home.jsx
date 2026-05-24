import React from 'react';
import Hero from '../components/home/Hero';
import CategoryCarousel from '../components/home/CategoryCarousel';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Reassurance from '../components/common/Reassurance';

export default function Home() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* 1. Bannière principale Premium */}
            <Hero />

            {/* 2. Bandeau de Réassurance (Avantages de livraison / paiement) */}
            <Reassurance />

            {/* 3. Section de choix de Catégories de Moto */}
            <CategoryCarousel />

            {/* 4. Vitrine des Meilleurs Produits (Shoei, Dainese, etc.) */}
            <FeaturedProducts />

            {/* Section promotionnelle additionnelle plein écran */}
            <section className="bg-[#111111] text-white py-14 px-4 relative overflow-hidden border-t-2 border-[#D4AF37]">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold font-sans uppercase mb-3 tracking-wide">
                        Assistance et expertise <span className="text-[#D4AF37]">100% Motard</span>
                    </h3>
                    <p className="text-sm text-gray-400 max-w-xl mx-auto mb-6 font-light">
                        Une hésitation sur la taille de vos gants ou l'homologation de votre casque ? Nos conseillers experts vous guident par téléphone ou WhatsApp pour faire le choix parfait.
                    </p>
                    <div className="inline-block text-[#111111] bg-[#D4AF37] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xs">
                        Appeler un expert : +212 5 22 XX XX XX
                    </div>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
            </section>
        </div>
    );
}