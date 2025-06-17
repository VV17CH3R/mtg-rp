import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Axe, Backpack, Castle, Crown, DoorClosed, Calendar, ScrollText, Settings, SignpostBig, Swords, Map } from "lucide-react";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const navPers = [
  { name: "Визитка", href: "/dashboard", icon: Castle },
  { name: "Инвентарь", href: "/dashboard/inventory", icon: Backpack }
];

export const navMain = [
  { name: "Сюжет", href: "/events", icon: SignpostBig },
  { name: "Карта мира", href: "/maps/zaraloka", icon: Map }
];

export function UserNav({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  return (
    <nav className="h-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative bg-black/80 border border-gray-500 h-10 w-10 px-12">
            Меню
            {/* <Avatar className="w-10 h-10 rounded-full">
              <AvatarImage src={image} alt="avatar" />
              <AvatarFallback>VV17</AvatarFallback>
            </Avatar> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56  h-full" align="end" forceMount>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-md leading-none">
                {name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {navMain.map((el, indx) => (
              <DropdownMenuItem asChild key={indx}>
                <Link
                  href={el.href}
                  className="w-full  flex justify-between items-center"
                >
                  {el.name}
                  <span>
                    <el.icon className="w-4 h-4" />
                  </span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {navPers.map((el, indx) => (
              <DropdownMenuItem asChild key={indx}>
                <Link
                  href={el.href}
                  className="w-full  flex justify-between items-center"
                >
                  {el.name}
                  <span>
                    <el.icon className="w-4 h-4" />
                  </span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="w-full flex justify-between items-center"
            asChild
          >
            <Link
                  href="/dashboard/settings"
                  className="w-full  flex justify-between items-center"
                >
                  Редактировать
                  <span>
                    <Settings/>
                  </span>
                </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="w-full flex justify-between items-center"
            asChild
          >
            <LogoutLink>
              Выйти{" "}
              <span>
                <DoorClosed />
              </span>
            </LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
