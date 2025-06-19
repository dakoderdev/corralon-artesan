import membranas from "./membranas.avif";
import ceramicos from "./ceramicos.avif";
import tanques from "./tanques/tanque-waterplast.webp";
import aberturas from "./aberturas.avif";
import piletasDeCemento from "./piletas-de-cemento.avif";
import cañosYAccesorios from "./canos-y-accesorios/polipropileno.png";

import Back from "../Back";
import ProductItem from "../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Mat. de Construcción" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Membranas" image={membranas} path="construccion/membranas" />
                <ProductItem name="Céramicos" image={ceramicos} path="construccion/ceramicos" />
                <ProductItem name="Tanques" image={tanques} path="construccion/tanques" />
                <ProductItem name="Aberturas" image={aberturas} path="construccion/aberturas" />
                <ProductItem name="Piletas de Cemento" image={piletasDeCemento} path="construccion/piletas-cemento" />
                <ProductItem name="Caños y Accesorios" image={cañosYAccesorios} path="construccion/canos-y-accesorios" />
            </div>
        </main>
    );
}