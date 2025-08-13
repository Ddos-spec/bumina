import { NextRequest, NextResponse } from 'next/server';
import {
  readArticles,
  createArticle,
  validateArticleData,
  type CreateArticleRequest,
  type ApiResponse,
  type Article
} from '@/lib/articleHelpers';

/**
 * GET /api/articles
 * Returns all articles for N8N to read
 */
export async function GET(): Promise<NextResponse> {
  try {
    const articles = await readArticles();
    
    // Format response for N8N consumption
    const response: ApiResponse = {
      success: true,
      data: {
        articles: articles.map(article => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt,
          slug: article.slug,
          category: article.category,
          date: article.date,
          image: article.image,
          url: `/blog/${article.slug}`
        })),
        total: articles.length
      }
    };
    
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    
    const errorResponse: ApiResponse = {
      success: false,
      error: 'Failed to fetch articles',
      message: 'Internal server error occurred while fetching articles'
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * POST /api/articles
 * Creates new article from N8N data
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse request body
    let requestData: CreateArticleRequest;
    
    try {
      requestData = await request.json();
    } catch (parseError) {
      const errorResponse: ApiResponse = {
        success: false,
        error: 'Invalid JSON format',
        message: 'Request body must be valid JSON'
      };
      
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    // Validate required fields
    const validationErrors = validateArticleData(requestData);
    
    if (validationErrors.length > 0) {
      const errorResponse: ApiResponse = {
        success: false,
        error: 'Validation failed',
        message: validationErrors.join(', ')
      };
      
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    // Create new article
    const newArticle = await createArticle(requestData);
    
    // Success response for N8N
    const response: ApiResponse = {
      success: true,
      message: 'Article created successfully',
      data: {
        id: newArticle.id,
        slug: newArticle.slug,
        url: `/blog/${newArticle.slug}`,
        title: newArticle.title,
        category: newArticle.category,
        date: newArticle.date
      }
    };
    
    return NextResponse.json(response, { status: 201 });
    
  } catch (error) {
    console.error('Error creating article:', error);
    
    const errorResponse: ApiResponse = {
      success: false,
      error: 'Failed to create article',
      message: error instanceof Error ? error.message : 'Internal server error occurred'
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * PUT /api/articles
 * Update existing article (optional feature for N8N)
 */
export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const articleId = searchParams.get('id');
    
    if (!articleId) {
      const errorResponse: ApiResponse = {
        success: false,
        error: 'Missing article ID',
        message: 'Article ID is required in query parameters'
      };
      
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    const requestData = await request.json();
    const validationErrors = validateArticleData(requestData);
    
    if (validationErrors.length > 0) {
      const errorResponse: ApiResponse = {
        success: false,
        error: 'Validation failed',
        message: validationErrors.join(', ')
      };
      
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    // Read existing articles
    const articles = await readArticles();
    const articleIndex = articles.findIndex(a => a.id === parseInt(articleId));
    
    if (articleIndex === -1) {
      const errorResponse: ApiResponse = {
        success: false,
        error: 'Article not found',
        message: `Article with ID ${articleId} not found`
      };
      
      return NextResponse.json(errorResponse, { status: 404 });
    }
    
    // Update article (keep existing ID, slug, and date)
    const existingArticle = articles[articleIndex];
    const updatedArticle: Article = {
      ...existingArticle,
      title: requestData.title.trim(),
      excerpt: requestData.excerpt.trim(),
      content: requestData.content.trim(),
      category: requestData.category.trim(),
      image: requestData.image || existingArticle.image
    };
    
    articles[articleIndex] = updatedArticle;
    
    // Save updated articles
    const { writeArticles } = await import('@/lib/articleHelpers');
    await writeArticles(articles);
    
    const response: ApiResponse = {
      success: true,
      message: 'Article updated successfully',
      data: {
        id: updatedArticle.id,
        slug: updatedArticle.slug,
        url: `/blog/${updatedArticle.slug}`,
        title: updatedArticle.title,
        category: updatedArticle.category,
        date: updatedArticle.date
      }
    };
    
    return NextResponse.json(response, { status: 200 });
    
  } catch (error) {
    console.error('Error updating article:', error);
    
    const errorResponse: ApiResponse = {
      success: false,
      error: 'Failed to update article',
      message: error instanceof Error ? error.message : 'Internal server error occurred'
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * DELETE /api/articles
 * Delete article by ID (optional feature for N8N)
 */
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const articleId = searchParams.get('id');
    
    if (!articleId) {
      const errorResponse: ApiResponse = {
        success: false,
        error: 'Missing article ID',
        message: 'Article ID is required in query parameters'
      };
      
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    // Read existing articles
    const articles = await readArticles();
    const articleIndex = articles.findIndex(a => a.id === parseInt(articleId));
    
    if (articleIndex === -1) {
      const errorResponse: ApiResponse = {
        success: false,
        error: 'Article not found',
        message: `Article with ID ${articleId} not found`
      };
      
      return NextResponse.json(errorResponse, { status: 404 });
    }
    
    // Remove article
    const deletedArticle = articles[articleIndex];
    articles.splice(articleIndex, 1);
    
    // Save updated articles
    const { writeArticles } = await import('@/lib/articleHelpers');
    await writeArticles(articles);
    
    const response: ApiResponse = {
      success: true,
      message: 'Article deleted successfully',
      data: {
        id: deletedArticle.id,
        slug: deletedArticle.slug,
        title: deletedArticle.title
      }
    };
    
    return NextResponse.json(response, { status: 200 });
    
  } catch (error) {
    console.error('Error deleting article:', error);
    
    const errorResponse: ApiResponse = {
      success: false,
      error: 'Failed to delete article',
      message: error instanceof Error ? error.message : 'Internal server error occurred'
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}