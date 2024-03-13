import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sword } from "lucide-react";
import prisma from "../../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getStripeSession } from "@/app/lib/stripe";
import { redirect } from "next/navigation";
import { StripeSubButton } from "@/app/components/SubmitButtons";

const inventoryManual = [
    {name:"Еженедельная сеесия (4-5 часов)"},
    {name:"Доступ к приложению"},
    {name:"Прямые консультации по ЛОРу"},
    {name:"Новости мультивселенной онлайн"},
    {name:"Кастомизация персонажа и профиля"},
]

async function getData(userId: string) {
    const data = await prisma.subscribtion.findFirst({
        where:{
            userId: userId
        },
        select: {
            status: true,
            user: {
                select: {
                    stripeCustromeId: true
                }
            }
        }
    }
    )

    return data;
}

export default async function SubPage() {

    const { getUser } = getKindeServerSession();

    const user = await getUser();

    const data = await getData(user?.id as string);


    async function createSub(){
        "use server";

        const dbUser = await prisma.user.findFirst({
            where: {id: user?.id},
            select: {
                stripeCustromeId: true
            }
        })

        if(!dbUser?.stripeCustromeId){
            throw new Error("No stripe customer Id")
        }

        const subUrl = await getStripeSession({
            customerId: dbUser?.stripeCustromeId,
            domainUrl:"https://mtg-rp.vercel.app",
            priceId: process.env.STRIPE_SUB_ID as string
        })

        return redirect(subUrl);
    }

    return (
        <div className="max-w-md mx-auto space-y-4">
            <Card>
                <CardContent className="py-8">
                    <div>
                        <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary">Месячная подписка</h3>
                    </div>

                    <div className="mt-4 flex items-baseline text-6xl font-extrabold ">
                        5000 <span className="ml-1 text-2xl text-muted-foreground">руб.</span>
                    </div>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Премиум подписка на игру
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
                    <form action={createSub}>
                        <StripeSubButton/>
                    </form>
                </div>
            </Card>
        </div>
    )
}