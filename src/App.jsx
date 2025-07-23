import { Routes, Route } from 'react-router-dom'
import SocialWidget from './components/SocialWidget'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage' // Pastikan nama file HomePage.jsx
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SocialWidget />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App