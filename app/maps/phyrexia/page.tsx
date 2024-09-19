import { Castle, Tent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PhyrexiaMapPage() {
  return (
    <>
      <div className="flex w-[1000px] justify-center h-[783px]">
        <div className="">
          <Image
            priority
            src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/Sphere.jpg?t=2024-04-05T04%3A17%3A02.970Z"
            alt="map"
            width={1000}
            height={783}
            className="w-[1000px] top-0 left-0 absolute -z-10 h-[783px]  object-cover object-center"
          />
          <div className="top-[280px] left-[215px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
            <Link href="/towns/miran">
              <Tent size={40} className=" z-10 font-extrabold" />
            </Link>
          </div>
          <div className="flex flex-col justify-center mt-16 ">
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Монументальный Фасад
            </div>
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Миррекс
            </div>
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Плавильная Автономия
            </div>
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Охотничий Лабиринт
            </div>
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Хирургический Отсек
            </div>
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Шлаковые Ямы
            </div>
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Чистая Базилика
            </div>
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Сады микосинтов
            </div>
            <div className="text-3xl font-extrabold mt-5 text-black bg-primary/50 px-2 text-center ">
              Семязачаток
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
