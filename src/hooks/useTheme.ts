import { useEffect, useState } from "react"

type Theme = "dark" | "light"

const getInitialTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem("portfolio-theme")
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme
  return "dark"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  return {
    theme,
    toggleTheme: () => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark")),
  }
}
