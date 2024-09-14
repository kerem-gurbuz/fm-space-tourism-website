import { clsx, type ClassValue } from 'clsx';
import slugify from 'slugify';
import { twMerge } from 'tailwind-merge';

export function slugifyString(
  string: string,
  options: Parameters<typeof slugify>[1] = {
    replacement: '-',
    lower: true,
    strict: true,
    trim: true,
  },
): string {
  if (!string || typeof string !== 'string') {
    throw new TypeError(
      'slugifyString expects a non-empty string as the first argument.',
    );
  }

  return slugify(string, options);
}

export function createDescription(
  descriptor: string,
  subject: string,
  delimiter: string = '-',
): string {
  if (!descriptor || typeof descriptor !== 'string') {
    throw new Error('Descriptor must be a non-empty string.');
  }
  if (!subject || typeof subject !== 'string') {
    throw new Error('Subject must be a non-empty string.');
  }
  if (
    !delimiter ||
    typeof delimiter !== 'string' ||
    (typeof delimiter === 'string' && delimiter.length !== 1)
  ) {
    throw new Error('Delimiter must be a single character.');
  }

  return `${descriptor} ${subject
    .split(delimiter)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join(' ')}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
