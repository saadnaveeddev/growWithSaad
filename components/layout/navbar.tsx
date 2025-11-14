import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">
            GrowWithSaad
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/story" className="text-foreground/60 hover:text-foreground transition-colors">
              Story
            </Link>
            <Link href="/blogs" className="text-foreground/60 hover:text-foreground transition-colors">
              Blogs
            </Link>
            <Link href="/contact">
              <Button variant="default" size="sm">
                Contact
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link href="/contact">
              <Button variant="default" size="sm">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}