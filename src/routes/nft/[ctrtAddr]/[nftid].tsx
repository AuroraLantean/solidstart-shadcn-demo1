import { useParams } from "@solidjs/router";
import type { Component, ComponentProps } from "solid-js";
import TopRight from "~/components/TopRight";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface NftPageProps extends ComponentProps<any> {
	// add props here
}

const NftPage: Component<NftPageProps> = (props: NftPageProps) => {
	const params = useParams();
	return (
		<div>
			<TopRight />
			<h2>
				NftPage: {params.ctrtAddr} {params.nftid}
			</h2>
		</div>
	);
};

export default NftPage;
