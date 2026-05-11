import type { Metadata } from "next";
import Image from "next/image";
import { Search, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Marcas colaboradoras | Pinturas Ciudad Jardín",
  description: "Trabajamos con Titán, Bruguer, Ureña, Gilmapin y más. Las mejores marcas de pintura en Málaga.",
};

const marcas = [
  { src: "/titan.png",    alt: "Titán" },
  { src: "/soetam.png",   alt: "Soetam" },
  { src: "/bruguer.avif", alt: "Bruguer", logoScale: "scale-125" },
  { src: "/bupisa.png",   alt: "Bupisa" },
  { src: "/urena.png",    alt: "Ureña" },
  { src: "/gilmapin.png", alt: "Gilmapin", logoBg: "bg-sky-500" },
];

export default function Marcas() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Cabecera + logos ── */}
      <section className="bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-28">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-green-900">
            Marcas colaboradoras
          </h1>
          <p className="mt-4 text-base md:text-lg leading-7 text-zinc-500 max-w-xl">
            Trabajamos con las mejores marcas del sector para ofrecerte siempre la máxima calidad.
          </p>

          {/* Grid de logos */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {marcas.map((marca) => (
              <div
                key={marca.alt}
                className="rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex items-center justify-center min-h-[100px]"
              >
                <div className={`relative w-full h-20 ${marca.logoBg ? `${marca.logoBg} rounded-xl p-2` : ""}`}>
                  <Image
                    src={marca.src}
                    alt={marca.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-contain ${marca.logoScale ?? ""}`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Info cards ── */}
      <section className="bg-zinc-100 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full border-2 border-green-900 flex items-center justify-center">
                <Search className="text-green-900" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-green-900 text-lg">¿No encuentras lo que buscas?</h3>
                <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                  Te lo conseguimos. Pregúntanos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full border-2 border-green-900 flex items-center justify-center">
                <Users className="text-green-900" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-green-900 text-lg">Asesoramiento profesional</h3>
                <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                  Te ayudamos a elegir lo mejor para tu proyecto.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
