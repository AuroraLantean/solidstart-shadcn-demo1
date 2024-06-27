import type { Component } from "solid-js";
import { Button, type ButtonProps } from "./ui/button";
import type { LucideIcon } from "lucide-solid";
import { cn } from "~/lib/utils";

/** Usage:
<SidebarButton variant="default" />
<SidebarButton class="mx-2" />
<SidebarButton icon={Home}>Home</SidebarButton>
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface  SidebarButtonProps extends ButtonProps<any> {
	icon?: LucideIcon;
	route?: string;
}

const SidebarButton: Component<SidebarButtonProps> = ({icon: Icon, route, class: classname, children, ...props}: SidebarButtonProps) => {
	return (
		<Button variant="ghost" class={cn("gap-2 justify-start", classname)} {...props}>
			{Icon && <Icon size={20} />}
			<a href={route}>{children}</a>
		</Button>
	)
}

export default SidebarButton;