import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-border">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-base sm:text-lg text-foreground/60">
              Let's connect and explore how we can work together.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Contact Form Coming Soon</h2>
            <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
              I'm working on setting up the contact form. In the meantime, feel free to reach out through other channels.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}