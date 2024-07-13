import { type Component, type ComponentProps, Index } from "solid-js";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import ThreeLinesIcon from "./ThreeLinesIcon";
import { useLocation } from "@solidjs/router";
import SidebarButton from "./SidebarButton";
import type { SidebarItems } from "./site_data";
import { X } from "lucide-solid";
import { ll } from "~/lib/utils";
import { Separator } from "./ui/separator";
import MobileMenuBottom from "./MobileMenuBottom";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface MobileMenuProps extends ComponentProps<any> {
	sidebarItems?: SidebarItems;
}

const MobileMenu: Component<MobileMenuProps> = (props: MobileMenuProps) => {
	const pathname = useLocation().pathname;
	ll("pathname:", pathname);

	return (
		<div id="mobileMenu" class="block sm:hidden fixed top-3 right-3">
			<Sheet>
				<SheetTrigger>
					<ThreeLinesIcon />
				</SheetTrigger>
				<SheetContent class="w-[200px] px-3 py-2" position={"left"} hideClose>
					<SheetHeader class="flex flex-row justify-between items-center space-y-0">
						<SheetTitle>Blockchain Dapp</SheetTitle>
						<SheetClose>
							<Button class="h-7 w-7 p-0" variant="ghost">
								<X size={15} />
							</Button>
						</SheetClose>
					</SheetHeader>
					<div class="h-full">
						<div class="flex flex-col w-full gap-1">
							{props.sidebarItems ? (
								<Index
									each={props.sidebarItems.links}
									fallback={<div>Loading...</div>}
								>
									{(item) => (
										<SidebarButton
											variant={
												pathname === item().route ? "secondary" : "ghost"
											}
											icon={item().icon}
											route={item().route}
											class="w-full"
										>
											{item().label}
										</SidebarButton>
									)}
								</Index>
							) : null}
						</div>
						<div class="absolute w-full bottom-4 px-1 left-0">
							<Separator class="absolute left-0 w-full -top-3" />
							<MobileMenuBottom />
						</div>
					</div>

					<SheetFooter>
						<Button type="submit">Save changes</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileMenu;
