import Back from "../../Back";
import bidetFerrumAndina from "./bidet-ferrum-andina.avif";
import bidetCapea from "./bidet-capea.avif";
import ProductItem from "../../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100 mb-6 px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Bidet" path="/productos/banos" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Bidet Ferrum Andina"  image={bidetFerrumAndina} clickable={false} />
                <ProductItem name="Bidet Capea" image={bidetCapea} clickable={false} />
            </div>
        </main>
    );
}