import type { Component, ComponentProps } from "solid-js";
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
import { TextField, TextFieldInput, TextFieldLabel } from "./ui/text-field";
import { AlignJustify, X } from "lucide-solid";
import ThreeLinesIcon from "./ThreeLinesIcon";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface MobileMenuProps extends ComponentProps<any> {
	// add props here
}

const MobileMenu: Component<MobileMenuProps> = (props: MobileMenuProps) => {
	return (
		<div class="block sm:hidden fixed top-3 right-3">
			<Sheet>
				<SheetTrigger>
					<ThreeLinesIcon />
				</SheetTrigger>
				<SheetContent class="w-[300px] px-3 py-2" position={"left"} hideClose>
					<SheetHeader class="flex flex-row justify-between items-center space-y-0">
						<SheetTitle class="">Blockchain</SheetTitle>
						<SheetClose>
							<Button class="h-7 w-7 p-0" variant="ghost">
								<span class="font-extrabold text-md">X</span>
							</Button>
						</SheetClose>
					</SheetHeader>
					<SheetFooter>
						<Button type="submit">Save changes</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileMenu;
