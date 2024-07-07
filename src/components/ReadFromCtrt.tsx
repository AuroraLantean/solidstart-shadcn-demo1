import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button"
import { NumberField, NumberFieldDecrementTrigger, NumberFieldErrorMessage, NumberFieldIncrementTrigger, NumberFieldInput } from "./ui/number-field";
import { TextField, TextFieldInput, TextFieldLabel } from "./ui/text-field";
import { ll, makeShortAddr } from "~/lib/utils";
import { Separator } from "./ui/separator";

export default function ReadFromCtrt() {
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
  const tokenSymbol = "DGN"
  const walletBalcToken = 1000;
  const salesAddr = "0xSales001";
  const tokenAddr = "0xToken001";
  const nftAddr = "0xNFT001";
  const salesBalcNative = 15;
  const salesBalcToken = 170;
  const walletNftArray: number[] = [];
  const salesNftArray = [1, 2, 3, 4, 5, 6, 7];

  return (<div id="readFromCtrt" class="flex flex-col text-foreground">
    <h1 class="text-lg font-black">ReadFromCtrt</h1>
      <div class="my-2 break-all mb-3 text-left">
        <p>Chain: {chainName}, chainId: {chainId}</p>
        <p>User Wallet: {makeShortAddr(wallet)}</p>
        <p>User {nativeAssetSymbol} Balance: {walletBalcNative}</p>
        <p>User {tokenSymbol} Balance: {walletBalcToken}</p>
        <p>User NFT(s): {walletNftArray.toString() || "none"}</p>
      </div>

      <div class='break-all text-left'>
        <p>Sales Contract: {makeShortAddr(salesAddr)}</p>
        <p>Sales Contract {nativeAssetSymbol} Balance: {salesBalcNative}</p>
        <p>Sales Contract {tokenSymbol} Balance: {salesBalcToken}</p>
        <p>Sales Contract NFT(s): {salesNftArray.toString() || "none"}</p>
      </div>

      <p class='font-semibold break-all my-3'>
        Read output: { }</p>

      <Separator />
      <div class="break-all">
        <p>Deployed Contract Addresses:</p>
        <p><span>Token:</span> {tokenAddr}</p>
        <p><span>NFT:</span> {nftAddr}</p>
        <p><span>Sales:</span> {salesAddr}</p>
      </div>
</div>);
}
