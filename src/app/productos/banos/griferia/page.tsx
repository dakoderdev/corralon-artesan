import Back from "../../Back";
import griferiaBaño from "./griferia-baño.avif";
import griferiaCocina from "./griferia-cocina.jpg";
import ProductItem from "../../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Grifería" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Grifería Baño" path="griferia/griferia-bano" image={griferiaBaño}/>
                <ProductItem name="Grifería Cocina" path="griferia/griferia-cocina" image={griferiaCocina}/>
            </div>
        </main>
    );
}