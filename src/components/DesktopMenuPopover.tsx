import type { Component, ComponentProps } from "solid-js";
import SidebarButton from "./SidebarButton";
import { Ellipsis, LogOut, Settings } from "lucide-solid";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface DesktopMenuPopoverProps extends ComponentProps<any> {
	// add props here
}

const DesktopMenuPopover: Component<DesktopMenuPopoverProps> = (
	props: DesktopMenuPopoverProps,
) => {
	return (
		<Popover>
			<PopoverTrigger>
				<div class="flex justify-between items-center w-full">
					<div class="flex ml-3 gap-2 w-full">
						<img src="/images/logo16x15.png" alt="Solid logo" />
						<span>Popover2</span>
					</div>
					<Ellipsis size={20} />
				</div>
			</PopoverTrigger>
			<PopoverContent class="mb-2 w-56 p-3 rounded-[1rem]">
				<div class="space-y-1">
					<SidebarButton size="sm" icon={Settings} route="/" class="w-full">
						Account Settings
					</SidebarButton>
					<SidebarButton size="sm" icon={LogOut} class="w-full">
						Logout
					</SidebarButton>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default DesktopMenuPopover;
