"use server"

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";


export default async function removeItem(name2del: string) {

    await prisma.inventory.delete({
        where: {
          id: name2del 
        }
    })

    revalidatePath("/", "layout");

  };












  
  export async function plusNRG(exp: string, userId: string) {

    const parsed = parseInt(exp) + 1;

    const result = "" + parsed;

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {

        expirience: result
      },
    });

    revalidatePath("/dashboard/settings");

  };





  export async function minNRG(exp: string, userId: string) {

    const parsed = parseInt(exp) - 1;

    const result = "" + parsed;

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {

        expirience: result
      },
    });

    revalidatePath("/dashboard/settings");
    
  };
