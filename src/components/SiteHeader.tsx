import { FiArrowUpRight, FiMoon, FiSun } from "react-icons/fi"
import { profile } from "../data/portfolio"

type SiteHeaderProps = {
  theme: "dark" | "light"
  onToggleTheme: () => void
}

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
]

export default function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          <span className="brand-mark">JL</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <a className="header-cta" href="#contact">
            Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
