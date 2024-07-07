import { useLocation } from "@solidjs/router";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { TextField, TextFieldInput, TextFieldLabel } from "./ui/text-field";
import { AlignJustify } from "lucide-solid";
import ThreeLinesIcon from "./ThreeLinesIcon";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <nav class="flex flex-row bg-sky-800">
      <ul class="container flex items-center p-3 text-gray-200">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <a href="/">Home</a>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <a href="/about">About</a>
        </li>
      </ul>
      
      <div class="block sm:hidden">

<Sheet>
  <SheetTrigger >
  <ThreeLinesIcon />
  
  </SheetTrigger>
  <SheetContent class="w-[300px] sm:w-[440px]" position={"left"}>
    <SheetHeader>
      <SheetTitle>SheetTitle</SheetTitle>
      <SheetDescription>
      SheetDescription
      </SheetDescription>
    </SheetHeader>
		<div class="grid gap-4 py-4">
			<TextField class="grid grid-cols-4 items-center gap-4">
				<TextFieldLabel class="text-right">Name</TextFieldLabel>
				<TextFieldInput value="Pedro Duarte" class="col-span-3" type="text" />
			</TextField>
			<TextField class="grid grid-cols-4 items-center gap-4">
				<TextFieldLabel class="text-right">Username</TextFieldLabel>
				<TextFieldInput value="@peduarte" class="col-span-3" type="text" />
			</TextField>
		</div>
		<SheetFooter>
			<Button type="submit">Save changes</Button>
		</SheetFooter>
  </SheetContent>
</Sheet>
</div>
    </nav>
  );
}
