import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import prisma from "../../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { revalidatePath } from "next/cache";

async function getData(userId: string) {
  const data = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      name: true,
      email: true,
      colorSchema: true,
      persDescription: true,
      shortVision: true,
      look: true
    },
  });

  return data;
}

export default async function SettingsPage() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  const data = await getData(user?.id as string);

  async function postData(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const colorSchema = formData.get("color") as string;
    const persDescription = formData.get("persDescription") as string;
    const shortVision = formData.get("shortVision") as string;
    const look = formData.get("look") as string;

    await prisma.user.update({
        where: {
            id: user?.id
        },
        data: {
            name: name ?? undefined,
            colorSchema: colorSchema ?? undefined,
            persDescription: persDescription ?? undefined,
            shortVision: shortVision ?? undefined,
            look: look ?? undefined,
        }
    })

    revalidatePath("/", "layout");

  }

  return (
    <div className="grid items-start gap-8">
      <div className="flex flex-col items-center justify-between px-2">
        <Card className="w-full">
          <form action={postData}>
            <CardHeader>
              <CardTitle className="text-center">Настройки</CardTitle>
              {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Имя персонажа</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    defaultValue={data?.name ?? user?.given_name ?? ""}
                    placeholder="Имя персонажа..."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Титул</Label>
                  <Input 
                    id="shortVision" 
                    name="shortVision" 
                    type="text" 
                    defaultValue={data?.shortVision ?? ""}
                    placeholder="Титул персонажа..."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Слухи о персонаже</Label>
                  <Textarea
                    id="persDescription"
                    rows={5}
                    name="persDescription"
                    defaultValue={data?.persDescription ?? ""}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Внешний вид</Label>
                  <Textarea
                    id="look"
                    rows={5}
                    name="look"
                    defaultValue={data?.look ?? ""}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label>Цветовая схема профиля</Label>
                <Select name="color" defaultValue={data?.colorSchema}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите цвет"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Цвет:</SelectLabel> */}
                      <SelectItem value="tema-zinc">Стандарт</SelectItem>
                      <SelectItem value="tema-green">Зеленый</SelectItem>
                      <SelectItem value="tema-blue">Синий</SelectItem>
                      <SelectItem value="tema-violet">Фиолетовый</SelectItem>
                      <SelectItem value="tema-yellow">Желтый</SelectItem>
                      <SelectItem value="tema-orange">Оранжевый</SelectItem>
                      <SelectItem value="tema-red">Красный</SelectItem>
                      <SelectItem value="tema-rose">Розовый</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
