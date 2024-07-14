import { onMount } from "solid-js";
import ReadFromCtrt from "~/components/ReadFromCtrt";
import TopRight from "~/components/TopRight";
import Web3Form from "~/components/Web3Form";
import { ll, printOut } from "~/lib/utils";
import { initWallet, web3StatesDefault } from "~/lib/web3init";

export default function Home() {
	const ethAddr1 = import.meta.env.VITE_PUBLIC_ETHEREUM_ADDR2;
	ll(ethAddr1);
	let initOut = web3StatesDefault;
	onMount(async () => {
		initOut = await initWallet();
	});

	return (
		<div class="text-center mx-auto text-gray-700 p-4 text-foreground bg-background">
			<TopRight />
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase mb-4">
				Blockchain DAPP
			</h1>
			<div class="font-bold text-3xl">
				Buy NFT Now! - {printOut(initOut.isConnected)}
			</div>

			<div class="flex flex-col gap-1 md:flex-row md:justify-center lg:gap-5">
				<ReadFromCtrt />
				<Web3Form />
			</div>
		</div>
	);
}
