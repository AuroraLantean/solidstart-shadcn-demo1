import { type Component, type ComponentProps, Index } from 'solid-js';
import SidebarButton from './SidebarButton';
import type { SidebarItems } from '~/components/site_data';
import { Separator } from './ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Ellipsis, LogOut, Settings } from 'lucide-solid';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface SidebarDesktopProps extends ComponentProps<any> {
	sidebarItems: SidebarItems;
}

const SidebarDesktop: Component<SidebarDesktopProps> = (props: SidebarDesktopProps) => {
	//sidebar width, max width, fixed to top left
	return (
		<aside class="w-[170px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
			<div class="h-full px-3 py-4">
				<h3 class="mx-3 text-lg font-semibold text-foreground">Twitter</h3>
				<div class="mt-5">
					<div class='flex flex-col gap-1 w-full'>
						<Index each={props.sidebarItems.links} fallback={<div>Loading...</div>}>
						{item => <SidebarButton icon={item().icon} route={item().route}>{item().label}</SidebarButton>}
						</Index>
						{props.sidebarItems.extras}
					</div>
					
					<div>
					<Popover>
      <PopoverTrigger>trigger me</PopoverTrigger>
      <PopoverContent>
        A UI toolkit for building accessible web apps and design systems with SolidJS.
      </PopoverContent>
    </Popover>
					</div>

					<div class='absolute left-0 bottom-3 w-full px-3 border-0'>
						<Separator class='absolute -top-3 left-0 w-full' />

						<Popover>
							<PopoverTrigger>
								<Button variant="ghost" class='w-full justify-start'>
									<div class='flex justify-between items-center w-full'>
									<div class='flex gap-2'>
									<img src="/images/logo16x15.png" alt="Solid logo" />
									<span>John Doe</span>
									</div>
									<Ellipsis size={20}/>
									</div>
								</Button>
							</PopoverTrigger>
							<PopoverContent class='mb-2 w-56 p-3 rounded-[1rem]'>
								<div class='space-y-1'>
									<SidebarButton size="sm" icon={Settings} route='/' class='w-full'>
										Account Settings
									</SidebarButton>
									<SidebarButton size="sm" icon={LogOut} class='w-full'>
										Logout
									</SidebarButton>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
		</aside>
	)
}//<SidebarButton icon={Home}>Home</SidebarButton>
/**  as={Button<"button">}
									<Avatar class='h-5 w-5'>
										<AvatarImage src="/images/logo16x15.png" alt='no AvatarImage'>
										<AvatarFallback>AvatarImage fallback</AvatarFallback>
										</AvatarImage>
									</Avatar>
 */
export default SidebarDesktop;