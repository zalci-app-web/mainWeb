import { Mail } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight text-foreground">
          Zalci
        </a>
        <nav className="flex items-center gap-4">

          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
