import type { Component, ComponentProps } from "solid-js";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import SidebarButton from "./SidebarButton";
import { Button } from "./ui/button";
import { Ellipsis, LogOut, Settings } from "lucide-solid";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface MobileMenuBottomProps extends ComponentProps<any> {
	// add props here
}

const MobileMenuBottom: Component<MobileMenuBottomProps> = (
	props: MobileMenuBottomProps,
) => {
	return (
		<Drawer>
			<DrawerTrigger>
				<Button variant="ghost" class="w-[185px]">
					<div class="flex justify-between items-center w-full">
						<div class="flex gap-2 w-full">
							<img src="/images/logo16x15.png" alt="Solid logo" />
							<span>Drawer2</span>
						</div>
						<Ellipsis size={20} />
					</div>
				</Button>
			</DrawerTrigger>
			<DrawerContent class="mb-2 p-3">
				<div class="flex flex-col space-y-2 mt-2">
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

export default MobileMenuBottom;
