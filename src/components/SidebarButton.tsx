import { Component } from "solid-js";
import { Button, ButtonProps } from "./ui/button";
import { LucideIcon } from "lucide-solid";
import { cn } from "~/lib/utils";

interface SidebarButtonProps extends ButtonProps<any> {
	icon?: LucideIcon;
}

const SidebarButton: Component<SidebarButtonProps> = ({icon: Icon, class: classname, ...props}: SidebarButtonProps) => {
	return (
		<Button variant="ghost" class={cn("gap-2 justify-start", classname)} {...props}>
			{Icon && <Icon />}
			<span>Dark Mode</span>
		</Button>
	)
}

export default SidebarButton;