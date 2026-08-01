import animalPage3D from "../assets/AnimalPage3D.png"
import authPageHydro from "../assets/AuthPageHydro.png"
import barbershopImage from "../assets/barbershop.png"
import barbershop2Image from "../assets/barbershop2.png"
import barbershop3Image from "../assets/barbershop3.png"
import dashboardPageHydro from "../assets/DashboardPageHydro.png"
import eraPage3D from "../assets/EraPage3D.png"
import hydroDataImage from "../assets/hydroData.png"
import mapPageHydro from "../assets/MapPageHydro.png"
import monitorPageHydro from "../assets/MonitorPageHydro.png"
import movieHorizonImage from "../assets/movieHorizon.png"
import movie2Image from "../assets/movie2.png"
import movie3Image from "../assets/movie3.png"
import movie4Image from "../assets/movie4.png"
import museumPage3D from "../assets/MuseumPage3D.png"
import peluqeria4Image from "../assets/peluqeria4.png"
import peluqueriaImage from "../assets/peluqueria.png"
import peluqueria2Image from "../assets/peluqueria2.png"
import peluqueria3Image from "../assets/peluqueria3.png"
import timelinePage3D from "../assets/TimelinePage3D.png"
import welcomePage3D from "../assets/WelcomePage 3D.png"

export type Project = {
  id: string
  title: string
  projectType: "personal" | "freelance"
  category: string
  period: string
  description: string
  image: string
  gallery?: string[]
  tags: string[]
  role: string
  challenges: string
  architecture: string
  learned: string
  githubStats?: {
    commits: number
    branches?: number
  }
  href?: string
  github?: string
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
  summary: "Frontend Software Engineer specialized in React and TypeScript, building maintainable web applications with a strong focus on performance and user experience. Currently expanding my expertise in Python and AI Engineering.",
}

