import type { Component, ComponentProps } from "solid-js";
import SidebarButton from "./SidebarButton";
import { Ellipsis, LogOut, Settings } from "lucide-solid";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface DesktopMenuDrawerProps extends ComponentProps<any> {
	// add props here
}

const DesktopMenuDrawer: Component<DesktopMenuDrawerProps> = (
	props: DesktopMenuDrawerProps,
) => {
	return (
		<Drawer>
			<DrawerTrigger>
				<Button variant="ghost" class="w-full justify-start">
					<div class="flex justify-between items-center w-full">
						<div class="flex gap-2 w-full">
							<img src="/images/logo16x15.png" alt="Solid logo" />
							<span>Drawer</span>
						</div>
						<Ellipsis size={20} />
					</div>
				</Button>
			</DrawerTrigger>
			<DrawerContent class="mb-2 w-56 p-3 rounded-[1rem]">
				<div class="space-y-1">
					<SidebarButton size="sm" icon={Settings} route="/" class="w-full">
						Account Settings
					</SidebarButton>
					<SidebarButton size="sm" icon={LogOut} class="w-full">
						Logout
					</SidebarButton>
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default DesktopMenuDrawer;
