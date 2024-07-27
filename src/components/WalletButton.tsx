import { Show, type Component, type ComponentProps } from "solid-js";
import { Button } from "./ui/button";
import { useCartContext } from "../../context/CartContext";
import { getShortAddr, ll } from "~/lib/utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface WalletButtonProps extends ComponentProps<any> {
	// add props here
}
//https://docs.phantom.app/solana/establishing-a-connection
const WalletButton: Component<WalletButtonProps> = (
	props: WalletButtonProps,
) => {
	const { state, setState } = useCartContext();
	//provider.disconnect();
	return (
		<div id="walletButton" class="fixed top-1 sm:top-2 right-9">
			<Button class="h-8 rounded-lg">
				<Show when={state.account.length > 0} fallback={"Connect Wallet"}>
					{getShortAddr(state.account)}
				</Show>
			</Button>
		</div>
	);
};

export default WalletButton;
