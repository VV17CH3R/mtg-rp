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
import {
  MinusNRGbtn,
  PlusNRGbtn,
  SubmitButton,
} from "@/app/components/SubmitButtons";
import { AddItemButton, RemoveItemBtn } from "@/app/components/SubmitButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";
import styles from "./style.module.css";

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
      level: true,
      spiritual: true,
      phisical: true
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
    const PsyBody = formData.get("hp") as string;
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
    const level = formData.get("level") as string;
    const spiritual = formData.get("spiritual") as string;
    const phisical = formData.get("phisical") as string;


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
        loyality: loyality ?? "0",
        karma: karma ?? "-",
        expirience: exp ?? "0",
        level: level ?? "0",
        spiritual: spiritual ?? "0",
        phisical: phisical ?? "0",
      },
    });

    revalidatePath("/", "layout");
  }

  return (
    <div className="grid items-start">
      <div className="flex flex-col items-center justify-between px-2">
        <Card className="w-full">
          <form action={postData}>
            <CardHeader>
              {/* {<CardTitle className="text-center text-primary">
                Игровя карточка
              </CardTitle>} */}
              {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="mt-[15px]">
                <div className="flex justify-between">
                  <div >HP:
                    <Input
                      className="  w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="hp"
                      name="hp"
                      type="text"
                      defaultValue={charOfPers?.PsyBody ?? "1"}
                    />
                  </div>



                    <div > WP:
                    <Input
                      className="w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="karma"
                      name="karma"
                      type="text"
                      defaultValue={data?.karma ?? "1"}
                    />
                  </div>
                  

                  

                  <div > NRG:
                    <Input
                      className="w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="exp"
                      name="exp"
                      type="text"
                      defaultValue={data?.expirience ?? "1"}
                    />
                  </div>
                </div>


                <div className="mt-16 flex justify-between">
                  <div >WIS:
                    <Input
                      className="  w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="PsyKrasota"
                      name="PsyKrasota"
                      type="text"
                      defaultValue={charOfPers?.PsyKrasota ?? "1"}
                    />
                  </div>



                    <div > AS:
                    <Input
                      className="w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="PsyRazum"
                      name="PsyRazum"
                      type="text"
                      defaultValue={charOfPers?.PsyRazum ?? "0"}
                    />
                  </div>
                  

                  

                  <div > STR:
                    <Input
                      className="w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="PsyMind"
                      name="PsyMind"
                      type="text"
                      defaultValue={charOfPers?.PsyMind ?? "0"}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div >PER:
                    <Input
                      className="  w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="level"
                      name="level"
                      type="text"
                      defaultValue={data?.level ?? "1"}
                    />
                  </div>



                    <div > AGI:
                    <Input
                      className="w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="phisical"
                      name="phisical"
                      type="text"
                      defaultValue={data?.phisical ?? "0"}
                    />
                  </div>
                  

                  

                  <div > INF:
                    <Input
                      className="w-[72px] z-50 justify-center text-center items-center text-xl"
                      id="spiritual"
                      name="spiritual"
                      type="text"
                      defaultValue={data?.spiritual ?? "0"}
                    />
                  </div>
                </div>



                {/* <div >
                    <Input
                      className=" ml-[-14px] mt-[-24px] border-none bg-inherit w-[72px] flex absolute z-50 justify-center text-center items-center text-2xl"
                      id="eda"
                      name="eda"
                      type="text"
                      defaultValue={charOfPers?.PsyRazum ?? "0"}
                    />
                  </div>


                  <div >
                    <Input
                      className=" mt-[34px] ml-[36px] border-none bg-inherit w-[42px] flex absolute z-50 justify-center text-center items-center text-2xl"
                      id="sleep"
                      name="sleep"
                      type="text"
                      defaultValue={charOfPers?.PsyMind ?? "0"}
                    />
                  </div> */}

                  {/* 
                  <div className="flex flex-col">
                  <div className="">
                      <div className="space-y-1 ">
                       
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          defaultValue={data?.name ?? user?.given_name ?? ""}
                          placeholder="Имя..."
                          className="ml-[-40px] font-semibold text-center border-none text-xl text-primary w-44"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-1">
                      <div className="space-y-1  ">
                        
                        <Input
                          id="look"
                          name="look"
                          type="text"
                          defaultValue={data?.look ?? user?.given_name ?? ""}
                          placeholder="Титул..."
                          className="ml-[-40px] text-center border-none text-[12px] w-44"
                        />
                      </div>
                    </div>
                  </div> */}

                  



                

                <div className="flex justify-center mt-10 align-middle">
                  <SubmitButton />
                </div>

                <div className="space-y-2 mt-2">
                  <div className="space-y-1">
                    <Label className="text-xl text-primary">Заметки</Label>
                    <Textarea
                      id="persDescription"
                      rows={16}
                      name="persDescription"
                      defaultValue={data?.persDescription ?? ""}
                    />
                  </div>
                </div>


                {/* <div className="flex my-6  justify-around items-center">
                  <div className="w-44 text-2xl">Вес мира: </div>
                  <div>
                    <Input
                      className=" mx-4 w-32 flex justify-center text-center items-center text-4xl"
                      id="loyality"
                      name="loyality"
                      type="text"
                      defaultValue={data?.loyality ?? "0"}
                    />
                  </div>
                </div> */}

                <div className="space-y-2">
                  <div className="space-y-1">
                    <Label>Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      defaultValue={data?.name ?? user?.given_name ?? ""}
                      placeholder="Имя персонажа..."
                    />
                  </div>
                </div>

                <div className="text-lg text-center mt-6 font-bold text-primary">
                  ХАРАКТЕРИСТИКИ{" "}
                </div>

                <div className="flex mt-2  justify-around items-center">
                  <div className=" w-44 text-2xl">Тело </div>
                  <div>
                    <Input
                      className=" mx-4 w-32 flex justify-center text-center items-center text-4xl"
                      id="PhysBody"
                      name="PhysBody"
                      type="text"
                      defaultValue={charOfPers?.PhysBody ?? "1"}
                    />
                  </div>
                </div>
                <div className=" flex flex-col text-center justify-center items-center">
                  <span className="text-xs text-muted-foreground">
                    {`(Выносливость +3, Сила +3, эффективность артефактов)`}
                  </span>
                </div>

                <div className="flex mt-6  justify-around items-center">
                  <div className=" w-44 text-2xl">Ум </div>
                  <div>
                    <Input
                      className="  mx-4 w-32 flex justify-center text-center items-center text-4xl"
                      id="PhysMind"
                      name="PhysMind"
                      type="text"
                      defaultValue={charOfPers?.PhysMind ?? "1"}
                    />
                  </div>
                </div>
                <div className=" flex flex-col text-center justify-center items-center">
                  <span className="text-xs text-muted-foreground">
                    {`(Восприятие +3, Ловкость +3, эффективность мгновенных заклинаний)`}
                  </span>
                </div>

                <div className="flex mt-6  justify-around items-center">
                  <div className=" w-44 text-2xl">Чары</div>
                  <div>
                    <Input
                      className="  mx-4 w-32 flex justify-center text-center items-center text-4xl"
                      id="PhysKrasota"
                      name="PhysKrasota"
                      type="text"
                      defaultValue={charOfPers?.PhysKrasota ?? "1"}
                    />
                  </div>
                </div>
                <div className=" flex flex-col text-center justify-center items-center">
                  <span className="text-xs text-muted-foreground">
                    {`(Убеждение +3, эффективность чар)`}
                  </span>
                </div>

                <div className="flex mt-6  justify-around items-center">
                  <div className="w-44 text-2xl">Интелект</div>
                  <div>
                    <Input
                      className="  mx-4 w-32 flex justify-center text-center items-center text-4xl"
                      id="PhysInt"
                      name="PhysInt"
                      type="text"
                      defaultValue={charOfPers?.PhysInt ?? "1"}
                    />
                  </div>
                </div>
                <div className=" flex flex-col text-center justify-center items-center">
                  <span className="text-xs text-muted-foreground">
                    {`(Запас маны, +3 Знание, кол-во заклинаний)`}
                  </span>
                </div>

                <div className="flex mt-6  justify-around items-center">
                  <div className=" w-44 text-2xl">Воля</div>
                  <div>
                    <Input
                      className="  mx-4 w-32 flex justify-center text-center items-center text-4xl"
                      id="PhysRzum"
                      name="PhysRzum"
                      type="text"
                      defaultValue={charOfPers?.PhysRzum ?? "1"}
                    />
                  </div>
                </div>
                <div className=" flex flex-col text-center justify-center items-center">
                  <span className="text-xs text-muted-foreground">
                    {`(Эфективность волшебства, Макс. запас энергии, Ментальная устойчивость +3)`}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <Label className="text-lg text-primary">
                  Цветовая схема профиля
                </Label>
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
