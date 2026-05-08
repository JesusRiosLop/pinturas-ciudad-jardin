"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/",               label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/marcas",         label: "Marcas" },
  { href: "/servicios",      label: "Servicios" },
  { href: "/consejos",       label: "Consejos" },
  { href: "/contacto",       label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between gap-6">

        <Link href="/" className="shrink-0">
          <Image src="/logo.svg" alt="Pinturas Ciudad Jardín" width={130} height={50} priority style={{ height: "auto" }} />
        </Link>

        {/* Links escritorio */}
        <nav className="hidden md:flex gap-7 text-base text-zinc-600">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-900 hover:underline transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA escritorio */}
        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl bg-green-900 text-white text-sm font-medium border border-green-900 hover:bg-white hover:text-green-900 transition-all duration-300 shrink-0"
        >
          Visítanos
        </Link>

        {/* Hamburguesa móvil */}
        <button
          className="md:hidden text-zinc-700"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden border-t border-zinc-100 px-4 py-4 flex flex-col gap-4 text-sm text-zinc-700 bg-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-900 transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-green-900 text-white font-medium border border-green-900 hover:bg-white hover:text-green-900 transition-all duration-300"
          >
            Visítanos
          </Link>
        </nav>
      )}
    </header>
  );
}
