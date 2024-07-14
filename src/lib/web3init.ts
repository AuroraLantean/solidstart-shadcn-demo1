import type { DragonT } from "../../constants/site_data";
import { ll } from "./utils";

export type nftSalesStatus =
	| "soldToUser"
	| "soldToUnknown"
	| "availableFromOriginalOwner"
	| "availableFromOthers"
	| "availableFromSalesCtrt"
	| "notApproved";
export const nftStatusesDefault = {
	arr: [] as nftSalesStatus[],
	err: "",
};
export const web3StatesDefault = {
	chainType: "",
	chainId: "",
	chainName: "",
	account: "",
	nftOriginalOwner: "",
	tokenAddr: "",
	nftAddr: "",
	salesAddr: "",
	previousChain: "",
	nftStatuses: [] as nftSalesStatus[],
	isConnected: false,
	isDefaultProvider: false,
	warn: "",
	err: "",
	errCode: 0,
	baseURI: "",
	nativeAssetName: "",
	nativeAssetSymbol: "",
	nativeAssetDecimals: "",
	tokenName: "",
	tokenSymbol: "",
	addr1Def: "",
	addr2Def: "",
	accBalcNative: "",
	accBalcToken: "",
	accNftArray: [] as number[],
	salesBalcNative: "",
	salesBalcToken: "",
	salesNftArray: [] as number[],
	decimals: 18,
	nftArray: [] as DragonT[],
	nftIds: [] as number[],
	prices: [] as string[],
};
export type Web3InitOutT = typeof web3StatesDefault;

declare global {
	interface Window {
		ethereum: unknown;
		phantom: {
			solana: {
				publicKey: any;
				isConnected(isConnected: any): unknown;
				on: any;
				connect: any;
				isPhantom: boolean;
			};
		};
	}
}

const afterConnected = (provider, resp) => {
	const addrWallet = resp.publicKey.toString();
	ll("reconnect to Phantom wallet:", addrWallet);
	provider.on("connect", () => ll("connected!"));
	provider.on("disconnect", () => ll("disconnected!"));
	provider.on("accountChanged", (publicKey) => {
		if (publicKey) {
			ll(`Switched to account ${publicKey.toBase58()}`);
		} else {
			provider.connect().catch((err: any) => {});
		}
	});
	ll(provider.publicKey.toString());
	ll(provider.isConnected);
};
//https://docs.phantom.app/solana/establishing-a-connection
export const initPhantomWallet = async () => {
	const provider = window.phantom?.solana;
	if (!provider?.isPhantom) {
		//window.open("https://phantom.app/", "_blank");
		return { ...web3StatesDefault, errCode: 1001, err: "isPhantom is false" };
	}
	try {
		ll("try reconnecting...");
		const resp = await provider.connect({ onlyIfTrusted: true });
		afterConnected(provider, resp);
		return { ...web3StatesDefault, isConnected: true };
	} catch (err) {
		try {
			ll("try to connect first time");
			const resp = await provider.connect();
			afterConnected(provider, resp);
			return { ...web3StatesDefault, isConnected: true };
		} catch (err) {
			return {
				...web3StatesDefault,
				errCode: 1002,
				err: "User rejected the request.",
			};
		}
	}
};
export const initWallet = async (walletName = "phantom") => {
	try {
		ll("initWallet()...");
		if ("phantom" in window) {
			const initOut = await initPhantomWallet();
			return initOut;
		}
		//check metamask and other wallets...
		return { ...web3StatesDefault, err: "no wallet detected" };
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.error("@evmInitializeWallet:", err);
		if (err.message) {
			return { ...web3StatesDefault, err: err.message };
		}
		return { ...web3StatesDefault, err: JSON.stringify(err) };
	}
};
//	window.addEventListener("load", async () => {	});
