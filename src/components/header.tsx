import Image from "next/image";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { SidebarSheet } from "./sidebar-sheet";

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

            <SidebarSheet />
          </Sheet>
        </CardContent>
      </Card>
    </header>
  );
}
