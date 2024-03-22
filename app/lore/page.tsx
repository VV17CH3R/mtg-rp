
import { cn } from "@/lib/utils";
import { Axe, Backpack, Book, Crown, Home, ScrollText, Settings } from "lucide-react";
import Link from "next/link";

export const navItems = [

  { name: "Артефакты", href: "/lore/all-arts", icon: Backpack },
  { name: "Заклинания", href: "/lore/all-spells", icon: ScrollText },
  { name: "Фирексия", href: "https://mtg.fandom.com/ru/wiki/Новая_Фирексия_(мир)", icon: Book },
];

export default function DashboardNav() {
    return (
        <div className="flex justify-center  items-center ">
            <nav className="grid mt-4 items-start gap-2">
            {navItems.map((el, indx) => (
                <Link key={indx} href={el.href}>
                    <span className={cn("group flex items-center justify-between w-full rounded-md px-3  py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground")}>
                        <el.icon className="mr-5 h-4 w-4" />
                        <span>{el.name}</span>
                        <el.icon className="ml-5 h-4 w-4" />
                    </span>
                </Link>
            ))}
        </nav>
        </div>  
    )
}