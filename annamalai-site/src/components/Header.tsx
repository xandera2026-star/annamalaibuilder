"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/shared/logo.svg" alt="Annamalai Builders" width={36} height={36} />
          <span className="text-xl font-semibold tracking-tight text-zinc-900">
            Annamalai Builders
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-zinc-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:9841399373"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
          >
            Call 98413 99373
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-amber-500 px-4 py-2 text-sm font-medium text-amber-700 hover:bg-amber-50"
          >
            Get a Quote
          </Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-zinc-300 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="i ri-menu-line" />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 hover:bg-zinc-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:9841399373"
              className="col-span-2 rounded-md bg-amber-500 px-3 py-2 text-center font-medium text-white hover:bg-amber-600"
              onClick={() => setOpen(false)}
            >
              Call 98413 99373
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
