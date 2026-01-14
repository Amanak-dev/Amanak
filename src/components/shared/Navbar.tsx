"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}
export const navigationConfig: NavigationItem[] = [
  { id: "home", label: "الرئيسية", href: "/" },
  { id: "Features", label: "المميزات", href: "/services" },
  { id: "About", label: "مـن نحـن", href: "/about" },
  { id: "Help", label:"دعم مباشر", href: "/help" },
  { id: "Success_stories", label: "قصص النجاح", href: "/equipments" },
  { id: "contact-us", label: "تواصل معنا", href: "/contact-us" },
];

/* -------------------------------------------------------------------------- */
/*                           Navbar component                           */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const pathname = usePathname();

  return (
    <section className="py-4 border-b shadow">
      {/* Desktop Navbar */}
      <DesktopNavbar pathname={pathname} />

      {/* Mobile Navbar */}
      <MobileNavbar pathname={pathname} />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Desktop Navbar                                   */
/* -------------------------------------------------------------------------- */

function DesktopNavbar({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden container items-center justify-between lg:flex">
      {/* Logo */}
      <Button asChild className="font-bold" variant={"ghost"}>
        <Link href={"/"}>
          امانك
          {/* <Image src={"/logo.jpeg"} alt="website logo" width={30} height={30} /> */}
        </Link>
      </Button>

      {/* Links */}
      <NavLinks pathname={pathname} />
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Mobile Navbar                                   */
/* -------------------------------------------------------------------------- */

function MobileNavbar({ pathname }: { pathname: string }) {
  return (
    <nav className="flex container items-center justify-between lg:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="size-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side="top" className="p-5">
          {/* NavLinks */}
          <NavLinks pathname={pathname} />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Navigation Links                               */
/* -------------------------------------------------------------------------- */

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <div>
      <ul className="flex flex-col gap-1 lg:flex-row w-full px-3">
        {navigationConfig.map((item) => (
          <NavLinkItem
            key={item.id}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
        <Button asChild>
          <Link href={"/login"}>تسجيل الدخول</Link>
        </Button>
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             Single Nav Item                                 */
/* -------------------------------------------------------------------------- */

interface NavLinkItemProps {
  item: NavigationItem;
  isActive: boolean;
}

function NavLinkItem({ item, isActive }: NavLinkItemProps) {
  return (
    <li>
      <Button
        variant={"ghost"}
        asChild
        className={cn(
          "font-semibold",
          isActive && "border-b-2 border-border rounded-b-none font-bold text-primary"
        )}
      >
        <Link href={item.href}>{item.label}</Link>
      </Button>
    </li>
  );
}
