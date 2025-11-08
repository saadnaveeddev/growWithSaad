import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const timelineEvents = [
  {
    year: "2020",
    title: "First AI Freelancing Project",
    description:
      "Took on my first freelancing project in Artificial Intelligence, marking the beginning of my journey in tech and discovering my passion for AI/ML.",
  },
  {
    year: "2022",
    title: "AI/ML Engineer at PMS Solutions",
    description:
      "Started my career as an AI/ML Engineer at PMS Solutions, diving deep into machine learning and data analytics while pursuing my degree.",
  },
  {
    year: "2023",
    title: "Data Analyst at KAZ Technologies",
    description:
      "Advanced to a Data Analyst role at KAZ Technologies, expanding my expertise in data analysis and business intelligence solutions.",
  },
  {
    year: "2024",
    title: "Bachelor's in Data Science",
    description:
      "Earned my Bachelor's degree in Data Science, solidifying my foundation in data analytics and machine learning.",
  },
  {
    year: "2025",
    title: "Tech Lead at Pangea Global Enterprises",
    description:
      "Promoted to Tech Lead at Pangea Global Enterprises, leading technical teams and driving innovation in AI/ML projects.",
  },
  {
    year: "2025",
    title: "Left Corporate & Founded GrowWithSaad",
    description:
      "After 9 months as Tech Lead, decided to leave the corporate race to pursue full-time freelancing and build my own startup. Created GrowWithSaad with the belief that if I am learning, others should too.",
  },
]

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">My Story</h1>
            <p className="text-lg text-foreground/60">From learning to earning: The journey that led to creating GrowWithSaad</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border max-w-4xl mx-auto">
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p>
              My journey into AI, freelancing, and tech education has been an exciting adventure from corporate success to entrepreneurial freedom.
            </p>
            <p>
              Starting with my first AI freelancing project in 2020, I discovered my passion for artificial intelligence and machine learning. This led me through various roles in the corporate world, from AI/ML Engineer to Tech Lead.
            </p>
            <p>
              But the entrepreneurial spirit called, and I realized that if I'm learning and growing, others should have the same opportunity. That's what drove me to leave the corporate race and create GrowWithSaad—a platform where I share coding and freelancing knowledge to help beginners grow in tech.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
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

        {/* Coming Soon Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">More Coming Soon</h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              I'm working on exciting content and resources to help you grow in tech and freelancing. Stay connected for updates!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors"
            >
              Stay Connected
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
