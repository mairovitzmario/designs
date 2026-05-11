export type TrooperListType = {
  name: string
  description: string
  commander: string
  img: string
  color: string
}[]

const trooperList: TrooperListType = [
  {
    name: '501st Legion',
    description:
      'An elite military division of the Grand Army of the Republic. Known for their bravery, unconventional tactics, and unwavering loyalty to their Jedi General, Anakin Skywalker, and Clone Captain Rex.',
    commander: 'Anakin Skywalker',
    img: '501.webp',
    color: '#1F61B5', // 501st Blue
  },
  {
    name: '212th Battalion',
    description:
      'A highly decorated military unit distinguished by their orange armor markings. Led by Jedi General Obi-Wan Kenobi and Clone Commander Cody, they specialize in large-scale frontal assaults, sieges, and textbook military precision.',
    commander: 'Obi-Wan Kenobi',
    img: '212.webp',
    color: '#E56B1F', // 212th Orange
  },
  {
    name: 'The Wolfpack',
    description:
      'The 104th Battalion is a specialized unit known for its resilience, grim determination, and close-knit brotherhood. Commanded by Jedi Master Plo Koon and Clone Commander Wolffe, they sport distinctive grey armor.',
    commander: 'Plo Koon',
    img: 'wolfpack.webp',
    color: '#8A8C8E', // Wolfpack Grey
  },
  {
    name: 'Coruscant Guard',
    description:
      'Elite clone shock troopers tasked with maintaining order on the capital world of Coruscant. Under the command of Clone Commander Fox, they serve as peacekeepers, VIP escorts, riot control, and prison guards.',
    commander: 'Fox',
    img: 'coruscant.webp',
    color: '#A61D24', // Coruscant Guard Red
  },
]

export default trooperList
