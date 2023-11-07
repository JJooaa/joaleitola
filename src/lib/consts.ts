import { Code2, Gem, HeartHandshake, Recycle } from "lucide-react"

export const links = {
  home: {
    path: "/",
    name: "Home",
  },
  about: {
    path: "/about",
    name: "About",
  },
  contact: {
    path: "/contact",
    name: "Contact",
  },
  projectsAndTools: {
    path: "/projects-and-tools",
    name: "Projects & Tools",
  },
  workingWithMe: {
    path: "/maximizing-results",
    name: "Maximizing Results",
  },
  github: {
    path: "https://github.com/jjooaa",
    name: "Github",
  },
  linkedIn: {
    path: "https://www.linkedin.com/in/joa-leitola-478515212/",
    name: "LinkedIn",
  },
} as const

export const cardData = [
  {
    title: "Cutting-Edge Solutions",
    icon: Code2,
    description:
      "I stay updated with the latest technologies and trends to ensure that your project stays at the forefront of innovation. I provide solutions that enhance the performance and quality of your project.",
  },
  {
    title: "Consulting experience",
    icon: Gem,
    description:
      "I provide high-quality software development services and have received positive feedback from clients and peers, who have emphasized the effectiveness and impact of my work.",
  },
  {
    title: "Progressive Development",
    icon: Recycle,
    description:
      "We start by creating an initial working version of an app. If you feel satisfied with the product, we keep implementing new features. If not, we can always go back to the drawing board.",
  },
  {
    title: "Easy & Simple",
    icon: HeartHandshake,
    description:
      "I have workflows and tools in place to make sure that the experience working with me is easy and simple for the both of us. Giving you the most value for your money.",
  },
] as const

const projectUrl = "/projects-and-tools/projects"

export const projects = [
  {
    name: "Automotive Industry",
    description:
      "In the automotive industry, I have been leading a project to enhance the client's application. Throughout this journey, I have closely collaborated with the client to understand their unique needs and align the platform with their vision.",
    link: projectUrl + "/automotive-industry",
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
    name: "Service Information System",
    description:
      "I played a significant role in developing a service information system that revolutionized how social welfare clients access service providers. I closely collaborated with our development team to address technical issues and implement crucial enhancements.",
    link: projectUrl + "/service-information-system",
    technologies: ["React.js", "MaterialUI", "Typescript", "External API's"],
  },
  {
    name: "Property Management",
    description:
      "I worked on a finance management system that integrated a banking API into a property management platform. This enabled property managers to monitor payment histories and balances, improving financial management.",
    link: projectUrl + "/property-management",
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
      "When embarking on the journey to build my personal website, I was focused to make it stand out in a crowded online world. I wanted a website that not only looked good but also performed exceptionally well, with a focus on SEO and simplicity.",
    link: projectUrl + "/current-personal-website",
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
