import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Pablo Verdugo",
  initials: "PV",
  location: "Madrid, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about:
    "Software Engineer focused on building products with extra attention to detail",
  summary: `As a Software Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. I have over ${new Date().getFullYear() - 2018} years of experience working remotely with companies all around the world.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/16836732?v=4",
  personalWebsiteUrl: "https://www.pablovg.dev",
  contact: {
    email: "pablovgdev@gmail.com",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/pablovgdev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pablovgdev",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/pablovgdev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Complutense University of Madrid",
      degree: "Bachelor's Degree in Computer Science",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Swapcard",
      link: "https://www.swapcard.com/",
      badges: ["Remote"],
      title: "Teamlead → Senior Software Engineer",
      start: "2021",
      end: "2023",
      description:
        "Designed new features, implemented scalable solutions, led a squad. Technologies: NodeJS, TypeScript, GraphQL, Golang, gRPC, AWS",
    },
    {
      company: "Deplace",
      link: "https://www.deplace.es",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "2019",
      end: "2021",
      description:
        "Created chatbots and custom automations (scraper, chrome extensions, APIs). Technologies: NodeJS, TypeScript, Google Cloud",
    },
    {
      company: "Chatbot Chocolate",
      link: "https://chatbotchocolate.com/",
      badges: ["Hybrid"],
      title: "Software Engineer",
      start: "2018",
      end: "2019",
      description:
        "Built multiple chatbots and APIs for clients. Technologies: NodeJS, TypeScript, Google Cloud, AWS",
    },
  ],
  skills: [
    "Golang",
    "Python",
    "TypeScript",
    "React",
    "NextJS",
    "NestJS",
    "NodeJS",
    "GraphQL",
    "AWS",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "PostgreSQL",
    "Redis",
    "MongoDB",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
