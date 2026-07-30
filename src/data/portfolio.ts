import animalPage3D from "../assets/AnimalPage3D.png"
import dashboardPage3D from "../assets/DashboardPage3D.png"
import eraPage3D from "../assets/EraPage3D.png"
import hydroDataImage from "../assets/hydroData.png"
import movieHorizonImage from "../assets/movieHorizon.png"
import museumPage3D from "../assets/MuseumPage3D.png"
import peluqueriaImage from "../assets/peluqueria.png"
import timelinePage3D from "../assets/TimelinePage3D.png"
import welcomePage3D from "../assets/WelcomePage 3D.png"

export type Project = {
  id: string
  title: string
  category: string
  year: string
  description: string
  image: string
  gallery?: string[]
  tags: string[]
  role: string
  challenges: string
  architecture: string
  learned: string
  href: string
  github: string
  featured?: boolean
}

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  description: string
  highlights: string[]
  current?: boolean
}

export const profile = {
  name: "Juan Luis Rodriguez",
  shortName: "Juan Luis",
  title: "Frontend Software Engineer",
  subtitle: "React & TypeScript · AI-powered Development",
  location: "Barcelona, Spain",
  email: "juanluisrodriguez3101@gmail.com",
  phone: "+34 628 986 258",
  linkedin: "https://www.linkedin.com/in/juanrodriguezchavarria/",
  linkedinLabel: "/in/juanrodriguezchavarria",
  github: "https://github.com/JLrodriguez31",
  githubLabel: "github.com/JLrodriguez31",
  summary: "Frontend Software Engineer specialized in React and TypeScript, with experience building scalable and maintainable web applications. Passionate about creating intuitive user experiences, collaborating in cross-functional teams, and delivering high-quality software through modern frontend technologies, testing, and AI-assisted development. Currently expanding my expertise in Python and AI Engineering.",
}

export const projects: Project[] = [
  {
    id: "evolution3d",
    title: "Evolution3D",
    category: "Product platform",
    year: "2025",
    description: "A browser-based 3D configurator that turns complex product data into a fast, intuitive workspace.",
    image: welcomePage3D,
    gallery: [welcomePage3D, dashboardPage3D, timelinePage3D, eraPage3D, animalPage3D, museumPage3D],
    tags: ["React", "TypeScript", "Three.js", "R3F", "Supabase"],
    role: "Frontend Engineer · Product lead",
    challenges: "Making a large library of 3D assets feel immediate while keeping the editor approachable for non-technical teams.",
    architecture: "Feature-based React modules, React Three Fiber for the viewport, TanStack Query for server state, and Supabase for auth and persistence.",
    learned: "Performance budgets are a product decision. Asset loading states and sensible defaults made more impact than another toolbar feature.",
    href: "https://evolution3d.vercel.app/",
    github: "https://github.com/JLrodriguez31/Evolution3D",
    featured: true,
  },
  {
    id: "hydrodata",
    title: "HydroData",
    category: "Data storytelling",
    year: "2024",
    description: "Hackathon finalist: a clear, collaborative way to understand local water health through live data.",
    image: hydroDataImage,
    tags: ["React", "Supabase", "Recharts", "Leaflet", "REST APIs"],
    role: "Frontend Engineer · Data UX",
    challenges: "Giving meaning to noisy environmental data without hiding uncertainty or asking people to learn a specialist dashboard.",
    architecture: "Typed API adapters feed composable chart and map views, with Supabase authentication separating public exploration from team tools.",
    learned: "Good data visualisation starts with the question the user is trying to answer, not the chart library's feature list.",
    href: "https://hackathon-repte3-frontend.vercel.app/",
    github: "https://github.com/JLrodriguez31/Hydrodata",
  },
  {
    id: "moviehorizon",
    title: "MovieHorizon",
    category: "Consumer experience",
    year: "2023",
    description: "A focused movie discovery app with fast search, useful context, and a watchlist that gets out of the way.",
    image: movieHorizonImage,
    tags: ["React", "TypeScript", "TMDB API", "Firebase"],
    role: "Frontend Engineer · Solo project",
    challenges: "Designing a browsing flow that works equally well for a quick search and a long evening of discovery across devices.",
    architecture: "Debounced TMDB queries, Firebase auth for watchlists, and a responsive component system built around content density rather than breakpoints.",
    learned: "The smallest interaction details, like preserving search context, are what make a product feel considered.",
    href: "https://jlrodriguez31.github.io/MovieHorizon/",
    github: "https://github.com/JLrodriguez31/MovieHorizon",
  },
  {
    id: "barbershop",
    title: "Barbershop website",
    category: "Brand & web",
    year: "2023",
    description: "A high-converting local website that gives a neighbourhood studio a sharper digital presence.",
    image: peluqueriaImage,
    tags: ["Vue 3", "TypeScript", "TailwindCSS", "SEO", "Runway"],
    role: "Freelance Frontend Developer",
    challenges: "Balancing a strong visual identity with the practical need to book quickly from a phone and be found locally.",
    architecture: "Vue Composition API, lightweight content sections, structured metadata, Google Business integration, and a deliberately small JavaScript footprint.",
    learned: "Performance and personality can reinforce each other when the visual system is built from a few confident decisions.",
    href: "https://peluqueriajuancarlos.vercel.app/",
    github: "https://github.com/JLrodriguez31/Peluqueria-v2",
  },
]

export const experiences: Experience[] = [
  {
    role: "Frontend Engineer Intern",
    company: "Barcelona Activa",
    period: "Sep 2025 - Mar 2026",
    location: "Barcelona",
    description: "Developed complete functionalities, maintained code, implemented interfaces, and collaborated with backend, design, and product teams on an educational platform for learning programming.",
    highlights: ["React + TypeScript", "Hooks + Context API", "Axios + REST APIs", "Reusable architecture", "Vitest", "Docker", "Generative AI + MCPs", "Git + GitHub"],
  },
  {
    role: "Frontend Developer Freelance",
    company: "Local business (Barbershop)",
    period: "Jun 2024 - Sep 2024 · Apr 2026 - Jun 2026",
    location: "Barcelona",
    description: "Designed and developed the digital presence of a local business, including a full website redesign, basic branding, and optimization of online visibility.",
    highlights: ["Vue.js + TypeScript", "Tailwind CSS", "Responsive landing page", "Website migration", "Client collaboration", "Google Maps Business Profile", "SEO"],
  },
]

export const skillGroups = [
  { label: "Frontend", items: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"] },
  { label: "Design + UX", items: ["Responsive design", "Mobile-first design", "Pixel-perfect implementation", "Figma", "Storybook"] },
  { label: "Testing", items: ["Vitest", "Jest", "Unit testing", "Regression prevention"] },
  { label: "State + APIs", items: ["Redux", "Context API", "TanStack Query", "Axios", "REST API integration"] },
  { label: "Data + infrastructure", items: ["PostgreSQL", "Docker", "Git", "GitHub"] },
  { label: "AI Engineering", items: ["Python", "RAG", "LangChain", "MCPs", "AI-assisted development"] },
]

export const education = [
  { title: "Bachelor's Degree in Software Engineering / Computer Engineering", institution: "Universitat Oberta de Catalunya", period: "2022 - Present" },
  { title: "Frontend Development Bootcamp", institution: "IT Academy - Barcelona Activa / UPC", period: "2025" },
]

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "Catalan", level: "Native" },
  { name: "English", level: "Professional working proficiency (B2)" },
]
