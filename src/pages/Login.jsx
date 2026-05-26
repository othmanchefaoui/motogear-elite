import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de connexion ici
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-barlow">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-black font-bebas">
                        MOTO<span className="text-[#D4AF37]">GEAR</span>
                    </h2>
                    <h2 className="mt-6 text-2xl font-bold uppercase tracking-tight text-black">
                        Bon retour parmi nous
                    </h2>
                    <p className="mt-2 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                        Accédez à votre espace membre premium
                    </p>
                </div>

                <div className="mt-8 bg-white py-8 px-4 shadow-xl border border-gray-100 rounded-sm sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-sm leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm transition-all"
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
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-sm leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 text-black focus:ring-[#D4AF37] border-gray-300 rounded-sm" />
                                <label className="ml-2 block text-xs font-semibold text-gray-600 uppercase">
                                    Se souvenir
                                </label>
                            </div>
                            <div className="text-xs">
                                <a href="#" className="font-bold text-[#D4AF37] hover:text-black uppercase">
                                    Oublié ?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-sm shadow-sm text-xs font-black uppercase tracking-widest text-[#D4AF37] bg-black hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg"
                        >
                            Connexion <ArrowRight size={16} />
                        </button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase font-bold">
                                <span className="px-2 bg-white text-gray-400">Nouveau ici ?</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                to="/signup"
                                className="w-full flex justify-center py-4 px-4 border-2 border-black rounded-sm shadow-sm text-xs font-black uppercase tracking-widest text-black bg-white hover:bg-gray-50 transition-all duration-300"
                            >
                                Créer un compte pilote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}