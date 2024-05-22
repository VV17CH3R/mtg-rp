import Image from "next/image";
import { Castle, MapPin } from "lucide-react";
import Link from "next/link";

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

        <div className="top-[575px] left-[188px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/towns/ikvannir">
            <MapPin size={20} className=" z-10 font-extrabold" />
          </Link>
        </div>

        <div className="top-[880px] left-[515px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/towns/khatlek">
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
