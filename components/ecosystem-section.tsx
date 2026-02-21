import { BookOpen, Gamepad2, Music, ExternalLink, ArrowUpRight } from "lucide-react"

const ecosystemItems = [
  {
    title: "Research Lab",
    subtitle: "ブログ",
    description: "技術検証、アルゴリズム、開発ログを集約するサイト。",
    icon: BookOpen,
    href: "#",
    external: false,
  },
  {
    title: "Playable Showcase",
    subtitle: "ゲーム",
    description: "ブラウザで直接遊べるUnity WebGLの展示スペース。",
    icon: Gamepad2,
    href: "#",
    external: false,
  },
  {
    title: "Zalci Audio",
    subtitle: "Music Store",
    description: "AI生成音楽・効果音アセットストア。",
    icon: Music,
    href: "#",
    external: true,
  },
]

export function EcosystemSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Ecosystem
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {ecosystemItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              {item.external ? (
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </div>
            <h3 className="text-base font-semibold text-foreground">
              {item.title}
            </h3>
            <span className="mt-0.5 text-xs font-medium text-primary">
              {item.subtitle}
            </span>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
