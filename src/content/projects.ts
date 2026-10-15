export type ProjectScreenshot = {
  src: string
  alt: string
  width: number
  height: number
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
      'A cozy pixel-art train game where real steps from Apple Health mine coal. Stoke the engine to travel between towns, haul freight, and furnish your carriages.',
    metadata: ['React Native', 'TypeScript', 'HealthKit', 'Aseprite'],
    screenshots: [
      {
        src: '/images/projects/pocket-railway-title.webp',
        alt: 'Pocket Railway title screen: a pixel-art station platform with a steam train under the nameboard.',
        width: 603,
        height: 1311,
      },
      {
        src: '/images/projects/pocket-railway-carriage.webp',
        alt: 'The carriage interior, furnished with a wardrobe, armchairs, a rug, and a lamp.',
        width: 603,
        height: 1311,
      },
      {
        src: '/images/projects/pocket-railway-ship-chandler.webp',
        alt: 'Inside the Saltwick ship chandler, with the shopkeeper at the counter among ship’s lamps and nautical goods.',
        width: 603,
        height: 1311,
      },
      {
        src: '/images/projects/pocket-railway-saltwick.webp',
        alt: 'The harbor town of Saltwick, with a lighthouse, fishing boats, and a pier.',
        width: 603,
        height: 1311,
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
