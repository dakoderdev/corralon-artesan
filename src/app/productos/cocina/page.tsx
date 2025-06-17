import mesada from "./mesada.avif";
import muebleDeCocina from "./mueble-de-cocina.avif";
import bacha from "./bacha.avif";
import griferia from "../banos/griferia.avif";

import Back from "../Back";
import ProductItem from "../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100 mb-6 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Cocina" path="/productos" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Mesada" image={mesada} path="cocina/mesada" />
                <ProductItem name="Mueble de Cocina" image={muebleDeCocina} path="cocina/mueble-de-cocina" />
                <ProductItem name="Bacha" image={bacha} path="cocina/bacha" />
                <ProductItem name="Grifería" image={griferia} path="../productos/banos/griferia" />
            </div>
        </main>
    );
}