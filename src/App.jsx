import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importation du Contexte Global
import { CartProvider } from './context/CartContext';

// Importation des Composants Structuraux (Layout)
import Navbar from './components/common/Navbar';
import Reassurance from './components/common/Reassurance';
import Footer from './components/common/Footer';
import ChatbotBubble from './components/common/ChatbotBubble';

// Importation des Pages de l'application
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Guides from './pages/Guides';
import Login from './pages/Login';      // Nouvelle page importée
import SignUp from './pages/SignUp';    // Nouvelle page importée

// Composant interne pour gérer intelligemment l'affichage des éléments globaux (Navbar, Footer, Chatbot...)
function AppContent() {
  const location = useLocation();

  // Liste des chemins où la Navbar et le Footer doivent être Masqués pour une immersion totale
  const hideLayoutPaths = ['/login', '/signup'];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname.toLowerCase());

  if (shouldHideLayout) {
    return (
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    );
  }

  return (
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
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </main>

      {/* Bulle Flottante Or présente sur toutes les pages classiques */}
      <ChatbotBubble />

      {/* Bandeau de réassurance et Pied de page */}
      <Reassurance />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}