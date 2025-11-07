import Link from "next/link"

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

          <p className="text-sm text-foreground/50">© {currentYear} Saad Naveed – Learn Freelance with CCG</p>
        </div>
      </div>
    </footer>
  )
}
