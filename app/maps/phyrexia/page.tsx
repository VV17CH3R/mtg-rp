import Image from "next/image";

export default function PhyrexiaMapPage() {
  return (
    <>
      <div className="flex  justify-center h-[80vh]">
        <div className="">
          <Image
            priority
            src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/Sphere.jpg?t=2024-04-05T04%3A17%3A02.970Z"
            alt="map"
            width={1000}
            height={783}
            className="w-full top-0 left-0 absolute -z-10 h-[783px] object-cover object-center"
          />
          <div className="flex flex-col justify-center  ">
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
