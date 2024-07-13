import {
	Bell,
	Bookmark,
	Home as HomeIcon,
	List,
	Mail,
	NotebookIcon,
	Spade,
	User,
} from "lucide-solid";
import type { LucideIcon } from "lucide-solid";

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
		{ label: "Home", route: "/", icon: HomeIcon },
		{ label: "About", route: "/about", icon: NotebookIcon },
		{ label: "NFT", route: "/nft/0xnft1234/5", icon: Spade },
		{ label: "Profile", route: "/user/0x123johndoe", icon: User },
		{ label: "Notificaion", route: "/page/notification", icon: Bell },
		{ label: "Message", route: "/page/message", icon: Mail },
		{ label: "List", route: "/page/list", icon: List },
		{ label: "Bookmarks", route: "/page/bookmarks", icon: Bookmark },
	],
}; //<JSX.HTMLElementTags["div"]>
