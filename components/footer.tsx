import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-14 pb-10 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo */}
        <div className="col-span-2 md:col-span-1 space-y-5">
          <Link href="/">
            <Image src="/logo2.svg" alt="Pinturas Ciudad Jardín" width={120} height={46} style={{ height: "auto" }} />
          </Link>
          <p className="text-green-100/70 text-sm leading-relaxed">
            Tu tienda de pinturas de barrio en Málaga. Calidad y trato cercano desde siempre.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/ciudadjardinpinturas/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-7 h-7 rounded-full bg-white hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
            >
              <span className="text-green-900 group-hover:text-white text-sm font-black transition-colors leading-none">f</span>
            </a>
            <a
              href="https://www.instagram.com/pinturasciudadjardin_malaga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group w-7 h-7 rounded-full overflow-hidden bg-white hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
            >
              <Image src="/instagram.png" alt="Instagram" width={16} height={16} className="brightness-0 group-hover:invert transition-all" />
            </a>
          </div>
        </div>

        {/* Enlace */}
        <div>
          <p className="font-semibold text-sm uppercase tracking-widest mb-5">Enlace</p>
          <ul className="space-y-3 text-sm text-green-100/70">
            {[
              { href: "/",               label: "Inicio" },
              { href: "/sobre-nosotros", label: "Sobre nosotros" },
              { href: "/marcas",         label: "Marcas" },
              { href: "/servicios",      label: "Servicios" },
              { href: "/consejos",       label: "Consejos" },
              { href: "/contacto",       label: "Contacto" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Horario */}
        <div>
          <p className="font-semibold text-sm uppercase tracking-widest mb-5">Horario</p>
          <ul className="space-y-3 text-sm text-green-100/70">
            <li>
              <span className="text-white font-medium block">Lunes a Viernes</span>
              8:00 – 20:00
            </li>
            <li>
              <span className="text-white font-medium block">Sábados</span>
              8:30 – 14:00
            </li>
            <li>
              <span className="text-white font-medium block">Domingo</span>
              Cerrado
            </li>
          </ul>
        </div>

        {/* Dónde estamos */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-semibold text-sm uppercase tracking-widest mb-5">Dónde estamos</p>
          <address className="not-italic text-sm text-green-100/70 space-y-1 leading-relaxed">
            <p>C. Emilio Thuillier, 72</p>
            <p>BAJO-IZDA, Cdad. Jardín</p>
            <p>29014 Málaga</p>
          </address>
          <Link
            href="/contacto"
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white text-sm text-white hover:bg-white hover:text-green-900 transition-all duration-300"
          >
            <MapPin size={14} />
            Ver en mapa
          </Link>
        </div>

      </div>

      <div className="border-t border-white/10 text-center text-xs text-green-100/40 py-5">
        © {new Date().getFullYear()} Pinturas Ciudad Jardín. Todos los derechos reservados.
      </div>
    </footer>
  );
}
