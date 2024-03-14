import prisma from "../../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData(userId: string) {
    const data = await prisma.skills.findMany({
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

    if(data.length == 0) {
        await prisma.skills.create({
            data: {        
                id: user?.id as string,
                userId: user?.id as string,
            },
          });
    }


    return (
        <div className="flex flex-col p-3 w-full h-full justify-center">
            {
                data?.map((el, indx) => (
                    <div className="w-full max-w-sm flex flex-col justify-center" key={indx}> 
                        <div className="flex justify-between"> 
                        <h2 className="font-extrabold text-primary">
                            {el.name}
                        </h2>
                        <h3 className="font-semibold">
                            {el.level}
                        </h3>
                        </div>
                        <p className="text-xs">Таланты:</p>
                        <div className='text-sm  p-4 whitespace-pre-wrap'>
                            
                            {el.talants}
                        </div>
                    </div>
                ))
            }
        </div>
    )

}