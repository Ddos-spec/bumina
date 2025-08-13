import { promises as fs } from 'fs';
import path from 'path';

// TypeScript types for article data
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

export interface CreateArticleRequest {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Path to articles.json file
const ARTICLES_FILE_PATH = path.join(process.cwd(), 'src/lib/articles.json');

/**
 * Read articles from JSON file
 * Returns empty array if file doesn't exist
 */
export async function readArticles(): Promise<Article[]> {
  try {
    const fileContent = await fs.readFile(ARTICLES_FILE_PATH, 'utf-8');
    const articles = JSON.parse(fileContent);
    return Array.isArray(articles) ? articles : [];
  } catch (error) {
    // If file doesn't exist or is malformed, return empty array
    console.log('Articles file not found or malformed, returning empty array');
    return [];
  }
}

/**
 * Write articles array to JSON file
 * Creates directory if it doesn't exist
 */
export async function writeArticles(articles: Article[]): Promise<void> {
  try {
    // Ensure directory exists
    const dir = path.dirname(ARTICLES_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });
    
    // Write articles to file with proper formatting
    await fs.writeFile(
      ARTICLES_FILE_PATH, 
      JSON.stringify(articles, null, 2), 
      'utf-8'
    );
  } catch (error) {
    console.error('Error writing articles file:', error);
    throw new Error('Failed to save articles');
  }
}

/**
 * Generate URL-friendly slug from title
 * Handles special characters and ensures uniqueness
 */
export function generateSlug(title: string, existingArticles: Article[] = []): string {
  // Convert to lowercase and replace spaces/special chars with hyphens
  let baseSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

  // Ensure slug is not empty
  if (!baseSlug) {
    baseSlug = 'article';
  }

  // Check for uniqueness and add number suffix if needed
  let slug = baseSlug;
  let counter = 1;
  
  while (existingArticles.some(article => article.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}

/**
 * Generate unique ID for new article
 * Returns highest existing ID + 1
 */
export function generateId(existingArticles: Article[]): number {
  if (existingArticles.length === 0) {
    return 1;
  }
  
  const maxId = Math.max(...existingArticles.map(article => article.id));
  return maxId + 1;
}

/**
 * Validate article data from request
 * Returns validation errors if any
 */
export function validateArticleData(data: any): string[] {
  const errors: string[] = [];
  
  if (!data.title || typeof data.title !== 'string' || data.title.trim().length === 0) {
    errors.push('Title is required and must be a non-empty string');
  }
  
  if (!data.excerpt || typeof data.excerpt !== 'string' || data.excerpt.trim().length === 0) {
    errors.push('Excerpt is required and must be a non-empty string');
  }
  
  if (!data.content || typeof data.content !== 'string' || data.content.trim().length === 0) {
    errors.push('Content is required and must be a non-empty string');
  }
  
  if (!data.category || typeof data.category !== 'string' || data.category.trim().length === 0) {
    errors.push('Category is required and must be a non-empty string');
  }
  
  if (data.image && typeof data.image !== 'string') {
    errors.push('Image must be a string URL');
  }
  
  return errors;
}

/**
 * Create new article from request data
 * Handles all auto-generation (ID, slug, date)
 */
export async function createArticle(requestData: CreateArticleRequest): Promise<Article> {
  const existingArticles = await readArticles();
  
  // Generate auto fields
  const id = generateId(existingArticles);
  const slug = generateSlug(requestData.title, existingArticles);
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  // Create new article object
  const newArticle: Article = {
    id,
    title: requestData.title.trim(),
    excerpt: requestData.excerpt.trim(),
    content: requestData.content.trim(),
    category: requestData.category.trim(),
    date,
    slug,
    image: requestData.image || `https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg`
  };
  
  // Add to existing articles and save
  const updatedArticles = [...existingArticles, newArticle];
  await writeArticles(updatedArticles);
  
  return newArticle;
}

/**
 * Get article by slug
 * Returns null if not found
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await readArticles();
  return articles.find(article => article.slug === slug) || null;
}

/**
 * Get all articles sorted by date (newest first)
 */
export async function getAllArticles(): Promise<Article[]> {
  const articles = await readArticles();
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}