"use client";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro:boolean
}
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = ({ apiLimitCount,isPro }: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  //to fix the hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;


// cs_test_a12hSGRggjngA7dlG0rett8Nv5Eh7yy7yKV8qJn0Pxg8ywSWTrG4FCDNzn#fidkdWxOYHwnPyd1blpxYHZxWjA0S2RIRDZWQjA3fHFMU0liYW1IVF1LR3BuVWx8YTFfMUNqc090dnNmdkNqbHVtNWx2cDdEVGBiTnwyYDZGPEw8dndmXE5%2FQlU3NGt0dXBgaEc8TG12NEpVNTVuM39xdlY1dScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl:1 Access to fetch at 'https://stripe.com/cookie-settings/enforcement-mode' from origin 'https://checkout.stripe.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.