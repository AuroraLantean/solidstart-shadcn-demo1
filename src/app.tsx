import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { onMount, Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import "@fontsource/inter";
import { CartContextProvider } from "../context/CartContext";
import { sidebarItems } from "./components/site_data";
import SidebarDesktop from "./components/SidebarDesktop";

export default function App() {
	return (
		<CartContextProvider>
			<Router
				root={(props) => (
					<>
						<SidebarDesktop sidebarItems={sidebarItems} />
						<Nav />
						<Suspense>{props.children}</Suspense>
					</>
				)}
			>
				<FileRoutes />
			</Router>
		</CartContextProvider>
	);
}
