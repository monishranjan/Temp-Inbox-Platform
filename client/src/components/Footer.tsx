'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-&-conditions" },
  ];

  return (
    <footer className="bg-surface text-text-muted border-t border-border py-6 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        {/* Brand */}
        <div>
          <p className="text-sm">© {new Date().getFullYear()} Burnr. All rights reserved.</p>
        </div>

        {/* Footer Nav */}
        <nav className="flex flex-wrap justify-center gap-6 text-base">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "hover:text-text transition",
                pathname === link.href && "text-primary font-medium"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}