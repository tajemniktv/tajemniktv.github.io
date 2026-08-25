import { siteData } from "./site";

export const dashboardData = {
  hero: {
    handle: siteData.nickname,
    name: siteData.displayName,
    tagline: siteData.tagline,
    bio: siteData.bio,
    aside: siteData.secondaryBio,
    statusChips: [
      siteData.currentActivity ?? "Currently: making something unnecessarily measurable",
      "Focus: performance / tooling / modding",
      `Based in ${siteData.location}`,
      "Site: Astro / Tailwind / GitHub Pages",
    ],
    primaryCta: {
      label: "Browse projects",
      href: "#projects",
      icon: "code",
    },
    secondaryCta: {
      label: "Find me elsewhere",
      href: "#links",
      icon: "public",
    },
  },
  pillars: [
    {
      title: "Psychology & mind systems",
      description:
        "Attention, behavior, measurement, identity, motivation, and the weird control panels people carry in their heads.",
      icon: "psychology",
      color: "indigo",
    },
    {
      title: "Game dev, modding & reverse engineering",
      description:
        "Finding out how a system behaves, where it hurts, and whether a mod can make the whole thing less annoying.",
      icon: "extension",
      color: "orange",
    },
    {
      title: "Performance & rendering",
      description:
        "Profilers, frame time, pathfinding, VRAM, lighting, CVars, and the eternal question: what exactly is choking now?",
      icon: "speed",
      color: "cyan",
    },
    {
      title: "AI tooling & automation",
      description:
        "Coding agents, workflows, MCP-shaped experiments, and using machines to reduce the ceremonial parts of building things.",
      icon: "memory",
      color: "pink",
    },
    {
      title: "Tools & digital systems",
      description:
        "Personal dashboards, developer utilities, second-brain experiments, and other attempts to keep context findable.",
      icon: "hub",
      color: "violet",
    },
  ],
  projects: [
    {
      title: "TajsCOI",
      subtitle: "Captain of Industry modding & diagnostics",
      featured: true,
      description:
        "QoL tweaks, profiling helpers, pathfinding diagnostics, and performance experiments for Captain of Industry. Currently the best place to observe me turning one suspicious stutter into an investigation.",
      tags: ["C#", "modding", "profiling", "performance"],
      href: "https://github.com/tajemniktv/TajsCOI",
    },
    {
      title: "TajsGraph",
      subtitle: "Graphics overhaul experiments",
      description:
        "Rendering obsession packaged as a project: visual tuning, better defaults, performance trade-offs, and a lot of settings archaeology.",
      tags: ["graphics", "rendering", "modding", "performance"],
      href: "https://github.com/tajemniktv/TajsGraph",
    },
    {
      title: "TajsMod",
      subtitle: "Upload Labs QoL mod",
      description:
        "A fairly substantial quality-of-life and UI mod for Upload Labs, with tooling, interface changes, configuration, and optional gameplay tweaks.",
      tags: ["Godot", "modding", "UX", "tooling"],
      href: "https://github.com/tajemniktv/TajsMod",
    },
    {
      title: "UEiniLab",
      subtitle: "Unreal Engine INI/CVar tooling",
      description:
        "Tooling for exploring and understanding Unreal Engine configuration variables without manually spelunking through endless INI files.",
      tags: ["VS Code", "Unreal Engine", "INI", "CVar"],
      href: "https://github.com/tajemniktv/UEiniLab",
    },
    {
      title: "AnagramSolver",
      subtitle: "Constraint-heavy word solver",
      description:
        "A Python solver for increasingly unreasonable anagram puzzles, with required words, word-count constraints, ranking, and assorted brute-force containment measures.",
      tags: ["Python", "solver", "CLI", "algorithms"],
      href: "https://github.com/tajemniktv/AnagramSolver",
    },
    {
      title: "TajsOS",
      subtitle: "Personal LifeOS experiment",
      description:
        "A second-brain-style experiment around tasks, project context, personal data, and the recurring human problem of forgetting what the plan was.",
      tags: ["LifeOS", "notes", "automation", "systems"],
      href: "https://github.com/tajemniktv/TajsOS",
    },
  ],
  inputQueue: {
    title: "Current rabbit holes",
    description:
      "The subjects currently consuming tabs, profiler captures, notes, or all three. Some become projects. Others become suspiciously specific opinions.",
    items: [
      "Game pathfinding, simulation bottlenecks, and profiling",
      "Unreal Engine rendering, CVars, and editor tooling",
      "Coding agents, AI workflows, and automation",
      "Psychometrics, attention, and behavior loops",
      "Mod architecture, QoL design, and reverse engineering",
    ],
  },
  lab: {
    title: "Lab Notes",
    status: "Selective public notes",
    description:
      "Not a content mill disguised as a blog. Just project logs, experiments, technical notes, and thoughts that survived long enough to become useful.",
    emptyTitle: "The useful bits get published",
    emptyDescription:
      "Most scratch notes stay scratch notes. Public entries show up when they have enough structure to be worth somebody else's time.",
    href: "/lab",
  },
  elsewhere: siteData.socials,
};
