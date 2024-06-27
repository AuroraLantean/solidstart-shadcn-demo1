import type { APIEvent } from "@solidjs/start/server";
export async function GET({ params }: APIEvent) {
  console.log(`Category: ${params.id}`);
  return [
    {  blockchain: "ethereum",
      networkname: "sepolia",
      address: "0x123abc", },
    { id:1, name: "NFT_001"},
    { id:2, name: "NFT_002"},
  ]
}

export function POST() {
  // ...
}

export function PATCH() {
  // ...
}

export function DELETE() {
  // ...
}