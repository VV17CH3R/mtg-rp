
import { cn } from "@/lib/utils";
import { Axe, Backpack, Book, PocketKnife, ScrollText, Crosshair, Scale } from "lucide-react";
import Link from "next/link";

const scenarioItems = [
  { name: "Беспредельщики пустошей", href: "/events/outlaws", icon: PocketKnife },
  { name: "Текущий образ", href: "/events/curr", icon: Crosshair },
  { name: "Орден порядка", href: "/events/ordinators", icon: Scale },
  
];

export default function ScenarioPage() {
    return (
        <div className="flex justify-center  items-center ">
            <nav className="grid mt-4 items-start gap-2">
            {scenarioItems.map((el, indx) => (
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