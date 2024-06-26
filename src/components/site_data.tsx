import { Bell, Bookmark, Home as HomeIcon, List, Mail, MoreHorizontal, NotebookIcon, Speech, User, UserCheck } from "lucide-solid";
import { LucideIcon } from "lucide-solid";
import { JSX, JSXElement } from "solid-js";
import SidebarButton from "./SidebarButton";

export interface SidebarItems {
	links: Array<{
		label: string;
		route: string;
		icon?: LucideIcon;
	}>;
	//extras?: JSX.HTMLAttributes<HTMLDivElement>;
	extras?: Element;
	//ReactNode  JSX.HTMLAttributes<HTMLDivElement>
}
export const sidebarItems: SidebarItems = {
  links: [
	{ label: "Home", route: '/', icon: HomeIcon, },
	{ label: "About", route: '/about', icon: NotebookIcon, },
	{ label: "Notificaion", route: '/item/notification', icon: Bell, },
	{ label: "Message", route: '/item/message', icon: Mail, },
	{ label: "List", route: '/item/list', icon: List, },
	{ label: "Bookmarks", route: '/item/bookmarks', icon: Bookmark, },
	{ label: "Communities", route: '/item/communities', icon: Speech, },
	{ label: "Profile", route: '/item/profile', icon: User, },
	],
	extras: (<div>
		<SidebarButton icon={MoreHorizontal} class="w-full">More</SidebarButton>
		</div>),
		//*/
};//<JSX.HTMLElementTags["div"]>