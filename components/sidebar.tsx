import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERTISE", href: "#expertise" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ]

  return (
    <aside className="w-full h-full bg-sidebar border-r border-sidebar-border shadow-lg">
      <div className="flex flex-col h-full p-8 lg:p-10 space-y-8">
        {/* Profile Section */}
        <div className="space-y-8 mb-12 bg-gradient-to-br from-sidebar to-sidebar/90 rounded-xl p-6 shadow-inner">
          <div className="relative mb-8">
            <div className="w-full h-32 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: "url('/Coverphoto.png')" }}>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-42 h-42 border-4 border-sidebar">
              <AvatarImage src="/professional-headshot.png" alt="IDODE DESTINY M" />
              <AvatarFallback className="text-3xl bg-primary text-primary-foreground">IM</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex items-center justify-between mb-2 mt-24">
            <h1 className="text-3xl font-bold text-sidebar-foreground tracking-tight">IDODE DESTINY M</h1>
            <ThemeToggle />
          </div>

          <div className="space-y-2">
            <p className="text-base text-muted-foreground font-medium tracking-wide">AI Value Architect</p>
            <p className="text-sm text-muted-foreground leading-relaxed">Agentic RAG Specialist</p>
            <p className="text-sm text-muted-foreground leading-relaxed">Passionate about building intelligent systems that drive real-world value through AI innovation and user-centric design.</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block py-3 px-4 text-sm font-medium tracking-wider text-muted-foreground hover:text-sidebar-foreground hover:bg-accent/10 rounded-md transition-all duration-200 scroll-smooth transform hover:scale-105"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="pt-8 border-t border-sidebar-border mt-auto bg-gradient-to-t from-sidebar-border/20 to-transparent rounded-b-xl p-4">
          <p className="text-xs text-muted-foreground">© 2025 Idode Destiny M</p>
        </div>
      </div>
    </aside>
  )
}
