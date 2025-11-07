import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const timelineEvents = [
  {
    year: "2015",
    title: "Started Learning Web Development",
    description:
      "Discovered my passion for web development through online courses and tutorials. Built my first website and fell in love with creating digital experiences.",
  },
  {
    year: "2016",
    title: "First Freelance Projects",
    description:
      "Took on my first freelance projects while learning. Realized that freelancing could be a viable career path with the right approach and dedication.",
  },
  {
    year: "2018",
    title: "Full-Time Freelancing",
    description:
      "Made the leap to full-time freelancing. It was challenging at first, but building a consistent client base made all the difference.",
  },
  {
    year: "2020",
    title: "Started Creating Content",
    description:
      "Began sharing my knowledge through blog posts and tutorials. Realized that teaching others accelerated my own learning and opened new opportunities.",
  },
  {
    year: "2022",
    title: "Founded CCG",
    description:
      "Created CCG as a platform to help aspiring freelancers and tech enthusiasts build sustainable careers. It became my mission to share what I learned.",
  },
  {
    year: "2024",
    title: "Helping Thousands",
    description:
      "Today, CCG helps thousands of people learn freelancing, tech, and business skills. The journey continues, and the best is yet to come.",
  },
]

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">My Story</h1>
            <p className="text-lg text-foreground/60">From learning to earning: The journey that led to creating CCG</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p>
              My journey into freelancing and tech education wasn't a straight path. It was filled with experiments,
              failures, and valuable lessons that shaped who I am today.
            </p>
            <p>
              I started as someone who was curious about web development, just like many of you. I didn't have a
              Computer Science degree or come from a tech family. I learned through determination, practice, and a
              genuine passion for creating things.
            </p>
            <p>
              Over the years, I've gone from struggling to find my first clients to building a thriving freelance
              career. More importantly, I've learned what actually works and what doesn't—and I'm excited to share that
              with you.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-12">My Journey</h2>

          <div className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot and line */}
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent border-4 border-background dark:border-background"></div>
                {idx < timelineEvents.length - 1 && (
                  <div className="absolute left-2 top-8 w-0.5 h-24 bg-border -ml-0.5"></div>
                )}

                {/* Content */}
                <div className="ml-10">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-accent">{event.year}</span>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Lessons */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Key Lessons</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Start Before You're Ready</h3>
              <p className="text-foreground/60">
                You don't need to be perfect to start. Your first clients don't expect perfection—they expect
                reliability and growth.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Build Relationships</h3>
              <p className="text-foreground/60">
                Success in freelancing is about relationships. Treat clients well, deliver quality work, and they'll
                keep coming back.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Learn Continuously</h3>
              <p className="text-foreground/60">
                The tech industry evolves constantly. Dedicate time to learning new skills, tools, and methodologies
                regularly.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Give Back</h3>
              <p className="text-foreground/60">
                Share what you've learned with others. Teaching reinforces your own knowledge and creates meaningful
                impact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Whether you're just starting or looking to level up your freelancing and tech skills, I'm here to help.
              Let's connect and explore how I can support your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
