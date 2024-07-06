import type { Component, ComponentProps } from 'solid-js';
import { Separator } from "@kobalte/core";
import { A } from "@solidjs/router";
import { For } from "solid-js";

import DialogCard from "~/components/DialogCard";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "~/components/ui/alert-dialog";

import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { RadioGroup, RadioGroupItem, RadioGroupItemLabel } from "~/components/ui/radio-group";
import { Switch, SwitchControl, SwitchThumb } from "~/components/ui/switch";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface OutputProps extends ComponentProps<any> {
	// add props here
}

const Output: Component<OutputProps> = (props: OutputProps) => {
	return (
		<div class="flex flex-col gap-2">
		<p class="my-4">
			<span>Home</span>
			{" - "}
			<A href="/about" class="text-sky-600 hover:underline">
				About Page
			</A>{" "}
		</p>
		
		<div class="flex">
		<h1 class="mr-2">Switch</h1>
		<Switch>
			<SwitchControl>
					<SwitchThumb />
			</SwitchControl>
		</Switch>
		</div>

<RadioGroup>
<For each={["Stake", "Withdraw", "Send Txn"]}>
{(fruit) => (
	<RadioGroupItem value={fruit}>
		<RadioGroupItemLabel>{fruit}</RadioGroupItemLabel>
	</RadioGroupItem>
)}
</For>
</RadioGroup>

<Popover>
<PopoverTrigger>Popover3</PopoverTrigger>
<PopoverContent>Popover content</PopoverContent>
</Popover>

<DialogCard />
	</div>
	)
}

export default Output;
/**
    <AlertDialog>
      <AlertDialogTrigger>Open AlertDialog</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Alert Dialog Title</AlertDialogTitle>
        <AlertDialogDescription>
          
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
 */