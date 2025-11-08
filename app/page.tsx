import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
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

        {/* Coming Soon Section */}
        <section className="px-8 lg:px-16 py-20 border-t border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold animate-fade-in-up">More Coming For You</h2>
            <p className="text-lg text-foreground/70 animate-fade-in-up-1">
              Stay connected for exciting content and resources!
            </p>
            <div className="animate-fade-in-up-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                Stay Connected
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
