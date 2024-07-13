import {
	type Component,
	type ComponentProps,
	createMemo,
	Index,
} from "solid-js";
import SidebarButton from "./SidebarButton";
import type { SidebarItems } from "~/components/site_data";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Ellipsis, LogOut, MoreHorizontal, Settings } from "lucide-solid";
//import { useLocation } from '@solidjs/router';
import { ll } from "~/lib/utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface SidebarDesktopProps extends ComponentProps<any> {
	sidebarItems: SidebarItems;
}

const SidebarDesktop: Component<SidebarDesktopProps> = (
	props: SidebarDesktopProps,
) => {
	//sidebar width, max width, fixed to top left
	//TODO: see Nav.tsx:
	//const location = useLocation();//crash the app!!!
	/*const pathname = location.pathname;
	ll("pathname", pathname)
	//const pathname = createMemo(() => parsePath(location.pathname));
	*/
	return (
		<aside
			id="sidebarDesktop"
			class="hidden sm:block w-[170px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r text-foreground bg-background"
		>
			<div class="h-full px-3 py-4">
				<h3 class="mx-3 text-lg font-semibold text-foreground">Dapp</h3>
				<div class="mt-5">
					<div class="flex flex-col gap-1 w-full">
						<Index
							each={props.sidebarItems.links}
							fallback={<div>Loading...</div>}
						>
							{(item) => (
								<SidebarButton icon={item().icon} route={item().route}>
									{item().label}
								</SidebarButton>
							)}
						</Index>
						<div class="flex flex-col gap-2">
							<SidebarButton icon={MoreHorizontal} class="w-full">
								More
							</SidebarButton>
							<SidebarButton class="w-full justify-center bg-sky-600 hover:bg-orange-600 text-teal-500">
								Tweet
							</SidebarButton>
						</div>

						<Popover>
							<PopoverTrigger>Popover1</PopoverTrigger>
							<PopoverContent>PopoverContent</PopoverContent>
						</Popover>
					</div>

					<div
						id="account"
						class="absolute left-0 bottom-3 w-full px-3 border-0"
					>
						<Separator class="absolute -top-3 left-0 w-full" />

						<Popover>
							<PopoverTrigger>
								<Button variant="ghost" class="w-full justify-start">
									<div class="flex justify-between items-center w-full">
										<div class="flex gap-2">
											<img src="/images/logo16x15.png" alt="Solid logo" />
											<span>Popover2</span>
										</div>
										<Ellipsis size={20} />
									</div>
								</Button>
							</PopoverTrigger>
							<PopoverContent class="mb-2 w-56 p-3 rounded-[1rem]">
								<div class="space-y-1">
									<SidebarButton
										size="sm"
										icon={Settings}
										route="/"
										class="w-full"
									>
										Account Settings
									</SidebarButton>
									<SidebarButton size="sm" icon={LogOut} class="w-full">
										Logout
									</SidebarButton>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
		</aside>
	);
}; //<SidebarButton icon={Home}>Home</SidebarButton>
/**  as={Button<"button">}
									<Avatar class='h-5 w-5'>
										<AvatarImage src="/images/logo16x15.png" alt='no AvatarImage'>
										<AvatarFallback>AvatarImage fallback</AvatarFallback>
										</AvatarImage>
									</Avatar>
 */
export default SidebarDesktop;
