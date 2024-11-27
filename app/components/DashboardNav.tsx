import { cn } from "@/lib/utils";
import { Axe, Backpack, Castle, Crown, Home, ScrollText, Settings } from "lucide-react";
import Link from "next/link";

export const navItems = [
    { name: "Визитка", href: "/dashboard", icon: Castle },
    { name: "Характеристики", href: "/dashboard/char", icon: Crown },
    { name: "Инвентарь", href: "/dashboard/inventory", icon: Backpack },
    { name: "Редактировать", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardNav() {
    return (
        <nav className="grid items-start gap-2">
            {navItems.map((el, indx) => (
                <Link key={indx} href={el.href}>
                    <span className={cn("group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground")}>
                        <el.icon className="mr-2 h-4 w-4" />
                        <span>{el.name}</span>
                    </span>
                </Link>
            ))}
        </nav>
    )
}