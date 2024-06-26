import { Component, ComponentProps, For, Index } from 'solid-js';
import SidebarButton from './SidebarButton';
import { SidebarItems } from '~/components/site_data';

interface SidebarDesktopProps extends ComponentProps<any> {
	sidebarItems: SidebarItems;
}

const SidebarDesktop: Component<SidebarDesktopProps> = (props: SidebarDesktopProps) => {
	//sidebar width, max width, fixed to top left
	return (
		<aside class="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
			<div class="h-full px-3 py-4">
				<h3 class="mx-3 text-lg font-semibold text-foreground">Twitter</h3>
				<div class="mt-5">
					<div class='flex flex-col gap-1 w-full'>
						<Index each={props.sidebarItems.links} fallback={<div>Loading...</div>}>
						{item => <SidebarButton icon={item().icon} route={item().route}>{item().label}</SidebarButton>}
						</Index>
						{props.sidebarItems.extras}
					</div>
				</div>
			</div>
		</aside>
	)
}//<SidebarButton icon={Home}>Home</SidebarButton>
/**
		<Router>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
		</Router>

		<For each={props.sidebarItems.links}>
                    {(item) =>
              <A class="flex-grow w-full" href={item.href}>
							</A>}
						</For>
 */
export default SidebarDesktop;