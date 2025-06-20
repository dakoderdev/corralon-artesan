import Back from "../../Back";

import polipropileno from "./polipropileno.png";
import fusionAgua from "./fusion-agua.jpg";
import polietileno from "./polietileno.avif";

import pvc from "./pvc.avif";
import awaduct from "./awaduct.avif";

import fusioGas from "./fusio-gas.avif";
import epoxy from "./epoxy.avif";

import ProductItem from "../../ProductItem";
import { Metadata } from "next";
const title = "Caños y Accesorios";
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Caños y Accesorios de agua, desagué y gas disponibles en Corralón Artesan',
}

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name={title} />
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Agua</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Polipropileno" image={polipropileno} clickable={false}/>
                <ProductItem name="Fusion Agua" image={fusionAgua} clickable={false}/>
                <ProductItem name="Polietileno" image={polietileno} clickable={false}/>
            </div>
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Desagüe</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="PVC" image={pvc} clickable={false}/>
                <ProductItem name="Awaduct" image={awaduct} clickable={false}/>
            </div>
            <h3 className="text-3xl pb-4 w-fit font-bold text-gray-900">Gas</h3>
            <div className="grid pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Fusio Gas" image={fusioGas} clickable={false}/>
                <ProductItem name="Epoxy" image={epoxy} clickable={false}/>
            </div>
        </main>
    );
}