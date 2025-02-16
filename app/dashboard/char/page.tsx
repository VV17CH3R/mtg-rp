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
            {`(Крепкость нитей тела.`} <br /> {`Мерность тела.)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          x{data?.PsyBody ?? " "}
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysMind ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">MAN</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(чувствительность, восприятие, резкость.`} <br /> {`Навык мгновенных заклинаний.)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          x{data?.PsyMind ?? " "}
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysKrasota ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">CHR</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(Очарование, удачливость,`} <br /> {`навык чар и аур.)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          x{data?.PsyKrasota ?? " "}
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysInt ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">INT</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(колчиество маны, образов, заклинаний,`} <br /> {`артефакты, нвыки Подготовки)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          x{data?.PsyInt ?? " "}
        </div>
        <div className=" flex justify-center items-center text-4xl">
          {data?.PhysRzum ?? "1"}
        </div>
        <div className=" flex flex-col text-center px- justify-center items-center col-span-2">
          <span className="font-bold">RAS</span> <br />{" "}
          <span className="text-sm text-muted-foreground">
            {`(целеустремленность,`} <br /> {`сила Волшебства)`}
          </span>
        </div>
        <div className=" flex justify-center items-center text-4xl">
          x{data?.PsyRazum ?? " "}
        </div>
      </div>


      <div className="flex flex-col items-center mb-8 ">

               <p className="text-primary flex justify-between text-2xl mx-3">Сила:  <span className="font-extrabold ml-6 text-white text-4xl ">{personage?.expirience}</span></p>
               <p className="text-primary flex justify-between text-2xl mx-3"> Аура:  <span className="font-extrabold ml-6 text-white text-4xl ">{personage?.karma}</span> </p>


      </div>


    </div>
  );
}
