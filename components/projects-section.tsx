import { ProjectCard } from "./project-card"
import projectsData from "@/data/projects.json"

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-[130px] md:pt-[50px] space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground tracking-tight">High-Impact Projects (Prototypes)</h2>
        <p className="text-muted-foreground leading-relaxed">
          Scalable AI prototypes and projects demonstrating end-to-end AI system design, including{" "}
          <span className="text-accent font-semibold">RAG systems</span>,{" "}
          <span className="text-accent font-semibold">knowledge graphs</span>, and{" "}
          <span className="text-accent font-semibold">data engineering</span> solutions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technology_tags={project.technology_tags}
            link={project.link}
            linkType={project.linkType as "github" | "kaggle"}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
