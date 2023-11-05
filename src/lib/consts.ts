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
    title: "Cutting-Edge Solutions",
    icon: Code2,
    description:
      "I keep pace with the latest technologies and trends to ensure your project remains at the forefront of innovation. Solutions that enhance your project's performance and quality.",
  },
  {
    title: "Consulting experience",
    icon: Gem,
    description:
      "I deliver high-quality software development services and have received positive feedback from clients and peers, highlighting the effectiveness and impact of my work.",
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
  {
    name: "Joa Leitola Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque reprehenderit fugit saepe nemo harum accusantium, dolor velit. Reiciendis, doloribus aspernatur exercitationem in ipsam, iure cum sequi alias ipsa neque delectus.",
    link: "/projects/joa-leitola-website",
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
