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
export const web3StateDefault = {
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
export type Web3StatesT = typeof web3StateDefault;

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
			ethereum: {
				publicKey: any;
				isConnected(isConnected: any): unknown;
				on: any;
				connect: any;
				isPhantom: boolean;
			};
		};
	}
}

const afterConnected = (provider: any, resp: any): string | undefined => {
	if (provider === undefined) return undefined;
	const addrWallet = resp.publicKey.toString();
	ll("reconnect to Phantom wallet:", addrWallet);
	provider.on("connect", () => ll("connected!"));
	provider.on("disconnect", () => ll("disconnected!"));
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	provider.on("accountChanged", (publicKey: any) => {
		if (publicKey) {
			ll(`Switched to account ${publicKey.toBase58()}`);
			return publicKey.toBase58();
		}
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const resp2 = provider.connect().catch((err: any) => {
			ll("failed to connect to Phantom wallet:", err);
			return undefined;
		});
		const addrWallet2 = resp.publicKey.toString();
		return addrWallet2;
	});
	ll(provider.publicKey.toString());
	ll(provider.isConnected);
	return addrWallet;
};
//https://docs.phantom.app/solana/establishing-a-connection
export const initPhantomWallet = async () => {
	const provider = window.phantom?.solana;
	if (!provider?.isPhantom) {
		//window.open("https://phantom.app/", "_blank");
		return { ...web3StateDefault, errCode: 1001, err: "isPhantom is false" };
	}
	try {
		ll("try reconnecting...");
		const resp = await provider.connect({ onlyIfTrusted: true });
		const addrWallet = afterConnected(provider, resp);
		return { ...web3StateDefault, isConnected: true };
	} catch (err) {
		try {
			ll("try to connect first time");
			const resp = await provider.connect();
			const addrWallet = afterConnected(provider, resp);
			return { ...web3StateDefault, isConnected: true };
		} catch (err) {
			return {
				...web3StateDefault,
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
		return { ...web3StateDefault, err: "no wallet detected" };
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (err: any) {
		console.error("@evmInitializeWallet:", err);
		if (err.message) {
			return { ...web3StateDefault, err: err.message };
		}
		return { ...web3StateDefault, err: JSON.stringify(err) };
	}
};
//	window.addEventListener("load", async () => {	});
