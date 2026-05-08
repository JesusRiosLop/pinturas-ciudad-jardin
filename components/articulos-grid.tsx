"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { articulos } from "@/lib/articulos";

export default function ArticulosGrid() {
  const [verTodos, setVerTodos] = useState(false);
  const visibles = verTodos ? articulos : articulos.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibles.map((a) => (
          <article key={a.titulo} className="group space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm">
              <Image
                src={a.src}
                alt={a.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold tracking-tight text-zinc-800 leading-snug">
                {a.titulo}
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{a.desc}</p>
              <Link
                href={`/consejos/${a.slug}`}
                className="text-sm text-green-900 font-medium hover:underline inline-flex items-center gap-1 pt-1"
              >
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <button
          onClick={() => setVerTodos(!verTodos)}
          className="inline-flex items-center px-8 py-3 rounded-xl bg-green-900 text-white font-medium border border-green-900 hover:bg-white hover:text-green-900 transition-all duration-300"
        >
          {verTodos ? "Ver menos" : "Ver todos los consejos"}
        </button>
      </div>
    </>
  );
}
