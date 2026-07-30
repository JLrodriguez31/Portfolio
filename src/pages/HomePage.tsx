import { FiArrowUpRight, FiExternalLink } from "react-icons/fi"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import ExperienceSection from "../components/ExperienceSection"
import HeroSection from "../components/HeroSection"
import ProjectCard from "../components/ProjectCard"
import SectionHeading from "../components/SectionHeading"
import SiteHeader from "../components/SiteHeader"
import SkillsSection from "../components/SkillsSection"
import { education, languages, profile, projects } from "../data/portfolio"
import { useTheme } from "../hooks/useTheme"

export default function HomePage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <HeroSection theme={theme} />

        <section className="section section-about" id="about">
          <div className="shell">
            <SectionHeading index="01" eyebrow="A little context" title="Engineer with a product mindset." description="I enjoy building software where engineering, usability, and product thinking come together. My goal is to create experiences that are fast, intuitive, and built to scale." />
            <AboutSection />
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <div className="shell">
            <SectionHeading index="02" eyebrow="Selected work" title="Things I've helped bring to life." description="A few projects that show how I think, build, and make trade-offs visible." />
            <div className="projects-grid">
              {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section className="section section-experience" id="experience">
          <div className="shell">
            <SectionHeading index="03" eyebrow="Experience" title="A record of making things clearer." description="From civic tech to independent product work, I've learned to care about the system behind the screen." />
            <ExperienceSection />
          </div>
        </section>

        <section className="section section-toolkit" id="skills">
          <div className="shell">
            <SectionHeading index="04" eyebrow="The toolkit" title="Curious by default." description="Tools are useful. Knowing when not to reach for one is better." />
            <SkillsSection />
          </div>
        </section>

        <section className="section section-education" id="education">
          <div className="shell education-layout">
            <div>
              <p className="eyebrow">Education</p>
              <h2>Keep learning<br /><em>out loud.</em></h2>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <div className="education-item" key={item.institution}>
                  <span>{item.period}</span>
                  <div><h3>{item.title}</h3><p>{item.institution}</p></div>
                  <FiExternalLink aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-languages" id="languages">
          <div className="shell languages-layout">
            <div>
              <p className="eyebrow">Languages</p>
              <h2>Clear communication<br /><em>in every room.</em></h2>
            </div>
            <div className="languages-list">
              {languages.map((language) => (
                <div className="language-item" key={language.name}>
                  <span>{language.name}</span>
                  <strong>{language.level}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell"><ContactSection /></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed &amp; built with React, TypeScript &amp; care.</span>
          <a href="#top">Back to top <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  )
}
