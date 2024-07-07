import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button"
import { NumberField, NumberFieldDecrementTrigger, NumberFieldErrorMessage, NumberFieldIncrementTrigger, NumberFieldInput } from "./ui/number-field";
import { TextField, TextFieldInput, TextFieldLabel } from "./ui/text-field";
import { ll } from "~/lib/utils";

export default function ReadFromCtrt() {
  const [count, setCount] = createSignal<number>(0);
  const [numInput, setNumInput] = createSignal<number>(0);
  const [addr, setAddr] = createSignal<string>("");

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleTextChange = (e:any) => {
    ll("oninput:", e.target.value); 
    setAddr(e.target.value);
  }
  return (<div id="readFromCtrt" class="flex flex-col text-foreground">
    <h1 class="text-lg font-black">ReadFromCtrt</h1>
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
    <TextField class="flex max-w-sm gap-1.5" value={addr()} onChange={setAddr}>
      <TextFieldLabel for="text" class="pt-3 font-extrabold">Address:</TextFieldLabel>
      <TextFieldInput type="text" placeholder="0x"/>
    </TextField>{addr()}
    </div>
{/**TextFieldInput onInput={handleTextChange} */}

  <div class="flex my-2">
      <Button class="btn hover:bg-orange-600" 
      onClick={() => setCount(prev=> prev + numInput())}>ShadcnUI: {count()}</Button>
    </div>
</div>);
}
