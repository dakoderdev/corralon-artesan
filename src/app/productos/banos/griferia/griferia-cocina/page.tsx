import sobreMesadaAlegria from "./sobre-mesada-alegria.avif";
import paredPicoMovilAlegria from "./pared-pico-movil-alegria.avif";
import paredExtensibleAlegria from "./pared-extensible-alegria.avif";

import monocomandoDique from "./monocomando-dique.avif";
import monocomandoRenacer from "./monocomando-renacer.avif";
import sobreMesadaVenirPlus from "./sobre-mesada-venir-plus.avif";

import Back from "../../../Back";
import ProductItem from "../../../ProductItem";
import { Metadata } from "next";
const title = "Grifería Cocina";
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Griferias de cocina Oval y Peirano disponibles en Corralón Artesan',
}
export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name={title} />
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Oval</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Sobre Mesada Alegría" image={sobreMesadaAlegria} clickable={false}/>
                <ProductItem name="Pared Pico Movil Alegría" image={paredPicoMovilAlegria} clickable={false}/>
                <ProductItem name="Pared Extensible Alegría" image={paredExtensibleAlegria} clickable={false}/>
            </div>
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Peirano</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Monocomando Dique" image={monocomandoDique} clickable={false}/>
                <ProductItem name="Monocomando Renacer" image={monocomandoRenacer} clickable={false}/>
                <ProductItem name="Sobre Mesada Venir Plus" image={sobreMesadaVenirPlus} clickable={false}/>
            </div>
        </main>
    );
}