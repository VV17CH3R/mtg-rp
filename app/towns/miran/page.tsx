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

export default function MirranMapPage() {
  return (
    <main className="">
      <div className="w-[1200px] relative h-[1550px]">
        <Image
          src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/resiCamp.jpg?t=2024-09-19T00%3A28%3A56.246Z"
          width={1200}
          height={789}
          alt="ferval-main-map"
          className="postion absolute -z-10 top-0 bottom-0"
        />

        <div className="top-[299px] left-[340px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(299px+70px)] p-3 bg-black/20 left-[calc(340px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">Архивы</DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

       



      </div>
    </main>
  );
}
