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
    <nav className="bg-background border-b h-[10vh] flex items-center">
      <div className="container md:px-[36px] flex items-center justify-between">
        <Link className="font-bold text-xl" href="/">
          <span className="text-primary text-3xl">MTG</span>RP
        </Link>
        <div className="flex ml-12 items-center gap-x-2 md:gap-x-5">
          <ThemeToggle  />
          {await isAuthenticated() ? (
            <UserNav email={user?.email as string} name={user?.given_name as string} image={user?.picture as string} />
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
