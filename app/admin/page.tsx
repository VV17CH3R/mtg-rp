import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../components/SubmitButtons";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db"



export default function AdminPage() {

    async function postData(formData: FormData) {
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
    
        revalidatePath("/", "layout");
    
      }

 return (
    <div>
        <form action={postData}>
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
                    placeholder="...ивент"
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