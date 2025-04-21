import { ReactNode } from "react";
import DashboardNav from "../components/DashboardNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "../lib/db";
import { stripe } from "../lib/stripe";

async function getData({
  email,
  id,
  firstName,
  lastName,
  profileImage,
}: {
  email: string;
  id: string;
  firstName: string | undefined | null;
  lastName: string | undefined | null;
  profileImage: string | undefined | null;
}) {
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      stripeCustromeId: true,
    },
  });

  if (!user) {
    const name = `${firstName ?? "Режим инкогнито"} ${lastName ?? ""}`;

    await prisma.user.create({
      data: {
        id: id,
        email: email,
        name: name,
      },
    });
  };

  if(!user?.stripeCustromeId) {
    
    const data = await stripe.customers.create({
      email: email
    });

    await prisma.user.update({
      where: {
        id: id
      },
      data: {
        stripeCustromeId: data.id
      }
    })
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = await getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  await getData({
    email: user.email as string,
    firstName: user.given_name as string,
    id: user.id as string,
    lastName: user.family_name as string,
    profileImage: user.picture,
  });


  return (
    <div className="flex flex-col">
      <div className="mt-2">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
