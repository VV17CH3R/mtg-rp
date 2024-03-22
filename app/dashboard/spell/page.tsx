import prisma from "../../lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";


  async function getData(userId: string) {
      const data = await prisma.spells.findMany({
        where: {
          userId: userId,
        }
      });
    
      return data;
    }


export default async function SpellsPage() {

    const { getUser } = getKindeServerSession();
  
    const user = await getUser();
  
    const data = await getData(user?.id as string);

    if(data.length == 0) {
      await prisma.spells.create({
          data: {        
              id: user?.id as string,
              userId: user?.id as string,
          },
        });
  }


  return (
    <div className="w-full h-full flex justify-center">
        

        <div className=" grid grid-cols-2">
            {
                data.map((el, indx) => (
                    <div key={indx}
                    className="relative mt-[-18px] rounded-2xl 
            
            w-[160px]
            h-[228px] 
            "
                  >
                    <Image
                      className="rounded-2xl absolute -z-10"
                      width={160}
                      height={228}
                      alt="card"
                      src={el.imageURL as string ?? "https://mtgtrade.net/cards/war/193.jpg"}
                    />
                    <div className="flex w-full h-full flex-col justify-between">
                      <div className="bg-background text-center h-[9.5%] w-full top-0">
                        <div className="text-center text-xs font-extrabold text-primary w-full">
                            
                        </div>
                      </div>
            
                      <div className="flex justify-between items-center">
                        <div className="w-[5%] absolute -z-5 top-0 left-0 h-full bg-background"></div>
                        <div className="w-[5%] absolute -z-5 h-full top-0 right-0 bg-background"></div>
                      </div>
            
                      <div className="bg-background text-primary font-extrabold text-xs text-center absolute bottom-0  h-[44%] w-full ">
                             {el.name}
                      </div>
                    </div>
                  </div>
                ))
            }
        </div>




      {/*  */}
    </div>
  );
}