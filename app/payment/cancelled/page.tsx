import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XIcon } from "lucide-react";
import Link from "next/link";

export default function CancellPage() {

    return (
        <div className=" w-full min-h-[80vh] flex items-center justify-center">
            <Card className="w-[350px]">
                <div className="p-6">
                    <div className="w-full flex flex-col items-center justify-center">
                        <XIcon className="w-12 h-12 rounded-full bg-red-500/30 text-red-500"/>
                        <div className="mt-3 text-center sm:mt-3 w-full">
                            <h3 className="text-lg leading-6 font-medium">
                                Оплата отменена
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-muted-foreground">
                                    Вы покинули страницу оплаты без подтверждения.
                                </p>
                            </div>
                            <div className="mt-5 sm:mt-6 w-full">
                                <Button asChild className="w-full">
                                    <Link href={"/"}>
                                        На главную
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}