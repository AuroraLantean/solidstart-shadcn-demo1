import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button"
import { NumberField, NumberFieldDecrementTrigger, NumberFieldErrorMessage, NumberFieldIncrementTrigger, NumberFieldInput } from "./ui/number-field";
import { TextField, TextFieldInput, TextFieldLabel } from "./ui/text-field";
import { ll } from "~/lib/utils";

export default function Input() {
  const [count, setCount] = createSignal<number>(0);
  const [numInput, setNumInput] = createSignal<number>(0);
  const [addr, setAddr] = createSignal<string>("");

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleTextChange = (e:any) => {
    ll("oninput:", e.target.value); 
    setAddr(e.target.value);
  }
  return (<div id="input" class="flex flex-col">
    <div class="flex my-2">
      <h1 class="font-bold pt-2 mr-2">Number Input: </h1>
      <NumberField class="flex flex-col w-36 gap-2"
      onRawValueChange={setNumInput}
      validationState={numInput() <= 0 ? "invalid" : "valid"} defaultValue={1}>
        <div class="relative">
          <NumberFieldInput />
          <NumberFieldIncrementTrigger />
          <NumberFieldDecrementTrigger />
        </div>
        <NumberFieldErrorMessage>Input value should be greater than zero</NumberFieldErrorMessage>
      </NumberField>
    </div>
    
    <div class="flex my-2">
    <TextField class="flex max-w-sm gap-1.5">
      <TextFieldLabel for="text" class="pt-3 font-extrabold">Address:</TextFieldLabel>
      <TextFieldInput type="text" id="addr" placeholder="0x" onInput={handleTextChange}/>
    </TextField>
    {addr()}
    </div>

  <div class="flex my-2">
      <Button class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem] hover:bg-purple-500" 
      onClick={() => setCount(prev=> prev + numInput())}>ShadcnUI: {count()}</Button>
    </div>
</div>);
}
