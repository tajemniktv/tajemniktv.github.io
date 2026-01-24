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
    title: "Psychology",
    icon: "psychology",
    description: "Student of human mind & behaviors.",
    hero: {
      statusChip: "Currently studying psychometrics",
      subtitle: "Exploring the intersection of cognitive science, attention economy, and digital systems."
    },
    sections: [
      {
        title: "What I'm exploring",
        items: [
          { label: "Psychometrics", description: "Measuring latent traits and validity in digital testing." },
          { label: "Attention Economy", description: "How UI patterns exploit dopamine loops." },
          { label: "Systems Thinking", description: "Applying cybernetics to human behavior." }
        ]
      },
      {
        title: "Notes",
        items: [
          { label: "Cognitive Load in UI", href: "/writing/psychology-and-tech" },
          { label: "The Self & The Avatar", href: "#", description: "Drafting..." }
        ]
      }
    ]
  },
  {
    slug: "modding",
    title: "Modding",
    icon: "construction",
    description: "QoL mods, UI/UX performance.",
    hero: {
      statusChip: "Building TajsMods",
      subtitle: "Fixing games one XML file at a time. Focusing on UI, UX, and performance optimization."
    },
    sections: [
      {
        title: "My Mods",
        items: [
          { label: "Core Library", description: "Common utilities for my mod ecosystem.", href: "#" },
          { label: "Command Palette", description: "Unified command interface for power users.", href: "#" },
          { label: "WireDrop", description: "Drag-and-drop wiring helper.", href: "#" }
        ]
      },
      {
        title: "Guides",
        items: [
          { label: "Optimizing HUD Performance", href: "/writing/modding-ux-performance" },
          { label: "XML Layout Basics", href: "#" }
        ]
      }
    ]
  },
  {
    slug: "music",
    title: "Music",
    icon: "headphones",
    description: "Playlists and mood-curation.",
    hero: {
      subtitle: "Soundtracks for deep work, late night coding, and dissociation."
    },
    sections: [
      {
        title: "Playlists",
        items: [
          { label: "Deep Focus", description: "Ambient, drone, and IDM for flow state.", icon: "play_circle" },
          { label: "Night Drive", description: "Synthwave and retrowave for the road.", icon: "play_circle" },
          { label: "Artifacts", description: "Glitch and experimental noises.", icon: "play_circle" }
        ]
      }
    ]
  },
  {
    slug: "reading",
    title: "Reading",
    icon: "menu_book",
    description: "Book notes and thoughts.",
    hero: {
      statusChip: "Reading: Dune",
      subtitle: "Collecting mental models from sci-fi, philosophy, and technical manuals."
    },
    sections: [
      {
        title: "Currently Reading",
        items: [
          { label: "Dune", description: "Frank Herbert • 65%", icon: "bookmark" }
        ]
      },
      {
        title: "Bookshelf",
        items: [
          { label: "Thinking, Fast and Slow", description: "Daniel Kahneman" },
          { label: "The Design of Everyday Things", description: "Don Norman" },
          { label: "Neuromancer", description: "William Gibson" }
        ]
      }
    ]
  },
  {
    slug: "opensource",
    title: "Open Source",
    icon: "code",
    description: "Contributing to the ecosystem.",
    hero: {
      subtitle: "Believer in free software, transparency, and community-driven development."
    },
    sections: [
      {
        title: "Projects",
        items: [
          { label: "tajemniktv.github.io", description: "This site source code.", href: "https://github.com/tajemniktv/tajemniktv.github.io" },
          { label: "Dotfiles", description: "My terminal and editor configuration.", href: "#" }
        ]
      }
    ]
  }
];
