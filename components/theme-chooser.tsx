"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Monitor } from "lucide-react"

export function ThemeChooser() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-choice")
    if (!savedTheme) {
      setIsOpen(true)
      setTimeout(() => setIsVisible(true), 100)
    }
  }, [])

  const handleThemeChoice = (chosenTheme: string) => {
    setTheme(chosenTheme)
    localStorage.setItem("theme-choice", "true")
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-background p-8 rounded-lg shadow-lg max-w-md w-full mx-4 transform transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <h2 className="text-2xl font-bold mb-4 text-center">Choose Your Theme</h2>
        <p className="text-muted-foreground mb-6 text-center">
          Select your preferred theme for the best experience.
        </p>
        <div className="space-y-4">
          <Button
            onClick={() => handleThemeChoice("light")}
            className="w-full gap-2 justify-start hover:scale-105 transition-transform"
            variant="outline"
          >
            <Sun className="w-5 h-5" />
            Light Mode
          </Button>
          <Button
            onClick={() => handleThemeChoice("dark")}
            className="w-full gap-2 justify-start hover:scale-105 transition-transform"
            variant="outline"
          >
            <Moon className="w-5 h-5" />
            Dark Mode
          </Button>
          <Button
            onClick={() => handleThemeChoice("system")}
            className="w-full gap-2 justify-start hover:scale-105 transition-transform"
            variant="outline"
          >
            <Monitor className="w-5 h-5" />
            System Default
          </Button>
        </div>
      </div>
    </div>
  )
}
