import Heading from "@/components/Heading"
import { SubscriptionButton } from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription"
import { SettingsIcon } from "lucide-react"

const SettingsPage=async ()=>{

    const isPro=await checkSubscription();
    return(
        <div>
            <Heading
                title="Settings"
                description="Manage Your Account Settings"
                icon={SettingsIcon}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4 ">
                <div className="text-muted-foreground text-sm flex flex-col items-start gap-y-2">
                    {isPro?"You are currently on a pro plan":"You are currently on a free plan"}
                    <SubscriptionButton isPro={isPro}/>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage