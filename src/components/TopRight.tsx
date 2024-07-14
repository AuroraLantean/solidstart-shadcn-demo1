import type { Component, ComponentProps } from "solid-js";
import MobileMenu from "./MobileMenu";
import { sidebarItems } from "~/components/site_data";
import WalletButton from "./WalletButton";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface TopRightProps extends ComponentProps<any> {
	// add props here
}

const TopRight: Component<TopRightProps> = (props: TopRightProps) => {
	return (
		<div class="">
			<WalletButton />
			<MobileMenu sidebarItems={sidebarItems} />
		</div>
	);
};

export default TopRight;
