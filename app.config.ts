import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
		server: {preset: "vercel"}
	//plugins: [solid({ adapter: vercel() })]
});
