import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sword } from "lucide-react";


const inventoryManual = [
    {name:"Меч Тысячи Прав"},
    {name:"Меч Тысячи Прав"},
    {name:"Меч Тысячи Прав"},
    {name:"Меч Тысячи Прав"},
    {name:"Меч Тысячи Прав"},
]

export default function CharPage() {

    return (
        <div className="max-w-md mx-auto space-y-4">
            <Card>
                <CardContent className="py-8">
                    <div>
                        <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary">Предметы</h3>
                    </div>

                    <div className="mt-4 flex items-baseline text-6xl font-extrabold ">
                        30 <span className="ml-1 text-2xl text-muted-foreground">золотых</span>
                    </div>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Обычное зелье лечения
                    </p>
                </CardContent>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                        {
                                inventoryManual.map((el, indx) => (
                                    <li key={indx} className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Sword className="h-6 w-6 text-green-500" />
                                        </div>
                                        <p className="ml-3 text-base">{el.name}</p>
                                    </li>
                                ))
                        }
                    </ul>
                    <form>
                        <Button className="w-full">
                            Донат
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}