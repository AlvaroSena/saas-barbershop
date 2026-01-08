import Image from "next/image";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Manuel!</h2>
        <p>Quarta-feira, 7 de Janeiro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
            <span className="sr-only">Search button</span>
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            alt="Banner image"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  );
}
