import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technology_tags: string[]
  link: string
  linkType: "github" | "kaggle" | "website"
  index: number
  status?: string
  buttonText?: string
}

export function ProjectCard({ title, description, technology_tags, link, linkType, index, status, buttonText }: ProjectCardProps) {
  return (
    <Card className="group border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 animate-fade-in relative" style={{ animationDelay: `${index * 0.1}s` }}>
      {status === "under-construction" && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2 py-1 text-xs font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full">
            Under Construction
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-accent transition-colors">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technology_tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <Button asChild size="lg" className="gap-2 group-hover:shadow-md transition-shadow min-h-[44px]">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {buttonText || (linkType === "github" ? "View Code (GitHub)" : linkType === "kaggle" ? "View Project (Kaggle)" : "Visit Website")}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
