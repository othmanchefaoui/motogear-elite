import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-2 border-[#D4AF37] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Section 1 : A Propos */}
          <div className="space-y-4">
            <h3 className="text-3xl tracking-widest text-white uppercase font-bold">
              MOTO<span className="text-[#D4AF37]">GEAR</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              MotoGear est la destination ultime des motards passionnés au Maroc. Nous sélectionnons le meilleur des équipements homologués pour garantir votre sécurité et votre style sur la route.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>120 Boulevard Zerktouni, Casablanca, Maroc</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>+212 522 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>contact@motogearelite.ma</span>
              </div>
            </div>
          </div>

          {/* Section 2 : Navigation Équipement */}
          <div>
            <h4 className="text-xl tracking-wider text-[#D4AF37] mb-6 relative uppercase font-bold">
              Équipement Pilote
              <div className="absolute bottom-[-6px] left-0 w-10 h-0.5 bg-[#D4AF37]" />
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>
                <Link to="/catalog?category=casques" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 inline-block">
                  Casques Intégraux & Modulars
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=vestes" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 inline-block">
                  Vestes & Blousons Cuir/Textile
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=gants" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 inline-block">
                  Gants Racing & Touring
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=bottes" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 inline-block">
                  Bottes & Chaussures renforcées
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3 : Service Client */}
          <div>
            <h4 className="text-xl tracking-wider text-[#D4AF37] mb-6 relative uppercase font-bold">
              Service Client
              <div className="absolute bottom-[-6px] left-0 w-10 h-0.5 bg-[#D4AF37]" />
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 inline-block">
                  Foire Aux Questions (F.A.Q)
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 inline-block">
                  Livraison & Délais de retour
                </a>
              </li>
              <li>
                <a href="#warranty" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 inline-block">
                  Garanties Constructeurs
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200 inline-block">
                  Guide d'entretien des équipements
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4 : Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xl tracking-wider text-[#D4AF37] mb-6 relative uppercase font-bold">
              Newsletter MotoGear
              <div className="absolute bottom-[-6px] left-0 w-10 h-0.5 bg-[#D4AF37]" />
            </h4>
            <p className="text-sm text-gray-400 font-light">
              Abonnez-vous pour recevoir nos offres privées exclusives et nos guides de sécurité.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email..."
                  required
                  className="w-full bg-gray-900 border border-gray-800 focus:border-[#D4AF37] py-2.5 pl-4 pr-10 rounded-sm text-white text-sm focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-white transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-[#D4AF37] font-medium animate-fade-in">
                  ✓ Merci pour votre inscription !
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-light">
            &copy; {new Date().getFullYear()} MotoGear. Tous droits réservés. Développé au Maroc pour les motards exigeants.
          </p>

          {/* Méthodes de paiement & Sécurité */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-2 text-xs text-gray-500 font-light">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Paiement Sécurisé SSL</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500 font-light">
              <CreditCard className="w-4 h-4 text-[#D4AF37]" />
              <span>CIH / CMI / Cash on Delivery</span>
            </div>

            {/* Remplacement des icônes réseaux sociaux par du texte stylisé de secours */}
            <div className="flex items-center space-x-4 text-xs font-black tracking-widest text-gray-500 sm:ml-2 sm:border-l sm:border-gray-900 sm:pl-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                FB
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                IG
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                YT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;