import { siteData } from "./site";

export const dashboardData = {
  hero: {
    handle: siteData.nickname,
    name: siteData.displayName,
    tagline: siteData.tagline,
    bio: siteData.bio,
    aside: siteData.secondaryBio,
    statusChips: [
      "Currently: tweaking systems",
      "Mode: overthinking with purpose",
      `Location: ${siteData.location}`,
      "Stack: Astro / Tailwind / GitHub Pages",
    ],
    primaryCta: {
      label: "Open project cockpit",
      href: "#projects",
      icon: "terminal",
    },
    secondaryCta: {
      label: "Elsewhere",
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
      title: "Game modding & UX",
      description:
        "Fixing friction, reshaping interfaces, and making game systems feel better without pretending the rabbit hole is small.",
      icon: "extension",
      color: "orange",
    },
    {
      title: "Graphics/rendering experiments",
      description:
        "INI archaeology, rendering tweaks, lighting, performance, and the eternal question: can this look better and still run?",
      icon: "deployed_code",
      color: "cyan",
    },
    {
      title: "Music, mood & processing",
      description:
        "Playlists as emotional tooling. Soundtracks for focus, late-night debugging, recovery, and controlled dramatics.",
      icon: "headphones",
      color: "pink",
    },
    {
      title: "Tools & digital life systems",
      description:
        "Personal dashboards, automation, second-brain experiments, and other attempts to make chaos searchable.",
      icon: "hub",
      color: "violet",
    },
  ],
  projects: [
    {
      title: "TajsGraph",
      subtitle: "Satisfactory graphics overhaul",
      description:
        "Rendering obsession packaged as a modding project: cleaner visuals, better defaults, and a lot of staring at settings until they confess.",
      tags: ["Satisfactory", "graphics", "rendering", "modding"],
      href: "https://github.com/tajemniktv",
    },
    {
      title: "Taj's Mods",
      subtitle: "Upload Labs / Godot mod ecosystem",
      description:
        "A messy-but-useful ecosystem idea for game tweaks, UI experiments, mod packaging, and tools that remove tiny annoyances.",
      tags: ["mods", "Godot", "UX", "tools"],
      href: "https://github.com/tajemniktv",
    },
    {
      title: "TajsOS",
      subtitle: "Personal LifeOS experiment",
      description:
        "A second-brain style app idea for tasks, notes, mood, systems, and the daily attempt to remember what the plan was.",
      tags: ["LifeOS", "notes", "automation", "systems"],
      href: "https://github.com/tajemniktv",
    },
    {
      title: "UEiniLab",
      subtitle: "Unreal Engine INI/CVar tooling",
      description:
        "VS Code extension territory for exploring, editing, and understanding Unreal Engine config variables without losing the plot.",
      tags: ["VS Code", "Unreal", "INI", "CVar"],
      href: "https://github.com/tajemniktv",
    },
    {
      title: "tajemniktv.github.io",
      subtitle: "This personal dashboard",
      description:
        "The public control panel: Astro, Tailwind, GitHub Pages, purple glass, and enough personality to stop looking like a template.",
      tags: ["Astro", "Tailwind", "static", "personal site"],
      href: "https://github.com/tajemniktv/tajemniktv.github.io",
    },
  ],
  inputQueue: {
    title: "Current rabbit holes",
    description:
      "A rotating input queue instead of a fake bookshelf. Some of this becomes notes. Some of it becomes ten browser tabs and a suspiciously specific opinion.",
    items: [
      "Psychometrics, attention, and behavior loops",
      "Satisfactory rendering and UI polish",
      "Unreal Engine config/CVar tooling",
      "Godot mod ecosystems and upload workflows",
      "Music for focus, emotion, and late-night maintenance",
    ],
  },
  lab: {
    title: "Lab Notes",
    status: "Currently incubating",
    description:
      "Not a formal blog. More like experiments, rabbit holes, project notes, half-polished thoughts, and occasional brain dumps that survived long enough to be useful.",
    emptyTitle: "Public notes are still booting",
    emptyDescription:
      "The old placeholder essays are staying private until they stop sounding like a template wearing a trench coat.",
    href: "/lab",
  },
  elsewhere: siteData.socials,
};
