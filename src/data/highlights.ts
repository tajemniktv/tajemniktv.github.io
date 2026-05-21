export interface HighlightSection {
  title: string;
  items: {
    label: string;
    description?: string;
    href?: string;
    icon?: string;
  }[];
}

export interface HighlightItem {
  slug: string;
  title: string;
  icon: string;
  description: string;
  hero: {
    statusChip?: string;
    subtitle: string;
  };
  sections: HighlightSection[];
}

export const highlightsData: HighlightItem[] = [
  {
    slug: "psychology",
    title: "Psychology & mind systems",
    icon: "psychology",
    description: "Attention, behavior, measurement, and the messy control panel of being a person.",
    hero: {
      statusChip: "Currently reading around psychometrics",
      subtitle:
        "Psychology is the lens: attention, motivation, self-regulation, measurement, identity, and the strange ways systems shape people.",
    },
    sections: [
      {
        title: "What I'm exploring",
        items: [
          { label: "Psychometrics", description: "How we measure traits, validity, and human variance without pretending the map is the territory." },
          { label: "Attention loops", description: "Interfaces, reward systems, friction, and the tiny mechanics that steer behavior." },
          { label: "Feedback loops", description: "Personal workflows, habits, motivation, and behavior viewed as one tangled machine." },
        ],
      },
      {
        title: "Likely lab-note territory",
        items: [
          { label: "Cognitive load in interfaces", description: "Draft queue.", icon: "pending" },
          { label: "Avatars, identity, and game systems", description: "Draft pile. Not public yet.", icon: "pending" },
        ],
      },
    ],
  },
  {
    slug: "modding",
    title: "Game modding & UX",
    icon: "extension",
    description: "Game interfaces, QoL tweaks, performance, and fixing the one thing that keeps annoying me.",
    hero: {
      statusChip: "TajsMods in orbit",
      subtitle:
        "Modding is where design, systems, frustration, and curiosity meet. Sometimes the best feature is just removing the little paper cut.",
    },
    sections: [
      {
        title: "Project lanes",
        items: [
          { label: "TajsGraph", description: "Satisfactory graphics overhaul and rendering-tweak project lane.", href: "https://github.com/tajemniktv" },
          { label: "Taj's Mods", description: "Upload Labs / Godot-flavored mod ecosystem ideas.", href: "https://github.com/tajemniktv" },
          { label: "UEiniLab", description: "Unreal Engine INI and CVar tooling experiments.", href: "https://github.com/tajemniktv" },
        ],
      },
      {
        title: "What I care about",
        items: [
          { label: "Less friction", description: "Menus, defaults, workflows, and tiny UX details that compound." },
          { label: "Better feedback", description: "State, visibility, performance feel, and readable system behavior." },
          { label: "Performance sanity", description: "Cleaner visuals are nice. Smoothness still matters." },
        ],
      },
    ],
  },
  {
    slug: "graphics",
    title: "Graphics/rendering experiments",
    icon: "deployed_code",
    description: "Lighting, rendering config, visual polish, and performance-sensitive tinkering.",
    hero: {
      statusChip: "INI archaeology mode",
      subtitle:
        "The part of my brain that asks whether a scene can look cleaner, sharper, moodier, and still not melt the frame time.",
    },
    sections: [
      {
        title: "Recurring targets",
        items: [
          { label: "Rendering presets", description: "Trying to make complex settings understandable and repeatable." },
          { label: "Visual defaults", description: "Reducing ugly tradeoffs without hiding what changed." },
          { label: "Config tooling", description: "Editor helpers, CVar notes, and safer experimentation loops." },
        ],
      },
      {
        title: "Tools nearby",
        items: [
          { label: "UEiniLab", description: "VS Code extension idea for Unreal config/CVar work.", href: "https://github.com/tajemniktv" },
          { label: "TajsGraph", description: "Satisfactory visual tuning project lane.", href: "https://github.com/tajemniktv" },
        ],
      },
    ],
  },
  {
    slug: "music",
    title: "Music, mood & processing",
    icon: "headphones",
    description: "Playlists as emotional tooling, focus scaffolding, and memory compression.",
    hero: {
      subtitle:
        "Music is part mood regulation, part archive, part cinematic overcommitment. Useful for focus, recovery, and making normal tasks feel like a boss fight.",
    },
    sections: [
      {
        title: "Modes",
        items: [
          { label: "Deep focus", description: "Ambient, electronic, soundtrack, and texture-heavy music for getting into the tunnel.", icon: "graphic_eq" },
          { label: "Night maintenance", description: "Late-session music for polishing, debugging, and pretending time is fake.", icon: "nights_stay" },
          { label: "Emotional processing", description: "Songs that turn vague internal weather into something with a shape.", icon: "favorite" },
        ],
      },
    ],
  },
  {
    slug: "systems",
    title: "Tools & digital life systems",
    icon: "hub",
    description: "Personal dashboards, automation, notes, and attempts to keep context findable.",
    hero: {
      statusChip: "TajsOS on the bench",
      subtitle:
        "I keep trying to build better personal control panels: notes, tasks, moods, projects, context, and the daily fight against forgotten intent.",
    },
    sections: [
      {
        title: "Experiments",
        items: [
          { label: "TajsOS", description: "Personal LifeOS / second-brain style app experiment.", href: "https://github.com/tajemniktv" },
          { label: "This site", description: "Public dashboard, identity hub, and static control panel.", href: "https://github.com/tajemniktv/tajemniktv.github.io" },
          { label: "Automation notes", description: "Private workflows and tooling ideas, not all public.", icon: "lock" },
        ],
      },
      {
        title: "Design rules",
        items: [
          { label: "Information-rich", description: "Dense enough to be useful, calm enough to actually read." },
          { label: "Low ceremony", description: "No productivity theater. Just systems that reduce mental load." },
        ],
      },
    ],
  },
];
