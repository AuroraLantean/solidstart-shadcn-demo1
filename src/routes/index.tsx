import ReadFromCtrt from "~/components/ReadFromCtrt";
import Web3Form from "~/components/Web3Form";
import { ll } from "~/lib/utils";

export default function Home() {
  ll(import.meta.env.VITE_PUBLIC_ETHEREUM_ADDR2);
  
  return (
    <div class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Blockchain DAPP</h1>
      
      <div class="flex flex-row justify-around">
        <ReadFromCtrt />
        <Web3Form />
      </div>
    </div>
  );
}//3253 Popover does not work!
