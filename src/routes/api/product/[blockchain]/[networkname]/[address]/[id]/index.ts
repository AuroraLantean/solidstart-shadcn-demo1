import type { APIEvent } from "@solidjs/start/server";
const ll = console.log;
export async function GET({ params }: APIEvent) {
	ll(`params: ${JSON.stringify(params)}`);
	const assetType = "NFT";
	return [
		{
			blockchain: `${params.blockchain}`,
			networkName: `${params.networkname}`,
			address: `${params.address}`,
			id: `${params.id}`,
			type: `${assetType}`,
			name: "NFT_001",
		},
	];
} //return json({message: "complete"})

export async function POST({ params, request }: APIEvent) {
	ll(`params: ${JSON.stringify(params)}`);

	const body = await new Response(request.body).json();
	ll("body:", body);

	const assetType = "NFT";
	return [
		{
			blockchain: `${params.blockchain}`,
			networkName: `${params.networkname}`,
			address: `${params.address}`,
			id: `${params.id}`,
			type: `${assetType}`,
			name: `${body.name}`,
			color: `${body.color}`,
			age: `${body.age}`,
		},
	];
}

export async function PATCH({ params, request }: APIEvent) {
	ll(`params: ${JSON.stringify(params)}`);

	const body = await new Response(request.body).json();
	ll("body:", body);

	const assetType = "NFT";
	return [
		{
			blockchain: `${params.blockchain}`,
			networkName: `${params.networkname}`,
			address: `${params.address}`,
			id: `${params.id}`,
			type: `${assetType}`,
			name: `${body.name}`,
			color: `${body.color}`,
			age: `${body.age}`,
		},
	];
}

export async function DELETE({ params, request }: APIEvent) {
	ll(`params: ${JSON.stringify(params)}`);

	const assetType = "NFT";
	return [
		{
			blockchain: `${params.blockchain}`,
			networkName: `${params.networkname}`,
			address: `${params.address}`,
			id: `${params.id}`,
			type: `${assetType}`,
		},
	];
}
