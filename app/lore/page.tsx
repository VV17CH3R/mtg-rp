
import { cn } from "@/lib/utils";
import { Backpack, Book, ScrollText } from "lucide-react";
import Link from "next/link";

const loreItems = [
  { name: "Артефакты", href: "/lore/all-arts", icon: Backpack },
  { name: "Заклинания", href: "/lore/all-spells", icon: ScrollText },
  { name: "Фирексия", href: "https://vk.com/@worlds_of_dominia-putevoditel-po-fireksii", icon: Book },
];

export default function DashboardNav() {
    return (
        <div className="flex justify-center  items-center ">
            <nav className="grid mt-4 items-start gap-2">
            {loreItems.map((el, indx) => (
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