import { notFound } from "next/navigation";
import { blogPosts, type BlogPost } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Ini adalah cara standar dan paling benar untuk mendefinisikan props halaman
type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

// Fungsi metadata ini TIDAK PERLU async karena tidak mengambil data dari luar
export function generateMetadata({ params }: PageProps) {
  const post = blogPosts.find((p: BlogPost) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: `${post.title} - Raja Freeze Dried Food`,
    description: post.excerpt,
  };
}

// Ini adalah komponen halaman standar, TIDAK PERLU async
export default function BlogPostDetail({ params }: PageProps) {
  const { slug } = params;
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <header className="mb-8 text-center border-b pb-8">
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
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
              <p className="lead text-xl mb-6">{post.excerpt}</p>
              <p>{post.content}</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}