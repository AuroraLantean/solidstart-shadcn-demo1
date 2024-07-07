import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const ll = console.log;
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const makeShortAddr = (str: string) => {
  return `${str.slice(0, 6)}....${str.slice(str.length - 4)}`
}
