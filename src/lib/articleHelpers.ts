import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Article type (no id). Content is HTML string rendered from Markdown.
export interface Article {
  title: string;
  excerpt: string;
  content: string; // HTML string
  category: string;
  date: string; // YYYY-MM-DD
  slug: string; // derived from filename
  image: string;
}

// Directory for local markdown collection
// Directory for local markdown collection
const POSTS_DIR = path.join(process.cwd(), 'src', '_posts');

// Ensure required frontmatter exists
function assertFrontmatter(data: any, slug: string) {
  const required = ['title', 'date', 'category', 'excerpt', 'image'];
  const missing = required.filter((k) => !data?.[k]);
  if (missing.length) {
    throw new Error(`Missing frontmatter fields [${missing.join(', ')}] in ${slug}.md`);
  }
}

async function listPostFilenames(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files.filter((f) => f.endsWith('.md'));
  } catch (e) {
    // if directory not exist, return empty list
    return [];
  }
}

function filenameToSlug(filename: string): string {
  return filename.replace(/\.md$/i, '');
}

async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

export async function getAllArticles(): Promise<Article[]> {
  const files = await listPostFilenames();
  const posts: Article[] = [];

  for (const filename of files) {
    const slug = filenameToSlug(filename);
    const fullPath = path.join(POSTS_DIR, filename);
    const raw = await fs.readFile(fullPath, 'utf-8');
    const { data, content } = matter(raw);
    assertFrontmatter(data, slug);

    posts.push({
      title: String(data.title),
      excerpt: String(data.excerpt),
      // For list page we do not need full HTML. Keep raw content rendered lightly (or empty). Render on detail only to save work.
      content: '',
      category: String(data.category),
      date: String(data.date),
      slug,
      image: String(data.image),
    });
  }

  // Sort by date desc
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filepath = path.join(POSTS_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(filepath, 'utf-8');
    const { data, content } = matter(raw);
    assertFrontmatter(data, slug);
    const html = await markdownToHtml(content);

    return {
      title: String(data.title),
      excerpt: String(data.excerpt),
      content: html,
      category: String(data.category),
      date: String(data.date),
      slug,
      image: String(data.image),
    };
  } catch (e) {
    return null;
  }
}