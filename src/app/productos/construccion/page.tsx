import membranas from "./membranas.avif";
import ceramicos from "./ceramicos.avif";
import tanques from "./tanques.avif";
import aberturas from "./aberturas.avif";
import piletasDeCemento from "./piletas-de-cemento.avif";
import cañosYAccesorios from "./caños-y-accesorios.avif";

import Back from "../Back";
import ProductItem from "../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mb-6 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Mat. de Construcción" path="/productos" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Membranas" image={membranas} path="./membranas" />
                <ProductItem name="Ceramicos" image={ceramicos} path="./ceramicos" />
                <ProductItem name="Tanques" image={tanques} path="./tanques" />
                <ProductItem name="Aberturas" image={aberturas} path="./aberturas" />
                <ProductItem name="Piletas de Cemento" image={piletasDeCemento} path="./piletas-de-cemento" />
                <ProductItem name="Caños y Accesorios" image={cañosYAccesorios} path="./canosYAccesorios" />
            </div>
        </main>
    );
}