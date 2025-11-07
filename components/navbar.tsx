"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const isDarkMode = !isDark
    setIsDark(isDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/story", label: "My Story" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-foreground hover:text-accent transition-colors animate-fade-in"
          >
            CCG
          </Link>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors animate-fade-in-up-${idx + 1} ${
                  isActive(link.href) ? "text-accent" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 animate-fade-in" /> : <Moon className="w-4 h-4 animate-fade-in" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
