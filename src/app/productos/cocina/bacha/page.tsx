import Back from "../../Back";
import ProductItem from "../../ProductItem";
import bachaSimple from "./bacha-simple.avif";
import bachaDoble from "./bacha-doble.avif";
export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Bacha" path="/productos/cocina" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Bacha Simple" image={bachaSimple} clickable={false} />
                <ProductItem name="Bacha Doble" image={bachaDoble} clickable={false} />
            </div>
        </main>
    );
}