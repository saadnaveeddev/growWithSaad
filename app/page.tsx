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
        <section className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: 'url(/hero-background.png)', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 90%, 90% 85%, 85% 90%, 80% 85%, 75% 90%, 70% 85%, 65% 90%, 60% 85%, 55% 90%, 50% 85%, 45% 90%, 40% 85%, 35% 90%, 30% 85%, 25% 90%, 20% 85%, 15% 90%, 10% 85%, 5% 90%, 0 85%)' }}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 w-full px-8 lg:px-16">
            <div className="max-w-xl space-y-6">
              {/* Main Heading */}
              <div className="space-y-4 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                  Hi, I am<span className="text-accent"> Saad</span>
                </h1>
                
              </div>

              {/* Tagline */}
              <p className="text-lg text-white/80 leading-relaxed animate-fade-in-up-1">
               Learn Freelancing & Tech with Saad Naveed. I share practical insights on building a sustainable freelance career
              and mastering modern technologies.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up-2">
                <Link
                  href="/story"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-all hover:scale-105 hover:shadow-lg"
                >
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 hover:bg-white/10 text-white font-medium transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pinned Articles */}
        {pinnedPosts.length > 0 && (
          <section className="px-8 lg:px-16 py-20 border-t border-border">
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
        <section className="px-8 lg:px-16 py-20 border-t border-border">
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
