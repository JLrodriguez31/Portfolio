import { motion } from "framer-motion"
import { skillGroups } from "../data/portfolio"

export default function SkillsSection() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <motion.div className="skill-group" key={group.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4, delay: index * 0.05 }}>
          <div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.label}</h3></div>
          <ul>
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
