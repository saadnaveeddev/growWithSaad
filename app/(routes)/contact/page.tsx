import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SocialLinks } from "@/components/layout/social-links"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-border">
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <Mail className="w-8 h-8 mx-auto text-accent" />
                  <h3 className="font-semibold">Email Me</h3>
                  <p className="text-sm text-foreground/60">
                    Quick response guaranteed
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <MapPin className="w-8 h-8 mx-auto text-accent" />
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-foreground/60">
                    Pakistan (PKT)
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <Clock className="w-8 h-8 mx-auto text-accent" />
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-sm text-foreground/60">
                    Within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <ContactForm />
        </section>

        {/* Social Links */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Connect With Me</h2>
            <p className="text-foreground/60">
              Follow my journey and connect on social media
            </p>
            <SocialLinks className="justify-center" />
          </div>
        </section>

        {/* Additional Info */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Let's Build Something Amazing Together</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Whether you're looking for freelance services, want to collaborate on a project, 
              or just have questions about tech and freelancing, I'm here to help.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}