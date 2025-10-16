export function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      category: "Agentic AI Engineering",
      description: "Focus on Agentic Memory System",
      skills: ["Multi-Agent Systems", "Memory Architecture", "Agent Orchestration", "Autonomous Decision Making"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      category: "RAG Systems",
      description: "IBM RAG Developer Badge",
      skills: ["Retrieval-Augmented Generation", "Vector Embeddings", "Semantic Search", "Context Management"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      category: "Knowledge Graphs & Vector Embeddings",
      description: "Deep knowledge in semantic data structures",
      skills: ["Graph Databases (Neo4j)", "Entity Relationships", "Vector Stores", "Embedding Models"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      category: "Automation & Data Engineering",
      description: "Showcasing breadth of skill",
      skills: ["ETL Pipelines", "Workflow Automation", "Data Modeling", "API Development"],
    },
  ]

  return (
    <section id="expertise" className="pt-[130px] md:pt-[50px] space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
          Core Expertise: Driving Value in the AI Lifecycle
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          High-value technical specializations in <span className="text-accent font-semibold">AI engineering</span>,{" "}
          <span className="text-accent font-semibold">RAG systems</span>,{" "}
          <span className="text-accent font-semibold">knowledge graphs</span>, and{" "}
          <span className="text-accent font-semibold">data engineering</span> capable of delivering strategic impact{" "}
          in the UK job market.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 animate-fade-in">
        {expertiseAreas.map((area) => (
          <div
            key={area.category}
            className="group space-y-4 p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 bg-card hover:bg-gradient-to-br hover:from-card hover:to-accent/5 animate-fade-in"
            style={{ animationDelay: `${expertiseAreas.indexOf(area) * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {area.icon}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {area.category}
                </h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            </div>
            <ul className="space-y-2 pl-1">
              {area.skills.map((skill) => (
                <li key={skill} className="text-muted-foreground leading-relaxed flex items-start text-sm hover:text-accent transition-colors cursor-pointer">
                  <span className="text-accent mr-3 font-bold">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
