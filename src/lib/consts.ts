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
  projects: {
    path: "/projects",
    name: "Projects",
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
    title: "Modern Solutions",
    icon: Code2,
    description:
      "I'm always up to date with the latest technologies. I'm not afraid to try new things and always looking for ways to improve my workflow.",
  },
  {
    title: "Consulting experience",
    icon: Gem,
    description:
      "I've worked with clients from all over the world. I'm used to working with remote teams and I'm a great communicator.",
  },
  {
    title: "Progressive Development",
    icon: Recycle,
    description:
      "Starting by creating an initial working version of an app. If you feel satisfied with the product, we keep implementing new features. If not, we can always go back to the drawing board.",
  },
  {
    title: "Easy & Simple",
    icon: HeartHandshake,
    description:
      "I have workflows and tools in place to make sure that the experience working with me is easy and simple for the both of us. Giving you the most value for your money.",
  },
] as const

export const projects = [
  {
    name: "Automotive Industry",
    description:
      "I managed the client's application, improving search features, revamping the user interface with Next.js and ChakraUI, and optimizing the backend with Nest.js, Docker, and Google Cloud. Integrated multiple external APIs for added data.",
    link: "/projects/automotive-industry-web-app",
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
    name: "Service Informations",
    description:
      "I played a pivotal role in revolutionizing a service information system for social welfare clients and service providers. Our team enhanced efficiency and user-friendliness by optimizing search algorithms, database management, and UI design.",
    link: "/projects/service-information-systems-application",
    technologies: ["React.js", "MaterialUI", "Typescript"],
  },
  {
    name: "Property Management",
    description:
      "I developed a seamless Finance/Banking Integration for a property management platform, enhancing financial monitoring. I also introduced advanced maintenance and repair planning features, improving property management efficiency.",
    link: "/projects/property-management-platform",
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
] as const
