import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog-utils"
import { BlogsClient } from "@/components/blogs-client"

function getAllBlogPosts() {
  const slugs = getAllBlogSlugs()
  return slugs.map(slug => {
    const post = getBlogPost(slug)
    if (!post) return null
    return post
  }).filter(Boolean)
}

export default function BlogsPage() {
  const blogPosts = getAllBlogPosts()
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

        <BlogsClient blogPosts={blogPosts} />
      </main>
      <Footer />
    </>
  )
}
