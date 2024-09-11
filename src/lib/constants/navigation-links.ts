import slugify from 'slugify';

enum NAVIGATION_LABEL {
  HOME = 'HOME',
  DESTINATION = 'DESTINATION',
  CREW = 'CREW',
  TECHNOLOGY = 'TECHNOLOGY',
}

const SLUGIFY_OPTIONS: Parameters<typeof slugify>[1] = {
  replacement: '-',
  lower: true,
  strict: true,
  trim: true,
};

const createHref = (label: NAVIGATION_LABEL): string => {
  return label === NAVIGATION_LABEL.HOME
    ? '/'
    : `/${slugify(label, SLUGIFY_OPTIONS)}`;
};

export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationLinks = Record<NAVIGATION_LABEL, NavigationLink>;

export const NAVIGATION_LINKS: NavigationLinks = Object.values(
  NAVIGATION_LABEL,
).reduce((acc, label) => {
  acc[label] = {
    label,
    href: createHref(label),
  };
  return acc;
}, {} as NavigationLinks);
