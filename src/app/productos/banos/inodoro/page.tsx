import Back from "../../Back";
import inodoroFerrumAndina from "./inodoro-ferrum-andina.avif";
import inodoroCapea from "./inodoro-capea.avif";
import ProductItem from "../../ProductItem";

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name="Inodoro" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Inodoro Ferrum Andina" image={inodoroFerrumAndina} clickable={false} />
                <ProductItem name="Inodoro Capea" image={inodoroCapea} clickable={false} />
            </div>
        </main>
    );
}