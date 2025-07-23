// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialWidget from './components/SocialWidget';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // <-- Kita buat komponen HomePage
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <SocialWidget />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            {/* Kalau nanti mau bikin halaman detail blog, tinggal tambahin di sini */}
            {/* <Route path="/blog/:id" element={<DetailBlog />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;