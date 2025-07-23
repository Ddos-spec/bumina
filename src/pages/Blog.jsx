// src/pages/Blog.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Contoh data artikel blog, nanti bisa diganti
const blogPosts = [
  {
    id: 1,
    title: "5 Tips Liburan Hemat di Pangalengan",
    excerpt: "Pangalengan gak harus mahal, kok! Ini dia tips jitu buat nikmatin liburan seru tanpa bikin kantong bolong...",
    author: "Adam Traveler",
    date: "23 Juli 2024",
    image: "/kebun_teh1.webp"
  },
  {
    id: 2,
    title: "Menikmati Sunrise di Taman Langit: Pengalaman Tak Terlupakan",
    excerpt: "Berburu matahari terbit di Taman Langit itu magis banget. Gue ceritain pengalaman gue dari awal sampai akhir.",
    author: "Adam Explorer",
    date: "21 Juli 2024",
    image: "/taman_langit1.webp"
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">
            Cerita dari Bumina Eenk
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kumpulan cerita, tips, dan panduan wisata seputar Pangalengan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300"
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-navy-800 mb-2">{post.title}</h2>
                <div className="text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span> | <span>{post.date}</span>
                </div>
                <p className="text-gray-700 mb-6">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="font-bold text-blue-600 hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;