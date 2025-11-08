"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"
import { submitContactForm, type ContactFormData } from "@/lib/contact-api"

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const result = await submitContactForm(formState as ContactFormData)
    
    if (result.success) {
      setSubmitStatus("success")
      setFormState({ name: "", email: "", message: "" })
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } else {
      setSubmitStatus("error")
    }
    
    setIsSubmitting(false)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-lg text-foreground/60">
              Have a question or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    Email
                  </h3>
                  <a
                    href="mailto:hello@growwithsaad.com"
                    className="text-foreground/70 hover:text-accent transition-colors break-all"
                  >
                    hello@growwithsaad.com
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Social</h3>
                  <div className="space-y-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors group"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors group"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="pt-8 border-t border-border">
                  <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/blogs" className="block text-foreground/70 hover:text-accent transition-colors">
                      Read Articles
                    </Link>
                    <Link href="/story" className="block text-foreground/70 hover:text-accent transition-colors">
                      My Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-foreground/40"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-foreground/40"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-foreground/40 resize-none"
                    placeholder="Tell me what's on your mind..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent text-accent text-sm">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-accent-foreground font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>

                <p className="text-xs text-foreground/40 text-center">I typically respond within 24-48 hours.</p>
              </form>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-border max-w-4xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
            <h2 className="text-2xl font-semibold">Prefer a Different Way?</h2>
            <p className="text-foreground/60">
              You can also reach out via email or connect with me on LinkedIn and GitHub. I'm always open to
              collaboration and discussing new opportunities.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
