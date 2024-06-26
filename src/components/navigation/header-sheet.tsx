import Image from "next/image";
import logoBlack from "@/assets/logo-black.svg";
import logoWhite from "@/assets/logo-white.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavLinks } from "./navbar";
import { useState } from "react";
import { ConnectWalletButton } from "../ui/connect-button";

export function HeaderSheet() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Sheet
      open={isNavbarOpen}
      onOpenChange={() => setIsNavbarOpen(!isNavbarOpen)}
    >
      <SheetTrigger asChild className="z-[500]">
        <MenuIcon className="rotate-90" />
      </SheetTrigger>
      <SheetContent className=" border-neutral-600">
        <div className="mb-6">
          <Image
            src={logoBlack}
            alt="etherway logo"
            className="block w-40 dark:hidden"
          />
          <Image
            src={logoWhite}
            alt="etherway logo"
            className="hidden w-40 dark:block"
          />
        </div>
        <div className="flex flex-col items-stretch gap-4">
          <NavLinks />
          <ConnectWalletButton />
        </div>
      </SheetContent>
    </Sheet>
  );
}
