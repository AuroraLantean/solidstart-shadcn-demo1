import { Separator } from "@kobalte/core";
import { A } from "@solidjs/router";
import { For } from "solid-js";
import Counter from "~/components/Counter";
import DialogCard from "~/components/DialogCard";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "~/components/ui/alert-dialog";

import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { RadioGroup, RadioGroupItem, RadioGroupItemLabel } from "~/components/ui/radio-group";
import { Switch, SwitchControl, SwitchThumb } from "~/components/ui/switch";
import { ll } from "~/lib/utils";

export default function Home() {
  ll(import.meta.env.VITE_PUBLIC_ETHEREUM_ADDR2);
  
  return (
    <div class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Blockchain DAPP</h1>
      
      <div class="flex flex-row gap-2">
        <Counter />
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
      </div>
    </div>
  );
}//3253 Popover does not work!
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