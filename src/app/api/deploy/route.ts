import { NextRequest, NextResponse } from 'next/server';
import { type ApiResponse } from '@/lib/articleHelpers';

interface DeployRequest {
  action: string;
  article_id?: number;
  project?: string;
  trigger_type?: 'article_created' | 'article_updated' | 'article_deleted' | 'manual';
  metadata?: Record<string, any>;
}

/**
 * POST /api/deploy
 * Webhook endpoint for N8N to trigger additional actions after article operations
 * This can be used for notifications, logging, cache clearing, etc.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    let requestData: DeployRequest;
    
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
    if (!requestData.action) {
      const errorResponse: ApiResponse = {
        success: false,
        error: 'Missing action',
        message: 'Action field is required'
      };
      
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    // Log the deploy trigger for monitoring
    console.log('Deploy webhook triggered:', {
      action: requestData.action,
      article_id: requestData.article_id,
      project: requestData.project,
      trigger_type: requestData.trigger_type,
      timestamp: new Date().toISOString(),
      metadata: requestData.metadata
    });
    
    // Handle different action types
    switch (requestData.action) {
      case 'article_created':
        await handleArticleCreated(requestData);
        break;
        
      case 'article_updated':
        await handleArticleUpdated(requestData);
        break;
        
      case 'article_deleted':
        await handleArticleDeleted(requestData);
        break;
        
      case 'cache_clear':
        await handleCacheClear(requestData);
        break;
        
      case 'site_rebuild':
        await handleSiteRebuild(requestData);
        break;
        
      default:
        console.log(`Unknown action: ${requestData.action}`);
    }
    
    const response: ApiResponse = {
      success: true,
      message: `Deploy action '${requestData.action}' processed successfully`,
      data: {
        action: requestData.action,
        processed_at: new Date().toISOString(),
        article_id: requestData.article_id,
        project: requestData.project || 'bumina'
      }
    };
    
    return NextResponse.json(response, { status: 200 });
    
  } catch (error) {
    console.error('Error processing deploy webhook:', error);
    
    const errorResponse: ApiResponse = {
      success: false,
      error: 'Deploy processing failed',
      message: error instanceof Error ? error.message : 'Internal server error occurred'
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * GET /api/deploy
 * Health check endpoint for N8N to verify webhook is working
 */
export async function GET(): Promise<NextResponse> {
  const response: ApiResponse = {
    success: true,
    message: 'Deploy webhook endpoint is active',
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      available_actions: [
        'article_created',
        'article_updated', 
        'article_deleted',
        'cache_clear',
        'site_rebuild'
      ]
    }
  };
  
  return NextResponse.json(response, { status: 200 });
}

// Helper functions for different deploy actions

async function handleArticleCreated(data: DeployRequest): Promise<void> {
  console.log(`Article created: ID ${data.article_id}`);
  
  // Here you can add logic for:
  // - Send notification to admin
  // - Update search index
  // - Clear cache
  // - Trigger social media posting
  // - Send to analytics
  
  // Example: You could call external APIs here
  // await notifyAdmin(`New article created: ${data.article_id}`);
  // await updateSearchIndex(data.article_id);
}

async function handleArticleUpdated(data: DeployRequest): Promise<void> {
  console.log(`Article updated: ID ${data.article_id}`);
  
  // Handle article update logic
  // - Clear specific cache entries
  // - Update search index
  // - Notify subscribers of changes
}

async function handleArticleDeleted(data: DeployRequest): Promise<void> {
  console.log(`Article deleted: ID ${data.article_id}`);
  
  // Handle article deletion logic
  // - Remove from search index
  // - Clear cache
  // - Update sitemap
  // - Handle redirects
}

async function handleCacheClear(data: DeployRequest): Promise<void> {
  console.log('Cache clear requested');
  
  // Handle cache clearing logic
  // - Clear CDN cache
  // - Clear application cache
  // - Invalidate specific cache keys
}

async function handleSiteRebuild(data: DeployRequest): Promise<void> {
  console.log('Site rebuild requested');
  
  // Handle site rebuild logic
  // - Trigger static site regeneration
  // - Update sitemap
  // - Rebuild search index
  // - Notify monitoring systems
}

// Optional: Add authentication for webhook security
function validateWebhookAuth(request: NextRequest): boolean {
  // You can add webhook authentication here
  // const authHeader = request.headers.get('authorization');
  // const webhookSecret = process.env.WEBHOOK_SECRET;
  // return authHeader === `Bearer ${webhookSecret}`;
  
  // For now, return true (no auth)
  return true;
}