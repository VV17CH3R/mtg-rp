import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export async function NavBar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="bg-background w-full border-b h-[10vh] flex items-center">
      <div className="container max-w-[3000px] flex items-center justify-between">
        <Link className="font-bold text-xl" href="/">
          <span className="text-primary text-3xl">MTG</span>RP
        </Link>
        <div className="flex ml-12 items-center gap-x-2 md:gap-x-5">
          <ThemeToggle  />
          {await isAuthenticated() ? (
            <UserNav email={user?.email as string} name={user?.given_name as string || "PW"} image={user?.picture as string || "https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/0ecbc2d3-57c3-425e-9dae-4ff44c64af23.jfif"} />
          ) : (
            <div className="flex items-center gap-x-2">
            <LoginLink>
              <Button className="px-2 text-xs" variant="secondary">Регистрация</Button>
            </LoginLink>
            <RegisterLink>
              <Button className="px-2 text-xs">Вход</Button>
            </RegisterLink>
          </div>
          )}
        </div>
      </div>
    </nav>
  );
}
