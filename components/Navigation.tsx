import { navItems } from "@/lib/constants";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 glass-panel border-t-0 border-x-0 rounded-none border-b-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Site Title */}

          <div className="flex-shrink-0 flex items-center gap-2">
            {/* Snowflake/Glacier style icon */}
            <svg className="w-6 h-6 text-primary animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18m-3-6L6 18M6 6l12 12" />
            </svg>
            <h1 className="text-xl font-serif font-bold text-foreground">
              Drops Teológicos
            </h1>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/admin">
              <Button className="rounded-full bg-gradient-to-r from-[#e0f2fe]/80 to-[#f3e8ff]/80 dark:from-[#0f1524]/80 dark:to-[#1e152e]/80 text-[#0284c7] dark:text-[#7dd3fc] border border-[#0284c7]/20 dark:border-[#7dd3fc]/30 px-5 py-1.5 text-xs font-bold tracking-wide transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] cursor-pointer shadow-[0_4px_12px_rgba(10,14,26,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_25px_rgba(2,132,199,0.18)] dark:hover:shadow-[0_10px_25px_rgba(125,211,252,0.3)] hover:border-[#0284c7]/40 dark:hover:border-[#7dd3fc]/50 backdrop-blur-md">
                Área Restrita
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
