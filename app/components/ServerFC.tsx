"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";


export default async function removeItem(name2del: string) {

    await prisma.inventory.delete({
        where: {
          id: name2del 
        }
    })

    revalidatePath("/", "layout");

  }
