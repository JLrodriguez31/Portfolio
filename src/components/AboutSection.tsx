import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { profile } from "../data/portfolio"

export default function AboutSection() {
  return (
    <div className="about-layout">
      <motion.div className="about-lede" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
        <p className="about-statement">I build scalable interfaces that make complex products feel obvious.</p>
        <a className="inline-link" href="#contact">Let&apos;s build something useful <FiArrowUpRight aria-hidden="true" /></a>
        <dl className="about-facts">
          <div><dt>Based in</dt><dd>{profile.location}</dd></div>
          <div><dt>Focus</dt><dd>React, TypeScript &amp; AI</dd></div>
          <div><dt>Open to</dt><dd>Frontend roles and collaborations</dd></div>
        </dl>
      </motion.div>
      <motion.div className="about-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: 0.1 }}>
        <p className="about-copy-lead">{profile.summary}</p>
        <div className="about-copy-body">
          <p>My daily toolkit is React and TypeScript. I care about intuitive user experiences, maintainable architecture, testing, and the small performance decisions that compound into a better product.</p>
          <p>I use AI-assisted development and MCPs to accelerate code analysis, test generation, debugging, and delivery while continuing to expand my expertise in Python and AI Engineering.</p>
        </div>
      </motion.div>
    </div>
  )
}
