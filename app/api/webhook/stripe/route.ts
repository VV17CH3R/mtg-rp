import { stripe } from "@/app/lib/stripe"
import { headers } from "next/headers"
import Stripe from "stripe"
import prisma from "../../../lib/db";

export async function POST(req: Request) {
    const body = await req.text();

    const signature = headers().get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET as string
        )
    } catch (error: unknown) {
        return new Response("webhook error", { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if(event.type === "checkout.session.completed") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        );

        const customerId = String(session.customer)

        const user = await prisma.user.findFirst({
            where: {
                stripeCustromeId: customerId
            }
        });

        if(!user) {
            throw new Error("Пользователь не найден")
        };

        await prisma.subscribtion.create({
            data: {
                stripeSubId: subscription.id,
                userId: user.id,
                startPeriod: subscription.current_period_start,
                endPeriod: subscription.current_period_end,
                status: subscription.status,
                planId: subscription.items.data[0].plan.id,
                interval: String(subscription.items.data[0].plan.interval)
            }
        })
    };

    if(event.type === "invoice.payment_succeeded") {
            const subscribtion = await stripe.subscriptions.retrieve(
                session.subscription as string
            );

            await prisma.subscribtion.update({
                where: {
                    stripeSubId: subscribtion.id
                },
                data: {
                    planId: subscribtion.items.data[0].price.id,
                    startPeriod: subscribtion.current_period_start,
                    endPeriod: subscribtion.current_period_end,
                    status: subscribtion.status,
                }
            })

    };

    return new Response( null, { status: 200 })

}