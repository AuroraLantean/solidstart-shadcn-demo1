import type { Component, ComponentProps } from "solid-js";
import { Button } from "./ui/button";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface WalletButtonProps extends ComponentProps<any> {
	// add props here
}
//https://docs.phantom.app/solana/establishing-a-connection
const WalletButton: Component<WalletButtonProps> = (
	props: WalletButtonProps,
) => {
	//provider.disconnect();
	return (
		<div id="walletButton" class="fixed top-1 sm:top-2 right-9">
			<Button class="h-8 rounded-lg">Connect Wallet</Button>
		</div>
	);
};

export default WalletButton;
