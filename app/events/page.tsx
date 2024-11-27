import prisma from "../lib/db";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { SubmitButton } from "../components/SubmitButtons";


async function getData() {
    const data = await prisma.eventPage.findFirst();
  
    return data;
  }


export default async function MainEventPage() {

  async function postEvent(formData: FormData) {
    "use server";

    const id = formData.get("id") as string;

    if(!id) {
      revalidatePath("/events");
      return;
    }

    const event = `https://mtgtrade.net/cards/${id}.jpg`;

    await prisma.eventPage.update({
        where: {
            id: "32167"
        },
        data: {
            imageUrl: event ?? undefined,
        }
    })

    revalidatePath("/events/bloomb");

  }

    const data = await getData();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">

<form action={postEvent}>
            <CardHeader>
              <CardTitle className="text-center w-full">Сюжет</CardTitle>
              {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label className="text-center w-full">Код:</Label>
                  <Input 
                    id="id" 
                    name="id" 
                    type="id" 
                    defaultValue={""}
                    placeholder="Код..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
          </form>
      <div
        className="relative rounded-2xl 

w-[400px]
h-[570px] 
"
      >
        <Image
          className="rounded-2xl absolute -z-10"
          width={400}
          height={600}
          alt="card"
          src={data?.imageUrl as string}
        />
        <div className="flex w-full h-full flex-col justify-between">
          <div className="bg-background flex justify-between px-10 h-[9.5%] w-full top-0">
            <div className="flex text-xl font-extrabold  text-primary justify-start items-center w-full">
                
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-[5%] absolute -z-5 top-0 left-0 h-full bg-background"></div>
            <div className="w-[5%] absolute -z-5 h-full top-0 right-0 bg-background"></div>
          </div>

          <div className="bg-background px-3 text-center text-primary font-bold text-2xl absolute bottom-0  h-[44%] w-full ">
            {data?.eventName ?? ""}
          </div>
        </div>
      </div>



      
    </div>
  );
}




// import { cn } from "@/lib/utils";
// import { Axe, Backpack, Book, PocketKnife, ScrollText, Crosshair, Scale, Skull, SkullIcon, Radar, Leaf, Building } from "lucide-react";
// import Link from "next/link";

// const scenarioItems = [
//   { name: "Беспредельщики пустошей", href: "/events/outlaws", icon: PocketKnife },
//   { name: "Орден порядка", href: "/events/ordinators", icon: Scale },
//   { name: "Новая Фирексия", href: "/events/newphyrexia", icon: Skull},
//   { name: "Старая Фиреския", href: "/events/oldphyrexia", icon: Radar },
//   { name: "Волшебный лес", href: "/events/bloomb", icon: Leaf },
//   { name: "Падение Экванира", href: "/events/duskmoon", icon: Building },
  
// ];

// export default function ScenarioPage() {
//     return (
//         <div className="flex justify-center  items-center ">
//             <nav className="grid mt-4 items-start gap-2">
//             {scenarioItems.map((el, indx) => (
//                 <Link key={indx} href={el.href}>
//                     <span className={cn("group flex items-center justify-between w-full rounded-md px-3  py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground")}>
//                         <el.icon className="mr-5 h-4 w-4" />
//                         <span>{el.name}</span>
//                         <el.icon className="ml-5 h-4 w-4" />
//                     </span>
//                 </Link>
//             ))}
//         </nav>
//         </div>  
//     )
// }