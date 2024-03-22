import Image from "next/image";
import prisma from "../lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData(userId: string) {
    const data = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        name: true,
        persDescription: true,
        shortVision: true,
        karma: true,
        level: true,
        expirience: true,
        frofileImage: true,
        look: true,
        loyality: true,
        spiritual: true,
        phisical: true,
      },
    });
  
    return data;
  }

export default async function DashboardPage() {

    const { getUser } = getKindeServerSession();

  const user = await getUser();

  const data = await getData(user?.id as string);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-[320px] h-[320px] overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={data?.frofileImage as string ?? "https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/0ecbc2d3-57c3-425e-9dae-4ff44c64af23.jfif?t=2024-03-14T14%3A30%3A23.274Z" }
          alt="portrets"
          width={420}
          height={420}
          className="h-full w-full object-cover object-center"
        />
        <span className=" absolute text-4xl font-extrabold bg-red-500/80 left-0 top-0 rounded-br-xl px-3 py-1.5  uppercase tracking-wider text-gray-700">
          {data?.phisical ?? "1"}
        </span>
        <span className=" absolute text-4xl font-extrabold bg-blue-500/80 right-0 top-0 rounded-bl-xl px-3 py-1.5  uppercase tracking-wider text-gray-700">
          {data?.spiritual ?? "1"}
        </span>
      </div>

        <div className="text-primary text-center py-2  text-2xl font-semibold">
            {data?.name} <br /> <span className="text-muted-foreground text-base"> {`( ${data?.shortVision ?? " новый персонаж "} )`} </span>
        </div>

      <div className="flex text-sm  justify-center text-center">
        <h3 className="text-primary/70 pr-3 text-xs">Слухи:</h3>
        <p>
            {data?.persDescription ?? " "}
        </p>

      </div>
      <div className="flex text-sm  mt-3 justify-center text-center">
      <h3 className="text-primary/70 pr-3 text-xs">Внешний вид:</h3>
        <p>
            {data?.look ?? " "}
        </p>

      </div>
    </div>
  );
}
