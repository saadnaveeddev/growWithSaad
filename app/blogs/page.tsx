import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function BlogsPage() {
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

        {/* Coming Soon Message */}
        <section className="px-8 lg:px-16 py-32 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Coming Soon</h2>
            <p className="text-lg text-foreground/60">
              I'm working on creating amazing content for you. Stay tuned for insightful articles on freelancing and tech!
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
