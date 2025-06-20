import Back from "../../Back";
import lavatorioFerrumAndina from "./lavatorio-ferrum-andina.avif";
import lavatorioCapea from "./lavatorio-capea.avif";
import ProductItem from "../../ProductItem";
import { Metadata } from "next";
const title = "Lavatorio";
const titleDefault = title + " | Corralón Artesan | Materiales de Construcción en Tucumán";

export const metadata: Metadata = {
  title: titleDefault,
  description: 'Lavatorios Ferrum Andina y Capea disponibles en Corralón Artesan',
}

export default function Page() {
    return (
        <main className="font-grotesk bg-gradient-to-br from-gray-50 to-gray-100   px-4 sm:px-6 lg:px-16 py-12">
            <Back name={title} />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <ProductItem name="Lavatorio Ferrum Andina"  image={lavatorioFerrumAndina} clickable={false} />
                <ProductItem name="Lavatorio Capea" image={lavatorioCapea} clickable={false} />
            </div>
        </main>
    );
}