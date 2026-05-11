import type { Metadata } from "next";
import ArticulosGrid from "@/components/articulos-grid";

export const metadata: Metadata = {
  title: "Consejos e inspiración | Pinturas Ciudad Jardín",
  description: "Guías y trucos para pintar como un profesional. Consejos de tu tienda de pinturas en Málaga.",
};

export default function Consejos() {
  return (
    <main className="flex flex-col flex-1">
      <section className="bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-28">

          <div className="mb-12 space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-green-900">
              Consejos e inspiración
            </h1>
            <p className="text-base md:text-lg leading-7 text-zinc-500 max-w-xl">
              Ideas y consejos para que saques el máximo provecho a tus proyectos.
            </p>
          </div>

          <ArticulosGrid />

        </div>
      </section>
    </main>
  );
}
