import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { NavBar } from "./components/NavBar";
import prisma from "./lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import FooterBar from "./components/FooterBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTG Словеска",
  description: "Приложение для словестных ролевых игр от Родиона Нараянова.",
};

async function getData(userId: string) {

  if(userId) {
    const data = await prisma.user.findFirst({
      where: {
        id: userId
      },
      select: {
        colorSchema: true
      }
    });
  
    return data;
  }

}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {  getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id as string);

  return (
    <html lang="en">
      <body className={`${inter.className} ${data?.colorSchema ?? "tema-zinc"} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
