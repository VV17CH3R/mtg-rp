import Image from "next/image";
import { Castle, MapPin, Trees } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function NevenderMapPage() {
  return (
    <main className="">
      <div className="w-[1532px] relative h-[1080px]">
        <Image
          src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/mapOfDisciples%20(1).jpg?t=2024-05-22T02%3A42%3A18.362Z"
          width={2280}
          height={2183}
          alt="main-map"
          className="postion absolute -z-10 top-0 bottom-0"
        />

        <div className="top-[575px] left-[180px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/towns/ikvannir">
            <MapPin size={40} className=" z-10 font-extrabold" />
          </Link>
        </div>

        <div className="top-[575px] left-[280px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">

          <Dialog>
              <DialogTrigger><Trees size={40} className=" z-10 font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[calc(575px+70px)] p-3 bg-black/20 left-[calc(280px+70px)] flex flex-col justify-center items-start absolute w-[150px] h-[50px] ">
                <DialogHeader>
                  <DialogTitle className="text-[12px]">Волшебный лес</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
        </div>

        <div className="top-[880px] left-[515px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/towns/khatlek">
            <Castle size={40} className=" z-10 font-extrabold" />
          </Link>
        </div>

        <div className="top-[559px] left-[433px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/towns/ferval">
            <Castle size={40} className=" z-10 font-extrabold" />
          </Link>
        </div>

        <div className="top-[805px] left-[425px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/towns/betrenburg">
            <MapPin size={20} className=" z-10 font-extrabold" />
          </Link>
        </div>
      </div>
    </main>
  );
}
