import mesada from "./mesada.avif";
// import muebleDeCocina from "./mueble-de-cocina.avif";
import bacha from "./bacha.avif";
import griferia from "../banos/griferia.avif";
// please change the goddamn code
import Back from "../Back";
import ProductItem from "../ProductItem";
import { Metadata } from "next";
const title = "Cocina";
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Descubre nuestros productos de cocina en Corralón Artesan',
}

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name={title} />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Mesada" image={mesada} path="cocina/mesada" />
                <ProductItem name="Bacha" image={bacha} path="cocina/bacha" />
                <ProductItem name="Grifería" image={griferia} path="../productos/banos/griferia" />
            </div>
        </main>
    );
}