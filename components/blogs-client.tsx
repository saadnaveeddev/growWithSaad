"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useMemo } from "react"
import type { BlogPost } from "@/lib/blog-utils"

interface BlogsClientProps {
  blogPosts: BlogPost[]
}

export function BlogsClient({ blogPosts }: BlogsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return blogPosts
    return blogPosts.filter(post => post.category === selectedCategory)
  }, [blogPosts, selectedCategory])
  
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(blogPosts.map(post => post.category))]
    return cats
  }, [blogPosts])

  return (
    <>
      {/* Categories */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-border">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                category === selectedCategory ? "bg-accent text-accent-foreground" : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block p-6 rounded-lg border border-border hover:border-accent hover:bg-muted/30 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/40">{post.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed">
                  {post.content.split('\n\n')[0].replace(/^#+\s*/, '').substring(0, 150)}...
                </p>
                <div className="flex items-center text-accent text-sm font-medium pt-2">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}