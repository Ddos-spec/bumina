// src/lib/data.ts
// DEPRECATED: This file is kept for backward compatibility
// New articles are managed through local Markdown collection in /_posts using articleHelpers.ts

import { getAllArticles, type Article } from './articleHelpers';

// Legacy type for backward compatibility
export type BlogPost = Article;

// Dynamic function to get blog posts from JSON file
export async function getBlogPosts(): Promise<BlogPost[]> {
  return await getAllArticles();
}

// For components that still use the old static import
// This will be populated at build time
export let blogPosts: BlogPost[] = [];

// Initialize blogPosts for static components
if (typeof window === 'undefined') {
  // Server-side: load articles from JSON
  getAllArticles().then(articles => {
    blogPosts = articles;
  }).catch(error => {
    console.error('Error loading articles:', error);
    // Fallback to empty array
    blogPosts = [];
  });
}