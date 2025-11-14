import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-utils"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
          <div className="space-y-6">
            <Link
              href="/blogs"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm px-3 py-1 rounded bg-accent/10 text-accent font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-foreground/60">{post.date}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('# ', '')}
                    </h1>
                  )
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}