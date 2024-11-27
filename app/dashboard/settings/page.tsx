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
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { AddItemButton, RemoveItemBtn } from "@/app/components/SubmitButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";

async function getSkills(userId: string) {
  const data = await prisma.skills.findMany({
    where: {
      userId: userId,
    },
    select: {
      name: true,
      level: true,
      id: true,
    },
  });

  return data;
}

async function getCharData(userId: string) {
  const data = await prisma.charsOfPers.findFirst({
    where: {
      userId: userId,
    },
  });

  return data;
}

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
      look: true,
      loyality: true,
      expirience: true,
      karma: true,
    },
  });

  return data;
}

export default async function SettingsPage() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  const data = await getData(user?.id as string);

  const skills = await getSkills(user?.id as string);

  const charOfPers = await getCharData(user?.id as string);

  if (!charOfPers) {
    await prisma.charsOfPers.create({
      data: {
        id: user?.id as string,
        userId: user?.id as string,
        userName: user?.given_name as string,
        
      },
    });
  }

  async function postData(formData: FormData) {
    "use server";

    // const nameSkill = formData.get("namesk") as string;
    // const levelSkill = formData.get("levsk") as string;

    const name = formData.get("name") as string;
    const colorSchema = formData.get("color") as string;
    const persDescription = formData.get("persDescription") as string;
    const shortVision = formData.get("shortVision") as string;
    const look = formData.get("look") as string;
    const loyality = formData.get("loyality") as string;
    

    const PhysBody = formData.get("PhysBody") as string;
    const PsyBody = formData.get("PsyBody") as string;
    const PhysMind = formData.get("PhysMind") as string;
    const PsyMind = formData.get("PsyMind") as string;
    const PhysKrasota = formData.get("PhysKrasota") as string;
    const PsyKrasota = formData.get("PsyKrasota") as string;
    const PhysInt = formData.get("PhysInt") as string;
    const PsyInt = formData.get("PsyInt") as string;
    const PhysRzum = formData.get("PhysRzum") as string;
    const PsyRazum = formData.get("PsyRazum") as string;


    const karma = formData.get("karma") as string;
    const exp = formData.get("exp") as string;



    await prisma.charsOfPers.update({
      where: {
        id: user?.id,
      },
      data: {
        PhysBody: PhysBody ?? undefined,
        PsyBody: PsyBody ?? undefined,
        PhysMind: PhysMind ?? undefined,
        PsyMind: PsyMind ?? undefined,
        PhysKrasota: PhysKrasota ?? undefined,
        PsyKrasota: PsyKrasota ?? undefined,
        PhysInt: PhysInt ?? undefined,
        PsyInt: PsyInt ?? undefined,
        PhysRzum: PhysRzum ?? undefined,
        PsyRazum: PsyRazum ?? undefined,
      },
    });

    await prisma.user.update({
      where: {
        id: user?.id,
      },
      data: {
        name: name ?? undefined,
        colorSchema: colorSchema ?? undefined,
        persDescription:
          persDescription ?? "Образ закутанный мешковидной тканью",
        shortVision: shortVision ?? "Незнакомец",
        look: look ?? "-",
        loyality: loyality ?? "Неизвестные намеренья",
        karma: karma ?? "-",
        expirience: exp ?? "0"
      },
    });

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
                  <Label>Заметки</Label>
                  <Textarea
                    id="look"
                    rows={16}
                    name="look"
                    defaultValue={data?.look ?? ""}
                  />
                </div>
              </div>

              <div className="mt-[-15px]">
                <div className="grid-cols-4 mt-8 gap-y-3 bg-white/10 p-3 rounded-md grid-rows-5 grid">
                  <Input
                    className=" flex justify-center text-center items-center text-4xl"
                    id="PhysBody"
                    name="PhysBody"
                    type="text"
                    defaultValue={charOfPers?.PhysBody ?? "1"}
                  />

                  <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Тело</span> <br />{" "}
                    <span className="text-sm text-muted-foreground">
                      {`(крепкость,`} <br /> {`плотность тела)`}
                    </span>
                  </div>

                  <Input
                    className=" flex justify-center text-center items-center text-4xl"
                    id="PsyBody"
                    name="PsyBody"
                    type="text"
                    defaultValue={charOfPers?.PsyBody ?? "1"}
                  ></Input>

                  <Input
                    className=" flex justify-center items-center  text-center text-4xl"
                    id="PhysMind"
                    name="PhysMind"
                    type="text"
                    defaultValue={charOfPers?.PhysMind ?? "1"}
                  ></Input>
                  <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Ум</span> <br />{" "}
                    <span className="text-sm text-muted-foreground">
                      {`(рефлексы,`} <br /> {`мышление)`}
                    </span>
                  </div>
                  <Input
                    className=" flex justify-center text-center  items-center text-4xl"
                    id="PsyMind"
                    name="PsyMind"
                    type="text"
                    defaultValue={charOfPers?.PsyMind ?? "1"}
                  ></Input>
                  <Input
                    className=" flex justify-center text-center items-center text-4xl"
                    id="PhysKrasota"
                    name="PhysKrasota"
                    type="text"
                    defaultValue={charOfPers?.PhysKrasota ?? "1"}
                  ></Input>
                  <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Харизма</span> <br />{" "}
                    <span className="text-sm text-muted-foreground">
                      {`(красота тела,`} <br /> {`красота речи)`}
                    </span>
                  </div>
                  <Input
                    className=" flex justify-center  text-center  items-center text-4xl"
                    id="PsyKrasota"
                    name="PsyKrasota"
                    type="text"
                    defaultValue={charOfPers?.PsyKrasota ?? "1"}
                  ></Input>
                  <Input
                    className=" flex justify-center text-center items-center text-4xl"
                    id="PhysInt"
                    name="PhysInt"
                    type="text"
                    defaultValue={charOfPers?.PhysInt ?? "1"}
                  ></Input>
                  <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Интеллект</span> <br />{" "}
                    <span className="text-sm text-muted-foreground">
                      {`(практические знания,`} <br />{" "}
                      {`память энерго-потоков)`}
                    </span>
                  </div>
                  <Input
                    className=" flex justify-center text-center items-center text-4xl"
                    id="PsyInt"
                    name="PsyInt"
                    type="text"
                    defaultValue={charOfPers?.PsyInt ?? "1"}
                  ></Input>
                  <Input
                    className=" flex justify-center text-center items-center text-4xl"
                    id="PhysRzum"
                    name="PhysRzum"
                    type="text"
                    defaultValue={charOfPers?.PhysRzum ?? "1"}
                  ></Input>
                  <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Разум</span> <br />{" "}
                    <span className="text-sm text-muted-foreground">
                      {`(Различение,`} <br /> {`Сила Воли)`}
                    </span>
                  </div>
                  <Input
                    className=" flex justify-center text-center items-center text-4xl"
                    id="PsyRazum"
                    name="PsyRazum"
                    type="text"
                    defaultValue={charOfPers?.PsyRazum ?? "1"}
                  ></Input>
                </div>
              </div>

              <div className="flex mt-12 flex-col justify-center items-center" >
                <p className="" >Карма: <Input
                  className=" mx-4 w-52 flex justify-center text-center items-center text-4xl"
                  id="karma"
                  name="karma"
                  type="text"
                  defaultValue={data?.karma ?? "1"}
                /></p> <br/>
                
                <br></br>
                <p className=" ">Опыт: <Input
                  className=" flex mx-4 w-52 justify-center text-center items-center text-4xl"
                  id="exp"
                  name="exp"
                  type="text"
                  defaultValue={ data?.expirience ?? "1"}
                /></p> <br/>
                

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
