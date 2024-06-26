import { Component, ComponentProps } from 'solid-js';
import SidebarButton from './SidebarButton';
import { Sun } from 'lucide-solid';

interface SidebarDesktopProps extends ComponentProps<any> {
	// add props here
}

const SidebarDesktop: Component<SidebarDesktopProps> = (props: SidebarDesktopProps) => {
	//sidebar width, max width, fixed to top left
	return (
		<aside class="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
			<div class="h-full px-3 py-4">
				<h3 class="mx-3 text-lg font-semibold text-foreground">Twitter</h3>
				<div class="mt-5">
					<div class='flex flex-col gap-1 w-full'>
						<SidebarButton variant="default" />
						<SidebarButton class="mx-2" />
						<SidebarButton icon={Sun}/>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default SidebarDesktop;