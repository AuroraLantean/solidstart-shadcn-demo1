import ReadFromCtrt from "~/components/ReadFromCtrt";
import Web3Form from "~/components/Web3Form";
import { ll } from "~/lib/utils";

export default function Home() {
  ll(import.meta.env.VITE_PUBLIC_ETHEREUM_ADDR2);
  
  return (
    <div class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase mb-4">Blockchain DAPP</h1>
      <div>
        TODO: 3253 Popover does not work!<br />
        TODO: 3344 routes/user/addr<br />
        TODO: 3344 routes/nft/ctrtAddr/nftid
        TODO: 3605 pathname to button ghost
      </div>
      
      <div class="flex flex-col gap-1 md:flex-row md:justify-center md:gap-5">
        <ReadFromCtrt />
        <Web3Form />
      </div>
    </div>
  );
}
