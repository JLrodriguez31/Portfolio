import { motion } from "framer-motion"
import { FiArrowUpRight, FiMapPin } from "react-icons/fi"
import { experiences } from "../data/portfolio"

export default function ExperienceSection() {
  return (
    <div className="experience-list">
      {experiences.map((experience, index) => (
        <motion.article className="experience-item" key={`${experience.company}-${experience.role}`} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: index * 0.1 }}>
          <div className="experience-marker"><span /></div>
          <div className="experience-period">{experience.period}</div>
          <div className="experience-main">
            <div className="experience-heading">
              <div>
                <p className="eyebrow">{experience.company}</p>
                <h3>{experience.role}</h3>
              </div>
              {experience.current && <span className="current-badge">Current</span>}
            </div>
            <p className="experience-location"><FiMapPin aria-hidden="true" /> {experience.location}</p>
            <p className="experience-description">{experience.description}</p>
            <div className="experience-highlights">
              {experience.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
            </div>
          </div>
          <a className="experience-arrow" href="#contact" aria-label={`Discuss ${experience.role} at ${experience.company}`}><FiArrowUpRight aria-hidden="true" /></a>
        </motion.article>
      ))}
    </div>
  )
}
