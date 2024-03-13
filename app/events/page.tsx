import prisma from "../lib/db"

import Image from "next/image";

async function getData() {
    const data = await prisma.eventPage.findFirst();
  
    return data;
  }


export default async function EventPage() {

    const data = await getData();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
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