import Back from "../../Back";
import ProductItem from "../../ProductItem";

import piletasDeCemento from "../piletas-de-cemento.avif";
export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Piletas de Cemento" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Piletas de Cemento 60x60x30 y 90x50x30" image={piletasDeCemento} clickable={false} />
            </div>
        </main>
    );
}