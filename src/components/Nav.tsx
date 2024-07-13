import { useLocation } from "@solidjs/router";
import { ll } from "~/lib/utils";

export default function Nav() {
	const pathname = useLocation().pathname;

	const active = (path: string) =>
		path === pathname
			? "border-sky-600"
			: "border-transparent hover:border-sky-600";

	return (
		<nav class="flex-row bg-sky-800 hidden sm:block ">
			<ul class="container flex items-center p-3 text-gray-200">
				<li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
					<a href="/">Home</a>
				</li>
				<li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	);
} //TODO: 1334
