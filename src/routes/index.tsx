import ReadFromCtrt from "~/components/ReadFromCtrt";
import TopRight from "~/components/TopRight";
import Web3Form from "~/components/Web3Form";
import { ll, printOut } from "~/lib/utils";
import { useCartContext } from "../../context/CartContext";

export default function Home() {
	const { state, setState } = useCartContext();

	return (
		<div class="text-center mx-auto text-gray-700 p-4 text-foreground bg-background">
			<TopRight />
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase mb-4">
				Blockchain DAPP
			</h1>
			<div class="font-bold text-3xl">
				Buy NFT Now! - {printOut(state.isConnected)}
			</div>

			<div class="flex flex-col gap-1 md:flex-row md:justify-center lg:gap-5">
				<ReadFromCtrt />
				<Web3Form />
			</div>
		</div>
	);
}
