import { Button } from "@/components/ui/button";
import Link from "next/link";

import {LandingNavbar} from "@/components/LandingNavbar"
import {LandingHero} from "@/components/LandingHero"
import {LandingContent} from "@/components/LandingContent"
import { LandingFooter } from "@/components/LandingFooter";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar/>
      <LandingHero/>
      <LandingContent/>
      <LandingFooter/>

    </div>
  );
};

export default LandingPage;
