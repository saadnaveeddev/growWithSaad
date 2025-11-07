import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Pin } from "lucide-react"
import { getPinnedBlogPosts } from "@/lib/blog-utils"

export default function Home() {
  const pinnedPosts = getPinnedBlogPosts()
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Hi, I am <span className="text-accent animate-glow">Saad Naveed</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70">Tech & Freelancing Educator</p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl animate-fade-in-up-1">
              Learn Freelancing & Tech with CCG. I share practical insights on building a sustainable freelance career
              and mastering modern technologies.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up-2">
              <Link
                href="/story"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                Read My Story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-muted/50 font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Pinned Articles */}
        {pinnedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Pin className="w-5 h-5 text-accent" />
                <h2 className="text-3xl font-bold animate-fade-in-up">Pinned Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {pinnedPosts.slice(0, 2).map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className={`group p-6 rounded-lg border border-accent/30 bg-accent/5 hover:border-accent hover:bg-accent/10 transition-all hover:shadow-lg hover:scale-[1.02] animate-fade-in-up${index === 1 ? '-1' : ''}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent font-medium">
                          {post.category}
                        </span>
                        <Pin className="w-3 h-3 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {post.content.split('\n\n')[0].replace(/^#+\s*/, '').substring(0, 120)}...
                      </p>
                      <p className="text-xs text-foreground/40 pt-2">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Content Preview */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">Latest Content</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Featured Blog Card 1 */}
                <Link
                  href="/blogs"
                  className="group p-6 rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition-all hover:shadow-lg hover:scale-[1.02] animate-fade-in-up"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium">
                        Tech Tutorial
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      Getting Started with Freelancing
                    </h3>
                    <p className="text-sm text-foreground/60">
                      Learn the fundamentals of starting your freelance career and finding your first clients.
                    </p>
                    <p className="text-xs text-foreground/40 pt-2">Dec 15, 2024</p>
                  </div>
                </Link>

                {/* Featured Blog Card 2 */}
                <Link
                  href="/blogs"
                  className="group p-6 rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition-all hover:shadow-lg hover:scale-[1.02] animate-fade-in-up-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium">
                        Freelancing Tips
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      Pricing Your Services Right
                    </h3>
                    <p className="text-sm text-foreground/60">
                      Master the art of pricing your freelance work to maximize income and attract quality clients.
                    </p>
                    <p className="text-xs text-foreground/40 pt-2">Dec 8, 2024</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="text-center animate-fade-in-up-2">
              <Link
                href="/blogs"
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors group"
              >
                View all articles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
