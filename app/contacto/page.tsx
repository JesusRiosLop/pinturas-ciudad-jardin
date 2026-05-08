import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PhoneLink from "@/components/phone-link";

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14936.181895035455!2d-4.432051874652382!3d36.74555625216882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f64b0be18e67%3A0x261291dcb8e88a82!2sPinturas%20Ciudad%20Jard%C3%ADn!5e1!3m2!1ses!2ses!4v1778158058439!5m2!1ses!2ses";

export const metadata: Metadata = {
  title: "Contacto | Pinturas Ciudad Jardín",
  description: "C. Emilio Thuillier, 72, Málaga. Teléfono: 952 26 88 50. Horario: Lun-Vie 8:00-20:00.",
};

export default function Contacto() {
  return (
    <main className="flex flex-col flex-1">
      <section className="bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28">

          {/* Grid principal */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Columna izquierda: texto + info de contacto */}
            <div className="space-y-10">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-green-900">
                  Contacto
                </h1>
                <p className="text-base md:text-lg leading-7 text-zinc-500 max-w-md">
                  Estamos en el barrio de Ciudad Jardín. Pásate a vernos.
                </p>
              </div>

              {/* Info rows */}
              <div className="space-y-7">

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl border-2 border-green-900/20 flex items-center justify-center">
                    <MapPin className="text-green-900" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800 mb-1">Dirección</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      C. Emilio Thuillier, 72, BAJO-IZDA<br />
                      Cdad. Jardín, 29014 Málaga
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl border-2 border-green-900/20 flex items-center justify-center">
                    <Phone className="text-green-900" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800 mb-1">Teléfono</p>
                    <PhoneLink className="text-sm text-green-900 hover:underline" />
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl border-2 border-green-900/20 flex items-center justify-center">
                    <Mail className="text-green-900" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800 mb-1">Email</p>
                    <p className="text-sm text-zinc-500">Consúltanos en tienda</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl border-2 border-green-900/20 flex items-center justify-center">
                    <Clock className="text-green-900" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800 mb-1">Horario</p>
                    <div className="text-sm text-zinc-500 space-y-1">
                      <p><span className="font-medium text-zinc-700">Lun – Vie:</span> 8:00 – 20:00</p>
                      <p><span className="font-medium text-zinc-700">Sábado:</span> 8:30 – 14:00</p>
                      <p><span className="font-medium text-zinc-700">Domingo:</span> Cerrado</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <Link
                href={`https://maps.google.com/?q=Pinturas+Ciudad+Jardín+Málaga`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-900 text-white text-sm font-medium border border-green-900 hover:bg-white hover:text-green-900 transition-all duration-300"
              >
                <MapPin size={16} />
                Ver en mapa
              </Link>
            </div>

            {/* Columna derecha: mapa + foto */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: 280 }}>
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-sm group" style={{ height: 220 }}>
                <Image
                  src="/fachada.jpg"
                  alt="Fachada de Pinturas Ciudad Jardín"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
