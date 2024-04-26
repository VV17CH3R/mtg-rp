import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Hero from "./components/MainVideoPlayer";
import FooterBar from "./components/FooterBar";
import Link from "next/link";

export default async function Home() {

  const { isAuthenticated } = await getKindeServerSession();

  const isAuth = await isAuthenticated();


  return (
    <>
      <Hero/>
    <section className="flex  justify-center h-[60vh]">
      <div className="absolute bottom-0  items-center w-full px-5 py-12 lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <div className="flex mb-6 justify-center max-w-sm mx-auto">
              {
                isAuth ? (
                  <Link className="w-full" href="/lore">
                    <Button size="lg" className=" w-full">
                      Библиотека
                    </Button>
                  </Link>
                ) : ( 
                  <RegisterLink className="w-full">
                <Button size="lg" className=" w-full">
                  Создать персонажа
                </Button>
              </RegisterLink> 
                )
              }
              
            </div>
            <p className="text-muted-foreground my-6">
              Добро пожаловать дорогой друг в мир Magick The Gathering. <br />
              Игра, которой более 30 лет предлагает тебе приключение, в котором ты сможешь раскрыть потенциал своего воображения.
            </p>
          </div>
        </div>
      </div>
      <FooterBar />
    </section>
    </>
  );
}
