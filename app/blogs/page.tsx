import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog-utils"

export default function BlogsPage() {
  const slugs = getAllBlogSlugs()
  const posts = slugs
    .map(slug => getBlogPost(slug))
    .filter(post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Articles & Insights</h1>
            <p className="text-lg text-foreground/60">
              Practical insights on freelancing, tech, and building a sustainable career.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {posts.length > 0 && (
            <div className="space-y-12">
              <div className="grid gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group p-6 rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition-all hover:shadow-lg"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-foreground/40">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground/60">
                        {post.content.split('\n\n')[0].replace(/^#+\s*/, '').substring(0, 150)}...
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* More Coming Soon */}
              <div className="text-center py-16 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">More Coming Soon</h2>
                <p className="text-foreground/60 mb-6">
                  I'm working on more insightful articles about freelancing and tech. Stay connected for updates!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors"
                >
                  Stay Connected
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
