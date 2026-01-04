import { Github, Linkedin, Mail } from "lucide-react"
import { XIcon } from "@/components/icons/XIcon"

export const NAVIGATION_ITEMS = ["Services", "Work", "Testimonials", "Pricing", "FAQ", "Contact"] as const

export const SOCIAL_LINKS = [
  { 
    name: "GitHub", 
    href: "https://github.com/marvlock", 
    icon: Github 
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/project-marvlock/about/?viewAsMember=true", 
    icon: Linkedin 
  },
  { 
    name: "X", 
    href: "https://x.com/ProjectMarvlock", 
    icon: XIcon
  },
  { 
    name: "Contact", 
    href: "mailto:marvlock.dev@gmail.com", 
    icon: Mail 
  }
] as const

export const PROJECTS = [
  {
    name: "Things",
    description: "A collection of beautifully designed, blocky components that embrace a bold, raw aesthetic. Copy, paste, customize.",
    stack: ["UI/UX", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/marvellousz/things",
    liveUrl: "https://things.marvlock.dev",
    imageUrl: "https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzW3TP52we21QOI0roAJCzZXBmwha4RS9Ptxueq"
  },
  {
    name: "NullBin",
    description: "A privacy-first, client-side encrypted pastebin alternative with a clean, modern UX. No accounts, no tracking, just secure sharing.",
    stack: ["FULL-STACK", "Next.js 15", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Web Crypto API", "Shiki"],
    githubUrl: "https://github.com/marvellousz/nullbin",
    liveUrl: "https://nullbin.marvlock.dev",
    imageUrl: "https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWrq4BprVXT1YkprDaohjJ2mtCiuHGMbLsvwSK"
  },
  {
    name: "Schedulo",
    description: "A modern web application that streamlines meeting scheduling and email communication in one unified workflow",
    stack: ["FULL-STACK", "Next.js", "React 19", "TypeScript", "Tailwind CSS", "NextAuth.js", "Google APIs"],
    githubUrl: "https://github.com/marvellousz/schedulo",
    liveUrl: "https://schedulo.marvlock.dev",
    imageUrl: "https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzW2Qdk6kW8FvUfYPLoDnk5m4EWIh9GduC6X7Q1"
  },
  {
    name: "Ghostform",
    description: "A privacy-first form builder with server-side validation, rate limiting, and zero tracking.",
    stack: ["FULL-STACK", "Nuxt", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com/marvlock/ghostform",
    liveUrl: "https://ghostform.marvlock.dev",
    imageUrl: "https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzW0lX9iHZprYUuChWnfLdlKDAb72za0PZTyt49"
  }
] as const

export const CONTACT_EMAIL = "marvlock.dev@gmail.com"

