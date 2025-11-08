import Link from "next/link"
import { Github, Linkedin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/story", label: "My Story" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4">
              <a href="https://instagram.com/_growwithsaad" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/saadnaveeddev" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/chaudharysaad.naveed" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/saadnaveeddev" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-foreground/50">© {currentYear} Saad Naveed – GrowWithSaad</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
