import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface text-text-muted border-t border-border py-6 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-xl text-primary">Burnr</h1>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Burnr. All rights reserved.</p>
        </div>

        {/* Footer Nav */}
        <nav className="flex flex-wrap justify-center gap-6 text-">
          <Link href="/email" className="hover:text-text transition">Temp Email</Link>
          <Link href="/phone" className="hover:text-text transition">Temp Phone</Link>
          <Link href="/privacy" className="hover:text-text transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-text transition">Terms & Conditions</Link>
        </nav>
      </div>
    </footer>
  );
}
