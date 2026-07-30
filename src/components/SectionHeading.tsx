import { motion } from "framer-motion"
import { FiArrowDownRight } from "react-icons/fi"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  index: string
}

export default function SectionHeading({ eyebrow, title, description, index }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <motion.div className="section-index" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}>
        <span>{index}</span>
        <FiArrowDownRight aria-hidden="true" />
      </motion.div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  )
}
