interface NavbarProps {
  apiLimitCount: number;
}

import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/MobileSidebar";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async ({ apiLimitCount }: NavbarProps) => {

  const isPro=await checkSubscription();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
