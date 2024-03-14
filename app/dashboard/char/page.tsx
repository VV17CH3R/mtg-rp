import prisma from "../../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData(userId: string) {
    const data = await prisma.charsOfPers.findFirst({
      where: {
        userId: userId,
      }
    });
  
    return data;
  }


export default async function CharactPage() {

    const { getUser } = getKindeServerSession();

    const user = await getUser();
  
    const data = await getData(user?.id as string);

    if(!data) {
        await prisma.charsOfPers.create({
            data: {        
                id: user?.id as string,
                userId: user?.id as string,
                userName: user?.given_name as string
            },
          });
    }
    

    return (
        <div className="mt-[-15px]">
            <div className="flex justify-between">
                <div className="text-primary text-2xl font-semibold ml-5">
                    Физические
                </div>
                <div className="text-primary text-2xl font-semibold mr-5">
                    Духовные
                </div>
            </div>
            <div className="grid-cols-4 mt-8 gap-y-3 bg-white/10 p-3 rounded-md grid-rows-5 grid">
                <div className=" flex justify-center items-center text-4xl">
                    {data?.PhysBody ?? "5"}
                </div>
                <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Тело</span> <br /> <span className="text-sm text-muted-foreground">{`(крепкость,`} <br /> {`плотность тела)`}</span>
                </div>
                <div className=" flex justify-center items-center text-4xl">
                    {data?.PhysInt ?? "5"}
                </div>
                <div className=" flex justify-center items-center text-4xl">
                    {data?.PhysMind ?? "5"}
                </div>
                <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Ум</span> <br /> <span className="text-sm text-muted-foreground">{`(рефлексы,`} <br /> {`мышление)`}</span>
                </div>
                <div className=" flex justify-center items-center text-4xl">
                    {data?.PsyMind ?? "5"}
                </div><div className=" flex justify-center items-center text-4xl">
                    {data?.PhysKrasota ?? "5"}
                </div>
                <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Харизма</span> <br /> <span className="text-sm text-muted-foreground">{`(красота тела,`} <br /> {`красота речи)`}</span>
                </div>
                <div className=" flex justify-center items-center text-4xl">
                    {data?.PsyKrasota ?? "5"}
                </div><div className=" flex justify-center items-center text-4xl">
                    {data?.PhysInt ?? "5"}
                </div>
                <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Интеллект</span> <br /> <span className="text-sm text-muted-foreground">{`(практические знания,`} <br /> {`память энерго-потоков)`}</span>
                </div>
                <div className=" flex justify-center items-center text-4xl">
                    {data?.PsyInt ?? "5"}
                </div><div className=" flex justify-center items-center text-4xl">
                    {data?.PhysRzum ?? "5"}
                </div>
                <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
                    <span className="font-bold">Разум</span> <br /> <span className="text-sm text-muted-foreground">{`(целеустремленность,`} <br /> {`терпеливость)`}</span>
                </div>
                <div className=" flex justify-center items-center text-4xl">
                    {data?.PsyRazum ?? "5"}
                </div>
            </div>
        </div>
    )

}