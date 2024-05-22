import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function BetrenburgMapPage() {
  return (
    <main className="">
      <div className="w-[564px] relative h-[705px]">
        <Image
          src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/betrenburg%20(1).jpg?t=2024-05-22T02%3A41%3A59.338Z"
          width={564}
          height={705}
          alt="spb-main-map"
          className="postion absolute -z-10 top-0 bottom-0"
        />
        
        
        <div className="top-[590px] left-[180px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(590px+70px)] p-3 bg-black/20 left-[calc(180px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Порт</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>


        <div className="top-[515px] left-[465px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="bg-black/20 top-[calc(515px+70px)] p-3 left-[calc(465px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Замок Герцога</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        


        


      </div>
    </main>
  );
}

