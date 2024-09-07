import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformString(input: string) {
  return input.trim().toLowerCase().replace(/\s+/g, '-');
}
