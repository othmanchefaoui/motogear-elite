import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative bg-[#111111] h-[500px] md:h-[600px] flex items-center overflow-hidden">
            {/* Background overlay subtil avec effet dégradé */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-black/50 z-10" />

            {/* Image de fond premium (Moto et équipement) */}
            <img
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1600&auto=format&fit=crop"
                alt="MotoGear Hero Banner"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-slow"
                style={{ animationDuration: '10s' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="max-w-2xl text-white">
                    {/* Badge premium */}
                    <span className="inline-block text-xs font-bold tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 mb-4 uppercase rounded-sm">
                        Collection Élite 2026
                    </span>

                    {/* Titre principal avec la police Bebas Neue stylisée */}
                    <h1 className="text-5xl md:text-7xl font-bold font-sans uppercase tracking-tight leading-none mb-4">
                        L'ÉQUIPEMENT DE <span className="text-[#D4AF37]">PREMIER RANG</span> POUR LES PASSIONNÉS
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg mb-8 font-light max-w-lg">
                        Découvrez notre sélection exclusive de casques, vestes et accessoires des plus grandes marques mondiales (Shoei, Dainese, Alpinestars). Sécurité maximale, style sans compromis.
                    </p>

                    {/* Boutons d'action responsives */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/catalog"
                            className="bg-[#D4AF37] hover:bg-[#B8960F] text-[#111111] font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors duration-300 text-center rounded-sm shadow-lg shadow-[#D4AF37]/10"
                        >
                            Découvrir le Catalogue
                        </Link>
                        <Link
                            to="/catalog?category=casques"
                            className="border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-all duration-300 text-center rounded-sm"
                        >
                            Voir les Casques
                        </Link>
                    </div>
                </div>
            </div>

            {/* Ligne décorative or en bas du Hero */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-20" />
        </div>
    );
}