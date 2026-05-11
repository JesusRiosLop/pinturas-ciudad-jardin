import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardList, LayoutGrid, Paintbrush, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | Pinturas Ciudad Jardín",
  description: "Venta de pinturas, mezcla de colores, asesoramiento y más. Tienda de pinturas en Ciudad Jardín, Málaga.",
};

const servicios = [
  {
    icon: ClipboardList,
    titulo: "Asesoramiento personalizado",
    desc: "Te ayudamos a elegir los productos más adecuados para tu proyecto.",
  },
  {
    icon: LayoutGrid,
    titulo: "Carta de colores",
    desc: "Contamos con sistema tintométrico para crear el color que imaginas.",
  },
  {
    icon: Paintbrush,
    titulo: "Materiales y herramientas",
    desc: "Todo lo que necesitas para preparar y aplicar tus productos.",
  },
  {
    icon: Truck,
    titulo: "Encargos especiales",
    desc: "Si no lo tenemos, te lo conseguimos. Consúltanos sin compromiso.",
  },
];

export default function Servicios() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Cabecera ── */}
      <section className="bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-green-900">
                Servicios
              </h1>
              <p className="text-2xl italic font-light text-green-900/70">
                Mucho más que pintura.
              </p>
              <p className="text-base md:text-lg leading-7 text-zinc-600 max-w-md">
                En Pinturas Ciudad Jardín te ofrecemos todo lo que necesitas
                para que tu proyecto sea un éxito.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
              <Image
                src="/pared_rodillo.png"
                alt="Servicios de pintura"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid de servicios ── */}
      <section className="bg-zinc-100 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {servicios.map(({ icon: Icon, titulo, desc }) => (
              <div key={titulo} className="space-y-3">
                <Icon className="text-green-900" size={40} strokeWidth={1.4} />
                <h3 className="font-semibold tracking-tight text-zinc-800 leading-snug">{titulo}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
