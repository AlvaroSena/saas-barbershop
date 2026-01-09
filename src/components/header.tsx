import Image from "next/image";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Home, LogOut, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { quickSearchOptions } from "@/constants/search";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image
            src="/logo.png"
            height={18}
            width={120}
            alt="Barbershop logo"
          />

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
                <span className="sr-only">Menu Button</span>
              </Button>
            </SheetTrigger>

            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex items-center gap-3 border-b border-solid py-5">
                <Avatar>
                  <AvatarImage src="https://github.com/alvarosena.png" />
                  <AvatarFallback />
                </Avatar>

                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-xs">jon@acme.com</p>
                </div>
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
                    <Button
                      key={index}
                      className="justify-start gap-2"
                      variant="ghost"
                    >
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
          </Sheet>
        </CardContent>
      </Card>
    </header>
  );
}
