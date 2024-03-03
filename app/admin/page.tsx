import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../components/SubmitButtons";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db"



export default function AdminPage() {

    async function postEvent(formData: FormData) {
        "use server";
    
        const event = formData.get("event") as string;

    
        await prisma.eventPage.update({
            where: {
                id: "32167"
            },
            data: {
                imageUrl: event ?? undefined
            }
        })
    
        revalidatePath("/admin");
    
      }

      async function postItem(formData: FormData) {
        "use server";
    
        const item = formData.get("item") as string;
        const owner = formData.get("owner") as string;

    
        await prisma.inventory.create({
            data: {
              id: item + owner,
              userId: owner,
              name: item
            }
        })
    
        revalidatePath("/admin");
    
      }

      async function postSpell(formData: FormData) {
        "use server";
    
        const item = formData.get("spell") as string;
        const owner = formData.get("owner") as string;

    
        await prisma.spells.create({
            data: {
              id: item + owner,
              userId: owner,
              name: item
            }
        })
    
        revalidatePath("/admin");
    
      }

      async function postSkill(formData: FormData) {
        "use server";
    
        const item = formData.get("skill") as string;
        const owner = formData.get("owner") as string;

    
        await prisma.skills.create({
            data: {
              id: item + owner,
              userId: owner,
              name: item
            }
        })
    
        revalidatePath("/admin");
    
      }

 return (
    <div>
        <form action={postEvent}>
            <CardHeader>
              <CardTitle>Панель администратора</CardTitle>
              {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Добавить ивент</Label>
                  <Input 
                    id="event" 
                    name="event" 
                    type="text" 
                    defaultValue={""}
                    placeholder="Event..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
          </form>

          <form action={postItem}>
            <CardHeader>
              {/* <CardTitle>Панель администратора</CardTitle> */}
              {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Добавить предмет</Label>
                  <Input 
                    id="item" 
                    name="item" 
                    type="text" 
                    defaultValue={""}
                    placeholder="Предмет..."
                  />
                  <Input 
                    id="owner" 
                    name="owner" 
                    type="text" 
                    defaultValue={""}
                    placeholder="Владелец..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
          </form>

          <form action={postSpell}>
            <CardHeader>
              {/* <CardTitle>Панель администратора</CardTitle> */}
              {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Добавить заклинание</Label>
                  <Input 
                    id="spell" 
                    name="spell" 
                    type="text" 
                    defaultValue={""}
                    placeholder="Заклинание..."
                  />
                  <Input 
                    id="owner" 
                    name="owner" 
                    type="text" 
                    defaultValue={""}
                    placeholder="Владелец..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
          </form>

          <form action={postSkill}>
            <CardHeader>
              {/* <CardTitle>Панель администратора</CardTitle> */}
              {/* <CardDescription>Опишите своего персонажа</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label>Добавить навык</Label>
                  <Input 
                    id="skill" 
                    name="skill" 
                    type="text" 
                    defaultValue={""}
                    placeholder="Заклинание..."
                  />
                  <Input 
                    id="owner" 
                    name="owner" 
                    type="text" 
                    defaultValue={""}
                    placeholder="Владелец..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
          </form>
        
    </div>
 )

}