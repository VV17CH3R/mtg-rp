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
          src={data?.frofileImage as string ?? "https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/default-portets.jpg?t=2024-02-26T14%3A15%3A35.839Z" }
          alt="portrets"
          width={420}
          height={420}
          className="h-full w-full object-cover object-center"
        />
        <span className=" absolute text-4xl font-extrabold bg-background/70 left-0 top-0 rounded-br-lg px-3 py-1.5  uppercase tracking-wider text-primary">
          {data?.level}
        </span>
        <span className=" absolute right-0 text-muted-foreground bottom-0 rounded-tl-lg bg-background/70 px-3 py-1.5 text-xs uppercase tracking-wider text-white">
          Опыт: <span className=" text-xl font-bold ">{data?.expirience}</span>
        </span>
        <span className=" absolute text-xs text-muted-foreground left-0 bottom-0 rounded-tr-lg bg-background/70  px-3 py-1.5  uppercase tracking-wider text-white">
          Карма: <span className=" text-xl font-bold ">{data?.karma}</span>
        </span>
      </div>

        <div className="text-primary text-center py-2  text-2xl font-semibold">
            {data?.name} <br /> <span className="text-muted-foreground text-base"> {`(${data?.shortVision})`} </span>
        </div>

      <div className="flex text-sm  justify-center text-center">
        <p>
            {data?.persDescription}
        </p>

      </div>
    </div>
  );
}
