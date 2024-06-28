import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const ll = console.log;
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}