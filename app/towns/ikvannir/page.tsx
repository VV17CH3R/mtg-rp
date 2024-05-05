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

export default function IkvannirMapPage() {
  return (
    <main className="">
      <div className="w-[1532px] relative h-[1080px]">
        <Image
          src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/Ikvannir.jpg?t=2024-05-01T07%3A20%3A42.147Z"
          width={1532}
          height={1080}
          alt="spb-main-map"
          className="postion absolute -z-10 top-0 bottom-0"
        />
        
        
        <div className="top-[590px] left-[180px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(590px+70px)] p-3 bg-primary/30 left-[calc(180px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
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

        <div className="top-[300px] left-[490px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(300px+70px)] p-3 bg-black/20 left-[calc(490px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Школа</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[240px] left-[550px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(240px+70px)] p-3 bg-black/20/30 left-[calc(550px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Конюшни</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[420px] left-[705px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(420px+70px)] p-3 bg-black/20 left-[calc(705px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Кузнец</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>


        <div className="top-[535px] left-[725px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(535px+70px)]  p-3 bg-black/20 left-[calc(725px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Университет</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[815px] left-[745px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(815px+70px)]  p-3 bg-black/20 left-[calc(745px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Верхний Рынок</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>
        
        <div className="top-[875px] left-[645px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(875px+70px)]  p-3 bg-black/20 left-[calc(645px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Нижний Рынок</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[315px] left-[955px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(315px+70px)]  p-3 bg-black/20 left-[calc(955px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Больница</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[246px] left-[948px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(246px+70px)]  p-3 bg-black/20 left-[calc(948px+70px)] flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Церковь</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[417px] left-[1323px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={20} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(417px+70px)] left-[calc(1323px+70px)]  p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Храм Всесоздателя</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>


        


      </div>
    </main>
  );
}

