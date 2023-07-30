interface NavbarProps {
  apiLimitCount: number;
}

import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/MobileSidebar";

const Navbar = ({ apiLimitCount }: NavbarProps) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
