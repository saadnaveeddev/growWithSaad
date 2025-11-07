import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-utils"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Simple markdown to HTML conversion
  const htmlContent = post.content
    .split("\n\n")
    .map((paragraph, idx) => {
      if (paragraph.startsWith("## ")) {
        return `<h2 key=${idx} class="text-2xl font-bold mt-8 mb-4">${paragraph.replace(/^## /, "")}</h2>`
      }
      if (paragraph.startsWith("### ")) {
        return `<h3 key=${idx} class="text-xl font-semibold mt-6 mb-3">${paragraph.replace(/^### /, "")}</h3>`
      }
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((line) => line.startsWith("- "))
        return `<ul key=${idx} class="list-disc list-inside space-y-2 mb-4">${items.map((item, i) => `<li key=${i}>${item.replace(/^- /, "")}</li>`).join("")}</ul>`
      }
      return `<p key=${idx} class="text-foreground/70 leading-relaxed mb-4">${paragraph}</p>`
    })
    .join("")

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Link */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-accent hover:text-accent/80 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          {/* Header */}
          <div className="border-b border-border pb-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                {post.category}
              </span>
              <span className="text-sm text-foreground/50">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">{post.title}</h1>
            <p className="text-lg text-foreground/60">Practical insights to help you succeed in your journey.</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="space-y-6" />
          </div>

          {/* Related CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-xl font-semibold">Want to discuss this topic?</h3>
              <p className="text-foreground/60">
                Have questions or insights? Let's connect and continue the conversation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors mt-4"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
