import slugify from 'slugify';

export enum NAVIGATION_LABEL {
  HOME = 'HOME',
  DESTINATION = 'DESTINATION',
  CREW = 'CREW',
  TECHNOLOGY = 'TECHNOLOGY',
}

export const SLUGIFY_OPTIONS: Parameters<typeof slugify>[1] = {
  strict: true,
  trim: true,
  lower: true,
};

export type NavigationLink = {
  label: string;
  href: string;
};

export const NAVIGATION_LINKS: { [key in NAVIGATION_LABEL]: NavigationLink } = {
  [NAVIGATION_LABEL.HOME]: {
    label: NAVIGATION_LABEL.HOME,
    href: '/',
  },
  [NAVIGATION_LABEL.DESTINATION]: {
    label: NAVIGATION_LABEL.DESTINATION,
    href: '/' + slugify(NAVIGATION_LABEL.DESTINATION, SLUGIFY_OPTIONS),
  },
  [NAVIGATION_LABEL.CREW]: {
    label: NAVIGATION_LABEL.CREW,
    href: '/' + slugify(NAVIGATION_LABEL.CREW, SLUGIFY_OPTIONS),
  },
  [NAVIGATION_LABEL.TECHNOLOGY]: {
    label: NAVIGATION_LABEL.TECHNOLOGY,
    href: '/' + slugify(NAVIGATION_LABEL.TECHNOLOGY, SLUGIFY_OPTIONS),
  },
};
