"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import removeItem, { minNRG, plusNRG } from "./ServerFC";
import { redirect } from "next/navigation";





export function SubmitButton() {

    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled  className="m-auto w-fit" >
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />Пожалуйста подождите...
                </Button>
            ) : (
                <Button type="submit" className="m-auto w-[200px]">
                    Сохранить
                </Button>
            )}
        </>
    )
}

export function AddItemButton() {

    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled  className="m-auto w-fit" >
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />Пожалуйста подождите...
                </Button>
            ) : (
                <Button type="submit" className="m-auto w-[100px]">
                    Сохранить
                </Button>
            )}
        </>
    )
}

export function StripeSubButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled  className="m-auto w-full" >
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />Пожалуйста подождите...
                </Button>
            ) : (
                <Button type="submit" className="w-full">
                    Подписаться 
                </Button>
            )}
        </>
    )
};


export async function PlusNRGbtn({name2del, userId} : any) {


    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled  className="m-auto w-[50px]" >
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />?
                </Button>
            ) : (
                <Button type="button" className=" rounded-full    h-6 w-6 p-0 " onClick={() => plusNRG(name2del as string, userId as string)}>
                    +
                </Button>
            )}
        </>
    )
};

export async function MinusNRGbtn({name2del, userId} : any) {




    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled  className="m-auto w-[50px]" >
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />?
                </Button>
            ) : (
                <Button type="button" className=" rounded-full    h-6 w-6 p-0 " onClick={() => minNRG(name2del as string, userId as string)}>
                    -
                </Button>
            )}
        </>
    )
}



export function RemoveItemBtn({name2del} : any) {


    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled  className="m-auto w-[50px]" >
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />?
                </Button>
            ) : (
                <Button type="button" className=" rounded-full bg-red-600/50 text-xl   h-6 w-6 p-0 " onClick={() => removeItem(name2del as string)}>
                    X
                </Button>
            )}
        </>
    )
}

