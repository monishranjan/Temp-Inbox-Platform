'use client';

import Link from "next/link";
import { Mail, Phone, Home as HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isEmailPage = pathname === "/temp-email";
  const isPhonePage = pathname === "/temp-number";

  return (
    <header className="sticky top-0 z-50 w-full bg-surface opacity-90 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Brand */}
        <h1 className="font-bold text-2xl text-primary">Burnr</h1>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-8">
          {/* Home */}
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition w-full sm:w-auto justify-center
              ${isHomePage
                ? "bg-accent text-text font-medium"
                : "text-text-muted hover:bg-accent hover:text-text"}
            `}
          >
            <HomeIcon size={20} strokeWidth={2} />
            <span className="text-base hidden sm:inline">Home</span>
          </Link>

          {/* Temp Email */}
          <Link
            href="/temp-email"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition w-full sm:w-auto justify-center
              ${isEmailPage
                ? "bg-accent text-text font-medium"
                : "text-text-muted hover:bg-accent hover:text-text"}
            `}
          >
            <Mail size={20} strokeWidth={2} />
            <span className="text-base hidden sm:inline">Temp Email</span>
          </Link>

          {/* Temp Phone */}
          <Link
            href="/temp-number"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition w-full sm:w-auto justify-center
              ${isPhonePage
                ? "bg-accent text-text font-medium"
                : "text-text-muted hover:bg-accent hover:text-text"}
            `}
          >
            <Phone size={20} strokeWidth={2} />
            <span className="text-base hidden sm:inline">Temp Phone</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
