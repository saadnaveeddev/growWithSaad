import fs from "fs"
import path from "path"

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  content: string
  pinned?: boolean
}

const blogsDirectory = path.join(process.cwd(), "content/blogs")

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.md`)
    const content = fs.readFileSync(filePath, "utf-8")

    // Parse frontmatter
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/
    const match = content.match(frontmatterRegex)

    if (!match) return null

    const frontmatter = match[1]
    const body = content.replace(frontmatterRegex, "").trim()

    const metadata: Record<string, any> = {}
    frontmatter.split("\n").forEach((line) => {
      const colonIndex = line.indexOf(': ')
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim()
        const value = line.substring(colonIndex + 2).trim().replace(/^['"]|['"]$/g, "")
        if (key && value) {
          metadata[key] = value === 'true' ? true : value === 'false' ? false : value
        }
      }
    })

    return {
      slug,
      title: metadata.title || "",
      date: metadata.date || "",
      category: metadata.category || "",
      content: body,
      pinned: metadata.pinned === true,
    }
  } catch {
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(blogsDirectory)) {
      return []
    }
    return fs
      .readdirSync(blogsDirectory)
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""))
  } catch {
    return []
  }
}

export function getPinnedBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs()
  return slugs
    .map(slug => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null && post.pinned === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