export const projects: Project[] = [
  {
    id: "evolution3d",
    title: "Evolution3D",
    projectType: "personal",
    category: "3D product platform",
    period: "Jun 2025 - Present",
    description: "An immersive 3D experience for exploring animals across biological eras, with live models and 360-degree timelines",
    image: welcomePage3D,
    gallery: [welcomePage3D, timelinePage3D, eraPage3D, animalPage3D, museumPage3D],
    tags: ["React", "TypeScript", "Tailwind CSS", "Three.js", "R3F", "Spline", "Sketchfab", "TanStack Query", "Supabase", "Postgres", "Vite", "Vitest"],
    role: "Fullstack Developer · Solo Developer",
    challenges: "Helping users explore dozens of species and eras without feeling overwhelmed.",
    architecture: "Modular React features, React Three Fiber for the viewport, and Supabase for auth, persistence, and structured content.",
    learned: "Combining 3D scenes with UI taught me that asset optimization is essential for a smooth experience.",
    githubStats: { commits: 77, branches: 12 },
    href: "https://evolution3d.vercel.app/",
    github: "https://github.com/JLrodriguez31/Evolution3D",
    featured: true,
  },
  {
    id: "hydrodata",
    title: "HydroData",
    projectType: "personal",
    category: "Data storytelling",
    period: "Sep 2025",
    description: "Hackathon finalist helping citizens understand water consumption through interactive data visualizations.",
    image: hydroDataImage,
    gallery: [hydroDataImage, dashboardPageHydro, authPageHydro, mapPageHydro, monitorPageHydro],
    tags: ["React", "TypeScript", "Tailwind CSS", "Spline", "TanStack Query", "Zod", "Spring Boot", "Supabase", "Recharts", "Leaflet"],
    role: "Frontend Engineer · Hackathon Team",
    challenges: "Giving noisy environmental data enough shape to reveal patterns without hiding uncertainty.",
    architecture: "A React frontend of charts and maps connected to a Java/Spring Boot REST backend, with Supabase handling the product's shared data layer.",
    learned: "Good data visualisation starts with the question people are trying to answer, not the chart library.",
    githubStats: { commits: 138, branches: 21 },
    href: "https://hackathon-repte3-frontend.vercel.app/",
    github: "https://github.com/JLrodriguez31/Hydrodata",
  },
  {
    id: "moviehorizon",
    title: "MovieHorizon",
    projectType: "personal",
    category: "Consumer experience",
    period: "Apr 2025 - Present",
    description: "A modern movie discovery platform powered by TMDB, designed for an intuitive exploration of movies and actors.",
    image: movieHorizonImage,
    gallery: [movieHorizonImage, movie2Image, movie3Image, movie4Image],
    tags: ["React", "TypeScript", "Tailwind CSS", "TMDB API", "Firebase", "TanStack Query", "Storybook", "Midjourney", "Runway"],
    role: "Frontend Engineer · Solo Developer",
    challenges: "Connecting movies and actors naturally while keeping discovery quick, detailed, and easy to resume.",
    architecture: "React and TypeScript views with cached TMDB queries, Firebase authentication, and a responsive component system.",
    learned: "A visual interface can turn searching for a film into a more immersive and enjoyable discovery experience.",
    githubStats: { commits: 58, branches: 12 },
    href: "https://jlrodriguez31.github.io/MovieHorizon/",
    github: "https://github.com/JLrodriguez31/MovieHorizon",
  },
  {
    id: "barbershop",
    title: "Peluquería Juan Carlos",
    projectType: "freelance",
    category: "Brand & web",
    period: "Apr 2026 - Jun 2026",
    description: "A complete website redesign helping a local barbershop strengthen its digital presence and attract new customers.",
    image: peluqueriaImage,
    gallery: [peluqueriaImage, peluqueria2Image, peluqueria3Image, peluqeria4Image],
    tags: ["Vue 3", "TypeScript", "Tailwind CSS", "Runway", "SEO", "Google Business"],
    role: "Frontend Engineer Freelance",
    challenges: "Balancing a stronger visual identity with the practical need to be found and contacted quickly on a phone.",
    architecture: "Vue 3 Composition API components, responsive Tailwind layouts, Runway-generated visual assets, and a focused SEO foundation.",
    learned: "The best client work keeps personality and practical business goals in the same frame.",
    githubStats: { commits: 20 },
    href: "https://peluqueriajuancarlos.vercel.app/",
    github: "https://github.com/JLrodriguez31/Peluqueria-v2",
  },
  {
    id: "barbershop-first-version",
    title: "Barbershop",
    projectType: "freelance",
    category: "Legacy website",
    period: "Jun 2024 - Sep 2024",
    description: "My first commercial website, focused on creating a simple and accessible online presence for a local business.",
    image: barbershopImage,
    gallery: [barbershopImage, barbershop2Image, barbershop3Image],
    tags: ["HTML", "CSS", "JavaScript", "Branding", "SEO", "Google Business", "Responsive UI"],
    role: "Frontend Developer Freelance",
    challenges: "Creating a credible, useful presence for a local business with a small and focused toolkit.",
    architecture: "Semantic HTML, custom CSS layouts, and vanilla JavaScript for navigation and lightweight interactions.",
    learned: "A clear visual system can make a small website feel intentional without adding technical complexity.",
    githubStats: { commits: 48 },
    href: "https://jlrodriguez31.github.io/Peluqueria/",
    github: "https://github.com/JLrodriguez31/Peluqueria",
  },
]

export const experiences: Experience[] = [
  {
    role: "Frontend Engineer Freelance",
    company: "Local business (Barbershop)",
    period: "Apr 2026 - Jun 2026",
    location: "Barcelona",
    description: "Designed and developed the digital presence of a barbershop, including a complete website redesign, branding assets, and online visibility improvements. Collaborated directly with the client from requirements gathering through final delivery.",
    highlights: ["Vue 3 + TypeScript", "Tailwind CSS", "Vue Composition API", "Responsive UI", "AI-assisted development", "Runway", "SEO", "Google Business Profile"],
  },
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
    period: "Jun 2024 - Sep 2024",
    location: "Barcelona",
    description: "Designed and developed a responsive landing page for a local business, including basic branding, direct client collaboration, and optimisation of online visibility.",
    highlights: ["HTML", "CSS", "JavaScript", "Responsive landing page", "Client collaboration", "Branding", "Google Business Profile", "SEO"],
  },
]

export const skillGroups = [
  { label: "Frontend", items: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass", "Three.js", "Vite"] },
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
