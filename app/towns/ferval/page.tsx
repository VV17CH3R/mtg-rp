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

export default function FervalMapPage() {
  return (
    <main className="">
      <div className="w-[1200px] relative h-[789px]">
        <Image
          src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/feral.jpg?t=2024-08-08T06%3A22%3A48.227Z"
          width={1200}
          height={789}
          alt="ferval-main-map"
          className="postion absolute -z-10 top-0 bottom-0"
        />
        
{/*         
        <div className="top-[590px] left-[180px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(590px+70px)] p-3 bg-black/20 left-[calc(180px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Порт</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div> */}


      </div>
    </main>
  );
}

