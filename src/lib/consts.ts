import { Code2, Gem, HeartHandshake, Recycle } from "lucide-react";

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
  github: {
    path: "https://github.com/jjooaa",
    name: "Github",
  },
  linkedIn: {
    path: "https://www.linkedin.com/in/joa-leitola-478515212/",
    name: "LinkedIn",
  },
  workingWithMe: {
    path: "/working-with-me",
    name: "Working with me",
  },
} as const;

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
] as const;

export const projects = [
  {
    name: "Automotive Industry",
    description:
      "I've been the go-to person for managing the client's application and handling all the code-related stuff. I've had the pleasure of working closely with the client, discussing their needs and making sure the platform aligns with what they're looking for.",
    link: "/projects/automotive-industry-web-app",
  },
  {
    name: "Service Informations",
    description:
      "Our aim was to create a system that not only simplified the process but also improved the efficiency of the welfare sector.",
    link: "/projects/service-information-systems-application",
  },
  {
    name: "Property Management",
    description: "Project 3 description",
    link: "/projects/property-management-platform",
  },
] as const;
