import prisma from "../../lib/db"
import Image from "next/image";


  async function getData() {
      const data = await prisma.allArts.findMany();
    
      return data;
    }


export default async function InventoryPage() {

    const data = await getData();
    

  return (
    <div className="w-full h-full flex justify-center">
        

        <div className=" mt-8   grid grid-cols-2">
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
                      src={el.imageUrl as string ?? ""}
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
                        <div className="w-full">
                            <p className="w-full pt-1">{el.artifactName}</p>
                            <p className="mt-1 px-2 max-w-[150px] md:max-w-[333px] break-words text-[8px] text-gray-500 line-clamp-3">{el.shortDescr}</p>
                        </div>     
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