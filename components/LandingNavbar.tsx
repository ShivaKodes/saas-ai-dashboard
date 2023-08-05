"use client";
import { Monoton } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Monoton({
  weight: "400",
  subsets: ["latin"],
});
export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        {/* <div className="relative h-8 w-8 mr-4">
          <Image fill alt="logo" src="/genie-logo.webp" />
        </div> */}
        <h1 className={cn("text-5xl font-bold text-white -rotate-3", font.className)}>
          Genie
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
