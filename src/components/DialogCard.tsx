import { createSignal, type Component, type ComponentProps } from 'solid-js';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { TextField, TextFieldInput, TextFieldLabel } from "~/components/ui/text-field";

import { ll } from '~/lib/utils';
import { Button } from './ui/button';
import { NumberField, NumberFieldErrorMessage, NumberFieldInput } from './ui/number-field';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface DialogCardProps extends ComponentProps<any> {
	// add props here
}

const DialogCard: Component<DialogCardProps> = (props: DialogCardProps) => {
	const [addr, setAddr] = createSignal<string>("");
	const [amount, setAmount] = createSignal<number>(0);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const updateAddress = (e:any) => {
		ll("updateAddress:", e.target.value); 
		setAddr(e.target.value);
	}

	const updateAmount = (input: number) => {
		ll("updateAmount:", input); 
		setAmount(input);
	}

	const [open, setOpen] = createSignal(false);
	const handleClick = () => {
		ll("addr:", addr(), "amount:", amount()); 
		setOpen(false);
	}
	
	return (<>
<Dialog open={open()} onOpenChange={setOpen}>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent class="md:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This action cannot be undone. 
      </DialogDescription>
    </DialogHeader>

		<div class="grid gap-4 py-4">
<TextField class="grid grid-cols-4 items-center gap-4">
	<TextFieldLabel class="text-right">Address</TextFieldLabel>
	<TextFieldInput class="col-span-3" type="text" placeholder="0x" onInput={updateAddress}/>
</TextField>

<TextField class="grid grid-cols-4 items-center gap-4">
	<TextFieldLabel class="text-right">Amount</TextFieldLabel>
	<NumberField class="flex flex-col w-36 gap-2"
	onRawValueChange={updateAmount}
	validationState={amount() <= 0 ? "invalid" : "valid"} defaultValue={1}>
		<div class="relative">
			<NumberFieldInput />
		</div>
		<NumberFieldErrorMessage>Input value should be greater than zero</NumberFieldErrorMessage>
	</NumberField>
</TextField>
        </div>

        <DialogFooter>
          <Button type="default" onclick={handleClick} >Send Transaction</Button>
        </DialogFooter>

  </DialogContent>
</Dialog>
		</>
	);
}

export default DialogCard;