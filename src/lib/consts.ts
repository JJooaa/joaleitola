import { Code2, HeartHandshake, Star, User } from "lucide-react"

export const cardData = [
  {
    title: "Quality & Speed",
    icon: Star,
    description: "I make extremely fast websites with great SEO capabilities.",
  },
  {
    title: "Modern Technologies",
    icon: Code2,
    description:
      "Most notable technologies I use revolve around React / Next and their whole ecosystem.",
  },
  {
    title: "Experienced Consultant",
    icon: User,
    description:
      "I am a professional with years of consulting experience. Currently working @ Vertics.",
  },
  {
    title: "Entrepreneur",
    icon: HeartHandshake,
    description:
      "I'm an entrepreneur with a passion for building great products.",
  },
] as const

export const projects = [
  {
    name: "Automotive App",
    description:
      "Lead role developing a popular automotive plaform. Included payments, precise calculations and a lot more. I was responsible for the frontend and backend development.",
    technologies: [
      "React.js",
      "Next.js",
      "ChakraUI",
      "Nest.js",
      "Docker",
      "Google Cloud",
      "TypeScript",
    ],
  },
  {
    name: "Service Information App",
    description:
      "I worked on a service information system as a frontend developer. The application helps people find the right service for their needs.",
    technologies: ["React.js", "MaterialUI", "Typescript", "External API's"],
  },
  {
    name: "Property Management App",
    description:
      "I was responsible for many large and impactful features, eg: payments, invoices, maintenance forms, pdf generation and a lot more.",
    technologies: [
      "React.js",
      "Hasura",
      "Nhost",
      "PostgreSQL",
      "GraphQL",
      "Vite",
      "MaterialUI",
      "TypeScript",
    ],
  },
  {
    name: "Current Personal Website",
    description:
      "I built my personal website with a focus on performance and SEO. I wanted a website that not only looked good but also performed exceptionally well.",
    technologies: [
      "Next.js",
      "ShadcnUI",
      "Vercel",
      "TypeScript",
      "TailwindCSS",
      "MDX",
    ],
  },
] as const
