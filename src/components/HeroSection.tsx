import { motion, useReducedMotion } from "framer-motion"
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi"
import UnicornScene from "unicornstudio-react"
import cvFile from "../assets/JuanLuis_Rodriguez_CV.pdf"
import profileImage from "../assets/perfil1.PNG"
import unicornVideo from "../assets/unicornVideo.mp4"
import { profile } from "../data/portfolio"

type HeroSectionProps = {
  theme: "dark" | "light"
}

export default function HeroSection({ theme }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="hero-section" id="home">
      {theme === "dark" && (
        <div className="hero-unicorn" aria-hidden="true">
          <UnicornScene
            projectId="NJjisOXjNeuop52P4omO"
            width="1440px"
            height="900px"
            scale={1}
            dpi={1.5}
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js"
            className="hero-unicorn-canvas"
          />
        </div>
      )}
      {theme === "light" && (
        <div className="hero-video" aria-hidden="true">
          <video className="hero-video-media" autoPlay muted loop playsInline preload="metadata">
            <source src={unicornVideo} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-inner">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="status-line"><span className="status-dot" /> OPEN TO NEW OPPORTUNITIES <span className="status-location">/ Barcelona, ES</span></div>
          <h1>Frontend<br /><span>Software</span><br />Engineer<span className="hero-dot">.</span></h1>
          <p className="hero-intro">Building performant React applications with TypeScript, AI-assisted workflows and modern frontend architecture.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <FiArrowUpRight aria-hidden="true" /></a>
            <a className="text-button" href={cvFile} download="JuanLuis_Rodriguez_CV.pdf">Download CV <FiArrowDown aria-hidden="true" /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
          </div>
        </motion.div>

        <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
          <div className="portrait-label portrait-label-top">01 / Profile</div>
          <div className="hero-portrait">
            <img src={profileImage} alt="Juan Luis Rodríguez" fetchPriority="high" />
            <div className="portrait-overlay" />
            <div className="portrait-caption"><span>Juan Luis Rodríguez</span><small>Frontend Engineer</small></div>
          </div>
          <div className="portrait-label portrait-label-bottom">React · TypeScript · AI</div>
        </motion.div>

        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><FiArrowDown aria-hidden="true" /></a>
      </div>
    </section>
  )
}
