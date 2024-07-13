// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { sidebarItems } from "./components/site_data";
import SidebarDesktop from "./components/SidebarDesktop";
import MobileMenu from "./components/MobileMenu";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en" class="dark">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					{assets}
				</head>
				<body>
					<MobileMenu />
					<SidebarDesktop sidebarItems={sidebarItems} />
					<main id="app" class="sm:ml-[170px] mt-5 sm:mt-0 h-screen">
						{children}
					</main>
					{scripts}
				</body>
			</html>
		)}
	/>
));
