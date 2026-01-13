import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { Calendar, Home, LogInIcon, LogOut } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "@/constants/search";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function SidebarSheet() {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <h2 className="text-lg font-bold">Olá, faça seu login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
              <span className="sr-only">Sign In</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta Google
              </DialogDescription>
            </DialogHeader>
            <Button variant="outline" className="gap-1 font-semibold">
              <Image
                src="/google-icon.svg"
                alt="Google Icon"
                width={18}
                height={18}
              />
              Entrar com o Google
            </Button>
          </DialogContent>
        </Dialog>
        {/* <Avatar>
          <AvatarImage src="https://github.com/alvarosena.png" />
          <AvatarFallback />
        </Avatar>

        <div>
          <p className="font-semibold">John Doe</p>
          <p className="text-xs">jon@acme.com</p>
        </div> */}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" asChild>
            <Link href="/">
              <Home size={18} /> Início
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <Calendar size={18} /> Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option, index) => {
          return (
            <Button key={index} className="justify-start gap-2" variant="ghost">
              <Image
                src={option.imageUrl}
                alt={option.title}
                height={18}
                width={18}
              />
              {option.title}
            </Button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOut size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
}
