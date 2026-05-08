export type Articulo = {
  slug: string;
  titulo: string;
  desc: string;
  src: string;
  intro: string;
  secciones: { subtitulo: string; contenido: string }[];
};

export const articulos: Articulo[] = [
  {
    slug: "elegir-color-habitacion",
    titulo: "Cómo elegir el color perfecto para cada habitación",
    desc: "Pequeños consejos que marcan la diferencia.",
    src: "/habitacion.jpg",
    intro:
      "El color de una habitación lo cambia todo: la sensación de amplitud, la luz, el estado de ánimo. Elegir bien no es cuestión de suerte, sino de conocer unas pocas reglas básicas.",
    secciones: [
      {
        subtitulo: "Ten en cuenta la luz natural",
        contenido:
          "Una habitación orientada al norte recibe luz fría y azulada, por lo que colores cálidos como los beiges, terracotas o amarillos suaves la equilibran. Las habitaciones con luz sur pueden admitir tonos más frescos sin que resulten fríos. Antes de comprar, prueba una muestra en la pared y obsérvala a distintas horas del día.",
      },
      {
        subtitulo: "Adapta el color a la función del espacio",
        contenido:
          "Los dormitorios agradecen colores suaves y apagados — azules grises, verdes salvia, lavandas — que invitan al descanso. Las zonas de trabajo se benefician de tonos neutros que no distraigan. En salones y comedores puedes arriesgarte con colores más saturados o incluso una pared de acento.",
      },
      {
        subtitulo: "El acabado importa tanto como el color",
        contenido:
          "Un mismo color en mate o en satinado da resultados muy distintos. El mate disimula imperfecciones y absorbe la luz, dando un aspecto más íntimo. El satinado o semibrillo refleja más luz y es más fácil de limpiar, ideal para pasillos, cocinas y habitaciones infantiles.",
      },
      {
        subtitulo: "Pide consejo en tienda",
        contenido:
          "En Pinturas Ciudad Jardín te ayudamos a elegir el tono exacto con nuestro sistema tintométrico. Trae una foto de la habitación o muestras de los muebles y lo encontramos juntos.",
      },
    ],
  },
  {
    slug: "errores-comunes-pintar",
    titulo: "Errores comunes al pintar y cómo evitarlos",
    desc: "Evita estos fallos y consigue un resultado profesional.",
    src: "/pared_rodillo.png",
    intro:
      "Pintar parece sencillo, pero hay errores habituales que arruinan el resultado final. Conocerlos de antemano te ahorra tiempo, dinero y disgustos.",
    secciones: [
      {
        subtitulo: "No preparar bien la superficie",
        contenido:
          "El error más frecuente. Una pared con grietas, polvo o humedad no retiene bien la pintura. Lija las zonas rugosas, aplica masilla donde haga falta, deja secar y da una mano de imprimación antes de pintar. Este paso previo marca la diferencia entre un acabado duradero y uno que se pela en meses.",
      },
      {
        subtitulo: "Saltarse la imprimación",
        contenido:
          "La imprimación sella la superficie, mejora la adherencia y evita que manchas antiguas traspasen. En paredes nuevas de yeso o escayola es imprescindible. Si vas de un color muy oscuro a uno muy claro, también la necesitarás para no tener que dar cuatro manos de pintura.",
      },
      {
        subtitulo: "Usar poca pintura o demasiada",
        contenido:
          "Cargar poco el rodillo deja marcas y zonas sin cubrir. Cargarlo en exceso provoca chorreones. La clave está en distribuir bien la pintura: carga el rodillo, escurre el exceso en la bandeja y aplica en movimientos cruzados en M o W antes de repartir en líneas rectas.",
      },
      {
        subtitulo: "No respetar los tiempos de secado",
        contenido:
          "Dar la segunda mano antes de que la primera seque del todo provoca desprendimientos y arrastres. El tiempo entre manos varía bastante según el producto, la temperatura y la humedad ambiental — consulta siempre el envase. Como regla general, a mayor calor y menor humedad, antes seca; en días fríos o húmedos puede necesitar bastante más tiempo del indicado.",
      },
    ],
  },
  {
    slug: "tendencias-colores",
    titulo: "Tendencias en colores para este año",
    desc: "Los colores que están transformando los espacios.",
    src: "/tendencias.jpg",
    intro:
      "El mundo del interiorismo evoluciona cada temporada y propone nuevas paletas que marcan el rumbo de la decoración. Estas son las tendencias que están dominando los espacios actualmente.",
    secciones: [
      {
        subtitulo: "Verdes terrosos y naturales",
        contenido:
          "Los tonos verdes apagados — oliva, salvia, musgo — siguen siendo protagonistas. Conectan con la naturaleza y funcionan tanto en paredes completas como en pequeños acentos. Combinan a la perfección con maderas claras y textiles en beige o crudo.",
      },
      {
        subtitulo: "Neutros cálidos",
        contenido:
          "El blanco puro pierde terreno frente a blancos rotos, cremas y greiges (gris + beige). Aportan calidez sin restar luminosidad y son el fondo perfecto para cualquier estilo decorativo. Son además muy agradecidos en pasillos y zonas de paso.",
      },
      {
        subtitulo: "Azules profundos como color de acento",
        contenido:
          "El azul pizarra, el azul noche y el azul petróleo ganan protagonismo en cocinas y bibliotecas. Una sola pared en este tono da carácter a toda la estancia sin abrumar. Combinado con latón o cobre, el resultado es especialmente elegante.",
      },
      {
        subtitulo: "Terracotas y arcillas",
        contenido:
          "Los tonos tierra — terracota, arcilla, siena — aportan calidez mediterránea y están muy presentes en salones y dormitorios. Funcionan especialmente bien en estancias con mucha luz natural.",
      },
    ],
  },
  {
    slug: "colores-transforman-espacios",
    titulo: "Colores que transforman espacios",
    desc: "Descubre cómo elegir la paleta perfecta para cada ambiente.",
    src: "/espacio.jpg",
    intro:
      "El color tiene el poder de hacer una habitación más grande, más acogedora o más luminosa. Aprender a usarlo como herramienta de diseño transforma por completo cualquier espacio.",
    secciones: [
      {
        subtitulo: "Ampliar visualmente un espacio pequeño",
        contenido:
          "Los colores claros y fríos — blancos, grises pálidos, azules muy suaves — reflejan la luz y hacen que las paredes parezcan retroceder. Pintar techo y paredes en el mismo tono elimina las líneas visuales y multiplica la sensación de altura. Evita los contrastes fuertes en espacios pequeños: dividen y reducen.",
      },
      {
        subtitulo: "Crear calidez y acogimiento",
        contenido:
          "Los tonos cálidos — mostazas, terracotas, verdes apagados, grises con base marrón — envuelven el espacio y lo hacen más íntimo. Son perfectos para salones y comedores donde quieres que la gente se sienta a gusto y no tenga prisa por irse.",
      },
      {
        subtitulo: "Dar altura con el color",
        contenido:
          "Pintar el techo en un tono más claro que las paredes eleva visualmente la estancia. Al contrario, un techo oscuro lo baja y crea una atmósfera más recogida, ideal para dormitorios con techos muy altos.",
      },
      {
        subtitulo: "La pared de acento",
        contenido:
          "Una sola pared en un color más oscuro o saturado que el resto concentra la atención y da profundidad sin necesidad de pintar toda la habitación. Elige la pared principal — la del cabecero, la del sofá, la del fondo — y pon el color ahí.",
      },
    ],
  },
  {
    slug: "pintar-como-profesional",
    titulo: "Consejos para pintar como un profesional",
    desc: "Preparación, herramientas y trucos para un acabado perfecto.",
    src: "/pintando.jpg",
    intro:
      "La diferencia entre un trabajo amateur y uno profesional no está en el talento, sino en la técnica y las herramientas adecuadas. Con estos consejos, tú también puedes conseguir un acabado impecable.",
    secciones: [
      {
        subtitulo: "Elige las herramientas correctas",
        contenido:
          "El grosor del pelo del rodillo importa: para paredes lisas o semilisas, un pelo corto-medio (6-12 mm) da buen acabado; para superficies rugosas o con textura necesitas pelo más largo (18-22 mm) para que la pintura llegue a todos los huecos. Para rincones, marcos y zonas de corte, usa una brocha plana de calidad. No escatimes en herramientas: un rodillo barato deja pelillos y da un acabado mucho peor.",
      },
      {
        subtitulo: "Protege lo que no vas a pintar",
        contenido:
          "Cubre el suelo con plástico o papel de protección y sujétalo con cinta. Usa cinta de carrocero en rodapiés, marcos y enchufes. Retira la cinta antes de que la pintura seque del todo para que no se lleve el filo con ella.",
      },
      {
        subtitulo: "La técnica del corte limpio",
        contenido:
          "Empieza siempre por los bordes con brocha antes de pasar el rodillo. Para líneas perfectas en el techo o junto a marcos, carga poco la brocha y traza la línea con la punta, sin presionar. Con práctica y una buena brocha de corte, la cinta de carrocero se vuelve prescindible.",
      },
      {
        subtitulo: "Número de manos y dilución",
        contenido:
          "En pinturas al agua (plásticas, acrílicas), la primera mano puede diluirse ligeramente con agua según indique el fabricante para mejorar la penetración. Las pinturas alquídicas o de disolvente usan aguarrás u otros diluyentes específicos — nunca agua. Consulta siempre las instrucciones del producto. En la mayoría de los casos, dos manos son suficientes con una pintura de buena calidad.",
      },
    ],
  },
  {
    slug: "protege-exteriores",
    titulo: "Protege y embellece tus exteriores",
    desc: "Productos ideales para cuidar y decorar fachadas y exteriores.",
    src: "/exterior.jpg",
    intro:
      "Las superficies exteriores están expuestas al sol, la lluvia, la humedad y los cambios de temperatura. Elegir los productos adecuados es clave para que la pintura dure y proteja de verdad.",
    secciones: [
      {
        subtitulo: "Pintura de fachada: qué buscar",
        contenido:
          "Una buena pintura de exterior debe ser transpirable — permite que la humedad del muro salga sin que el agua de lluvia entre — y resistente a los rayos UV para que el color no se desvanezca. Las formulaciones con resinas acrílicas ofrecen hoy en día una durabilidad excelente y están disponibles en cualquier color.",
      },
      {
        subtitulo: "Preparación de la fachada",
        contenido:
          "Limpia bien la superficie eliminando algas, moho y suciedad con un hidrolimpiador o cepillo duro. Repara grietas con mortero o masilla de exterior y aplica un fijador si el muro está muy poroso o disgregado. La durabilidad final depende del producto elegido, la calidad de la preparación y las condiciones de exposición — consulta con nosotros qué producto se adapta mejor a tu situación.",
      },
      {
        subtitulo: "Maderas y metales en exterior",
        contenido:
          "Las carpinterías de madera necesitan protección específica: barnices o lasures que penetren en la fibra y la protejan de la humedad sin formar una película que luego se pela. Los metales requieren una imprimación antioxidante antes de la pintura de acabado para evitar la corrosión.",
      },
      {
        subtitulo: "El momento adecuado para pintar",
        contenido:
          "No pintes con temperaturas por debajo de 5°C ni por encima de 35°C, ni cuando haya humedad ambiental alta o lluvia prevista en las siguientes 24 horas. En Málaga lo ideal es hacerlo en primavera o a principios de otoño, evitando las horas de máximo sol en verano.",
      },
    ],
  },
];

export function getArticulo(slug: string): Articulo | undefined {
  return articulos.find((a) => a.slug === slug);
}
