import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const ll = console.log;
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const makeShortAddr = (str: string) => {
	return `${str.slice(0, 6)}....${str.slice(str.length - 4)}`;
};
export const printOut = (input: unknown) => {
	if (input === undefined) return "undefined";
	if (typeof input === "string") return input;
	if (typeof input === "boolean") return input === true ? "true" : "false";
	if (typeof input === "number") return input.toString();
	if (typeof input === "object") return JSON.stringify(input);
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const parseFloatSafe = (input: any) => {
	const out = Number.parseFloat(input);
	if (Number.isNaN(out)) {
		console.error("parseFloatSafe failed");
		return -1.1;
	}
	return out;
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const parseIntSafe = (input: any) => {
	const out = Number.parseInt(input);
	if (Number.isNaN(out)) {
		console.error("parseIntSafe failed");
		return -1;
	}
	return out;
};
