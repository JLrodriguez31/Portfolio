import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { FiArrowUpRight, FiChevronDown, FiGithub } from "react-icons/fi"
import type { Project } from "../data/portfolio"

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const projectImages = project.gallery ?? [project.image]

  return (
    <motion.article className={`project-card ${project.featured ? "project-card-featured" : ""}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.24) }}>
      <div className="project-media">
        <img className="project-media-main" src={projectImages[activeImageIndex]} alt={`${project.title} project preview ${activeImageIndex + 1}`} loading={project.featured ? "eager" : "lazy"} />
        <div className="project-media-shade" />
        <span className="project-number">0{index + 1}</span>
        <span className="project-category">{project.category}</span>
        {project.featured && <span className="featured-label">Featured work</span>}
        {projectImages.length > 1 && (
          <div className="project-media-thumbnails" aria-label={`${project.title} project screenshots`}>
            {projectImages.map((image, imageIndex) => (
              <button className="project-media-thumb" key={image} type="button" aria-label={`Show ${project.title} screenshot ${imageIndex + 1}`} aria-pressed={activeImageIndex === imageIndex} onClick={() => setActiveImageIndex(imageIndex)}>
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <div>
            <div className="project-meta">{project.year} <span /> Selected project</div>
            <h3>{project.title}</h3>
          </div>
          <span className="project-arrow"><FiArrowUpRight aria-hidden="true" /></span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div className="project-details" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="details-grid">
                <div><span>Role</span><p>{project.role}</p></div>
                <div><span>Challenges</span><p>{project.challenges}</p></div>
                <div><span>Architecture</span><p>{project.architecture}</p></div>
                <div><span>What I learned</span><p>{project.learned}</p></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="project-footer">
          <button className="read-more" type="button" onClick={() => setIsExpanded((current) => !current)} aria-expanded={isExpanded}>
            {isExpanded ? "Close details" : "Read more"} <FiChevronDown className={isExpanded ? "is-open" : ""} aria-hidden="true" />
          </button>
          <div className="project-links">
            <a href={project.href} target="_blank" rel="noreferrer">Live demo <FiArrowUpRight aria-hidden="true" /></a>
            <a className="github-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><FiGithub aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
