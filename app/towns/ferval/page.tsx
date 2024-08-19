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

        <div className="top-[600px] left-[400px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(600px+70px)] p-3 bg-black/20 left-[calc(400px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Годстрич Плаза
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="top-[640px] left-[480px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(640px+70px)] p-3 bg-black/20 left-[calc(480px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">Университет</DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="top-[680px] left-[80px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(680px+70px)] p-3 bg-black/20 left-[calc(80px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Заросшие Руины
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="top-[310px] left-[222px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(310px+70px)] p-3 bg-black/20 left-[calc(222px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Вход в Катакомбы
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="top-[270px] left-[102px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(270px+70px)] p-3 bg-black/20 left-[calc(102px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Трущебы
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="top-[700px] left-[910px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(700px+70px)] p-3 bg-black/20 left-[calc(910px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Сады Дев
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="top-[300px] left-[500px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(300px+70px)] p-3 bg-black/20 left-[calc(500px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Загадочный Лабиринт
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="top-[200px] left-[880px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(200px+70px)] p-3 bg-black/20 left-[calc(880px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Порт Мерфолков
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="top-[350px] left-[455px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(350px+70px)] p-3 bg-black/20 left-[calc(455px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Сад Карловых
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="top-[402px] left-[445px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(402px+70px)] p-3 bg-black/20 left-[calc(445px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Поместье Карловых
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        

        <div className="top-[30px] left-[45px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Dialog>
            <DialogTrigger>
              <MapPin size={20} className=" z-10 font-extrabold" />
            </DialogTrigger>
            <DialogContent className="top-[calc(30px+70px)] p-3 bg-black/20 left-[calc(45px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
              <DialogHeader>
                <DialogTitle className="text-[12px]">
                  Поля Ракдос
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>



      </div>
    </main>
  );
}
