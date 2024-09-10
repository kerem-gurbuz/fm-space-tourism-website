export enum TECHNOLOGY_NAME {
  LAUNCH_VEHICLE = 'Launch vehicle',
  SPACEPORT = 'Spaceport',
  SPACE_CAPSULE = 'Space capsule',
}
export type Technology = {
  name: string;
  imageSrc: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export const TECHNOLOGIES: { [key in TECHNOLOGY_NAME]: Technology } = {
  [TECHNOLOGY_NAME.LAUNCH_VEHICLE]: {
    name: 'Launch vehicle',
    imageSrc: {
      portrait: '/assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: '/assets/technology/image-launch-vehicle-landscape.jpg',
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  [TECHNOLOGY_NAME.SPACEPORT]: {
    name: 'Spaceport',
    imageSrc: {
      portrait: '/assets/technology/image-spaceport-portrait.jpg',
      landscape: '/assets/technology/image-spaceport-landscape.jpg',
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  },
  [TECHNOLOGY_NAME.SPACE_CAPSULE]: {
    name: 'Space capsule',
    imageSrc: {
      portrait: '/assets/technology/image-space-capsule-portrait.jpg',
      landscape: '/assets/technology/image-space-capsule-landscape.jpg',
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};
