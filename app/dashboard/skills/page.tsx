import { AddItemButton } from "@/app/components/SubmitButtons";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";
  
  async function getData(userId: string) {
    const data = await prisma.skills.findMany({
      where: {
        userId: userId,
      },
      select: {
        name: true,
        level: true,
      },
    });
  
    return data;
  }
  
  export default async function SkillsPage() {
    const { getUser } = getKindeServerSession();
  
    const user = await getUser();
  
    const data = await getData(user?.id as string);
  
    async function postData(formData: FormData) {
      "use server";
  
      const name = formData.get("name") as string;
      const level = formData.get("level") as string;
  
      await prisma.skills.create({
          data: {
              id: name + user?.id as string,
              name: name  as string,
              level: level  as string,
              userId: user?.id as string
          }
      })
  
      revalidatePath("/", "layout");
  
    }
  
    return (
      <div className="">
        <div className="flex flex-col items-center justify-between ">
          <Card className="w-full">
            <form action={postData}>
              <CardHeader>
                <CardTitle className="text-center">Таланты</CardTitle>
                {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                    <div>
                    {
                    data.map((el, indx) => ( 
                      <div className="flex mt-3 justify-between" key={indx}> 
                        <div className="flex w-full justify-between">
                          <div className=" text-lg font-semibold text-primary">{el.name} </div>
                          <div className="mr-3 text-lg font-bold">{el.level} </div>
                        </div> 
                      </div> 
                    ))
                  }
                    </div>
  
                  <div className="space-y-1">
                    <Label>Добавить талант</Label>
  
                    <div className="flex justify-center items-center">
                    <Input 
                      id="name" 
                      name="name" 
                      type="text" 
                      placeholder="Талант..."
                    />
                    <Input 
                        className="ml-3 w-[90px]"
                      id="level" 
                      name="level" 
                      type="text" 
                      placeholder="Ур."
                    />
                    </div> 
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                  <AddItemButton />
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    );
  }
  