import type { Component, ComponentProps } from "solid-js";
import { Separator } from "@kobalte/core";
import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";
import DialogCard from "~/components/DialogCard";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "~/components/ui/popover";
import {
	RadioGroup,
	RadioGroupItem,
	RadioGroupItemLabel,
} from "~/components/ui/radio-group";
import { Switch, SwitchControl, SwitchThumb } from "~/components/ui/switch";
import { Button } from "./ui/button";
import {
	NumberField,
	NumberFieldDecrementTrigger,
	NumberFieldErrorMessage,
	NumberFieldIncrementTrigger,
	NumberFieldInput,
} from "./ui/number-field";
import { TextField, TextFieldInput, TextFieldLabel } from "./ui/text-field";
import { cn, ll } from "~/lib/utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface Web3FormProps extends ComponentProps<any> {
	// add props here
}

const Web3Form: Component<Web3FormProps> = (props: Web3FormProps) => {
	const [switchValue, setSwitchValue] = createSignal(false);
	const radioOptions = ["Stake", "Withdraw", "SendTxn"];
	const [radioValue, setRadioValue] = createSignal(radioOptions[0]);
	const [numInput, setNumInput] = createSignal<number>(0);
	const [addr, setAddr] = createSignal<string>("");

	const writeToBlockchain = () => {
		ll(
			`writeToBlockchain. switchValue: ${switchValue()}, radioValue: ${radioValue()}, addr:${addr()}, numInput: ${numInput()}`,
		);
		return;
	};

	return (
		<div id="web3Form" class="flex flex-col gap-2">
			<h1 class="text-lg font-black">Web3Form</h1>
			<div class="flex">
				<h1 class="mr-2">Switch</h1>
				<Switch checked={switchValue()} onChange={setSwitchValue}>
					<SwitchControl>
						<SwitchThumb />
					</SwitchControl>
				</Switch>
				<span>SwitchValue: {switchValue() ? "true" : "false"}</span>
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
			<div class="flex my-2">
				<h1 class="font-bold pt-2 mr-2">Number Input: </h1>
				<NumberField
					class="flex flex-col w-36 gap-2"
					onRawValueChange={setNumInput}
					validationState={numInput() <= 0 ? "invalid" : "valid"}
					defaultValue={1}
				>
					<div class="relative">
						<NumberFieldInput />
						<NumberFieldIncrementTrigger />
						<NumberFieldDecrementTrigger />
					</div>
					<NumberFieldErrorMessage>
						Input value should be greater than zero
					</NumberFieldErrorMessage>
				</NumberField>
			</div>
			<div class="flex my-2">
				<TextField
					class="flex max-w-sm gap-1.5"
					value={addr()}
					onChange={setAddr}
				>
					<TextFieldLabel for="text" class="pt-3 font-extrabold">
						Address:
					</TextFieldLabel>
					<TextFieldInput type="text" placeholder="0x" />
				</TextField>
				{addr()}
			</div>
			{/**TextFieldInput onInput={handleTextChange} */}
			<Button
				class="btn hover:bg-orange-600"
				type="default"
				onclick={writeToBlockchain}
			>
				Write to Blockchain
			</Button>
			<Popover>
				<PopoverTrigger>Popover3</PopoverTrigger>
				<PopoverContent>Popover content</PopoverContent>
			</Popover>
			<DialogCard />
			{" - "}
			<A
				href="https://docs.solidjs.com/quick-start"
				class="text-sky-600 hover:underline"
			>
				SolidJs Quick Start
			</A>{" "}
		</div>
	);
};

export default Web3Form;
/**
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "~/components/ui/alert-dialog";

<AlertDialog>
      <AlertDialogTrigger>Open AlertDialog</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Alert Dialog Title</AlertDialogTitle>
        <AlertDialogDescription>
          
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
 */
