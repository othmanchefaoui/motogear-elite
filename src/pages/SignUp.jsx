import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SignUp() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-barlow">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-black font-bebas">
                        MOTO<span className="text-[#D4AF37]">GEAR</span> ELITE
                    </h2>
                    <h2 className="mt-6 text-2xl font-bold uppercase tracking-tight text-black">
                        Rejoindre l'aventure
                    </h2>
                    <p className="mt-2 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                        Profitez d'avantages exclusifs et du suivi express
                    </p>
                </div>

                <div className="mt-8 bg-white py-8 px-4 shadow-xl border border-gray-100 rounded-sm sm:px-10">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-2">
                                Nom Complet
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User size={18} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm"
                                    placeholder="Marc Marquez"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-2">
                                Adresse Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail size={18} className="text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm"
                                    placeholder="pilote@elite.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock size={18} className="text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="p-4 bg-neutral-50 rounded-sm border border-gray-100">
                            <div className="flex items-start gap-3">
                                <ShieldCheck size={20} className="text-[#D4AF37] mt-0.5" />
                                <p className="text-[10px] text-gray-500 uppercase font-bold leading-relaxed">
                                    En créant un compte, vous acceptez nos conditions d'utilisation et notre politique de protection des données pilotes.
                                </p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-sm shadow-sm text-xs font-black uppercase tracking-widest text-[#D4AF37] bg-black hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                        >
                            Créer mon compte <ArrowRight size={16} />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs font-bold text-gray-500 uppercase">
                        Déjà membre ?{' '}
                        <Link to="/login" className="text-[#D4AF37] hover:text-black transition-colors">
                            Se connecter ici
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}