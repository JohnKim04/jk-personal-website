export type ProjectScreenshot = {
  src: string
  alt: string
  width: number
  height: number
  /** Pixel art is scaled with nearest-neighbour sampling so it stays crisp. */
  pixelArt?: boolean
}

export type Project = {
  name: string
  platform: string
  status: string
  description: string
  metadata: string[]
  href?: string
  screenshots: ProjectScreenshot[]
}

export const projects: Project[] = [
  {
    name: 'Pocket Railway',
    platform: 'iOS game',
    status: 'In progress',
    description:
      'A cozy pixel-art train game where real steps from Apple Health mine coal. Shovel it into the engine to travel between towns, earn gold, and furnish the carriage.',
    metadata: ['React Native', 'TypeScript', 'HealthKit', 'Aseprite'],
    screenshots: [
      {
        src: '/images/projects/pocket-railway-station.webp',
        alt: 'Pocket Railway title screen: a pixel-art station platform with a steam train and a Start New Journey button.',
        width: 603,
        height: 1206,
        pixelArt: true,
      },
      {
        src: '/images/projects/pocket-railway-engine-room.webp',
        alt: 'The engine room, where the traveler shovels mined coal into the firebox.',
        width: 643,
        height: 1286,
        pixelArt: true,
      },
      {
        src: '/images/projects/pocket-railway-millbrook.webp',
        alt: 'The town of Millbrook, with a cobbled square, market stalls, and a general store.',
        width: 389,
        height: 778,
        pixelArt: true,
      },
    ],
  },
  {
    name: 'Foresight',
    platform: 'iOS app',
    status: 'In progress',
    description:
      'A native journal for recording what happened, checking in on how it turned out, and reviewing patterns over time without claiming cause and effect.',
    metadata: ['Swift', 'SwiftUI', 'SwiftData', 'Swift Charts'],
    href: 'https://github.com/JohnKim04/Foresight-iOS',
    screenshots: [
      {
        src: '/images/projects/foresight-journal.webp',
        alt: 'Foresight journal timeline with recent logs and their check-in status.',
        width: 603,
        height: 1311,
      },
      {
        src: '/images/projects/foresight-check-in.webp',
        alt: 'The Check In tab listing logs that are ready for a reflection.',
        width: 603,
        height: 1311,
      },
      {
        src: '/images/projects/foresight-patterns.webp',
        alt: 'The Patterns tab showing outcome evidence for a workout category.',
        width: 603,
        height: 1311,
      },
    ],
  },
]
