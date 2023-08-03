import { auth } from "@clerk/nextjs"
import prismadb from "./prismadb"

const DAY_IN_MS=86_400_000;
export const checkSubscription=async ()=>{
    const {userId}=auth()

    if(!userId){
        return false
    }

    const userSubscription=await prismadb.userSubscription.findUnique({
        where:{
            userId
        },
        select:{
            stripeSubscriptionId:true,
            stripeCurrentPeriodEnd:true,
            stripeCustomerId:true,
            stripePriceId:true
        }
    })

    if(!userSubscription){
        return false
    }
    //to check if their exist a subscription under the current user and it is actually valid
    //we do this by checking when the user's subscription ends in mllisecond and adding the no of milli seconds in a day
    // if that number is greater than the current timestamp that is the no of milli seconds then the subscription is considered to have expired.

    const isValid=userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()
    return !!isValid
}