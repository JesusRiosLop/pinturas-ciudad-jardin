import type { Metadata } from "next";
import Image from "next/image";
import { ThumbsUp, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre nosotros | Pinturas Ciudad Jardín",
  description: "Conoce nuestra historia y valores. Tu tienda de pinturas de barrio en Ciudad Jardín, Málaga.",
};

export default function SobreNosotros() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Contenido principal ── */}
      <section className="bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Texto */}
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-green-900">
                Sobre nosotros
              </h1>
              <p className="text-2xl italic font-light text-green-900/70">
                Nuestra historia, nuestro compromiso
              </p>
              <div className="space-y-3 text-base md:text-lg leading-7 text-zinc-600">
                <p>
                  Pinturas Ciudad Jardín es una tienda de barrio con más de 20 años
                  de experiencia ofreciendo productos de calidad y un trato cercano y honesto.
                </p>
                <p>
                  Nos apasiona lo que hacemos y por eso asesoramos a cada cliente
                  como si fuera parte de nuestra propia casa.
                </p>
                <p>
                  Aquí no eres un número, eres nuestro vecino.
                </p>
              </div>
              <p className="text-green-900/70 italic text-lg font-light pt-1">
                Gracias por confiar en nosotros. ♡
              </p>
            </div>

            {/* Foto */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
              <Image
                src="/generica1.webp"
                alt="Interior de Pinturas Ciudad Jardín"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-zinc-100 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ThumbsUp, stat: "+20 años",          label: "A tu lado" },
              { icon: Users,    stat: "Miles de clientes", label: "Satisfechos" },
              { icon: Heart,    stat: "Pasión por",        label: "lo que hacemos" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={stat} className="space-y-2">
                <div className="flex justify-center">
                  <Icon className="text-green-900" size={40} strokeWidth={1.4} />
                </div>
                <p className="text-xl font-semibold tracking-tight text-green-900">{stat}</p>
                <p className="text-zinc-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
