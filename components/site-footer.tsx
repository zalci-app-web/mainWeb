export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>{'© 2026 Zalci'}</p>
        <p className="text-xs">
          Built with Next.js & Vercel
        </p>
      </div>
    </footer>
  )
}
