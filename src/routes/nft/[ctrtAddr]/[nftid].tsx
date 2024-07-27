import { useParams } from "@solidjs/router";
import { Show, type Component, type ComponentProps } from "solid-js";
import TopRight from "~/components/TopRight";
import { useCartContext } from "../../../../context/CartContext";
import { ll } from "~/lib/utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface NftPageProps extends ComponentProps<any> {
	// add props here
}

const NftPage: Component<NftPageProps> = (props: NftPageProps) => {
	const params = useParams();
	const { state, setState } = useCartContext();

	return (
		<div>
			<TopRight />
			<h2>
				NftPage: {params.ctrtAddr} {params.nftid}
			</h2>
			<span>
				<Show when={state.account.length > 0} fallback={"loading wallet..."}>
					{state.account}
				</Show>
			</span>
		</div>
	);
};

export default NftPage;
