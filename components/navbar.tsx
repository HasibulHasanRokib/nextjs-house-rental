"use client";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const pathName = usePathname();

  const user = false;
  const isAdmin = false;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all ">
      <MaxWidthWrapper className="flex h-20 items-center justify-between">
        <div>
          <Link href={"/"}>
            <p className="font-bold text-xl text-gray-700">
              Home<span className="text-primary">Rental</span>
            </p>
          </Link>
        </div>
        {isAdmin ? (
          <>
            <ul>
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link href={"/sing-out"}>Sing out</Link>
              </li>
            </ul>
          </>
        ) : (
          <div className="flex gap-10 items-center">
            {navLinks.map((link) => {
              const isActive =
                pathName === link.href ||
                (link.href !== "/" && pathName.startsWith(link.href));
              return (
                <Link
                  className={
                    isActive ? "font-bold text-primary" : "text-gray-700"
                  }
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}

        {user ? (
          <ul className="flex items-center space-x-3">
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
            <li>
              <Button>Sign out</Button>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center space-x-3">
            <li>
              <Link href={"/auth/register"}>Register</Link>
            </li>
            <li>
              <Link
                className={buttonVariants({
                  variant: "default",
                })}
                href={"/auth/login"}
              >
                Log In
              </Link>
            </li>
          </ul>
        )}
      </MaxWidthWrapper>
    </nav>
  );
}
