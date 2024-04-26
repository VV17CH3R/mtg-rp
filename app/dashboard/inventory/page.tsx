

import { AddItemButton, RemoveItemBtn } from "@/app/components/SubmitButtons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";

async function getData(userId: string) {
  const data = await prisma.inventory.findMany({
    where: {
      userId: userId,
    },
    select: {
      name: true,
      quant: true,
      id: true,
    },
  });
  return data;
}

async function getGold(userId: string) {
  const gold = await prisma.gold.findFirst({
    where: {
      id: userId,
    },
    select: {
      quant: true,
    },
  });
  return gold;
}


export default async function SkillsPage() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  const gold = await getGold(user?.id as string)

  const data = await getData(user?.id as string);



  async function postData(formData: FormData) {
    "use server";

    const gold = formData.get("gold") as string;
    const name = formData.get("name") as string;
    const quant = formData.get("quant") as string;

    await prisma.gold.update({
      where: {
        id: user?.id as string
      },
        data: {
          quant: gold as string
        }
    })

    if(!name || !quant) return;

    await prisma.inventory.create({
        data: {
            id: name + user?.id as string,
            name: name as string,
            quant: quant as string,
            userId: user?.id as string
        }
    })

    revalidatePath("/", "layout");

  }



  return (
    <div className="">
      <div className="flex flex-col items-center justify-between">
        <Card className="w-full">
          <form action={postData}>
            <CardHeader>
              <CardTitle className="text-center">Инвентарь</CardTitle>
              {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                  <div>
                  {
                    data.map((el, indx) => ( 
                      <div className="flex mt-3 items-center justify-between" key={indx}> 
                        <div className="flex w-full justify-between">
                          <div className=" text-xl font-semibold text-primary">{el.name} </div>
                          <div className="mr-3 text-3xl font-bold">{el.quant} </div>
                        </div> 
                        <RemoveItemBtn name2del={el.id as string}/> 
                      </div> 
                    ))
                  }
                  </div>

                <div className=" mt-12 space-y-1">
                  <Label>Добавить предмет в инвернтарь</Label>

                  <div className="flex justify-center items-center">
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Предмет..."
                  />
                  <Input 
                      className="ml-3 w-[90px]"
                    id="quant" 
                    name="quant" 
                    type="text" 
                    placeholder="Кол-во."
                  />
                  </div> 
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <div className=" flex w-full mr-3 items-center justify-between">Золото: <Input 
                      className="ml-8 w-[90px]"
                    id="gold" 
                    name="gold" 
                    type="text" 
                    placeholder=""
                    defaultValue={gold?.quant ?? "0"}
                  /><AddItemButton /></div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
