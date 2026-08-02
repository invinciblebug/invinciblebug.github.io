export const SITE = {
  title: 'Invincible Bug',
  tagline: 'Because you deserve something better.',
  description: 'Works by Invincible Bug. Open source projects, software, and utilities.',
  url: 'https://invinciblebug.github.io',
  author: 'Invincible Bug',
  authorAvatar: '/web-app-manifest-512x512.png',
  keywords: ['open source', 'software', 'utilities', 'tools', 'developer', 'github', 'invincible bug', 'Smart Simulation', 'Sims 4 mod'],
  language: 'en',
  type: 'website',
  theme: '#0a0a0a',
} as const;

export const PROJECTS = {
  smartSimulation: {
    name: 'Smart Simulation',
    version: '1.0.0',
    description: 'A Sims 4 mod that detects and recovers from stalls, speeds up loading, monitors routing, and tunes game performance.',
    github: 'https://github.com/invinciblebug/SmartSimulation',
    githubCore: 'https://github.com/invinciblebug/SmartSimulation-Core',
    curseforge: 'https://www.curseforge.com/sims4/mods/smart-simulation',
  },
} as const;

export const LINKS = {
  github: 'https://github.com/invinciblebug',
  githubProfile: 'https://github.com/invinciblebug?tab=repositories',
  curseforgeProfile: 'https://www.curseforge.com/members/invinciblebug',
  blog: '/blog',
  rss: '/rss.xml',
} as const;
