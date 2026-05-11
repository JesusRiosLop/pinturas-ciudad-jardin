import Link from "next/link";
import Image from "next/image";
import { Users, Award, Home, Leaf, MapPin, PaintBucket } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-28">
        <div className="grid lg:grid-cols-2 items-center gap-12">

          <div className="space-y-7">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-green-900 leading-tight">
              Pinturas<br />Ciudad Jardín
            </h1>
            <p className="text-xl text-zinc-500 italic">
              Tu tienda de barrio desde siempre
            </p>
            <p className="text-base md:text-lg leading-7 text-zinc-600 max-w-md">
              Asesoramiento cercano, productos de calidad y todo lo que necesitas
              para dar color a tus proyectos.
            </p>
            <div className="flex gap-4 flex-wrap pt-2">
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-900 text-white font-medium border border-green-900 transition-all duration-300 hover:bg-white hover:text-green-900"
              >
                <Users size={18} />
                Conócenos
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-green-900 text-green-900 bg-white font-medium transition-all duration-300 hover:bg-green-900 hover:text-white"
              >
                <MapPin size={18} />
                Dónde estamos
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-md group">
            <Image
              src="/fachada.jpg"
              alt="Fachada de Pinturas Ciudad Jardín"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

        </div>
      </section>

      {/* ── CARACTERÍSTICAS ── */}
      <section className="bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {[
              {
                icon: Users,
                title: "Trato cercano",
                desc: "Te asesoramos de forma personalizada para encontrar lo que realmente necesitas.",
              },
              {
                icon: Award,
                title: "Calidad",
                desc: "Trabajamos con las mejores marcas para garantizar resultados profesionales.",
              },
              {
                icon: Home,
                title: "De barrio",
                desc: "Somos parte de Ciudad Jardín. Conocemos nuestros clientes y estamos aquí para ayudarte.",
              },
              {
                icon: Leaf,
                title: "Compromiso",
                desc: "Comprometidos con el medio ambiente y con ofrecer soluciones responsables.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="space-y-3">
                <Icon className="text-green-900" size={32} strokeWidth={1.5} />
                <h3 className="font-semibold tracking-tight text-zinc-800">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAMOS COLOR A TUS IDEAS ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-28">
        <div className="grid lg:grid-cols-2 items-center gap-12">

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
            <Image
              src="/paleta.jpg"
              alt="Paleta de colores"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-green-900 leading-tight">
              Damos color<br />a tus ideas
            </h2>
            <p className="text-base md:text-lg leading-7 text-zinc-600">
              Ya sea renovar tu hogar, pintar tu negocio o iniciar un nuevo proyecto,
              en Pinturas Ciudad Jardín encontrarás productos, herramientas y
              asesoramiento experto.
            </p>
            <Link
              href="/servicios"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-green-900 text-green-900 bg-white font-medium transition-all duration-300 hover:bg-green-900 hover:text-white"
            >
              Descubre nuestros servicios
            </Link>
          </div>

        </div>
      </section>

      {/* ── VEN A CONOCERNOS ── */}
      <section className="bg-green-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-white">
            <PaintBucket size={52} strokeWidth={1.2} className="opacity-60 shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Ven a conocernos</h2>
              <p className="text-green-100/80 mt-1 text-base leading-7">
                Estamos en Ciudad Jardín, cerca de ti.<br />Nos encantará ayudarte.
              </p>
            </div>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-green-900 shrink-0"
          >
            <MapPin size={18} />
            Ver ubicación
          </Link>
        </div>
      </section>

      {/* ── INSPIRACIÓN Y CONSEJOS ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-28">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-green-900">
            Inspiración y consejos
          </h2>
          <p className="text-base md:text-lg leading-7 text-zinc-500 mt-3 max-w-2xl">
            Ideas, tendencias y consejos prácticos para que tus proyectos queden increíbles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              src: "/espacio.jpg",
              title: "Colores que transforman espacios",
              desc: "Descubre cómo elegir la paleta perfecta para cada ambiente.",
            },
            {
              src: "/pintando.jpg",
              title: "Consejos para pintar como un profesional",
              desc: "Preparación, herramientas y trucos para un acabado perfecto.",
            },
            {
              src: "/exterior.jpg",
              title: "Protege y embellece tus exteriores",
              desc: "Productos ideales para cuidar y decorar fachadas y exteriores.",
            },
          ].map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.src}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={post.src === "/espacio.jpg"}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-semibold tracking-tight text-zinc-800 leading-snug">{post.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{post.desc}</p>
                <Link
                  href="/consejos"
                  className="text-sm text-green-900 font-medium hover:text-green-900 transition-colors inline-flex items-center gap-1 pt-1"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
