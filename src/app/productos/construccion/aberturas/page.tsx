import Back from "../../Back";
import ProductItem from "../../ProductItem";

import puertaMarcoMadera from "./puerta-marco-madera.avif";
import puertaMarcoAluminio from "./puerta-marco-aluminio.avif";

import ventanasCorredizas from "./ventanas-corredizas.avif";
import rajas from "./rajas.avif";
import ventiluz from "./ventiluz.avif";
import { Metadata } from "next";
const title = "Aberturas";
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Aberturas de madera y aluminio disponibles en Corralón Artesan',
}
export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name={title} />
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Puertas</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Puerta Placa Marco de Madera 70cm y 80cm" image={puertaMarcoMadera} clickable={false} />
                <ProductItem name="Puerta Placa Marco de Aluminio 70cm y 80cm" image={puertaMarcoAluminio} clickable={false} />
            </div>
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Ventanas</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Ventanas Corredizas 1x1 / 1x1.20 / 1x1.50" image={ventanasCorredizas} clickable={false} />
                <ProductItem name="Rajas 1x0.30 / 1x0,50" image={rajas} clickable={false} />
                <ProductItem name="Ventiluz 0.40x0.60 / 0.40x0.80" image={ventiluz} clickable={false} />
            </div>
        </main>
    );
}