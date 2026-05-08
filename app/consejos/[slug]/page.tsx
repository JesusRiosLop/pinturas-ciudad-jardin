import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articulos, getArticulo } from "@/lib/articulos";
import { ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) return {};
  return {
    title: `${articulo.titulo} | Pinturas Ciudad Jardín`,
    description: articulo.desc,
  };
}

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) notFound();

  return (
    <main className="flex flex-col flex-1">
      <section className="bg-white flex-1">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">

          <Link
            href="/consejos"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-green-900 transition-colors mb-8"
          >
            <ChevronLeft size={16} />
            Volver a consejos
          </Link>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-sm mb-10">
            <Image
              src={articulo.src}
              alt={articulo.titulo}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-green-900 leading-tight mb-4">
            {articulo.titulo}
          </h1>

          <p className="text-lg text-zinc-500 leading-7 mb-10 border-l-4 border-green-900/20 pl-4 italic">
            {articulo.intro}
          </p>

          <div className="space-y-8">
            {articulo.secciones.map((s) => (
              <div key={s.subtitulo}>
                <h2 className="text-xl font-semibold text-zinc-800 mb-3">{s.subtitulo}</h2>
                <p className="text-base text-zinc-600 leading-7">{s.contenido}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-3">
            <p className="font-semibold text-zinc-800">¿Tienes dudas? Consúltanos</p>
            <p className="text-sm text-zinc-500">En Pinturas Ciudad Jardín estaremos encantados de ayudarte.</p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-2.5 rounded-xl bg-green-900 text-white text-sm font-medium border border-green-900 hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Contactar
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
