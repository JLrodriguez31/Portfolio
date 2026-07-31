import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { FiArrowUpRight, FiChevronDown, FiChevronLeft, FiChevronRight, FiGitBranch, FiGitCommit, FiGithub, FiMinus, FiPlus, FiX } from "react-icons/fi"
import type { Project } from "../data/portfolio"

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [areTagsExpanded, setAreTagsExpanded] = useState(false)
  const [hasMultipleTagRows, setHasMultipleTagRows] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const tagListRef = useRef<HTMLDivElement>(null)
  const projectImages = project.gallery ?? [project.image]
  const imageCount = projectImages.length

  useEffect(() => {
    const tagList = tagListRef.current
    if (!tagList) return

    const updateTagRows = () => {
      const firstTag = tagList.firstElementChild as HTMLElement | null
      if (!firstTag) {
        setHasMultipleTagRows(false)
        return
      }

      const firstRowTop = firstTag.offsetTop
      const hasSecondRow = Array.from(tagList.children).some((tag) => (tag as HTMLElement).offsetTop > firstRowTop)
      setHasMultipleTagRows(hasSecondRow)
    }

    updateTagRows()
    const resizeObserver = new ResizeObserver(updateTagRows)
    resizeObserver.observe(tagList)

    return () => resizeObserver.disconnect()
  }, [project.id, project.tags.length])

  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false)
      if (event.key === "ArrowLeft") setActiveImageIndex((current) => (current - 1 + imageCount) % imageCount)
      if (event.key === "ArrowRight") setActiveImageIndex((current) => (current + 1) % imageCount)
    }
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [imageCount, isLightboxOpen])

  const showPreviousImage = () => setActiveImageIndex((current) => (current - 1 + imageCount) % imageCount)
  const showNextImage = () => setActiveImageIndex((current) => (current + 1) % imageCount)

  return (
    <>
    <motion.article className={`project-card ${project.featured ? "project-card-featured" : ""} ${project.featured && isExpanded ? "project-card-featured-expanded" : ""}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.24) }}>
      <div className="project-media">
        <button className="project-media-main-button" type="button" aria-label={`Open ${project.title} screenshot ${activeImageIndex + 1} fullscreen`} onClick={() => setIsLightboxOpen(true)}>
          <img className="project-media-main" src={projectImages[activeImageIndex]} alt={`${project.title} project preview ${activeImageIndex + 1}`} loading={project.featured ? "eager" : "lazy"} />
        </button>
        <div className="project-media-shade" />
        <div className="project-media-footer">
          {projectImages.length > 1 && (
            <div className="project-media-thumbnails" aria-label={`${project.title} project screenshots`}>
              <span className="project-media-thumbnails-count" aria-live="polite">{String(activeImageIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}</span>
              <div className="project-media-thumb-list">
                {projectImages.map((image, imageIndex) => (
                  <button className="project-media-thumb" key={image} type="button" aria-label={`Show ${project.title} screenshot ${imageIndex + 1}`} aria-pressed={activeImageIndex === imageIndex} onClick={() => setActiveImageIndex(imageIndex)}>
                    <img src={image} alt="" />
                    <span className="project-media-thumb-index">{String(imageIndex + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="project-media-meta">
            {project.featured && <span className="featured-label">Featured work</span>}
            <span className="project-category">{project.category}</span>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <div>
            <div className="project-meta"><span />{project.period}  </div>
            <h3>{project.title}</h3>
          </div>
          {project.href ? (
            <a className="project-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="project-arrow"><FiArrowUpRight aria-hidden="true" /></span>
          )}
        </div>
        <p className="project-description">{project.description}</p>
        <div ref={tagListRef} className={`tag-list ${isExpanded || areTagsExpanded ? "is-expanded" : ""}`} aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        {hasMultipleTagRows && !isExpanded && (
          <button className={`tags-toggle ${areTagsExpanded ? "is-expanded" : ""}`} type="button" aria-expanded={areTagsExpanded} onClick={() => setAreTagsExpanded((current) => !current)}>
            {areTagsExpanded ? "Show less" : "View full stack"} {areTagsExpanded ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
          </button>
        )}
        {project.githubStats && (
          <div className="project-github-stats" aria-label={`${project.title} GitHub activity`}>
            <strong><FiGitCommit aria-hidden="true" /> {project.githubStats.commits} commits</strong>
            {project.githubStats.branches !== undefined && <strong><FiGitBranch aria-hidden="true" /> {project.githubStats.branches} branches</strong>}
          </div>
        )}

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
          {(project.href || project.github) && (
            <div className="project-links">
              {project.href && <a href={project.href} target="_blank" rel="noreferrer">Live demo <FiArrowUpRight aria-hidden="true" /></a>}
              {project.github && <a className="github-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><FiGithub aria-hidden="true" /></a>}
            </div>
          )}
        </div>
      </div>
    </motion.article>
    {isLightboxOpen && createPortal(
      <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} screenshot viewer`} onClick={() => setIsLightboxOpen(false)}>
        <div className="project-lightbox-panel" onClick={(event) => event.stopPropagation()}>
          <button className="project-lightbox-close" type="button" aria-label="Close image viewer" onClick={() => setIsLightboxOpen(false)}>
            <FiX aria-hidden="true" />
          </button>
          <div className="project-lightbox-stage">
            {imageCount > 1 && (
              <button className="project-lightbox-nav project-lightbox-prev" type="button" aria-label="Previous screenshot" onClick={showPreviousImage}>
                <FiChevronLeft aria-hidden="true" />
              </button>
            )}
            <img src={projectImages[activeImageIndex]} alt={`${project.title} project preview ${activeImageIndex + 1}`} />
            {imageCount > 1 && (
              <button className="project-lightbox-nav project-lightbox-next" type="button" aria-label="Next screenshot" onClick={showNextImage}>
                <FiChevronRight aria-hidden="true" />
              </button>
            )}
          </div>
          <div className="project-lightbox-caption">
            <span>{project.title}</span>
            <span>{String(activeImageIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}</span>
          </div>
        </div>
      </div>,
      document.body,
    )}
    </>
  )
}
