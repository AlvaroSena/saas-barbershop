import Image from "next/image";
import Link from "next/link";

import { db } from "@/app/lib/prisma";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Menu, Star } from "lucide-react";
import { notFound } from "next/navigation";

export default async function BarbershopPage({
  params,
}: {
  params: { id: string };
}) {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          className="absolute left-4 top-4"
          variant="secondary"
          asChild
        >
          <Link href="/">
            <ChevronLeft />
            <span className="sr-only">Back</span>
          </Link>
        </Button>

        <Button
          size="icon"
          className="absolute right-4 top-4"
          variant="secondary"
        >
          <Menu />
          <span className="sr-only">Menu</span>
        </Button>
      </div>

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPin className="gap-2 text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="gap-2 fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (889 avaliações)</p>
        </div>
      </div>

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-grayu-400 font-bold uppercase">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>
    </div>
  );
}
