import { useParams } from "@solidjs/router";
import type { Component, ComponentProps } from "solid-js";
import MobileMenu from "~/components/MobileMenu";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface NftPageProps extends ComponentProps<any> {
	// add props here
}

const NftPage: Component<NftPageProps> = (props: NftPageProps) => {
	const params = useParams();
	return (
		<div>
			<MobileMenu />
			<h2>
				NftPage: {params.ctrtAddr} {params.nftid}
			</h2>
		</div>
	);
};

export default NftPage;
