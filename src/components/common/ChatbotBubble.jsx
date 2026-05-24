import React, { useState } from 'react';

const ChatbotBubble = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">

            {/* Bulle d'accroche (visible uniquement si le chat est fermé) */}
            {!isOpen && (
                <div className="mb-3 bg-white text-gray-900 text-xs sm:text-sm py-2 px-4 rounded-xl shadow-xl border border-gray-100 animate-bounce hidden md:block">
                    Besoin d'aide ? <span className="font-bold text-[#D4AF37]">MotoGear Bot</span> est là !
                </div>
            )}

            {/* Fenêtre de discussion simulée (s'ouvre au clic) */}
            {isOpen && (
                <div className="w-80 sm:w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden transform transition-all duration-300 scale-100 origin-bottom-right">

                    {/* En-tête de la fenêtre */}
                    <div className="bg-[#111111] text-white p-4 flex justify-between items-center border-b-2 border-[#D4AF37]">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-xs">
                                    🤖
                                </div>
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm tracking-wide">Assistant MotoGear</h4>
                                <p className="text-[11px] text-gray-400">En ligne • Répond instantanément</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg text-xl"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Zone de messages */}
                    <div className="flex-1 p-4 bg-gray-50 space-y-3 overflow-y-auto flex flex-col">
                        {/* Message du Bot */}
                        <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm max-w-[85%] border border-gray-100 text-sm text-gray-800 leading-relaxed">
                            Bonjour ! Bienvenue chez MotoGear Elite. Je peux vous guider dans le choix de votre casque ou vérifier l'état de votre commande. Que cherchez-vous aujourd'hui ? 🏍️
                        </div>
                    </div>

                    {/* Zone de saisie d'un message */}
                    <div className="p-3 border-t border-gray-100 flex gap-2 bg-white">
                        <input
                            type="text"
                            placeholder="Posez votre question ici..."
                            className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                        <button className="bg-[#D4AF37] hover:bg-[#B8960F] text-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
                            Envoyer
                        </button>
                    </div>
                </div>
            )}

            {/* Le Bouton de la Bulle Flottante */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-14 h-14 bg-[#111111] hover:bg-neutral-800 text-[#D4AF37] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
                aria-label="Ouvrir le chat d'assistance"
            >
                {/* L'icône change dynamiquement (Croix si le chat est ouvert, Robot émoji si fermé) */}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <span className="text-2xl select-none leading-none">🤖</span>
                )}
            </button>
        </div>
    );
};

export default ChatbotBubble;