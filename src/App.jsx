import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation du Contexte Global
import { CartProvider } from './context/CartContext';

// Importation des Composants Structuraux (Layout)
import Navbar from './components/common/Navbar';
import Reassurance from './components/common/Reassurance';
import Footer from './components/common/Footer';
import ChatbotBubble from './components/common/ChatbotBubble'; // La nouvelle bulle flottante or CDC

// Importation des Pages de l'application
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Guides from './pages/Guides'; // La nouvelle page de guides CDC

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          {/* Barre de navigation supérieure fixe */}
          <Navbar />

          {/* Zone d'affichage dynamique des pages selon l'URL */}
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/guides" element={<Guides />} /> {/* Ajout de la route vers les guides */}
            </Routes>
          </main>

          {/* Bulle Flottante Or présente sur toutes les pages */}
          <ChatbotBubble />

          {/* Bandeau de réassurance et Pied de page */}
          <Reassurance />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}