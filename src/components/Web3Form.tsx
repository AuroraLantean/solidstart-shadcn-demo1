import type { Component, ComponentProps } from 'solid-js';
import { Separator } from "@kobalte/core";
import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";

import DialogCard from "~/components/DialogCard";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "~/components/ui/alert-dialog";

import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { RadioGroup, RadioGroupItem, RadioGroupItemLabel } from "~/components/ui/radio-group";
import { Switch, SwitchControl, SwitchThumb } from "~/components/ui/switch";
import { Button } from './ui/button';


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface Web3FormProps extends ComponentProps<any> {
	// add props here
}

const Web3Form: Component<Web3FormProps> = (props: Web3FormProps) => {
	const [switchValue, setSwitchValue] = createSignal(false);
	const radioOptions = ["Stake", "Withdraw", "Send Txn"];
	const [radioValue, setRadioValue] = createSignal(radioOptions[0]);
	
	return (
		<div class="flex flex-col gap-2">
		<p class="my-4">
			<span>Web3Form</span>
		</p>
		
		<div class="flex">
		<h1 class="mr-2">Switch</h1>
		<Switch checked={switchValue()} onChange={setSwitchValue}>
			<SwitchControl>
					<SwitchThumb />
			</SwitchControl>
		</Switch>
		<span>SwitchValue: {switchValue()?"true":"false"}</span>
		</div>

<RadioGroup value={radioValue()} onChange={setRadioValue}>
<For each={radioOptions}>
{(option) => (
	<RadioGroupItem value={option}>
		<RadioGroupItemLabel>{option}</RadioGroupItemLabel>
	</RadioGroupItem>
)}
</For>
</RadioGroup>
<span>RadioValue: {radioValue()}</span>

<Button >Enter Data</Button>

<Popover>
<PopoverTrigger>Popover3</PopoverTrigger>
<PopoverContent>Popover content</PopoverContent>
</Popover>

<DialogCard />
{" - "}
			<A href="https://nextjs-shadcn-demo1.vercel.app/" class="text-sky-600 hover:underline">
				NextJs Web3 Dapp
			</A>{" "}

	</div>
	)
}

export default Web3Form;
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