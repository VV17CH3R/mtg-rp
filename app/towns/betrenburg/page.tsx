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

        <div className="top-[145px] left-[135px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={30} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="bg-black/20 top-[calc(145px+70px)] p-3 left-[calc(135px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Замок Бетренбург
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="top-[405px] left-[405px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={30} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="bg-black/20 top-[calc(405px+70px)] p-3 left-[calc(405px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Конный завод
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="top-[405px] left-[125px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={30} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="bg-black/20 top-[calc(405px+70px)] p-3 left-[calc(125px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Склады
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="top-[575px] left-[125px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={30} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="bg-black/20 top-[calc(575px+70px)] p-3 left-[calc(125px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Рынок
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>




      </div>
    </main>
  );
}
