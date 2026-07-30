import { motion } from "framer-motion"
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"
import cvFile from "../assets/JuanLuis_Rodriguez_CV.pdf"
import { profile } from "../data/portfolio"

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: FiPhone },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, icon: FiLinkedin },
  { label: "GitHub", value: profile.githubLabel, href: profile.github, icon: FiGithub },
]

export default function ContactSection() {
  return (
    <div className="contact-layout">
      <motion.div className="contact-intro" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
        <p className="contact-kicker">Have a good problem?</p>
        <h2>Let&apos;s make it<br /><em>useful.</em></h2>
        <p className="contact-note">I&apos;m open to frontend roles, thoughtful collaborations, and conversations about building better digital products.</p>
        <a className="button button-light" href={`mailto:${profile.email}`}>Start a conversation <FiArrowUpRight aria-hidden="true" /></a>
      </motion.div>
      <motion.div className="contact-links" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: 0.1 }}>
        {contactLinks.map(({ label, value, href, icon: Icon }) => (
          <a className="contact-link" key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}>
            <span className="contact-link-icon"><Icon aria-hidden="true" /></span>
            <span><small>{label}</small><strong>{value}</strong></span>
            <FiArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </a>
        ))}
        <a className="contact-link cv-link" href={cvFile} download="JuanLuis_Rodriguez_CV.pdf">
          <span className="contact-link-icon"><FiDownload aria-hidden="true" /></span>
          <span><small>Curriculum vitae</small><strong>Request my CV</strong></span>
          <FiArrowUpRight className="contact-link-arrow" aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  )
}
