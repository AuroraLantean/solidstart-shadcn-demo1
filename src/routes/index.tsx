import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "~/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";

export default function Home() {
  console.log(import.meta.env.VITE_PUBLIC_ETHEREUM_ADDR2);
  
  return (
    <div class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Blockchain DAPP</h1>
      
      <div class="flex">
      <Counter />

      <div>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
        
      </div>
      </div>
      
      <AlertDialog>
  <AlertDialogTrigger>Open AlertDialog</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
    <AlertDialogDescription>
      
    </AlertDialogDescription>
  </AlertDialogContent>
</AlertDialog>
<br />
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


    </div>
  );
}//3253 Popover does not work!
