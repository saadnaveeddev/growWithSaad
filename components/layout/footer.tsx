import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">GrowWithSaad</h3>
            <p className="text-sm text-foreground/60">
              Learn freelancing and tech with practical insights for building a sustainable career.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-foreground/60 hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/story" className="block text-sm text-foreground/60 hover:text-foreground transition-colors">
                Story
              </Link>
              <Link href="/blogs" className="block text-sm text-foreground/60 hover:text-foreground transition-colors">
                Blogs
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="space-y-2">
              <span className="block text-sm text-foreground/60">Freelancing Tips</span>
              <span className="block text-sm text-foreground/60">Tech Tutorials</span>
              <span className="block text-sm text-foreground/60">Career Growth</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="space-y-2">
              <Link href="/contact" className="block text-sm text-foreground/60 hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            © 2024 GrowWithSaad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}