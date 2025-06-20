import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

const title = "Productos"
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Descubre nuestros productos como mesadas, griferías, inodoros y más en Corralón Artesan. Ofrecemos una amplia variedad de productos y promociones.',
}

export default function ProductosPage() {
  const categories = [
    {
      title: "Cocina",
      alt: "Una cocina moderna",
      image: "/imagenes/menu/muebles-de-cocina.jpg",
      href: "/productos/cocina",
      tags: ["Mesada", "Bajo Mesada", "Bacha"],
    },
    {
      title: "Baños",
      alt: "Un inodoro y un bidet",
      image: "/imagenes/baño.jpg",
      href: "/productos/banos",
      tags: ["Inodoro", "Bidet", "Grifería", "Lavatorio", "Deposito"],
    },
    {
      title: "Mat. de Construcción",
      alt: "Ladrillos, cemento y otros materiales de construcción",
      image: "/imagenes/menu/mat-de-construccion.webp",
      href: "/productos/construccion",
      tags: ["Membranas", "Cerámicos", "Tanques", "Aberturas", "Piletas Cemento"],
    },
  ]

  const promos = [
    {
      title: "Promo Baño Ferrum",
      alt: "Un set de baño tipo Ferrum",
      image: "/imagenes/promos/promo-baño-ferrum.png",
      href: "/productos/promos/bano-ferrum",
    },
    {
      title: "Promo Baño Capea",
      alt: "Un set de baño tipo Capea",
      image: "/imagenes/promos/promo-baño-capea.png",
      href: "/productos/promos/bano-capea",
    },
  ]

  return (
    <>
      <main className="font-grotesk min-h-svh bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="px-4 sm:px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 pb-6">Categorías</h2>
                <div className="space-y-4">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.href}
                      className="group flex flex-col sm:flex-row bg-white rounded-3xl md:rounded-2xl hover:shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="relative w-full sm:w-40 h-40 sm:h-auto overflow-hidden sm:rounded-none sm:rounded-l-2xl">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          priority={true}
                          className="w-full h-full object-cover"
                          width={160}
                          height={160}
                          alt={category.alt}
                        />
                      </div>

                      <div className="flex flex-col justify-center gap-3 p-4 sm:p-6  flex-1">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {category.title}
                          </h3>
                          <svg
                            className="w-5 h-5 mt-1.5 text-gray-400 transition duration-300 transform group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          {category.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-200 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="block md:sticky top-24">
                  <div className="bg-white rounded-3xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: "#FF6161" }}>
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Promociones</h3>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Ofertas especiales disponibles</p>
                    </div>

                    <div className="p-4 space-y-4">
                      {promos.map((promo, index) => (
                        <Link
                          key={index}
                          href={promo.href}
                          className="group block relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <div className="relative h-24 overflow-hidden">
                            <Image
                              src={promo.image || "/placeholder.svg"}
                              priority={true}
                              className="w-full h-full object-cover transition-transform duration-500"
                              width={200}
                              height={96}
                              alt={promo.alt}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-2 left-3 right-3">
                              <p className="text-white text-sm font-semibold truncate">{promo.title}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
