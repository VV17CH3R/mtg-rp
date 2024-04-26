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
      </div>
        <div className="text-primary text-center py-2  text-2xl font-semibold">
            {data?.name} 
        </div>
    </div>
  );
}
