// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialWidget from './components/SocialWidget';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    // TAMBAHIN 'basename' DI SINI AJA, BOSS
    <Router basename="/bumina"> 
      <div className="min-h-screen">
        <SocialWidget />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;