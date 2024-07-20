import {
	type Component,
	type ComponentProps,
	createResource,
	createSignal,
	Match,
	Show,
	Switch,
	useContext,
} from "solid-js";
import { getShortAddr, ll, makeShortAddr, printOut } from "~/lib/utils";
import { Separator } from "./ui/separator";
import { useCartContext } from "../../context/CartContext";

const fetchUser = async (id: undefined | string) => {
	ll("fetchUser()...");
	if (typeof id === "string") {
		const response = await fetch(`https://swapi.dev/api/people/${id}/`);
		return response.json();
	}
	return null;
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface ReadFromCtrtProps extends ComponentProps<any> {
	// add props here
}
const ReadFromCtrt: Component<ReadFromCtrtProps> = (
	props: ReadFromCtrtProps,
) => {
	const { state, setState } = useCartContext();

	const [userId, setUserId] = createSignal(undefined);
	const [user] = createResource(userId, fetchUser);
	ll("userId:", userId(), "user:", user());
	/*  const { chainType, isInitialized, chainName, chainId, wallet, err, tokenAddr, nftAddr, salesAddr, walletBalcNative, walletBalcToken, nftOriginalOwner,
    walletNftArray, salesBalcNative, salesBalcToken,
    salesNftArray, nativeAssetName, nativeAssetSymbol, nativeAssetDecimals, tokenName, tokenSymbol, addr1Def, addr2Def, } = useWeb3Store(
      useShallow((state) => ({ ...state }))
)*/
	const chainName = "Ethereum";
	const chainId = 1;
	const wallet = "0x1234567ABCDEFG";
	const nativeAssetSymbol = "ETH";
	const walletBalcNative = 100;
	const tokenSymbol = "DGN";
	const walletBalcToken = 1000;
	const salesAddr = "0xSales001";
	const tokenAddr = "0xToken001";
	const nftAddr = "0xNFT001";
	const salesBalcNative = 15;
	const salesBalcToken = 170;
	const walletNftArray: number[] = [];
	const salesNftArray = [1, 2, 3, 4, 5, 6, 7];

	return (
		<div
			id="readFromCtrt"
			class="flex flex-col text-foreground border border-sky-500 rounded"
		>
			<h1 class="text-lg font-black">ReadFromCtrt</h1>
			<div class="my-2 mx-2 break-all text-left">
				<p>User: {getShortAddr(state.account)}</p>
				<p>isConnected: {printOut(state.isConnected)}</p>
				<p>nftIds: {JSON.stringify(state.nftIds)}</p>
				<Show when={user.loading}>
					<p>Loading...</p>
				</Show>
				<Switch>
					<Match when={user.error}>
						<span>Error: {user.error()}</span>
					</Match>
					<Match when={user()}>
						<div>{JSON.stringify(user())}</div>
					</Match>
				</Switch>
				<p>
					Chain: {chainName}, chainId: {chainId}
				</p>
				<p>User Wallet: {makeShortAddr(wallet)}</p>
				<p>
					User {nativeAssetSymbol} Balance: {walletBalcNative}
				</p>
				<p>
					User {tokenSymbol} Balance: {walletBalcToken}
				</p>
				<p>User NFT(s): {walletNftArray.toString() || "none"}</p>
			</div>

			<div class="mx-2 mb-2 break-all text-left">
				<p>Sales Contract: {makeShortAddr(salesAddr)}</p>
				<p>
					Sales Contract {nativeAssetSymbol} Balance: {salesBalcNative}
				</p>
				<p>
					Sales Contract {tokenSymbol} Balance: {salesBalcToken}
				</p>
				<p>Sales Contract NFT(s): {salesNftArray.toString() || "none"}</p>
			</div>

			<Separator />
			<p class="font-semibold break-all mt-2 mb-1">Read output: {}</p>

			<div class="mb-2 break-all">
				<p>Deployed Contracts:</p>
				<p>
					<span>Token:</span> {tokenAddr}
				</p>
				<p>
					<span>NFT:</span> {nftAddr}
				</p>
				<p>
					<span>Sales:</span> {salesAddr}
				</p>
			</div>
		</div>
	);
};
export default ReadFromCtrt;
