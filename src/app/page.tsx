import Image from "next/image";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { db } from "./lib/prisma";
import { BarbershopItem } from "@/components/babershop-item";
import { Footer } from "@/components/footer";

export default async function Home() {
  const barbershops = await db.barbershop.findMany();
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

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

        <div className="overflow-hidden">
          <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            <Button className="gap-2" variant="secondary">
              <Image src="/hair.svg" height={16} width={16} alt="Hair" />
              Cabelo
            </Button>

            <Button className="gap-2" variant="secondary">
              <Image src="/moustache.svg" height={16} width={16} alt="Hair" />
              Barba
            </Button>

            <Button className="gap-2" variant="secondary">
              <Image
                src="/hair-details.svg"
                height={16}
                width={16}
                alt="Hair"
              />
              Acabamento
            </Button>

            <Button className="gap-2" variant="secondary">
              <Image
                src="/hair-details.svg"
                height={16}
                width={16}
                alt="Hair"
              />
              Pézinho
            </Button>

            <Button className="gap-2" variant="secondary">
              <Image
                src="/hair-details.svg"
                height={16}
                width={16}
                alt="Hair"
              />
              Acabamento
            </Button>
          </div>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            alt="Banner image"
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit rounded-full">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src="https://github.com/alvarosena.png" />
                  <AvatarFallback />
                </Avatar>
                <p className="text-sm">Barbearia Shop</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Janeiro</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => {
            return (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            );
          })}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => {
            return (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
