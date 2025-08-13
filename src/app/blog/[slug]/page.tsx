import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug, type Article } from "@/lib/articleHelpers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadataObject, SchemaOrg } from "@/lib/seo";
import { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((post: Article) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getArticleBySlug(params.slug);
  
  if (!post) {
    return generateMetadataObject({ title: "Artikel Tidak Ditemukan" });
  }

  return generateMetadataObject({
    title: post.title,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
    image: post.image, // Menggunakan gambar spesifik artikel untuk social sharing
  });
}

export default async function BlogPostDetail({ params }: PageProps) {
  const { slug } = params;
  const post = await getArticleBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Menyuntikkan Schema Artikel untuk Rich Snippets di Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaOrg.article(post)) }}
      />
      <Header />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <header className="mb-8 text-center border-b pb-8">
              <div className="w-full h-64 relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base text-gray-500 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {post.title}
              </h1>
            </header>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="lead text-xl mb-6">{post.excerpt}</p>
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}