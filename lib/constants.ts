import { Github, Linkedin, Mail } from "lucide-react"
import { XIcon } from "@/components/icons/XIcon"

export const NAVIGATION_ITEMS = ["Work", "About", "Contact"] as const

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
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/marvellousz/things",
    liveUrl: "https://things.marvlock.dev"
  },
  {
    name: "NullBin",
    description: "A privacy-first, client-side encrypted pastebin alternative with a clean, modern UX. No accounts, no tracking, just secure sharing.",
    stack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Web Crypto API", "Shiki"],
    githubUrl: "https://github.com/marvellousz/nullbin",
    liveUrl: "https://nullbin.marvlock.dev"
  },
  {
    name: "Schedulo",
    description: "A modern web application that streamlines meeting scheduling and email communication in one unified workflow",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "NextAuth.js", "Google APIs"],
    githubUrl: "https://github.com/marvellousz/schedulo",
    liveUrl: "https://schedulo.marvlock.dev"
  }
] as const

export const CONTACT_EMAIL = "marvlock.dev@gmail.com"

