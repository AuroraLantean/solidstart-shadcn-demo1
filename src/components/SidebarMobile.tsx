import type { Component, ComponentProps } from 'solid-js';
import { Button } from './ui/button';
import type { SidebarItems } from '~/components/site_data';
import { ll } from '~/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { TextField, TextFieldInput, TextFieldLabel } from './ui/text-field';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface SidebarMobileProps extends ComponentProps<any> {
	sidebarItems: SidebarItems;
}
//0910
const SidebarMobile: Component<SidebarMobileProps> = (props: SidebarMobileProps) => {
	//sidebar width, max width, fixed to top left
	ll("SidebarMobile")
	const position = "left";//"top", "right", "bottom", "left"
	//< id='sidebarMobile' class="w-[170px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
	return (<></>)
}

export default SidebarMobile;
