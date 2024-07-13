import type { Component, ComponentProps } from "solid-js";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface ThreeLinesIconProps extends ComponentProps<any> {
	// add props here
}

const ThreeLinesIcon: Component<ThreeLinesIconProps> = (
	props: ThreeLinesIconProps,
) => {
	return (
		<>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg
				class="h-5 w-5 fill-current"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			>
				<path d="M3 6h18M3 12h18M3 18h18" />
			</svg>
		</>
	);
};

export default ThreeLinesIcon;
