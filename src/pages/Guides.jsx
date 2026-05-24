import React from 'react';

const Guides = () => {

    // Fonction pour simuler ou déclencher l'ouverture du chatbot
    const handleLaunchChatbot = () => {
        // Si votre chatbot écoute un événement ou utilise un état global, vous pourrez l'activer ici.
        // Pour l'instant, on simule l'action de lancement.
        alert("🤖 Lancement de l'assistant virtuel MotoGear...");
    };

    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">

            {/* En-tête de la page */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-[#111111] uppercase font-['Bebas_Neue'] sm:text-5xl">
                    Guides & <span className="text-[#D4AF37]">Conseils</span>
                </h1>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
            </div>

            {/* Les Deux Compartiments conformes au Cahier des Charges */}
            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">

                {/* COMPARTIMENT 1 : GUIDE INTERACTIF (CHATBOT) */}
                <div className="bg-neutral-50 rounded-2xl border-2 border-gray-200 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 shadow-sm relative overflow-hidden group">
                    {/* Effet visuel d'arrière-plan discret */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-xl group-hover:bg-[#D4AF37]/20 transition-all"></div>

                    <div>
                        {/* Icône et Titre de section */}
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-[#111111] text-[#D4AF37] flex items-center justify-center text-xl font-bold shadow-sm">
                                🤖
                            </div>
                            <h2 className="text-2xl font-bold text-[#111111] uppercase tracking-wide">
                                Guide Interactif
                            </h2>
                        </div>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed font-medium">
                            Vous hésitez sur le choix de vos équipements ? Notre assistant virtuel intelligent vous accompagne pas à pas pour valider vos tailles, trouver le style idéal et sélectionner les meilleures protections.
                        </p>

                        {/* Liste des bénéfices du guide interactif */}
                        <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3 shadow-inner">
                            <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                                <span className="text-green-500 text-base">●</span> Diagnostic personnalisé en 2 minutes
                            </div>
                            <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                                <span className="text-[#D4AF37] text-sm">✦</span> Recommandations adaptées à votre morphologie
                            </div>
                            <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                                <span className="text-neutral-400 text-sm">✔</span> Disponible immédiatement 24h/24
                            </div>
                        </div>
                    </div>

                    {/* Bouton d'action pour lancer le chatbot */}
                    <div className="mt-8 relative z-10">
                        <button
                            onClick={handleLaunchChatbot}
                            className="w-full bg-[#111111] hover:bg-neutral-800 text-[#D4AF37] hover:text-white font-bold py-4 px-4 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 border-2 border-[#111111] hover:border-[#D4AF37]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 animate-pulse">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Lancer le chatbot
                        </button>
                    </div>
                </div>

                {/* COMPARTIMENT 2 : ARTICLES ET GUIDES (GÉNÉRAL) */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 shadow-sm">
                    <div>
                        {/* Icône et Titre de section */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#111111] text-[#D4AF37] flex items-center justify-center text-xl font-bold shadow-sm">
                                📚
                            </div>
                            <h2 className="text-2xl font-bold text-[#111111] uppercase tracking-wide">
                                Articles & Guides
                            </h2>
                        </div>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed font-medium">
                            Parcourez nos dossiers complets et fiches méthodologiques rédigés par notre équipe d'experts pour rouler en toute sécurité et entretenir vos équipements.
                        </p>

                        {/* Liste structurée d'articles */}
                        <div className="space-y-3">
                            <div className="p-3.5 border border-gray-100 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer flex justify-between items-center group">
                                <div>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Équipement</span>
                                    <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#D4AF37] transition-colors mt-0.5">Comment bien choisir son casque ?</h4>
                                </div>
                                <span className="text-gray-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all text-sm">➔</span>
                            </div>

                            <div className="p-3.5 border border-gray-100 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer flex justify-between items-center group">
                                <div>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Entretien</span>
                                    <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#D4AF37] transition-colors mt-0.5">Nettoyer et imperméabiliser son cuir</h4>
                                </div>
                                <span className="text-gray-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all text-sm">➔</span>
                            </div>

                            <div className="p-3.5 border border-gray-100 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer flex justify-between items-center group">
                                <div>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Mécanique</span>
                                    <h4 className="font-bold text-sm text-[#111111] group-hover:text-[#D4AF37] transition-colors mt-0.5">Les 5 points de contrôle avant l'hiver</h4>
                                </div>
                                <span className="text-gray-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all text-sm">➔</span>
                            </div>
                        </div>
                    </div>

                    {/* Bouton pour voir l'ensemble du catalogue d'articles */}
                    <div className="mt-8">
                        <button className="w-full bg-white hover:bg-neutral-50 text-[#111111] font-bold py-4 px-4 rounded-xl text-xs uppercase tracking-wider border-2 border-[#111111] transition-all shadow-sm">
                            Découvrir tous nos articles
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Guides;