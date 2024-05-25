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

export default function KhatLekMapPage() {
  return (
    <main className="">
      <div className="w-[1404px] relative h-[1080px]">
        <Image
          src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/khatlek.jpeg?t=2024-05-22T02%3A05%3A52.340Z"
          width={1404}
          height={1080}
          alt="spb-main-map"
          className="postion absolute -z-10 top-0 bottom-0"
        />
        
        
        <div className="top-[652px] left-[170px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(650px+70px)] left-[calc(176px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Муниципалитет</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>


        <div className="top-[780px] left-[240px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(780px+70px)] left-[calc(240px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Поместье Бертрам</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>


        <div className="top-[430px] left-[455px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(430px+70px)] left-[calc(455px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Казармы Шерифов</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[222px] left-[485px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(222px+70px)] left-[calc(485px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">{`"Серебряннный" отель`}</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>


        <div className="top-[380px] left-[1205px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(380px+70px)] left-[calc(1205px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Университетские корпуса</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>


        <div className="top-[310px] left-[855px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(310px+70px)] left-[calc(855px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Торговая улица</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[240px] left-[695px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(240px+70px)] left-[calc(695px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Резиденция Нагиры</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>


        <div className="top-[480px] left-[265px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(480px+70px)] left-[calc(265px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Туманный замок</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[580px] left-[1100px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(580px+70px)] left-[calc(1100px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Гильдия дрессировщиков</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[280px] left-[923px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(280px+70px)] left-[calc(923px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]"> {`Трактир "Слиток серебра"`}</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>

        <div className="top-[350px] left-[700px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

            <Dialog>
              <DialogTrigger><MapPin size={40} className=" z-10 text-black font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(350px+70px)] left-[calc(700px+70px)] p-3 bg-black/20  flex flex-col justify-center items-start absolute w-[200px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]"> Завод Брона</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>





    

        


      </div>
    </main>
  );
}

