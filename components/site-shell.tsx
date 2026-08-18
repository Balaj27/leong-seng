"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setOpen(false)}
          aria-label="Leong Seng Auto home"
        >
          <img
            src="/leong-seng-logo.png"
            alt="Leong Seng Auto Co. Sdn. Bhd."
            className="h-11 w-auto"
          />
        </Link>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+60340436834"
          className="hidden items-center gap-2 text-sm font-semibold text-primary lg:flex"
        >
          <Phone className="size-4" /> +60 3 4043 6834
        </a>
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-4">
          <img
            src="/logo-nav.jpeg"
            alt="Leong Seng Auto"
            className="h-12 w-fit"
          />
          <p className="max-w-sm text-sm leading-6 text-primary-foreground/70">
            Trusted automotive and industrial spare parts supplier in Kuala
            Lumpur since 1985.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/50">
            Explore
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/about" className="hover:text-sky">
              About Us
            </Link>
            <Link href="/catalog" className="hover:text-sky">
              Product Catalog
            </Link>
            <Link href="/contact" className="hover:text-sky">
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/50">
            Get in touch
          </p>
          <div className="flex flex-col gap-3 text-sm leading-6 text-primary-foreground/80">
            <a href="tel:+60340436834">+60 3 4043 6834</a>
            <a href="https://wa.me/60173636834">WhatsApp: +60 17 363 6834</a>
            <a href="mailto:sales@leongseng.com.my">sales@leongseng.com.my</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-primary-foreground/50 lg:px-8">
          © {new Date().getFullYear()} Leong Seng Auto Co. Sdn. Bhd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 text-pretty leading-7 text-muted-foreground">
          {copy}
        </p>
      )}
    </div>
  );
}
