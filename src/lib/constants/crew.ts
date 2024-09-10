export enum MEMBER_NAME {
  DOUGLAS_HURLEY = 'Douglas Hurley',
  MARK_SHUTTLEWORTH = 'Mark Shuttleworth',
  VICTOR_GLOVER = 'Victor Glover',
  ANOUSHEH_ANSARI = 'Anousheh Ansari',
}

export type CrewMember = {
  name: string;
  imageSrc: string;
  role: string;
  bio: string;
};

export const CREW: { [key in MEMBER_NAME]: CrewMember } = {
  [MEMBER_NAME.DOUGLAS_HURLEY]: {
    name: 'Douglas Hurley',
    imageSrc: '/assets/crew/image-douglas-hurley.webp',
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  [MEMBER_NAME.MARK_SHUTTLEWORTH]: {
    name: 'Mark Shuttleworth',
    imageSrc: '/assets/crew/image-mark-shuttleworth.webp',
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  [MEMBER_NAME.VICTOR_GLOVER]: {
    name: 'Victor Glover',
    imageSrc: '/assets/crew/image-victor-glover.webp',
    role: 'Pilot',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  [MEMBER_NAME.ANOUSHEH_ANSARI]: {
    name: 'Anousheh Ansari',
    imageSrc: '/assets/crew/image-anousheh-ansari.webp',
    role: 'Flight Engineer',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
};
