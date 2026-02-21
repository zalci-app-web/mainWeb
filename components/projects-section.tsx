import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Spoit and Bucket",
    description: "制作中のパズルアクションゲーム",
    tech: "Unity",
    href: "#",
  },
  {
    title: "AI Prompt Generator",
    description: "AIモデル用プロンプト構築Webツール",
    tech: "Web",
    href: "#",
  },
  {
    title: "XFileChanger",
    description: "3DモデルからDirectX Xファイルへの変換ユーティリティ",
    tech: "C++",
    href: "#",
  },
]

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Selected Works
      </h2>
      <div className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-secondary/50"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <h3 className="text-base font-medium text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground sm:inline-block">
                {project.tech}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
