import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

// TODO: Receive booking from props
export function BookingItem() {
  return (
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
  );
}
