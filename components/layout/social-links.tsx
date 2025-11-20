import { Github, Instagram, Linkedin } from "lucide-react"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://github.com/saadnaveeddev"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors"
      >
        <Github className="w-5 h-5" />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href="https://linkedin.com/in/saadnaveeddev"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors"
      >
        <Linkedin className="w-5 h-5" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="https://instagram.com/_growwithsaad"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors"
      >
        <Instagram className="w-5 h-5" />
        <span className="sr-only">Instagram</span>
      </a>
    </div>
  )
}