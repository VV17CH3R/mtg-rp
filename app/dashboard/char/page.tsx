import { Textarea } from "@/components/ui/textarea";
import prisma from "../../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData(userId: string) {
  const data = await prisma.charsOfPers.findFirst({
    where: {
      userId: userId,
    },
  });

  return data;
}



async function getPersonage(userId: string) {
    const data = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        karma: true,
        expirience: true,
        loyality: true,
        spiritual: true,
        phisical: true,
        look: true,
      },
    });
  
    return data;
  }

export default async function CharactPage() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();


  const data = await getData(user?.id as string);

  const personage = await getPersonage(user?.id as string);

  if (!data) {
    await prisma.charsOfPers.create({
      data: {
        id: user?.id as string,
        userId: user?.id as string,
        userName: user?.given_name as string,
      },
    });
  }

  return (
    <div className="mt-[-15px]">
        <Textarea
                    id="look"
                    rows={16}
                    name="look"
                    defaultValue={personage?.look ?? ""}
                  />
      <div className="grid-cols-4 mt-8 gap-y-3 bg-white/10 p-3 rounded-md grid-rows-5 grid">
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysBody ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">CON</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(крепкость`} <br /> {`нитей тела)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PsyBody ?? "1"}
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysMind ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">MAN</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(чувствительность,`} <br /> {`восприятие)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PsyMind ?? "1"}
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysKrasota ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">CHR</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(зачарование,`} <br /> {`красноречие)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PsyKrasota ?? "1"}
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysInt ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">INT</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(mana-spell pool,`} <br /> {`память)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PsyInt ?? "1"}
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysRzum ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">RAS</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(целеустремленность,`} <br /> {`сила магии)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PsyRazum ?? "1"}
        </div>
      </div>


      <div className="flex items-center mb-8 justify-between">
            <div className="mx-11">
               <p className="text-primary text-2xl">Опыт:</p>  <span className="font-extrabold text-4xl ">{personage?.expirience}</span>
            </div>
            <div className="mx-11">
            <p className="text-primary text-2xl"> Карма: </p> <span className="font-extrabold text-4xl ">{personage?.karma}</span> 
            </div>

      </div>


    </div>
  );
}
