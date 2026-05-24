import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Heart, ShoppingCart, User, ChevronDown, BookOpen } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/mockData'; // Importation du mock pour la recherche prédictive

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [predictedProducts, setPredictedProducts] = useState([]);

  const { cartCount, wishlistItems } = useCart();
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Raccourci clavier ⌘K ou Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Recherche prédictive en temps réel
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const query = searchQuery.toLowerCase();

      // Filtrer les produits correspondants
      const matchedProducts = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );

      setPredictedProducts(matchedProducts.slice(0, 3)); // Max 3 produits d'après la maquette

      // Générer des suggestions de mots clés textuels
      const keywords = new Set();
      matchedProducts.forEach(p => {
        keywords.add(p.brand);
        keywords.add(p.category);
      });
      setSuggestions(Array.from(keywords).slice(0, 4));
    } else {
      setSuggestions([]);
      setPredictedProducts([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 100);
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleSuggestionClick = (keyword) => {
    navigate(`/catalog?search=${encodeURIComponent(keyword)}`);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-gold font-bold' : 'text-gray-dark hover:text-gold';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gold shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Burger Menu (Mobile) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gold hover:bg-gray-light focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-bebas text-3xl sm:text-4xl tracking-widest text-black select-none">
              MOTO<span className="text-gold">GEAR</span><span className="text-xs font-barlow font-bold align-super ml-1 text-gold hidden sm:inline-block">ELITE</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8 font-barlow text-sm font-semibold uppercase tracking-wider">
            <Link to="/" className="transition-colors duration-200" style={{ color: location.pathname === '/' ? '#D4AF37' : '' }}>
              Accueil
            </Link>
            <div className="relative group">
              <Link to="/catalog" className="flex items-center space-x-1 transition-colors duration-200">
                <span>Équipement Pilote</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-0 mt-0 w-52 bg-white border border-customBorder rounded-md shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/catalog?category=casques" className="block px-4 py-3 text-xs text-black hover:bg-gold/10 hover:text-gold transition-colors duration-150 uppercase tracking-wide">Casques</Link>
                <Link to="/catalog?category=vestes" className="block px-4 py-3 text-xs text-black hover:bg-gold/10 hover:text-gold transition-colors duration-150 uppercase tracking-wide">Vestes</Link>
                <Link to="/catalog?category=gants" className="block px-4 py-3 text-xs text-black hover:bg-gold/10 hover:text-gold transition-colors duration-150 uppercase tracking-wide">Gants</Link>
                <Link to="/catalog?category=bottes" className="block px-4 py-3 text-xs text-black hover:bg-gold/10 hover:text-gold transition-colors duration-150 uppercase tracking-wide">Bottes</Link>
              </div>
            </div>

            {/* Lien Guides & Conseils exigé par le CDC */}
            <Link to="/guides" className="flex items-center gap-1.5 transition-colors duration-200">
              <BookOpen size={15} />
              Guides & Conseils
            </Link>

            <Link to="/catalog?filter=promotions" className="text-red-600 hover:text-red-700 transition-colors duration-200 font-bold">
              Promotions %
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-black">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:text-gold rounded-full hover:bg-gray-light transition-all duration-200 hidden sm:flex items-center space-x-2 border border-customBorder bg-gray-light/50 px-3 py-1.5"
            >
              <Search className="w-4 h-4 text-gray-dark" />
              <span className="font-barlow text-xs font-medium text-gray-dark pr-4">Rechercher...</span>
              <kbd className="font-mono text-[10px] bg-white border border-customBorder rounded px-1.5 py-0.5 text-gray-dark">⌘K</kbd>
            </button>

            <button onClick={() => setSearchOpen(true)} className="p-2 hover:text-gold rounded-full hover:bg-gray-light transition-all duration-200 sm:hidden">
              <Search className="w-5 h-5" />
            </button>

            <Link to="/catalog?filter=wishlist" className="p-2 hover:text-gold rounded-full hover:bg-gray-light transition-all duration-200 relative group">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-black text-gold font-mono text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="p-2 hover:text-gold rounded-full hover:bg-gray-light transition-all duration-200 relative group">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-gold text-black font-mono text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* BOUTON ESPACE PILOTE (LOGIN / SIGN IN) MUTÉ ET ACCESSIBLE PARTOUT */}
            <Link
              to="/login"
              className="p-2 hover:text-gold rounded-full hover:bg-gray-light transition-all duration-200 flex items-center justify-center"
              title="Espace Pilote / Connexion"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* MODAL DE RECHERCHE CONFORME CAHIER DES CHARGES */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white w-full max-w-2xl rounded-sm shadow-premium border-2 border-gold p-6 relative animate-fade-in">
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-4 top-4 p-1 rounded-full text-black hover:text-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-bebas text-2xl text-black mb-4 tracking-wider uppercase">Moteur de Recherche Mégaprédictif</h3>

            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tapez une marque (Dainese, AGV...), un équipement..."
                  className="w-full bg-gray-light border border-customBorder rounded-sm py-3.5 pl-4 pr-12 text-sm font-barlow focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gold hover:text-black transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* GRILLE DES SUGGESTIONS */}
            {searchQuery.trim().length > 1 && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6 pt-4 border-t border-gray-100 font-barlow">
                {/* Suggestions textuelles à gauche */}
                <div className="md:col-span-2 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400">Suggestions de mots-clés</h4>
                  <div className="flex flex-col gap-1.5">
                    {suggestions.length > 0 ? suggestions.map((keyword, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(keyword)}
                        className="text-left text-xs font-bold text-black hover:text-gold uppercase tracking-wide py-1"
                      >
                        🔎 {keyword}
                      </button>
                    )) : <span className="text-xs text-gray-500">Aucun mot-clé</span>}
                  </div>
                </div>

                {/* Vignettes Produits à droite */}
                <div className="md:col-span-3 space-y-3 border-l border-gray-100 md:pl-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400">Équipements correspondants ({predictedProducts.length})</h4>
                  <div className="space-y-2">
                    {predictedProducts.length > 0 ? predictedProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => {
                          navigate(`/product/${product.id}`);
                          setSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-2 bg-gray-50 hover:bg-gold/10 rounded-sm cursor-pointer border border-gray-200 transition-colors"
                      >
                        <img src={product.image} alt={product.name} className="w-10 h-10 object-contain bg-white p-1 border rounded-sm" />
                        <div className="text-left">
                          <p className="text-[10px] font-bold text-gold uppercase tracking-widest">{product.brand}</p>
                          <p className="text-xs font-medium text-black line-clamp-1 uppercase tracking-tight">{product.name}</p>
                        </div>
                      </div>
                    )) : <span className="text-xs text-gray-500">Aucun produit trouvé</span>}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between text-xs text-gray-dark font-barlow border-t border-customBorder/50 pt-4">
              <span>Saisissez votre équipement et tapez "Entrée"</span>
              <span>Appuyez sur <kbd className="font-mono bg-gray-light border rounded px-1">Échap</kbd> pour fermer</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;